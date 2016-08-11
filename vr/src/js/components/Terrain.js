import {Entity} from 'aframe-react';
import React from 'react';

AFRAME.registerComponent('terrain', {
  schema: {frequency: {default: 2.5}},
  init: function () {
    this.terrain = THREE.Terrain({
      easing: THREE.Terrain.Linear,
      frequency: this.data.frequency,
      heightmap: THREE.Terrain.PerlinDiamond,
      material: new THREE.MeshBasicMaterial({color: 0x5566aa}),
      maxHeight: 88,
      minHeight: -100,
      width: 1,
      length: 1,
      size: 2048,
      steps: 7,
      useBufferGeometry: false,
      xSegments: xS,
      xSize: 1024,
      ySegments: yS,
      ySize: 1024,
    });
    this.el.setObject3D('mesh', this.terrain);
  }
});

export default props => (
  <Entity terrain={{primitive: 'sphere', radius: 100}}
          material={{color: "#73CFF0", shader: 'flat'}}
          scale="1 1 -1"/>
);
