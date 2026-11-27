/**
 * The Frontier — Shared Minecraft 3D Skin & Pyramid Formation Renderer (WebGL 1.0)
 * Also renders pixelated 2D heads + procedural grey Steve fallback skin.
 */
(function (global) {
  "use strict";

  const DEG = Math.PI / 180;
  let defaultGreySkinCanvas = null;
  const skinImageCache = new Map();

  function getDefaultGreySkinCanvas() {
    if (defaultGreySkinCanvas) return defaultGreySkinCanvas;
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d");

    function fillRectColor(x, y, w, h, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    }

    // Subtle classic grey Steve silhouette skin
    // Head base (0, 0) -> 32x16
    fillRectColor(0, 0, 32, 16, "#7b8089");
    fillRectColor(8, 0, 8, 8, "#8c919b"); // top
    fillRectColor(16, 0, 8, 8, "#60656d"); // bottom
    fillRectColor(8, 8, 8, 8, "#888d97"); // face
    // Hairline
    fillRectColor(8, 8, 8, 2, "#595e66");
    fillRectColor(8, 10, 1, 1, "#595e66");
    fillRectColor(15, 10, 1, 1, "#595e66");
    // Eyes
    fillRectColor(9, 12, 1, 1, "#ced3db");
    fillRectColor(10, 12, 1, 1, "#3f444d");
    fillRectColor(13, 12, 1, 1, "#3f444d");
    fillRectColor(14, 12, 1, 1, "#ced3db");
    // Nose & mouth
    fillRectColor(11, 13, 2, 1, "#6f747d");
    fillRectColor(11, 14, 2, 1, "#5c6068");

    // Torso (16, 16)
    fillRectColor(16, 16, 24, 16, "#5e636b");
    fillRectColor(20, 20, 8, 12, "#6c727c");
    fillRectColor(23, 20, 2, 1, "#848a94");
    fillRectColor(32, 20, 8, 12, "#565a62");

    // Right arm (40, 16) & Left arm (32, 48)
    fillRectColor(40, 16, 16, 16, "#767b84");
    fillRectColor(44, 20, 4, 4, "#676c74");
    fillRectColor(32, 48, 16, 16, "#767b84");
    fillRectColor(36, 52, 4, 4, "#676c74");

    // Right leg (0, 16) & Left leg (16, 48)
    fillRectColor(0, 16, 16, 16, "#464a52");
    fillRectColor(4, 29, 4, 3, "#34373e");
    fillRectColor(16, 48, 16, 16, "#464a52");
    fillRectColor(20, 61, 4, 3, "#34373e");

    defaultGreySkinCanvas = c;
    return c;
  }

  function loadSkinSource(url) {
    if (!url) return Promise.resolve(null);
    if (skinImageCache.has(url)) return skinImageCache.get(url);
    const p = new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = url;
    });
    skinImageCache.set(url, p);
    return p;
  }

  function drawSkinHead(canvas, sourceImgOrNull, size = 32) {
    if (!canvas) return;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, size, size);

    const src = sourceImgOrNull || getDefaultGreySkinCanvas();
    const w = src.naturalWidth || src.width || 64;
    const h = src.naturalHeight || src.height || 64;
    const sx = Math.round((8 / 64) * w);
    const sy = Math.round((8 / (h === 32 || h === 64 && w === 128 ? 32 : 64)) * h);
    const sw = Math.round((8 / 64) * w);
    const sh = Math.round((8 / (h === 32 || h === 64 && w === 128 ? 32 : 64)) * h);
    ctx.drawImage(src, sx, sy, sw, sh, 0, 0, size, size);

    // Hat overlay (40, 8, 8, 8)
    if (sourceImgOrNull) {
      const hx = Math.round((40 / 64) * w);
      ctx.drawImage(src, hx, sy, sw, sh, -1, -1, size + 2, size + 2);
    }
  }

  function getSkinHeadDataUrl(url, size = 32) {
    return loadSkinSource(url).then((img) => {
      const c = document.createElement("canvas");
      drawSkinHead(c, img, size);
      return c.toDataURL("image/png");
    });
  }

  function getDefaultGreyHeadDataUrl(size = 32) {
    const c = document.createElement("canvas");
    drawSkinHead(c, null, size);
    return c.toDataURL("image/png");
  }

  // ---------------------------------------------------------------------------
  // Geometry Builder (Minecraft Classic 4px arms vs Slim 3px arms, v1 64x32 + v2 64x64)
  // ---------------------------------------------------------------------------
  function addMcBox(verts, indices, opts) {
    const {
      cx, cy, cz,
      dx, dy, dz,
      inflate = 0,
      u, v,
      texW = 64,
      texH = 64,
      mirrorU = false,
      pivot = [cx, cy, cz],
      rotX = 0,
      rotY = 0,
      rotZ = 0,
    } = opts;

    const hx = dx / 2 + inflate;
    const hy = dy / 2 + inflate;
    const hz = dz / 2 + inflate;

    const rx = (x, y, z) => {
      let lx = x - pivot[0];
      let ly = y - pivot[1];
      let lz = z - pivot[2];
      if (rotZ) {
        const c = Math.cos(rotZ), s = Math.sin(rotZ);
        const nx = lx * c - ly * s;
        ly = lx * s + ly * c;
        lx = nx;
      }
      if (rotX) {
        const c = Math.cos(rotX), s = Math.sin(rotX);
        const ny = ly * c - lz * s;
        lz = ly * s + lz * c;
        ly = ny;
      }
      if (rotY) {
        const c = Math.cos(rotY), s = Math.sin(rotY);
        const nx = lx * c + lz * s;
        lz = -lx * s + lz * c;
        lx = nx;
      }
      return [lx + pivot[0], ly + pivot[1], lz + pivot[2]];
    };

    const rectUV = (ux, vy, rw, rh, flipH = false) => {
      const u0 = (ux + (flipH ? rw : 0)) / texW;
      const u1 = (ux + (flipH ? 0 : rw)) / texW;
      const v0 = vy / texH;
      const v1 = (vy + rh) / texH;
      return [u0, v0, u1, v1];
    };

    const faces = [
      // Front (+Z)
      {
        n: [0, 0, 1],
        pts: [
          [cx - hx, cy + hy, cz + hz],
          [cx + hx, cy + hy, cz + hz],
          [cx + hx, cy - hy, cz + hz],
          [cx - hx, cy - hy, cz + hz],
        ],
        uv: rectUV(u + dz, v + dz, dx, dy, mirrorU),
      },
      // Back (-Z)
      {
        n: [0, 0, -1],
        pts: [
          [cx + hx, cy + hy, cz - hz],
          [cx - hx, cy + hy, cz - hz],
          [cx - hx, cy - hy, cz - hz],
          [cx + hx, cy - hy, cz - hz],
        ],
        uv: rectUV(u + dz + dx + dz, v + dz, dx, dy, mirrorU),
      },
      // Right (-X)
      {
        n: [-1, 0, 0],
        pts: [
          [cx - hx, cy + hy, cz - hz],
          [cx - hx, cy + hy, cz + hz],
          [cx - hx, cy - hy, cz + hz],
          [cx - hx, cy - hy, cz - hz],
        ],
        uv: rectUV(mirrorU ? u + dz + dx : u, v + dz, dz, dy, mirrorU),
      },
      // Left (+X)
      {
        n: [1, 0, 0],
        pts: [
          [cx + hx, cy + hy, cz + hz],
          [cx + hx, cy + hy, cz - hz],
          [cx + hx, cy - hy, cz - hz],
          [cx + hx, cy - hy, cz + hz],
        ],
        uv: rectUV(mirrorU ? u : u + dz + dx, v + dz, dz, dy, mirrorU),
      },
      // Top (+Y)
      {
        n: [0, 1, 0],
        pts: [
          [cx - hx, cy + hy, cz - hz],
          [cx + hx, cy + hy, cz - hz],
          [cx + hx, cy + hy, cz + hz],
          [cx - hx, cy + hy, cz + hz],
        ],
        uv: rectUV(u + dz, v, dx, dz, mirrorU),
      },
      // Bottom (-Y)
      {
        n: [0, -1, 0],
        pts: [
          [cx - hx, cy - hy, cz + hz],
          [cx + hx, cy - hy, cz + hz],
          [cx + hx, cy - hy, cz - hz],
          [cx - hx, cy - hy, cz - hz],
        ],
        uv: rectUV(u + dz + dx, v, dx, dz, mirrorU),
      },
    ];

    for (const f of faces) {
      const base = verts.length / 8;
      const rn = rx(f.n[0] + pivot[0], f.n[1] + pivot[1], f.n[2] + pivot[2]);
      const nx = rn[0] - pivot[0];
      const ny = rn[1] - pivot[1];
      const nz = rn[2] - pivot[2];
      const [u0, v0, u1, v1] = f.uv;
      const uvs = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
      for (let i = 0; i < 4; i++) {
        const p = rx(f.pts[i][0], f.pts[i][1], f.pts[i][2]);
        verts.push(p[0], p[1], p[2], uvs[i][0], uvs[i][1], nx, ny, nz);
      }
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  }

  function buildHumanoidMesh({ slim = false, legacy32 = false, armPose = 0, legPose = 0, headPose = 0 } = {}) {
    const texH = legacy32 ? 32 : 64;
    const armW = slim ? 3 : 4;
    const armCx = slim ? 5.5 : 6;
    const baseVerts = [];
    const baseIndices = [];
    const overlayVerts = [];
    const overlayIndices = [];

    // Head
    addMcBox(baseVerts, baseIndices, { cx: 0, cy: 28, cz: 0, dx: 8, dy: 8, dz: 8, u: 0, v: 0, texH, pivot: [0, 24, 0], rotY: headPose });
    addMcBox(overlayVerts, overlayIndices, { cx: 0, cy: 28, cz: 0, dx: 8, dy: 8, dz: 8, inflate: 0.45, u: 32, v: 0, texH, pivot: [0, 24, 0], rotY: headPose });

    // Torso
    addMcBox(baseVerts, baseIndices, { cx: 0, cy: 18, cz: 0, dx: 8, dy: 12, dz: 4, u: 16, v: 16, texH });
    if (!legacy32) {
      addMcBox(overlayVerts, overlayIndices, { cx: 0, cy: 18, cz: 0, dx: 8, dy: 12, dz: 4, inflate: 0.28, u: 16, v: 32, texH });
    }

    // Right Arm (-X)
    addMcBox(baseVerts, baseIndices, {
      cx: -armCx, cy: 18, cz: 0, dx: armW, dy: 12, dz: 4, u: 40, v: 16, texH,
      pivot: [-armCx, 22, 0], rotX: armPose, rotZ: -0.04,
    });
    if (!legacy32) {
      addMcBox(overlayVerts, overlayIndices, {
        cx: -armCx, cy: 18, cz: 0, dx: armW, dy: 12, dz: 4, inflate: 0.28, u: 40, v: 32, texH,
        pivot: [-armCx, 22, 0], rotX: armPose, rotZ: -0.04,
      });
    }

    // Left Arm (+X)
    addMcBox(baseVerts, baseIndices, {
      cx: armCx, cy: 18, cz: 0, dx: armW, dy: 12, dz: 4,
      u: legacy32 ? 40 : 32, v: legacy32 ? 16 : 48, texH, mirrorU: legacy32,
      pivot: [armCx, 22, 0], rotX: -armPose, rotZ: 0.04,
    });
    if (!legacy32) {
      addMcBox(overlayVerts, overlayIndices, {
        cx: armCx, cy: 18, cz: 0, dx: armW, dy: 12, dz: 4, inflate: 0.28, u: 48, v: 48, texH,
        pivot: [armCx, 22, 0], rotX: -armPose, rotZ: 0.04,
      });
    }

    // Right Leg (-X)
    addMcBox(baseVerts, baseIndices, {
      cx: -2, cy: 6, cz: 0, dx: 4, dy: 12, dz: 4, u: 0, v: 16, texH,
      pivot: [-2, 12, 0], rotX: -legPose,
    });
    if (!legacy32) {
      addMcBox(overlayVerts, overlayIndices, {
        cx: -2, cy: 6, cz: 0, dx: 4, dy: 12, dz: 4, inflate: 0.28, u: 0, v: 32, texH,
        pivot: [-2, 12, 0], rotX: -legPose,
      });
    }

    // Left Leg (+X)
    addMcBox(baseVerts, baseIndices, {
      cx: 2, cy: 6, cz: 0, dx: 4, dy: 12, dz: 4,
      u: legacy32 ? 0 : 16, v: legacy32 ? 16 : 48, texH, mirrorU: legacy32,
      pivot: [2, 12, 0], rotX: legPose,
    });
    if (!legacy32) {
      addMcBox(overlayVerts, overlayIndices, {
        cx: 2, cy: 6, cz: 0, dx: 4, dy: 12, dz: 4, inflate: 0.28, u: 0, v: 48, texH,
        pivot: [2, 12, 0], rotX: legPose,
      });
    }

    return {
      baseVerts: new Float32Array(baseVerts),
      baseIndices: new Uint16Array(baseIndices),
      overlayVerts: new Float32Array(overlayVerts),
      overlayIndices: new Uint16Array(overlayIndices),
    };
  }

  // ---------------------------------------------------------------------------
  // Matrix Math Helpers (4x4 column-major for WebGL)
  // ---------------------------------------------------------------------------
  function mat4Identity() {
    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }

  function mat4Mul(a, b) {
    const out = new Float32Array(16);
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        out[c * 4 + r] =
          a[0 * 4 + r] * b[c * 4 + 0] +
          a[1 * 4 + r] * b[c * 4 + 1] +
          a[2 * 4 + r] * b[c * 4 + 2] +
          a[3 * 4 + r] * b[c * 4 + 3];
      }
    }
    return out;
  }

  function mat4Perspective(fovRad, aspect, near, far) {
    const f = 1.0 / Math.tan(fovRad / 2);
    const nf = 1 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, 2 * far * near * nf, 0,
    ]);
  }

  function mat4Translate(x, y, z) {
    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
  }

  function mat4RotateX(rad) {
    const c = Math.cos(rad), s = Math.sin(rad);
    return new Float32Array([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]);
  }

  function mat4RotateY(rad) {
    const c = Math.cos(rad), s = Math.sin(rad);
    return new Float32Array([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]);
  }

  function mat4Scale(sx, sy, sz) {
    return new Float32Array([sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1]);
  }

  function projectPoint(mvp, x, y, z, w, h) {
    const cx = mvp[0] * x + mvp[4] * y + mvp[8] * z + mvp[12];
    const cy = mvp[1] * x + mvp[5] * y + mvp[9] * z + mvp[13];
    const cz = mvp[2] * x + mvp[6] * y + mvp[10] * z + mvp[14];
    const cw = mvp[3] * x + mvp[7] * y + mvp[11] * z + mvp[15];
    if (cw <= 0.01) return null;
    const ndcX = cx / cw;
    const ndcY = cy / cw;
    const ndcZ = cz / cw;
    if (ndcZ < -1 || ndcZ > 1) return null;
    return {
      x: (ndcX * 0.5 + 0.5) * w,
      y: (0.5 - ndcY * 0.5) * h,
      depth: cw,
    };
  }

  function createGlContext(canvas) {
    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: false, depth: true, preserveDrawingBuffer: true }) ||
      canvas.getContext("experimental-webgl", { alpha: true, antialias: false, depth: true });
    if (!gl) return null;

    const vsSrc = `
      attribute vec3 aPos;
      attribute vec2 aUv;
      attribute vec3 aNormal;
      uniform mat4 uMvp;
      uniform mat4 uModel;
      varying vec2 vUv;
      varying float vLight;
      void main() {
        gl_Position = uMvp * vec4(aPos, 1.0);
        vUv = aUv;
        vec3 wn = normalize(mat3(uModel) * aNormal);
        float key = max(0.0, dot(wn, normalize(vec3(0.45, 0.72, 0.65))));
        float rim = max(0.0, dot(wn, normalize(vec3(-0.6, 0.25, -0.5))));
        vLight = 0.60 + 0.42 * key + 0.14 * rim;
      }
    `;
    const fsSrc = `
      precision mediump float;
      uniform sampler2D uTex;
      uniform float uAlphaTest;
      varying vec2 vUv;
      varying float vLight;
      void main() {
        vec4 c = texture2D(uTex, vUv);
        if (c.a < uAlphaTest) discard;
        gl_FragColor = vec4(min(vec3(1.0), c.rgb * vLight), c.a);
      }
    `;

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const aPos = gl.getAttribLocation(prog, "aPos");
    const aUv = gl.getAttribLocation(prog, "aUv");
    const aNormal = gl.getAttribLocation(prog, "aNormal");
    const uMvp = gl.getUniformLocation(prog, "uMvp");
    const uModel = gl.getUniformLocation(prog, "uModel");
    const uTex = gl.getUniformLocation(prog, "uTex");
    const uAlphaTest = gl.getUniformLocation(prog, "uAlphaTest");

    const textureCache = new WeakMap();
    const meshBufferCache = new Map();

    function getOrCreateMeshBuffers(meshKey, meshData) {
      if (meshBufferCache.has(meshKey)) return meshBufferCache.get(meshKey);
      const makePair = (verts, indices) => {
        const vb = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vb);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
        const ib = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
        return { vb, ib, count: indices.length };
      };
      const entry = {
        base: makePair(meshData.baseVerts, meshData.baseIndices),
        overlay: makePair(meshData.overlayVerts, meshData.overlayIndices),
      };
      meshBufferCache.set(meshKey, entry);
      return entry;
    }

    function getOrCreateTexture(imgOrCanvas) {
      if (textureCache.has(imgOrCanvas)) return textureCache.get(imgOrCanvas);
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgOrCanvas);
      textureCache.set(imgOrCanvas, tex);
      return tex;
    }

    function drawPart(bufPair) {
      if (!bufPair.count) return;
      gl.bindBuffer(gl.ARRAY_BUFFER, bufPair.vb);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 32, 0);
      gl.enableVertexAttribArray(aUv);
      gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 32, 12);
      gl.enableVertexAttribArray(aNormal);
      gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 32, 20);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufPair.ib);
      gl.drawElements(gl.TRIANGLES, bufPair.count, gl.UNSIGNED_SHORT, 0);
    }

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    return {
      gl,
      drawCharacter(vpMat, modelMat, texSource, slim, poseVariant = "idle") {
        const w = texSource.naturalWidth || texSource.width || 64;
        const h = texSource.naturalHeight || texSource.height || 64;
        const legacy32 = h === 32 || (w === 128 && h === 64);
        const key = `${slim ? "s" : "c"}_${legacy32 ? "32" : "64"}_${poseVariant}`;
        let mesh = meshBufferCache.get(key);
        if (!mesh) {
          const poses = {
            idle: { armPose: 0.08, legPose: 0.04, headPose: 0 },
            leader: { armPose: 0.14, legPose: 0.06, headPose: 0.04 },
            left: { armPose: -0.09, legPose: 0.05, headPose: -0.06 },
            right: { armPose: 0.11, legPose: -0.05, headPose: 0.06 },
          };
          const pose = poses[poseVariant] || poses.idle;
          const data = buildHumanoidMesh({ slim, legacy32, ...pose });
          mesh = getOrCreateMeshBuffers(key, data);
        }
        const mvp = mat4Mul(vpMat, modelMat);
        gl.uniformMatrix4fv(uMvp, false, mvp);
        gl.uniformMatrix4fv(uModel, false, modelMat);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, getOrCreateTexture(texSource));
        gl.uniform1i(uTex, 0);

        gl.uniform1f(uAlphaTest, 0.1);
        drawPart(mesh.base);
        gl.uniform1f(uAlphaTest, 0.25);
        drawPart(mesh.overlay);
        return mvp;
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Single Interactive 3D Skin Viewer (Account Modal & Player Inspect Modal)
  // ---------------------------------------------------------------------------
  function mountSingleSkinViewer(canvas, initialOpts = {}) {
    let glCtx = createGlContext(canvas);
    let destroyed = false;
    let state = {
      skinUrl: initialOpts.skinUrl || "",
      slim: Boolean(initialOpts.slim),
      yaw: initialOpts.yaw ?? -22,
      pitch: initialOpts.pitch ?? -8,
      zoom: initialOpts.zoom ?? 1.0,
      autoRotate: initialOpts.autoRotate !== false,
      texSource: getDefaultGreySkinCanvas(),
    };

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const refreshTexture = async (url) => {
      if (!url) {
        state.texSource = getDefaultGreySkinCanvas();
        return;
      }
      const img = await loadSkinSource(url);
      if (!destroyed) state.texSource = img || getDefaultGreySkinCanvas();
    };
    refreshTexture(state.skinUrl);

    canvas.addEventListener("pointerdown", (e) => {
      dragging = true;
      state.autoRotate = false;
      lastX = e.clientX;
      lastY = e.clientY;
      try { canvas.setPointerCapture(e.pointerId); } catch {}
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      state.yaw += (e.clientX - lastX) * 0.8;
      state.pitch = Math.max(-45, Math.min(45, state.pitch + (e.clientY - lastY) * 0.55));
      lastX = e.clientX;
      lastY = e.clientY;
    });
    const endDrag = () => { dragging = false; };
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);

    let rafId = 0;
    let lastTime = performance.now();
    function frame(now) {
      if (destroyed) return;
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      if (state.autoRotate && !dragging) {
        state.yaw += dt * 26;
      }

      if (glCtx) {
        const { gl } = glCtx;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        const aspect = canvas.width / Math.max(1, canvas.height);
        const proj = mat4Perspective(36 * DEG, aspect, 1, 400);
        const camDist = 60 / state.zoom;
        const view = mat4Mul(
          mat4Translate(0, -16, -camDist),
          mat4Mul(mat4RotateX(state.pitch * DEG), mat4RotateY(state.yaw * DEG)),
        );
        const vp = mat4Mul(proj, view);
        const bob = Math.sin(now * 0.0022) * 0.25;
        const model = mat4Translate(0, bob, 0);
        glCtx.drawCharacter(vp, model, state.texSource, state.slim, "idle");
      } else {
        const ctx = canvas.getContext("2d");
        drawSkinHead(canvas, state.texSource === getDefaultGreySkinCanvas() ? null : state.texSource, Math.min(canvas.width, canvas.height));
        ctx.font = "11px sans-serif";
      }
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return {
      update({ skinUrl, slim, customCanvasOrImg } = {}) {
        if (typeof slim === "boolean") state.slim = slim;
        if (customCanvasOrImg) {
          state.texSource = customCanvasOrImg;
        } else if (skinUrl !== undefined) {
          state.skinUrl = skinUrl;
          refreshTexture(skinUrl);
        }
      },
      destroy() {
        destroyed = true;
        cancelAnimationFrame(rafId);
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Nation V-Chevron / Echelon 3D Formation Renderer (Team-Photo Spacing)
  // ---------------------------------------------------------------------------
  function computePyramidSlots(members) {
    const list = Array.isArray(members) ? members.slice(0, 21) : [];
    const slots = [];
    if (!list.length) return { slots, rows: 0 };

    // Front V-chevron holds up to 11 players (Leader centered front + 5 wings per side).
    // Additional players (12..21) stand in a staggered rear chevron centered between front shoulders.
    const xStep = 23.5;
    let maxRow = 0;

    for (let i = 0; i < list.length; i++) {
      const member = list[i];
      let row = 0;
      let x = 0;
      let y = 0;
      let z = 18;
      let scale = 1.0;
      let pose = "idle";
      let yaw = 0;

      if (i === 0) {
        row = 0;
        x = 0;
        y = 0;
        z = 16;
        scale = 1.08;
        pose = "leader";
        yaw = 0;
      } else if (i <= 10) {
        const wingStep = Math.floor((i + 1) / 2); // 1..5
        const side = i % 2 === 1 ? -1 : 1;
        row = wingStep;
        x = side * wingStep * xStep;
        y = wingStep * 0.35;
        z = 16 - wingStep * 6.8;
        scale = Math.max(0.97, 1.04 - wingStep * 0.012);
        yaw = -side * Math.min(0.22, wingStep * 0.044);
        pose = i % 2 === 1 ? "left" : "right";
      } else {
        const backIdx = i - 11; // 0..9
        const wingStep = Math.floor(backIdx / 2); // 0..4
        const side = backIdx % 2 === 0 ? -1 : 1;
        row = 6 + wingStep;
        x = side * (wingStep + 0.5) * xStep;
        y = 11.5 + wingStep * 0.45;
        z = -12 - wingStep * 6.0;
        scale = 0.96;
        yaw = -side * Math.min(0.20, (wingStep + 0.5) * 0.042);
        pose = wingStep % 2 === 0 ? "right" : "left";
      }

      if (row > maxRow) maxRow = row;
      slots.push({
        member,
        row,
        x,
        y,
        z,
        yaw,
        scale,
        pose,
        texSource: getDefaultGreySkinCanvas(),
        slim: Boolean(member?.slim),
        screenPos: null,
      });
    }

    return { slots, rows: maxRow + 1 };
  }

  function mountNationPyramidViewer(canvas, opts = {}) {
    const glCtx = createGlContext(canvas);
    let destroyed = false;
    const members = Array.isArray(opts.members) ? opts.members : [];
    const layout = computePyramidSlots(members);
    const slots = layout.slots || [];
    const onSelectMember = typeof opts.onSelectMember === "function" ? opts.onSelectMember : null;
    const onFrameProject = typeof opts.onFrameProject === "function" ? opts.onFrameProject : null;

    let minX = 0, maxX = 0, minY = 0, maxY = 36, minZ = 18, maxZ = 18;
    if (slots.length) {
      minX = Infinity;
      maxX = -Infinity;
      minY = Infinity;
      maxY = -Infinity;
      minZ = Infinity;
      maxZ = -Infinity;
      for (const s of slots) {
        const hw = 10.5 * s.scale;
        if (s.x - hw < minX) minX = s.x - hw;
        if (s.x + hw > maxX) maxX = s.x + hw;
        if (s.y < minY) minY = s.y;
        if (s.y + 36 * s.scale > maxY) maxY = s.y + 36 * s.scale;
        if (s.z < minZ) minZ = s.z;
        if (s.z > maxZ) maxZ = s.z;
      }
    }
    const centerX = (minX + maxX) * 0.5;
    const halfSpanW = Math.max(18, (maxX - minX) * 0.5);
    const centerZ = (minZ + maxZ) * 0.5;
    const centerY = minY + (maxY - minY) * 0.52;
    const halfSpanH = Math.max(18, (maxY - minY) * 0.5);

    let yaw = 0;
    let pitch = 4.8;
    let zoom = 1.0;
    let dragging = false;
    let dragMoved = false;
    let lastX = 0;
    let lastY = 0;

    // Load skins for all pyramid members asynchronously
    const profilesMap = opts.profilesMap || {};
    const relayBase = String(opts.relayUrl || "").replace(/\/+$/, "");
    for (const slot of slots) {
      const lower = String(slot.member?.name || "").trim().toLowerCase();
      const prof = profilesMap[lower];
      if (prof && typeof prof.slim === "boolean") slot.slim = prof.slim;
      if (relayBase && prof?.hasSkin) {
        const url = `${relayBase}/api/public/skin/${encodeURIComponent(lower)}?v=${Number(prof.skinVersion) || 1}`;
        loadSkinSource(url).then((img) => {
          if (!destroyed && img) slot.texSource = img;
        });
      }
    }

    canvas.addEventListener("pointerdown", (e) => {
      dragging = true;
      dragMoved = false;
      lastX = e.clientX;
      lastY = e.clientY;
      try { canvas.setPointerCapture(e.pointerId); } catch {}
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragMoved = true;
      yaw = Math.max(-42, Math.min(42, yaw + dx * 0.35));
      pitch = Math.max(0, Math.min(28, pitch + dy * 0.25));
      lastX = e.clientX;
      lastY = e.clientY;
    });
    canvas.addEventListener("pointerup", (e) => {
      const wasDrag = dragMoved;
      dragging = false;
      if (!wasDrag && onSelectMember) {
        const rect = canvas.getBoundingClientRect();
        const px = ((e.clientX - rect.left) / Math.max(1, rect.width)) * canvas.width;
        const py = ((e.clientY - rect.top) / Math.max(1, rect.height)) * canvas.height;
        let best = null;
        let bestDist = 48;
        for (const s of slots) {
          if (!s.screenCenter) continue;
          const dist = Math.hypot(s.screenCenter.x - px, s.screenCenter.y - py);
          if (dist < bestDist) {
            bestDist = dist;
            best = s.member;
          }
        }
        if (best) onSelectMember(best);
      }
    });
    canvas.addEventListener("pointercancel", () => { dragging = false; });

    let rafId = 0;
    function frame(now) {
      if (destroyed) return;
      const w = canvas.clientWidth || canvas.width;
      const h = canvas.clientHeight || canvas.height;
      const dpr = Math.min(2, global.devicePixelRatio || 1);
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.max(320, Math.round(w * dpr));
        canvas.height = Math.max(220, Math.round(h * dpr));
      }

      if (glCtx) {
        const { gl } = glCtx;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        const aspect = canvas.width / Math.max(1, canvas.height);
        const fovRad = 36 * DEG;
        const proj = mat4Perspective(fovRad, aspect, 1, 600);
        const halfTanY = Math.tan(fovRad * 0.5);
        const halfTanX = halfTanY * aspect;
        const frontHalfZ = Math.max(0, maxZ - centerZ);
        const backHalfZ = Math.max(0, centerZ - minZ);
        const distForHeight = (halfSpanH / (0.65 * halfTanY)) + frontHalfZ;
        const distForWidth = Math.max(50, (halfSpanW / (0.86 * halfTanX)) - backHalfZ * 0.65);
        const baseCamDist = Math.max(66, distForHeight, distForWidth) / zoom;

        const view = mat4Mul(
          mat4Translate(0, -centerY, -baseCamDist),
          mat4Mul(
            mat4RotateX(pitch * DEG),
            mat4Mul(mat4RotateY(yaw * DEG), mat4Translate(-centerX, 0, -centerZ)),
          ),
        );
        const vp = mat4Mul(proj, view);

        const projectedLabels = [];
        for (let i = 0; i < slots.length; i++) {
          const s = slots[i];
          const sway = Math.sin(now * 0.0018 + i * 0.7) * 0.16;
          let model = mat4Translate(s.x, s.y + sway, s.z);
          if (s.yaw) model = mat4Mul(model, mat4RotateY(s.yaw));
          if (s.scale !== 1) model = mat4Mul(model, mat4Scale(s.scale, s.scale, s.scale));

          const mvp = glCtx.drawCharacter(vp, model, s.texSource, s.slim, s.pose);
          const headTop = projectPoint(mvp, 0, 35, 0, canvas.width, canvas.height);
          const torsoMid = projectPoint(mvp, 0, 18, 0, canvas.width, canvas.height);
          s.screenCenter = torsoMid;
          if (headTop) {
            projectedLabels.push({
              member: s.member,
              row: s.row,
              xPct: (headTop.x / canvas.width) * 100,
              yPct: (headTop.y / canvas.height) * 100,
              depth: headTop.depth,
            });
          }
        }
        if (onFrameProject) onFrameProject(projectedLabels);
      }

      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return {
      resetCamera() {
        yaw = 0;
        pitch = 4.8;
        zoom = 1.0;
      },
      destroy() {
        destroyed = true;
        cancelAnimationFrame(rafId);
      },
    };
  }

  global.FrontierSkin3D = {
    getDefaultGreySkinCanvas,
    getDefaultGreyHeadDataUrl,
    getSkinHeadDataUrl,
    drawSkinHead,
    loadSkinSource,
    mountSingleSkinViewer,
    mountNationPyramidViewer,
  };
})(window);
