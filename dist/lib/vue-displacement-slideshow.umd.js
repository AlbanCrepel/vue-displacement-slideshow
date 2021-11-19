var Hg=Object.defineProperty;var Cc=Object.getOwnPropertySymbols;var Wg=Object.prototype.hasOwnProperty,Xg=Object.prototype.propertyIsEnumerable;var Pc=(et,Ve,ht)=>Ve in et?Hg(et,Ve,{enumerable:!0,configurable:!0,writable:!0,value:ht}):et[Ve]=ht,Dc=(et,Ve)=>{for(var ht in Ve||(Ve={}))Wg.call(Ve,ht)&&Pc(et,ht,Ve[ht]);if(Cc)for(var ht of Cc(Ve))Xg.call(Ve,ht)&&Pc(et,ht,Ve[ht]);return et};(function(et,Ve){typeof exports=="object"&&typeof module!="undefined"?module.exports=Ve(require("vue")):typeof define=="function"&&define.amd?define(["vue"],Ve):(et=typeof globalThis!="undefined"?globalThis:et||self,et["vue-displacement-slideshow"]=Ve(et.Vue))})(this,function(et){"use strict";const Ve=Math.PI/180,ht=180/Math.PI,Xe=[];for(let r=0;r<256;r++)Xe[r]=(r<16?"0":"")+r.toString(16);const Fc=typeof crypto!="undefined"&&"randomUUID"in crypto;function Gn(){if(Fc)return crypto.randomUUID().toUpperCase();const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[r&255]+Xe[r>>8&255]+Xe[r>>16&255]+Xe[r>>24&255]+"-"+Xe[e&255]+Xe[e>>8&255]+"-"+Xe[e>>16&15|64]+Xe[e>>24&255]+"-"+Xe[t&63|128]+Xe[t>>8&255]+"-"+Xe[t>>16&255]+Xe[t>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toUpperCase()}function zt(r,e,t){return Math.max(e,Math.min(t,r))}function Ic(r,e){return(r%e+e)%e}function ns(r,e,t){return(1-t)*r+t*e}function Ca(r){return(r&r-1)==0&&r!==0}function Nc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Ji{constructor(e=0,t=0,i=0,n=1){this._x=e,this._y=t,this._z=i,this._w=n}static slerp(e,t,i,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,n)}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3];const h=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==m||u!==_){let v=1-o;const d=l*h+c*m+u*_+f*g,p=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const y=Math.sqrt(S),T=Math.atan2(y,d*p);v=Math.sin(v*T)/y,o=Math.sin(o*T)/y}const M=o*p;if(l=l*v+h*M,c=c*v+m*M,u=u*v+_*M,f=f*v+g*M,v===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),f=o(s/2),h=l(i/2),m=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-n)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-n)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-s*l,this._y=n*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ji.prototype.isQuaternion=!0;class D{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*n-o*i,u=l*i+o*t-s*n,f=l*n+s*i-a*t,h=-s*t-a*i-o*n;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}D.prototype.isVector3=!0;const rs=new D,Pa=new Ji;class qe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,s,a,o,l,c,u,f,h,m,_,g,v){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=g,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,g=c*f;t[0]=h+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uc,e,Oc)}lookAt(e,t,i){const n=this.elements;return ft.subVectors(e,t),ft.lengthSq()===0&&(ft.z=1),ft.normalize(),ri.crossVectors(i,ft),ri.lengthSq()===0&&(Math.abs(i.z)===1?ft.x+=1e-4:ft.z+=1e-4,ft.normalize(),ri.crossVectors(i,ft)),ri.normalize(),xr.crossVectors(ft,ri),n[0]=ri.x,n[4]=xr.x,n[8]=ft.x,n[1]=ri.y,n[5]=xr.y,n[9]=ft.y,n[2]=ri.z,n[6]=xr.z,n[10]=ft.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],g=i[6],v=i[10],d=i[14],p=i[3],S=i[7],M=i[11],y=i[15],T=n[0],x=n[4],R=n[8],P=n[12],I=n[1],A=n[5],q=n[9],N=n[13],U=n[2],z=n[6],O=n[10],B=n[14],Z=n[3],ee=n[7],ne=n[11],Q=n[15];return s[0]=a*T+o*I+l*U+c*Z,s[4]=a*x+o*A+l*z+c*ee,s[8]=a*R+o*q+l*O+c*ne,s[12]=a*P+o*N+l*B+c*Q,s[1]=u*T+f*I+h*U+m*Z,s[5]=u*x+f*A+h*z+m*ee,s[9]=u*R+f*q+h*O+m*ne,s[13]=u*P+f*N+h*B+m*Q,s[2]=_*T+g*I+v*U+d*Z,s[6]=_*x+g*A+v*z+d*ee,s[10]=_*R+g*q+v*O+d*ne,s[14]=_*P+g*N+v*B+d*Q,s[3]=p*T+S*I+M*U+y*Z,s[7]=p*x+S*A+M*z+y*ee,s[11]=p*R+S*q+M*O+y*ne,s[15]=p*P+S*N+M*B+y*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],g=e[7],v=e[11],d=e[15];return _*(+s*l*f-n*c*f-s*o*h+i*c*h+n*o*m-i*l*m)+g*(+t*l*m-t*c*h+s*a*h-n*a*m+n*c*u-s*l*u)+v*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-n*o*u-t*l*f+t*o*h+n*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],g=e[13],v=e[14],d=e[15],p=f*v*c-g*h*c+g*l*m-o*v*m-f*l*d+o*h*d,S=_*h*c-u*v*c-_*l*m+a*v*m+u*l*d-a*h*d,M=u*g*c-_*f*c+_*o*m-a*g*m-u*o*d+a*f*d,y=_*f*l-u*g*l-_*o*h+a*g*h+u*o*v-a*f*v,T=t*p+i*S+n*M+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/T;return e[0]=p*x,e[1]=(g*h*s-f*v*s-g*n*m+i*v*m+f*n*d-i*h*d)*x,e[2]=(o*v*s-g*l*s+g*n*c-i*v*c-o*n*d+i*l*d)*x,e[3]=(f*l*s-o*h*s-f*n*c+i*h*c+o*n*m-i*l*m)*x,e[4]=S*x,e[5]=(u*v*s-_*h*s+_*n*m-t*v*m-u*n*d+t*h*d)*x,e[6]=(_*l*s-a*v*s-_*n*c+t*v*c+a*n*d-t*l*d)*x,e[7]=(a*h*s-u*l*s+u*n*c-t*h*c-a*n*m+t*l*m)*x,e[8]=M*x,e[9]=(_*f*s-u*g*s-_*i*m+t*g*m+u*i*d-t*f*d)*x,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*d+t*o*d)*x,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*x,e[12]=y*x,e[13]=(u*g*n-_*f*n+_*i*h-t*g*h-u*i*v+t*f*v)*x,e[14]=(_*o*n-a*g*n-_*i*l+t*g*l+a*i*v-t*o*v)*x,e[15]=(a*f*n-u*o*n+u*i*l-t*f*l-a*i*h+t*o*h)*x,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,g=a*u,v=a*f,d=o*f,p=l*c,S=l*u,M=l*f,y=i.x,T=i.y,x=i.z;return n[0]=(1-(g+d))*y,n[1]=(m+M)*y,n[2]=(_-S)*y,n[3]=0,n[4]=(m-M)*T,n[5]=(1-(h+d))*T,n[6]=(v+p)*T,n[7]=0,n[8]=(_+S)*x,n[9]=(v-p)*x,n[10]=(1-(h+g))*x,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Qi.set(n[0],n[1],n[2]).length();const a=Qi.set(n[4],n[5],n[6]).length(),o=Qi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Pt.copy(this);const c=1/s,u=1/a,f=1/o;return Pt.elements[0]*=c,Pt.elements[1]*=c,Pt.elements[2]*=c,Pt.elements[4]*=u,Pt.elements[5]*=u,Pt.elements[6]*=u,Pt.elements[8]*=f,Pt.elements[9]*=f,Pt.elements[10]*=f,t.setFromRotationMatrix(Pt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){const o=this.elements,l=1/(t-e),c=1/(i-n),u=1/(a-s),f=(t+e)*l,h=(i+n)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}qe.prototype.isMatrix4=!0;const Qi=new D,Pt=new qe,Uc=new D(0,0,0),Oc=new D(1,1,1),ri=new D,xr=new D,ft=new D;class en{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const Da=new qe,Fa=new Ji;class tn{constructor(e=0,t=0,i=0,n=tn.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Da,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new D(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}tn.prototype.isEuler=!0,tn.DefaultOrder="XYZ",tn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Bc{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}class Dt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],g=n[0],v=n[3],d=n[6],p=n[1],S=n[4],M=n[7],y=n[2],T=n[5],x=n[8];return s[0]=a*g+o*p+l*y,s[3]=a*v+o*S+l*T,s[6]=a*d+o*M+l*x,s[1]=c*g+u*p+f*y,s[4]=c*v+u*S+f*T,s[7]=c*d+u*M+f*x,s[2]=h*g+m*p+_*y,s[5]=h*v+m*S+_*T,s[8]=h*d+m*M+_*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(n*c-u*i)*g,e[2]=(o*i-n*a)*g,e[3]=h*g,e[4]=(u*t-n*l)*g,e[5]=(n*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),n=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7];return n[0]=t*s+i*l,n[3]=t*a+i*c,n[6]=t*o+i*u,n[1]=-i*s+t*l,n[4]=-i*a+t*c,n[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Dt.prototype.isMatrix3=!0;let zc=0;const Ia=new D,nn=new Ji,Yt=new qe,vr=new D,Vn=new D,Gc=new D,Vc=new Ji,Na=new D(1,0,0),Ua=new D(0,1,0),Oa=new D(0,0,1),kc={type:"added"},Ba={type:"removed"};class yt extends en{constructor(){super();Object.defineProperty(this,"id",{value:zc++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DefaultUp.clone();const e=new D,t=new tn,i=new Ji,n=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new Dt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nn.setFromAxisAngle(e,t),this.quaternion.multiply(nn),this}rotateOnWorldAxis(e,t){return nn.setFromAxisAngle(e,t),this.quaternion.premultiply(nn),this}rotateX(e){return this.rotateOnAxis(Na,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(Oa,e)}translateOnAxis(e,t){return Ia.copy(e).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Na,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(Oa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(Vn,vr,this.up):Yt.lookAt(vr,Vn,this.up),this.quaternion.setFromRotationMatrix(Yt),n&&(Yt.extractRotation(n.matrixWorld),nn.setFromRotationMatrix(Yt),this.quaternion.premultiply(nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ba)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ba)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,e,Gc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}yt.DefaultUp=new D(0,1,0),yt.DefaultMatrixAutoUpdate=!0,yt.prototype.isObject3D=!0;class za extends yt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}za.prototype.isScene=!0;const Hc=0,Ga=1,Wc=2,Va=1,Xc=2,kn=3,Hn=0,Ge=1,rn=2,qc=1,si=0,Wn=1,ka=2,Ha=3,Wa=4,Yc=5,sn=100,Zc=101,jc=102,Xa=103,qa=104,$c=200,Kc=201,Jc=202,Qc=203,Ya=204,Za=205,eu=206,tu=207,iu=208,nu=209,ru=210,su=0,au=1,ou=2,ss=3,lu=4,cu=5,uu=6,hu=7,ja=0,fu=1,du=2,Fi=0,pu=1,mu=2,gu=3,_u=4,xu=5,$a=300,Xn=301,qn=302,as=303,os=304,Mr=306,ls=307,Yn=1e3,dt=1001,cs=1002,at=1003,Ka=1004,Ja=1005,St=1006,vu=1007,yr=1008,ai=1009,Mu=1010,yu=1011,us=1012,Su=1013,Sr=1014,oi=1015,an=1016,bu=1017,Eu=1018,Tu=1019,br=1020,wu=1021,Zn=1022,tt=1023,Au=1024,Ru=1025,Lu=tt,hs=1026,fs=1027,Cu=1028,Pu=1029,Du=1030,Fu=1031,Iu=1032,Nu=1033,Qa=33776,eo=33777,to=33778,io=33779,no=35840,ro=35841,so=35842,ao=35843,Uu=36196,oo=37492,lo=37496,Ou=37808,Bu=37809,zu=37810,Gu=37811,Vu=37812,ku=37813,Hu=37814,Wu=37815,Xu=37816,qu=37817,Yu=37818,Zu=37819,ju=37820,$u=37821,Ku=36492,Ju=37840,Qu=37841,eh=37842,th=37843,ih=37844,nh=37845,rh=37846,sh=37847,ah=37848,oh=37849,lh=37850,ch=37851,uh=37852,hh=37853,it=3e3,on=3001,ds=3007,ps=3002,fh=3003,co=3004,uo=3005,ho=3006,dh=3200,ph=3201,mh=0,gh=1,ms=7680,_h=519,fo=35044,po="300 es";class ln{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<n&&(n=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<n&&(n=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox),gs.applyMatrix4(e.matrixWorld),this.union(gs));const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($n),Er.subVectors(this.max,$n),cn.subVectors(e.a,$n),un.subVectors(e.b,$n),hn.subVectors(e.c,$n),li.subVectors(un,cn),ci.subVectors(hn,un),Ii.subVectors(cn,hn);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ii.z,Ii.y,li.z,0,-li.x,ci.z,0,-ci.x,Ii.z,0,-Ii.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ii.y,Ii.x,0];return!_s(t,cn,un,hn,Er)||(t=[1,0,0,0,1,0,0,0,1],!_s(t,cn,un,hn,Er))?!1:(Tr.crossVectors(li,ci),t=[Tr.x,Tr.y,Tr.z],_s(t,cn,un,hn,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return jn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}ln.prototype.isBox3=!0;const Zt=[new D,new D,new D,new D,new D,new D,new D,new D],jn=new D,gs=new ln,cn=new D,un=new D,hn=new D,li=new D,ci=new D,Ii=new D,$n=new D,Er=new D,Tr=new D,Ni=new D;function _s(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ni.fromArray(r,s);const o=n.x*Math.abs(Ni.x)+n.y*Math.abs(Ni.y)+n.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xh=new ln,mo=new D,xs=new D,vs=new D;class Ms{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.add(vs.multiplyScalar(n/i)),this.radius+=n}return this}union(e){return xs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(mo.copy(e.center).add(xs)),this.expandByPoint(mo.copy(e.center).sub(xs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ys=new D,vh=new D,Mh=new Dt;class ui{constructor(e=new D(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ys.subVectors(i,t).cross(vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ys),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mh.getNormalMatrix(e),n=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}ui.prototype.isPlane=!0;const fn=new Ms,wr=new D;class go{constructor(e=new ui,t=new ui,i=new ui,n=new ui,s=new ui,a=new ui){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],_=i[10],g=i[11],v=i[12],d=i[13],p=i[14],S=i[15];return t[0].setComponents(o-n,f-l,g-h,S-v).normalize(),t[1].setComponents(o+n,f+l,g+h,S+v).normalize(),t[2].setComponents(o+s,f+c,g+m,S+d).normalize(),t[3].setComponents(o-s,f-c,g-m,S-d).normalize(),t[4].setComponents(o-a,f-u,g-_,S-p).normalize(),t[5].setComponents(o+a,f+u,g+_,S+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fn)}intersectsSprite(e){return fn.center.set(0,0,0),fn.radius=.7071067811865476,fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(fn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(wr.x=n.normal.x>0?e.max.x:e.min.x,wr.y=n.normal.y>0?e.max.y:e.min.y,wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nt{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const a=.01,o=.1,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],g=l[2],v=l[6],d=l[10];if(Math.abs(u-h)<a&&Math.abs(f-g)<a&&Math.abs(_-v)<a){if(Math.abs(u+h)<o&&Math.abs(f+g)<o&&Math.abs(_+v)<o&&Math.abs(c+m+d-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(m+1)/2,y=(d+1)/2,T=(u+h)/4,x=(f+g)/4,R=(_+v)/4;return S>M&&S>y?S<a?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=T/i,s=x/i):M>y?M<a?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=T/n,s=R/n):y<a?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=x/s,n=R/s),this.set(i,n,s,t),this}let p=Math.sqrt((v-_)*(v-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(p)<.001&&(p=1),this.x=(v-_)/p,this.y=(f-g)/p,this.z=(h-u)/p,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}nt.prototype.isVector4=!0;function _o(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yh(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const f=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),c.onUploadCallback();let _=r.FLOAT;return f instanceof Float32Array?_=r.FLOAT:f instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?c.isFloat16BufferAttribute?t?_=r.HALF_FLOAT:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=r.UNSIGNED_SHORT:f instanceof Int16Array?_=r.SHORT:f instanceof Uint32Array?_=r.UNSIGNED_INT:f instanceof Int32Array?_=r.INT:f instanceof Int8Array?_=r.BYTE:(f instanceof Uint8Array||f instanceof Uint8ClampedArray)&&(_=r.UNSIGNED_BYTE),{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(r.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,n(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ee{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Ee.prototype.isVector2=!0;const xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ft={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Ss(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class Le{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Ic(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=Ss(s,n,e+1/3),this.g=Ss(s,n,e),this.b=Ss(s,n,e-1/3)}return this}setStyle(e){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,t(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,t(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(n[1])/360,l=parseInt(n[2],10)/100,c=parseInt(n[3],10)/100;return t(n[4]),this.setHSL(o,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],s=n.length;if(s===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=xo[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,n=this.b,s=Math.max(t,i,n),a=Math.min(t,i,n);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-n)/u+(i<n?6:0);break;case i:o=(n-t)/u+2;break;case n:o=(t-i)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=i,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Ar);const i=ns(Ft.h,Ar.h,t),n=ns(Ft.s,Ar.s,t),s=ns(Ft.l,Ar.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Le.NAMES=xo,Le.prototype.isColor=!0,Le.prototype.r=1,Le.prototype.g=1,Le.prototype.b=1;const Fe=new D,Rr=new Ee;class bt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=fo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new Le),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new Ee),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new D),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new nt),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Fe.fromBufferAttribute(this,t),Fe.applyMatrix3(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.applyMatrix4(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.applyNormalMatrix(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.transformDirection(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}bt.prototype.isBufferAttribute=!0;class vo extends bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mo extends bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sh extends bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}Sh.prototype.isFloat16BufferAttribute=!0;class Ui extends bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}function yo(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,i=r.length;t<i;++t)r[t]>e&&(e=r[t]);return e}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function So(r,e=0){let t=3735928559^e,i=1103547991^e;for(let n=0,s;n<r.length;n++)s=r.charCodeAt(n),t=Math.imul(t^s,2654435761),i=Math.imul(i^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&i)+(t>>>0)}let bh=0;const Et=new qe,Ts=new yt,dn=new D,pt=new ln,Kn=new ln,ke=new D;class hi extends en{constructor(){super();Object.defineProperty(this,"id",{value:bh++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yo(e)>65535?Mo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,i){return Et.makeTranslation(e,t,i),this.applyMatrix4(Et),this}scale(e,t,i){return Et.makeScale(e,t,i),this.applyMatrix4(Et),this}lookAt(e){return Ts.lookAt(e),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dn).negate(),this.translate(dn.x,dn.y,dn.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,pt.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,pt.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(pt.min),this.boundingBox.expandByPoint(pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(pt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Kn.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(pt.min,Kn.min),pt.expandByPoint(ke),ke.addVectors(pt.max,Kn.max),pt.expandByPoint(ke)):(pt.expandByPoint(Kn.min),pt.expandByPoint(Kn.max))}pt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ke.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ke));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ke.fromBufferAttribute(o,c),l&&(dn.fromBufferAttribute(e,c),ke.add(dn)),n=Math.max(n,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;t.tangent===void 0&&this.setAttribute("tangent",new bt(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new D,u[I]=new D;const f=new D,h=new D,m=new D,_=new Ee,g=new Ee,v=new Ee,d=new D,p=new D;function S(I,A,q){f.fromArray(n,I*3),h.fromArray(n,A*3),m.fromArray(n,q*3),_.fromArray(a,I*2),g.fromArray(a,A*2),v.fromArray(a,q*2),h.sub(f),m.sub(f),g.sub(_),v.sub(_);const N=1/(g.x*v.y-v.x*g.y);!isFinite(N)||(d.copy(h).multiplyScalar(v.y).addScaledVector(m,-g.y).multiplyScalar(N),p.copy(m).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(N),c[I].add(d),c[A].add(d),c[q].add(d),u[I].add(p),u[A].add(p),u[q].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let I=0,A=M.length;I<A;++I){const q=M[I],N=q.start,U=q.count;for(let z=N,O=N+U;z<O;z+=3)S(i[z+0],i[z+1],i[z+2])}const y=new D,T=new D,x=new D,R=new D;function P(I){x.fromArray(s,I*3),R.copy(x);const A=c[I];y.copy(A),y.sub(x.multiplyScalar(x.dot(A))).normalize(),T.crossVectors(R,A);const N=T.dot(u[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=N}for(let I=0,A=M.length;I<A;++I){const q=M[I],N=q.start,U=q.count;for(let z=N,O=N+U;z<O;z+=3)P(i[z+0]),P(i[z+1]),P(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),v=e.getX(h+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),u.subVectors(a,s),f.subVectors(n,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)n.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(n,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const n in i){if(e.attributes[n]===void 0)continue;const a=i[n].array,o=e.attributes[n],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,h=c;f<u;f++,h++)a[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ke.fromBufferAttribute(e,t),ke.normalize(),e.setXYZ(t,ke.x,ke.y,ke.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,v=l.length;g<v;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new bt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}hi.prototype.isBufferGeometry=!0;class Jn extends hi{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(f,2));function _(g,v,d,p,S,M,y,T,x,R,P){const I=M/x,A=y/R,q=M/2,N=y/2,U=T/2,z=x+1,O=R+1;let B=0,Z=0;const ee=new D;for(let ne=0;ne<O;ne++){const Q=ne*A-N;for(let me=0;me<z;me++){const H=me*I-q;ee[g]=H*p,ee[v]=Q*S,ee[d]=U,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[v]=0,ee[d]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(me/x),f.push(1-ne/R),B+=1}}for(let ne=0;ne<R;ne++)for(let Q=0;Q<x;Q++){const me=h+Q+z*ne,H=h+Q+z*(ne+1),Y=h+(Q+1)+z*(ne+1),re=h+(Q+1)+z*ne;l.push(me,H,re),l.push(H,Y,re),Z+=6}o.addGroup(m,Z,P),m+=Z,h+=B}}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cr extends hi{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],g=[],v=[];for(let d=0;d<u;d++){const p=d*h-a;for(let S=0;S<c;S++){const M=S*f-s;_.push(M,-p,0),g.push(0,0,1),v.push(S/o),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let p=0;p<o;p++){const S=p+c*d,M=p+c*(d+1),y=p+1+c*(d+1),T=p+1+c*d;m.push(S,M,T),m.push(M,y,T)}this.setIndex(m),this.setAttribute("position",new Ui(_,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(v,2))}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}let Eh=0;class Qn extends en{constructor(){super();Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Gn(),this.name="",this.type="Material",this.fog=!0,this.blending=Wn,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.format=tt,this.transparent=!1,this.blendSrc=Ya,this.blendDst=Za,this.blendEquation=sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===qc;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.format!==tt&&(i.format=this.format),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Qn.prototype.isMaterial=!0;function pn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function je(r){const e={};for(let t=0;t<r.length;t++){const i=pn(r[t]);for(const n in i)e[n]=i[n]}return e}const Th={clone:pn,merge:je};var wh=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,Ah=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Oi extends Qn{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=wh,this.fragmentShader=Ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}Oi.prototype.isShaderMaterial=!0;const jt=new D,ws=new D,Pr=new D,fi=new D,As=new D,Dr=new D,Rs=new D;class Rh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ws.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(ws);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=fi.dot(this.direction),l=-fi.dot(Pr),c=fi.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),n&&n.copy(Pr).multiplyScalar(h).add(ws),m}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const i=jt.dot(this.direction),n=jt.dot(jt)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>n||((s>i||i!==i)&&(i=s),(a<n||n!==n)&&(n=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,i,n,s){As.subVectors(t,e),Dr.subVectors(i,e),Rs.crossVectors(As,Dr);let a=this.direction.dot(Rs),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(Dr.crossVectors(fi,Dr));if(l<0)return null;const c=o*this.direction.dot(As.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(Rs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const It=new D,$t=new D,Ls=new D,Kt=new D,mn=new D,gn=new D,bo=new D,Cs=new D,Ps=new D,Ds=new D;class Jt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),It.subVectors(e,t),n.cross(It);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){It.subVectors(n,t),$t.subVectors(i,t),Ls.subVectors(e,t);const a=It.dot(It),o=It.dot($t),l=It.dot(Ls),c=$t.dot($t),u=$t.dot(Ls),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Kt),l.set(0,0),l.addScaledVector(s,Kt.x),l.addScaledVector(a,Kt.y),l.addScaledVector(o,Kt.z),l}static isFrontFacing(e,t,i,n){return It.subVectors(i,t),$t.subVectors(e,t),It.cross($t).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),It.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Jt.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;mn.subVectors(n,i),gn.subVectors(s,i),Cs.subVectors(e,i);const l=mn.dot(Cs),c=gn.dot(Cs);if(l<=0&&c<=0)return t.copy(i);Ps.subVectors(e,n);const u=mn.dot(Ps),f=gn.dot(Ps);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(mn,a);Ds.subVectors(e,s);const m=mn.dot(Ds),_=gn.dot(Ds);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(gn,o);const v=u*_-m*f;if(v<=0&&f-u>=0&&m-_>=0)return bo.subVectors(s,n),o=(f-u)/(f-u+(m-_)),t.copy(n).addScaledVector(bo,o);const d=1/(v+g+h);return a=g*d,o=h*d,t.copy(i).addScaledVector(mn,a).addScaledVector(gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fs extends Qn{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Fs.prototype.isMeshBasicMaterial=!0;const Eo=new qe,_n=new Rh,Is=new Ms,di=new D,pi=new D,mi=new D,Ns=new D,Us=new D,Os=new D,Fr=new D,Ir=new D,Nr=new D,Ur=new Ee,Or=new Ee,Br=new Ee,Bs=new D,zr=new D;class Gt extends yt{constructor(e=new hi,t=new Fs){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(s),e.ray.intersectsSphere(Is)===!1)||(Eo.copy(s).invert(),_n.copy(e.ray).applyMatrix4(Eo),i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1))return;let a;if(i.isBufferGeometry){const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,_=i.drawRange;if(o!==null)if(Array.isArray(n))for(let g=0,v=m.length;g<v;g++){const d=m[g],p=n[d.materialIndex],S=Math.max(d.start,_.start),M=Math.min(o.count,Math.min(d.start+d.count,_.start+_.count));for(let y=S,T=M;y<T;y+=3){const x=o.getX(y),R=o.getX(y+1),P=o.getX(y+2);a=Gr(this,p,e,_n,l,c,u,f,h,x,R,P),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const g=Math.max(0,_.start),v=Math.min(o.count,_.start+_.count);for(let d=g,p=v;d<p;d+=3){const S=o.getX(d),M=o.getX(d+1),y=o.getX(d+2);a=Gr(this,n,e,_n,l,c,u,f,h,S,M,y),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let g=0,v=m.length;g<v;g++){const d=m[g],p=n[d.materialIndex],S=Math.max(d.start,_.start),M=Math.min(l.count,Math.min(d.start+d.count,_.start+_.count));for(let y=S,T=M;y<T;y+=3){const x=y,R=y+1,P=y+2;a=Gr(this,p,e,_n,l,c,u,f,h,x,R,P),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const g=Math.max(0,_.start),v=Math.min(l.count,_.start+_.count);for(let d=g,p=v;d<p;d+=3){const S=d,M=d+1,y=d+2;a=Gr(this,n,e,_n,l,c,u,f,h,S,M,y),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Gt.prototype.isMesh=!0;function Lh(r,e,t,i,n,s,a,o){let l;if(e.side===Ge?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side!==rn,o),l===null)return null;zr.copy(o),zr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:r}}function Gr(r,e,t,i,n,s,a,o,l,c,u,f){di.fromBufferAttribute(n,c),pi.fromBufferAttribute(n,u),mi.fromBufferAttribute(n,f);const h=r.morphTargetInfluences;if(s&&h){Fr.set(0,0,0),Ir.set(0,0,0),Nr.set(0,0,0);for(let _=0,g=s.length;_<g;_++){const v=h[_],d=s[_];v!==0&&(Ns.fromBufferAttribute(d,c),Us.fromBufferAttribute(d,u),Os.fromBufferAttribute(d,f),a?(Fr.addScaledVector(Ns,v),Ir.addScaledVector(Us,v),Nr.addScaledVector(Os,v)):(Fr.addScaledVector(Ns.sub(di),v),Ir.addScaledVector(Us.sub(pi),v),Nr.addScaledVector(Os.sub(mi),v)))}di.add(Fr),pi.add(Ir),mi.add(Nr)}r.isSkinnedMesh&&(r.boneTransform(c,di),r.boneTransform(u,pi),r.boneTransform(f,mi));const m=Lh(r,e,t,i,di,pi,mi,Bs);if(m){o&&(Ur.fromBufferAttribute(o,c),Or.fromBufferAttribute(o,u),Br.fromBufferAttribute(o,f),m.uv=Jt.getUV(Bs,di,pi,mi,Ur,Or,Br,new Ee)),l&&(Ur.fromBufferAttribute(l,c),Or.fromBufferAttribute(l,u),Br.fromBufferAttribute(l,f),m.uv2=Jt.getUV(Bs,di,pi,mi,Ur,Or,Br,new Ee));const _={a:c,b:u,c:f,normal:new D,materialIndex:0};Jt.getNormal(di,pi,mi,_.normal),m.face=_}return m}var Ch=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,Ph=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Dh=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,Fh=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Ih=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,Nh=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Uh=`
vec3 transformed = vec3( position );
`,Oh=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Bh=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,zh=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Gh=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,Vh=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,kh=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Hh=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Wh=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Xh=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,qh=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Yh=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Zh=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,jh=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );

		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );

		vec2 f = fract( uv );

		uv += 0.5 - f;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		if ( mipInt < cubeUV_maxMipLevel ) {

			uv.y += 2.0 * cubeUV_maxTileSize;

		}

		uv.y += filterInt * 2.0 * cubeUV_minTileSize;

		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );

		uv *= texelSize;

		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.x += texelSize;

		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.y += texelSize;

		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		uv.x -= texelSize;

		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;

		vec3 tm = mix( tl, tr, f.x );

		vec3 bm = mix( bl, br, f.x );

		return mix( tm, bm, f.y );

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,$h=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Kh=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Jh=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,Qh=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,ef=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,tf=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,nf=`
// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}

vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
	// return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}

vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}

vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	// NOTE: The implementation with min causes the shader to not compile on
	// a common Alcatel A502DL in Chrome 78/Android 8.1. Some research suggests 
	// that the chipset is Mediatek MT6739 w/ IMG PowerVR GE8100 GPU.
	// D = min( floor( D ) / 255.0, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}

// Inverse M matrix, for decoding
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`,rf=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

		envColor = envMapTexelToLinear( envColor );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,sf=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,af=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,of=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,lf=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,cf=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,uf=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,hf=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,ff=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,df=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return texture2D( gradientMap, coord ).rgb;

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,pf=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		lightMapIrradiance *= PI;

	#endif

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,mf=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,gf=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointLightInfo( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotLightInfo( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,_f=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,xf=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION

		uniform float refractionRatio;

	#endif

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec;

			#ifdef ENVMAP_MODE_REFLECTION

				reflectVec = reflect( - viewDir, normal );

				// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			#else

				reflectVec = refract( - viewDir, normal, refractionRatio );

			#endif

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,vf=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Mf=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,yf=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Sf=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,bf=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,Ef=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );


	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,Tf=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,wf=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI;

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,Af=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,Rf=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Lf=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,Cf=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Pf=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,Df=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`,Ff=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,If=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,Nf=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Uf=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Of=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Bf=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,zf=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;

		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {

			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;

			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,Gf=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			#ifndef USE_MORPHNORMALS

				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];

			#else

				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];

			#endif

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,Vf=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,kf=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Hf=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Wf=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Xf=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,qf=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,Yf=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Zf=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,jf=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,$f=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Kf=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,Jf=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Qf=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,ed=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,td=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,id=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,nd=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,rd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,sd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,ad=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,od=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,ld=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,cd=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`,ud=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,hd=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,fd=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,dd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,pd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,md=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,gd=`
#ifdef USE_TRANSMISSION

	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;

	#ifdef USE_TRANSMISSIONMAP

		transmissionFactor *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		thicknessFactor *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif
`,_d=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( float roughness, float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef TEXTURE_LOD_EXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {

		if ( attenuationDistance == 0.0 ) {

			// Attenuation distance is +\u221E (which we indicate by zero), i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,xd=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,vd=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,Md=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,yd=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,Sd=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,bd=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,Ed=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const ve={alphamap_fragment:Ch,alphamap_pars_fragment:Ph,alphatest_fragment:Dh,alphatest_pars_fragment:Fh,aomap_fragment:Ih,aomap_pars_fragment:Nh,begin_vertex:Uh,beginnormal_vertex:Oh,bsdfs:Bh,bumpmap_pars_fragment:zh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Hh,color_fragment:Wh,color_pars_fragment:Xh,color_pars_vertex:qh,color_vertex:Yh,common:Zh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Kh,displacementmap_vertex:Jh,emissivemap_fragment:Qh,emissivemap_pars_fragment:ef,encodings_fragment:tf,encodings_pars_fragment:nf,envmap_fragment:rf,envmap_common_pars_fragment:sf,envmap_pars_fragment:af,envmap_pars_vertex:of,envmap_physical_pars_fragment:xf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:uf,fog_fragment:hf,fog_pars_fragment:ff,gradientmap_pars_fragment:df,lightmap_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_vertex:gf,lights_pars_begin:_f,lights_toon_fragment:vf,lights_toon_pars_fragment:Mf,lights_phong_fragment:yf,lights_phong_pars_fragment:Sf,lights_physical_fragment:bf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:wf,lights_fragment_end:Af,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Df,map_pars_fragment:Ff,map_particle_fragment:If,map_particle_pars_fragment:Nf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:zf,morphtarget_vertex:Gf,normal_fragment_begin:Vf,normal_fragment_maps:kf,normal_pars_fragment:Hf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:jf,output_fragment:$f,packing:Kf,premultiplied_alpha_fragment:Jf,project_vertex:Qf,dithering_fragment:ed,dithering_pars_fragment:td,roughnessmap_fragment:id,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:sd,shadowmap_vertex:ad,shadowmask_pars_fragment:od,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:ud,skinnormal_vertex:hd,specularmap_fragment:fd,specularmap_pars_fragment:dd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:gd,transmission_pars_fragment:_d,uv_pars_fragment:xd,uv_pars_vertex:vd,uv_vertex:Md,uv2_pars_fragment:yd,uv2_pars_vertex:Sd,uv2_vertex:bd,worldpos_vertex:Ed,background_vert:`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,background_frag:`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,cube_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,cube_frag:`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,depth_vert:`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,depth_frag:`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,distanceRGBA_vert:`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,distanceRGBA_frag:`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,equirect_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,equirect_frag:`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,linedashed_vert:`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,linedashed_frag:`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,meshbasic_vert:`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,meshbasic_frag:`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,meshlambert_vert:`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,meshlambert_frag:`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,meshmatcap_vert:`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,meshmatcap_frag:`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,meshnormal_vert:`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,meshnormal_frag:`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

}
`,meshphong_vert:`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,meshphong_frag:`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,meshphysical_vert:`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,meshphysical_frag:`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,meshtoon_vert:`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,meshtoon_frag:`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,points_vert:`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,points_frag:`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,shadow_vert:`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,shadow_frag:`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,sprite_vert:`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,sprite_frag:`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},j={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},Vt={basic:{uniforms:je([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:je([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.fog,j.lights,{emissive:{value:new Le(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:je([j.common,j.specularmap,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.fog,j.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:je([j.common,j.envmap,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.roughnessmap,j.metalnessmap,j.fog,j.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:je([j.common,j.aomap,j.lightmap,j.emissivemap,j.bumpmap,j.normalmap,j.displacementmap,j.gradientmap,j.fog,j.lights,{emissive:{value:new Le(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:je([j.common,j.bumpmap,j.normalmap,j.displacementmap,j.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:je([j.points,j.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:je([j.common,j.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:je([j.common,j.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:je([j.common,j.bumpmap,j.normalmap,j.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:je([j.sprite,j.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},cube:{uniforms:je([j.envmap,{opacity:{value:1}}]),vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:je([j.common,j.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:je([j.lights,j.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Vt.physical={uniforms:je([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};function Td(r,e,t,i,n){const s=new Le(0);let a=0,o,l,c=null,u=0,f=null;function h(_,g){let v=!1,d=g.isScene===!0?g.background:null;d&&d.isTexture&&(d=e.get(d));const p=r.xr,S=p.getSession&&p.getSession();S&&S.environmentBlendMode==="additive"&&(d=null),d===null?m(s,a):d&&d.isColor&&(m(d,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),d&&(d.isCubeTexture||d.mapping===Mr)?(l===void 0&&(l=new Gt(new Jn(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:pn(Vt.cube.uniforms),vertexShader:Vt.cube.vertexShader,fragmentShader:Vt.cube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=d,l.material.uniforms.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,(c!==d||u!==d.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,c=d,u=d.version,f=r.toneMapping),_.unshift(l,l.geometry,l.material,0,0,null)):d&&d.isTexture&&(o===void 0&&(o=new Gt(new Cr(2,2),new Oi({name:"BackgroundMaterial",uniforms:pn(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=d,d.matrixAutoUpdate===!0&&d.updateMatrix(),o.material.uniforms.uvTransform.value.copy(d.matrix),(c!==d||u!==d.version||f!==r.toneMapping)&&(o.material.needsUpdate=!0,c=d,u=d.version,f=r.toneMapping),_.unshift(o,o.geometry,o.material,0,0,null))}function m(_,g){t.buffers.color.setClear(_.r,_.g,_.b,g,n)}return{getClearColor:function(){return s},setClearColor:function(_,g=1){s.set(_),a=g,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(s,a)},render:h}}function wd(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l;function u(N,U,z,O,B){let Z=!1;if(a){const ee=_(O,z,U);c!==ee&&(c=ee,h(c.object)),Z=v(O,B),Z&&d(O,B)}else{const ee=U.wireframe===!0;(c.geometry!==O.id||c.program!==z.id||c.wireframe!==ee)&&(c.geometry=O.id,c.program=z.id,c.wireframe=ee,Z=!0)}N.isInstancedMesh===!0&&(Z=!0),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),Z&&(x(N,U,z,O),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function f(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(N){return i.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function m(N){return i.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,U,z){const O=z.wireframe===!0;let B=o[N.id];B===void 0&&(B={},o[N.id]=B);let Z=B[U.id];Z===void 0&&(Z={},B[U.id]=Z);let ee=Z[O];return ee===void 0&&(ee=g(f()),Z[O]=ee),ee}function g(N){const U=[],z=[],O=[];for(let B=0;B<n;B++)U[B]=0,z[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:O,object:N,attributes:{},index:null}}function v(N,U){const z=c.attributes,O=N.attributes;let B=0;for(const Z in O){const ee=z[Z],ne=O[Z];if(ee===void 0||ee.attribute!==ne||ee.data!==ne.data)return!0;B++}return c.attributesNum!==B||c.index!==U}function d(N,U){const z={},O=N.attributes;let B=0;for(const Z in O){const ee=O[Z],ne={};ne.attribute=ee,ee.data&&(ne.data=ee.data),z[Z]=ne,B++}c.attributes=z,c.attributesNum=B,c.index=U}function p(){const N=c.newAttributes;for(let U=0,z=N.length;U<z;U++)N[U]=0}function S(N){M(N,0)}function M(N,U){const z=c.newAttributes,O=c.enabledAttributes,B=c.attributeDivisors;z[N]=1,O[N]===0&&(r.enableVertexAttribArray(N),O[N]=1),B[N]!==U&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,U),B[N]=U)}function y(){const N=c.newAttributes,U=c.enabledAttributes;for(let z=0,O=U.length;z<O;z++)U[z]!==N[z]&&(r.disableVertexAttribArray(z),U[z]=0)}function T(N,U,z,O,B,Z){i.isWebGL2===!0&&(z===r.INT||z===r.UNSIGNED_INT)?r.vertexAttribIPointer(N,U,z,B,Z):r.vertexAttribPointer(N,U,z,O,B,Z)}function x(N,U,z,O){if(i.isWebGL2===!1&&(N.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const B=O.attributes,Z=z.getAttributes(),ee=U.defaultAttributeValues;for(const ne in Z){const Q=Z[ne];if(Q.location>=0){let me=B[ne];if(me===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),me!==void 0){const H=me.normalized,Y=me.itemSize,re=t.get(me);if(re===void 0)continue;const L=re.buffer,ge=re.type,xe=re.bytesPerElement;if(me.isInterleavedBufferAttribute){const te=me.data,ce=te.stride,Te=me.offset;if(te&&te.isInstancedInterleavedBuffer){for(let de=0;de<Q.locationSize;de++)M(Q.location+de,te.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<Q.locationSize;de++)S(Q.location+de);r.bindBuffer(r.ARRAY_BUFFER,L);for(let de=0;de<Q.locationSize;de++)T(Q.location+de,Y/Q.locationSize,ge,H,ce*xe,(Te+Y/Q.locationSize*de)*xe)}else{if(me.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)M(Q.location+te,me.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let te=0;te<Q.locationSize;te++)S(Q.location+te);r.bindBuffer(r.ARRAY_BUFFER,L);for(let te=0;te<Q.locationSize;te++)T(Q.location+te,Y/Q.locationSize,ge,H,Y*xe,Y/Q.locationSize*te*xe)}}else if(ee!==void 0){const H=ee[ne];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(Q.location,H);break;case 3:r.vertexAttrib3fv(Q.location,H);break;case 4:r.vertexAttrib4fv(Q.location,H);break;default:r.vertexAttrib1fv(Q.location,H)}}}}y()}function R(){A();for(const N in o){const U=o[N];for(const z in U){const O=U[z];for(const B in O)m(O[B].object),delete O[B];delete U[z]}delete o[N]}}function P(N){if(o[N.id]===void 0)return;const U=o[N.id];for(const z in U){const O=U[z];for(const B in O)m(O[B].object),delete O[B];delete U[z]}delete o[N.id]}function I(N){for(const U in o){const z=o[U];if(z[N.id]===void 0)continue;const O=z[N.id];for(const B in O)m(O[B].object),delete O[B];delete z[N.id]}}function A(){q(),c!==l&&(c=l,h(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:A,resetDefaultState:q,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:p,enableAttribute:S,disableUnusedAttributes:y}}function Ad(r,e,t,i){const n=i.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(n)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Rd(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,M=a||e.has("OES_texture_float"),y=S&&M,T=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:v,maxVaryings:d,maxFragmentUniforms:p,vertexTextures:S,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:T}}function Ld(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new ui,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const _=f.length!==0||h||i!==0||n;return n=h,t=u(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const _=f.clippingPlanes,g=f.clipIntersection,v=f.clipShadows,d=r.get(f);if(!n||_===null||_.length===0||s&&!v)s?u(null):c();else{const p=s?0:i,S=p*4;let M=d.clippingState||null;l.value=M,M=u(_,h,S,m);for(let y=0;y!==S;++y)M[y]=t[y];d.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const g=f!==null?f.length:0;let v=null;if(g!==0){if(v=l.value,_!==!0||v===null){const d=m+g*4,p=h.matrixWorldInverse;o.getNormalMatrix(p),(v===null||v.length<d)&&(v=new Float32Array(d));for(let S=0,M=m;S!==g;++S,M+=4)a.copy(f[S]).applyMatrix4(p,o),a.normal.toArray(v,M),v[M+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}let xn;class Cd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xn===void 0&&(xn=Lr("canvas")),xn.width=e.width,xn.height=e.height;const i=xn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Pd=0;class mt extends en{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,i=dt,n=dt,s=St,a=yr,o=tt,l=ai,c=1,u=it){super();Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Gn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const n=this.image;if(n.uuid===void 0&&(n.uuid=Gn()),!t&&e.images[n.uuid]===void 0){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(zs(n[a].image)):s.push(zs(n[a]))}else s=zs(n);e.images[n.uuid]={uuid:n.uuid,url:s}}i.image=n.uuid}return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$a)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case dt:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case dt:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}mt.DEFAULT_IMAGE=void 0,mt.DEFAULT_MAPPING=$a,mt.prototype.isTexture=!0;function zs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Cd.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class gi extends en{constructor(e,t,i={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.texture=new mt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:St,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Dc({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}gi.prototype.isWebGLRenderTarget=!0;class Gs extends yt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Gs.prototype.isCamera=!0;class Nt extends Gs{constructor(e=50,t=1,i=.1,n=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ht*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ve*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ht*2*Math.atan(Math.tan(Ve*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ve*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Nt.prototype.isPerspectiveCamera=!0;const vn=90,Mn=1;class Dd extends yt{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const n=new Nt(vn,Mn,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new D(1,0,0)),this.add(n);const s=new Nt(vn,Mn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const a=new Nt(vn,Mn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new D(0,1,0)),this.add(a);const o=new Nt(vn,Mn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new D(0,-1,0)),this.add(o);const l=new Nt(vn,Mn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Nt(vn,Mn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,o,l,c]=this.children,u=e.xr.enabled,f=e.getRenderTarget();e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(f),e.xr.enabled=u}}class Vs extends mt{constructor(e,t,i,n,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xn;super(e,t,i,n,s,a,o,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Vs.prototype.isCubeTexture=!0;class To extends gi{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i);super(e,e,t);t=t||{},this.texture=new Vs(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=tt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Jn(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:pn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:si});s.uniforms.tEquirect.value=t;const a=new Gt(n,s),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=St),new Dd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}To.prototype.isWebGLCubeRenderTarget=!0;function Fd(r){let e=new WeakMap;function t(a,o){return o===as?a.mapping=Xn:o===os&&(a.mapping=qn),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===as||o===os)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new To(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),r.setRenderTarget(c),a.addEventListener("dispose",n),t(u.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ks extends Gs{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ks.prototype.isOrthographicCamera=!0;class Vr extends Oi{constructor(e){super(e);this.type="RawShaderMaterial"}}Vr.prototype.isRawShaderMaterial=!0;const yn=4,_i=8,kt=Math.pow(2,_i),wo=[.125,.215,.35,.446,.526,.582],Ao=_i-yn+1+wo.length,Sn=20,xi={[it]:0,[on]:1,[ps]:2,[co]:3,[uo]:4,[ho]:5,[ds]:6},Hs=new ks,{_lodPlanes:er,_sizeLods:Ro,_sigmas:kr}=Ud(),Lo=new Le;let Ws=null;const Bi=(1+Math.sqrt(5))/2,bn=1/Bi,Co=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Bi,bn),new D(0,Bi,-bn),new D(bn,0,Bi),new D(-bn,0,Bi),new D(Bi,bn,0),new D(-Bi,bn,0)];class Id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Od(Sn),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ws=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Fo(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Do(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<er.length;e++)er[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ws),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e){Ws=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:at,minFilter:at,generateMipmaps:!1,type:ai,format:Lu,encoding:Nd(e)?e.encoding:ps,depthBuffer:!1},i=Po(t);return i.depthBuffer=!e,this._pingPongRenderTarget=Po(t),i}_compileMaterial(e){const t=new Gt(er[0],e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,n){const s=90,a=1,o=new Nt(s,a,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.outputEncoding,m=u.toneMapping;u.getClearColor(Lo),u.toneMapping=Fi,u.outputEncoding=it,u.autoClear=!1;const _=new Fs({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Gt(new Jn,_);let v=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,v=!0):(_.color.copy(Lo),v=!0);for(let p=0;p<6;p++){const S=p%3;S==0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S==1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p])),Hr(n,S*kt,p>2?kt:0,kt,kt),u.setRenderTarget(n),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.outputEncoding=h,u.autoClear=f,e.background=d}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===tt&&t.type===ai&&t.encoding===on?e.value=xi[it]:e.value=xi[t.encoding]}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Xn||e.mapping===qn;n?this._cubemapShader==null&&(this._cubemapShader=Fo()):this._equirectShader==null&&(this._equirectShader=Do());const s=n?this._cubemapShader:this._equirectShader,a=new Gt(er[0],s),o=s.uniforms;o.envMap.value=e,n||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),Hr(t,0,0,3*kt,2*kt),i.setRenderTarget(t),i.render(a,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<Ao;n++){const s=Math.sqrt(kr[n]*kr[n]-kr[n-1]*kr[n-1]),a=Co[(n-1)%Co.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gt(er[n],c),h=c.uniforms,m=Ro[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Sn-1),g=s/_,v=isFinite(s)?1+Math.floor(u*g):Sn;v>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Sn}`);const d=[];let p=0;for(let T=0;T<Sn;++T){const x=T/g,R=Math.exp(-x*x/2);d.push(R),T==0?p+=R:T<v&&(p+=2*R)}for(let T=0;T<d.length;T++)d[T]=d[T]/p;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o),h.dTheta.value=_,h.mipInt.value=_i-i,this._setEncoding(h.inputEncoding,e.texture),this._setEncoding(h.outputEncoding,e.texture);const S=Ro[n],M=3*Math.max(0,kt-2*S),y=(n===0?0:2*kt)+2*S*(n>_i-yn?n-_i+yn:0);Hr(t,M,y,3*S,2*S),l.setRenderTarget(t),l.render(f,Hs)}}function Nd(r){return r===void 0||r.type!==ai?!1:r.encoding===it||r.encoding===on||r.encoding===ds}function Ud(){const r=[],e=[],t=[];let i=_i;for(let n=0;n<Ao;n++){const s=Math.pow(2,i);e.push(s);let a=1/s;n>_i-yn?a=wo[n-_i+yn-1]:n==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,m=3,_=2,g=1,v=new Float32Array(m*h*f),d=new Float32Array(_*h*f),p=new Float32Array(g*h*f);for(let M=0;M<f;M++){const y=M%3*2/3-1,T=M>2?0:-1,x=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];v.set(x,m*h*M),d.set(u,_*h*M);const R=[M,M,M,M,M,M];p.set(R,g*h*M)}const S=new hi;S.setAttribute("position",new bt(v,m)),S.setAttribute("uv",new bt(d,_)),S.setAttribute("faceIndex",new bt(p,g)),r.push(S),i>yn&&i--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function Po(r){const e=new gi(3*kt,3*kt,r);return e.texture.mapping=Mr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Hr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Od(r){const e=new Float32Array(r),t=new D(0,1,0);return new Vr({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:xi[it]},outputEncoding:{value:xi[it]}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${qs()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Do(){const r=new Ee(1,1);return new Vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:xi[it]},outputEncoding:{value:xi[it]}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${qs()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Fo(){return new Vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:xi[it]},outputEncoding:{value:xi[it]}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${qs()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qs(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Bd(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===as||l===os,u=l===Xn||l===qn;if(c||u){if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&n(f)){const h=r.getRenderTarget();t===null&&(t=new Id(r));const m=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,m),r.setRenderTarget(h),o.addEventListener("dispose",s),m.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function zd(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Gd(r,e,t,i){const n={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete n[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let v=0,d=g.length;v<d;v++)e.update(g[v],r.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const p=m.array;g=m.version;for(let S=0,M=p.length;S<M;S+=3){const y=p[S+0],T=p[S+1],x=p[S+2];h.push(y,T,T,x,x,y)}}else{const p=_.array;g=_.version;for(let S=0,M=p.length/3-1;S<M;S+=3){const y=S+0,T=S+1,x=S+2;h.push(y,T,T,x,x,y)}}const v=new(yo(h)>65535?Mo:vo)(h,1);v.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,v)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Vd(r,e,t,i){const n=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let g,v;if(n)g=r,v="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,m,o,h*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function kd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class Ys extends mt{constructor(e=null,t=1,i=1,n=1){super(null);this.image={data:e,width:t,height:i,depth:n},this.magFilter=at,this.minFilter=at,this.wrapR=dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ys.prototype.isDataTexture2DArray=!0;function Hd(r,e){return r[0]-e[0]}function Wd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Io(r,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),r.divideScalar(t)}function Xd(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,a=new D,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position.length;let g=s.get(u);if(g===void 0||g.count!==_){g!==void 0&&g.texture.dispose();const p=u.morphAttributes.normal!==void 0,S=u.morphAttributes.position,M=u.morphAttributes.normal||[],y=u.attributes.position.count,T=p===!0?2:1;let x=y*T,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const P=new Float32Array(x*R*4*_),I=new Ys(P,x,R,_);I.format=tt,I.type=oi;const A=T*4;for(let q=0;q<_;q++){const N=S[q],U=M[q],z=x*R*4*q;for(let O=0;O<N.count;O++){a.fromBufferAttribute(N,O),N.normalized===!0&&Io(a,N);const B=O*A;P[z+B+0]=a.x,P[z+B+1]=a.y,P[z+B+2]=a.z,P[z+B+3]=0,p===!0&&(a.fromBufferAttribute(U,O),U.normalized===!0&&Io(a,U),P[z+B+4]=a.x,P[z+B+5]=a.y,P[z+B+6]=a.z,P[z+B+7]=0)}}g={count:_,texture:I,size:new Ee(x,R)},s.set(u,g)}let v=0;for(let p=0;p<m.length;p++)v+=m[p];const d=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",d),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const _=m===void 0?0:m.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];i[u.id]=g}for(let M=0;M<_;M++){const y=g[M];y[0]=M,y[1]=m[M]}g.sort(Wd);for(let M=0;M<8;M++)M<_&&g[M][1]?(o[M][0]=g[M][0],o[M][1]=g[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Hd);const v=u.morphAttributes.position,d=u.morphAttributes.normal;let p=0;for(let M=0;M<8;M++){const y=o[M],T=y[0],x=y[1];T!==Number.MAX_SAFE_INTEGER&&x?(v&&u.getAttribute("morphTarget"+M)!==v[T]&&u.setAttribute("morphTarget"+M,v[T]),d&&u.getAttribute("morphNormal"+M)!==d[T]&&u.setAttribute("morphNormal"+M,d[T]),n[M]=x,p+=x):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),n[M]=0)}const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}class No extends gi{constructor(e,t,i){super(e,t,i);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}No.prototype.isWebGLMultisampleRenderTarget=!0;function qd(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),f}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Uo extends mt{constructor(e=null,t=1,i=1,n=1){super(null);this.image={data:e,width:t,height:i,depth:n},this.magFilter=at,this.minFilter=at,this.wrapR=dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Uo.prototype.isDataTexture3D=!0;const Oo=new mt,Yd=new Ys,Zd=new Uo,Bo=new Vs,zo=[],Go=[],Vo=new Float32Array(16),ko=new Float32Array(9),Ho=new Float32Array(4);function En(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=zo[n];if(s===void 0&&(s=new Float32Array(n),zo[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function rt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function $e(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Wo(r,e){let t=Go[e];t===void 0&&(t=new Int32Array(e),Go[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function jd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2fv(this.addr,e),$e(t,e)}}function Kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;r.uniform3fv(this.addr,e),$e(t,e)}}function Jd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4fv(this.addr,e),$e(t,e)}}function Qd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$e(t,e)}else{if(rt(t,i))return;Ho.set(i),r.uniformMatrix2fv(this.addr,!1,Ho),$e(t,i)}}function ep(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$e(t,e)}else{if(rt(t,i))return;ko.set(i),r.uniformMatrix3fv(this.addr,!1,ko),$e(t,i)}}function tp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$e(t,e)}else{if(rt(t,i))return;Vo.set(i),r.uniformMatrix4fv(this.addr,!1,Vo),$e(t,i)}}function ip(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function np(r,e){const t=this.cache;rt(t,e)||(r.uniform2iv(this.addr,e),$e(t,e))}function rp(r,e){const t=this.cache;rt(t,e)||(r.uniform3iv(this.addr,e),$e(t,e))}function sp(r,e){const t=this.cache;rt(t,e)||(r.uniform4iv(this.addr,e),$e(t,e))}function ap(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function op(r,e){const t=this.cache;rt(t,e)||(r.uniform2uiv(this.addr,e),$e(t,e))}function lp(r,e){const t=this.cache;rt(t,e)||(r.uniform3uiv(this.addr,e),$e(t,e))}function cp(r,e){const t=this.cache;rt(t,e)||(r.uniform4uiv(this.addr,e),$e(t,e))}function up(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.safeSetTexture2D(e||Oo,n)}function hp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Zd,n)}function fp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.safeSetTextureCube(e||Bo,n)}function dp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Yd,n)}function pp(r){switch(r){case 5126:return jd;case 35664:return $d;case 35665:return Kd;case 35666:return Jd;case 35674:return Qd;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return ip;case 35667:case 35671:return np;case 35668:case 35672:return rp;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return dp}}function mp(r,e){r.uniform1fv(this.addr,e)}function gp(r,e){const t=En(e,this.size,2);r.uniform2fv(this.addr,t)}function _p(r,e){const t=En(e,this.size,3);r.uniform3fv(this.addr,t)}function xp(r,e){const t=En(e,this.size,4);r.uniform4fv(this.addr,t)}function vp(r,e){const t=En(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Mp(r,e){const t=En(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yp(r,e){const t=En(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sp(r,e){r.uniform1iv(this.addr,e)}function bp(r,e){r.uniform2iv(this.addr,e)}function Ep(r,e){r.uniform3iv(this.addr,e)}function Tp(r,e){r.uniform4iv(this.addr,e)}function wp(r,e){r.uniform1uiv(this.addr,e)}function Ap(r,e){r.uniform2uiv(this.addr,e)}function Rp(r,e){r.uniform3uiv(this.addr,e)}function Lp(r,e){r.uniform4uiv(this.addr,e)}function Cp(r,e,t){const i=e.length,n=Wo(t,i);r.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Oo,n[s])}function Pp(r,e,t){const i=e.length,n=Wo(t,i);r.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Bo,n[s])}function Dp(r){switch(r){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return xp;case 35674:return vp;case 35675:return Mp;case 35676:return yp;case 5124:case 35670:return Sp;case 35667:case 35671:return bp;case 35668:case 35672:return Ep;case 35669:case 35673:return Tp;case 5125:return wp;case 36294:return Ap;case 36295:return Rp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp}}function Fp(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=pp(e.type)}function Xo(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Dp(e.type)}Xo.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),$e(e,r)};function qo(r){this.id=r,this.seq=[],this.map={}}qo.prototype.setValue=function(r,e,t){const i=this.seq;for(let n=0,s=i.length;n!==s;++n){const a=i[n];a.setValue(r,e[a.id],t)}};const Zs=/(\w+)(\])?(\[|\.)?/g;function Yo(r,e){r.seq.push(e),r.map[e.id]=e}function Ip(r,e,t){const i=r.name,n=i.length;for(Zs.lastIndex=0;;){const s=Zs.exec(i),a=Zs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Yo(t,c===void 0?new Fp(o,r,e):new Xo(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new qo(o),Yo(t,f)),t=f}}}function vi(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,r.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const n=r.getActiveUniform(e,i),s=r.getUniformLocation(e,n.name);Ip(n,s,this)}}vi.prototype.setValue=function(r,e,t,i){const n=this.map[e];n!==void 0&&n.setValue(r,t,i)},vi.prototype.setOptional=function(r,e,t){const i=e[t];i!==void 0&&this.setValue(r,t,i)},vi.upload=function(r,e,t,i){for(let n=0,s=e.length;n!==s;++n){const a=e[n],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,i)}},vi.seqWithValue=function(r,e){const t=[];for(let i=0,n=r.length;i!==n;++i){const s=r[i];s.id in e&&t.push(s)}return t};function Zo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let Np=0;function Up(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function jo(r){switch(r){case it:return["Linear","( value )"];case on:return["sRGB","( value )"];case ps:return["RGBE","( value )"];case co:return["RGBM","( value, 7.0 )"];case uo:return["RGBM","( value, 16.0 )"];case ho:return["RGBD","( value, 256.0 )"];case ds:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case fh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function $o(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();return i&&n===""?"":t.toUpperCase()+`

`+n+`

`+Up(r.getShaderSource(e))}function zi(r,e){const t=jo(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Op(r,e){const t=jo(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Bp(r,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="OptimizedCineon";break;case _u:t="ACESFilmic";break;case xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zp(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function Gp(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vp(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function tr(r){return r!==""}function Ko(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(r){return r.replace(kp,Hp)}function Hp(r,e){const t=ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return js(t)}const Wp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(r){return r.replace(Xp,el).replace(Wp,qp)}function qp(r,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),el(r,e,t,i)}function el(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function tl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Va?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xn:case qn:e="ENVMAP_TYPE_CUBE";break;case Mr:case ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qn:case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function $p(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case fu:e="ENVMAP_BLENDING_MIX";break;case du:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Yp(t),c=Zp(t),u=jp(t),f=$p(t),h=r.gammaFactor>0?r.gammaFactor:1,m=t.isWebGL2?"":zp(t),_=Gp(s),g=n.createProgram();let v,d,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[_].filter(tr).join(`
`),v.length>0&&(v+=`
`),d=[m,_].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(v=[tl(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[m,tl(t),"#define SHADER_NAME "+t.shaderName,_,"#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?ve.tonemapping_pars_fragment:"",t.toneMapping!==Fi?Bp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Zn?"#define OPAQUE":"",ve.encodings_pars_fragment,t.map?zi("mapTexelToLinear",t.mapEncoding):"",t.matcap?zi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?zi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?zi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?zi("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?zi("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?zi("lightMapTexelToLinear",t.lightMapEncoding):"",Op("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=js(a),a=Ko(a,t),a=Jo(a,t),o=js(o),o=Ko(o,t),o=Jo(o,t),a=Qo(a),o=Qo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",t.glslVersion===po?"":"out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=p+v+a,M=p+d+o,y=Zo(n,n.VERTEX_SHADER,S),T=Zo(n,n.FRAGMENT_SHADER,M);if(n.attachShader(g,y),n.attachShader(g,T),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),r.debug.checkShaderErrors){const P=n.getProgramInfoLog(g).trim(),I=n.getShaderInfoLog(y).trim(),A=n.getShaderInfoLog(T).trim();let q=!0,N=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1){q=!1;const U=$o(n,y,"vertex"),z=$o(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+U+`
`+z)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||A==="")&&(N=!1);N&&(this.diagnostics={runnable:q,programLog:P,vertexShader:{log:I,prefix:v},fragmentShader:{log:A,prefix:d}})}n.deleteShader(y),n.deleteShader(T);let x;this.getUniforms=function(){return x===void 0&&(x=new vi(n,g)),x};let R;return this.getAttributes=function(){return R===void 0&&(R=Vp(n,g)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Np++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}function Jp(r,e,t,i,n,s,a){const o=[],l=n.isWebGL2,c=n.logarithmicDepthBuffer,u=n.floatVertexTextures,f=n.maxVertexUniforms,h=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function v(x){const P=x.skeleton.bones;if(u)return 1024;{const A=Math.floor((f-20)/4),q=Math.min(A,P.length);return q<P.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+P.length+" bones. This GPU supports "+q+"."),0):q}}function d(x){let R;return x&&x.isTexture?R=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),R=x.texture.encoding):R=it,l&&x&&x.isTexture&&x.format===tt&&x.type===ai&&x.encoding===on&&(R=it),R}function p(x,R,P,I,A){const q=I.fog,N=x.isMeshStandardMaterial?I.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),z=_[x.type],O=A.isSkinnedMesh?v(A):0;x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let B,Z;if(z){const H=Vt[z];B=H.vertexShader,Z=H.fragmentShader}else B=x.vertexShader,Z=x.fragmentShader;const ee=r.getRenderTarget(),ne=x.alphaTest>0,Q=x.clearcoat>0;return{isWebGL2:l,shaderID:z,shaderName:x.type,vertexShader:B,fragmentShader:Z,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:A.isInstancedMesh===!0,instancingColor:A.isInstancedMesh===!0&&A.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ee!==null?d(ee.texture):r.outputEncoding,map:!!x.map,mapEncoding:d(x.map),matcap:!!x.matcap,matcapEncoding:d(x.matcap),envMap:!!U,envMapMode:U&&U.mapping,envMapEncoding:d(U),envMapCubeUV:!!U&&(U.mapping===Mr||U.mapping===ls),lightMap:!!x.lightMap,lightMapEncoding:d(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:d(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===gh,tangentSpaceNormalMap:x.normalMapType===mh,clearcoat:Q,clearcoatMap:Q&&!!x.clearcoatMap,clearcoatRoughnessMap:Q&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Q&&!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,specularColorMapEncoding:d(x.specularColorMap),alphaMap:!!x.alphaMap,alphaTest:ne,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenColorMapEncoding:d(x.sheenColorMap),sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!A.geometry&&!!A.geometry.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.geometry&&!!A.geometry.attributes.color&&A.geometry.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!q,useFog:x.fog,fogExp2:q&&q.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:A.isSkinnedMesh===!0&&O>0,maxBones:O,useVertexTexture:u,morphTargets:!!A.geometry&&!!A.geometry.morphAttributes.position,morphNormals:!!A.geometry&&!!A.geometry.morphAttributes.normal,morphTargetsCount:!!A.geometry&&!!A.geometry.morphAttributes.position?A.geometry.morphAttributes.position.length:0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:x.format,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Fi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Ge,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function S(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(So(x.fragmentShader)),R.push(So(x.vertexShader))),x.defines!==void 0)for(const P in x.defines)R.push(P),R.push(x.defines[P]);if(x.isRawShaderMaterial===!1){for(let P=0;P<g.length;P++)R.push(x[g[P]]);R.push(r.outputEncoding),R.push(r.gammaFactor)}return R.push(x.customProgramCacheKey),R.join()}function M(x){const R=_[x.type];let P;if(R){const I=Vt[R];P=Th.clone(I.uniforms)}else P=x.uniforms;return P}function y(x,R){let P;for(let I=0,A=o.length;I<A;I++){const q=o[I];if(q.cacheKey===R){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Kp(r,R,x,s),o.push(P)),P}function T(x){if(--x.usedTimes==0){const R=o.indexOf(x);o[R]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:p,getProgramCacheKey:S,getUniforms:M,acquireProgram:y,releaseProgram:T,programs:o}}function Qp(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function em(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function il(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nl(r){const e=[];let t=0;const i=[],n=[],s=[],a={id:-1};function o(){t=0,i.length=0,n.length=0,s.length=0}function l(m,_,g,v,d,p){let S=e[t];const M=r.get(g);return S===void 0?(S={id:m.id,object:m,geometry:_,material:g,program:M.program||a,groupOrder:v,renderOrder:m.renderOrder,z:d,group:p},e[t]=S):(S.id=m.id,S.object=m,S.geometry=_,S.material=g,S.program=M.program||a,S.groupOrder=v,S.renderOrder=m.renderOrder,S.z=d,S.group=p),t++,S}function c(m,_,g,v,d,p){const S=l(m,_,g,v,d,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):i.push(S)}function u(m,_,g,v,d,p){const S=l(m,_,g,v,d,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):i.unshift(S)}function f(m,_){i.length>1&&i.sort(m||em),n.length>1&&n.sort(_||il),s.length>1&&s.sort(_||il)}function h(){for(let m=t,_=e.length;m<_;m++){const g=e[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:i,transmissive:n,transparent:s,init:o,push:c,unshift:u,finish:h,sort:f}}function tm(r){let e=new WeakMap;function t(n,s){let a;return e.has(n)===!1?(a=new nl(r),e.set(n,[a])):s>=e.get(n).length?(a=new nl(r),e.get(n).push(a)):a=e.get(n)[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function im(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function nm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rm=0;function sm(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function am(r,e){const t=new im,i=nm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)n.probe.push(new D);const s=new D,a=new qe,o=new qe;function l(u,f){let h=0,m=0,_=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,v=0,d=0,p=0,S=0,M=0,y=0,T=0;u.sort(sm);const x=f!==!0?Math.PI:1;for(let P=0,I=u.length;P<I;P++){const A=u[P],q=A.color,N=A.intensity,U=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=q.r*N*x,m+=q.g*N*x,_+=q.b*N*x;else if(A.isLightProbe)for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],N);else if(A.isDirectionalLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity*x),A.castShadow){const B=A.shadow,Z=i.get(A);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=A.shadow.matrix,M++}n.directional[g]=O,g++}else if(A.isSpotLight){const O=t.get(A);if(O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(q).multiplyScalar(N*x),O.distance=U,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,A.castShadow){const B=A.shadow,Z=i.get(A);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.spotShadow[d]=Z,n.spotShadowMap[d]=z,n.spotShadowMatrix[d]=A.shadow.matrix,T++}n.spot[d]=O,d++}else if(A.isRectAreaLight){const O=t.get(A);O.color.copy(q).multiplyScalar(N),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=O,p++}else if(A.isPointLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity*x),O.distance=A.distance,O.decay=A.decay,A.castShadow){const B=A.shadow,Z=i.get(A);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,n.pointShadow[v]=Z,n.pointShadowMap[v]=z,n.pointShadowMatrix[v]=A.shadow.matrix,y++}n.point[v]=O,v++}else if(A.isHemisphereLight){const O=t.get(A);O.skyColor.copy(A.color).multiplyScalar(N*x),O.groundColor.copy(A.groundColor).multiplyScalar(N*x),n.hemi[S]=O,S++}}p>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=j.LTC_FLOAT_1,n.rectAreaLTC2=j.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=j.LTC_HALF_1,n.rectAreaLTC2=j.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=_;const R=n.hash;(R.directionalLength!==g||R.pointLength!==v||R.spotLength!==d||R.rectAreaLength!==p||R.hemiLength!==S||R.numDirectionalShadows!==M||R.numPointShadows!==y||R.numSpotShadows!==T)&&(n.directional.length=g,n.spot.length=d,n.rectArea.length=p,n.point.length=v,n.hemi.length=S,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotShadowMatrix.length=T,R.directionalLength=g,R.pointLength=v,R.spotLength=d,R.rectAreaLength=p,R.hemiLength=S,R.numDirectionalShadows=M,R.numPointShadows=y,R.numSpotShadows=T,n.version=rm++)}function c(u,f){let h=0,m=0,_=0,g=0,v=0;const d=f.matrixWorldInverse;for(let p=0,S=u.length;p<S;p++){const M=u[p];if(M.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),h++}else if(M.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=n.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(d),y.direction.normalize(),v++}}}return{setup:l,setupView:c,state:n}}function rl(r,e){const t=new am(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function a(f){i.push(f)}function o(f){n.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function om(r,e){let t=new WeakMap;function i(s,a=0){let o;return t.has(s)===!1?(o=new rl(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new rl(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function n(){t=new WeakMap}return{get:i,dispose:n}}class sl extends Qn{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}sl.prototype.isMeshDepthMaterial=!0;class al extends Qn{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}al.prototype.isMeshDistanceMaterial=!0;const lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,cm=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function um(r,e,t){let i=new go;const n=new Ee,s=new Ee,a=new nt,o=new sl({depthPacking:ph}),l=new al,c={},u=t.maxTextureSize,f={0:Ge,1:Hn,2:rn},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new hi;_.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Gt(_,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va,this.render=function(M,y,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;const x=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(si),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let A=0,q=M.length;A<q;A++){const N=M[A],U=N.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);const z=U.getFrameExtents();if(n.multiply(z),s.copy(U.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/z.x),n.x=s.x*z.x,U.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/z.y),n.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null&&!U.isPointLightShadow&&this.type===kn){const B={minFilter:St,magFilter:St,format:tt};U.map=new gi(n.x,n.y,B),U.map.texture.name=N.name+".shadowMap",U.mapPass=new gi(n.x,n.y,B),U.camera.updateProjectionMatrix()}if(U.map===null){const B={minFilter:at,magFilter:at,format:tt};U.map=new gi(n.x,n.y,B),U.map.texture.name=N.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const O=U.getViewportCount();for(let B=0;B<O;B++){const Z=U.getViewport(B);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(a),U.updateMatrices(N,B),i=U.getFrustum(),S(y,T,U.camera,N,this.type)}!U.isPointLightShadow&&this.type===kn&&d(U,T),U.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(x,R,P)};function d(M,y){const T=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(y,null,T,h,g,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(y,null,T,m,g,null)}function p(M,y,T,x,R,P,I){let A=null;const q=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(q!==void 0?A=q:A=x.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const N=A.uuid,U=T.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let O=z[U];O===void 0&&(O=A.clone(),z[U]=O),A=O}return A.visible=T.visible,A.wireframe=T.wireframe,I===kn?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:f[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(x.matrixWorld),A.nearDistance=R,A.farDistance=P),A}function S(M,y,T,x,R){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===kn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const A=e.update(M),q=M.material;if(Array.isArray(q)){const N=A.groups;for(let U=0,z=N.length;U<z;U++){const O=N[U],B=q[O.materialIndex];if(B&&B.visible){const Z=p(M,A,B,x,T.near,T.far,R);r.renderBufferDirect(T,null,A,Z,M,O)}}}else if(q.visible){const N=p(M,A,q,x,T.near,T.far,R);r.renderBufferDirect(T,null,A,N,M,null)}}const I=M.children;for(let A=0,q=I.length;A<q;A++)S(I[A],y,T,x,R)}}function hm(r,e,t){const i=t.isWebGL2;function n(){let C=!1;const J=new nt;let W=null;const oe=new nt(0,0,0,0);return{setMask:function(se){W!==se&&!C&&(r.colorMask(se,se,se,se),W=se)},setLocked:function(se){C=se},setClear:function(se,ye,Je,Qe,Pi){Pi===!0&&(se*=Qe,ye*=Qe,Je*=Qe),J.set(se,ye,Je,Qe),oe.equals(J)===!1&&(r.clearColor(se,ye,Je,Qe),oe.copy(J))},reset:function(){C=!1,W=null,oe.set(-1,0,0,0)}}}function s(){let C=!1,J=null,W=null,oe=null;return{setTest:function(se){se?Y(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(se){J!==se&&!C&&(r.depthMask(se),J=se)},setFunc:function(se){if(W!==se){if(se)switch(se){case su:r.depthFunc(r.NEVER);break;case au:r.depthFunc(r.ALWAYS);break;case ou:r.depthFunc(r.LESS);break;case ss:r.depthFunc(r.LEQUAL);break;case lu:r.depthFunc(r.EQUAL);break;case cu:r.depthFunc(r.GEQUAL);break;case uu:r.depthFunc(r.GREATER);break;case hu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}else r.depthFunc(r.LEQUAL);W=se}},setLocked:function(se){C=se},setClear:function(se){oe!==se&&(r.clearDepth(se),oe=se)},reset:function(){C=!1,J=null,W=null,oe=null}}}function a(){let C=!1,J=null,W=null,oe=null,se=null,ye=null,Je=null,Qe=null,Pi=null;return{setTest:function(Be){C||(Be?Y(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(Be){J!==Be&&!C&&(r.stencilMask(Be),J=Be)},setFunc:function(Be,ni,Ot){(W!==Be||oe!==ni||se!==Ot)&&(r.stencilFunc(Be,ni,Ot),W=Be,oe=ni,se=Ot)},setOp:function(Be,ni,Ot){(ye!==Be||Je!==ni||Qe!==Ot)&&(r.stencilOp(Be,ni,Ot),ye=Be,Je=ni,Qe=Ot)},setLocked:function(Be){C=Be},setClear:function(Be){Pi!==Be&&(r.clearStencil(Be),Pi=Be)},reset:function(){C=!1,J=null,W=null,oe=null,se=null,ye=null,Je=null,Qe=null,Pi=null}}}const o=new n,l=new s,c=new a;let u={},f=null,h={},m=null,_=!1,g=null,v=null,d=null,p=null,S=null,M=null,y=null,T=!1,x=null,R=null,P=null,I=null,A=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=U>=1):z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=U>=2);let O=null,B={};const Z=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),ne=new nt().fromArray(Z),Q=new nt().fromArray(ee);function me(C,J,W){const oe=new Uint8Array(4),se=r.createTexture();r.bindTexture(C,se),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<W;ye++)r.texImage2D(J+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return se}const H={};H[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Y(r.DEPTH_TEST),l.setFunc(ss),De(!1),st(Ga),Y(r.CULL_FACE),Te(si);function Y(C){u[C]!==!0&&(r.enable(C),u[C]=!0)}function re(C){u[C]!==!1&&(r.disable(C),u[C]=!1)}function L(C){C!==f&&(r.bindFramebuffer(r.FRAMEBUFFER,C),f=C)}function ge(C,J){return J===null&&f!==null&&(J=f),h[C]!==J?(r.bindFramebuffer(C,J),h[C]=J,i&&(C===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=J),C===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=J)),!0):!1}function xe(C){return m!==C?(r.useProgram(C),m=C,!0):!1}const te={[sn]:r.FUNC_ADD,[Zc]:r.FUNC_SUBTRACT,[jc]:r.FUNC_REVERSE_SUBTRACT};if(i)te[Xa]=r.MIN,te[qa]=r.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(te[Xa]=C.MIN_EXT,te[qa]=C.MAX_EXT)}const ce={[$c]:r.ZERO,[Kc]:r.ONE,[Jc]:r.SRC_COLOR,[Ya]:r.SRC_ALPHA,[ru]:r.SRC_ALPHA_SATURATE,[iu]:r.DST_COLOR,[eu]:r.DST_ALPHA,[Qc]:r.ONE_MINUS_SRC_COLOR,[Za]:r.ONE_MINUS_SRC_ALPHA,[nu]:r.ONE_MINUS_DST_COLOR,[tu]:r.ONE_MINUS_DST_ALPHA};function Te(C,J,W,oe,se,ye,Je,Qe){if(C===si){_===!0&&(re(r.BLEND),_=!1);return}if(_===!1&&(Y(r.BLEND),_=!0),C!==Yc){if(C!==g||Qe!==T){if((v!==sn||S!==sn)&&(r.blendEquation(r.FUNC_ADD),v=sn,S=sn),Qe)switch(C){case Wn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ka:r.blendFunc(r.ONE,r.ONE);break;case Ha:r.blendFuncSeparate(r.ZERO,r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ONE_MINUS_SRC_ALPHA);break;case Wa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Wn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ka:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ha:r.blendFunc(r.ZERO,r.ONE_MINUS_SRC_COLOR);break;case Wa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}d=null,p=null,M=null,y=null,g=C,T=Qe}return}se=se||J,ye=ye||W,Je=Je||oe,(J!==v||se!==S)&&(r.blendEquationSeparate(te[J],te[se]),v=J,S=se),(W!==d||oe!==p||ye!==M||Je!==y)&&(r.blendFuncSeparate(ce[W],ce[oe],ce[ye],ce[Je]),d=W,p=oe,M=ye,y=Je),g=C,T=null}function de(C,J){C.side===rn?re(r.CULL_FACE):Y(r.CULL_FACE);let W=C.side===Ge;J&&(W=!W),De(W),C.blending===Wn&&C.transparent===!1?Te(si):Te(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const oe=C.stencilWrite;c.setTest(oe),oe&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ct(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Y(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function De(C){x!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),x=C)}function st(C){C!==Hc?(Y(r.CULL_FACE),C!==R&&(C===Ga?r.cullFace(r.BACK):C===Wc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),R=C}function Ut(C){C!==P&&(N&&r.lineWidth(C),P=C)}function Ct(C,J,W){C?(Y(r.POLYGON_OFFSET_FILL),(I!==J||A!==W)&&(r.polygonOffset(J,W),I=J,A=W)):re(r.POLYGON_OFFSET_FILL)}function w(C){C?Y(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function E(C){C===void 0&&(C=r.TEXTURE0+q-1),O!==C&&(r.activeTexture(C),O=C)}function X(C,J){O===null&&E();let W=B[O];W===void 0&&(W={type:void 0,texture:void 0},B[O]=W),(W.type!==C||W.texture!==J)&&(r.bindTexture(C,J||H[C]),W.type=C,W.texture=J)}function $(){const C=B[O];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(C){ne.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),ne.copy(C))}function _e(C){Q.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),Q.copy(C))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},O=null,B={},f=null,h={},m=null,_=!1,g=null,v=null,d=null,p=null,S=null,M=null,y=null,T=!1,x=null,R=null,P=null,I=null,A=null,ne.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Y,disable:re,bindFramebuffer:ge,bindXRFramebuffer:L,useProgram:xe,setBlending:Te,setMaterial:de,setFlipSided:De,setCullFace:st,setLineWidth:Ut,setPolygonOffset:Ct,setScissorTest:w,activeTexture:E,bindTexture:X,unbindTexture:$,compressedTexImage2D:K,texImage2D:ie,texImage3D:pe,scissor:he,viewport:_e,reset:ae}}function fm(r,e,t,i,n,s,a){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,f=n.maxSamples,h=new WeakMap;let m,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return _?new OffscreenCanvas(w,E):Lr("canvas")}function v(w,E,X,$){let K=1;if((w.width>$||w.height>$)&&(K=$/Math.max(w.width,w.height)),K<1||E===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const ie=E?Nc:Math.floor,pe=ie(K*w.width),he=ie(K*w.height);m===void 0&&(m=g(pe,he));const _e=X?g(pe,he):m;return _e.width=pe,_e.height=he,_e.getContext("2d").drawImage(w,0,0,pe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pe+"x"+he+")."),_e}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function d(w){return Ca(w.width)&&Ca(w.height)}function p(w){return o?!1:w.wrapS!==dt||w.wrapT!==dt||w.minFilter!==at&&w.minFilter!==St}function S(w,E){return w.generateMipmaps&&E&&w.minFilter!==at&&w.minFilter!==St}function M(w,E,X,$,K=1){r.generateMipmap(w);const ie=i.get(E);ie.__maxMipLevel=Math.log2(Math.max(X,$,K))}function y(w,E,X,$){if(o===!1)return E;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=E;return E===r.RED&&(X===r.FLOAT&&(K=r.R32F),X===r.HALF_FLOAT&&(K=r.R16F),X===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RGB&&(X===r.FLOAT&&(K=r.RGB32F),X===r.HALF_FLOAT&&(K=r.RGB16F),X===r.UNSIGNED_BYTE&&(K=r.RGB8)),E===r.RGBA&&(X===r.FLOAT&&(K=r.RGBA32F),X===r.HALF_FLOAT&&(K=r.RGBA16F),X===r.UNSIGNED_BYTE&&(K=$===on?r.SRGB8_ALPHA8:r.RGBA8)),(K===r.R16F||K===r.R32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(w){return w===at||w===Ka||w===Ja?r.NEAREST:r.LINEAR}function x(w){const E=w.target;E.removeEventListener("dispose",x),P(E),E.isVideoTexture&&h.delete(E),a.memory.textures--}function R(w){const E=w.target;E.removeEventListener("dispose",R),I(E)}function P(w){const E=i.get(w);E.__webglInit!==void 0&&(r.deleteTexture(E.__webglTexture),i.remove(w))}function I(w){const E=w.texture,X=i.get(w),$=i.get(E);if(!!w){if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)r.deleteFramebuffer(X.__webglFramebuffer[K]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[K]);else r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&r.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer);if(w.isWebGLMultipleRenderTargets)for(let K=0,ie=E.length;K<ie;K++){const pe=i.get(E[K]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(E[K])}i.remove(E),i.remove(w)}}let A=0;function q(){A=0}function N(){const w=A;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),A+=1,w}function U(w,E){const X=i.get(w);if(w.isVideoTexture&&de(w),w.version>0&&X.__version!==w.version){const $=w.image;if($===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(X,w,E);return}}t.activeTexture(r.TEXTURE0+E),t.bindTexture(r.TEXTURE_2D,X.__webglTexture)}function z(w,E){const X=i.get(w);if(w.version>0&&X.__version!==w.version){me(X,w,E);return}t.activeTexture(r.TEXTURE0+E),t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture)}function O(w,E){const X=i.get(w);if(w.version>0&&X.__version!==w.version){me(X,w,E);return}t.activeTexture(r.TEXTURE0+E),t.bindTexture(r.TEXTURE_3D,X.__webglTexture)}function B(w,E){const X=i.get(w);if(w.version>0&&X.__version!==w.version){H(X,w,E);return}t.activeTexture(r.TEXTURE0+E),t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture)}const Z={[Yn]:r.REPEAT,[dt]:r.CLAMP_TO_EDGE,[cs]:r.MIRRORED_REPEAT},ee={[at]:r.NEAREST,[Ka]:r.NEAREST_MIPMAP_NEAREST,[Ja]:r.NEAREST_MIPMAP_LINEAR,[St]:r.LINEAR,[vu]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR};function ne(w,E,X){if(X?(r.texParameteri(w,r.TEXTURE_WRAP_S,Z[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Z[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Z[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ee[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ee[E.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==dt||E.wrapT!==dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,T(E.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==at&&E.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(E.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===an&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(r.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Q(w,E){w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",x),w.__webglTexture=r.createTexture(),a.memory.textures++)}function me(w,E,X){let $=r.TEXTURE_2D;E.isDataTexture2DArray&&($=r.TEXTURE_2D_ARRAY),E.isDataTexture3D&&($=r.TEXTURE_3D),Q(w,E),t.activeTexture(r.TEXTURE0+X),t.bindTexture($,w.__webglTexture),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const K=p(E)&&d(E.image)===!1,ie=v(E.image,K,!1,u),pe=d(ie)||o,he=s.convert(E.format);let _e=s.convert(E.type),ae=y(E.internalFormat,he,_e,E.encoding);ne($,E,pe);let C;const J=E.mipmaps;if(E.isDepthTexture)ae=r.DEPTH_COMPONENT,o?E.type===oi?ae=r.DEPTH_COMPONENT32F:E.type===Sr?ae=r.DEPTH_COMPONENT24:E.type===br?ae=r.DEPTH24_STENCIL8:ae=r.DEPTH_COMPONENT16:E.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===hs&&ae===r.DEPTH_COMPONENT&&E.type!==us&&E.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=us,_e=s.convert(E.type)),E.format===fs&&ae===r.DEPTH_COMPONENT&&(ae=r.DEPTH_STENCIL,E.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=br,_e=s.convert(E.type))),t.texImage2D(r.TEXTURE_2D,0,ae,ie.width,ie.height,0,he,_e,null);else if(E.isDataTexture)if(J.length>0&&pe){for(let W=0,oe=J.length;W<oe;W++)C=J[W],t.texImage2D(r.TEXTURE_2D,W,ae,C.width,C.height,0,he,_e,C.data);E.generateMipmaps=!1,w.__maxMipLevel=J.length-1}else t.texImage2D(r.TEXTURE_2D,0,ae,ie.width,ie.height,0,he,_e,ie.data),w.__maxMipLevel=0;else if(E.isCompressedTexture){for(let W=0,oe=J.length;W<oe;W++)C=J[W],E.format!==tt&&E.format!==Zn?he!==null?t.compressedTexImage2D(r.TEXTURE_2D,W,ae,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(r.TEXTURE_2D,W,ae,C.width,C.height,0,he,_e,C.data);w.__maxMipLevel=J.length-1}else if(E.isDataTexture2DArray)t.texImage3D(r.TEXTURE_2D_ARRAY,0,ae,ie.width,ie.height,ie.depth,0,he,_e,ie.data),w.__maxMipLevel=0;else if(E.isDataTexture3D)t.texImage3D(r.TEXTURE_3D,0,ae,ie.width,ie.height,ie.depth,0,he,_e,ie.data),w.__maxMipLevel=0;else if(J.length>0&&pe){for(let W=0,oe=J.length;W<oe;W++)C=J[W],t.texImage2D(r.TEXTURE_2D,W,ae,he,_e,C);E.generateMipmaps=!1,w.__maxMipLevel=J.length-1}else t.texImage2D(r.TEXTURE_2D,0,ae,he,_e,ie),w.__maxMipLevel=0;S(E,pe)&&M($,E,ie.width,ie.height),w.__version=E.version,E.onUpdate&&E.onUpdate(E)}function H(w,E,X){if(E.image.length!==6)return;Q(w,E),t.activeTexture(r.TEXTURE0+X),t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const $=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),K=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let W=0;W<6;W++)!$&&!K?ie[W]=v(E.image[W],!1,!0,c):ie[W]=K?E.image[W].image:E.image[W];const pe=ie[0],he=d(pe)||o,_e=s.convert(E.format),ae=s.convert(E.type),C=y(E.internalFormat,_e,ae,E.encoding);ne(r.TEXTURE_CUBE_MAP,E,he);let J;if($){for(let W=0;W<6;W++){J=ie[W].mipmaps;for(let oe=0;oe<J.length;oe++){const se=J[oe];E.format!==tt&&E.format!==Zn?_e!==null?t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,C,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,C,se.width,se.height,0,_e,ae,se.data)}}w.__maxMipLevel=J.length-1}else{J=E.mipmaps;for(let W=0;W<6;W++)if(K){t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,C,ie[W].width,ie[W].height,0,_e,ae,ie[W].data);for(let oe=0;oe<J.length;oe++){const ye=J[oe].image[W].image;t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,C,ye.width,ye.height,0,_e,ae,ye.data)}}else{t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,C,_e,ae,ie[W]);for(let oe=0;oe<J.length;oe++){const se=J[oe];t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,C,_e,ae,se.image[W])}}w.__maxMipLevel=J.length}S(E,he)&&M(r.TEXTURE_CUBE_MAP,E,pe.width,pe.height),w.__version=E.version,E.onUpdate&&E.onUpdate(E)}function Y(w,E,X,$,K){const ie=s.convert(X.format),pe=s.convert(X.type),he=y(X.internalFormat,ie,pe,X.encoding);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,0,he,E.width,E.height,E.depth,0,ie,pe,null):t.texImage2D(K,0,he,E.width,E.height,0,ie,pe,null),t.bindFramebuffer(r.FRAMEBUFFER,w),r.framebufferTexture2D(r.FRAMEBUFFER,$,K,i.get(X).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(w,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let $=r.DEPTH_COMPONENT16;if(X){const K=E.depthTexture;K&&K.isDepthTexture&&(K.type===oi?$=r.DEPTH_COMPONENT32F:K.type===Sr&&($=r.DEPTH_COMPONENT24));const ie=Te(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,$,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){if(X){const $=Te(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const $=E.isWebGLMultipleRenderTargets===!0?E.texture[0]:E.texture,K=s.convert($.format),ie=s.convert($.type),pe=y($.internalFormat,K,ie,$.encoding);if(X){const he=Te(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,he,pe,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,pe,E.width,E.height)}r.bindRenderbuffer(r.RENDERBUFFER,null)}function L(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);const $=i.get(E.depthTexture).__webglTexture;if(E.depthTexture.format===hs)r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(E.depthTexture.format===fs)r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ge(w){const E=i.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");L(E.__webglFramebuffer,w)}else if(X){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=r.createRenderbuffer(),re(E.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),re(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(w){const E=w.texture,X=i.get(w),$=i.get(E);w.addEventListener("dispose",R),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture=r.createTexture(),$.__version=E.version,a.memory.textures++);const K=w.isWebGLCubeRenderTarget===!0,ie=w.isWebGLMultipleRenderTargets===!0,pe=w.isWebGLMultisampleRenderTarget===!0,he=E.isDataTexture3D||E.isDataTexture2DArray,_e=d(w)||o;if(o&&E.format===Zn&&(E.type===oi||E.type===an)&&(E.format=tt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),K){X.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)X.__webglFramebuffer[ae]=r.createFramebuffer()}else if(X.__webglFramebuffer=r.createFramebuffer(),ie)if(n.drawBuffers){const ae=w.texture;for(let C=0,J=ae.length;C<J;C++){const W=i.get(ae[C]);W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(pe)if(o){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer);const ae=s.convert(E.format),C=s.convert(E.type),J=y(E.internalFormat,ae,C,E.encoding),W=Te(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,W,J,w.width,w.height),t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,X.__webglColorRenderbuffer),r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),re(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),ne(r.TEXTURE_CUBE_MAP,E,_e);for(let ae=0;ae<6;ae++)Y(X.__webglFramebuffer[ae],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae);S(E,_e)&&M(r.TEXTURE_CUBE_MAP,E,w.width,w.height),t.unbindTexture()}else if(ie){const ae=w.texture;for(let C=0,J=ae.length;C<J;C++){const W=ae[C],oe=i.get(W);t.bindTexture(r.TEXTURE_2D,oe.__webglTexture),ne(r.TEXTURE_2D,W,_e),Y(X.__webglFramebuffer,w,W,r.COLOR_ATTACHMENT0+C,r.TEXTURE_2D),S(W,_e)&&M(r.TEXTURE_2D,W,w.width,w.height)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;he&&(o?ae=E.isDataTexture3D?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(ae,$.__webglTexture),ne(ae,E,_e),Y(X.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,ae),S(E,_e)&&M(ae,E,w.width,w.height,w.depth),t.unbindTexture()}w.depthBuffer&&ge(w)}function te(w){const E=d(w)||o,X=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,K=X.length;$<K;$++){const ie=X[$];if(S(ie,E)){const pe=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=i.get(ie).__webglTexture;t.bindTexture(pe,he),M(pe,ie,w.width,w.height),t.unbindTexture()}}}function ce(w){if(w.isWebGLMultisampleRenderTarget)if(o){const E=w.width,X=w.height;let $=r.COLOR_BUFFER_BIT;w.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT);const K=i.get(w);t.bindFramebuffer(r.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglFramebuffer),r.blitFramebuffer(0,0,E,X,0,0,E,X,$,r.NEAREST),t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Te(w){return o&&w.isWebGLMultisampleRenderTarget?Math.min(f,w.samples):0}function de(w){const E=a.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}let De=!1,st=!1;function Ut(w,E){w&&w.isWebGLRenderTarget&&(De===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),De=!0),w=w.texture),U(w,E)}function Ct(w,E){w&&w.isWebGLCubeRenderTarget&&(st===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),st=!0),w=w.texture),B(w,E)}this.allocateTextureUnit=N,this.resetTextureUnits=q,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=B,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ce,this.safeSetTexture2D=Ut,this.safeSetTextureCube=Ct}function dm(r,e,t){const i=t.isWebGL2;function n(s){let a;if(s===ai)return r.UNSIGNED_BYTE;if(s===bu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Eu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tu)return r.UNSIGNED_SHORT_5_6_5;if(s===Mu)return r.BYTE;if(s===yu)return r.SHORT;if(s===us)return r.UNSIGNED_SHORT;if(s===Su)return r.INT;if(s===Sr)return r.UNSIGNED_INT;if(s===oi)return r.FLOAT;if(s===an)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wu)return r.ALPHA;if(s===Zn)return r.RGB;if(s===tt)return r.RGBA;if(s===Au)return r.LUMINANCE;if(s===Ru)return r.LUMINANCE_ALPHA;if(s===hs)return r.DEPTH_COMPONENT;if(s===fs)return r.DEPTH_STENCIL;if(s===Cu)return r.RED;if(s===Pu)return r.RED_INTEGER;if(s===Du)return r.RG;if(s===Fu)return r.RG_INTEGER;if(s===Iu)return r.RGB_INTEGER;if(s===Nu)return r.RGBA_INTEGER;if(s===Qa||s===eo||s===to||s===io)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===to)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===io)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===no||s===ro||s===so||s===ao)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===no)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===so)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ao)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===oo||s===lo)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===oo)return a.COMPRESSED_RGB8_ETC2;if(s===lo)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Ou||s===Bu||s===zu||s===Gu||s===Vu||s===ku||s===Hu||s===Wu||s===Xu||s===qu||s===Yu||s===Zu||s===ju||s===$u||s===Ju||s===Qu||s===eh||s===th||s===ih||s===nh||s===rh||s===sh||s===ah||s===oh||s===lh||s===ch||s===uh||s===hh)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===Ku)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===br)return i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:n}}class ol extends Nt{constructor(e=[]){super();this.cameras=e}}ol.prototype.isArrayCamera=!0;class ir extends yt{constructor(){super();this.type="Group"}}ir.prototype.isGroup=!0;const pm={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(n=t.getPose(e.targetRaySpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm))),c&&e.hand){a=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,i);if(c.joints[g.jointName]===void 0){const p=new ir;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[g.jointName]=p,c.add(p)}const d=c.joints[g.jointName];v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=v.radius),d.visible=v!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class mm extends en{constructor(e,t){super();const i=this,n=e.state;let s=null,a=1,o=null,l="local-floor",c=null,u=null,f=null,h=null,m=null,_=!1,g=null,v=null,d=null,p=null,S=null,M=null;const y=[],T=new Map,x=new Nt;x.layers.enable(1),x.viewport=new nt;const R=new Nt;R.layers.enable(2),R.viewport=new nt;const P=[x,R],I=new ol;I.layers.enable(1),I.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=y[H];return Y===void 0&&(Y=new $s,y[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=y[H];return Y===void 0&&(Y=new $s,y[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=y[H];return Y===void 0&&(Y=new $s,y[H]=Y),Y.getHandSpace()};function N(H){const Y=T.get(H.inputSource);Y&&Y.dispatchEvent({type:H.type,data:H.inputSource})}function U(){T.forEach(function(H,Y){H.disconnect(Y)}),T.clear(),A=null,q=null,n.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),f&&t.deleteFramebuffer(f),g&&t.deleteFramebuffer(g),v&&t.deleteRenderbuffer(v),d&&t.deleteRenderbuffer(d),f=null,g=null,v=null,d=null,m=null,h=null,u=null,s=null,me.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){l=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z);const Y=t.getContextAttributes();if(Y.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const re={antialias:Y.antialias,alpha:Y.alpha,depth:Y.depth,stencil:Y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:m})}else if(t instanceof WebGLRenderingContext){const re={antialias:!0,alpha:Y.alpha,depth:Y.depth,stencil:Y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,re),s.updateRenderState({layers:[m]})}else{_=Y.antialias;let re=null;Y.depth&&(M=t.DEPTH_BUFFER_BIT,Y.stencil&&(M|=t.STENCIL_BUFFER_BIT),S=Y.stencil?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=Y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24);const L={colorFormat:Y.alpha?t.RGBA8:t.RGB8,depthFormat:re,scaleFactor:a};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(L),f=t.createFramebuffer(),s.updateRenderState({layers:[h]}),_&&(g=t.createFramebuffer(),v=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,v),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.RGBA8,h.textureWidth,h.textureHeight),n.bindFramebuffer(t.FRAMEBUFFER,g),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,v),t.bindRenderbuffer(t.RENDERBUFFER,null),re!==null&&(d=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,d),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,re,h.textureWidth,h.textureHeight),t.framebufferRenderbuffer(t.FRAMEBUFFER,S,t.RENDERBUFFER,d),t.bindRenderbuffer(t.RENDERBUFFER,null)),n.bindFramebuffer(t.FRAMEBUFFER,null))}o=await s.requestReferenceSpace(l),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(H){const Y=s.inputSources;for(let re=0;re<y.length;re++)T.set(Y[re],y[re]);for(let re=0;re<H.removed.length;re++){const L=H.removed[re],ge=T.get(L);ge&&(ge.dispatchEvent({type:"disconnected",data:L}),T.delete(L))}for(let re=0;re<H.added.length;re++){const L=H.added[re],ge=T.get(L);ge&&ge.dispatchEvent({type:"connected",data:L})}}const O=new D,B=new D;function Z(H,Y,re){O.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const L=O.distanceTo(B),ge=Y.projectionMatrix.elements,xe=re.projectionMatrix.elements,te=ge[14]/(ge[10]-1),ce=ge[14]/(ge[10]+1),Te=(ge[9]+1)/ge[5],de=(ge[9]-1)/ge[5],De=(ge[8]-1)/ge[0],st=(xe[8]+1)/xe[0],Ut=te*De,Ct=te*st,w=L/(-De+st),E=w*-De;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(E),H.translateZ(w),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const X=te+w,$=ce+w,K=Ut-E,ie=Ct+(L-E),pe=Te*ce/$*X,he=de*ce/$*X;H.projectionMatrix.makePerspective(K,ie,pe,he,X,$)}function ee(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;I.near=R.near=x.near=H.near,I.far=R.far=x.far=H.far,(A!==I.near||q!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,q=I.far);const Y=H.parent,re=I.cameras;ee(I,Y);for(let ge=0;ge<re.length;ge++)ee(re[ge],Y);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),H.position.copy(I.position),H.quaternion.copy(I.quaternion),H.scale.copy(I.scale),H.matrix.copy(I.matrix),H.matrixWorld.copy(I.matrixWorld);const L=H.children;for(let ge=0,xe=L.length;ge<xe;ge++)L[ge].updateMatrixWorld(!0);re.length===2?Z(I,x,R):I.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(m!==null)return m.fixedFoveation},this.setFoveation=function(H){h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let ne=null;function Q(H,Y){if(c=Y.getViewerPose(o),p=Y,c!==null){const L=c.views;m!==null&&n.bindXRFramebuffer(m.framebuffer);let ge=!1;L.length!==I.cameras.length&&(I.cameras.length=0,ge=!0);for(let xe=0;xe<L.length;xe++){const te=L[xe];let ce=null;if(m!==null)ce=m.getViewport(te);else{const de=u.getViewSubImage(h,te);n.bindXRFramebuffer(f),de.depthStencilTexture!==void 0&&t.framebufferTexture2D(t.FRAMEBUFFER,S,t.TEXTURE_2D,de.depthStencilTexture,0),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de.colorTexture,0),ce=de.viewport}const Te=P[xe];Te.matrix.fromArray(te.transform.matrix),Te.projectionMatrix.fromArray(te.projectionMatrix),Te.viewport.set(ce.x,ce.y,ce.width,ce.height),xe===0&&I.matrix.copy(Te.matrix),ge===!0&&I.cameras.push(Te)}_&&(n.bindXRFramebuffer(g),M!==null&&t.clear(M))}const re=s.inputSources;for(let L=0;L<y.length;L++){const ge=y[L],xe=re[L];ge.update(xe,Y,o)}if(ne&&ne(H,Y),_){const L=h.textureWidth,ge=h.textureHeight;n.bindFramebuffer(t.READ_FRAMEBUFFER,g),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,f),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[S]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S]),t.blitFramebuffer(0,0,L,ge,0,0,L,ge,t.COLOR_BUFFER_BIT,t.NEAREST),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[t.COLOR_ATTACHMENT0]),n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,g)}p=null}const me=new _o;me.setAnimationLoop(Q),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}function gm(r){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function t(d,p,S,M,y){p.isMeshBasicMaterial?i(d,p):p.isMeshLambertMaterial?(i(d,p),l(d,p)):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),p.isMeshPhysicalMaterial?h(d,p,y):f(d,p)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?(i(d,p),_(d,p)):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?(i(d,p),v(d,p)):p.isLineBasicMaterial?(n(d,p),p.isLineDashedMaterial&&s(d,p)):p.isPointsMaterial?a(d,p,S,M):p.isSpriteMaterial?o(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const S=r.get(p).envMap;if(S){d.envMap.value=S,d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio;const T=r.get(S).__maxMipLevel;T!==void 0&&(d.maxMipLevel.value=T)}p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uv2Transform.value.copy(y.matrix))}function n(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function s(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,S,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*S,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function l(d,p){p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap)}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Ge&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Ge&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Ge&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Ge&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Ge&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Ge&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),r.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,S){f(d,p),d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ge&&d.clearcoatNormalScale.value.negate())),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Ge&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Ge&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias)}function _(d,p){p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias)}function g(d,p){p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}function v(d,p){p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Ge&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Ge&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function _m(){const r=Lr("canvas");return r.style.display="block",r}function ll(r={}){const e=r.canvas!==void 0?r.canvas:_m(),t=r.context!==void 0?r.context:null,i=r.alpha!==void 0?r.alpha:!1,n=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=it,this.physicallyCorrectLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;const g=this;let v=!1,d=0,p=0,S=null,M=-1,y=null;const T=new nt,x=new nt;let R=null,P=e.width,I=e.height,A=1,q=null,N=null;const U=new nt(0,0,P,I),z=new nt(0,0,P,I);let O=!1;const B=[],Z=new go;let ee=!1,ne=!1,Q=null;const me=new qe,H=new D,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return S===null?A:1}let L=t;function ge(b,F){for(let V=0;V<b.length;V++){const G=b[V],k=e.getContext(G,F);if(k!==null)return k}return null}try{const b={alpha:i,depth:n,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",Qe,!1),L===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),L=ge(F,b),L===null)throw ge(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xe,te,ce,Te,de,De,st,Ut,Ct,w,E,X,$,K,ie,pe,he,_e,ae,C,J,W,oe;function se(){xe=new zd(L),te=new Rd(L,xe,r),xe.init(te),W=new dm(L,xe,te),ce=new hm(L,xe,te),B[0]=L.BACK,Te=new kd(L),de=new Qp,De=new fm(L,xe,ce,de,te,W,Te),st=new Fd(g),Ut=new Bd(g),Ct=new yh(L,te),oe=new wd(L,xe,Ct,te),w=new Gd(L,Ct,Te,oe),E=new qd(L,w,Ct,Te),ae=new Xd(L,te,De),pe=new Ld(de),X=new Jp(g,st,Ut,xe,te,oe,pe),$=new gm(de),K=new tm(de),ie=new om(xe,te),_e=new Td(g,st,ce,E,o),he=new um(g,E,te),C=new Ad(L,xe,Te,te),J=new Vd(L,xe,Te,te),Te.programs=X.programs,g.capabilities=te,g.extensions=xe,g.properties=de,g.renderLists=K,g.shadowMap=he,g.state=ce,g.info=Te}se();const ye=new mm(g,L);this.xr=ye,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(b){b!==void 0&&(A=b,this.setSize(P,I,!1))},this.getSize=function(b){return b.set(P,I)},this.setSize=function(b,F,V){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,I=F,e.width=Math.floor(b*A),e.height=Math.floor(F*A),V!==!1&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(P*A,I*A).floor()},this.setDrawingBufferSize=function(b,F,V){P=b,I=F,A=V,e.width=Math.floor(b*V),e.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,F,V,G){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,F,V,G),ce.viewport(T.copy(U).multiplyScalar(A).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,F,V,G){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,F,V,G),ce.scissor(x.copy(z).multiplyScalar(A).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){ce.setScissorTest(O=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(b,F,V){let G=0;(b===void 0||b)&&(G|=L.COLOR_BUFFER_BIT),(F===void 0||F)&&(G|=L.DEPTH_BUFFER_BIT),(V===void 0||V)&&(G|=L.STENCIL_BUFFER_BIT),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",Qe,!1),K.dispose(),ie.dispose(),de.dispose(),st.dispose(),Ut.dispose(),E.dispose(),oe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Tc),ye.removeEventListener("sessionend",wc),Q&&(Q.dispose(),Q=null),Yi.stop()};function Je(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Qe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=Te.autoReset,F=he.enabled,V=he.autoUpdate,G=he.needsUpdate,k=he.type;se(),Te.autoReset=b,he.enabled=F,he.autoUpdate=V,he.needsUpdate=G,he.type=k}function Pi(b){const F=b.target;F.removeEventListener("dispose",Pi),Be(F)}function Be(b){ni(b),de.remove(b)}function ni(b){const F=de.get(b).programs;F!==void 0&&F.forEach(function(V){X.releaseProgram(V)})}this.renderBufferDirect=function(b,F,V,G,k,fe){F===null&&(F=Y);const ue=k.isMesh&&k.matrixWorld.determinant()<0,le=Gg(b,F,V,G,k);ce.setMaterial(G,ue);let Me=V.index;const Re=V.attributes.position;if(Me===null){if(Re===void 0||Re.count===0)return}else if(Me.count===0)return;let Se=1;G.wireframe===!0&&(Me=w.getWireframeAttribute(V),Se=2),oe.setup(k,G,le,V,Me);let we,Ue=C;Me!==null&&(we=Ct.get(Me),Ue=J,Ue.setIndex(we));const Zi=Me!==null?Me.count:Re.count,Ae=V.drawRange.start*Se,gr=V.drawRange.count*Se,Ie=fe!==null?fe.start*Se:0,ji=fe!==null?fe.count*Se:1/0,$i=Math.max(Ae,Ie),Ki=Math.min(Zi,Ae+gr,Ie+ji)-1,Di=Math.max(0,Ki-$i+1);if(Di!==0){if(k.isMesh)G.wireframe===!0?(ce.setLineWidth(G.wireframeLinewidth*re()),Ue.setMode(L.LINES)):Ue.setMode(L.TRIANGLES);else if(k.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),ce.setLineWidth(Oe*re()),k.isLineSegments?Ue.setMode(L.LINES):k.isLineLoop?Ue.setMode(L.LINE_LOOP):Ue.setMode(L.LINE_STRIP)}else k.isPoints?Ue.setMode(L.POINTS):k.isSprite&&Ue.setMode(L.TRIANGLES);if(k.isInstancedMesh)Ue.renderInstances($i,Di,k.count);else if(V.isInstancedBufferGeometry){const Oe=Math.min(V.instanceCount,V._maxInstanceCount);Ue.renderInstances($i,Di,Oe)}else Ue.render($i,Di)}},this.compile=function(b,F){h=ie.get(b),h.init(),_.push(h),b.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights(g.physicallyCorrectLights),b.traverse(function(V){const G=V.material;if(G)if(Array.isArray(G))for(let k=0;k<G.length;k++){const fe=G[k];La(fe,b,V)}else La(G,b,V)}),_.pop(),h=null};let Ot=null;function Og(b){Ot&&Ot(b)}function Tc(){Yi.stop()}function wc(){Yi.start()}const Yi=new _o;Yi.setAnimationLoop(Og),typeof window!="undefined"&&Yi.setContext(window),this.setAnimationLoop=function(b){Ot=b,ye.setAnimationLoop(b),b===null?Yi.stop():Yi.start()},ye.addEventListener("sessionstart",Tc),ye.addEventListener("sessionend",wc),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(F),F=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,F,S),h=ie.get(b,_.length),h.init(),_.push(h),me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(me),ne=this.localClippingEnabled,ee=pe.init(this.clippingPlanes,ne,F),f=K.get(b,m.length),f.init(),m.push(f),Ac(b,F,0,g.sortObjects),f.finish(),g.sortObjects===!0&&f.sort(q,N),ee===!0&&pe.beginShadows();const V=h.state.shadowsArray;if(he.render(V,b,F),ee===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(f,b),h.setupLights(g.physicallyCorrectLights),F.isArrayCamera){const G=F.cameras;for(let k=0,fe=G.length;k<fe;k++){const ue=G[k];Rc(f,b,ue,ue.viewport)}}else Rc(f,b,F);S!==null&&(De.updateMultisampleRenderTarget(S),De.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(g,b,F),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1),oe.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ac(b,F,V,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){G&&H.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const ue=E.update(b),le=b.material;le.visible&&f.push(b,ue,le,V,H.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Te.render.frame&&(b.skeleton.update(),b.skeleton.frame=Te.render.frame),!b.frustumCulled||Z.intersectsObject(b))){G&&H.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const ue=E.update(b),le=b.material;if(Array.isArray(le)){const Me=ue.groups;for(let Re=0,Se=Me.length;Re<Se;Re++){const we=Me[Re],Ue=le[we.materialIndex];Ue&&Ue.visible&&f.push(b,ue,Ue,V,H.z,we)}}else le.visible&&f.push(b,ue,le,V,H.z,null)}}const fe=b.children;for(let ue=0,le=fe.length;ue<le;ue++)Ac(fe[ue],F,V,G)}function Rc(b,F,V,G){const k=b.opaque,fe=b.transmissive,ue=b.transparent;h.setupLightsView(V),fe.length>0&&Bg(k,F,V),G&&ce.viewport(T.copy(G)),k.length>0&&is(k,F,V),fe.length>0&&is(fe,F,V),ue.length>0&&is(ue,F,V)}function Bg(b,F,V){if(Q===null){const ue=a===!0&&te.isWebGL2===!0?No:gi;Q=new ue(1024,1024,{generateMipmaps:!0,type:W.convert(an)!==null?an:ai,minFilter:yr,magFilter:at,wrapS:dt,wrapT:dt})}const G=g.getRenderTarget();g.setRenderTarget(Q),g.clear();const k=g.toneMapping;g.toneMapping=Fi,is(b,F,V),g.toneMapping=k,De.updateMultisampleRenderTarget(Q),De.updateRenderTargetMipmap(Q),g.setRenderTarget(G)}function is(b,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,fe=b.length;k<fe;k++){const ue=b[k],le=ue.object,Me=ue.geometry,Re=G===null?ue.material:G,Se=ue.group;le.layers.test(V.layers)&&zg(le,F,V,Me,Re,Se)}}function zg(b,F,V,G,k,fe){b.onBeforeRender(g,F,V,G,k,fe),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(g,F,V,G,b,fe),k.transparent===!0&&k.side===rn?(k.side=Ge,k.needsUpdate=!0,g.renderBufferDirect(V,F,G,k,b,fe),k.side=Hn,k.needsUpdate=!0,g.renderBufferDirect(V,F,G,k,b,fe),k.side=rn):g.renderBufferDirect(V,F,G,k,b,fe),b.onAfterRender(g,F,V,G,k,fe)}function La(b,F,V){F.isScene!==!0&&(F=Y);const G=de.get(b),k=h.state.lights,fe=h.state.shadowsArray,ue=k.state.version,le=X.getParameters(b,k.state,fe,F,V),Me=X.getProgramCacheKey(le);let Re=G.programs;G.environment=b.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(b.isMeshStandardMaterial?Ut:st).get(b.envMap||G.environment),Re===void 0&&(b.addEventListener("dispose",Pi),Re=new Map,G.programs=Re);let Se=Re.get(Me);if(Se!==void 0){if(G.currentProgram===Se&&G.lightsStateVersion===ue)return Lc(b,le),Se}else le.uniforms=X.getUniforms(b),b.onBuild(V,le,g),b.onBeforeCompile(le,g),Se=X.acquireProgram(le,Me),Re.set(Me,Se),G.uniforms=le.uniforms;const we=G.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=pe.uniform),Lc(b,le),G.needsLights=kg(b),G.lightsStateVersion=ue,G.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMap.value=k.state.directionalShadowMap,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotShadowMap.value=k.state.spotShadowMap,we.spotShadowMatrix.value=k.state.spotShadowMatrix,we.pointShadowMap.value=k.state.pointShadowMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix);const Ue=Se.getUniforms(),Zi=vi.seqWithValue(Ue.seq,we);return G.currentProgram=Se,G.uniformsList=Zi,Se}function Lc(b,F){const V=de.get(b);V.outputEncoding=F.outputEncoding,V.instancing=F.instancing,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents}function Gg(b,F,V,G,k){F.isScene!==!0&&(F=Y),De.resetTextureUnits();const fe=F.fog,ue=G.isMeshStandardMaterial?F.environment:null,le=S===null?g.outputEncoding:S.texture.encoding,Me=(G.isMeshStandardMaterial?Ut:st).get(G.envMap||ue),Re=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Se=!!G.normalMap&&!!V.attributes.tangent,we=!!V.morphAttributes.position,Ue=!!V.morphAttributes.normal,Zi=V.morphAttributes.position?V.morphAttributes.position.length:0,Ae=de.get(G),gr=h.state.lights;if(ee===!0&&(ne===!0||b!==y)){const Bt=b===y&&G.id===M;pe.setState(G,b,Bt)}let Ie=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==gr.state.version||Ae.outputEncoding!==le||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||Ae.envMap!==Me||G.fog&&Ae.fog!==fe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==pe.numPlanes||Ae.numIntersection!==pe.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Se||Ae.morphTargets!==we||Ae.morphNormals!==Ue||te.isWebGL2===!0&&Ae.morphTargetsCount!==Zi)&&(Ie=!0):(Ie=!0,Ae.__version=G.version);let ji=Ae.currentProgram;Ie===!0&&(ji=La(G,F,k));let $i=!1,Ki=!1,Di=!1;const Oe=ji.getUniforms(),_r=Ae.uniforms;if(ce.useProgram(ji.program)&&($i=!0,Ki=!0,Di=!0),G.id!==M&&(M=G.id,Ki=!0),$i||y!==b){if(Oe.setValue(L,"projectionMatrix",b.projectionMatrix),te.logarithmicDepthBuffer&&Oe.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),y!==b&&(y=b,Ki=!0,Di=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Bt=Oe.map.cameraPosition;Bt!==void 0&&Bt.setValue(L,H.setFromMatrixPosition(b.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Oe.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||k.isSkinnedMesh)&&Oe.setValue(L,"viewMatrix",b.matrixWorldInverse)}if(k.isSkinnedMesh){Oe.setOptional(L,k,"bindMatrix"),Oe.setOptional(L,k,"bindMatrixInverse");const Bt=k.skeleton;Bt&&(te.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Oe.setValue(L,"boneTexture",Bt.boneTexture,De),Oe.setValue(L,"boneTextureSize",Bt.boneTextureSize)):Oe.setOptional(L,Bt,"boneMatrices"))}return!!V&&(V.morphAttributes.position!==void 0||V.morphAttributes.normal!==void 0)&&ae.update(k,V,G,ji),(Ki||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,Oe.setValue(L,"receiveShadow",k.receiveShadow)),Ki&&(Oe.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ae.needsLights&&Vg(_r,Di),fe&&G.fog&&$.refreshFogUniforms(_r,fe),$.refreshMaterialUniforms(_r,G,A,I,Q),vi.upload(L,Ae.uniformsList,_r,De)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vi.upload(L,Ae.uniformsList,_r,De),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Oe.setValue(L,"center",k.center),Oe.setValue(L,"modelViewMatrix",k.modelViewMatrix),Oe.setValue(L,"normalMatrix",k.normalMatrix),Oe.setValue(L,"modelMatrix",k.matrixWorld),ji}function Vg(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function kg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return d},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return S},this.setRenderTarget=function(b,F=0,V=0){S=b,d=F,p=V,b&&de.get(b).__webglFramebuffer===void 0&&De.setupRenderTarget(b);let G=null,k=!1,fe=!1;if(b){const le=b.texture;(le.isDataTexture3D||le.isDataTexture2DArray)&&(fe=!0);const Me=de.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(G=Me[F],k=!0):b.isWebGLMultisampleRenderTarget?G=de.get(b).__webglMultisampledFramebuffer:G=Me,T.copy(b.viewport),x.copy(b.scissor),R=b.scissorTest}else T.copy(U).multiplyScalar(A).floor(),x.copy(z).multiplyScalar(A).floor(),R=O;if(ce.bindFramebuffer(L.FRAMEBUFFER,G)&&te.drawBuffers){let le=!1;if(b)if(b.isWebGLMultipleRenderTargets){const Me=b.texture;if(B.length!==Me.length||B[0]!==L.COLOR_ATTACHMENT0){for(let Re=0,Se=Me.length;Re<Se;Re++)B[Re]=L.COLOR_ATTACHMENT0+Re;B.length=Me.length,le=!0}}else(B.length!==1||B[0]!==L.COLOR_ATTACHMENT0)&&(B[0]=L.COLOR_ATTACHMENT0,B.length=1,le=!0);else(B.length!==1||B[0]!==L.BACK)&&(B[0]=L.BACK,B.length=1,le=!0);le&&(te.isWebGL2?L.drawBuffers(B):xe.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}if(ce.viewport(T),ce.scissor(x),ce.setScissorTest(R),k){const le=de.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,le.__webglTexture,V)}else if(fe){const le=de.get(b.texture),Me=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,le.__webglTexture,V||0,Me)}M=-1},this.readRenderTargetPixels=function(b,F,V,G,k,fe,ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=de.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(le=le[ue]),le){ce.bindFramebuffer(L.FRAMEBUFFER,le);try{const Me=b.texture,Re=Me.format,Se=Me.type;if(Re!==tt&&W.convert(Re)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const we=Se===an&&(xe.has("EXT_color_buffer_half_float")||te.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Se!==ai&&W.convert(Se)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===oi&&(te.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!we){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L.checkFramebufferStatus(L.FRAMEBUFFER)===L.FRAMEBUFFER_COMPLETE?F>=0&&F<=b.width-G&&V>=0&&V<=b.height-k&&L.readPixels(F,V,G,k,W.convert(Re),W.convert(Se),fe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Me=S!==null?de.get(S).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(b,F,V=0){const G=Math.pow(2,-V),k=Math.floor(F.image.width*G),fe=Math.floor(F.image.height*G);let ue=W.convert(F.format);te.isWebGL2&&(ue===L.RGB&&(ue=L.RGB8),ue===L.RGBA&&(ue=L.RGBA8)),De.setTexture2D(F,0),L.copyTexImage2D(L.TEXTURE_2D,V,ue,b.x,b.y,k,fe,0),ce.unbindTexture()},this.copyTextureToTexture=function(b,F,V,G=0){const k=F.image.width,fe=F.image.height,ue=W.convert(V.format),le=W.convert(V.type);De.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,b.x,b.y,k,fe,ue,le,F.image.data):F.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,ue,F.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,G,b.x,b.y,ue,le,F.image),G===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(b,F,V,G,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=b.max.x-b.min.x+1,ue=b.max.y-b.min.y+1,le=b.max.z-b.min.z+1,Me=W.convert(G.format),Re=W.convert(G.type);let Se;if(G.isDataTexture3D)De.setTexture3D(G,0),Se=L.TEXTURE_3D;else if(G.isDataTexture2DArray)De.setTexture2DArray(G,0),Se=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const we=L.getParameter(L.UNPACK_ROW_LENGTH),Ue=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zi=L.getParameter(L.UNPACK_SKIP_PIXELS),Ae=L.getParameter(L.UNPACK_SKIP_ROWS),gr=L.getParameter(L.UNPACK_SKIP_IMAGES),Ie=V.isCompressedTexture?V.mipmaps[0]:V.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ie.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ie.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isDataTexture3D?L.texSubImage3D(Se,k,F.x,F.y,F.z,fe,ue,le,Me,Re,Ie.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Se,k,F.x,F.y,F.z,fe,ue,le,Me,Ie.data)):L.texSubImage3D(Se,k,F.x,F.y,F.z,fe,ue,le,Me,Re,Ie),L.pixelStorei(L.UNPACK_ROW_LENGTH,we),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gr),k===0&&G.generateMipmaps&&L.generateMipmap(Se),ce.unbindTexture()},this.initTexture=function(b){De.setTexture2D(b,0),ce.unbindTexture()},this.resetState=function(){d=0,p=0,S=null,ce.reset(),oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}ll.prototype.isWebGLRenderer=!0;const cl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xm{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&n.onStart!==void 0&&n.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const vm=new xm;class ul{constructor(e){this.manager=e!==void 0?e:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Mm extends ul{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cl.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Lr("img");function l(){u(),cl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),n&&n(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class hl extends ul{constructor(e){super(e)}load(e,t,i,n){const s=new mt,a=new Mm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}function Qt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function fl(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ot={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tn={duration:.5,overwrite:!1,delay:0},Ks,Ht=1e8,Ce=1/Ht,Js=Math.PI*2,ym=Js/4,Sm=0,dl=Math.sqrt,bm=Math.cos,Em=Math.sin,Ye=function(e){return typeof e=="string"},He=function(e){return typeof e=="function"},ei=function(e){return typeof e=="number"},Qs=function(e){return typeof e=="undefined"},ti=function(e){return typeof e=="object"},lt=function(e){return e!==!1},pl=function(){return typeof window!="undefined"},ml=function(e){return He(e)||Ye(e)},gl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gt=Array.isArray,ea=/(?:-?\.?\d|\.)+/gi,_l=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ta=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xl=/[+-]=-?[.\d]+/,vl=/[^,'"\[\]\s]+/gi,Tm=/[\d.+\-=]+(?:e[-+]\d*)*/i,Ne,Wt,ia,na,_t={},Wr={},Ml,yl=function(e){return(Wr=Rn(e,_t))&&qt},ra=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xr=function(e,t){return!t&&console.warn(e)},Sl=function(e,t){return e&&(_t[e]=t)&&Wr&&(Wr[e]=t)||_t},An=function(){return 0},sa={},Mi=[],aa={},bl,xt={},oa={},El=30,qr=[],la="",ca=function(e){var t=e[0],i,n;if(ti(t)||He(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=qr.length;n--&&!qr[n].targetTest(t););i=qr[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Kl(e[n],i)))||e.splice(n,1);return e},Gi=function(e){return e._gsap||ca(At(e))[0]._gsap},Tl=function(e,t,i){return(i=e[t])&&He(i)?e[t]():Qs(i)&&e.getAttribute&&e.getAttribute(t)||i},vt=function(e,t){return(e=e.split(",")).forEach(t)||e},ze=function(e){return Math.round(e*1e5)/1e5||0},Ke=function(e){return Math.round(e*1e7)/1e7||0},wm=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Yr=function(){var e=Mi.length,t=Mi.slice(0),i,n;for(aa={},Mi.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},wl=function(e,t,i,n){Mi.length&&Yr(),e.render(t,i,n),Mi.length&&Yr()},Al=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vl).length<2?t:Ye(e)?e.trim():e},Rl=function(e){return e},Tt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Am=function(e,t){for(var i in t)i in e||i==="duration"||i==="ease"||(e[i]=t[i])},Rn=function(e,t){for(var i in t)e[i]=t[i];return e},Ll=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ti(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},ua=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},nr=function(e){var t=e.parent||Ne,i=e.keyframes?Am:Tt;if(lt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Rm=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Lm=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Zr=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Vi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Cm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pm=function r(e){return!e||e._ts&&r(e.parent)},Cl=function(e){return e._repeat?Ln(e._tTime,e=e.duration()+e._rDelay)*e:0},Ln=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},jr=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$r=function(e){return e._end=Ke(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ce)||0))},Pl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ke(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$r(e),i._dirty||Vi(i,e)),e},Dl=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=jr(e.rawTime(),t),(!t._dur||sr(0,t.totalDuration(),i)-t._tTime>Ce)&&t.render(i,!0)),Vi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ce}},Xt=function(e,t,i,n){return t.parent&&yi(t),t._start=Ke((ei(i)?i:i||e!==Ne?wt(e,i,t):e._time)+t._delay),t._end=Ke(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Lm(e,t,"_first","_last",e._sort?"_start":0),ha(t)||(e._recent=t),n||Dl(e,t),e},Fl=function(e,t){return(_t.ScrollTrigger||ra("scrollTrigger",t))&&_t.ScrollTrigger.create(t,e)},Il=function(e,t,i,n){if(eg(e,t),!e._initted)return 1;if(!i&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bl!==Lt.frame)return Mi.push(e),e._lazy=[t,n],1},Dm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ha=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Fm=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&Dm(e)&&!(!e._initted&&ha(e))||(e._ts<0||e._dp._ts<0)&&!ha(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=sr(0,e._tDur,t),u=Ln(l,o),f=Ln(e._tTime,o),e._yoyo&&u&1&&(a=1-a),u!==f&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||n||e._zTime===Ce||!t&&e._zTime){if(!e._initted&&Il(e,t,n,i))return;for(f=e._zTime,e._zTime=t||(i?Ce:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!i&&Rt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Rt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&yi(e,1),i||(Rt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Im=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(!n._dur&&n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(!n._dur&&n.data==="isPause"&&n._start<t)return n;n=n._prev}},Cn=function(e,t,i,n){var s=e._repeat,a=Ke(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ke(a*(s+1)+e._rDelay*s):a,o&&!n?Pl(e,e._tTime=e._tDur*o):e.parent&&$r(e),i||Vi(e.parent,e),e},Nl=function(e){return e instanceof ct?Vi(e):Cn(e,e._dur)},Nm={_start:0,endTime:An,totalDuration:An},wt=function r(e,t,i){var n=e.labels,s=e._recent||Nm,a=e.duration()>=Ht?s.endTime(!1):e._dur,o,l,c;return Ye(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(gt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},rr=function(e,t,i){var n=ei(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=lt(l.vars.inherit)&&l.parent;a.immediateRender=lt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new We(t[0],a,t[s+1])},Si=function(e,t){return e||e===0?t(e):t},sr=function(e,t,i){return i<e?e:i>t?t:i},Mt=function(e){if(typeof e!="string")return"";var t=Tm.exec(e);return t?e.substr(t.index+t[0].length):""},Um=function(e,t,i){return Si(i,function(n){return sr(e,t,n)})},fa=[].slice,Ul=function(e,t){return e&&ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ti(e[0]))&&!e.nodeType&&e!==Wt},Om=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return Ye(n)&&!t||Ul(n,1)?(s=i).push.apply(s,At(n)):i.push(n)})||i},At=function(e,t,i){return Ye(e)&&!i&&(ia||!Dn())?fa.call((t||na).querySelectorAll(e),0):gt(e)?Om(e,i):Ul(e)?fa.call(e,0):e?[e]:[]},Bm=function(e){return e=At(e)[0]||Xr("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return At(t,i.querySelectorAll?i:i===e?Xr("Invalid scope")||na.createElement("div"):e)}},Ol=function(e){return e.sort(function(){return .5-Math.random()})},Bl=function(e){if(He(e))return e;var t=ti(e)?e:{each:e},i=Fn(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,f=n;return Ye(n)?u=f={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],f=n[1]),function(h,m,_){var g=(_||t).length,v=a[g],d,p,S,M,y,T,x,R,P;if(!v){if(P=t.grid==="auto"?0:(t.grid||[1,Ht])[1],!P){for(x=-Ht;x<(x=_[P++].getBoundingClientRect().left)&&P<g;);P--}for(v=a[g]=[],d=l?Math.min(P,g)*u-.5:n%P,p=l?g*f/P-.5:n/P|0,x=0,R=Ht,T=0;T<g;T++)S=T%P-d,M=p-(T/P|0),v[T]=y=c?Math.abs(c==="y"?M:S):dl(S*S+M*M),y>x&&(x=y),y<R&&(R=y);n==="random"&&Ol(v),v.max=x-R,v.min=R,v.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(P>g?g-1:c?c==="y"?g/P:P:Math.max(P,g/P))||0)*(n==="edges"?-1:1),v.b=g<0?s-g:s,v.u=Mt(t.amount||t.each)||0,i=i&&g<0?Zl(i):i}return g=(v[h]-v.min)/v.max||0,Ke(v.b+(i?i(g):g)*v.v)+v.u}},da=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Math.round(parseFloat(i)/e)*e*t;return(n-n%1)/t+(ei(i)?0:Mt(i))}},zl=function(e,t){var i=gt(e),n,s;return!i&&ti(e)&&(n=i=e.radius||Ht,e.values?(e=At(e.values),(s=!ei(e[0]))&&(n*=n)):e=da(e.increment)),Si(t,i?He(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ht,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-o,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!n||c<=n?e[u]:a,s||u===a||ei(a)?u:u+Mt(a)}:da(e))},Gl=function(e,t,i,n){return Si(gt(e)?!t:i===!0?!!(i=0):!n,function(){return gt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},zm=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},Gm=function(e,t){return function(i){return e(parseFloat(i))+(t||Mt(i))}},Vm=function(e,t,i){return kl(e,t,0,1,i)},Vl=function(e,t,i){return Si(i,function(n){return e[~~t(n)]})},km=function r(e,t,i){var n=t-e;return gt(e)?Vl(e,r(0,e.length),t):Si(i,function(s){return(n+(s-e)%n)%n+e})},Hm=function r(e,t,i){var n=t-e,s=n*2;return gt(e)?Vl(e,r(0,e.length-1),t):Si(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},ar=function(e){for(var t=0,i="",n,s,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",s=e.substr(n+7,a-n-7).match(o?vl:ea),i+=e.substr(t,n-t)+Gl(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},kl=function(e,t,i,n,s){var a=t-e,o=n-i;return Si(s,function(l){return i+((l-e)/a*o||0)})},Wm=function r(e,t,i,n){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=Ye(e),o={},l,c,u,f,h;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(gt(e)&&!gt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},i=t}else n||(e=Rn(gt(e)?[]:{},e));if(!u){for(l in t)_a.call(o,e,l,"get",t[l]);s=function(_){return Ma(_,o)||(a?e.p:e)}}}return Si(i,s)},Hl=function(e,t,i){var n=e.labels,s=Ht,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Rt=function(e,t,i){var n=e.vars,s=n[t],a,o;if(!!s)return a=n[t+"Params"],o=n.callbackScope||e,i&&Mi.length&&Yr(),a?s.apply(o,a):s.call(o)},or=function(e){return yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Rt(e,"onInterrupt"),e},Pn,Xm=function(e){e=!e.name&&e.default||e;var t=e.name,i=He(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:An,render:Ma,add:_a,kill:og,modifier:ag,rawVars:0},a={targetTest:0,get:0,getSetter:va,aliases:{},register:0};if(Dn(),e!==n){if(xt[t])return;Tt(n,Tt(ua(e,s),a)),Rn(n.prototype,Rn(s,ua(e,a))),xt[n.prop=t]=n,e.targetTest&&(qr.push(n),sa[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sl(t,n),e.register&&e.register(qt,n,ut)},Pe=255,lr={aqua:[0,Pe,Pe],lime:[0,Pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pe],navy:[0,0,128],white:[Pe,Pe,Pe],olive:[128,128,0],yellow:[Pe,Pe,0],orange:[Pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pe,0,0],pink:[Pe,192,203],cyan:[0,Pe,Pe],transparent:[Pe,Pe,Pe,0]},pa=function(e,t,i){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Pe+.5|0},Wl=function(e,t,i){var n=e?ei(e)?[e>>16,e>>8&Pe,e&Pe]:0:lr.black,s,a,o,l,c,u,f,h,m,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),lr[e])n=lr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Pe,n&Pe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Pe,e&Pe]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(ea),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,n.length>3&&(n[3]*=1),n[0]=pa(l+1/3,s,a),n[1]=pa(l,s,a),n[2]=pa(l-1/3,s,a);else if(~e.indexOf("="))return n=e.match(_l),i&&n.length<4&&(n[3]=1),n}else n=e.match(ea)||lr.transparent;n=n.map(Number)}return t&&!_&&(s=n[0]/Pe,a=n[1]/Pe,o=n[2]/Pe,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===s?(a-o)/m+(a<o?6:0):f===a?(o-s)/m+2:(s-a)/m+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Xl=function(e){var t=[],i=[],n=-1;return e.split(bi).forEach(function(s){var a=s.match(wn)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},ql=function(e,t,i){var n="",s=(e+n).match(bi),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Wl(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Xl(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(bi,"1").split(wn),f=c.length-1;o<f;o++)n+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(bi),f=c.length-1;o<f;o++)n+=c[o]+s[o];return n+c[f]},bi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in lr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),qm=/hsl[a]?\(/,Yl=function(e){var t=e.join(" "),i;if(bi.lastIndex=0,bi.test(t))return i=qm.test(t),e[1]=ql(e[1],i),e[0]=ql(e[0],i,Xl(e[1])),!0},Kr,Lt=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,c,u,f,h,m,_=function g(v){var d=r()-n,p=v===!0,S,M,y,T;if(d>e&&(i+=d-t),n+=d,y=n-i,S=y-a,(S>0||p)&&(T=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,a+=S+(S>=s?4:s-S),M=1),p||(l=c(g)),M)for(m=0;m<o.length;m++)o[m](y,h,T,v)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(v){return h/(1e3/(v||60))},wake:function(){Ml&&(!ia&&pl()&&(Wt=ia=window,na=Wt.document||{},_t.gsap=qt,(Wt.gsapVersions||(Wt.gsapVersions=[])).push(qt.version),yl(Wr||Wt.GreenSockGlobals||!Wt.gsap&&Wt||{}),u=Wt.requestAnimationFrame),l&&f.sleep(),c=u||function(v){return setTimeout(v,a-f.time*1e3+1|0)},Kr=1,_(2))},sleep:function(){(u?Wt.cancelAnimationFrame:clearTimeout)(l),Kr=0,c=An},lagSmoothing:function(v,d){e=v||1/Ce,t=Math.min(d,e,0)},fps:function(v){s=1e3/(v||240),a=f.time*1e3+s},add:function(v){o.indexOf(v)<0&&o.push(v),Dn()},remove:function(v){var d;~(d=o.indexOf(v))&&o.splice(d,1)&&m>=d&&m--},_listeners:o},f}(),Dn=function(){return!Kr&&Lt.wake()},be={},Ym=/^[\d.\-M][\d.\-,\s]/,Zm=/["']/g,jm=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(Zm,"").trim():+c,n=l.substr(o+1).trim();return t},$m=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Km=function(e){var t=(e+"").split("("),i=be[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[jm(t[1])]:$m(e).split(",").map(Al)):be._CE&&Ym.test(e)?be._CE("",e):i},Zl=function(e){return function(t){return 1-e(1-t)}},jl=function r(e,t){for(var i=e._first,n;i;)i instanceof ct?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Fn=function(e,t){return e&&(He(e)?e:be[e]||Km(e))||t},ki=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return vt(e,function(o){be[o]=_t[o]=s,be[a=o.toLowerCase()]=i;for(var l in s)be[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=be[o+"."+l]=s[l]}),s},$l=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ma=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Js*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*Em((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:$l(o);return s=Js/s,l.config=function(c,u){return r(e,c,u)},l},ga=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:$l(i);return n.config=function(s){return r(e,s)},n};vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ki(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})}),be.Linear.easeNone=be.none=be.Linear.easeIn,ki("Elastic",ma("in"),ma("out"),ma()),function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ki("Bounce",function(a){return 1-s(1-a)},s)}(7.5625,2.75),ki("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),ki("Circ",function(r){return-(dl(1-r*r)-1)}),ki("Sine",function(r){return r===1?1:-bm(r*ym)+1}),ki("Back",ga("in"),ga("out"),ga()),be.SteppedEase=be.steps=_t.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-Ce;return function(o){return((n*sr(0,a,o)|0)+s)*i}}},Tn.ease=be["quad.out"],vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return la+=r+","+r+"Params,"});var Kl=function(e,t){this.id=Sm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Tl,this.set=t?t.getSetter:va},cr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cn(this,+t.duration,1,1),this.data=t.data,Kr||Lt.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Cn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Dn(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pl(this,i),!s._dp||s.parent||Dl(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Xt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ce||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),wl(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cl(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cl(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Ln(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?jr(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ce?0:this._rts,Cm(this.totalTime(sr(-this._delay,this._tDur,n),!0)),$r(this),this},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Xt(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(lt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jr(n.rawTime(i),this):this._tTime:this._tTime},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Nl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Nl(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(wt(this,i),lt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,lt(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ce:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Ce)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(s){var a=He(i)?i:Rl,o=function(){var c=n.then;n.then=null,He(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),s(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){or(this)},r}();Tt(cr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var ct=function(r){fl(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=lt(i.sortChildren),Ne&&Xt(i.parent||Ne,Qt(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Fl(Qt(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return rr(0,arguments,this),this},t.from=function(n,s,a){return rr(1,arguments,this),this},t.fromTo=function(n,s,a,o){return rr(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,nr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new We(n,s,wt(this,a),1),this},t.call=function(n,s,a){return Xt(this,We.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new We(n,a,wt(this,l)),this},t.staggerFrom=function(n,s,a,o,l,c,u){return a.runBackwards=1,nr(a).immediateRender=lt(a.immediateRender),this.staggerTo(n,s,a,o,l,c,u)},t.staggerFromTo=function(n,s,a,o,l,c,u,f){return o.startAt=a,nr(o).immediateRender=lt(o.immediateRender),this.staggerTo(n,s,o,l,c,u,f)},t.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:Ke(n),f=this._zTime<0!=n<0&&(this._initted||!c),h,m,_,g,v,d,p,S,M,y,T,x;if(this!==Ne&&u>l&&n>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),h=u,M=this._start,S=this._ts,d=!S,f&&(c||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(T=this._yoyo,v=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,s,a);if(h=Ke(u%v),u===l?(g=this._repeat,h=c):(g=~~(u/v),g&&g===u/v&&(h=c,g--),h>c&&(h=c)),y=Ln(this._tTime,v),!o&&this._tTime&&y!==g&&(y=g),T&&g&1&&(h=c-h,x=1),g!==y&&!this._lock){var R=T&&y&1,P=R===(T&&g&1);if(g<y&&(R=!R),o=R?0:c,this._lock=1,this.render(o||(x?0:Ke(g*v)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Rt(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;jl(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(p=Im(this,Ke(o),Ke(h)),p&&(u-=h-(h=p._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&!s&&(Rt(this,"onStart"),this._tTime!==u))return this;if(h>=o&&n>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&p!==m){if(m.parent!==this)return this.render(n,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!d){p=0,_&&(u+=this._zTime=-Ce);break}}m=_}else{m=this._last;for(var I=n<0?n:h;m;){if(_=m._prev,(m._act||I<=m._end)&&m._ts&&p!==m){if(m.parent!==this)return this.render(n,s,a);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!d){p=0,_&&(u+=this._zTime=I?-Ce:Ce);break}}m=_}}if(p&&!s&&(this.pause(),p.render(h>=o?0:-Ce)._zTime=h>=o?1:-1,this._ts))return this._start=M,$r(this),this.render(n,s,a);this._onUpdate&&!s&&Rt(this,"onUpdate",!0),(u===l&&l>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&yi(this,1),!s&&!(n<0&&!o)&&(u||o||!l)&&(Rt(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(ei(s)||(s=wt(this,s,n)),!(n instanceof cr)){if(gt(n))return n.forEach(function(o){return a.add(o,s)}),this;if(Ye(n))return this.addLabel(n,s);if(He(n))n=We.delayedCall(0,n);else return this}return this!==n?Xt(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ht);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof We?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return Ye(n)?this.removeLabel(n):He(n)?this.killTweensOf(n):(Zr(this,n),n===this._recent&&(this._recent=this._last),Vi(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ke(Lt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=wt(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=We.delayedCall(0,s||An,a);return o.data="isPause",this._hasPause=1,Xt(this,o,wt(this,n))},t.removePause=function(n){var s=this._first;for(n=wt(this,n);s;)s._start===n&&s.data==="isPause"&&yi(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Ei!==o[l]&&o[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=At(n),l=this._first,c=ei(s),u;l;)l instanceof We?wm(l._targets,o)&&(c?(!Ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=wt(a,n),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,_=We.to(a,Tt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ce,onStart:function(){if(a.pause(),!m){var v=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==v&&Cn(_,v,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,Tt({startAt:{time:wt(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Hl(this,wt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Hl(this,wt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ce)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return Vi(this)},t.invalidate=function(){var n=this._first;for(this._lock=0;n;)n.invalidate(),n=n._next;return r.prototype.invalidate.call(this)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Vi(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,l=Ht,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xt(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Cn(a,a===Ne&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(Ne._ts&&(wl(Ne,jr(n,Ne)),bl=Lt.frame),Lt.frame>=El){El+=ot.autoSleep||120;var s=Ne._first;if((!s||!s._ts)&&ot.autoSleep&&Lt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Lt.sleep()}}},e}(cr);Tt(ct.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jm=function(e,t,i,n,s,a,o){var l=new ut(this._pt,e,t,0,1,ic,null,s),c=0,u=0,f,h,m,_,g,v,d,p;for(l.b=i,l.e=n,i+="",n+="",(d=~n.indexOf("random("))&&(n=ar(n)),a&&(p=[i,n],a(p,e,t),i=p[0],n=p[1]),h=i.match(ta)||[];f=ta.exec(n);)_=f[0],g=n.substring(c,f.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(v=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:v,c:_.charAt(1)==="="?parseFloat(_.substr(2))*(_.charAt(0)==="-"?-1:1):parseFloat(_)-v,m:m&&m<4?Math.round:0},c=ta.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(xl.test(n)||d)&&(l.e=0),this._pt=l,l},_a=function(e,t,i,n,s,a,o,l,c){He(n)&&(n=n(s||0,e,a));var u=e[t],f=i!=="get"?i:He(u)?c?e[t.indexOf("set")||!He(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,h=He(u)?c?ng:ec:xa,m;if(Ye(n)&&(~n.indexOf("random(")&&(n=ar(n)),n.charAt(1)==="="&&(m=parseFloat(f)+parseFloat(n.substr(2))*(n.charAt(0)==="-"?-1:1)+(Mt(f)||0),(m||m===0)&&(n=m))),f!==n)return!isNaN(f*n)&&n!==""?(m=new ut(this._pt,e,t,+f||0,n-(f||0),typeof u=="boolean"?sg:tc,0,h),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!u&&!(t in e)&&ra(t,n),Jm.call(this,e,t,f,n,h,l||ot.stringFilter,c))},Qm=function(e,t,i,n,s){if(He(e)&&(e=ur(e,s,t,i,n)),!ti(e)||e.style&&e.nodeType||gt(e)||gl(e))return Ye(e)?ur(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=ur(e[o],s,t,i,n);return a},Jl=function(e,t,i,n,s,a){var o,l,c,u;if(xt[e]&&(o=new xt[e]).init(s,o.rawVars?t[e]:Qm(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new ut(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Pn))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ei,eg=function r(e,t){var i=e.vars,n=i.ease,s=i.startAt,a=i.immediateRender,o=i.lazy,l=i.onUpdate,c=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,h=i.yoyoEase,m=i.keyframes,_=i.autoRevert,g=e._dur,v=e._startAt,d=e._targets,p=e.parent,S=p&&p.data==="nested"?p.parent._targets:d,M=e._overwrite==="auto"&&!Ks,y=e.timeline,T,x,R,P,I,A,q,N,U,z,O,B,Z;if(y&&(!m||!n)&&(n="none"),e._ease=Fn(n,Tn.ease),e._yEase=h?Zl(Fn(h===!0?n:h,Tn.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y){if(N=d[0]?Gi(d[0]).harness:0,B=N&&i[N.prop],T=ua(i,sa),v&&v.render(-1,!0).kill(),s)if(yi(e._startAt=We.set(d,Tt({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:lt(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),t<0&&!a&&!_&&e._startAt.render(-1,!0),a){if(t>0&&!_&&(e._startAt=0),g&&t<=0){t&&(e._zTime=t);return}}else _===!1&&(e._startAt=0);else if(f&&g){if(v)!_&&(e._startAt=0);else if(t&&(a=!1),R=Tt({overwrite:!1,data:"isFromStart",lazy:a&&lt(o),immediateRender:a,stagger:0,parent:p},T),B&&(R[N.prop]=B),yi(e._startAt=We.set(d,R)),t<0&&e._startAt.render(-1,!0),!a)r(e._startAt,Ce);else if(!t)return}for(e._pt=0,o=g&&lt(o)||o&&!g,x=0;x<d.length;x++){if(I=d[x],q=I._gsap||ca(d)[x]._gsap,e._ptLookup[x]=z={},aa[q.id]&&Mi.length&&Yr(),O=S===d?x:S.indexOf(I),N&&(U=new N).init(I,B||T,e,O,S)!==!1&&(e._pt=P=new ut(e._pt,I,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(ee){z[ee]=P}),U.priority&&(A=1)),!N||B)for(R in T)xt[R]&&(U=Jl(R,T,e,O,I,S))?U.priority&&(A=1):z[R]=P=_a.call(e,I,R,"get",T[R],O,S,0,i.stringFilter);e._op&&e._op[x]&&e.kill(I,e._op[x]),M&&e._pt&&(Ei=e,Ne.killTweensOf(I,z,e.globalTime(t)),Z=!e.parent,Ei=0),e._pt&&o&&(aa[q.id]=1)}A&&nc(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Z},tg=function(e,t){var i=e[0]?Gi(e[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return t;s=Rn({},t);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ur=function(e,t,i,n,s){return He(e)?e.call(t,i,n,s):Ye(e)&&~e.indexOf("random(")?ar(e):e},Ql=la+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",ig=(Ql+",id,stagger,delay,duration,paused,scrollTrigger").split(","),We=function(r){fl(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:nr(n))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,v=l.scrollTrigger,d=l.yoyoEase,p=n.parent||Ne,S=(gt(i)||gl(i)?ei(i[0]):"length"in n)?[i]:At(i),M,y,T,x,R,P,I,A;if(o._targets=S.length?ca(S):Xr("GSAP target "+i+" not found. https://greensock.com",!ot.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||h||ml(c)||ml(u)){if(n=o.vars,M=o.timeline=new ct({data:"nested",defaults:g||{}}),M.kill(),M.parent=M._dp=Qt(o),M._start=0,_)nr(Tt(M.vars.defaults,{ease:"none"})),h?S.forEach(function(q,N){return _.forEach(function(U,z){return M.to(q,U,z?">":N*h)})}):_.forEach(function(q){return M.to(S,q,">")});else{if(x=S.length,I=h?Bl(h):An,ti(h))for(R in h)~Ql.indexOf(R)&&(A||(A={}),A[R]=h[R]);for(y=0;y<x;y++){T={};for(R in n)ig.indexOf(R)<0&&(T[R]=n[R]);T.stagger=0,d&&(T.yoyoEase=d),A&&Rn(T,A),P=S[y],T.duration=+ur(c,Qt(o),y,P,S),T.delay=(+ur(u,Qt(o),y,P,S)||0)-o._delay,!h&&x===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),M.to(P,T,I(y,P,S))}M.duration()?c=u=0:o.timeline=0}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!Ks&&(Ei=Qt(o),Ne.killTweensOf(S),Ei=0),Xt(p,Qt(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(f||!c&&!_&&o._start===Ke(p._time)&&lt(f)&&Pm(Qt(o))&&p.data!=="nested")&&(o._tTime=-Ce,o.render(Math.max(0,-u))),v&&Fl(Qt(o),v),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,l=this._tDur,c=this._dur,u=n>l-Ce&&n>=0?l:n<Ce?0:n,f,h,m,_,g,v,d,p,S;if(!c)Fm(this,n,s,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=n<0){if(f=u,p=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,s,a);if(f=Ke(u%_),u===l?(m=this._repeat,f=c):(m=~~(u/_),m&&m===u/_&&(f=c,m--),f>c&&(f=c)),v=this._yoyo&&m&1,v&&(S=this._yEase,f=c-f),g=Ln(this._tTime,_),f===o&&!a&&this._initted)return this;m!==g&&(p&&this._yEase&&jl(p,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=a=1,this.render(Ke(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(Il(this,n<0?n:f,a,s))return this._tTime=0,this;if(c!==this._dur)return this.render(n,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=d=(S||this._ease)(f/c),this._from&&(this.ratio=d=1-d),f&&!o&&!s&&(Rt(this,"onStart"),this._tTime!==u))return this;for(h=this._pt;h;)h.r(d,h.d),h=h._next;p&&p.render(n<0?n:!f&&v?-Ce:p._dur*d,s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(n<0&&this._startAt&&this._startAt.render(n,!0,a),Rt(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Rt(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(n<0&&this._startAt&&!this._onUpdate&&this._startAt.render(n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&yi(this,1),!s&&!(n<0&&!o)&&(u||o)&&(Rt(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?or(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Ei&&Ei.vars.overwrite!==!0)._first||or(this),this.parent&&a!==this.timeline.totalDuration()&&Cn(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?At(n):o,c=this._ptLookup,u=this._pt,f,h,m,_,g,v,d;if((!s||s==="all")&&Rm(o,l))return s==="all"&&(this._pt=0),or(this);for(f=this._op=this._op||[],s!=="all"&&(Ye(s)&&(g={},vt(s,function(p){return g[p]=1}),s=g),s=tg(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],s==="all"?(f[d]=s,_=h,m={}):(m=f[d]=f[d]||{},_=s);for(g in _)v=h&&h[g],v&&((!("kill"in v.d)||v.d.kill(g)===!0)&&Zr(this,v,"_pt"),delete h[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&or(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return rr(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return rr(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return Ne.killTweensOf(n,s,a)},e}(cr);Tt(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),vt("staggerTo,staggerFrom,staggerFromTo",function(r){We[r]=function(){var e=new ct,t=fa.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var xa=function(e,t,i){return e[t]=i},ec=function(e,t,i){return e[t](i)},ng=function(e,t,i,n){return e[t](n.fp,i)},rg=function(e,t,i){return e.setAttribute(t,i)},va=function(e,t){return He(e[t])?ec:Qs(e[t])&&e.setAttribute?rg:xa},tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ic=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Ma=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ag=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},og=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Zr(this,t,"_pt"):t.dep||(i=1),t=n;return!i},lg=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},nc=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},ut=function(){function r(t,i,n,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||tc,this.d=l||this,this.set=c||xa,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=lg,this.m=i,this.mt=s,this.tween=n},r}();vt(la+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return sa[r]=1}),_t.TweenMax=_t.TweenLite=We,_t.TimelineLite=_t.TimelineMax=ct,Ne=new ct({sortChildren:!1,defaults:Tn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),ot.stringFilter=Yl;var Jr={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Xm(n)})},timeline:function(e){return new ct(e)},getTweensOf:function(e,t){return Ne.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ye(e)&&(e=At(e)[0]);var s=Gi(e||{}).get,a=i?Rl:Al;return i==="native"&&(i=""),e&&(t?a((xt[t]&&xt[t].get||s)(e,t,i,n)):function(o,l,c){return a((xt[o]&&xt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=At(e),e.length>1){var n=e.map(function(u){return qt.quickSetter(u,t,i)}),s=n.length;return function(u){for(var f=s;f--;)n[f](u)}}e=e[0]||{};var a=xt[t],o=Gi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Pn._pt=0,f.init(e,i?u+i:u,Pn,0,[e]),f.render(1,f),Pn._pt&&Ma(1,Pn)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},isTweening:function(e){return Ne.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fn(e.ease,Tn.ease)),Ll(Tn,e||{})},config:function(e){return Ll(ot,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!xt[o]&&!_t[o]&&Xr(t+" effect requires "+o+" plugin.")}),oa[t]=function(o,l,c){return i(At(o),Tt(l||{},s),c)},a&&(ct.prototype[t]=function(o,l,c){return this.add(oa[t](o,ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){be[e]=Fn(t)},parseEase:function(e,t){return arguments.length?Fn(e,t):be},getById:function(e){return Ne.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ct(e),n,s;for(i.smoothChildTiming=lt(e.smoothChildTiming),Ne.remove(i),i._dp=0,i._time=i._tTime=Ne._time,n=Ne._first;n;)s=n._next,(t||!(!n._dur&&n instanceof We&&n.vars.onComplete===n._targets[0]))&&Xt(i,n,n._start-n._delay),n=s;return Xt(Ne,i,0),i},utils:{wrap:km,wrapYoyo:Hm,distribute:Bl,random:Gl,snap:zl,normalize:Vm,getUnit:Mt,clamp:Um,splitColor:Wl,toArray:At,selector:Bm,mapRange:kl,pipe:zm,unitize:Gm,interpolate:Wm,shuffle:Ol},install:yl,effects:oa,ticker:Lt,updateRoot:ct.updateRoot,plugins:xt,globalTimeline:Ne,core:{PropTween:ut,globals:Sl,Tween:We,Timeline:ct,Animation:cr,getCache:Gi,_removeLinkedListItem:Zr,suppressOverwrites:function(e){return Ks=e}}};vt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Jr[r]=We[r]}),Lt.add(ct.updateRoot),Pn=Jr.to({},{duration:0});var cg=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ug=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=cg(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},ya=function(e,t){return{name:e,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,c;if(Ye(s)&&(l={},vt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ug(o,s)}}}},qt=Jr.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o;for(a in t)o=this.add(e,"setAttribute",(e.getAttribute(a)||0)+"",t[a],n,s,0,0,a),o&&(o.op=a),this._props.push(a)}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i])}},ya("roundProps",da),ya("modifiers"),ya("snap",zl))||Jr;We.version=ct.version=qt.version="3.8.0",Ml=1,pl()&&Dn(),be.Power0,be.Power1,be.Power2,be.Power3,be.Power4,be.Linear,be.Quad,be.Cubic,be.Quart,be.Quint,be.Strong,be.Elastic,be.Back,be.SteppedEase,be.Bounce,be.Sine,be.Expo,be.Circ;/*!
 * CSSPlugin 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rc,Ti,In,Sa,Hi,sc,hg=function(){return typeof window!="undefined"},wi={},Wi=180/Math.PI,Nn=Math.PI/180,Un=Math.atan2,ac=1e8,oc=/([A-Z])/g,fg=/(?:left|right|width|margin|padding|x)/i,dg=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gg=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},cc=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},uc=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_g=function(e,t,i){return e.style[t]=i},xg=function(e,t,i){return e.style.setProperty(t,i)},vg=function(e,t,i){return e._gsap[t]=i},Mg=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},yg=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Sg=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Ze="transform",Ri=Ze+"Origin",hc,ba=function(e,t){var i=Ti.createElementNS?Ti.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ti.createElement(e);return i.style?i:Ti.createElement(e)},ii=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(oc,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,On(t)||t,1)||""},fc="O,Moz,ms,Ms,Webkit".split(","),On=function(e,t,i){var n=t||Hi,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(fc[a]+e in s););return a<0?null:(a===3?"ms":a>=0?fc[a]:"")+e},Ea=function(){hg()&&window.document&&(rc=window,Ti=rc.document,In=Ti.documentElement,Hi=ba("div")||{style:{}},ba("div"),Ze=On(Ze),Ri=Ze+"Origin",Hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hc=!!On("perspective"),Sa=1)},Ta=function r(e){var t=ba("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,a;if(In.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),In.removeChild(t),this.style.cssText=s,a},dc=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},pc=function(e){var t;try{t=e.getBBox()}catch{t=Ta.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ta||(t=Ta.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+dc(e,["x","cx","x1"])||0,y:+dc(e,["y","cy","y1"])||0,width:0,height:0}:t},mc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pc(e))},hr=function(e,t){if(t){var i=e.style;t in wi&&t!==Ri&&(t=Ze),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(oc,"-$1").toLowerCase())):i.removeAttribute(t)}},Li=function(e,t,i,n,s,a){var o=new ut(e._pt,t,i,0,1,a?uc:cc);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},gc={deg:1,rad:1,turn:1},Ci=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Hi.style,l=fg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=n==="px",m=n==="%",_,g,v,d;return n===a||!s||gc[n]||gc[a]?s:(a!=="px"&&!h&&(s=r(e,t,i,"px")),d=e.getCTM&&mc(e),(m||a==="%")&&(wi[t]||~t.indexOf("adius"))?(_=d?e.getBBox()[l?"width":"height"]:e[u],ze(m?s/_*f:s/100*_)):(o[l?"width":"height"]=f+(h?a:n),g=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ti||!g.appendChild)&&(g=Ti.body),v=g._gsap,v&&m&&v.width&&l&&v.time===Lt.time?ze(s/v.width*f):((m||a==="%")&&(o.position=ii(e,"position")),g===e&&(o.position="static"),g.appendChild(Hi),_=Hi[u],g.removeChild(Hi),o.position="absolute",l&&m&&(v=Gi(g),v.time=Lt.time,v.width=g[u]),ze(h?_*s/f:_&&s?f/_*s:0))))},Bn=function(e,t,i,n){var s;return Sa||Ea(),t in Ai&&t!=="transform"&&(t=Ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),wi[t]&&t!=="transform"?(s=dr(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:es(ii(e,Ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Qr[t]&&Qr[t](e,t,i)||ii(e,t)||Tl(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ci(e,t,s,i)+i:s},bg=function(e,t,i,n){if(!i||i==="none"){var s=On(t,e,1),a=s&&ii(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=ii(e,"borderTopColor"))}var o=new ut(this._pt,e.style,t,0,1,ic),l=0,c=0,u,f,h,m,_,g,v,d,p,S,M,y,T;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=ii(e,t)||n,e.style[t]=i),u=[i,n],Yl(u),i=u[0],n=u[1],h=i.match(wn)||[],T=n.match(wn)||[],T.length){for(;f=wn.exec(n);)v=f[0],p=n.substring(l,f.index),_?_=(_+1)%5:(p.substr(-5)==="rgba("||p.substr(-5)==="hsla(")&&(_=1),v!==(g=h[c++]||"")&&(m=parseFloat(g)||0,M=g.substr((m+"").length),y=v.charAt(1)==="="?+(v.charAt(0)+"1"):0,y&&(v=v.substr(2)),d=parseFloat(v),S=v.substr((d+"").length),l=wn.lastIndex-S.length,S||(S=S||ot.units[t]||M,l===n.length&&(n+=S,o.e+=S)),M!==S&&(m=Ci(e,t,g,S)||0),o._pt={_next:o._pt,p:p||c===1?p:",",s:m,c:y?y*d:d-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?uc:cc;return xl.test(n)&&(o.e=0),this._pt=o,o},_c={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Eg=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=_c[i]||i,t[1]=_c[n]||n,t.join(" ")},Tg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wi[o]&&(l=1,o=o==="transformOrigin"?Ri:Ze),hr(i,o);l&&(hr(i,Ze),a&&(a.svg&&i.removeAttribute("transform"),dr(i,1),a.uncache=1))}},Qr={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new ut(e._pt,t,i,0,0,Tg);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},fr=[1,0,0,1,0,0],xc={},vc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mc=function(e){var t=ii(e,Ze);return vc(t)?fr:t.substr(7).match(_l).map(ze)},wa=function(e,t){var i=e._gsap||Gi(e),n=e.style,s=Mc(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fr:s):(s===fr&&!e.offsetParent&&e!==In&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextSibling,In.appendChild(e)),s=Mc(e),l?n.display=l:hr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):In.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Aa=function(e,t,i,n,s,a){var o=e._gsap,l=s||wa(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,m=l[0],_=l[1],g=l[2],v=l[3],d=l[4],p=l[5],S=t.split(" "),M=parseFloat(S[0])||0,y=parseFloat(S[1])||0,T,x,R,P;i?l!==fr&&(x=m*v-_*g)&&(R=M*(v/x)+y*(-g/x)+(g*p-v*d)/x,P=M*(-_/x)+y*(m/x)-(m*p-_*d)/x,M=R,y=P):(T=pc(e),M=T.x+(~S[0].indexOf("%")?M/100*T.width:M),y=T.y+(~(S[1]||S[0]).indexOf("%")?y/100*T.height:y)),n||n!==!1&&o.smooth?(d=M-c,p=y-u,o.xOffset=f+(d*m+p*g)-d,o.yOffset=h+(d*_+p*v)-p):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Ri]="0px 0px",a&&(Li(a,o,"xOrigin",c,M),Li(a,o,"yOrigin",u,y),Li(a,o,"xOffset",f,o.xOffset),Li(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},dr=function(e,t){var i=e._gsap||new Kl(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",l=ii(e,Ri)||"0",c,u,f,h,m,_,g,v,d,p,S,M,y,T,x,R,P,I,A,q,N,U,z,O,B,Z,ee,ne,Q,me,H,Y;return c=u=f=_=g=v=d=p=S=0,h=m=1,i.svg=!!(e.getCTM&&mc(e)),T=wa(e,i.svg),i.svg&&(O=(!i.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Aa(e,O||l,!!O||i.originIsAbsolute,i.smooth!==!1,T)),M=i.xOrigin||0,y=i.yOrigin||0,T!==fr&&(I=T[0],A=T[1],q=T[2],N=T[3],c=U=T[4],u=z=T[5],T.length===6?(h=Math.sqrt(I*I+A*A),m=Math.sqrt(N*N+q*q),_=I||A?Un(A,I)*Wi:0,d=q||N?Un(q,N)*Wi+_:0,d&&(m*=Math.abs(Math.cos(d*Nn))),i.svg&&(c-=M-(M*I+y*q),u-=y-(M*A+y*N))):(Y=T[6],me=T[7],ee=T[8],ne=T[9],Q=T[10],H=T[11],c=T[12],u=T[13],f=T[14],x=Un(Y,Q),g=x*Wi,x&&(R=Math.cos(-x),P=Math.sin(-x),O=U*R+ee*P,B=z*R+ne*P,Z=Y*R+Q*P,ee=U*-P+ee*R,ne=z*-P+ne*R,Q=Y*-P+Q*R,H=me*-P+H*R,U=O,z=B,Y=Z),x=Un(-q,Q),v=x*Wi,x&&(R=Math.cos(-x),P=Math.sin(-x),O=I*R-ee*P,B=A*R-ne*P,Z=q*R-Q*P,H=N*P+H*R,I=O,A=B,q=Z),x=Un(A,I),_=x*Wi,x&&(R=Math.cos(x),P=Math.sin(x),O=I*R+A*P,B=U*R+z*P,A=A*R-I*P,z=z*R-U*P,I=O,U=B),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,v=180-v),h=ze(Math.sqrt(I*I+A*A+q*q)),m=ze(Math.sqrt(z*z+Y*Y)),x=Un(U,z),d=Math.abs(x)>2e-4?x*Wi:0,S=H?1/(H<0?-H:H):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!vc(ii(e,Ze)),O&&e.setAttribute("transform",O))),Math.abs(d)>90&&Math.abs(d)<270&&(s?(h*=-1,d+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,d+=d<=0?180:-180)),i.x=c-((i.xPercent=c&&(i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=ze(h),i.scaleY=ze(m),i.rotation=ze(_)+o,i.rotationX=ze(g)+o,i.rotationY=ze(v)+o,i.skewX=d+o,i.skewY=p+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(l.split(" ")[2])||0)&&(n[Ri]=es(l)),i.xOffset=i.yOffset=0,i.force3D=ot.force3D,i.renderTransform=i.svg?Ag:hc?yc:wg,i.uncache=0,i},es=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ra=function(e,t,i){var n=Mt(t);return ze(parseFloat(t)+parseFloat(Ci(e,"x",i+"px",n)))+n},wg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yc(e,t)},Xi="0deg",pr="0px",qi=") ",yc=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,m=i.skewY,_=i.scaleX,g=i.scaleY,v=i.transformPerspective,d=i.force3D,p=i.target,S=i.zOrigin,M="",y=d==="auto"&&e&&e!==1||d===!0;if(S&&(f!==Xi||u!==Xi)){var T=parseFloat(u)*Nn,x=Math.sin(T),R=Math.cos(T),P;T=parseFloat(f)*Nn,P=Math.cos(T),a=Ra(p,a,x*P*-S),o=Ra(p,o,-Math.sin(T)*-S),l=Ra(p,l,R*P*-S+S)}v!==pr&&(M+="perspective("+v+qi),(n||s)&&(M+="translate("+n+"%, "+s+"%) "),(y||a!==pr||o!==pr||l!==pr)&&(M+=l!==pr||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+qi),c!==Xi&&(M+="rotate("+c+qi),u!==Xi&&(M+="rotateY("+u+qi),f!==Xi&&(M+="rotateX("+f+qi),(h!==Xi||m!==Xi)&&(M+="skew("+h+", "+m+qi),(_!==1||g!==1)&&(M+="scale("+_+", "+g+qi),p.style[Ze]=M||"translate(0, 0)"},Ag=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,m=i.target,_=i.xOrigin,g=i.yOrigin,v=i.xOffset,d=i.yOffset,p=i.forceCSS,S=parseFloat(a),M=parseFloat(o),y,T,x,R,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Nn,c*=Nn,y=Math.cos(l)*f,T=Math.sin(l)*f,x=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=Nn,P=Math.tan(c-u),P=Math.sqrt(1+P*P),x*=P,R*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),y*=P,T*=P)),y=ze(y),T=ze(T),x=ze(x),R=ze(R)):(y=f,R=h,T=x=0),(S&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(S=Ci(m,"x",a,"px"),M=Ci(m,"y",o,"px")),(_||g||v||d)&&(S=ze(S+_-(_*y+g*x)+v),M=ze(M+g-(_*T+g*R)+d)),(n||s)&&(P=m.getBBox(),S=ze(S+n/100*P.width),M=ze(M+s/100*P.height)),P="matrix("+y+","+T+","+x+","+R+","+S+","+M+")",m.setAttribute("transform",P),p&&(m.style[Ze]=P)},Rg=function(e,t,i,n,s,a){var o=360,l=Ye(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?Wi:1),u=a?c*a:c-n,f=n+u+"deg",h,m;return l&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*ac)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*ac)%o-~~(u/o)*o)),e._pt=m=new ut(e._pt,t,i,n,u,pg),m.e=f,m.u="deg",e._props.push(i),m},Sc=function(e,t){for(var i in t)e[i]=t[i];return e},Lg=function(e,t,i){var n=Sc({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,m,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Ze]=t,o=dr(i,1),hr(i,Ze),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ze],a[Ze]=t,o=dr(i,1),a[Ze]=c);for(l in wi)c=n[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Mt(c),_=Mt(u),f=m!==_?Ci(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new ut(e._pt,o,l,f,h-f,lc),e._pt.u=_||0,e._props.push(l));Sc(o,n)};vt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});Qr[e>1?"border"+r:r]=function(o,l,c,u,f){var h,m;if(arguments.length<4)return h=a.map(function(_){return Bn(o,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(_,g){return m[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,m,f)}});var bc={name:"css",register:Ea,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,m,_,g,v,d,p,S,M,y,T,x;Sa||Ea();for(g in t)if(g!=="autoRound"&&(u=t[g],!(xt[g]&&Jl(g,t,i,n,e,s)))){if(m=typeof u,_=Qr[g],m==="function"&&(u=u.call(i,n,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=ar(u)),_)_(this,e,g,u,i)&&(x=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",bi.lastIndex=0,bi.test(c)||(v=Mt(c),d=Mt(u)),d?v!==d&&(c=Ci(e,g,c,d)+d):v&&(u+=v),this.add(o,"setProperty",c,u,n,s,0,0,g),a.push(g);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,s):l[g],g in ot.units&&!Mt(c)&&(c+=ot.units[g]),Ye(c)&&~c.indexOf("random(")&&(c=ar(c)),(c+"").charAt(1)==="="&&(c=Bn(e,g))):c=Bn(e,g),h=parseFloat(c),p=m==="string"&&u.charAt(1)==="="?+(u.charAt(0)+"1"):0,p&&(u=u.substr(2)),f=parseFloat(u),g in Ai&&(g==="autoAlpha"&&(h===1&&Bn(e,"visibility")==="hidden"&&f&&(h=0),Li(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in wi,S){if(M||(y=e._gsap,y.renderTransform&&!t.parseTransform||dr(e,t.parseTransform),T=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new ut(this._pt,o,Ze,0,1,y.renderTransform,y,0,-1),M.dep=1),g==="scale")this._pt=new ut(this._pt,y,"scaleY",y.scaleY,(p?p*f:f-y.scaleY)||0),a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){u=Eg(u),y.svg?Aa(e,u,0,T,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==y.zOrigin&&Li(this,y,"zOrigin",y.zOrigin,d),Li(this,o,g,es(c),es(u)));continue}else if(g==="svgOrigin"){Aa(e,u,1,T,0,this);continue}else if(g in xc){Rg(this,y,g,h,u,p);continue}else if(g==="smoothOrigin"){Li(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){Lg(this,u,e);continue}}else g in o||(g=On(g)||g);if(S||(f||f===0)&&(h||h===0)&&!dg.test(u)&&g in o)v=(c+"").substr((h+"").length),f||(f=0),d=Mt(u)||(g in ot.units?ot.units[g]:v),v!==d&&(h=Ci(e,g,c,d)),this._pt=new ut(this._pt,S?y:o,g,h,p?p*f:f-h,!S&&(d==="px"||g==="zIndex")&&t.autoRound!==!1?gg:lc),this._pt.u=d||0,v!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=mg);else if(g in o)bg.call(this,e,g,c,u);else if(g in e)this.add(e,g,c||e[g],u,n,s);else{ra(g,u);continue}a.push(g)}}x&&nc(this)},get:Bn,aliases:Ai,getSetter:function(e,t,i){var n=Ai[t];return n&&n.indexOf(",")<0&&(t=n),t in wi&&t!==Ri&&(e._gsap.x||Bn(e,"x"))?i&&sc===i?t==="scale"?Mg:vg:(sc=i||{})&&(t==="scale"?yg:Sg):e.style&&!Qs(e.style[t])?_g:~t.indexOf("-")?xg:va(e,t)},core:{_removeProperty:hr,_getMatrix:wa}};qt.utils.checkPrefix=On,function(r,e,t,i){var n=vt(r+","+e+","+t,function(s){wi[s]=1});vt(e,function(s){ot.units[s]="deg",xc[s]=1}),Ai[n[13]]=r+","+e,vt(i,function(s){var a=s.split(":");Ai[a[1]]=n[a[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ot.units[r]="px"}),qt.registerPlugin(bc);var mr=qt.registerPlugin(bc)||qt;mr.core.Tween;const Cg=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,Pg=`
varying vec2 vUv;
uniform float dispFactor;
uniform sampler2D disp;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float texture1Alpha;
uniform float texture2Alpha;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec2 resolution;
uniform vec2 imageResolution;
uniform vec2 sliderResolution;
uniform vec2 u_rgbPosition;
uniform vec2 u_rgbVelocity;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

vec2 centeredAspectRatio(vec2 uvs, vec2 factor, vec2 ratio, vec2 distortedPosition){
  return uvs * ratio + (1.0 - ratio) * 0.5 * factor - factor /2. + 0.5 + distortedPosition;
}

void main() {
  vec2 normalizedRgbPos = u_rgbPosition / sliderResolution;
  normalizedRgbPos.y = 1. - normalizedRgbPos.y; 
  vec2 vel = u_rgbVelocity;
  float dist = distance(normalizedRgbPos + vel / sliderResolution, vUv.xy);
  float ratio = clamp(1.0 - dist * 5., 0., 1.);
  vec4 tex1 = vec4(1.);
  vec4 tex2 = vec4(1.);
  vec2 u_textureFactor = vec2(1.0);
  vec2 u_texture2Factor = vec2(1.0);
  vec2 uv = vUv; 
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);
  
  vec2 aspectRatio = vec2(
    min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
    min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  );
      
  vec2 distortedPosition1 = getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  
  uv.x -= sin(uv.y) * ratio / 100. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 100. * (vel.x + vel.y) / 7.;
  tex1.r = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).r;
  tex2.r = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).r;
    
  uv.x -= sin(uv.y) * ratio / 150. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 150. * (vel.x + vel.y) / 7.;
  tex1.g = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).g;
  tex2.g = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).g;
    
  uv.x -= sin(uv.y) * ratio / 300. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 300. * (vel.x + vel.y) / 7.;
  tex1.b = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).b;
  tex2.b = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).b;
  
  tex1.a  = texture1Alpha;
  tex2.a  = texture2Alpha;
     
  vec4 mixedTextures =  mix(tex1, tex2, dispFactor);
  gl_FragColor = mixedTextures;
}
`;function ts(r,e){const t=(r%e+e)%e;return t<0?t+Math.abs(e):t}var Dg=(r,e)=>{for(const[t,i]of e)r[t]=i;return r};const Ec=new za,zn=new ll({antialias:!1,alpha:!0}),Fg={name:"vue-displacement-slideshow",props:{images:{required:!0,type:Array,default:()=>[]},displacement:{required:!0,type:String},intensity:{required:!1,type:Number,default:1},speedIn:{required:!1,type:Number,default:1},speedOut:{required:!1,type:Number,default:1},ease:{required:!1,type:String,default:"expo.inOut"},preserveAspectRatio:{required:!1,type:Boolean,default:!0},isInteractive:{required:!1,type:Boolean,default:!1},interactionFactor:{required:!1,type:Number,default:1},interactionDuration:{required:!1,type:Number,default:1},angle:{required:!1,type:Number,default:Math.PI/4},startAsTransparent:{required:!1,type:Boolean,default:!1}},data(){return{currentImage:0,mat:null,textures:[],disp:null,nextImage:0,imagesLoaded:[],isAnimating:!1,currentTransition:null,mousePosition:{},previousMousePosition:null,rafID:null,mouseSpeed:{value:0},loaded:!1}},computed:{slider(){return this.$refs.slider},camera(){const r=new ks(this.slider.offsetWidth/-2,this.slider.offsetWidth/2,this.slider.offsetHeight/2,this.slider.offsetHeight/-2,1,1e3);return r.position.z=1,r}},methods:{initScene(){zn.setPixelRatio(window.devicePixelRatio),zn.setClearColor(16777215,0),zn.setSize(this.slider.offsetWidth,this.slider.offsetHeight),this.$refs.slider.appendChild(zn.domElement)},render(){zn.render(Ec,this.camera)},transitionIn(){this.currentTransition=mr.to(this.mat.uniforms.dispFactor,{duration:this.speedIn,value:1,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd(!0),paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedIn)},transitionOut(){this.currentTransition=mr.to(this.mat.uniforms.dispFactor,{duration:this.speedOut,value:0,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd(!1),paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedOut)},setImageResolution(r){mr.to(this.mat.uniforms.imageResolution.value,{duration:r,x:this.textures[this.nextImage].image.naturalWidth,y:this.textures[this.nextImage].image.naturalHeight,ease:this.ease,onUpdate:this.render})},onAnimationEnd(r){r&&(this.currentImage=this.nextImage,this.mat.uniforms.dispFactor.value=0),this.isAnimating=!1,this.$emit("animationEnd"),this.render()},assignTexturesToMaterial(){this.mat.uniforms.texture1.value=this.textures[this.currentImage],this.mat.uniforms.texture2.value=this.textures[this.nextImage]},previous(){if(!this.isAnimating){if(this.mat===null){this.currentImage=ts(this.currentImage-1,this.textures.length);return}this.isAnimating=!0,this.mat.uniforms.dispFactor.value=1,this.nextImage=ts(this.currentImage-1,this.textures.length),this.mat.uniforms.texture1.value=this.textures[this.nextImage],this.mat.uniforms.texture2.value=this.textures[this.currentImage],this.mat.uniforms.texture1Alpha.value=this.textures[this.nextImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.currentImage].alpha,this.transitionOut(),this.currentImage=this.nextImage}},next(r=null){if(!this.isAnimating){if(this.mat===null){this.currentImage=ts(this.currentImage+1,this.textures.length);return}this.isAnimating=!0,this.nextImage=r!==null?r:ts(this.currentImage+1,this.textures.length),this.assignTexturesToMaterial(),this.mat.uniforms.texture1Alpha.value=this.textures[this.currentImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.nextImage].alpha,this.transitionIn()}},loadTextures(){this.images.forEach((e,t)=>{let i=this.insertImage(e,t);this.imagesLoaded.push(i)}),this.startAsTransparent&&this.insertTransparentTexture(0);const r=new hl;r.crossOrigin="",this.disp=r.load(this.displacement,this.render),this.disp.wrapS=Yn,this.disp.wrapT=Yn},initShaderMaterial(){const r={width:this.preserveAspectRatio?this.slider.offsetWidth:this.textures[this.currentImage].image.naturalWidth,height:this.preserveAspectRatio?this.slider.offsetHeight:this.textures[this.currentImage].image.naturalHeight};this.mat=new Oi({uniforms:{intensity1:{type:"f",value:this.intensity},intensity2:{type:"f",value:this.intensity},dispFactor:{type:"f",value:0},angle1:{type:"f",value:this.angle},angle2:{type:"f",value:-Math.PI+this.angle},texture1:{type:"t",value:this.textures[this.currentImage]},texture2:{type:"t",value:this.textures[this.nextImage]},texture1Alpha:{type:"f",value:this.textures[this.currentImage].alpha},texture2Alpha:{type:"f",value:this.textures[this.nextImage].alpha},disp:{type:"t",value:this.disp},resolution:{type:"v2",value:new Ee(r.width,r.height)},imageResolution:{type:"v2",value:new Ee(this.textures[this.currentImage].image.naturalWidth,this.textures[this.currentImage].image.naturalHeight)},sliderResolution:{type:"v2",value:new Ee(this.slider.offsetWidth,this.slider.offsetHeight)},u_rgbPosition:{type:"v2",value:new Ee(window.innerWidth/2,window.innerHeight/2)},u_rgbVelocity:{type:"v2",value:new Ee(0,0)}},vertexShader:Cg,fragmentShader:Pg,transparent:!0,opacity:1});const e=new Cr(this.slider.offsetWidth,this.slider.offsetHeight,1),t=new Gt(e,this.mat);Ec.add(t)},init(){this.initScene(),this.loadTextures(),Promise.all(this.imagesLoaded).then(()=>{this.initShaderMaterial(),this.loaded=!0,this.$emit("loaded"),this.render()})},onResize(){const r={width:this.preserveAspectRatio?this.slider.offsetWidth:this.textures[this.currentImage].image.naturalWidth,height:this.preserveAspectRatio?this.slider.offsetHeight:this.textures[this.currentImage].image.naturalHeight};zn.setSize(this.slider.offsetWidth,this.slider.offsetHeight),this.camera.aspect=this.slider.innerWidth/this.slider.innerHeight,this.camera.updateProjectionMatrix(),this.mat.uniforms.resolution.value.set(r.width,r.height),this.mat.uniforms.sliderResolution.value.set(this.slider.offsetWidth,this.slider.offsetHeight),this.render()},play(){this.currentTransition&&this.currentTransition.play()},pause(){this.currentTransition&&this.currentTransition.pause()},insertImage(r,e=this.textures.length){const t=new hl;return t.crossOrigin="",new Promise(i=>{let n=t.load(r,()=>{this.render(),i()});n.magFilter=St,n.minFilter=St,n.alpha=1,this.textures.splice(e,0,n),e<=this.currentImage&&this.loaded&&this.currentImage++})},insertTransparentTexture(r){const e=new mt;e.image={naturalWidth:this.slider.offsetWidth,naturalHeight:this.slider.offsetHeight},e.alpha=0,this.textures.splice(r,0,e)},removeImage(r){r!==this.currentImage&&(this.textures.splice(r,1),r<this.currentImage&&this.currentImage--)},goTo(r){r>=0&&r<this.textures.length&&this.next(r)},animate(){this.isInteractive&&(this.rafID=requestAnimationFrame(this.animate),this.getMouseSpeed()),this.render()},onMouseMove(r){if(this.isInteractive&&this.mat){const e=this.$refs.slider.getBoundingClientRect();this.mousePosition={x:r.clientX-e.left,y:r.clientY-e.top},this.mat.uniforms.u_rgbPosition.value=new Ee(this.mousePosition.x,this.mousePosition.y)}},getMouseSpeed(){if(this.mat){const r=Math.sqrt((this.previousMousePosition.x-this.mousePosition.x)**2+(this.previousMousePosition.y-this.mousePosition.y)**2)||0;mr.to(this.mouseSpeed,{duration:this.interactionDuration,value:r}),this.mat.uniforms.u_rgbVelocity.value=new Ee(this.mouseSpeed.value*this.interactionFactor,this.mouseSpeed.value*this.interactionFactor)}this.previousMousePosition=this.mousePosition}},mounted(){this.init(),window.addEventListener("resize",this.onResize),window.addEventListener("mousemove",this.onMouseMove),this.animate()},beforeDestroy(){cancelAnimationFrame(this.rafID),window.removeEventListener("resize",this.onResize),window.removeEventListener("mousemove",this.onMouseMove)}},Ig={class:"vue-displacement-slideshow",ref:"slider",style:{width:"100%",height:"100%"}};function Ng(r,e,t,i,n,s){return et.openBlock(),et.createElementBlock("div",Ig,null,512)}var Ug=Dg(Fg,[["render",Ng]]);return Ug});
