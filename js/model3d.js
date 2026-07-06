/* ===== 3D 模型定義 =====
 * 每個模型 build(THREE) 回傳：
 *   { layers:[{id,name,group,translucentBody?}], labels:[{text,pos:[x,y,z],layer}], target:[x,y,z] }
 * three-view.js 負責載入、切層、旋轉、標註。
 * 新增物種 3D：在 MODELS3D 加一個 build 函式即可。
 */
window.MODELS3D = (function () {
  "use strict";

  function mat(THREE, color, opts) {
    return new THREE.MeshStandardMaterial(Object.assign({
      color: color, roughness: 0.72, metalness: 0.02
    }, opts || {}));
  }
  // 膠囊狀肢體（圓柱＋兩端球）
  function limb(THREE, rTop, rBot, len, material) {
    const g = new THREE.Group();
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, len, 18), material);
    const s1 = new THREE.Mesh(new THREE.SphereGeometry(rTop, 16, 12), material); s1.position.y = len / 2;
    const s2 = new THREE.Mesh(new THREE.SphereGeometry(rBot, 16, 12), material); s2.position.y = -len / 2;
    g.add(cyl, s1, s2);
    return g;
  }
  function sphere(THREE, r, material, sx, sy, sz) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), material);
    m.scale.set(sx || 1, sy || 1, sz || 1);
    return m;
  }

  const MODELS = {};

  // ---------- 人類 ----------
  MODELS.human = {
    build(THREE) {
      const skin = mat(THREE, 0xe7b591, { roughness: 0.68 });
      const bone = mat(THREE, 0xeae0c8, { roughness: 0.55 });
      const bodyMeshes = [];
      const add = (grp, mesh, x, y, z, rx, ry, rz) => {
        mesh.position.set(x || 0, y || 0, z || 0);
        if (rx || ry || rz) mesh.rotation.set(rx || 0, ry || 0, rz || 0);
        grp.add(mesh); return mesh;
      };

      /* 外觀（身體） */
      const body = new THREE.Group();
      const head = add(body, sphere(THREE, 0.19, skin, 1, 1.06, 0.94), 0, 0.82, 0);
      add(body, new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.095, 0.14, 18), skin), 0, 0.66, 0);
      const torso = add(body, new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.18, 0.5, 26), skin), 0, 0.37, 0);
      torso.scale.set(1, 1, 0.56);
      add(body, sphere(THREE, 0.11, skin), -0.23, 0.55, 0); // 左肩
      add(body, sphere(THREE, 0.11, skin), 0.23, 0.55, 0);  // 右肩
      const pelvis = add(body, new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 0.16, 24), skin), 0, 0.06, 0);
      pelvis.scale.set(1, 1, 0.6);
      // 手臂
      add(body, limb(THREE, 0.062, 0.05, 0.3, skin), -0.26, 0.4, 0, 0, 0, 0.08);
      add(body, limb(THREE, 0.05, 0.045, 0.28, skin), -0.28, 0.12, 0, 0, 0, 0.05);
      add(body, sphere(THREE, 0.062, skin, 1, 1.25, 0.8), -0.29, -0.04, 0);
      add(body, limb(THREE, 0.062, 0.05, 0.3, skin), 0.26, 0.4, 0, 0, 0, -0.08);
      add(body, limb(THREE, 0.05, 0.045, 0.28, skin), 0.28, 0.12, 0, 0, 0, -0.05);
      add(body, sphere(THREE, 0.062, skin, 1, 1.25, 0.8), 0.29, -0.04, 0);
      // 腿
      add(body, limb(THREE, 0.095, 0.07, 0.38, skin), -0.1, -0.24, 0);
      add(body, limb(THREE, 0.07, 0.055, 0.34, skin), -0.1, -0.62, 0);
      add(body, new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.24), skin), -0.1, -0.83, 0.05);
      add(body, limb(THREE, 0.095, 0.07, 0.38, skin), 0.1, -0.24, 0);
      add(body, limb(THREE, 0.07, 0.055, 0.34, skin), 0.1, -0.62, 0);
      add(body, new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.24), skin), 0.1, -0.83, 0.05);
      body.traverse(o => { if (o.isMesh) bodyMeshes.push(o); });

      /* 器官 */
      const organs = new THREE.Group();
      const heart = add(organs, sphere(THREE, 0.075, mat(THREE, 0xb5342f), 1, 1.2, 0.95), -0.05, 0.42, 0.08);
      add(organs, sphere(THREE, 0.09, mat(THREE, 0xd98a8a, { transparent: true, opacity: 0.92 }), 0.72, 1.35, 0.72), -0.11, 0.44, 0.02);
      add(organs, sphere(THREE, 0.09, mat(THREE, 0xd98a8a, { transparent: true, opacity: 0.92 }), 0.72, 1.35, 0.72), 0.11, 0.44, 0.02);
      add(organs, sphere(THREE, 0.09, mat(THREE, 0x7d3a2d), 1.4, 0.7, 0.7), 0.06, 0.24, 0.06); // 肝
      add(organs, sphere(THREE, 0.06, mat(THREE, 0xca8a5c), 1.1, 1, 0.8), -0.09, 0.22, 0.07);   // 胃
      const gut = add(organs, new THREE.Mesh(new THREE.TorusKnotGeometry(0.07, 0.028, 64, 8), mat(THREE, 0xcf9a72)), 0, 0.08, 0.05);
      gut.scale.set(1, 0.8, 0.6);

      /* 骨骼 */
      const skel = new THREE.Group();
      add(skel, sphere(THREE, 0.16, bone, 1, 1.1, 0.92), 0, 0.82, 0);        // 顱骨
      add(skel, new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.52, 10), bone), 0, 0.36, -0.02); // 脊椎
      for (let i = 0; i < 5; i++) {                                          // 肋骨
        const ring = add(skel, new THREE.Mesh(new THREE.TorusGeometry(0.2 - i * 0.006, 0.014, 8, 22), bone), 0, 0.52 - i * 0.05, 0, Math.PI / 2, 0, 0);
        ring.scale.set(1, 0.62, 1);
      }
      add(skel, new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.03, 8, 20), bone), 0, 0.06, 0, Math.PI / 2, 0, 0).scale.set(1, 0.6, 1); // 骨盆
      add(skel, new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.34, 10), bone), -0.19, 0.5, 0, 0, 0, 0.35); // 鎖骨
      add(skel, new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.34, 10), bone), 0.19, 0.5, 0, 0, 0, -0.35);
      // 四肢骨
      [[-0.26, 0.4, 0.08], [0.26, 0.4, -0.08], [-0.28, 0.12, 0.05], [0.28, 0.12, -0.05]].forEach(p =>
        add(skel, new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.3, 10), bone), p[0], p[1], 0, 0, 0, p[2]));
      [[-0.1, -0.24], [0.1, -0.24], [-0.1, -0.62], [0.1, -0.62]].forEach(p =>
        add(skel, new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.34, 10), bone), p[0], p[1], 0));

      return {
        target: [0, 0.15, 0],
        layers: [
          { id: "body", name: "外觀", group: body, translucentBody: true },
          { id: "skeleton", name: "骨骼", group: skel },
          { id: "organs", name: "器官", group: organs }
        ],
        labels: [
          { text: "頭部", pos: [0, 1.06, 0.1], layer: "body" },
          { text: "軀幹", pos: [0.34, 0.4, 0.1], layer: "body" },
          { text: "手", pos: [-0.42, -0.02, 0.1], layer: "body" },
          { text: "下肢", pos: [0.24, -0.5, 0.1], layer: "body" },
          { text: "足", pos: [0.1, -0.9, 0.28], layer: "body" },
          { text: "心臟", pos: [-0.28, 0.46, 0.2], layer: "organs" },
          { text: "肺", pos: [0.3, 0.5, 0.2], layer: "organs" },
          { text: "肝臟", pos: [0.32, 0.2, 0.2], layer: "organs" },
          { text: "胃", pos: [-0.3, 0.18, 0.2], layer: "organs" },
          { text: "腸", pos: [0.26, 0.02, 0.2], layer: "organs" },
          { text: "顱骨", pos: [0, 1.02, 0.2], layer: "skeleton" },
          { text: "脊椎", pos: [-0.28, 0.34, 0.2], layer: "skeleton" },
          { text: "肋骨", pos: [0.34, 0.5, 0.2], layer: "skeleton" },
          { text: "骨盆", pos: [0.3, 0.06, 0.2], layer: "skeleton" }
        ]
      };
    }
  };

  return MODELS;
})();
