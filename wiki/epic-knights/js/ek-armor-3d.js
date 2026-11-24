/* ============================================================================
 * EPIC KNIGHTS FRONTIER — Interactive 360 WebGL 1.0 Armor & Set Viewer
 * Renders any 1 to 4 armor pieces on a dark knight mannequin from EK_GEOMETRIES
 * Cleanly falls back to pre-rendered 3D PNG if file:/// CORS blocks texImage2D
 * ========================================================================== */
(function () {
  "use strict";

  const DEG = Math.PI / 180;
  const texImgCache = new Map();

  function loadTexImage(url, cb) {
    if (!url) return null;
    if (texImgCache.has(url)) {
      const e = texImgCache.get(url);
      if (!e.ready && !e.failed && cb) e.wait.add(cb);
      return e;
    }
    const img = new Image();
    const entry = { url, img, ready: false, failed: false, glTex: null, wait: new Set(cb ? [cb] : []) };
    img.onload = () => {
      entry.ready = true;
      const list = Array.from(entry.wait);
      entry.wait.clear();
      for (const fn of list) fn(entry);
    };
    img.onerror = () => {
      entry.failed = true;
      entry.wait.clear();
    };
    img.src = url;
    texImgCache.set(url, entry);
    return entry;
  }

  function makeMannequinGeo() {
    return {
      tw: 64, th: 32,
      b: [
        { n: "head", p: [0, 24, 0], c: [{ o: [-4, 24, -4], s: [8, 8, 8], uv: [0, 0] }] },
        { n: "body", p: [0, 24, 0], c: [{ o: [-4, 12, -2], s: [8, 12, 4], uv: [16, 16] }] },
        { n: "rightArm", p: [-5, 22, 0], c: [{ o: [-8, 12, -2], s: [4, 12, 4], uv: [40, 16] }] },
        { n: "leftArm", p: [5, 22, 0], m: 1, c: [{ o: [4, 12, -2], s: [4, 12, 4], uv: [40, 16] }] },
        { n: "rightLeg", p: [-1.9, 12, 0], c: [{ o: [-4, 0, -2], s: [4, 12, 4], uv: [0, 16] }] },
        { n: "leftLeg", p: [1.9, 12, 0], m: 1, c: [{ o: [0, 0, -2], s: [4, 12, 4], uv: [0, 16] }] },
      ],
    };
  }

  function makeMannequinCanvas() {
    const c = document.createElement("canvas");
    c.width = 64; c.height = 32;
    const ctx = c.getContext("2d");
    const id = ctx.createImageData(64, 32);
    const d = id.data;
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 64; x++) {
        const i = (y * 64 + x) * 4;
        const ch = ((x + y) & 1) ? 3 : -3;
        const isFace = x >= 8 && x < 16 && y >= 8 && y < 16;
        const isEyes = isFace && y === 11 && (x === 9 || x === 10 || x === 13 || x === 14);
        if (isEyes) {
          d[i] = 79; d[i + 1] = 142; d[i + 2] = 247; d[i + 3] = 255;
        } else {
          const b = isFace ? 46 : 36;
          d[i] = b + ch; d[i + 1] = b + 3 + ch; d[i + 2] = b + 9 + ch; d[i + 3] = 255;
        }
      }
    }
    ctx.putImageData(id, 0, 0);
    return c;
  }

  function rotateAround(pt, pivot, rot) {
    let x = pt[0] - pivot[0], y = pt[1] - pivot[1], z = pt[2] - pivot[2];
    const rx = -(rot[0] || 0) * DEG, ry = (rot[1] || 0) * DEG, rz = -(rot[2] || 0) * DEG;
    if (rx) { const c = Math.cos(rx), s = Math.sin(rx); const ny = y * c - z * s, nz = y * s + z * c; y = ny; z = nz; }
    if (ry) { const c = Math.cos(ry), s = Math.sin(ry); const nx = x * c + z * s, nz = -x * s + z * c; x = nx; z = nz; }
    if (rz) { const c = Math.cos(rz), s = Math.sin(rz); const nx = x * c - y * s, ny = x * s + y * c; x = nx; y = ny; }
    return [x + pivot[0], y + pivot[1], z + pivot[2]];
  }

  function boxFaceUvRects(u, v, w, h, d, mirror) {
    const rect = (x0, y0, rw, rh, fu = false, fv = false) => ({
      u0: fu ? x0 + rw : x0, v0: fv ? y0 + rh : y0,
      u1: fu ? x0 : x0 + rw, v1: fv ? y0 : y0 + rh,
    });
    return {
      up: rect(u + d, v, w, d, mirror, true),
      down: rect(u + d + w, v, w, d, mirror, false),
      north: rect(u + d, v + d, w, h, mirror, false),
      south: rect(u + d + w + d, v + d, w, h, mirror, false),
      west: mirror ? rect(u + d + w, v + d, d, h, true, false) : rect(u, v + d, d, h, false, false),
      east: mirror ? rect(u, v + d, d, h, true, false) : rect(u + d + w, v + d, d, h, false, false),
    };
  }

  function extractGeoMesh(geo) {
    const texW = geo.tw || 64, texH = geo.th || 32;
    const bones = geo.b || [];
    const byName = new Map(bones.map((b) => [b.n, b]));
    const pos = [], uv = [], norm = [];
    let minY = 999, maxY = -999;

    for (const bone of bones) {
      if (!bone.c || !bone.c.length) continue;
      const chain = [];
      let cur = bone, guard = 0;
      while (cur && guard++ < 16) { chain.push(cur); cur = cur.pa ? byName.get(cur.pa) : null; }

      for (const cube of bone.c) {
        const [ox, oy, oz] = cube.o, [sx, sy, sz] = cube.s, inf = cube.i || 0;
        const x0 = ox - inf, y0 = oy - inf, z0 = oz - inf;
        const x1 = ox + sx + inf, y1 = oy + sy + inf, z1 = oz + sz + inf;
        const raw = [
          [x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0],
          [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1],
        ];
        const tv = raw.map((v) => {
          let p = v;
          if (cube.r) p = rotateAround(p, cube.p || bone.p || [0, 0, 0], cube.r);
          for (const b of chain) if (b.r) p = rotateAround(p, b.p || [0, 0, 0], b.r);
          const py = p[1];
          if (py < minY) minY = py;
          if (py > maxY) maxY = py;
          return [p[0], py, -p[2]];
        });

        const fdefs = {
          north: { idxs: [3, 2, 1, 0], n: [0, 0, -1] },
          south: { idxs: [6, 7, 4, 5], n: [0, 0, 1] },
          west: { idxs: [7, 3, 0, 4], n: [-1, 0, 0] },
          east: { idxs: [2, 6, 5, 1], n: [1, 0, 0] },
          up: { idxs: [7, 6, 2, 3], n: [0, 1, 0] },
          down: { idxs: [0, 1, 5, 4], n: [0, -1, 0] },
        };

        const isPF = cube.uv && !Array.isArray(cube.uv);
        const mir = cube.m !== undefined ? Boolean(cube.m) : Boolean(bone.m);
        const br = !isPF && Array.isArray(cube.uv)
          ? boxFaceUvRects(cube.uv[0], cube.uv[1], Math.max(1, Math.round(sx)), Math.max(1, Math.round(sy)), Math.max(1, Math.round(sz)), mir)
          : null;

        for (const [fn, fd] of Object.entries(fdefs)) {
          let uvs = null;
          if (isPF) {
            const f = cube.uv[fn];
            if (!f) continue;
            const fu = f.uv?.[0] ?? 0, fv = f.uv?.[1] ?? 0, fw = f.uv_size?.[0] ?? 0, fh = f.uv_size?.[1] ?? 0;
            if (fw === 0 || fh === 0) continue;
            uvs = [
              [fu / texW, fv / texH], [(fu + fw) / texW, fv / texH],
              [(fu + fw) / texW, (fv + fh) / texH], [fu / texW, (fv + fh) / texH],
            ];
            const rotSteps = (((f.uv_rotation || 0) / 90) % 4 + 4) % 4;
            for (let r = 0; r < rotSteps; r++) uvs.unshift(uvs.pop());
          } else if (br) {
            const r = br[fn];
            uvs = [
              [r.u0 / texW, r.v0 / texH], [r.u1 / texW, r.v0 / texH],
              [r.u1 / texW, r.v1 / texH], [r.u0 / texW, r.v1 / texH],
            ];
          }
          if (!uvs) continue;
          let np = fd.n;
          if (cube.r) np = rotateAround(np, [0, 0, 0], cube.r);
          for (const b of chain) if (b.r) np = rotateAround(np, [0, 0, 0], b.r);
          const nl = Math.hypot(np[0], np[1], -np[2]) || 1;
          const nrm = [np[0] / nl, np[1] / nl, -np[2] / nl];
          const p0 = tv[fd.idxs[0]], p1 = tv[fd.idxs[1]], p2 = tv[fd.idxs[2]], p3 = tv[fd.idxs[3]];
          for (const k of [0, 1, 2, 0, 2, 3]) {
            const pt = k === 0 ? p0 : k === 1 ? p1 : k === 2 ? p2 : p3;
            const u = uvs[k];
            pos.push(pt[0], pt[1], pt[2]);
            uv.push(u[0], u[1]);
            norm.push(nrm[0], nrm[1], nrm[2]);
          }
        }
      }
    }
    return {
      pos: new Float32Array(pos),
      uv: new Float32Array(uv),
      norm: new Float32Array(norm),
      count: pos.length / 3,
      minY, maxY,
    };
  }

  const VS = `
    attribute vec3 aPos;
    attribute vec2 aUv;
    attribute vec3 aNorm;
    uniform float uYaw;
    uniform float uPitch;
    uniform float uAspect;
    uniform float uCamDist;
    uniform float uCenterY;
    uniform float uDepthBias;
    varying vec2 vUv;
    varying vec3 vNorm;
    void main() {
      float cy = cos(uYaw), sy = sin(uYaw);
      float cp = cos(uPitch), sp = sin(uPitch);
      float px = aPos.x, py = aPos.y - uCenterY, pz = aPos.z;
      float x1 = px * cy - pz * sy;
      float z1 = px * sy + pz * cy;
      float y2 = py * cp - z1 * sp;
      float z2 = py * sp + z1 * cp;
      float nx1 = aNorm.x * cy - aNorm.z * sy;
      float nz1 = aNorm.x * sy + aNorm.z * cy;
      float ny2 = aNorm.y * cp - nz1 * sp;
      float nz2 = aNorm.y * sp + nz1 * cp;
      float zEye = max(6.0, uCamDist - z2);
      gl_Position = vec4(x1 * 2.85 / uAspect, y2 * 2.85, ((-z2 - uDepthBias) / 55.0) * zEye, zEye);
      vUv = aUv;
      vNorm = vec3(nx1, ny2, nz2);
    }
  `;

  const FS = `
    precision mediump float;
    uniform sampler2D uTex;
    varying vec2 vUv;
    varying vec3 vNorm;
    void main() {
      vec4 col = texture2D(uTex, vUv);
      if (col.a < 0.5) discard;
      vec3 n = normalize(gl_FrontFacing ? vNorm : -vNorm);
      float keyL = abs(dot(n, normalize(vec3(0.42, 0.65, 0.82))));
      float fillL = max(dot(n, normalize(vec3(-0.55, 0.25, 0.40))), 0.0);
      float light = min(1.06, 0.54 + 0.38 * keyL + 0.14 * fillL);
      gl_FragColor = vec4(col.rgb * light, 1.0);
    }
  `;

  const geoMeshCache = new Map();
  function getGeoMesh(key, geoObj) {
    if (geoMeshCache.has(key)) return geoMeshCache.get(key);
    const m = extractGeoMesh(geoObj);
    geoMeshCache.set(key, m);
    return m;
  }

  function createViewer(container, options = {}) {
    const width = options.width || 300;
    const height = options.height || 340;
    container.innerHTML = "";
    container.style.position = "relative";

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.cssText = "width:100%;max-width:" + width + "px;height:auto;display:block;margin:0 auto;cursor:grab;touch-action:none;";
    container.appendChild(canvas);

    const fallbackWrap = document.createElement("div");
    fallbackWrap.style.cssText = "display:none;text-align:center;";
    const fallbackImg = document.createElement("img");
    fallbackImg.style.cssText = "max-width:100%;max-height:" + height + "px;image-rendering:pixelated;";
    const fallbackNote = document.createElement("div");
    fallbackNote.style.cssText = "font-size:11px;color:var(--text-muted);margin-top:6px;";
    fallbackWrap.appendChild(fallbackImg);
    fallbackWrap.appendChild(fallbackNote);
    container.appendChild(fallbackWrap);

    const gl = canvas.getContext("webgl", { alpha: true, antialias: true, preserveDrawingBuffer: true })
      || canvas.getContext("experimental-webgl", { alpha: true, antialias: true, preserveDrawingBuffer: true });

    let prog = null, loc = null;
    if (gl) {
      try {
        const mk = (t, s) => {
          const sh = gl.createShader(t);
          gl.shaderSource(sh, s);
          gl.compileShader(sh);
          if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
          return sh;
        };
        prog = gl.createProgram();
        gl.attachShader(prog, mk(gl.VERTEX_SHADER, VS));
        gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) prog = null;
      } catch { prog = null; }
    }

    if (gl && prog) {
      loc = {
        aPos: gl.getAttribLocation(prog, "aPos"),
        aUv: gl.getAttribLocation(prog, "aUv"),
        aNorm: gl.getAttribLocation(prog, "aNorm"),
        uYaw: gl.getUniformLocation(prog, "uYaw"),
        uPitch: gl.getUniformLocation(prog, "uPitch"),
        uAspect: gl.getUniformLocation(prog, "uAspect"),
        uCamDist: gl.getUniformLocation(prog, "uCamDist"),
        uCenterY: gl.getUniformLocation(prog, "uCenterY"),
        uDepthBias: gl.getUniformLocation(prog, "uDepthBias"),
        uTex: gl.getUniformLocation(prog, "uTex"),
      };
    }

    const manCanvas = makeMannequinCanvas();
    const manGeo = makeMannequinGeo();
    let manGlTex = null;
    const glBufMap = new WeakMap();
    const glTexMap = new WeakMap();

    const st = {
      yaw: 28,
      pitch: 12,
      zoom: 1.0,
      autoRotate: options.autoRotate !== false,
      showMannequin: true,
      pieces: [],
      fallbackSrc: "",
      raf: 0,
      corsBlocked: false,
      destroyed: false,
    };
    const onTexReady = () => { if (!st.destroyed) drawFrame(); };

    function getGlBuf(mesh) {
      if (glBufMap.has(mesh)) return glBufMap.get(mesh);
      const pb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, pb); gl.bufferData(gl.ARRAY_BUFFER, mesh.pos, gl.STATIC_DRAW);
      const ub = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, ub); gl.bufferData(gl.ARRAY_BUFFER, mesh.uv, gl.STATIC_DRAW);
      const nb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, nb); gl.bufferData(gl.ARRAY_BUFFER, mesh.norm, gl.STATIC_DRAW);
      const o = { pb, ub, nb, count: mesh.count };
      glBufMap.set(mesh, o);
      return o;
    }

    function getGlTex(imgOrCanvas) {
      if (glTexMap.has(imgOrCanvas)) return glTexMap.get(imgOrCanvas);
      const t = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgOrCanvas);
      } catch {
        gl.deleteTexture(t);
        st.corsBlocked = true;
        return null;
      }
      glTexMap.set(imgOrCanvas, t);
      return t;
    }

    function showFallback() {
      canvas.style.display = "none";
      fallbackWrap.style.display = "block";
      if (st.fallbackSrc) fallbackImg.src = st.fallbackSrc;
      const lang = window.FrontierWiki?.getLang?.() || "en";
      fallbackNote.textContent = lang === "fr"
        ? "Apercu 3D pre-rendu (rotation WebGL 360 active en ligne sur HTTPS)."
        : "Pre-rendered 3D view (live 360 WebGL rotation runs on HTTPS).";
    }

    function drawFrame() {
      if (st.destroyed) return;
      if (st.corsBlocked || !gl || !prog) {
        showFallback();
        return;
      }
      const GEOS = window.EK_GEOMETRIES || {};
      let aMinY = 999, aMaxY = -999;
      const drawList = [];

      for (const p of st.pieces) {
        const gObj = GEOS[p.geo];
        if (!gObj) continue;
        const mesh = getGeoMesh(p.geo, gObj);
        if (mesh.minY < aMinY) aMinY = mesh.minY;
        if (mesh.maxY > aMaxY) aMaxY = mesh.maxY;
        const tEntry = loadTexImage(`assets/armor_tex/${p.tex}.png`, onTexReady);
        if (tEntry && tEntry.ready) {
          const gTex = getGlTex(tEntry.img);
          if (st.corsBlocked) return showFallback();
          drawList.push({ mesh, tex: gTex });
        }
      }

      let centerY = 16.5, camDist = 52;
      if (st.pieces.length === 1 && aMaxY > aMinY) {
        const span = aMaxY - aMinY, mid = (aMinY + aMaxY) * 0.5;
        if (aMinY >= 21) { centerY = Math.max(25, mid); camDist = Math.max(27, Math.min(46, span * 1.9 + 13)); }
        else if (aMinY < 10 && aMaxY > 21) { centerY = (Math.max(32.5, aMaxY) + Math.min(0, aMinY)) * 0.5; camDist = Math.max(50, (Math.max(32.5, aMaxY) - Math.min(0, aMinY)) * 1.52 + 4); }
        else if (aMinY >= 9 && aMaxY <= 29) { centerY = 18; camDist = Math.max(32, Math.min(48, span * 1.7 + 12)); }
        else if (aMaxY <= 16) { centerY = 7.2; camDist = 31; }
      } else if (aMaxY > aMinY) {
        const top = Math.max(32.5, aMaxY), bot = Math.min(0, aMinY);
        centerY = (top + bot) * 0.5;
        camDist = Math.max(50, (top - bot) * 1.48 + 4);
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clearDepth(1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.disable(gl.CULL_FACE);

      gl.useProgram(prog);
      gl.uniform1f(loc.uYaw, st.yaw * DEG);
      gl.uniform1f(loc.uPitch, st.pitch * DEG);
      gl.uniform1f(loc.uAspect, canvas.width / canvas.height);
      gl.uniform1f(loc.uCamDist, camDist / st.zoom);
      gl.uniform1f(loc.uCenterY, centerY);

      const renderMesh = (mesh, tex, depthBias = 0) => {
        if (!mesh || !tex) return;
        const b = getGlBuf(mesh);
        gl.uniform1f(loc.uDepthBias, depthBias);
        gl.bindBuffer(gl.ARRAY_BUFFER, b.pb);
        gl.enableVertexAttribArray(loc.aPos);
        gl.vertexAttribPointer(loc.aPos, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, b.ub);
        gl.enableVertexAttribArray(loc.aUv);
        gl.vertexAttribPointer(loc.aUv, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, b.nb);
        gl.enableVertexAttribArray(loc.aNorm);
        gl.vertexAttribPointer(loc.aNorm, 3, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.uniform1i(loc.uTex, 0);
        gl.drawArrays(gl.TRIANGLES, 0, b.count);
      };

      if (st.showMannequin) {
        if (!manGlTex) manGlTex = getGlTex(manCanvas);
        renderMesh(getGeoMesh("__mannequin", manGeo), manGlTex, -0.06);
      }
      for (let i = 0; i < drawList.length; i++) {
        renderMesh(drawList[i].mesh, drawList[i].tex, (i + 1) * 0.04);
      }
    }

    let dragging = false, lx = 0, ly = 0;
    canvas.addEventListener("pointerdown", (e) => {
      dragging = true; lx = e.clientX; ly = e.clientY;
      st.autoRotate = false;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      st.yaw += (e.clientX - lx) * 0.7;
      st.pitch = Math.max(-45, Math.min(55, st.pitch + (e.clientY - ly) * 0.5));
      lx = e.clientX; ly = e.clientY;
      drawFrame();
    });
    const endDrag = () => { dragging = false; canvas.style.cursor = "grab"; };
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      st.zoom = Math.max(0.65, Math.min(2.2, st.zoom + (e.deltaY < 0 ? 0.1 : -0.1)));
      drawFrame();
    }, { passive: false });

    function loop() {
      if (st.destroyed) return;
      if (st.autoRotate && !dragging && !st.corsBlocked) {
        st.yaw = (st.yaw + 0.45) % 360;
        drawFrame();
      }
      st.raf = requestAnimationFrame(loop);
    }
    loop();

    return {
      setPieces(pieces, fallbackSrc = "") {
        st.pieces = pieces || [];
        st.fallbackSrc = fallbackSrc;
        drawFrame();
      },
      setYaw(y) { st.autoRotate = false; st.yaw = y; drawFrame(); },
      setAutoRotate(v) { st.autoRotate = !!v; },
      setMannequin(v) { st.showMannequin = !!v; drawFrame(); },
      resetView() { st.yaw = 28; st.pitch = 12; st.zoom = 1.0; drawFrame(); },
      destroy() { st.destroyed = true; cancelAnimationFrame(st.raf); },
    };
  }

  window.EKArmor3D = { createViewer };
})();
