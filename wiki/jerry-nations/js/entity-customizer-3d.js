/* ============================================================================
 * JERRY'S NATIONS — Blockbench-Grade WebGL 1.0 3D Citizen & Knight Customizer
 * True Z-Buffer + Alpha-Test Shader + Directional Lighting + SW Z-Buffer Fallback
 * Zero CORS issues on file:/// and GitHub Pages via JN_CUSTOMIZER_B64
 * ========================================================================== */

(function () {
  "use strict";

  const DEG = Math.PI / 180;
  const imgCache = new Map();

  function getSheetSrc(key, subIdx) {
    const B64 = window.JN_CUSTOMIZER_B64;
    if (B64 && B64[key]) {
      return Array.isArray(B64[key]) ? B64[key][subIdx] : B64[key];
    }
    const D = window.JN_CUSTOMIZER_DATA;
    if (D && D.sheets && D.sheets[key]) {
      return Array.isArray(D.sheets[key]) ? D.sheets[key][subIdx] : D.sheets[key];
    }
    return null;
  }

  function loadImg(src, onLoad) {
    if (!src) return null;
    if (imgCache.has(src)) {
      const entry = imgCache.get(src);
      if (!entry.ready && onLoad && !entry.listeners.includes(onLoad)) {
        entry.listeners.push(onLoad);
      }
      return entry;
    }
    const img = new Image();
    const entry = { img, ready: false, glTex: null, rgbaData: null, listeners: [] };
    if (onLoad) entry.listeners.push(onLoad);
    img.onload = () => {
      entry.ready = true;
      const cbs = entry.listeners.slice();
      entry.listeners = [];
      for (const fn of cbs) fn();
    };
    img.src = src;
    imgCache.set(src, entry);
    return entry;
  }

  // ---------------------------------------------------------------------------
  // WebGL 1.0 Renderer (Blockbench-style Z-buffer + entity_alphatest shader)
  // ---------------------------------------------------------------------------
  const VS_SRC = `
    attribute vec3 aPos;
    attribute vec2 aUv;
    attribute vec3 aNorm;
    uniform float uYaw;
    uniform float uPitch;
    uniform float uAspect;
    uniform float uZoom;
    varying vec2 vUv;
    varying vec3 vNorm;
    void main() {
      float cy = cos(uYaw), sy = sin(uYaw);
      float cp = cos(uPitch), sp = sin(uPitch);
      float px = aPos.x;
      float py = aPos.y - 16.0;
      float pz = aPos.z;

      float x1 = px * cy - pz * sy;
      float z1 = px * sy + pz * cy;
      float y2 = py * cp - z1 * sp;
      float z2 = py * sp + z1 * cp;

      float nx1 = aNorm.x * cy - aNorm.z * sy;
      float nz1 = aNorm.x * sy + aNorm.z * cy;
      float ny2 = aNorm.y * cp - nz1 * sp;
      float nz2 = aNorm.y * sp + nz1 * cp;

      float camDist = 56.0 / uZoom;
      float zEye = max(8.0, camDist - z2);
      float f = 2.80;

      gl_Position = vec4(
        (x1 * f / uAspect) / zEye,
        (y2 * f) / zEye,
        -z2 / 40.0,
        1.0
      );
      vUv = aUv;
      vNorm = vec3(nx1, ny2, nz2);
    }
  `;

  const FS_SRC = `
    precision mediump float;
    uniform sampler2D uTex;
    uniform float uFrameOff;
    uniform float uFrameScale;
    uniform float uIsFloor;
    varying vec2 vUv;
    varying vec3 vNorm;
    void main() {
      if (uIsFloor > 0.5) {
        vec2 d = vUv * 2.0 - 1.0;
        float r = length(d);
        if (r > 1.0) discard;
        float a = (1.0 - r) * 0.42;
        gl_FragColor = vec4(0.0, 0.0, 0.0, a);
        return;
      }
      vec2 tc = vec2(
        uFrameOff + clamp(vUv.x, 0.002, 0.998) * uFrameScale,
        clamp(vUv.y, 0.001, 0.999)
      );
      vec4 col = texture2D(uTex, tc);
      if (col.a < 0.5) discard;

      vec3 n = normalize(gl_FrontFacing ? vNorm : -vNorm);
      vec3 keyDir = normalize(vec3(0.42, 0.65, 0.82));
      vec3 fillDir = normalize(vec3(-0.55, 0.25, 0.40));
      float keyL = max(dot(n, keyDir), 0.0);
      float fillL = max(dot(n, fillDir), 0.0);
      float light = min(1.04, 0.54 + 0.36 * keyL + 0.14 * fillL);
      gl_FragColor = vec4(col.rgb * light, 1.0);
    }
  `;

  function compileShader(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(s) || "Shader compile error");
    }
    return s;
  }

  function buildGeometryBuffer(gl, faces) {
    const count = faces.length * 6;
    const pos = new Float32Array(count * 3);
    const uv = new Float32Array(count * 2);
    const norm = new Float32Array(count * 3);
    let pi = 0, ui = 0, ni = 0;

    const pushVert = (p, u, n) => {
      pos[pi++] = p[0]; pos[pi++] = p[1]; pos[pi++] = p[2];
      uv[ui++] = u[0]; uv[ui++] = u[1];
      norm[ni++] = n[0]; norm[ni++] = n[1]; norm[ni++] = n[2];
    };

    for (const f of faces) {
      const pts = f.pts;
      const uvs = f.uvs;
      const n = f.n || [0, 0, 1];
      // Tri 1: 0, 1, 2
      pushVert(pts[0], uvs[0], n);
      pushVert(pts[1], uvs[1], n);
      pushVert(pts[2], uvs[2], n);
      // Tri 2: 0, 2, 3
      pushVert(pts[0], uvs[0], n);
      pushVert(pts[2], uvs[2], n);
      pushVert(pts[3], uvs[3], n);
    }

    const pBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pBuf);
    gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);

    const uBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uBuf);
    gl.bufferData(gl.ARRAY_BUFFER, uv, gl.STATIC_DRAW);

    const nBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nBuf);
    gl.bufferData(gl.ARRAY_BUFFER, norm, gl.STATIC_DRAW);

    return { pBuf, uBuf, nBuf, count };
  }

  function initWebGL(canvas, geometries) {
    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: true, preserveDrawingBuffer: true }) ||
      canvas.getContext("experimental-webgl", { alpha: true, antialias: true, preserveDrawingBuffer: true });
    if (!gl) return null;

    let prog;
    try {
      const vs = compileShader(gl, gl.VERTEX_SHADER, VS_SRC);
      const fs = compileShader(gl, gl.FRAGMENT_SHADER, FS_SRC);
      prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    } catch {
      return null;
    }

    gl.useProgram(prog);
    const loc = {
      aPos: gl.getAttribLocation(prog, "aPos"),
      aUv: gl.getAttribLocation(prog, "aUv"),
      aNorm: gl.getAttribLocation(prog, "aNorm"),
      uYaw: gl.getUniformLocation(prog, "uYaw"),
      uPitch: gl.getUniformLocation(prog, "uPitch"),
      uAspect: gl.getUniformLocation(prog, "uAspect"),
      uZoom: gl.getUniformLocation(prog, "uZoom"),
      uTex: gl.getUniformLocation(prog, "uTex"),
      uFrameOff: gl.getUniformLocation(prog, "uFrameOff"),
      uFrameScale: gl.getUniformLocation(prog, "uFrameScale"),
      uIsFloor: gl.getUniformLocation(prog, "uIsFloor"),
    };

    const bufs = { male: {}, female: {} };
    for (const gender of ["male", "female"]) {
      for (const [layerName, faces] of Object.entries(geometries[gender])) {
        bufs[gender][layerName] = buildGeometryBuffer(gl, faces);
      }
    }

    // Subtle ground shadow pedestal at y = -0.08
    const floorBuf = buildGeometryBuffer(gl, [{
      pts: [[-9.5, -0.08, -9.5], [9.5, -0.08, -9.5], [9.5, -0.08, 9.5], [-9.5, -0.08, 9.5]],
      uvs: [[0, 0], [1, 0], [1, 1], [0, 1]],
      n: [0, 1, 0],
    }]);

    const glTexMap = new WeakMap();

    function ensureTexture(entry) {
      if (!entry || !entry.ready) return null;
      if (glTexMap.has(entry)) return glTexMap.get(entry);
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, entry.img);
      } catch {
        gl.deleteTexture(tex);
        return null;
      }
      glTexMap.set(entry, tex);
      return tex;
    }

    function drawMesh(buf, tex, frameIdx, frameCount, isFloor) {
      if (!buf || (!isFloor && !tex)) return;
      gl.bindBuffer(gl.ARRAY_BUFFER, buf.pBuf);
      gl.enableVertexAttribArray(loc.aPos);
      gl.vertexAttribPointer(loc.aPos, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, buf.uBuf);
      gl.enableVertexAttribArray(loc.aUv);
      gl.vertexAttribPointer(loc.aUv, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, buf.nBuf);
      gl.enableVertexAttribArray(loc.aNorm);
      gl.vertexAttribPointer(loc.aNorm, 3, gl.FLOAT, false, 0, 0);

      if (isFloor) {
        gl.uniform1f(loc.uIsFloor, 1.0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.depthMask(false);
        gl.drawArrays(gl.TRIANGLES, 0, buf.count);
        gl.depthMask(true);
        gl.disable(gl.BLEND);
      } else {
        gl.uniform1f(loc.uIsFloor, 0.0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.uniform1i(loc.uTex, 0);
        gl.uniform1f(loc.uFrameOff, frameIdx / frameCount);
        gl.uniform1f(loc.uFrameScale, 1.0 / frameCount);
        gl.drawArrays(gl.TRIANGLES, 0, buf.count);
      }
    }

    return {
      isWebGL: true,
      render(gender, yawDeg, pitchDeg, zoom, layers) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.disable(gl.CULL_FACE);

        gl.useProgram(prog);
        gl.uniform1f(loc.uYaw, yawDeg * DEG);
        gl.uniform1f(loc.uPitch, pitchDeg * DEG);
        gl.uniform1f(loc.uAspect, canvas.width / canvas.height);
        gl.uniform1f(loc.uZoom, zoom);

        drawMesh(floorBuf, null, 0, 1, true);
        for (const lyr of layers) {
          const tex = ensureTexture(lyr.entry);
          if (!tex) continue;
          drawMesh(bufs[gender][lyr.geoKey], tex, lyr.frameIdx, lyr.frameCount, false);
        }
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Software Pixel Z-Buffer Fallback (used only if WebGL is unavailable)
  // ---------------------------------------------------------------------------
  function getEntryPixels(entry) {
    if (!entry || !entry.ready) return null;
    if (entry.rgbaData) return entry.rgbaData;
    const oc = document.createElement("canvas");
    oc.width = entry.img.naturalWidth || entry.img.width;
    oc.height = entry.img.naturalHeight || entry.img.height;
    const octx = oc.getContext("2d");
    octx.drawImage(entry.img, 0, 0);
    entry.rgbaData = { w: oc.width, h: oc.height, data: octx.getImageData(0, 0, oc.width, oc.height).data };
    return entry.rgbaData;
  }

  function initSoftwareZBuffer(canvas, geometries) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const zBuf = new Float32Array(W * H);
    const imgData = ctx.createImageData(W, H);
    const keyDir = [0.369, 0.571, 0.730];

    return {
      isWebGL: false,
      render(gender, yawDeg, pitchDeg, zoom, layers) {
        const out = imgData.data;
        out.fill(0);
        zBuf.fill(-1e9);

        const yaw = yawDeg * DEG, pitch = pitchDeg * DEG;
        const cy = Math.cos(yaw), sy = Math.sin(yaw);
        const cp = Math.cos(pitch), sp = Math.sin(pitch);
        const camDist = 56.0 / zoom;
        const f = 2.80;

        const proj = (p) => {
          const px = p[0], py = p[1] - 16.0, pz = p[2];
          const x1 = px * cy - pz * sy;
          const z1 = px * sy + pz * cy;
          const y2 = py * cp - z1 * sp;
          const z2 = py * sp + z1 * cp;
          const zEye = Math.max(8.0, camDist - z2);
          const sx = (0.5 + 0.5 * ((x1 * f / (W / H)) / zEye)) * W;
          const sy2 = (0.5 - 0.5 * ((y2 * f) / zEye)) * H;
          return [sx, sy2, z2];
        };

        const rasterTri = (a, b, c, uva, uvb, uvc, pix, frameIdx, light) => {
          const x0 = a[0], y0 = a[1], z0 = a[2];
          const x1 = b[0], y1 = b[1], z1 = b[2];
          const x2 = c[0], y2 = c[1], z2 = c[2];
          const area = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
          if (Math.abs(area) < 1e-4) return;
          const inv = 1 / area;
          const minX = Math.max(0, Math.floor(Math.min(x0, x1, x2)));
          const maxX = Math.min(W - 1, Math.ceil(Math.max(x0, x1, x2)));
          const minY = Math.max(0, Math.floor(Math.min(y0, y1, y2)));
          const maxY = Math.min(H - 1, Math.ceil(Math.max(y0, y1, y2)));
          const fOff = frameIdx * 64;
          const td = pix.data, tw = pix.w, th = pix.h;

          for (let py = minY; py <= maxY; py++) {
            const syc = py + 0.5;
            for (let px = minX; px <= maxX; px++) {
              const sxc = px + 0.5;
              const w0 = ((x1 - sxc) * (y2 - syc) - (x2 - sxc) * (y1 - syc)) * inv;
              const w1 = ((x2 - sxc) * (y0 - syc) - (x0 - sxc) * (y2 - syc)) * inv;
              const w2 = 1 - w0 - w1;
              if (w0 < -0.002 || w1 < -0.002 || w2 < -0.002) continue;
              const z = w0 * z0 + w1 * z1 + w2 * z2;
              const idx = py * W + px;
              if (z <= zBuf[idx]) continue;

              const u = Math.max(0, Math.min(0.9999, w0 * uva[0] + w1 * uvb[0] + w2 * uvc[0]));
              const v = Math.max(0, Math.min(0.9999, w0 * uva[1] + w1 * uvb[1] + w2 * uvc[1]));
              const tx = fOff + Math.min(63, Math.floor(u * 64));
              const ty = Math.min(th - 1, Math.floor(v * th));
              const tOff = (ty * tw + tx) * 4;
              if (td[tOff + 3] < 128) continue;

              zBuf[idx] = z;
              const d = idx * 4;
              out[d] = Math.min(255, Math.round(td[tOff] * light));
              out[d + 1] = Math.min(255, Math.round(td[tOff + 1] * light));
              out[d + 2] = Math.min(255, Math.round(td[tOff + 2] * light));
              out[d + 3] = 255;
            }
          }
        };

        for (const lyr of layers) {
          const pix = getEntryPixels(lyr.entry);
          if (!pix) continue;
          const faces = geometries[gender][lyr.geoKey];
          for (const fObj of faces) {
            const pts = fObj.pts.map(proj);
            const n = fObj.n || [0, 0, 1];
            const nx1 = n[0] * cy - n[2] * sy;
            const nz1 = n[0] * sy + n[2] * cy;
            const ny2 = n[1] * cp - nz1 * sp;
            const nz2 = n[1] * sp + nz1 * cp;
            const dotK = Math.abs(nx1 * keyDir[0] + ny2 * keyDir[1] + nz2 * keyDir[2]);
            const light = Math.min(1.04, 0.56 + 0.44 * dotK);
            const uvs = fObj.uvs;
            rasterTri(pts[0], pts[1], pts[2], uvs[0], uvs[1], uvs[2], pix, lyr.frameIdx, light);
            rasterTri(pts[0], pts[2], pts[3], uvs[0], uvs[2], uvs[3], pix, lyr.frameIdx, light);
          }
        }
        ctx.putImageData(imgData, 0, 0);
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Mount Interactive Customizer UI
  // ---------------------------------------------------------------------------
  function mount(container, initialOpts) {
    const D = window.JN_CUSTOMIZER_DATA;
    const MIL = window.JN_MILITARY_DATA;
    const W = window.FrontierWiki;
    if (!container || !D || !W) return;

    const opts = initialOpts || {};
    const custState = {
      mode: opts.mode === "knight" ? "knight" : "citizen",
      gender: opts.gender === "female" ? "female" : "male",
      skin: 0,
      eyes: 0,
      hairStyle: 0,
      hairColor: 0,
      maleTop: 7,
      maleBottom: 0,
      femaleTop: 0,
      shoes: 0,
      regionFilter: "all",
      ethFilter: "all",
      grade: "knight",
      knightClass: "warrior",
      yaw: typeof opts.yaw === "number" ? opts.yaw : 28,
      pitch: typeof opts.pitch === "number" ? opts.pitch : 8,
      zoom: 1.0,
      autoSpin: false,
    };

    // Optional URL param override (?cust=female,knight,-30 or ?cust=male,citizen,180)
    try {
      const m = /[?&]cust=([^&#]+)/.exec(window.location.search);
      if (m) {
        const parts = decodeURIComponent(m[1]).split(",");
        if (parts[0] === "female" || parts[0] === "male") custState.gender = parts[0];
        if (parts[1] === "knight" || parts[1] === "citizen") custState.mode = parts[1];
        if (parts[2] !== undefined && !Number.isNaN(Number(parts[2]))) custState.yaw = Number(parts[2]);
        if (parts[3] !== undefined && !Number.isNaN(Number(parts[3]))) custState.pitch = Number(parts[3]);
      }
    } catch { /* ignore */ }

    let animId = null;
    let renderer = null;
    let mountedCanvas = null;

    function renderUI() {
      const lang = W.getLang();
      const isFr = lang === "fr";
      const isMale = custState.gender === "male";
      const isKnight = custState.mode === "knight";

      const skinList =
        custState.ethFilter === "all"
          ? Array.from({ length: 32 }, (_, i) => i)
          : D.skinPools[custState.ethFilter] || Array.from({ length: 32 }, (_, i) => i);
      if (!skinList.includes(custState.skin)) custState.skin = skinList[0];

      const allTops = isMale ? D.maleTops : D.femaleTops;
      const topList = allTops.filter((t) => custState.regionFilter === "all" || t.region === custState.regionFilter);
      const curTopKey = isMale ? "maleTop" : "femaleTop";
      if (!topList.some((t) => t.id === custState[curTopKey])) {
        custState[curTopKey] = topList[0] ? topList[0].id : 0;
      }
      const curTopObj = allTops[custState[curTopKey]] || allTops[0];
      const integratedBottom = isMale && curTopObj && curTopObj.integratedBottom;

      const curGrade = MIL?.grades?.find((g) => g.id === custState.grade) || MIL?.grades?.[1];
      const allowedClassIds = curGrade?.classes?.length ? curGrade.classes : [];
      if (allowedClassIds.length && !allowedClassIds.includes(custState.knightClass)) {
        custState.knightClass = allowedClassIds[0];
      }
      const curClassObj = MIL?.classes?.find((c) => c.id === custState.knightClass) || null;

      container.innerHTML = `
        <div class="customizer-grid">
          <div class="customizer-stage-wrap">
            <div class="customizer-stage">
              <canvas id="custCanvas" width="340" height="390"></canvas>
              <div class="stage-hint">${isFr ? "Glisser: 360° • Molette: Zoom" : "Drag: 360° • Wheel: Zoom"}</div>
            </div>
            <div class="cam-bar">
              <button class="oreui-btn oreui-btn-sm" data-cam="0,6">${isFr ? "Face" : "Front"}</button>
              <button class="oreui-btn oreui-btn-sm" data-cam="28,8">3/4</button>
              <button class="oreui-btn oreui-btn-sm" data-cam="90,6">${isFr ? "Profil" : "Side"}</button>
              <button class="oreui-btn oreui-btn-sm" data-cam="180,6">${isFr ? "Dos" : "Back"}</button>
              <button class="oreui-btn oreui-btn-sm ${custState.autoSpin ? "oreui-btn-primary" : ""}" id="btnAutoSpin">${isFr ? "Rotation" : "Spin"}</button>
              <button class="oreui-btn oreui-btn-sm oreui-btn-info" id="btnRandomize">${isFr ? "Aleatoire" : "Random"}</button>
            </div>
            <div class="preset-bar">
              <span class="preset-lbl">${isFr ? "Biomes :" : "Biomes:"}</span>
              ${D.presets.map((p) => `<button class="filter-tab" data-preset="${p.id}">${W.escapeHtml(W.t(p.label))}</button>`).join("")}
            </div>
            ${isKnight && curGrade ? `
              <div class="knight-summary-box">
                <div class="ks-head">${W.escapeHtml(W.t(curGrade.name))}${curClassObj && allowedClassIds.length ? ` — ${W.escapeHtml(W.t(curClassObj.name))}` : ""}</div>
                <div class="ks-stats">
                  <span class="badge badge-green">HP: ${curGrade.hp}</span>
                  <span class="badge badge-gold">Atk: ${curGrade.atk}</span>
                  ${curGrade.minCmdt > 1 ? `<span class="badge badge-purple">Cmdt >= ${curGrade.minCmdt}</span>` : ""}
                  ${curClassObj && allowedClassIds.length ? `<span class="badge">${isFr ? "Cout" : "Cost"}: ${curClassObj.cost}</span>` : ""}
                </div>
                <p class="ks-desc">${W.escapeHtml(curClassObj && allowedClassIds.length ? W.t(curClassObj.combat) : W.t(curGrade.aura))}</p>
              </div>
            ` : ""}
          </div>

          <div class="customizer-controls">
            <div class="ctrl-row ctrl-toggles">
              <div>
                <div class="ctrl-label">${isFr ? "Type d'entite" : "Entity Role"}</div>
                <div class="btn-pair">
                  <button class="filter-tab ${!isKnight ? "active" : ""}" data-mode="citizen">${isFr ? "Citoyen" : "Citizen"}</button>
                  <button class="filter-tab ${isKnight ? "active" : ""}" data-mode="knight">${isFr ? "Chevalier / Soldat" : "Knight / Soldier"}</button>
                </div>
              </div>
              <div>
                <div class="ctrl-label">${isFr ? "Genre" : "Gender"}</div>
                <div class="btn-pair">
                  <button class="filter-tab ${isMale ? "active" : ""}" data-gender="male">${isFr ? "Homme" : "Male"}</button>
                  <button class="filter-tab ${!isMale ? "active" : ""}" data-gender="female">${isFr ? "Femme" : "Female"}</button>
                </div>
              </div>
            </div>

            ${isKnight && MIL ? `
              <div class="ctrl-row ctrl-military-box">
                <div>
                  <div class="ctrl-label">${isFr ? "Grade Militaire (4)" : "Military Grade (4)"}</div>
                  <select class="ore-input" id="selGrade">
                    ${MIL.grades.map((g) => `<option value="${g.id}" ${g.id === custState.grade ? "selected" : ""}>${W.escapeHtml(W.t(g.name))} (${g.hp} HP)</option>`).join("")}
                  </select>
                </div>
                <div>
                  <div class="ctrl-label">${isFr ? "Classe Tactique (9)" : "Soldier Class (9)"}</div>
                  ${allowedClassIds.length ? `
                    <select class="ore-input" id="selClass">
                      ${MIL.classes.filter((c) => allowedClassIds.includes(c.id)).map((c) => `<option value="${c.id}" ${c.id === custState.knightClass ? "selected" : ""}>${W.escapeHtml(W.t(c.name))} (${c.cost})</option>`).join("")}
                    </select>
                  ` : `<div class="ctrl-note">${isFr ? "Grade Officier autonome (pas de sous-classe)" : "Standalone Officer Grade"}</div>`}
                </div>
              </div>
            ` : ""}

            <div class="ctrl-row">
              <div class="ctrl-head">
                <span class="ctrl-label">${isFr ? "Teint de peau" : "Skin Tone"} (<code># ${custState.skin} / 31</code>)</span>
                <div class="mini-pills">
                  ${["all", "white", "bronze", "asian", "black"].map((eth) => `<button class="mini-pill ${custState.ethFilter === eth ? "active" : ""}" data-eth="${eth}">${eth === "all" ? (isFr ? "Tous" : "All") : eth}</button>`).join("")}
                </div>
              </div>
              <div class="swatch-strip">
                ${skinList.map((idx) => `<button class="swatch-btn ${custState.skin === idx ? "active" : ""}" data-skin="${idx}" title="Skin ${idx}" style="background:${D.skinSwatches[idx]};"></button>`).join("")}
              </div>
            </div>

            <div class="ctrl-row ctrl-grid-2">
              <div>
                <div class="ctrl-label">${isFr ? "Yeux" : "Eyes"} (<code>${custState.eyes + 1} / 16</code>)</div>
                <div class="stepper">
                  <button class="oreui-btn oreui-btn-sm" data-step="eyes:-1">&lt;</button>
                  <span>eyes${custState.eyes}</span>
                  <button class="oreui-btn oreui-btn-sm" data-step="eyes:1">&gt;</button>
                </div>
              </div>
              <div>
                <div class="ctrl-label">${isFr ? "Coupe de cheveux" : "Hair Style"} (<code>${custState.hairStyle + 1} / 11</code>)</div>
                <div class="stepper">
                  <button class="oreui-btn oreui-btn-sm" data-step="hairStyle:-1">&lt;</button>
                  <span>Style #${custState.hairStyle + 1}</span>
                  <button class="oreui-btn oreui-btn-sm" data-step="hairStyle:1">&gt;</button>
                </div>
              </div>
            </div>

            <div class="ctrl-row">
              <div class="ctrl-label">${isFr ? "Couleur de cheveux" : "Hair Color"} (<code># ${custState.hairColor} / 34</code> — 385 ${isFr ? "variantes totales" : "total hair combos"})</div>
              <div class="swatch-strip">
                ${D.hairSwatches.map((hex, i) => `<button class="swatch-btn ${custState.hairColor === i ? "active" : ""}" data-hcol="${i}" title="hair${i}" style="background:${hex};"></button>`).join("")}
              </div>
            </div>

            ${!isKnight ? `
              <div class="ctrl-row">
                <div class="ctrl-head">
                  <span class="ctrl-label">${isMale ? (isFr ? "Tenue / Haut regional" : "Regional Top") : (isFr ? "Robe / Tenue" : "Dress / Outfit")} (<code>${topList.length} ${isFr ? "dispos" : "shown"}</code>)</span>
                  <div class="mini-pills">
                    ${[
                      ["all", isFr ? "Toutes" : "All"],
                      ["european", "European"],
                      ...(isMale ? [["mediterranean", "Medit."]] : []),
                      ["asian", "Asian"],
                    ].map(([rid, lbl]) => `<button class="mini-pill ${custState.regionFilter === rid ? "active" : ""}" data-reg="${rid}">${lbl}</button>`).join("")}
                  </div>
                </div>
                <div class="stepper">
                  <button class="oreui-btn oreui-btn-sm" data-step-top="-1">&lt;</button>
                  <select class="ore-input" id="selTop">
                    ${topList.map((t) => `<option value="${t.id}" ${t.id === custState[curTopKey] ? "selected" : ""}>#${t.id} — ${W.escapeHtml(t.name)}</option>`).join("")}
                  </select>
                  <button class="oreui-btn oreui-btn-sm" data-step-top="1">&gt;</button>
                </div>
              </div>

              <div class="ctrl-row ctrl-grid-2">
                <div>
                  <div class="ctrl-label">${isFr ? "Pantalon (Homme)" : "Bottoms"}</div>
                  ${isMale ? (
                    integratedBottom
                      ? `<div class="ctrl-note">${isFr ? "Integre au haut (bottom13 invisible)" : "Integrated into top (slot 13)"}</div>`
                      : `<div class="stepper">
                          <button class="oreui-btn oreui-btn-sm" data-step="maleBottom:-1">&lt;</button>
                          <span>#${custState.maleBottom} ${W.escapeHtml(D.maleBottoms[custState.maleBottom]?.name || "")}</span>
                          <button class="oreui-btn oreui-btn-sm" data-step="maleBottom:1">&gt;</button>
                        </div>`
                  ) : `<div class="ctrl-note">${isFr ? "Robe complete (Femme)" : "Full dress (Female)"}</div>`}
                </div>
                <div>
                  <div class="ctrl-label">${isFr ? "Chaussures" : "Shoes"} (<code>${custState.shoes + 1} / 4</code>)</div>
                  <div class="stepper">
                    <button class="oreui-btn oreui-btn-sm" data-step="shoes:-1">&lt;</button>
                    <span>shoes${custState.shoes + 1}</span>
                    <button class="oreui-btn oreui-btn-sm" data-step="shoes:1">&gt;</button>
                  </div>
                </div>
              </div>
            ` : `
              <div class="ctrl-row">
                <div class="ctrl-note">${isFr ? "En mode Chevalier, l'armure de plates remplace les vetements civils tout en conservant le visage, les yeux et la coiffure du citoyen." : "In Knight mode, steel plate armor replaces civilian outfits while keeping the citizen's exact face, eyes, and hairstyle."}</div>
              </div>
            `}
          </div>
        </div>
      `;

      const canvas = container.querySelector("#custCanvas");
      if (canvas && canvas !== mountedCanvas) {
        mountedCanvas = canvas;
        renderer = initWebGL(canvas, D.geometries) || initSoftwareZBuffer(canvas, D.geometries);
      }

      wireControls(skinList, topList, curTopKey);
      drawCharacter();
    }

    function drawCharacter() {
      if (!renderer || !mountedCanvas || !document.body.contains(mountedCanvas)) return;
      const isMale = custState.gender === "male";
      const gender = isMale ? "male" : "female";
      const sc = D.sheetCounts || {};
      const redraw = () => drawCharacter();

      const layers = [];
      const skinKey = isMale ? "male_skins" : "female_skins";
      layers.push({
        geoKey: "skin",
        entry: loadImg(getSheetSrc(skinKey), redraw),
        frameIdx: custState.skin,
        frameCount: sc[skinKey] || 32,
      });

      const eyesKey = isMale ? "male_eyes" : "female_eyes";
      layers.push({
        geoKey: "eyes",
        entry: loadImg(getSheetSrc(eyesKey), redraw),
        frameIdx: custState.eyes,
        frameCount: sc[eyesKey] || 16,
      });

      if (custState.mode === "knight") {
        const armorKey = isMale ? "knight_armor_male" : "knight_armor_female";
        layers.push({
          geoKey: "armor",
          entry: loadImg(getSheetSrc(armorKey), redraw),
          frameIdx: 0,
          frameCount: 1,
        });
      } else {
        if (isMale) {
          const topObj = D.maleTops[custState.maleTop];
          const botIdx = topObj?.integratedBottom ? 13 : custState.maleBottom;
          if (botIdx < 13) {
            layers.push({
              geoKey: "bottom",
              entry: loadImg(getSheetSrc("male_bottoms"), redraw),
              frameIdx: botIdx,
              frameCount: sc.male_bottoms || 14,
            });
          }
          layers.push({
            geoKey: "top",
            entry: loadImg(getSheetSrc("male_tops"), redraw),
            frameIdx: custState.maleTop,
            frameCount: sc.male_tops || 34,
          });
        } else {
          layers.push({
            geoKey: "top",
            entry: loadImg(getSheetSrc("female_tops"), redraw),
            frameIdx: custState.femaleTop,
            frameCount: sc.female_tops || 45,
          });
        }
        const shoeKey = isMale ? "male_shoes" : "female_shoes";
        layers.push({
          geoKey: "shoes",
          entry: loadImg(getSheetSrc(shoeKey), redraw),
          frameIdx: custState.shoes,
          frameCount: sc[shoeKey] || 4,
        });
      }

      const hairKey = isMale ? "male_hair" : "female_hair";
      layers.push({
        geoKey: "hair",
        entry: loadImg(getSheetSrc(hairKey, custState.hairStyle), redraw),
        frameIdx: custState.hairColor,
        frameCount: sc[hairKey] || 35,
      });

      renderer.render(gender, custState.yaw, custState.pitch, custState.zoom, layers);
    }

    function wireControls(skinList, topList, curTopKey) {
      const canvas = container.querySelector("#custCanvas");
      if (canvas) {
        let dragging = false, lastX = 0, lastY = 0;
        const onMove = (clientX, clientY) => {
          if (!dragging) return;
          custState.autoSpin = false;
          custState.yaw = (custState.yaw + (clientX - lastX) * 0.8) % 360;
          custState.pitch = Math.max(-35, Math.min(45, custState.pitch + (clientY - lastY) * 0.45));
          lastX = clientX; lastY = clientY;
          drawCharacter();
        };
        canvas.addEventListener("mousedown", (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; });
        window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
        window.addEventListener("mouseup", () => { dragging = false; });
        canvas.addEventListener("touchstart", (e) => { if (e.touches[0]) { dragging = true; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; } }, { passive: true });
        canvas.addEventListener("touchmove", (e) => { if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
        canvas.addEventListener("touchend", () => { dragging = false; });
        canvas.addEventListener("wheel", (e) => {
          e.preventDefault();
          custState.zoom = Math.max(0.75, Math.min(1.6, custState.zoom - e.deltaY * 0.001));
          drawCharacter();
        }, { passive: false });
      }

      container.querySelectorAll("[data-cam]").forEach((b) =>
        b.addEventListener("click", () => {
          custState.autoSpin = false;
          const [y, p] = b.getAttribute("data-cam").split(",").map(Number);
          custState.yaw = y; custState.pitch = p;
          drawCharacter();
        })
      );

      const spinBtn = container.querySelector("#btnAutoSpin");
      if (spinBtn) {
        spinBtn.addEventListener("click", () => {
          custState.autoSpin = !custState.autoSpin;
          renderUI();
        });
      }

      const randBtn = container.querySelector("#btnRandomize");
      if (randBtn) {
        randBtn.addEventListener("click", () => {
          custState.skin = skinList[Math.floor(Math.random() * skinList.length)];
          custState.eyes = Math.floor(Math.random() * 16);
          custState.hairStyle = Math.floor(Math.random() * 11);
          custState.hairColor = Math.floor(Math.random() * 35);
          if (custState.gender === "male") {
            custState.maleTop = topList[Math.floor(Math.random() * topList.length)]?.id ?? 0;
            custState.maleBottom = Math.floor(Math.random() * 13);
          } else {
            custState.femaleTop = topList[Math.floor(Math.random() * topList.length)]?.id ?? 0;
          }
          custState.shoes = Math.floor(Math.random() * 4);
          renderUI();
        });
      }

      container.querySelectorAll("[data-preset]").forEach((b) =>
        b.addEventListener("click", () => {
          const p = D.presets.find((x) => x.id === b.getAttribute("data-preset"));
          if (!p) return;
          custState.ethFilter = p.eth;
          custState.regionFilter = p.region;
          const pool = D.skinPools[p.eth] || [0];
          custState.skin = pool[Math.floor(Math.random() * pool.length)];
          const rTops = (custState.gender === "male" ? D.maleTops : D.femaleTops).filter((t) => t.region === p.region);
          if (rTops.length) custState[curTopKey] = rTops[Math.floor(Math.random() * rTops.length)].id;
          renderUI();
        })
      );

      container.querySelectorAll("[data-mode]").forEach((b) =>
        b.addEventListener("click", () => { custState.mode = b.getAttribute("data-mode"); renderUI(); })
      );
      container.querySelectorAll("[data-gender]").forEach((b) =>
        b.addEventListener("click", () => { custState.gender = b.getAttribute("data-gender"); renderUI(); })
      );
      container.querySelectorAll("[data-eth]").forEach((b) =>
        b.addEventListener("click", () => { custState.ethFilter = b.getAttribute("data-eth"); renderUI(); })
      );
      container.querySelectorAll("[data-reg]").forEach((b) =>
        b.addEventListener("click", () => { custState.regionFilter = b.getAttribute("data-reg"); renderUI(); })
      );
      container.querySelectorAll("[data-skin]").forEach((b) =>
        b.addEventListener("click", () => { custState.skin = Number(b.getAttribute("data-skin")); renderUI(); })
      );
      container.querySelectorAll("[data-hcol]").forEach((b) =>
        b.addEventListener("click", () => { custState.hairColor = Number(b.getAttribute("data-hcol")); renderUI(); })
      );

      const limits = { eyes: 16, hairStyle: 11, shoes: 4, maleBottom: 13 };
      container.querySelectorAll("[data-step]").forEach((b) =>
        b.addEventListener("click", () => {
          const [key, deltaStr] = b.getAttribute("data-step").split(":");
          const max = limits[key] || 1;
          custState[key] = (custState[key] + Number(deltaStr) + max) % max;
          renderUI();
        })
      );

      container.querySelectorAll("[data-step-top]").forEach((b) =>
        b.addEventListener("click", () => {
          const d = Number(b.getAttribute("data-step-top"));
          const idx = topList.findIndex((t) => t.id === custState[curTopKey]);
          const next = topList[(idx + d + topList.length) % topList.length];
          if (next) custState[curTopKey] = next.id;
          renderUI();
        })
      );

      const selTop = container.querySelector("#selTop");
      if (selTop) selTop.addEventListener("change", () => { custState[curTopKey] = Number(selTop.value); renderUI(); });

      const selGrade = container.querySelector("#selGrade");
      if (selGrade) selGrade.addEventListener("change", () => { custState.grade = selGrade.value; renderUI(); });

      const selClass = container.querySelector("#selClass");
      if (selClass) selClass.addEventListener("change", () => { custState.knightClass = selClass.value; renderUI(); });

      if (animId) cancelAnimationFrame(animId);
      if (custState.autoSpin) {
        const stepSpin = () => {
          if (!custState.autoSpin || !document.body.contains(container)) return;
          custState.yaw = (custState.yaw + 0.85) % 360;
          drawCharacter();
          animId = requestAnimationFrame(stepSpin);
        };
        animId = requestAnimationFrame(stepSpin);
      }
    }

    renderUI();
  }

  window.JNEntityCustomizer = { mount };
})();
