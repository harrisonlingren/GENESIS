// Test Procedural Terrain
// THREE.terrain by IceCreamYou (https://github.com/IceCreamYou/THREE.Terrain)

AFRAME.registerComponent('terrain', {
  schema: {},
  init: function () {
    this.terrainScene = THREE.Terrain();
    this.el.setObject3D('mesh', this.terrainScene);
  }
});
