!function(e){function t(o){if(r[o])return r[o].exports;var s=r[o]={exports:{},id:o,loaded:!1};return e[o].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){var o=o||{};if(o.Progress=r(1),"undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("progress",{schema:{values:{"default":"0.1",parse:function(e){return"string"==typeof e?e.split(" ").map(parseFloat):Array.isArray(e)?e.map(parseFloat):[e]}},colors:{"default":["#9c27b0","#2196f3","#e91e63","#00bcd4"],parse:function(e){return e.split(" ")}},type:{"default":"bar"},backgroundColor:{"default":"#666666"},background:{"default":!0},width:{"default":1},thickness:{"default":.1},rounded:{"default":!0},lit:{"default":!1},segments:{"default":16},gradient:{"default":!1},radialSegments:{"default":24},arc:{"default":2*Math.PI}},update:function(e){var t=this.data,r=_.reduce(t,function(t,r,o){return _.isEqual(r,e[o])?t:t.concat(o)},[]);return 0===_.without(r,["values"]).length?void this.progress.setValues(t.values):0===_.without(r,["colors"]).length?void this.progress.setColors(t.colors):(this.progress=new o.Progress({type:t.type,bgColor:t.backgroundColor,bg:t.background,values:t.values,colors:t.colors,width:t.width,thickness:t.thickness,rounded:t.rounded,lit:t.lit,segments:t.segments,gradient:t.gradient,radialSegments:t.radialSegments,arc:t.arc}),void this.el.setObject3D("mesh",this.progress.getObject()))},remove:function(){this.el.removeObject3D("mesh")}})},function(e,t,r){"use strict";var o=o||{};o.RoundedBarGeometry=r(2),o.RoundedBarGeometry2D=r(3),o.RoundedTorusGeometry=r(4),o.Progress=function(e){this.options=_.defaults(e||{},o.Progress.OPTIONS);var t="bar"==this.options.type||"bar-2d"==this.options.type?o.Progress.BAR_OPTIONS:o.Progress.RADIAL_OPTIONS;this.options=_.defaults(this.options||{},t),this.type="mv.progress",this.group=new THREE.Object3D,this._colors=this.options.colors,this._values=this.options.values,this.init(this.options),this._update()},o.Progress.OPTIONS={type:"bar",bgColor:"#666666",colors:["#9c27b0","#2196f3","#e91e63","#00bcd4"],values:[0],bg:!0,width:1,thickness:.1,lit:!0,rounded:!0,gradient:!1},o.Progress.BAR_OPTIONS={segments:16},o.Progress.RADIAL_OPTIONS={segments:52,radialSegments:24,arc:2*Math.PI},o.Progress.prototype.init=function(e){var t=new THREE.Object3D;this.group.add(t);var r=e.width,s=e.thickness;this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=1,this.ctx=this.canvas.getContext("2d"),this.texture=new THREE.Texture(this.canvas);var a,n=e.segments,i=s/2;if("bar"==e.type)e.rounded?a=new o.RoundedBarGeometry(r,s,n):(a=new THREE.CylinderGeometry(i,i,r,n,1,!0),a.applyMatrix((new THREE.Matrix4).makeRotationZ(Math.PI/2)));else if("bar-2d"==e.type)a=e.rounded?new o.RoundedBarGeometry2D(r,s,n):new THREE.PlaneGeometry(r,s,1,1);else if("radial"==e.type){var u=s/2,i=(r-s)/2;a=e.rounded&&e.arc!==2*Math.PI?new o.RoundedTorusGeometry(i,u,e.radialSegments,e.segments,e.arc):new THREE.TorusGeometry(i,u,e.radialSegments,e.segments,e.arc),a.applyMatrix((new THREE.Matrix4).makeRotationY(Math.PI)),a.applyMatrix((new THREE.Matrix4).makeRotationZ(-Math.PI/2))}else{var a=new THREE.RingGeometry(r/2-e.thickness,r/2,e.segments,1,-Math.PI/2,e.arc);this._remapUVs(a),a.applyMatrix((new THREE.Matrix4).makeRotationZ(-Math.PI/2))}var d=e.lit?THREE.MeshStandardMaterial:THREE.MeshBasicMaterial,h={map:this.texture,transparent:!e.bg};e.lit&&(h.roughness=1,h.metalness=0);var c=new d(h),p=new THREE.Mesh(a,c);p.userData.object=this,t.add(p),this.mesh=p,this.container=t},o.Progress.prototype._remapUVs=function(e,t){e.computeBoundingBox(),e.faceVertexUvs[0]=[];for(var r=0;r<e.faces.length;r++){var o=e.vertices[e.faces[r].a],s=e.vertices[e.faces[r].b],a=e.vertices[e.faces[r].c],n=(Math.atan2(o.y,o.x)+Math.PI)/(2*Math.PI),i=(Math.atan2(s.y,s.x)+Math.PI)/(2*Math.PI),u=(Math.atan2(a.y,a.x)+Math.PI)/(2*Math.PI);e.faceVertexUvs[0].push([new THREE.Vector2(1-n,1-n),new THREE.Vector2(1-i,1-i),new THREE.Vector2(1-u,1-u)])}e.uvsNeedUpdate=!0,e.computeFaceNormals(),e.computeVertexNormals()},o.Progress.prototype.getObject=function(){return this.group},o.Progress.prototype.setColors=function(e){e=Array.isArray(e)?e:[e],this._colors=[];for(var t=0;t<e.length;t++)this._colors.push(e[t]);this._update()},o.Progress.prototype.setValues=function(e){e=Array.isArray(e)?e:[e],this._values=[];for(var t=0;t<e.length;t++)this._values.push(e[t]);this._update()},o.Progress.prototype._draw=function(e,t,r,o,s){var a=t.width,n=t.height;if(s.bg?(e.fillStyle=s.bgColor,e.fillRect(0,0,a,n)):e.clearRect(0,0,a,n),s.gradient&&o.length>1){for(var i=e.createLinearGradient(0,0,a,0),u=0;u<o.length;u++){var d=1/(o.length-1)*u;i.addColorStop(d,o[u])}e.fillStyle=i,e.fillRect(0,0,a,n),e.fillStyle=s.bgColor,e.fillRect(a*r[0],0,a,n)}else if(r.length&&r.length<=o.length)for(var h=0,u=0;u<r.length;u++){var c=r[u];e.fillStyle=o[u],e.fillRect(a*h,0,a*c,n),h+=c}},o.Progress.prototype._update=function(){this._draw(this.ctx,this.canvas,this._values,this._colors,this.options),this.texture.needsUpdate=!0},o.Progress.prototype.update=function(e){this._update()},e.exports=o.Progress},function(e,t,r){"use strict";var o=o||{};o.RoundedBarGeometry=function(e,t,r){THREE.Geometry.call(this),this.type="RoundedBarGeometry",this.parameters={width:e,size:t,segments:r};var o=t,s=o/2,a=e-2*s,n=new THREE.Geometry,i=new THREE.CylinderGeometry(s,s,a,r,1,!0),u=new THREE.SphereGeometry(s,r,8,0,2*Math.PI,0,Math.PI/2);u.applyMatrix((new THREE.Matrix4).makeTranslation(0,a/2,0));var d=new THREE.SphereGeometry(s,r,8,0,2*Math.PI,Math.PI/2,Math.PI/2);d.applyMatrix((new THREE.Matrix4).makeTranslation(0,-a/2,0)),n.merge(i),n.merge(u),n.merge(d),this.copy(n),this.applyMatrix((new THREE.Matrix4).makeRotationZ(Math.PI/2)),this.computeBoundingBox();var h=this.boundingBox.max,c=this.boundingBox.min,p=new THREE.Vector2(0-c.x,0-c.y),l=new THREE.Vector2(h.x-c.x,h.y-c.y);this.faceVertexUvs[0]=[];for(var y=0;y<this.faces.length;y++){var m=this.vertices[this.faces[y].a],f=this.vertices[this.faces[y].b],E=this.vertices[this.faces[y].c];this.faceVertexUvs[0].push([new THREE.Vector2((m.x+p.x)/l.x,(m.y+p.y)/l.y),new THREE.Vector2((f.x+p.x)/l.x,(f.y+p.y)/l.y),new THREE.Vector2((E.x+p.x)/l.x,(E.y+p.y)/l.y)])}this.uvsNeedUpdate=!0,this.computeFaceNormals(),this.computeVertexNormals()},o.RoundedBarGeometry.prototype=Object.create(THREE.Geometry.prototype),o.RoundedBarGeometry.prototype.constructor=o.RoundedBarGeometry,o.RoundedBarGeometry.prototype.clone=function(){var e=this.parameters;return new o.RoundedBarGeometry(e.width,e.size,e.segments)},e.exports=o.RoundedBarGeometry},function(e,t,r){"use strict";var o=o||{};o.RoundedBarGeometry2D=function(e,t,r){THREE.Geometry.call(this),this.type="RoundedBarGeometry2D",this.parameters={width:e,size:t,segments:r},r=void 0!==r?Math.max(3,r):6;var o=t,s=o/2,a=e-2*s,n=new THREE.Geometry,i=new THREE.PlaneGeometry(a,o,1,1),u=new THREE.CircleGeometry(s,r,Math.PI/2,Math.PI);u.applyMatrix((new THREE.Matrix4).makeTranslation(-a/2,0,0));var d=new THREE.CircleGeometry(s,r,-Math.PI/2,Math.PI);d.applyMatrix((new THREE.Matrix4).makeTranslation(a/2,0,0)),n.merge(i),n.merge(u),n.merge(d),this.copy(n),this.computeBoundingBox();var h=this.boundingBox.max,c=this.boundingBox.min,p=new THREE.Vector2(0-c.x,0-c.y),l=new THREE.Vector2(h.x-c.x,h.y-c.y);this.faceVertexUvs[0]=[];for(var y=0;y<this.faces.length;y++){var m=this.vertices[this.faces[y].a],f=this.vertices[this.faces[y].b],E=this.vertices[this.faces[y].c];this.faceVertexUvs[0].push([new THREE.Vector2((m.x+p.x)/l.x,(m.y+p.y)/l.y),new THREE.Vector2((f.x+p.x)/l.x,(f.y+p.y)/l.y),new THREE.Vector2((E.x+p.x)/l.x,(E.y+p.y)/l.y)])}this.uvsNeedUpdate=!0},o.RoundedBarGeometry2D.prototype=Object.create(THREE.Geometry.prototype),o.RoundedBarGeometry2D.prototype.constructor=o.RoundedBarGeometry2D,o.RoundedBarGeometry2D.prototype.clone=function(){var e=this.parameters;return new o.RoundedBarGeometry(e.width,e.size,e.segments)},e.exports=o.RoundedBarGeometry2D},function(e,t,r){"use strict";var o=o||{};o.RoundedTorusBufferGeometry=r(5),o.RoundedTorusGeometry=function(e,t,r,s,a){THREE.Geometry.call(this),this.type="RoundedTorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:s,arc:a},this.fromBufferGeometry(new o.RoundedTorusBufferGeometry(e,t,r,s,a))},o.RoundedTorusGeometry.prototype=Object.create(THREE.Geometry.prototype),o.RoundedTorusGeometry.prototype.constructor=o.RoundedTorusGeometry,o.RoundedTorusGeometry.prototype.clone=function(){var e=this.parameters;return new o.RoundedTorusGeometry(e.width,e.size,e.segments)},e.exports=o.RoundedTorusGeometry},function(e,t,r){"use strict";var o=o||{};o.RoundedTorusBufferGeometry=function(e,t,r,o,s){THREE.BufferGeometry.call(this),this.type="RoundedTorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:s},e=e||100,t=t||40,r=Math.floor(r)||8,o=Math.floor(o)||6,s=s||2*Math.PI;var a=12,n=o;o+=2*a;for(var i,u,d=(r+1)*(o+1),h=r*o*2*3,c=new(h>65535?Uint32Array:Uint16Array)(h),p=new Float32Array(3*d),l=new Float32Array(3*d),y=new Float32Array(2*d),m=0,f=0,E=0,R=new THREE.Vector3,g=new THREE.Vector3,v=new THREE.Vector3,x=[],T=t,w=s-4*T,M=t/a*2,G=w/n,b=0,H=[],u=0;o>=u;u++)if(x.push(b),a>u){b+=M;var P=1-1/(a-1)*u,B=1-P*P,I=Math.sqrt(B);H.push(I)}else u>=a&&o-a>u?(b+=G,H.push(1)):(b+=M,H.push(H[Math.abs(u-o)]));for(i=0;r>=i;i++){var A=i/r*Math.PI*2,V=t*Math.sin(A),_=Math.cos(A)*t;for(u=0;o>=u;u++){var S=x[u];g.x=(e+_*H[u])*Math.cos(S),g.y=(e+_*H[u])*Math.sin(S),g.z=V,p[m]=g.x,p[m+1]=g.y,p[m+2]=g.z,R.x=e*Math.cos(S),R.y=e*Math.sin(S),v.subVectors(g,R).normalize(),l[m]=v.x,l[m+1]=v.y,l[m+2]=v.z,y[f]=S/s,y[f+1]=i/r,m+=3,f+=2}}for(i=1;r>=i;i++)for(u=1;o>=u;u++){var O=(o+1)*i+u-1,I=(o+1)*(i-1)+u-1,k=(o+1)*(i-1)+u,C=(o+1)*i+u;c[E]=O,c[E+1]=I,c[E+2]=C,c[E+3]=I,c[E+4]=k,c[E+5]=C,E+=6}this.setIndex(new THREE.BufferAttribute(c,1)),this.addAttribute("position",new THREE.BufferAttribute(p,3)),this.addAttribute("normal",new THREE.BufferAttribute(l,3)),this.addAttribute("uv",new THREE.BufferAttribute(y,2))},o.RoundedTorusBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),o.RoundedTorusBufferGeometry.prototype.constructor=o.RoundedTorusBufferGeometry,e.exports=o.RoundedTorusBufferGeometry}])
