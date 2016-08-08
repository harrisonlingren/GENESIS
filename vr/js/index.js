// Test Procedural Terrain
// THREE.terrain by IceCreamYou (https://github.com/IceCreamYou/THREE.Terrain)

AFRAME.registerComponent('terrain', {
  schema: {frequency: {default: 2.5}},
  init: function () {
    this.terrainScene = THREE.Terrain({
      easing: THREE.Terrain.Linear,
      frequency: this.data.frequency,
      heightmap: THREE.Terrain.DiamondSquare,
      material: new THREE.MeshBasicMaterial({color: 0x5566aa}),
      maxHeight: 100,
      minHeight: -100,
      steps: 1,
      useBufferGeometry: false,
      xSegments: xS,
      xSize: 1024,
      ySegments: yS,
      ySize: 1024,
    });
    this.el.setObject3D('mesh', this.terrainScene);
  }
});
