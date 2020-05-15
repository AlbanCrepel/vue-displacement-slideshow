(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define('vue-displacement-slideshow',[],t):'object'==typeof exports?exports['vue-displacement-slideshow']=t():e['vue-displacement-slideshow']=t()})('undefined'==typeof self?this:self,function(){var e=Math.asin,t=Math.tan,a=Math.pow,r=Math.LN2,i=Math.log,n=Math.PI,o=Math.atan2,l=Math.cos,u=Math.sin,d=Math.acos,g=Math.abs,p=Math.sqrt,m=Math.round,s=Math.ceil,f=Math.floor,_=Math.max,T=Math.min;return function(e){function t(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=75)}([function(e,t,a){'use strict';function r(e,t,a){this.x=e||0,this.y=t||0,this.z=a||0}a.d(t,'a',function(){return r});var i=a(4),n=a(27),o=new r,c=new n.a;Object.assign(r.prototype,{isVector3:!0,set:function(e,t,a){return this.x=e,this.y=t,this.z=a,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error('index is out of range: '+e);}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error('index is out of range: '+e);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return void 0===t?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this):(console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),this.addVectors(e,t))},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return void 0===t?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this):(console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),this.subVectors(e,t))},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return void 0===t?(this.x*=e.x,this.y*=e.y,this.z*=e.z,this):(console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'),this.multiplyVectors(e,t))},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(e){return e&&e.isEuler||console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'),this.applyQuaternion(c.setFromEuler(e))},applyAxisAngle:function(e,t){return this.applyQuaternion(c.setFromAxisAngle(e,t))},applyMatrix3:function(t){var a=this.x,r=this.y,i=this.z,n=t.elements;return this.x=n[0]*a+n[3]*r+n[6]*i,this.y=n[1]*a+n[4]*r+n[7]*i,this.z=n[2]*a+n[5]*r+n[8]*i,this},applyNormalMatrix:function(e){return this.applyMatrix3(e).normalize()},applyMatrix4:function(t){var a=this.x,r=this.y,i=this.z,n=t.elements,e=1/(n[3]*a+n[7]*r+n[11]*i+n[15]);return this.x=(n[0]*a+n[4]*r+n[8]*i+n[12])*e,this.y=(n[1]*a+n[5]*r+n[9]*i+n[13])*e,this.z=(n[2]*a+n[6]*r+n[10]*i+n[14])*e,this},applyQuaternion:function(e){var t=this.x,a=this.y,r=this.z,i=e.x,n=e.y,o=e.z,s=e.w,d=s*t+n*r-o*a,l=s*a+o*t-i*r,p=s*r+i*a-n*t,u=-i*t-n*a-o*r;return this.x=d*s+u*-i+l*-o-p*-n,this.y=l*s+u*-n+p*-i-d*-o,this.z=p*s+u*-o+d*-n-l*-i,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)},transformDirection:function(t){var a=this.x,r=this.y,i=this.z,n=t.elements;return this.x=n[0]*a+n[4]*r+n[8]*i,this.y=n[1]*a+n[5]*r+n[9]*i,this.z=n[2]*a+n[6]*r+n[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=T(this.x,e.x),this.y=T(this.y,e.y),this.z=T(this.z,e.z),this},max:function(e){return this.x=_(this.x,e.x),this.y=_(this.y,e.y),this.z=_(this.z,e.z),this},clamp:function(e,t){return this.x=_(e.x,T(t.x,this.x)),this.y=_(e.y,T(t.y,this.y)),this.z=_(e.z,T(t.z,this.z)),this},clampScalar:function(e,t){return this.x=_(e,T(t,this.x)),this.y=_(e,T(t,this.y)),this.z=_(e,T(t,this.z)),this},clampLength:function(e,t){var a=this.length();return this.divideScalar(a||1).multiplyScalar(_(e,T(t,a)))},floor:function(){return this.x=f(this.x),this.y=f(this.y),this.z=f(this.z),this},ceil:function(){return this.x=s(this.x),this.y=s(this.y),this.z=s(this.z),this},round:function(){return this.x=m(this.x),this.y=m(this.y),this.z=m(this.z),this},roundToZero:function(){return this.x=0>this.x?s(this.x):f(this.x),this.y=0>this.y?s(this.y):f(this.y),this.z=0>this.z?s(this.z):f(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return p(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return g(this.x)+g(this.y)+g(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,a){return this.subVectors(t,e).multiplyScalar(a).add(e)},cross:function(e,t){return void 0===t?this.crossVectors(this,e):(console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'),this.crossVectors(e,t))},crossVectors:function(e,t){var a=e.x,r=e.y,i=e.z,n=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*n-a*s,this.z=a*o-r*n,this},projectOnVector:function(e){var t=e.dot(this)/e.lengthSq();return this.copy(e).multiplyScalar(t)},projectOnPlane:function(e){return o.copy(this).projectOnVector(e),this.sub(o)},reflect:function(e){return this.sub(o.copy(e).multiplyScalar(2*this.dot(e)))},angleTo:function(e){var t=p(this.lengthSq()*e.lengthSq());0===t&&console.error('THREE.Vector3: angleTo() can\'t handle zero length vectors.');var a=this.dot(e)/t;return d(i.a.clamp(a,-1,1))},distanceTo:function(e){return p(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return t*t+a*a+r*r},manhattanDistanceTo:function(e){return g(this.x-e.x)+g(this.y-e.y)+g(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,a){var r=u(t)*e;return this.x=r*u(a),this.y=l(t)*e,this.z=r*l(a),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,a){return this.x=e*u(t),this.y=a,this.z=e*l(t),this},setFromMatrixPosition:function(t){var a=t.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this},setFromMatrixScale:function(e){var t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=r,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,4*t)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,a){return void 0!==a&&console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().'),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}})},function(e,t,a){'use strict';a.d(t,'s',function(){return r}),a.d(t,'q',function(){return i}),a.d(t,'r',function(){return n}),a.d(t,'_16',function(){return o}),a.d(t,'_17',function(){return s}),a.d(t,'_73',function(){return d}),a.d(t,'E',function(){return l}),a.d(t,'h',function(){return p}),a.d(t,'w',function(){return u}),a.d(t,'C',function(){return m}),a.d(t,'_6',function(){return c}),a.d(t,'_5',function(){return g}),a.d(t,'_8',function(){return f}),a.d(t,'d',function(){return h}),a.d(t,'_59',function(){return _}),a.d(t,'Z',function(){return x}),a.d(t,'t',function(){return y}),a.d(t,'b',function(){return v}),a.d(t,'_58',function(){return b}),a.d(t,'_51',function(){return T}),a.d(t,'W',function(){return E}),a.d(t,'V',function(){return M}),a.d(t,'_74',function(){return S}),a.d(t,'_11',function(){return w}),a.d(t,'_56',function(){return A}),a.d(t,'_15',function(){return R}),a.d(t,'_54',function(){return P}),a.d(t,'_14',function(){return L}),a.d(t,'x',function(){return F}),a.d(t,'_12',function(){return C}),a.d(t,'y',function(){return U}),a.d(t,'_13',function(){return N}),a.d(t,'_55',function(){return I}),a.d(t,'_4',function(){return O}),a.d(t,'f',function(){return D}),a.d(t,'L',function(){return z}),a.d(t,'M',function(){return B}),a.d(t,'z',function(){return V}),a.d(t,'H',function(){return k}),a.d(t,'G',function(){return G}),a.d(t,'_9',function(){return W}),a.d(t,'_0',function(){return H}),a.d(t,'Y',function(){return X}),a.d(t,'c',function(){return j}),a.d(t,'_7',function(){return q}),a.d(t,'R',function(){return Y}),a.d(t,'_49',function(){return Z}),a.d(t,'_65',function(){return J}),a.d(t,'k',function(){return Q}),a.d(t,'a',function(){return K}),a.d(t,'_64',function(){return $}),a.d(t,'m',function(){return ee}),a.d(t,'n',function(){return te}),a.d(t,'A',function(){return ae}),a.d(t,'B',function(){return re}),a.d(t,'_53',function(){return ie}),a.d(t,'o',function(){return ne}),a.d(t,'p',function(){return oe}),a.d(t,'_50',function(){return se}),a.d(t,'l',function(){return de}),a.d(t,'X',function(){return le}),a.d(t,'_1',function(){return pe}),a.d(t,'_3',function(){return ue}),a.d(t,'_2',function(){return me}),a.d(t,'O',function(){return ce}),a.d(t,'Q',function(){return ge}),a.d(t,'P',function(){return fe}),a.d(t,'_66',function(){return he}),a.d(t,'j',function(){return _e}),a.d(t,'_52',function(){return xe}),a.d(t,'_72',function(){return ye}),a.d(t,'J',function(){return ve}),a.d(t,'_68',function(){return be}),a.d(t,'D',function(){return Te}),a.d(t,'I',function(){return Ee}),a.d(t,'_69',function(){return Me}),a.d(t,'_70',function(){return Se}),a.d(t,'_71',function(){return we}),a.d(t,'_67',function(){return Ae}),a.d(t,'e',function(){return Re}),a.d(t,'_41',function(){return Pe}),a.d(t,'_19',function(){return Le}),a.d(t,'U',function(){return Fe}),a.d(t,'T',function(){return Ce}),a.d(t,'u',function(){return Ue}),a.d(t,'v',function(){return Ne}),a.d(t,'_48',function(){return Ie}),a.d(t,'_47',function(){return Oe}),a.d(t,'_36',function(){return De}),a.d(t,'_37',function(){return ze}),a.d(t,'_38',function(){return Be}),a.d(t,'_46',function(){return Ve}),a.d(t,'_45',function(){return ke}),a.d(t,'_35',function(){return Ge}),a.d(t,'_34',function(){return We}),a.d(t,'_44',function(){return He}),a.d(t,'_26',function(){return Xe}),a.d(t,'_27',function(){return je}),a.d(t,'_28',function(){return qe}),a.d(t,'_29',function(){return Ye}),a.d(t,'_30',function(){return Ze}),a.d(t,'_31',function(){return Je}),a.d(t,'_32',function(){return Qe}),a.d(t,'_33',function(){return Ke}),a.d(t,'_21',function(){return $e}),a.d(t,'_22',function(){return et}),a.d(t,'_23',function(){return tt}),a.d(t,'_20',function(){return at}),a.d(t,'_24',function(){return rt}),a.d(t,'_25',function(){return it}),a.d(t,'_63',function(){return nt}),a.d(t,'_62',function(){return ot}),a.d(t,'_61',function(){return st}),a.d(t,'N',function(){return dt}),a.d(t,'_75',function(){return lt}),a.d(t,'F',function(){return pt}),a.d(t,'_40',function(){return ut}),a.d(t,'S',function(){return mt}),a.d(t,'_43',function(){return ct}),a.d(t,'_42',function(){return gt}),a.d(t,'_39',function(){return ft}),a.d(t,'i',function(){return ht}),a.d(t,'_18',function(){return _t}),a.d(t,'_60',function(){return xt}),a.d(t,'_10',function(){return yt}),a.d(t,'K',function(){return vt}),a.d(t,'g',function(){return bt}),a.d(t,'_57',function(){return Tt});var r=0,i=1,n=2,o=1,s=2,d=3,l=0,p=1,u=2,m=1,c=0,g=0,f=1,h=2,_=3,x=4,y=5,v=100,b=101,T=102,E=103,M=104,S=200,w=201,A=202,R=203,P=204,L=205,F=206,C=207,U=208,N=209,I=210,O=0,D=1,z=2,B=3,V=4,k=5,G=6,W=7,H=0,X=1,j=2,q=0,Y=1,Z=2,J=3,Q=4,K=5,$=300,ee=301,te=302,ae=303,re=304,ie=305,ne=306,oe=307,se=1e3,de=1001,le=1002,pe=1003,ue=1004,me=1005,ce=1006,ge=1007,fe=1008,he=1009,_e=1010,xe=1011,ye=1012,ve=1013,be=1014,Te=1015,Ee=1016,Me=1017,Se=1018,we=1019,Ae=1020,Re=1021,Pe=1022,Le=1023,Fe=1024,Ce=1025,Ue=1026,Ne=1027,Ie=1028,Oe=33776,De=33777,ze=33778,Be=33779,Ve=35840,ke=35841,Ge=35842,We=35843,He=36196,Xe=37808,je=37809,qe=37810,Ye=37811,Ze=37812,Je=37813,Qe=37814,Ke=37815,$e=37816,et=37817,tt=37818,at=37819,rt=37820,it=37821,nt=0,ot=1,st=2,dt=3e3,lt=3001,pt=3007,ut=3002,mt=3003,ct=3004,gt=3005,ft=3006,ht=3200,_t=3201,xt=0,yt=1,vt=7680,bt=519,Tt=35044},function(e,t,a){'use strict';function r(e,t){this.x=e||0,this.y=t||0}a.d(t,'a',function(){return r}),Object.defineProperties(r.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}}),Object.assign(r.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error('index is out of range: '+e);}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error('index is out of range: '+e);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return void 0===t?(this.x+=e.x,this.y+=e.y,this):(console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),this.addVectors(e,t))},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return void 0===t?(this.x-=e.x,this.y-=e.y,this):(console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),this.subVectors(e,t))},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(t){var a=this.x,r=this.y,i=t.elements;return this.x=i[0]*a+i[3]*r+i[6],this.y=i[1]*a+i[4]*r+i[7],this},min:function(e){return this.x=T(this.x,e.x),this.y=T(this.y,e.y),this},max:function(e){return this.x=_(this.x,e.x),this.y=_(this.y,e.y),this},clamp:function(e,t){return this.x=_(e.x,T(t.x,this.x)),this.y=_(e.y,T(t.y,this.y)),this},clampScalar:function(e,t){return this.x=_(e,T(t,this.x)),this.y=_(e,T(t,this.y)),this},clampLength:function(e,t){var a=this.length();return this.divideScalar(a||1).multiplyScalar(_(e,T(t,a)))},floor:function(){return this.x=f(this.x),this.y=f(this.y),this},ceil:function(){return this.x=s(this.x),this.y=s(this.y),this},round:function(){return this.x=m(this.x),this.y=m(this.y),this},roundToZero:function(){return this.x=0>this.x?s(this.x):f(this.x),this.y=0>this.y?s(this.y):f(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return p(this.x*this.x+this.y*this.y)},manhattanLength:function(){return g(this.x)+g(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var e=o(this.y,this.x);return 0>e&&(e+=2*n),e},distanceTo:function(e){return p(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,a=this.y-e.y;return t*t+a*a},manhattanDistanceTo:function(e){return g(this.x-e.x)+g(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,a){return this.subVectors(t,e).multiplyScalar(a).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,a){return void 0!==a&&console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().'),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){var a=l(t),r=u(t),i=this.x-e.x,n=this.y-e.y;return this.x=i*a-n*r+e.x,this.y=i*r+n*a+e.y,this}})},function(e){var t=e.exports='undefined'!=typeof window&&window.Math==Math?window:'undefined'!=typeof self&&self.Math==Math?self:Function('return this')();'number'==typeof __g&&(__g=t)},function(e,t,o){'use strict';o.d(t,'a',function(){return p});for(var d=[],l=0;256>l;l++)d[l]=(16>l?'0':'')+l.toString(16);var p={DEG2RAD:n/180,RAD2DEG:180/n,generateUUID:function(){var e=0|4294967295*Math.random(),t=0|4294967295*Math.random(),a=0|4294967295*Math.random(),r=0|4294967295*Math.random(),i=d[255&e]+d[255&e>>8]+d[255&e>>16]+d[255&e>>24]+'-'+d[255&t]+d[255&t>>8]+'-'+d[64|15&t>>16]+d[255&t>>24]+'-'+d[128|63&a]+d[255&a>>8]+'-'+d[255&a>>16]+d[255&a>>24]+d[255&r]+d[255&r>>8]+d[255&r>>16]+d[255&r>>24];return i.toUpperCase()},clamp:function(e,t,a){return _(t,T(a,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,a,r,i){return r+(e-t)*(i-r)/(a-t)},lerp:function(e,a,r){return(1-r)*e+r*a},smoothstep:function(e,t,a){return e<=t?0:e>=a?1:(e=(e-t)/(a-t),e*e*(3-2*e))},smootherstep:function(e,t,a){return e<=t?0:e>=a?1:(e=(e-t)/(a-t),e*e*e*(e*(6*e-15)+10))},randInt:function(e,t){return e+f(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*p.DEG2RAD},radToDeg:function(e){return e*p.RAD2DEG},isPowerOfTwo:function(e){return 0==(e&e-1)&&0!==e},ceilPowerOfTwo:function(e){return a(2,s(i(e)/r))},floorPowerOfTwo:function(e){return a(2,f(i(e)/r))}}},function(e,t,a){var r=a(50)('wks'),i=a(51),n=a(3).Symbol,o='function'==typeof n,s=e.exports=function(e){return r[e]||(r[e]=o&&n[e]||(o?n:i)('Symbol.'+e))};s.store=r},function(e,t,a){'use strict';function r(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],0<arguments.length&&console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.')}a.d(t,'a',function(){return r});var i=a(0),n=new i.a,o=new r,s=new i.a(0,0,0),d=new i.a(1,1,1),m=new i.a,c=new i.a,f=new i.a;Object.assign(r.prototype,{isMatrix4:!0,set:function(e,t,a,r,i,n,o,s,d,l,p,u,m,c,g,f){var h=this.elements;return h[0]=e,h[4]=t,h[8]=a,h[12]=r,h[1]=i,h[5]=n,h[9]=o,h[13]=s,h[2]=d,h[6]=l,h[10]=p,h[14]=u,h[3]=m,h[7]=c,h[11]=g,h[15]=f,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new r().fromArray(this.elements)},copy:function(e){var t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this},copyPosition:function(e){var t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this},extractBasis:function(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this},extractRotation:function(e){var t=this.elements,a=e.elements,r=1/n.setFromMatrixColumn(e,0).length(),i=1/n.setFromMatrixColumn(e,1).length(),o=1/n.setFromMatrixColumn(e,2).length();return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=0,t[4]=a[4]*i,t[5]=a[5]*i,t[6]=a[6]*i,t[7]=0,t[8]=a[8]*o,t[9]=a[9]*o,t[10]=a[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromEuler:function(t){t&&t.isEuler||console.error('THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.');var r=this.elements,i=t.x,n=t.y,o=t.z,s=l(i),p=u(i),m=l(n),g=u(n),h=l(o),e=u(o);if('XYZ'===t.order){var _=s*h,x=s*e,y=p*h,v=p*e;r[0]=m*h,r[4]=-m*e,r[8]=g,r[1]=x+y*g,r[5]=_-v*g,r[9]=-p*m,r[2]=v-_*g,r[6]=y+x*g,r[10]=s*m}else if('YXZ'===t.order){var T=m*h,E=m*e,M=g*h,S=g*e;r[0]=T+S*p,r[4]=M*p-E,r[8]=s*g,r[1]=s*e,r[5]=s*h,r[9]=-p,r[2]=E*p-M,r[6]=S+T*p,r[10]=s*m}else if('ZXY'===t.order){var T=m*h,E=m*e,M=g*h,S=g*e;r[0]=T-S*p,r[4]=-s*e,r[8]=M+E*p,r[1]=E+M*p,r[5]=s*h,r[9]=S-T*p,r[2]=-s*g,r[6]=p,r[10]=s*m}else if('ZYX'===t.order){var _=s*h,x=s*e,y=p*h,v=p*e;r[0]=m*h,r[4]=y*g-x,r[8]=_*g+v,r[1]=m*e,r[5]=v*g+_,r[9]=x*g-y,r[2]=-g,r[6]=p*m,r[10]=s*m}else if('YZX'===t.order){var w=s*m,A=s*g,R=p*m,P=p*g;r[0]=m*h,r[4]=P-w*e,r[8]=R*e+A,r[1]=e,r[5]=s*h,r[9]=-p*h,r[2]=-g*h,r[6]=A*e+R,r[10]=w-P*e}else if('XZY'===t.order){var w=s*m,A=s*g,R=p*m,P=p*g;r[0]=m*h,r[4]=-e,r[8]=g*h,r[1]=w*e+P,r[5]=s*h,r[9]=A*e-R,r[2]=R*e-A,r[6]=p*h,r[10]=P*e+w}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this},makeRotationFromQuaternion:function(e){return this.compose(s,e,d)},lookAt:function(e,t,a){var r=this.elements;return f.subVectors(e,t),0===f.lengthSq()&&(f.z=1),f.normalize(),m.crossVectors(a,f),0===m.lengthSq()&&(1===g(a.z)?f.x+=1e-4:f.z+=1e-4,f.normalize(),m.crossVectors(a,f)),m.normalize(),c.crossVectors(f,m),r[0]=m.x,r[4]=c.x,r[8]=f.x,r[1]=m.y,r[5]=c.y,r[9]=f.y,r[2]=m.z,r[6]=c.z,r[10]=f.z,this},multiply:function(e,t){return void 0===t?this.multiplyMatrices(this,e):(console.warn('THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'),this.multiplyMatrices(e,t))},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var a=e.elements,r=t.elements,i=this.elements,n=a[0],o=a[4],s=a[8],d=a[12],l=a[1],p=a[5],u=a[9],m=a[13],c=a[2],g=a[6],f=a[10],h=a[14],_=a[3],x=a[7],y=a[11],v=a[15],b=r[0],T=r[4],E=r[8],M=r[12],S=r[1],w=r[5],A=r[9],R=r[13],P=r[2],L=r[6],F=r[10],C=r[14],U=r[3],N=r[7],I=r[11],O=r[15];return i[0]=n*b+o*S+s*P+d*U,i[4]=n*T+o*w+s*L+d*N,i[8]=n*E+o*A+s*F+d*I,i[12]=n*M+o*R+s*C+d*O,i[1]=l*b+p*S+u*P+m*U,i[5]=l*T+p*w+u*L+m*N,i[9]=l*E+p*A+u*F+m*I,i[13]=l*M+p*R+u*C+m*O,i[2]=c*b+g*S+f*P+h*U,i[6]=c*T+g*w+f*L+h*N,i[10]=c*E+g*A+f*F+h*I,i[14]=c*M+g*R+f*C+h*O,i[3]=_*b+x*S+y*P+v*U,i[7]=_*T+x*w+y*L+v*N,i[11]=_*E+x*A+y*F+v*I,i[15]=_*M+x*R+y*C+v*O,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},applyToBufferAttribute:function(e){for(var t=0,a=e.count;t<a;t++)n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.applyMatrix4(this),e.setXYZ(t,n.x,n.y,n.z);return e},determinant:function(){var e=this.elements,t=e[0],a=e[4],r=e[8],i=e[12],n=e[1],o=e[5],s=e[9],d=e[13],l=e[2],p=e[6],u=e[10],m=e[14],c=e[3],g=e[7],f=e[11],h=e[15];return c*(+i*s*p-r*d*p-i*o*u+a*d*u+r*o*m-a*s*m)+g*(+t*s*m-t*d*u+i*n*u-r*n*m+r*d*l-i*s*l)+f*(+t*d*p-t*o*m-i*n*p+a*n*m+i*o*l-a*d*l)+h*(-r*o*l-t*s*p+t*o*u+r*n*p-a*n*u+a*s*l)},transpose:function(){var e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e,t,a){var r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=a),this},getInverse:function(e,t){var a=this.elements,r=e.elements,i=r[0],n=r[1],o=r[2],s=r[3],d=r[4],l=r[5],p=r[6],u=r[7],m=r[8],c=r[9],g=r[10],f=r[11],h=r[12],_=r[13],x=r[14],y=r[15],v=c*x*u-_*g*u+_*p*f-l*x*f-c*p*y+l*g*y,b=h*g*u-m*x*u-h*p*f+d*x*f+m*p*y-d*g*y,T=m*_*u-h*c*u+h*l*f-d*_*f-m*l*y+d*c*y,E=h*c*p-m*_*p-h*l*g+d*_*g+m*l*x-d*c*x,M=i*v+n*b+o*T+s*E;if(0==M){var S='THREE.Matrix4: .getInverse() can\'t invert matrix, determinant is 0';if(!0===t)throw new Error(S);else console.warn(S);return this.identity()}var w=1/M;return a[0]=v*w,a[1]=(_*g*s-c*x*s-_*o*f+n*x*f+c*o*y-n*g*y)*w,a[2]=(l*x*s-_*p*s+_*o*u-n*x*u-l*o*y+n*p*y)*w,a[3]=(c*p*s-l*g*s-c*o*u+n*g*u+l*o*f-n*p*f)*w,a[4]=b*w,a[5]=(m*x*s-h*g*s+h*o*f-i*x*f-m*o*y+i*g*y)*w,a[6]=(h*p*s-d*x*s-h*o*u+i*x*u+d*o*y-i*p*y)*w,a[7]=(d*g*s-m*p*s+m*o*u-i*g*u-d*o*f+i*p*f)*w,a[8]=T*w,a[9]=(h*c*s-m*_*s-h*n*f+i*_*f+m*n*y-i*c*y)*w,a[10]=(d*_*s-h*l*s+h*n*u-i*_*u-d*n*y+i*l*y)*w,a[11]=(m*l*s-d*c*s-m*n*u+i*c*u+d*n*f-i*l*f)*w,a[12]=E*w,a[13]=(m*_*o-h*c*o+h*n*g-i*_*g-m*n*x+i*c*x)*w,a[14]=(h*l*o-d*_*o-h*n*p+i*_*p+d*n*x-i*l*x)*w,a[15]=(d*c*o-m*l*o+m*n*p-i*c*p-d*n*g+i*l*g)*w,this},scale:function(e){var t=this.elements,a=e.x,r=e.y,i=e.z;return t[0]*=a,t[4]*=r,t[8]*=i,t[1]*=a,t[5]*=r,t[9]*=i,t[2]*=a,t[6]*=r,t[10]*=i,t[3]*=a,t[7]*=r,t[11]*=i,this},getMaxScaleOnAxis:function(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return p(_(t,a,r))},makeTranslation:function(e,t,a){return this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this},makeRotationX:function(e){var t=l(e),a=u(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this},makeRotationY:function(e){var t=l(e),a=u(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this},makeRotationZ:function(e){var t=l(e),a=u(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,a){var r=l(a),i=u(a),n=1-r,t=e.x,o=e.y,s=e.z,d=n*t,p=n*o;return this.set(d*t+r,d*o-i*s,d*s+i*o,0,d*o+i*s,p*o+r,p*s-i*t,0,d*s-i*o,p*s+i*t,n*s*s+r,0,0,0,0,1),this},makeScale:function(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this},makeShear:function(e,t,a){return this.set(1,t,a,0,e,1,a,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,a){var r=this.elements,i=t._x,n=t._y,o=t._z,s=t._w,d=i+i,l=n+n,p=o+o,u=i*d,m=i*l,c=i*p,g=n*l,f=n*p,h=o*p,_=s*d,x=s*l,y=s*p,v=a.x,b=a.y,T=a.z;return r[0]=(1-(g+h))*v,r[1]=(m+y)*v,r[2]=(c-x)*v,r[3]=0,r[4]=(m-y)*b,r[5]=(1-(u+h))*b,r[6]=(f+_)*b,r[7]=0,r[8]=(c+x)*T,r[9]=(f-_)*T,r[10]=(1-(u+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this},decompose:function(e,t,a){var r=this.elements,i=n.set(r[0],r[1],r[2]).length(),s=n.set(r[4],r[5],r[6]).length(),d=n.set(r[8],r[9],r[10]).length(),l=this.determinant();0>l&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],o.copy(this);var p=1/i,u=1/s,m=1/d;return o.elements[0]*=p,o.elements[1]*=p,o.elements[2]*=p,o.elements[4]*=u,o.elements[5]*=u,o.elements[6]*=u,o.elements[8]*=m,o.elements[9]*=m,o.elements[10]*=m,t.setFromRotationMatrix(o),a.x=i,a.y=s,a.z=d,this},makePerspective:function(e,t,a,r,i,n){void 0===n&&console.warn('THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.');var o=this.elements;return o[0]=2*i/(t-e),o[4]=0,o[8]=(t+e)/(t-e),o[12]=0,o[1]=0,o[5]=2*i/(a-r),o[9]=(a+r)/(a-r),o[13]=0,o[2]=0,o[6]=0,o[10]=-(n+i)/(n-i),o[14]=-2*n*i/(n-i),o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},makeOrthographic:function(e,t,a,r,i,n){var o=this.elements,s=1/(t-e),d=1/(a-r),l=1/(n-i);return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-((t+e)*s),o[1]=0,o[5]=2*d,o[9]=0,o[13]=-((a+r)*d),o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-((n+i)*l),o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},equals:function(e){for(var t=this.elements,a=e.elements,r=0;16>r;r++)if(t[r]!==a[r])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var a=0;16>a;a++)this.elements[a]=e[a+t];return this},toArray:function(e,t){void 0===e&&(e=[]),void 0===t&&(t=0);var a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}})},function(e,t,a){'use strict';function r(){this.elements=[1,0,0,0,1,0,0,0,1],0<arguments.length&&console.error('THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.')}a.d(t,'a',function(){return r});var i=a(0),n=new i.a;Object.assign(r.prototype,{isMatrix3:!0,set:function(e,t,a,r,i,n,o,s,d){var l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=a,l[7]=n,l[8]=d,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){var t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this},setFromMatrix4:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},applyToBufferAttribute:function(e){for(var t=0,a=e.count;t<a;t++)n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.applyMatrix3(this),e.setXYZ(t,n.x,n.y,n.z);return e},multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var a=e.elements,r=t.elements,i=this.elements,n=a[0],o=a[3],s=a[6],d=a[1],l=a[4],p=a[7],u=a[2],m=a[5],c=a[8],g=r[0],f=r[3],h=r[6],_=r[1],x=r[4],y=r[7],v=r[2],b=r[5],T=r[8];return i[0]=n*g+o*_+s*v,i[3]=n*f+o*x+s*b,i[6]=n*h+o*y+s*T,i[1]=d*g+l*_+p*v,i[4]=d*f+l*x+p*b,i[7]=d*h+l*y+p*T,i[2]=u*g+m*_+c*v,i[5]=u*f+m*x+c*b,i[8]=u*h+m*y+c*T,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){var t=this.elements,r=t[0],a=t[1],n=t[2],o=t[3],s=t[4],e=t[5],d=t[6],l=t[7],p=t[8];return r*s*p-r*e*l-a*o*p+a*e*d+n*o*l-n*s*d},getInverse:function(e,t){e&&e.isMatrix4&&console.error('THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.');var a=e.elements,r=this.elements,i=a[0],n=a[1],o=a[2],s=a[3],d=a[4],l=a[5],p=a[6],u=a[7],m=a[8],c=m*d-l*u,g=l*p-m*s,f=u*s-d*p,h=i*c+n*g+o*f;if(0==h){var _='THREE.Matrix3: .getInverse() can\'t invert matrix, determinant is 0';if(!0===t)throw new Error(_);else console.warn(_);return this.identity()}var x=1/h;return r[0]=c*x,r[1]=(o*u-m*n)*x,r[2]=(l*n-o*d)*x,r[3]=g*x,r[4]=(m*i-o*p)*x,r[5]=(o*s-l*i)*x,r[6]=f*x,r[7]=(n*p-u*i)*x,r[8]=(d*i-n*s)*x,this},transpose:function(){var e=this.elements,t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,a,r,i,n,o){var d=l(i),p=u(i);this.set(a*d,a*p,-a*(d*n+p*o)+n+e,-r*p,r*d,-r*(-p*n+d*o)+o+t,0,0,1)},scale:function(e,t){var a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=t,a[4]*=t,a[7]*=t,this},rotate:function(e){var t=l(e),a=u(e),r=this.elements,i=r[0],n=r[3],o=r[6],d=r[1],p=r[4],m=r[7];return r[0]=t*i+a*d,r[3]=t*n+a*p,r[6]=t*o+a*m,r[1]=-a*i+t*d,r[4]=-a*n+t*p,r[7]=-a*o+t*m,this},translate:function(e,t){var a=this.elements;return a[0]+=e*a[2],a[3]+=e*a[5],a[6]+=e*a[8],a[1]+=t*a[2],a[4]+=t*a[5],a[7]+=t*a[8],this},equals:function(e){for(var t=this.elements,a=e.elements,r=0;9>r;r++)if(t[r]!==a[r])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var a=0;9>a;a++)this.elements[a]=e[a+t];return this},toArray:function(e,t){void 0===e&&(e=[]),void 0===t&&(t=0);var a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}})},function(e,t,a){'use strict';function r(){Object.defineProperty(this,'id',{value:c++}),this.uuid=u.a.generateUUID(),this.name='',this.type='Object3D',this.parent=null,this.children=[],this.up=r.DefaultUp.clone();var e=new n.a,t=new d.a,a=new i.a,s=new n.a(1,1,1);t._onChange(function(){a.setFromEuler(t,!1)}),a._onChange(function(){t.setFromQuaternion(a,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new o.a},normalMatrix:{value:new p.a}}),this.matrix=new o.a,this.matrixWorld=new o.a,this.matrixAutoUpdate=r.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new l.a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}a.d(t,'a',function(){return r});var i=a(27),n=a(0),o=a(6),s=a(9),d=a(119),l=a(120),p=a(7),u=a(4),m=a(1),c=0,g=new n.a,f=new i.a,h=new o.a,_=new n.a,v=new n.a,x=new n.a,y=new i.a,b=new n.a(1,0,0),T=new n.a(0,1,0),E=new n.a(0,0,1),M={type:'added'},S={type:'removed'};r.DefaultUp=new n.a(0,1,0),r.DefaultMatrixAutoUpdate=!0,r.prototype=Object.assign(Object.create(s.a.prototype),{constructor:r,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return f.setFromAxisAngle(e,t),this.quaternion.multiply(f),this},rotateOnWorldAxis:function(e,t){return f.setFromAxisAngle(e,t),this.quaternion.premultiply(f),this},rotateX:function(e){return this.rotateOnAxis(b,e)},rotateY:function(e){return this.rotateOnAxis(T,e)},rotateZ:function(e){return this.rotateOnAxis(E,e)},translateOnAxis:function(e,t){return g.copy(e).applyQuaternion(this.quaternion),this.position.add(g.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(b,e)},translateY:function(e){return this.translateOnAxis(T,e)},translateZ:function(e){return this.translateOnAxis(E,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(h.getInverse(this.matrixWorld))},lookAt:function(e,t,a){e.isVector3?_.copy(e):_.set(e,t,a);var r=this.parent;this.updateWorldMatrix(!0,!1),v.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?h.lookAt(v,_,this.up):h.lookAt(_,v,this.up),this.quaternion.setFromRotationMatrix(h),r&&(h.extractRotation(r.matrixWorld),f.setFromRotationMatrix(h),this.quaternion.premultiply(f.inverse()))},add:function(e){if(1<arguments.length){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error('THREE.Object3D.add: object can\'t be added as a child of itself.',e),this):(e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(M)):console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.',e),this)},remove:function(e){if(1<arguments.length){for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}var a=this.children.indexOf(e);return-1!==a&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(S)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),h.getInverse(this.matrixWorld),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),h.multiply(e.parent.matrixWorld)),e.applyMatrix(h),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty('id',e)},getObjectByName:function(e){return this.getObjectByProperty('name',e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var a=0,r=this.children.length;a<r;a++){var i=this.children[a],n=i.getObjectByProperty(e,t);if(n!==void 0)return n}},getWorldPosition:function(e){return void 0===e&&(console.warn('THREE.Object3D: .getWorldPosition() target is now required'),e=new n.a),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return void 0===e&&(console.warn('THREE.Object3D: .getWorldQuaternion() target is now required'),e=new i.a),this.updateMatrixWorld(!0),this.matrixWorld.decompose(v,e,x),e},getWorldScale:function(e){return void 0===e&&(console.warn('THREE.Object3D: .getWorldScale() target is now required'),e=new n.a),this.updateMatrixWorld(!0),this.matrixWorld.decompose(v,y,e),e},getWorldDirection:function(t){t===void 0&&(console.warn('THREE.Object3D: .getWorldDirection() target is now required'),t=new n.a),this.updateMatrixWorld(!0);var a=this.matrixWorld.elements;return t.set(a[8],a[9],a[10]).normalize()},raycast:function(){},traverse:function(e){e(this);for(var t=this.children,a=0,r=t.length;a<r;a++)t[a].traverse(e)},traverseVisible:function(e){if(!1!==this.visible){e(this);for(var t=this.children,a=0,r=t.length;a<r;a++)t[a].traverseVisible(e)}},traverseAncestors:function(e){var t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var t=this.children,a=0,r=t.length;a<r;a++)t[a].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){var a=this.parent;if(!0===e&&null!==a&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t)for(var r=this.children,n=0,i=r.length;n<i;n++)r[n].updateWorldMatrix(!1,!0)},toJSON:function(e){function t(t,a){return void 0===t[a.uuid]&&(t[a.uuid]=a.toJSON(e)),a.uuid}function a(e){var t=[];for(var a in e){var r=e[a];delete r.metadata,t.push(r)}return t}var r=void 0===e||'string'==typeof e,n={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:'Object',generator:'Object3D.toJSON'});var o={};if(o.uuid=this.uuid,o.type=this.type,''!==this.name&&(o.name=this.name),!0===this.castShadow&&(o.castShadow=!0),!0===this.receiveShadow&&(o.receiveShadow=!0),!1===this.visible&&(o.visible=!1),!1===this.frustumCulled&&(o.frustumCulled=!1),0!==this.renderOrder&&(o.renderOrder=this.renderOrder),'{}'!==JSON.stringify(this.userData)&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(o.matrixAutoUpdate=!1),this.isMesh&&this.drawMode!==m._63&&(o.drawMode=this.drawMode),this.isInstancedMesh&&(o.type='InstancedMesh',o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON()),this.isMesh||this.isLine||this.isPoints){o.geometry=t(e.geometries,this.geometry);var s=this.geometry.parameters;if(void 0!==s&&void 0!==s.shapes){var d=s.shapes;if(Array.isArray(d))for(var p=0,i=d.length,l;p<i;p++)l=d[p],t(e.shapes,l);else t(e.shapes,d)}}if(void 0!==this.material)if(Array.isArray(this.material)){for(var u=[],p=0,i=this.material.length;p<i;p++)u.push(t(e.materials,this.material[p]));o.material=u}else o.material=t(e.materials,this.material);if(0<this.children.length){o.children=[];for(var p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(r){var c=a(e.geometries),g=a(e.materials),f=a(e.textures),h=a(e.images),d=a(e.shapes);0<c.length&&(n.geometries=c),0<g.length&&(n.materials=g),0<f.length&&(n.textures=f),0<h.length&&(n.images=h),0<d.length&&(n.shapes=d)}return n.object=o,n},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(void 0===t&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(var a=0,r;a<e.children.length;a++)r=e.children[a],this.add(r.clone());return this}})},function(e,t,a){'use strict';function r(){}a.d(t,'a',function(){return r}),Object.assign(r.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});var a=this._listeners;a[e]===void 0&&(a[e]=[]),-1===a[e].indexOf(t)&&a[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;var a=this._listeners;return a[e]!==void 0&&-1!==a[e].indexOf(t)},removeEventListener:function(e,t){if(void 0!==this._listeners){var a=this._listeners,r=a[e];if(void 0!==r){var i=r.indexOf(t);-1!==i&&r.splice(i,1)}}},dispatchEvent:function(e){if(void 0!==this._listeners){var t=this._listeners,a=t[e.type];if(void 0!==a){e.target=this;for(var r=a.slice(0),n=0,i=r.length;n<i;n++)r[n].call(this,e)}}}})},function(e,t,a){'use strict';function r(e,t,a,i,s,p,m,c,g,f){Object.defineProperty(this,'id',{value:u++}),this.uuid=o.a.generateUUID(),this.name='',this.image=e===void 0?r.DEFAULT_IMAGE:e,this.mipmaps=[],this.mapping=t===void 0?r.DEFAULT_MAPPING:t,this.wrapS=a===void 0?n.l:a,this.wrapT=i===void 0?n.l:i,this.magFilter=s===void 0?n.O:s,this.minFilter=p===void 0?n.P:p,this.anisotropy=g===void 0?1:g,this.format=m===void 0?n._19:m,this.type=c===void 0?n._66:c,this.offset=new d.a(0,0),this.repeat=new d.a(1,1),this.center=new d.a(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new l.a,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f===void 0?n.N:f,this.version=0,this.onUpdate=null}a.d(t,'a',function(){return r});var i=a(9),n=a(1),o=a(4),d=a(2),l=a(7),p=a(123),u=0;r.DEFAULT_IMAGE=void 0,r.DEFAULT_MAPPING=n._64,r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){var t=void 0===e||'string'==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];var a={metadata:{version:4.5,type:'Texture',generator:'Texture.toJSON'},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var r=this.image;if(void 0===r.uuid&&(r.uuid=o.a.generateUUID()),!t&&void 0===e.images[r.uuid]){var n;if(Array.isArray(r)){n=[];for(var s=0,i=r.length;s<i;s++)n.push(p.a.getDataURL(r[s]))}else n=p.a.getDataURL(r);e.images[r.uuid]={uuid:r.uuid,url:n}}a.image=r.uuid}return t||(e.textures[this.uuid]=a),a},dispose:function(){this.dispatchEvent({type:'dispose'})},transformUv:function(e){if(this.mapping!==n._64)return e;if(e.applyMatrix3(this.matrix),0>e.x||1<e.x)switch(this.wrapS){case n._50:e.x-=f(e.x);break;case n.l:e.x=0>e.x?0:1;break;case n.X:1===g(f(e.x)%2)?e.x=s(e.x)-e.x:e.x-=f(e.x);}if(0>e.y||1<e.y)switch(this.wrapT){case n._50:e.y-=f(e.y);break;case n.l:e.y=0>e.y?0:1;break;case n.X:1===g(f(e.y)%2)?e.y=s(e.y)-e.y:e.y-=f(e.y);}return this.flipY&&(e.y=1-e.y),e}}),Object.defineProperty(r.prototype,'needsUpdate',{set:function(e){!0===e&&this.version++}})},function(e,t,r){'use strict';function i(e,t,a){return void 0===t&&void 0===a?this.set(e):this.setRGB(e,t,a)}function n(e,a,r){return 0>r&&(r+=1),1<r&&(r-=1),r<1/6?e+6*(a-e)*r:r<1/2?a:r<2/3?e+6*(a-e)*(2/3-r):e}function o(e){return .04045>e?.0773993808*e:a(.9478672986*e+.0521327014,2.4)}function s(e){return .0031308>e?12.92*e:1.055*a(e,.41666)-.055}r.d(t,'a',function(){return i});var d=r(4),l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},p={h:0,s:0,l:0},u={h:0,s:0,l:0};Object.assign(i.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):'number'==typeof e?this.setHex(e):'string'==typeof e&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=f(e),this.r=(255&e>>16)/255,this.g=(255&e>>8)/255,this.b=(255&e)/255,this},setRGB:function(e,t,a){return this.r=e,this.g=t,this.b=a,this},setHSL:function(e,t,a){if(e=d.a.euclideanModulo(e,1),t=d.a.clamp(t,0,1),a=d.a.clamp(a,0,1),0===t)this.r=this.g=this.b=a;else{var r=.5>=a?a*(1+t):a+t-a*t,i=2*a-r;this.r=n(i,r,e+1/3),this.g=n(i,r,e),this.b=n(i,r,e-1/3)}return this},setStyle:function(e){function t(t){void 0===t||1>parseFloat(t)&&console.warn('THREE.Color: Alpha component of '+e+' will be ignored.')}var a;if(a=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){var r=a[1],i=a[2],n;switch(r){case'rgb':case'rgba':if(n=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i))return this.r=T(255,parseInt(n[1],10))/255,this.g=T(255,parseInt(n[2],10))/255,this.b=T(255,parseInt(n[3],10))/255,t(n[5]),this;if(n=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i))return this.r=T(100,parseInt(n[1],10))/100,this.g=T(100,parseInt(n[2],10))/100,this.b=T(100,parseInt(n[3],10))/100,t(n[5]),this;break;case'hsl':case'hsla':if(n=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)){var o=parseFloat(n[1])/360,d=parseInt(n[2],10)/100,s=parseInt(n[3],10)/100;return t(n[5]),this.setHSL(o,d,s)}}}else if(a=/^\#([A-Fa-f0-9]+)$/.exec(e)){var l=a[1],p=l.length;if(3===p)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,this;if(6===p)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,this}return e&&0<e.length?this.setColorName(e):this},setColorName:function(e){var t=l[e];return void 0===t?console.warn('THREE.Color: Unknown color '+e):this.setHex(t),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return void 0===t&&(t=2),this.r=a(e.r,t),this.g=a(e.g,t),this.b=a(e.b,t),this},copyLinearToGamma:function(e,t){void 0===t&&(t=2);var r=0<t?1/t:1;return this.r=a(e.r,r),this.g=a(e.g,r),this.b=a(e.b,r),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(e){return this.r=o(e.r),this.g=o(e.g),this.b=o(e.b),this},copyLinearToSRGB:function(e){return this.r=s(e.r),this.g=s(e.g),this.b=s(e.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return('000000'+this.getHex().toString(16)).slice(-6)},getHSL:function(e){void 0===e&&(console.warn('THREE.Color: .getHSL() target is now required'),e={h:0,s:0,l:0});var t=this.r,a=this.g,r=this.b,i=_(t,a,r),n=T(t,a,r),o=(n+i)/2,s,d;if(n===i)s=0,d=0;else{var l=i-n;d=.5>=o?l/(i+n):l/(2-i-n),i===t?s=(a-r)/l+(a<r?6:0):i===a?s=(r-t)/l+2:i===r?s=(t-a)/l+4:void 0,s/=6}return e.h=s,e.s=d,e.l=o,e},getStyle:function(){return'rgb('+(0|255*this.r)+','+(0|255*this.g)+','+(0|255*this.b)+')'},offsetHSL:function(e,t,a){return this.getHSL(p),p.h+=e,p.s+=t,p.l+=a,this.setHSL(p.h,p.s,p.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=_(0,this.r-e.r),this.g=_(0,this.g-e.g),this.b=_(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(e,t){this.getHSL(p),e.getHSL(u);var a=d.a.lerp(p.h,u.h,t),r=d.a.lerp(p.s,u.s,t),i=d.a.lerp(p.l,u.l,t);return this.setHSL(a,r,i),this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return void 0===t&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},toJSON:function(){return this.getHex()}}),i.NAMES=l},function(e){var t=e.exports={version:'2.5.7'};'number'==typeof __e&&(__e=t)},function(e,t,a){var r=a(16);e.exports=function(e){if(!r(e))throw TypeError(e+' is not an object!');return e}},function(e,t,a){'use strict';function r(e,t,a,r){this.x=e||0,this.y=t||0,this.z=a||0,this.w=r===void 0?1:r}a.d(t,'a',function(){return r}),Object.defineProperties(r.prototype,{width:{get:function(){return this.z},set:function(e){this.z=e}},height:{get:function(){return this.w},set:function(e){this.w=e}}}),Object.assign(r.prototype,{isVector4:!0,set:function(e,t,a,r){return this.x=e,this.y=t,this.z=a,this.w=r,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error('index is out of range: '+e);}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error('index is out of range: '+e);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0===e.w?1:e.w,this},add:function(e,t){return void 0===t?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this):(console.warn('THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),this.addVectors(e,t))},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return void 0===t?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this):(console.warn('THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),this.subVectors(e,t))},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(t){var a=this.x,r=this.y,i=this.z,n=this.w,o=t.elements;return this.x=o[0]*a+o[4]*r+o[8]*i+o[12]*n,this.y=o[1]*a+o[5]*r+o[9]*i+o[13]*n,this.z=o[2]*a+o[6]*r+o[10]*i+o[14]*n,this.w=o[3]*a+o[7]*r+o[11]*i+o[15]*n,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*d(e.w);var t=p(1-e.w*e.w);return 1e-4>t?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){var t=.01,a=.1,r=e.elements,i=r[0],o=r[4],l=r[8],u=r[1],m=r[5],c=r[9],f=r[2],h=r[6],_=r[10],v,b,x,y;if(g(o-u)<t&&g(l-f)<t&&g(c-h)<t){if(g(o+u)<a&&g(l+f)<a&&g(c+h)<a&&g(i+m+_-3)<a)return this.set(1,0,0,0),this;v=n;var T=(i+1)/2,E=(m+1)/2,M=(_+1)/2,S=(o+u)/4,w=(l+f)/4,A=(c+h)/4;return T>E&&T>M?T<t?(b=0,x=.707106781,y=.707106781):(b=p(T),x=S/b,y=w/b):E>M?E<t?(b=.707106781,x=0,y=.707106781):(x=p(E),b=S/x,y=A/x):M<t?(b=.707106781,x=.707106781,y=0):(y=p(M),b=w/y,x=A/y),this.set(b,x,y,v),this}var R=p((h-c)*(h-c)+(l-f)*(l-f)+(u-o)*(u-o));return .001>g(R)&&(R=1),this.x=(h-c)/R,this.y=(l-f)/R,this.z=(u-o)/R,this.w=d((i+m+_-1)/2),this},min:function(e){return this.x=T(this.x,e.x),this.y=T(this.y,e.y),this.z=T(this.z,e.z),this.w=T(this.w,e.w),this},max:function(e){return this.x=_(this.x,e.x),this.y=_(this.y,e.y),this.z=_(this.z,e.z),this.w=_(this.w,e.w),this},clamp:function(e,t){return this.x=_(e.x,T(t.x,this.x)),this.y=_(e.y,T(t.y,this.y)),this.z=_(e.z,T(t.z,this.z)),this.w=_(e.w,T(t.w,this.w)),this},clampScalar:function(e,t){return this.x=_(e,T(t,this.x)),this.y=_(e,T(t,this.y)),this.z=_(e,T(t,this.z)),this.w=_(e,T(t,this.w)),this},clampLength:function(e,t){var a=this.length();return this.divideScalar(a||1).multiplyScalar(_(e,T(t,a)))},floor:function(){return this.x=f(this.x),this.y=f(this.y),this.z=f(this.z),this.w=f(this.w),this},ceil:function(){return this.x=s(this.x),this.y=s(this.y),this.z=s(this.z),this.w=s(this.w),this},round:function(){return this.x=m(this.x),this.y=m(this.y),this.z=m(this.z),this.w=m(this.w),this},roundToZero:function(){return this.x=0>this.x?s(this.x):f(this.x),this.y=0>this.y?s(this.y):f(this.y),this.z=0>this.z?s(this.z):f(this.z),this.w=0>this.w?s(this.w):f(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return p(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return g(this.x)+g(this.y)+g(this.z)+g(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,a){return this.subVectors(t,e).multiplyScalar(a).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return void 0===t&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,a){return void 0!==a&&console.warn('THREE.Vector4: offset has been removed from .fromBufferAttribute().'),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}})},function(e,t,a){var r=a(24),i=a(48);e.exports=a(17)?function(e,t,a){return r.f(e,t,i(1,a))}:function(e,t,a){return e[t]=a,e}},function(e){e.exports=function(e){return'object'==typeof e?null!==e:'function'==typeof e}},function(e,t,a){e.exports=!a(47)(function(){return 7!=Object.defineProperty({},'a',{get:function(){return 7}}).a})},function(e){e.exports={}},function(e,t,a){'use strict';function r(){Object.defineProperty(this,'id',{value:h+=2}),this.uuid=g.a.generateUUID(),this.name='',this.type='BufferGeometry',this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}a.d(t,'a',function(){return r});var n=a(0),o=a(39),i=a(9),s=a(20),d=a(28),l=a(250),u=a(8),m=a(6),c=a(7),g=a(4),f=a(65),h=1,v=new m.a,x=new u.a,y=new n.a,b=new o.a,E=new o.a,M=new n.a;r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){this.index=Array.isArray(e)?new(65535<Object(f.a)(e)?s.d:s.c)(e,1):e},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,a){this.groups.push({start:e,count:t,materialIndex:a===void 0?0:a})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix:function(e){var t=this.attributes.position;void 0!==t&&(e.applyToBufferAttribute(t),t.needsUpdate=!0);var a=this.attributes.normal;if(void 0!==a){var r=new c.a().getNormalMatrix(e);r.applyToBufferAttribute(a),a.needsUpdate=!0}var i=this.attributes.tangent;if(void 0!==i){var r=new c.a().getNormalMatrix(e);r.applyToBufferAttribute(i),i.needsUpdate=!0}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(e){return v.makeRotationX(e),this.applyMatrix(v),this},rotateY:function(e){return v.makeRotationY(e),this.applyMatrix(v),this},rotateZ:function(e){return v.makeRotationZ(e),this.applyMatrix(v),this},translate:function(e,t,a){return v.makeTranslation(e,t,a),this.applyMatrix(v),this},scale:function(e,t,a){return v.makeScale(e,t,a),this.applyMatrix(v),this},lookAt:function(e){return x.lookAt(e),x.updateMatrix(),this.applyMatrix(x.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(y).negate(),this.translate(y.x,y.y,y.z),this},setFromObject:function(e){var t=e.geometry;if(e.isPoints||e.isLine){var a=new s.b(3*t.vertices.length,3),r=new s.b(3*t.colors.length,3);if(this.setAttribute('position',a.copyVector3sArray(t.vertices)),this.setAttribute('color',r.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){var i=new s.b(t.lineDistances.length,1);this.setAttribute('lineDistance',i.copyArray(t.lineDistances))}null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){for(var t=[],a=0,r=e.length,i;a<r;a++)i=e[a],t.push(i.x,i.y,i.z||0);return this.setAttribute('position',new s.b(t,3)),this},updateFromObject:function(e){var t=e.geometry;if(e.isMesh){var a=t.__directGeometry;if(!0===t.elementsNeedUpdate&&(a=void 0,t.elementsNeedUpdate=!1),void 0===a)return this.fromGeometry(t);a.verticesNeedUpdate=t.verticesNeedUpdate,a.normalsNeedUpdate=t.normalsNeedUpdate,a.colorsNeedUpdate=t.colorsNeedUpdate,a.uvsNeedUpdate=t.uvsNeedUpdate,a.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=a}var r;return!0===t.verticesNeedUpdate&&(r=this.attributes.position,void 0!==r&&(r.copyVector3sArray(t.vertices),r.needsUpdate=!0),t.verticesNeedUpdate=!1),!0===t.normalsNeedUpdate&&(r=this.attributes.normal,void 0!==r&&(r.copyVector3sArray(t.normals),r.needsUpdate=!0),t.normalsNeedUpdate=!1),!0===t.colorsNeedUpdate&&(r=this.attributes.color,void 0!==r&&(r.copyColorsArray(t.colors),r.needsUpdate=!0),t.colorsNeedUpdate=!1),t.uvsNeedUpdate&&(r=this.attributes.uv,void 0!==r&&(r.copyVector2sArray(t.uvs),r.needsUpdate=!0),t.uvsNeedUpdate=!1),t.lineDistancesNeedUpdate&&(r=this.attributes.lineDistance,void 0!==r&&(r.copyArray(t.lineDistances),r.needsUpdate=!0),t.lineDistancesNeedUpdate=!1),t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new l.a().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){var t=new Float32Array(3*e.vertices.length);if(this.setAttribute('position',new s.a(t,3).copyVector3sArray(e.vertices)),0<e.normals.length){var a=new Float32Array(3*e.normals.length);this.setAttribute('normal',new s.a(a,3).copyVector3sArray(e.normals))}if(0<e.colors.length){var r=new Float32Array(3*e.colors.length);this.setAttribute('color',new s.a(r,3).copyColorsArray(e.colors))}if(0<e.uvs.length){var n=new Float32Array(2*e.uvs.length);this.setAttribute('uv',new s.a(n,2).copyVector2sArray(e.uvs))}if(0<e.uvs2.length){var o=new Float32Array(2*e.uvs2.length);this.setAttribute('uv2',new s.a(o,2).copyVector2sArray(e.uvs2))}for(var d in this.groups=e.groups,e.morphTargets){for(var p=[],u=e.morphTargets[d],m=0,i=u.length;m<i;m++){var l=u[m],c=new s.b(3*l.data.length,3);c.name=l.name,p.push(c.copyVector3sArray(l.data))}this.morphAttributes[d]=p}if(0<e.skinIndices.length){var g=new s.b(4*e.skinIndices.length,4);this.setAttribute('skinIndex',g.copyVector4sArray(e.skinIndices))}if(0<e.skinWeights.length){var f=new s.b(4*e.skinWeights.length,4);this.setAttribute('skinWeight',f.copyVector4sArray(e.skinWeights))}return null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new o.a);var e=this.attributes.position,t=this.morphAttributes.position;if(void 0===e)this.boundingBox.makeEmpty();else if(this.boundingBox.setFromBufferAttribute(e),t)for(var a=0,r=t.length,i;a<r;a++)i=t[a],b.setFromBufferAttribute(i),this.morphTargetsRelative?(M.addVectors(this.boundingBox.min,b.min),this.boundingBox.expandByPoint(M),M.addVectors(this.boundingBox.max,b.max),this.boundingBox.expandByPoint(M)):(this.boundingBox.expandByPoint(b.min),this.boundingBox.expandByPoint(b.max));(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new d.a);var e=this.attributes.position,t=this.morphAttributes.position;if(e){var a=this.boundingSphere.center;if(b.setFromBufferAttribute(e),t)for(var r=0,i=t.length,n;r<i;r++)n=t[r],E.setFromBufferAttribute(n),this.morphTargetsRelative?(M.addVectors(b.min,E.min),b.expandByPoint(M),M.addVectors(b.max,E.max),b.expandByPoint(M)):(b.expandByPoint(E.min),b.expandByPoint(E.max));b.getCenter(a);for(var o=0,r=0,i=e.count;r<i;r++)M.fromBufferAttribute(e,r),o=_(o,a.distanceToSquared(M));if(t)for(var r=0,i=t.length;r<i;r++)for(var n=t[r],s=this.morphTargetsRelative,l=0,u=n.count;l<u;l++)M.fromBufferAttribute(n,l),s&&(y.fromBufferAttribute(e,l),M.add(y)),o=_(o,a.distanceToSquared(M));this.boundingSphere.radius=p(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){var e=this.index,t=this.attributes;if(t.position){var a=t.position.array;if(t.normal===void 0)this.setAttribute('normal',new s.a(new Float32Array(a.length),3));else for(var r=t.normal.array,o=0,i=r.length;o<i;o++)r[o]=0;var d=t.normal.array,l=new n.a,p=new n.a,u=new n.a,m=new n.a,c=new n.a,g,f,h;if(e)for(var _=e.array,o=0,i=e.count;o<i;o+=3)g=3*_[o+0],f=3*_[o+1],h=3*_[o+2],l.fromArray(a,g),p.fromArray(a,f),u.fromArray(a,h),m.subVectors(u,p),c.subVectors(l,p),m.cross(c),d[g]+=m.x,d[g+1]+=m.y,d[g+2]+=m.z,d[f]+=m.x,d[f+1]+=m.y,d[f+2]+=m.z,d[h]+=m.x,d[h+1]+=m.y,d[h+2]+=m.z;else for(var o=0,i=a.length;o<i;o+=9)l.fromArray(a,o),p.fromArray(a,o+3),u.fromArray(a,o+6),m.subVectors(u,p),c.subVectors(l,p),m.cross(c),d[o]=m.x,d[o+1]=m.y,d[o+2]=m.z,d[o+3]=m.x,d[o+4]=m.y,d[o+5]=m.z,d[o+6]=m.x,d[o+7]=m.y,d[o+8]=m.z;this.normalizeNormals(),t.normal.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry))return void console.error('THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.',e);t===void 0&&(t=0,console.warn('THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'));var a=this.attributes;for(var r in a)if(e.attributes[r]!==void 0)for(var n=a[r],o=n.array,s=e.attributes[r],d=s.array,l=s.itemSize*t,p=T(d.length,o.length-l),u=0,i=l;u<p;u++,i++)o[i]=d[u];return this},normalizeNormals:function(){for(var e=this.attributes.normal,t=0,a=e.count;t<a;t++)M.x=e.getX(t),M.y=e.getY(t),M.z=e.getZ(t),M.normalize(),e.setXYZ(t,M.x,M.y,M.z)},toNonIndexed:function(){function e(e,t){for(var a=e.array,r=e.itemSize,n=new a.constructor(t.length*r),o=0,d=0,p=0,i=t.length;p<i;p++){o=t[p]*r;for(var l=0;l<r;l++)n[d++]=a[o++]}return new s.a(n,r)}if(null===this.index)return console.warn('THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.'),this;var t=new r,a=this.index.array,n=this.attributes;for(var o in n){var d=n[o],p=e(d,a);t.setAttribute(o,p)}var u=this.morphAttributes;for(o in u){for(var m=[],c=u[o],g=0,i=c.length;g<i;g++){var d=c[g],p=e(d,a);m.push(p)}t.morphAttributes[o]=m}t.morphTargetsRelative=this.morphTargetsRelative;for(var f=this.groups,g=0,h=f.length,l;g<h;g++)l=f[g],t.addGroup(l.start,l.count,l.materialIndex);return t},toJSON:function(){var e={metadata:{version:4.5,type:'BufferGeometry',generator:'BufferGeometry.toJSON'}};if(e.uuid=this.uuid,e.type=this.type,''!==this.name&&(e.name=this.name),0<Object.keys(this.userData).length&&(e.userData=this.userData),void 0!==this.parameters){var t=this.parameters;for(var a in t)void 0!==t[a]&&(e[a]=t[a]);return e}e.data={attributes:{}};var r=this.index;null!==r&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});var n=this.attributes;for(var a in n){var o=n[a],s=o.toJSON();''!==o.name&&(s.name=o.name),e.data.attributes[a]=s}var d={},l=!1;for(var a in this.morphAttributes){for(var p=this.morphAttributes[a],u=[],m=0,i=p.length;m<i;m++){var o=p[m],s=o.toJSON();''!==o.name&&(s.name=o.name),u.push(s)}0<u.length&&(d[a]=u,l=!0)}l&&(e.data.morphAttributes=d,e.data.morphTargetsRelative=this.morphTargetsRelative);var c=this.groups;0<c.length&&(e.data.groups=JSON.parse(JSON.stringify(c)));var g=this.boundingSphere;return null!==g&&(e.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),e},clone:function(){return new r().copy(this)},copy:function(e){var t,a,r;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;var i=e.index;null!==i&&this.setIndex(i.clone());var n=e.attributes;for(t in n){var o=n[t];this.setAttribute(t,o.clone())}var s=e.morphAttributes;for(t in s){var d=[],l=s[t];for(a=0,r=l.length;a<r;a++)d.push(l[a].clone());this.morphAttributes[t]=d}this.morphTargetsRelative=e.morphTargetsRelative;var p=e.groups;for(a=0,r=p.length;a<r;a++){var u=p[a];this.addGroup(u.start,u.count,u.materialIndex)}var m=e.boundingBox;null!==m&&(this.boundingBox=m.clone());var c=e.boundingSphere;return null!==c&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(e,t,a){'use strict';function r(e,t,a){if(Array.isArray(e))throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');this.name='',this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=!0===a,this.usage=_._57,this.updateRange={offset:0,count:-1},this.version=0}function i(e,t,a){r.call(this,new Int8Array(e),t,a)}function n(e,t,a){r.call(this,new Uint8Array(e),t,a)}function o(e,t,a){r.call(this,new Uint8ClampedArray(e),t,a)}function s(e,t,a){r.call(this,new Int16Array(e),t,a)}function d(e,t,a){r.call(this,new Uint16Array(e),t,a)}function l(e,t,a){r.call(this,new Int32Array(e),t,a)}function p(e,t,a){r.call(this,new Uint32Array(e),t,a)}function u(e,t,a){r.call(this,new Float32Array(e),t,a)}function m(e,t,a){r.call(this,new Float64Array(e),t,a)}a.d(t,'b',function(){return u}),a.d(t,'d',function(){return p}),a.d(t,'c',function(){return d}),a.d(t,'a',function(){return r});var c=a(14),g=a(0),f=a(2),h=a(11),_=a(1);Object.defineProperty(r.prototype,'needsUpdate',{set:function(e){!0===e&&this.version++}}),Object.assign(r.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,a){e*=this.itemSize,a*=t.itemSize;for(var r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[a+r];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var t=this.array,a=0,r=0,i=e.length,n;r<i;r++)n=e[r],void 0===n&&(console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined',r),n=new h.a),t[a++]=n.r,t[a++]=n.g,t[a++]=n.b;return this},copyVector2sArray:function(e){for(var t=this.array,a=0,r=0,i=e.length,n;r<i;r++)n=e[r],void 0===n&&(console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined',r),n=new f.a),t[a++]=n.x,t[a++]=n.y;return this},copyVector3sArray:function(e){for(var t=this.array,a=0,r=0,i=e.length,n;r<i;r++)n=e[r],void 0===n&&(console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined',r),n=new g.a),t[a++]=n.x,t[a++]=n.y,t[a++]=n.z;return this},copyVector4sArray:function(e){for(var t=this.array,a=0,r=0,i=e.length,n;r<i;r++)n=e[r],void 0===n&&(console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined',r),n=new c.a),t[a++]=n.x,t[a++]=n.y,t[a++]=n.z,t[a++]=n.w;return this},set:function(e,t){return void 0===t&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=a,this},setXYZ:function(e,t,a,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this},setXYZW:function(e,t,a,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=i,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),i.prototype=Object.create(r.prototype),i.prototype.constructor=i,n.prototype=Object.create(r.prototype),n.prototype.constructor=n,o.prototype=Object.create(r.prototype),o.prototype.constructor=o,s.prototype=Object.create(r.prototype),s.prototype.constructor=s,d.prototype=Object.create(r.prototype),d.prototype.constructor=d,l.prototype=Object.create(r.prototype),l.prototype.constructor=l,p.prototype=Object.create(r.prototype),p.prototype.constructor=p,u.prototype=Object.create(r.prototype),u.prototype.constructor=u,m.prototype=Object.create(r.prototype),m.prototype.constructor=m},function(e,t,a){var r=a(3),i=a(12),n=a(22),o=a(15),s=a(25),d='prototype',l=function(e,t,a){var p=e&l.F,u=e&l.G,m=e&l.S,c=e&l.P,g=e&l.B,f=e&l.W,h=u?i:i[t]||(i[t]={}),_=h[d],x=u?r:m?r[t]:(r[t]||{})[d],y,v,b;for(y in u&&(a=t),a)v=!p&&x&&void 0!==x[y],v&&s(h,y)||(b=v?x[y]:a[y],h[y]=u&&'function'!=typeof x[y]?a[y]:g&&v?n(b,r):f&&x[y]==b?function(e){var t=function(t,a,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,a);}return new e(t,a,r)}return e.apply(this,arguments)};return t[d]=e[d],t}(b):c&&'function'==typeof b?n(Function.call,b):b,c&&((h.virtual||(h.virtual={}))[y]=b,e&l.R&&_&&!_[y]&&o(_,y,b)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t,a){var r=a(23);e.exports=function(e,t,a){return(r(e),void 0===t)?e:1===a?function(r){return e.call(t,r)}:2===a?function(r,a){return e.call(t,r,a)}:3===a?function(r,a,i){return e.call(t,r,a,i)}:function(){return e.apply(t,arguments)}}},function(e){e.exports=function(e){if('function'!=typeof e)throw TypeError(e+' is not a function!');return e}},function(e,t,a){var r=a(13),i=a(87),n=a(88),o=Object.defineProperty;t.f=a(17)?Object.defineProperty:function(e,t,a){if(r(e),t=n(t,!0),r(a),i)try{return o(e,t,a)}catch(t){}if('get'in a||'set'in a)throw TypeError('Accessors not supported!');return'value'in a&&(e[t]=a.value),e}},function(e){var t={}.hasOwnProperty;e.exports=function(e,a){return t.call(e,a)}},function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},function(e,t,a){'use strict';function r(e,t,a,r){this._x=e||0,this._y=t||0,this._z=a||0,this._w=r===void 0?1:r}var i=Number.EPSILON;a.d(t,'a',function(){return r});var n=a(4);Object.assign(r,{slerp:function(e,a,r,i){return r.copy(e).slerp(a,i)},slerpFlat:function(e,a,r,n,d,l,m){var t=r[n+0],c=r[n+1],g=r[n+2],h=r[n+3],_=d[l+0],x=d[l+1],y=d[l+2],v=d[l+3];if(h!==v||t!==_||c!==x||g!==y){var b=1-m,s=t*_+c*x+g*y+h*v,T=0<=s?1:-1,E=1-s*s;if(E>i){var M=p(E),S=o(M,s*T);b=u(b*S)/M,m=u(m*S)/M}var w=m*T;if(t=t*b+_*w,c=c*b+x*w,g=g*b+y*w,h=h*b+v*w,b==1-m){var A=1/p(t*t+c*c+g*g+h*h);t*=A,c*=A,g*=A,h*=A}}e[a]=t,e[a+1]=c,e[a+2]=g,e[a+3]=h}}),Object.defineProperties(r.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this._onChangeCallback()}}}),Object.assign(r.prototype,{isQuaternion:!0,set:function(e,t,a,r){return this._x=e,this._y=t,this._z=a,this._w=r,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');var a=e._x,r=e._y,i=e._z,n=e.order,o=l,s=u,d=o(a/2),p=o(r/2),m=o(i/2),c=s(a/2),g=s(r/2),f=s(i/2);return'XYZ'===n?(this._x=c*p*m+d*g*f,this._y=d*g*m-c*p*f,this._z=d*p*f+c*g*m,this._w=d*p*m-c*g*f):'YXZ'===n?(this._x=c*p*m+d*g*f,this._y=d*g*m-c*p*f,this._z=d*p*f-c*g*m,this._w=d*p*m+c*g*f):'ZXY'===n?(this._x=c*p*m-d*g*f,this._y=d*g*m+c*p*f,this._z=d*p*f+c*g*m,this._w=d*p*m-c*g*f):'ZYX'===n?(this._x=c*p*m-d*g*f,this._y=d*g*m+c*p*f,this._z=d*p*f-c*g*m,this._w=d*p*m+c*g*f):'YZX'===n?(this._x=c*p*m+d*g*f,this._y=d*g*m+c*p*f,this._z=d*p*f-c*g*m,this._w=d*p*m-c*g*f):'XZY'===n&&(this._x=c*p*m-d*g*f,this._y=d*g*m-c*p*f,this._z=d*p*f+c*g*m,this._w=d*p*m+c*g*f),!1!==t&&this._onChangeCallback(),this},setFromAxisAngle:function(e,t){var a=t/2,r=u(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=l(a),this._onChangeCallback(),this},setFromRotationMatrix:function(e){var t=e.elements,a=t[0],r=t[4],i=t[8],n=t[1],o=t[5],d=t[9],l=t[2],u=t[6],m=t[10],c=a+o+m,g;return 0<c?(g=.5/p(c+1),this._w=.25/g,this._x=(u-d)*g,this._y=(i-l)*g,this._z=(n-r)*g):a>o&&a>m?(g=2*p(1+a-o-m),this._w=(u-d)/g,this._x=.25*g,this._y=(r+n)/g,this._z=(i+l)/g):o>m?(g=2*p(1+o-a-m),this._w=(i-l)/g,this._x=(r+n)/g,this._y=.25*g,this._z=(d+u)/g):(g=2*p(1+m-a-o),this._w=(n-r)/g,this._x=(i+l)/g,this._y=(d+u)/g,this._z=.25*g),this._onChangeCallback(),this},setFromUnitVectors:function(e,t){var a=e.dot(t)+1;return a<1e-6?(a=0,g(e.x)>g(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()},angleTo:function(e){return 2*d(g(n.a.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,a){var r=this.angleTo(e);if(0===r)return this;var i=T(1,a/r);return this.slerp(e,i),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return p(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this},multiply:function(e,t){return void 0===t?this.multiplyQuaternions(this,e):(console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'),this.multiplyQuaternions(e,t))},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){var a=e._x,r=e._y,i=e._z,n=e._w,o=t._x,s=t._y,d=t._z,l=t._w;return this._x=a*l+n*o+r*d-i*s,this._y=r*l+n*s+i*o-a*d,this._z=i*l+n*d+a*s-r*o,this._w=n*l-a*o-r*s-i*d,this._onChangeCallback(),this},slerp:function(e,a){if(0===a)return this;if(1===a)return this.copy(e);var t=this._x,r=this._y,n=this._z,d=this._w,l=d*e._w+t*e._x+r*e._y+n*e._z;if(0>l?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),1<=l)return this._w=d,this._x=t,this._y=r,this._z=n,this;var m=1-l*l;if(m<=i){var c=1-a;return this._w=c*d+a*this._w,this._x=c*t+a*this._x,this._y=c*r+a*this._y,this._z=c*n+a*this._z,this.normalize(),this._onChangeCallback(),this}var s=p(m),g=o(s,l),f=u((1-a)*g)/s,h=u(a*g)/s;return this._w=d*f+this._w*h,this._x=t*f+this._x*h,this._y=r*f+this._y*h,this._z=n*f+this._z*h,this._onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return void 0===t&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}})},function(e,t,a){'use strict';function r(e,t){this.center=e===void 0?new n.a:e,this.radius=t===void 0?0:t}a.d(t,'a',function(){return r});var i=a(39),n=a(0),o=new i.a;Object.assign(r.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(e,t){var a=this.center;void 0===t?o.setFromPoints(e).getCenter(a):a.copy(t);for(var r=0,n=0,i=e.length;n<i;n++)r=_(r,a.distanceToSquared(e[n]));return this.radius=p(r),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},empty:function(){return 0>=this.radius},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return g(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){var a=this.center.distanceToSquared(e);return void 0===t&&(console.warn('THREE.Sphere: .clampPoint() target is now required'),t=new n.a),t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return void 0===e&&(console.warn('THREE.Sphere: .getBoundingBox() target is now required'),e=new i.a),e.set(this.center,this.center),e.expandByScalar(this.radius),e},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}})},function(e,t){'use strict';function a(e){var t={};for(var a in e)for(var r in t[a]={},e[a]){var i=e[a][r];t[a][r]=i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture)?i.clone():Array.isArray(i)?i.slice():i}return t}function r(e){for(var t={},r=0,i;r<e.length;r++)for(var n in i=a(e[r]),i)t[n]=i[n];return t}t.a=a,t.b=r},function(e,t,a){'use strict';function r(){Object.defineProperty(this,'id',{value:s++}),this.uuid=o.a.generateUUID(),this.name='',this.type='Material',this.fog=!0,this.blending=n._8,this.side=n.E,this.flatShading=!1,this.vertexTangents=!1,this.vertexColors=n._6,this.opacity=1,this.transparent=!1,this.blendSrc=n._54,this.blendDst=n._14,this.blendEquation=n.b,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=n.M,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n.g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=n.K,this.stencilZFail=n.K,this.stencilZPass=n.K,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}a.d(t,'a',function(){return r});var i=a(9),n=a(1),o=a(4),s=0;r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isMaterial:!0,onBeforeCompile:function(){},setValues:function(e){if(void 0!==e)for(var t in e){var a=e[t];if(void 0===a){console.warn('THREE.Material: \''+t+'\' parameter is undefined.');continue}if('shading'==t){console.warn('THREE.'+this.type+': .shading has been removed. Use the boolean .flatShading instead.'),this.flatShading=a===n.C;continue}var r=this[t];if(void 0===r){console.warn('THREE.'+this.type+': \''+t+'\' is not a property of this material.');continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[t]=a}},toJSON:function(e){function t(e){var t=[];for(var a in e){var r=e[a];delete r.metadata,t.push(r)}return t}var a=void 0===e||'string'==typeof e;a&&(e={textures:{},images:{}});var r={metadata:{version:4.5,type:'Material',generator:'Material.toJSON'}};if(r.uuid=this.uuid,r.type=this.type,''!==this.name&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),void 0!==this.roughness&&(r.roughness=this.roughness),void 0!==this.metalness&&(r.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(r.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),void 0!==this.shininess&&(r.shininess=this.shininess),void 0!==this.clearcoat&&(r.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,r.reflectivity=this.reflectivity,r.refractionRatio=this.refractionRatio,void 0!==this.combine&&(r.combine=this.combine),void 0!==this.envMapIntensity&&(r.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.size&&(r.size=this.size),void 0!==this.sizeAttenuation&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==n._8&&(r.blending=this.blending),!0===this.flatShading&&(r.flatShading=this.flatShading),this.side!==n.E&&(r.side=this.side),this.vertexColors!==n._6&&(r.vertexColors=this.vertexColors),1>this.opacity&&(r.opacity=this.opacity),!0===this.transparent&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation&&0!==this.rotation&&(r.rotation=this.rotation),!0===this.polygonOffset&&(r.polygonOffset=!0),0!==this.polygonOffsetFactor&&(r.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&1!==this.linewidth&&(r.linewidth=this.linewidth),void 0!==this.dashSize&&(r.dashSize=this.dashSize),void 0!==this.gapSize&&(r.gapSize=this.gapSize),void 0!==this.scale&&(r.scale=this.scale),!0===this.dithering&&(r.dithering=!0),0<this.alphaTest&&(r.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(r.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(r.wireframe=this.wireframe),1<this.wireframeLinewidth&&(r.wireframeLinewidth=this.wireframeLinewidth),'round'!==this.wireframeLinecap&&(r.wireframeLinecap=this.wireframeLinecap),'round'!==this.wireframeLinejoin&&(r.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(r.morphTargets=!0),!0===this.morphNormals&&(r.morphNormals=!0),!0===this.skinning&&(r.skinning=!0),!1===this.visible&&(r.visible=!1),!1===this.toneMapped&&(r.toneMapped=!1),'{}'!==JSON.stringify(this.userData)&&(r.userData=this.userData),a){var i=t(e.textures),o=t(e.images);0<i.length&&(r.textures=i),0<o.length&&(r.images=o)}return r},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;var t=e.clippingPlanes,a=null;if(null!==t){var r=t.length;a=Array(r);for(var n=0;n!==r;++n)a[n]=t[n].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:'dispose'})}}),Object.defineProperty(r.prototype,'needsUpdate',{set:function(e){!0===e&&this.version++}})},function(e){e.exports=function(e){return isNaN(e=+e)?0:(0<e?f:s)(e)}},function(e){e.exports=function(e){if(e==void 0)throw TypeError('Can\'t call method on  '+e);return e}},function(e){e.exports=!0},function(e,t,a){var r=a(16),i=a(3).document,n=r(i)&&r(i.createElement);e.exports=function(e){return n?i.createElement(e):{}}},function(e,t,a){var r=a(95),i=a(32);e.exports=function(e){return r(i(e))}},function(e,t,a){var r=a(50)('keys'),i=a(51);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,a){var r=a(24).f,i=a(25),n=a(5)('toStringTag');e.exports=function(e,t,a){e&&!i(e=a?e:e.prototype,n)&&r(e,n,{configurable:!0,value:t})}},function(e,t,a){'use strict';function r(e){var t,a;this.promise=new e(function(e,r){if(t!==void 0||a!==void 0)throw TypeError('Bad Promise constructor');t=e,a=r}),this.resolve=i(t),this.reject=i(a)}var i=a(23);e.exports.f=function(e){return new r(e)}},function(e,t,a){'use strict';function r(e,t){this.min=e===void 0?new n.a(+Infinity,+Infinity,+Infinity):e,this.max=t===void 0?new n.a(-Infinity,-Infinity,-Infinity):t}function i(e,t,a,n,o){var s,i;for(s=0,i=e.length-3;s<=i;s+=3){v.fromArray(e,s);var d=o.x*g(v.x)+o.y*g(v.y)+o.z*g(v.z),r=t.dot(v),l=a.dot(v),p=n.dot(v);if(_(-_(r,l,p),T(r,l,p))>d)return!1}return!0}a.d(t,'a',function(){return r});var n=a(0),o=[new n.a,new n.a,new n.a,new n.a,new n.a,new n.a,new n.a,new n.a],s=new n.a,d=new r,l=new n.a,p=new n.a,u=new n.a,m=new n.a,c=new n.a,f=new n.a,h=new n.a,x=new n.a,y=new n.a,v=new n.a;Object.assign(r.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){for(var t=+Infinity,a=+Infinity,r=+Infinity,n=-Infinity,o=-Infinity,s=-Infinity,d=0,i=e.length;d<i;d+=3){var l=e[d],p=e[d+1],u=e[d+2];l<t&&(t=l),p<a&&(a=p),u<r&&(r=u),l>n&&(n=l),p>o&&(o=p),u>s&&(s=u)}return this.min.set(t,a,r),this.max.set(n,o,s),this},setFromBufferAttribute:function(e){for(var t=+Infinity,a=+Infinity,r=+Infinity,n=-Infinity,o=-Infinity,s=-Infinity,d=0,i=e.count;d<i;d++){var l=e.getX(d),p=e.getY(d),u=e.getZ(d);l<t&&(t=l),p<a&&(a=p),u<r&&(r=u),l>n&&(n=l),p>o&&(o=p),u>s&&(s=u)}return this.min.set(t,a,r),this.max.set(n,o,s),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){var a=s.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this},setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=+Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return void 0===e&&(console.warn('THREE.Box3: .getCenter() target is now required'),e=new n.a),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return void 0===e&&(console.warn('THREE.Box3: .getSize() target is now required'),e=new n.a),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(e){e.updateWorldMatrix(!1,!1);var t=e.geometry;t!==void 0&&(null===t.boundingBox&&t.computeBoundingBox(),d.copy(t.boundingBox),d.applyMatrix4(e.matrixWorld),this.expandByPoint(d.min),this.expandByPoint(d.max));for(var a=e.children,r=0,i=a.length;r<i;r++)this.expandByObject(a[r]);return this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return void 0===t&&(console.warn('THREE.Box3: .getParameter() target is now required'),t=new n.a),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(e){return this.clampPoint(e.center,s),s.distanceToSquared(e.center)<=e.radius*e.radius},intersectsPlane:function(e){var t,a;return 0<e.normal.x?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),0<e.normal.y?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),0<e.normal.z?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant},intersectsTriangle:function(e){if(this.isEmpty())return!1;this.getCenter(h),x.subVectors(this.max,h),l.subVectors(e.a,h),p.subVectors(e.b,h),u.subVectors(e.c,h),m.subVectors(p,l),c.subVectors(u,p),f.subVectors(l,u);var t=[0,-m.z,m.y,0,-c.z,c.y,0,-f.z,f.y,m.z,0,-m.x,c.z,0,-c.x,f.z,0,-f.x,-m.y,m.x,0,-c.y,c.x,0,-f.y,f.x,0];return!!i(t,l,p,u,x)&&(t=[1,0,0,0,1,0,0,0,1],!!i(t,l,p,u,x))&&(y.crossVectors(m,c),t=[y.x,y.y,y.z],i(t,l,p,u,x))},clampPoint:function(e,t){return void 0===t&&(console.warn('THREE.Box3: .clampPoint() target is now required'),t=new n.a),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){var t=s.copy(e).clamp(this.min,this.max);return t.sub(e).length()},getBoundingSphere:function(e){return void 0===e&&console.error('THREE.Box3: .getBoundingSphere() target is now required'),this.getCenter(e.center),e.radius=.5*this.getSize(s).length(),e},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(e){return this.isEmpty()?this:(o[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),o[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),o[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),o[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),o[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),o[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),o[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),o[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(o),this)},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}})},function(e,t,a){'use strict';function r(e,t){this.normal=e===void 0?new n.a(1,0,0):e,this.constant=t===void 0?0:t}a.d(t,'a',function(){return r});var i=a(7),n=a(0),o=new n.a,s=new n.a,d=new i.a;Object.assign(r.prototype,{isPlane:!0,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,a,r){return this.normal.set(e,t,a),this.constant=r,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(e,t,a){var r=o.subVectors(a,t).cross(s.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return void 0===t&&(console.warn('THREE.Plane: .projectPoint() target is now required'),t=new n.a),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(e,a){a===void 0&&(console.warn('THREE.Plane: .intersectLine() target is now required'),a=new n.a);var r=e.delta(o),i=this.normal.dot(r);if(0===i)return 0===this.distanceToPoint(e.start)?a.copy(e.start):void 0;var s=-(e.start.dot(this.normal)+this.constant)/i;return 0>s||1<s?void 0:a.copy(r).multiplyScalar(s).add(e.start)},intersectsLine:function(e){var t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return 0>t&&0<a||0>a&&0<t},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return void 0===e&&(console.warn('THREE.Plane: .coplanarPoint() target is now required'),e=new n.a),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(e,t){var a=t||d.getNormalMatrix(e),r=this.coplanarPoint(o).applyMatrix4(e),i=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(i),this},translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}})},function(e,t,a){'use strict';function r(){function e(i,n){!1===a||(r(i,n),t.requestAnimationFrame(e))}var t=null,a=!1,r=null;return{start:function(){!0==a||null===r||(t.requestAnimationFrame(e),a=!0)},stop:function(){a=!1},setAnimationLoop:function(e){r=e},setContext:function(e){t=e}}}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e){i.a.call(this),this.type='ShaderMaterial',this.defines={},this.uniforms={},this.vertexShader=o.a,this.fragmentShader=s.a,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error('THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'),this.setValues(e))}a.d(t,'a',function(){return r});var i=a(30),n=a(29),o=a(251),s=a(252);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isShaderMaterial=!0,r.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Object(n.a)(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=e.extensions,this},r.prototype.toJSON=function(e){var t=i.a.prototype.toJSON.call(this,e);for(var a in t.uniforms={},this.uniforms){var r=this.uniforms[a],n=r.value;t.uniforms[a]=n&&n.isTexture?{type:'t',value:n.toJSON(e).uuid}:n&&n.isColor?{type:'c',value:n.getHex()}:n&&n.isVector2?{type:'v2',value:n.toArray()}:n&&n.isVector3?{type:'v3',value:n.toArray()}:n&&n.isVector4?{type:'v4',value:n.toArray()}:n&&n.isMatrix3?{type:'m3',value:n.toArray()}:n&&n.isMatrix4?{type:'m4',value:n.toArray()}:{value:n}}0<Object.keys(this.defines).length&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;var o={};for(var s in this.extensions)!0===this.extensions[s]&&(o[s]=!0);return 0<Object.keys(o).length&&(t.extensions=o),t}},function(e,t,a){'use strict';function r(e,t){u.a.call(this),this.type='Mesh',this.geometry=e===void 0?new x.a:e,this.material=t===void 0?new c.a({color:16777215*Math.random()}):t,this.drawMode=h._63,this.updateMorphTargets()}function n(e,t,a,r,i,n,o,s){var d;if(d=t.side===h.h?r.intersectTriangle(o,n,i,!0,s):r.intersectTriangle(i,n,o,t.side!==h.w,s),null===d)return null;b.copy(s),b.applyMatrix4(e.matrixWorld);var l=a.ray.origin.distanceTo(b);return l<a.near||l>a.far?null:{distance:l,point:b.clone(),object:e}}function o(e,t,r,o,d,l,p,u,f,h,a,_){M.fromBufferAttribute(d,h),S.fromBufferAttribute(d,a),w.fromBufferAttribute(d,_);var c=e.morphTargetInfluences;if(t.morphTargets&&l&&c){L.set(0,0,0),F.set(0,0,0),C.set(0,0,0);for(var x=0,i=l.length;x<i;x++){var y=c[x],v=l[x];0===y||(A.fromBufferAttribute(v,h),R.fromBufferAttribute(v,a),P.fromBufferAttribute(v,_),p?(L.addScaledVector(A,y),F.addScaledVector(R,y),C.addScaledVector(P,y)):(L.addScaledVector(A.sub(M),y),F.addScaledVector(R.sub(S),y),C.addScaledVector(P.sub(w),y)))}M.add(L),S.add(F),w.add(C)}var b=n(e,t,r,o,M,S,w,O);if(b){u&&(U.fromBufferAttribute(u,h),N.fromBufferAttribute(u,a),I.fromBufferAttribute(u,_),b.uv=m.a.getUV(O,M,S,w,U,N,I,new s.a)),f&&(U.fromBufferAttribute(f,h),N.fromBufferAttribute(f,a),I.fromBufferAttribute(f,_),b.uv2=m.a.getUV(O,M,S,w,U,N,I,new s.a));var T=new g.a(h,a,_);m.a.getNormal(M,S,w,T.normal),b.face=T}return b}a.d(t,'a',function(){return r});var i=a(0),s=a(2),d=a(28),l=a(253),p=a(6),u=a(8),m=a(254),g=a(64),h=a(1),c=a(255),x=a(19),y=new p.a,v=new l.a,E=new d.a,M=new i.a,S=new i.a,w=new i.a,A=new i.a,R=new i.a,P=new i.a,L=new i.a,F=new i.a,C=new i.a,U=new s.a,N=new s.a,I=new s.a,O=new i.a,b=new i.a;r.prototype=Object.assign(Object.create(u.a.prototype),{constructor:r,isMesh:!0,setDrawMode:function(e){this.drawMode=e},copy:function(e){return u.a.prototype.copy.call(this,e),this.drawMode=e.drawMode,void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this},updateMorphTargets:function(){var e=this.geometry,t,a,r;if(e.isBufferGeometry){var i=e.morphAttributes,n=Object.keys(i);if(0<n.length){var o=i[n[0]];if(o!==void 0)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},(t=0,a=o.length);t<a;t++)r=o[t].name||t+'',this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=t}}else{var s=e.morphTargets;s!==void 0&&0<s.length&&console.error('THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.')}},raycast:function(e,t){var r=this.geometry,d=this.material,l=this.matrixWorld;if(void 0!==d&&(null===r.boundingSphere&&r.computeBoundingSphere(),E.copy(r.boundingSphere),E.applyMatrix4(l),!1!==e.ray.intersectsSphere(E))&&(y.getInverse(l),v.copy(e.ray).applyMatrix4(y),null===r.boundingBox||!1!==v.intersectsBox(r.boundingBox))){if(this.drawMode!==h._63)return void console.warn('THREE.Mesh: TriangleStripDrawMode and TriangleFanDrawMode are not supported by .raycast().');var p;if(r.isBufferGeometry){var u=r.index,g=r.attributes.position,x=r.morphAttributes.position,M=r.morphTargetsRelative,S=r.attributes.uv,w=r.attributes.uv2,A=r.groups,R=r.drawRange,P,a,b,c,i,L,F,C,D,z,B;if(null!==u){if(Array.isArray(d))for(c=0,L=A.length;c<L;c++)for(C=A[c],D=d[C.materialIndex],z=_(C.start,R.start),B=T(C.start+C.count,R.start+R.count),(i=z,F=B);i<F;i+=3)P=u.getX(i),a=u.getX(i+1),b=u.getX(i+2),p=o(this,D,e,v,g,x,M,S,w,P,a,b),p&&(p.faceIndex=f(i/3),p.face.materialIndex=C.materialIndex,t.push(p));else for(z=_(0,R.start),B=T(u.count,R.start+R.count),(c=z,L=B);c<L;c+=3)P=u.getX(c),a=u.getX(c+1),b=u.getX(c+2),p=o(this,d,e,v,g,x,M,S,w,P,a,b),p&&(p.faceIndex=f(c/3),t.push(p));}else if(void 0!==g)if(Array.isArray(d))for(c=0,L=A.length;c<L;c++)for(C=A[c],D=d[C.materialIndex],z=_(C.start,R.start),B=T(C.start+C.count,R.start+R.count),(i=z,F=B);i<F;i+=3)P=i,a=i+1,b=i+2,p=o(this,D,e,v,g,x,M,S,w,P,a,b),p&&(p.faceIndex=f(i/3),p.face.materialIndex=C.materialIndex,t.push(p));else for(z=_(0,R.start),B=T(g.count,R.start+R.count),(c=z,L=B);c<L;c+=3)P=c,a=c+1,b=c+2,p=o(this,d,e,v,g,x,M,S,w,P,a,b),p&&(p.faceIndex=f(c/3),t.push(p))}else if(r.isGeometry){var V=Array.isArray(d),k=r.vertices,G=r.faces,W=r.faceVertexUvs[0],H,X,j,q;0<W.length&&(q=W);for(var Y=0,Z=G.length;Y<Z;Y++){var J=G[Y],Q=V?d[J.materialIndex]:d;if(void 0!==Q&&(H=k[J.a],X=k[J.b],j=k[J.c],p=n(this,Q,e,v,H,X,j,O),p)){if(q&&q[Y]){var K=q[Y];U.copy(K[0]),N.copy(K[1]),I.copy(K[2]),p.uv=m.a.getUV(O,H,X,j,U,N,I,new s.a)}p.face=J,p.faceIndex=Y,t.push(p)}}}}},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}})},function(e,a,r){'use strict';function i(e,t,a,r){o.a.call(this),this.type='PerspectiveCamera',this.fov=e===void 0?50:e,this.zoom=1,this.near=a===void 0?.1:a,this.far=r===void 0?2e3:r,this.focus=10,this.aspect=t===void 0?1:t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}var n=Math.atan;r.d(a,'a',function(){return i});var o=r(71),s=r(8),d=r(4);i.prototype=Object.assign(Object.create(o.a.prototype),{constructor:i,isPerspectiveCamera:!0,copy:function(e,t){return o.a.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){var t=.5*this.getFilmHeight()/e;this.fov=2*d.a.RAD2DEG*n(t),this.updateProjectionMatrix()},getFocalLength:function(){var e=t(.5*d.a.DEG2RAD*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return 2*d.a.RAD2DEG*n(t(.5*d.a.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*T(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/_(this.aspect,1)},setViewOffset:function(e,t,a,r,i,n){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=i,this.view.height=n,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,a=e*t(.5*d.a.DEG2RAD*this.fov)/this.zoom,r=2*a,i=this.aspect*r,n=-.5*i,o=this.view;if(null!==this.view&&this.view.enabled){var s=o.fullWidth,l=o.fullHeight;n+=o.offsetX*i/s,a-=o.offsetY*r/l,i*=o.width/s,r*=o.height/l}var p=this.filmOffset;0!==p&&(n+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,a,a-r,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var t=s.a.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}})},function(e,t,r){'use strict';var i=r(82),o=r.n(i),s=r(118),d=r(121),l=r(287),u=r(288),m=r(1),c=r(42),g=r(66),f=r(43),h=r(10),_=r(2),x=r(292),y=r(294),v=r(295);t.a={name:'vue-displacement-slideshow',props:{images:{required:!0,type:Array,default:function(){return[]}},displacement:{required:!0,type:String},intensity:{required:!1,type:Number,default:1},speedIn:{required:!1,type:Number,default:1},speedOut:{required:!1,type:Number,default:1},ease:{required:!1,type:String,default:'expo.out'},preserveAspectRatio:{required:!1,type:Boolean,default:!0},isInteractive:{required:!1,type:Boolean,default:!1},interactionFactor:{required:!1,type:Number,default:1},interactionDuration:{required:!1,type:Number,default:1},angle:{required:!1,type:Number,default:n/4},startAsTransparent:{required:!1,type:Boolean,default:!1}},data:function(){return{currentImage:0,scene:new s.a,renderer:new d.a({antialias:!1,alpha:!0}),mat:null,textures:[],disp:null,nextImage:0,imagesLoaded:[],isAnimating:!1,currentTransition:null,mousePosition:{},previousMousePosition:null,rafID:null,mouseSpeed:{value:0},loaded:!1}},computed:{slider:function(){return this.$refs.slider},camera:function(){var e=new l.a(this.slider.offsetWidth/-2,this.slider.offsetWidth/2,this.slider.offsetHeight/2,this.slider.offsetHeight/-2,1,1e3);return e.position.z=1,e}},methods:{initScene:function(){this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(16777215,0),this.renderer.setSize(this.slider.offsetWidth,this.slider.offsetHeight),this.$refs.slider.appendChild(this.renderer.domElement)},render:function(){this.renderer.render(this.scene,this.camera)},transitionIn:function(){this.currentTransition=x.a.to(this.mat.uniforms.dispFactor,{duration:this.speedIn,value:1,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd,paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedIn)},transitionOut:function(){this.currentTransition=x.a.to(this.mat.uniforms.dispFactor,{duration:this.speedOut,value:0,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd,paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedOut)},setImageResolution:function(e){x.a.to(this.mat.uniforms.imageResolution.value,{duration:e,x:this.textures[this.nextImage].image.naturalWidth,y:this.textures[this.nextImage].image.naturalHeight,ease:this.ease})},onAnimationEnd:function(){this.isAnimating=!1,this.$emit('animationEnd'),this.render()},assignTexturesToMaterial:function(){this.mat.uniforms.texture1.value=this.textures[this.currentImage],this.mat.uniforms.texture2.value=this.textures[this.nextImage]},resetValuesAfterAnimation:function(){this.currentImage=this.nextImage,this.mat.uniforms.dispFactor.value=0},previous:function(){return this.isAnimating?void 0:null===this.mat?void(this.currentImage=Object(v.a)(this.currentImage-1,this.textures.length)):void(this.isAnimating=!0,this.mat.uniforms.dispFactor.value=1,this.nextImage=Object(v.a)(this.currentImage-1,this.textures.length),this.mat.uniforms.texture1.value=this.textures[this.nextImage],this.mat.uniforms.texture2.value=this.textures[this.currentImage],this.mat.uniforms.texture1Alpha.value=this.textures[this.nextImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.currentImage].alpha,this.transitionOut(),this.currentImage=this.nextImage)},next:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null;return this.isAnimating?void 0:null===this.mat?void(this.currentImage=Object(v.a)(this.currentImage+1,this.textures.length)):void(this.isAnimating=!0,this.nextImage=null===e?Object(v.a)(this.currentImage+1,this.textures.length):e,this.assignTexturesToMaterial(),this.mat.uniforms.texture1Alpha.value=this.textures[this.currentImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.nextImage].alpha,this.transitionIn(),this.resetValuesAfterAnimation())},loadTextures:function(){var e=this;this.images.forEach(function(t,a){var r=e.insertImage(t,a);e.imagesLoaded.push(r)}),this.startAsTransparent&&this.insertTransparentTexture(0);var t=new u.a;t.crossOrigin='',this.disp=t.load(this.displacement,this.render),this.disp.wrapS=m._50,this.disp.wrapT=m._50},initShaderMaterial:function(){var e={width:this.preserveAspectRatio?this.slider.offsetWidth:this.textures[this.currentImage].image.naturalWidth,height:this.preserveAspectRatio?this.slider.offsetHeight:this.textures[this.currentImage].image.naturalHeight};this.mat=new c.a({uniforms:{intensity1:{type:'f',value:this.intensity},intensity2:{type:'f',value:this.intensity},dispFactor:{type:'f',value:0},angle1:{type:'f',value:this.angle},angle2:{type:'f',value:-n+this.angle},texture1:{type:'t',value:this.textures[this.currentImage]},texture2:{type:'t',value:this.textures[this.nextImage]},texture1Alpha:{type:'f',value:this.textures[this.currentImage].alpha},texture2Alpha:{type:'f',value:this.textures[this.nextImage].alpha},disp:{type:'t',value:this.disp},resolution:{type:'v2',value:new _.a(e.width,e.height)},imageResolution:{type:'v2',value:new _.a(this.textures[this.currentImage].image.naturalWidth,this.textures[this.currentImage].image.naturalHeight)},sliderResolution:{type:'v2',value:new _.a(this.slider.offsetWidth,this.slider.offsetHeight)},u_rgbPosition:{type:'v2',value:new _.a(window.innerWidth/2,window.innerHeight/2)},u_rgbVelocity:{type:'v2',value:new _.a(0,0)}},vertexShader:y.b,fragmentShader:y.a,transparent:!0,opacity:1});var t=new g.a(this.slider.offsetWidth,this.slider.offsetHeight,1),a=new f.a(t,this.mat);this.scene.add(a)},init:function(){var e=this;this.initScene(),this.loadTextures(),o.a.all(this.imagesLoaded).then(function(){e.initShaderMaterial(),e.loaded=!0,e.$emit('loaded'),e.render()})},onResize:function(){var e={width:this.preserveAspectRatio?this.slider.offsetWidth:this.textures[this.currentImage].image.naturalWidth,height:this.preserveAspectRatio?this.slider.offsetHeight:this.textures[this.currentImage].image.naturalHeight};this.renderer.setSize(this.slider.offsetWidth,this.slider.offsetHeight),this.camera.aspect=this.slider.innerWidth/this.slider.innerHeight,this.camera.updateProjectionMatrix(),this.mat.uniforms.resolution.value.set(e.width,e.height),this.mat.uniforms.sliderResolution.value.set(this.slider.offsetWidth,this.slider.offsetHeight),this.render()},play:function(){this.currentTransition&&this.currentTransition.play()},pause:function(){this.currentTransition&&this.currentTransition.pause()},insertImage:function(e){var t=this,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.textures.length,r=new u.a;return r.crossOrigin='',new o.a(function(i){var n=r.load(e,function(){t.render(),i()});n.magFilter=m.O,n.minFilter=m.O,n.alpha=1,t.textures.splice(a,0,n),a<=t.currentImage&&t.loaded&&t.currentImage++})},insertTransparentTexture:function(e){var t=new h.a;t.image={naturalWidth:this.slider.offsetWidth,naturalHeight:this.slider.offsetHeight},t.alpha=0,this.textures.splice(e,0,t)},removeImage:function(e){e!==this.currentImage&&(this.textures.splice(e,1),e<this.currentImage&&this.currentImage--)},goTo:function(e){0<=e&&e<this.textures.length&&this.next(e)},animate:function(){this.rafID=requestAnimationFrame(this.animate),this.render(),this.getMouseSpeed()},onMouseMove:function(t){if(this.isInteractive&&this.mat){var e=this.$refs.slider.getBoundingClientRect();this.mousePosition={x:t.clientX-e.left,y:t.clientY-e.top},this.mat.uniforms.u_rgbPosition.value=new _.a(this.mousePosition.x,this.mousePosition.y)}},getMouseSpeed:function(){if(this.mat){var e=p(a(this.previousMousePosition.x-this.mousePosition.x,2)+a(this.previousMousePosition.y-this.mousePosition.y,2))||0;x.a.to(this.mouseSpeed,{duration:this.interactionDuration,value:e}),this.mat.uniforms.u_rgbVelocity.value=new _.a(this.mouseSpeed.value*this.interactionFactor,this.mouseSpeed.value*this.interactionFactor)}this.previousMousePosition=this.mousePosition}},mounted:function(){this.init(),window.addEventListener('resize',this.onResize),window.addEventListener('mousemove',this.onMouseMove),this.animate()},beforeDestroy:function(){cancelAnimationFrame(this.rafID),window.removeEventListener('resize',this.onResize),window.removeEventListener('mousemove',this.onMouseMove)}}},function(e,t,a){'use strict';var r=a(33),i=a(21),n=a(89),o=a(15),s=a(18),d=a(90),l=a(37),p=a(98),u=a(5)('iterator'),m=!([].keys&&'next'in[].keys()),c='keys',g='values',f=function(){return this};e.exports=function(e,t,a,h,_,x,y){d(a,t,h);var v=function(e){return!m&&e in M?M[e]:e===c?function(){return new a(this,e)}:e===g?function(){return new a(this,e)}:function(){return new a(this,e)}},b=t+' Iterator',T=_==g,E=!1,M=e.prototype,S=M[u]||M['@@iterator']||_&&M[_],w=S||v(_),A=_?T?v('entries'):w:void 0,R='Array'==t?M.entries||S:S,P,L,F;if(R&&(F=p(R.call(new e)),F!==Object.prototype&&F.next&&(l(F,b,!0),!r&&'function'!=typeof F[u]&&o(F,u,f))),T&&S&&S.name!==g&&(E=!0,w=function(){return S.call(this)}),(!r||y)&&(m||E||!M[u])&&o(M,u,w),s[t]=w,s[b]=f,_)if(P={values:T?w:v(g),keys:x?w:v(c),entries:A},y)for(L in P)L in M||n(M,L,P[L]);else i(i.P+i.F*(m||E),t,P);return P}},function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,a){var r=a(31);e.exports=function(e){return 0<e?T(r(e),9007199254740991):0}},function(e,t,a){var r=a(12),i=a(3),n='__core-js_shared__',o=i[n]||(i[n]={});(e.exports=function(e,t){return o[e]||(o[e]=t===void 0?{}:t)})('versions',[]).push({version:r.version,mode:a(33)?'pure':'global',copyright:'\xA9 2018 Denis Pushkarev (zloirock.ru)'})},function(e){var t=0,a=Math.random();e.exports=function(e){return'Symbol('.concat(e===void 0?'':e,')_',(++t+a).toString(36))}},function(e){e.exports=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf']},function(e,t,a){var r=a(3).document;e.exports=r&&r.documentElement},function(e,t,a){var r=a(26),i=a(5)('toStringTag'),n='Arguments'==r(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(t){}};e.exports=function(e){var t,a,s;return e===void 0?'Undefined':null===e?'Null':'string'==typeof(a=o(t=Object(e),i))?a:n?r(t):'Object'==(s=r(t))&&'function'==typeof t.callee?'Arguments':s}},function(e,t,a){var r=a(13),i=a(23),n=a(5)('species');e.exports=function(e,t){var a=r(e).constructor,o;return a===void 0||(o=r(a)[n])==void 0?t:i(o)}},function(e,t,a){var r=a(22),i=a(110),n=a(53),o=a(34),s=a(3),d=s.process,l=s.setImmediate,p=s.clearImmediate,u=s.MessageChannel,m=s.Dispatch,c=0,g={},f='onreadystatechange',h=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},_=function(e){h.call(e.data)},x,y,v;l&&p||(l=function(e){for(var t=[],a=1;arguments.length>a;)t.push(arguments[a++]);return g[++c]=function(){i('function'==typeof e?e:Function(e),t)},x(c),c},p=function(e){delete g[e]},'process'==a(26)(d)?x=function(e){d.nextTick(r(h,e,1))}:m&&m.now?x=function(e){m.now(r(h,e,1))}:u?(y=new u,v=y.port2,y.port1.onmessage=_,x=r(v.postMessage,v,1)):s.addEventListener&&'function'==typeof postMessage&&!s.importScripts?(x=function(e){s.postMessage(e+'','*')},s.addEventListener('message',_,!1)):f in o('script')?x=function(e){n.appendChild(o('script'))[f]=function(){n.removeChild(this),h.call(e)}}:x=function(e){setTimeout(r(h,e,1),0)}),e.exports={set:l,clear:p}},function(e){e.exports=function(e){try{return{e:!1,v:e()}}catch(t){return{e:!0,v:t}}}},function(e,t,a){var r=a(13),i=a(16),n=a(38);e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var a=n.f(e),o=a.resolve;return o(t),a.promise}},function(e,t,a){'use strict';function r(e,t,a,r,i,n){this.planes=[e===void 0?new o.a:e,t===void 0?new o.a:t,a===void 0?new o.a:a,r===void 0?new o.a:r,i===void 0?new o.a:i,n===void 0?new o.a:n]}a.d(t,'a',function(){return r});var i=a(0),n=a(28),o=a(40),s=new n.a,d=new i.a;Object.assign(r.prototype,{set:function(e,t,a,r,i,n){var o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(a),o[3].copy(r),o[4].copy(i),o[5].copy(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){for(var t=this.planes,a=0;6>a;a++)t[a].copy(e.planes[a]);return this},setFromMatrix:function(e){var t=this.planes,a=e.elements,r=a[0],i=a[1],n=a[2],o=a[3],s=a[4],d=a[5],l=a[6],p=a[7],u=a[8],m=a[9],c=a[10],g=a[11],f=a[12],h=a[13],_=a[14],x=a[15];return t[0].setComponents(o-r,p-s,g-u,x-f).normalize(),t[1].setComponents(o+r,p+s,g+u,x+f).normalize(),t[2].setComponents(o+i,p+d,g+m,x+h).normalize(),t[3].setComponents(o-i,p-d,g-m,x-h).normalize(),t[4].setComponents(o-n,p-l,g-c,x-_).normalize(),t[5].setComponents(o+n,p+l,g+c,x+_).normalize(),this},intersectsObject:function(e){var t=e.geometry;return null===t.boundingSphere&&t.computeBoundingSphere(),s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(s)},intersectsSprite:function(e){return s.center.set(0,0,0),s.radius=.7071067811865476,s.applyMatrix4(e.matrixWorld),this.intersectsSphere(s)},intersectsSphere:function(e){for(var t=this.planes,a=e.center,r=-e.radius,n=0,i;6>n;n++)if(i=t[n].distanceToPoint(a),i<r)return!1;return!0},intersectsBox:function(e){for(var t=this.planes,a=0,r;6>a;a++)if(r=t[a],d.x=0<r.normal.x?e.max.x:e.min.x,d.y=0<r.normal.y?e.max.y:e.min.y,d.z=0<r.normal.z?e.max.z:e.min.z,0>r.distanceToPoint(d))return!1;return!0},containsPoint:function(e){for(var t=this.planes,a=0;6>a;a++)if(0>t[a].distanceToPoint(e))return!1;return!0}})},function(e,t,a){'use strict';a.d(t,'a',function(){return p});var r=a(61),i=a(29),n=a(2),o=a(0),s=a(62),d=a(11),l=a(7),p={basic:{uniforms:Object(i.b)([s.a.common,s.a.specularmap,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.fog]),vertexShader:r.a.meshbasic_vert,fragmentShader:r.a.meshbasic_frag},lambert:{uniforms:Object(i.b)([s.a.common,s.a.specularmap,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.emissivemap,s.a.fog,s.a.lights,{emissive:{value:new d.a(0)}}]),vertexShader:r.a.meshlambert_vert,fragmentShader:r.a.meshlambert_frag},phong:{uniforms:Object(i.b)([s.a.common,s.a.specularmap,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.emissivemap,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,s.a.gradientmap,s.a.fog,s.a.lights,{emissive:{value:new d.a(0)},specular:{value:new d.a(1118481)},shininess:{value:30}}]),vertexShader:r.a.meshphong_vert,fragmentShader:r.a.meshphong_frag},standard:{uniforms:Object(i.b)([s.a.common,s.a.envmap,s.a.aomap,s.a.lightmap,s.a.emissivemap,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,s.a.roughnessmap,s.a.metalnessmap,s.a.fog,s.a.lights,{emissive:{value:new d.a(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:r.a.meshphysical_vert,fragmentShader:r.a.meshphysical_frag},matcap:{uniforms:Object(i.b)([s.a.common,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,s.a.fog,{matcap:{value:null}}]),vertexShader:r.a.meshmatcap_vert,fragmentShader:r.a.meshmatcap_frag},points:{uniforms:Object(i.b)([s.a.points,s.a.fog]),vertexShader:r.a.points_vert,fragmentShader:r.a.points_frag},dashed:{uniforms:Object(i.b)([s.a.common,s.a.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:r.a.linedashed_vert,fragmentShader:r.a.linedashed_frag},depth:{uniforms:Object(i.b)([s.a.common,s.a.displacementmap]),vertexShader:r.a.depth_vert,fragmentShader:r.a.depth_frag},normal:{uniforms:Object(i.b)([s.a.common,s.a.bumpmap,s.a.normalmap,s.a.displacementmap,{opacity:{value:1}}]),vertexShader:r.a.normal_vert,fragmentShader:r.a.normal_frag},sprite:{uniforms:Object(i.b)([s.a.sprite,s.a.fog]),vertexShader:r.a.sprite_vert,fragmentShader:r.a.sprite_frag},background:{uniforms:{uvTransform:{value:new l.a},t2D:{value:null}},vertexShader:r.a.background_vert,fragmentShader:r.a.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:r.a.cube_vert,fragmentShader:r.a.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:r.a.equirect_vert,fragmentShader:r.a.equirect_frag},distanceRGBA:{uniforms:Object(i.b)([s.a.common,s.a.displacementmap,{referencePosition:{value:new o.a},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:r.a.distanceRGBA_vert,fragmentShader:r.a.distanceRGBA_frag},shadow:{uniforms:Object(i.b)([s.a.lights,s.a.fog,{color:{value:new d.a(0)},opacity:{value:1}}]),vertexShader:r.a.shadow_vert,fragmentShader:r.a.shadow_frag}};p.physical={uniforms:Object(i.b)([p.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new d.a(0)},clearcoatNormalScale:{value:new n.a(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:r.a.meshphysical_vert,fragmentShader:r.a.meshphysical_frag}},function(e,t,a){'use strict';a.d(t,'a',function(){return xt});var r=a(124),i=a(125),n=a(126),o=a(127),s=a(128),d=a(129),l=a(130),p=a(131),u=a(132),m=a(133),c=a(134),g=a(135),f=a(136),h=a(137),_=a(138),x=a(139),y=a(140),v=a(141),b=a(142),T=a(143),E=a(144),M=a(145),S=a(146),w=a(147),A=a(148),R=a(149),P=a(150),L=a(151),F=a(152),C=a(153),U=a(154),N=a(155),I=a(156),O=a(157),D=a(158),z=a(159),B=a(160),V=a(161),k=a(162),G=a(163),W=a(164),H=a(165),X=a(166),j=a(167),q=a(168),Y=a(169),Z=a(170),J=a(171),Q=a(172),K=a(173),$=a(174),ee=a(175),te=a(176),ae=a(177),re=a(178),ie=a(179),ne=a(180),oe=a(181),se=a(182),de=a(183),le=a(184),pe=a(185),ue=a(186),me=a(187),ce=a(188),ge=a(189),fe=a(190),he=a(191),_e=a(192),xe=a(193),ye=a(194),ve=a(195),be=a(196),Te=a(197),Ee=a(198),Me=a(199),Se=a(200),we=a(201),Ae=a(202),Re=a(203),Pe=a(204),Le=a(205),Fe=a(206),Ce=a(207),Ue=a(208),Ne=a(209),Ie=a(210),Oe=a(211),De=a(212),ze=a(213),Be=a(214),Ve=a(215),ke=a(216),Ge=a(217),We=a(218),He=a(219),Xe=a(220),je=a(221),qe=a(222),Ye=a(223),Ze=a(224),Je=a(225),Qe=a(226),Ke=a(227),$e=a(228),et=a(229),tt=a(230),at=a(231),rt=a(232),it=a(233),nt=a(234),ot=a(235),st=a(236),dt=a(237),lt=a(238),pt=a(239),ut=a(240),mt=a(241),ct=a(242),gt=a(243),ft=a(244),ht=a(245),_t=a(246),xt={alphamap_fragment:r.a,alphamap_pars_fragment:i.a,alphatest_fragment:n.a,aomap_fragment:o.a,aomap_pars_fragment:s.a,begin_vertex:d.a,beginnormal_vertex:l.a,bsdfs:p.a,bumpmap_pars_fragment:u.a,clipping_planes_fragment:m.a,clipping_planes_pars_fragment:c.a,clipping_planes_pars_vertex:g.a,clipping_planes_vertex:f.a,color_fragment:h.a,color_pars_fragment:_.a,color_pars_vertex:x.a,color_vertex:y.a,common:v.a,cube_uv_reflection_fragment:b.a,defaultnormal_vertex:T.a,displacementmap_pars_vertex:E.a,displacementmap_vertex:M.a,emissivemap_fragment:S.a,emissivemap_pars_fragment:w.a,encodings_fragment:A.a,encodings_pars_fragment:R.a,envmap_fragment:P.a,envmap_common_pars_fragment:L.a,envmap_pars_fragment:F.a,envmap_pars_vertex:C.a,envmap_physical_pars_fragment:W.a,envmap_vertex:U.a,fog_vertex:N.a,fog_pars_vertex:I.a,fog_fragment:O.a,fog_pars_fragment:D.a,gradientmap_pars_fragment:z.a,lightmap_fragment:B.a,lightmap_pars_fragment:V.a,lights_lambert_vertex:k.a,lights_pars_begin:G.a,lights_phong_fragment:H.a,lights_phong_pars_fragment:X.a,lights_physical_fragment:j.a,lights_physical_pars_fragment:q.a,lights_fragment_begin:Y.a,lights_fragment_maps:Z.a,lights_fragment_end:J.a,logdepthbuf_fragment:Q.a,logdepthbuf_pars_fragment:K.a,logdepthbuf_pars_vertex:$.a,logdepthbuf_vertex:ee.a,map_fragment:te.a,map_pars_fragment:ae.a,map_particle_fragment:re.a,map_particle_pars_fragment:ie.a,metalnessmap_fragment:ne.a,metalnessmap_pars_fragment:oe.a,morphnormal_vertex:se.a,morphtarget_pars_vertex:de.a,morphtarget_vertex:le.a,normal_fragment_begin:pe.a,normal_fragment_maps:ue.a,normalmap_pars_fragment:me.a,clearcoat_normal_fragment_begin:ce.a,clearcoat_normal_fragment_maps:ge.a,clearcoat_normalmap_pars_fragment:fe.a,packing:he.a,premultiplied_alpha_fragment:_e.a,project_vertex:xe.a,dithering_fragment:ye.a,dithering_pars_fragment:ve.a,roughnessmap_fragment:be.a,roughnessmap_pars_fragment:Te.a,shadowmap_pars_fragment:Ee.a,shadowmap_pars_vertex:Me.a,shadowmap_vertex:Se.a,shadowmask_pars_fragment:we.a,skinbase_vertex:Ae.a,skinning_pars_vertex:Re.a,skinning_vertex:Pe.a,skinnormal_vertex:Le.a,specularmap_fragment:Fe.a,specularmap_pars_fragment:Ce.a,tonemapping_fragment:Ue.a,tonemapping_pars_fragment:Ne.a,uv_pars_fragment:Ie.a,uv_pars_vertex:Oe.a,uv_vertex:De.a,uv2_pars_fragment:ze.a,uv2_pars_vertex:Be.a,uv2_vertex:Ve.a,worldpos_vertex:ke.a,background_frag:Ge.a,background_vert:We.a,cube_frag:He.a,cube_vert:Xe.a,depth_frag:je.a,depth_vert:qe.a,distanceRGBA_frag:Ye.a,distanceRGBA_vert:Ze.a,equirect_frag:Je.a,equirect_vert:Qe.a,linedashed_frag:Ke.a,linedashed_vert:$e.a,meshbasic_frag:et.a,meshbasic_vert:tt.a,meshlambert_frag:at.a,meshlambert_vert:rt.a,meshmatcap_frag:it.a,meshmatcap_vert:nt.a,meshphong_frag:ot.a,meshphong_vert:st.a,meshphysical_frag:dt.a,meshphysical_vert:lt.a,normal_frag:pt.a,normal_vert:ut.a,points_frag:mt.a,points_vert:ct.a,shadow_frag:gt.a,shadow_vert:ft.a,sprite_frag:ht.a,sprite_vert:_t.a}},function(e,t,a){'use strict';a.d(t,'a',function(){return o});var r=a(11),i=a(2),n=a(7),o={common:{diffuse:{value:new r.a(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new n.a},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new i.a(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new r.a(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new r.a(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new n.a}},sprite:{diffuse:{value:new r.a(15658734)},opacity:{value:1},center:{value:new i.a(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new n.a}}}},function(e,t,a){'use strict';function r(){Object.defineProperty(this,'id',{value:h+=2}),this.uuid=f.a.generateUUID(),this.name='',this.type='Geometry',this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}a.d(t,'a',function(){return r});var i=a(9),n=a(64),o=a(7),s=a(28),d=a(39),p=a(0),l=a(6),u=a(2),c=a(11),g=a(8),f=a(4),h=0,_=new l.a,x=new g.a,y=new p.a;r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isGeometry:!0,applyMatrix:function(e){for(var t=new o.a().getNormalMatrix(e),a=0,r=this.vertices.length,i;a<r;a++)i=this.vertices[a],i.applyMatrix4(e);for(var a=0,r=this.faces.length,n;a<r;a++){n=this.faces[a],n.normal.applyMatrix3(t).normalize();for(var s=0,d=n.vertexNormals.length;s<d;s++)n.vertexNormals[s].applyMatrix3(t).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return _.makeRotationX(e),this.applyMatrix(_),this},rotateY:function(e){return _.makeRotationY(e),this.applyMatrix(_),this},rotateZ:function(e){return _.makeRotationZ(e),this.applyMatrix(_),this},translate:function(e,t,a){return _.makeTranslation(e,t,a),this.applyMatrix(_),this},scale:function(e,t,a){return _.makeScale(e,t,a),this.applyMatrix(_),this},lookAt:function(e){return x.lookAt(e),x.updateMatrix(),this.applyMatrix(x.matrix),this},fromBufferGeometry:function(e){function t(e,t,a,i){var o=void 0===l?[]:[r.colors[e].clone(),r.colors[t].clone(),r.colors[a].clone()],s=void 0===d?[]:[new p.a().fromArray(d,3*e),new p.a().fromArray(d,3*t),new p.a().fromArray(d,3*a)],c=new n.a(e,t,a,s,o,i);r.faces.push(c),void 0!==m&&r.faceVertexUvs[0].push([new u.a().fromArray(m,2*e),new u.a().fromArray(m,2*t),new u.a().fromArray(m,2*a)]),void 0!==g&&r.faceVertexUvs[1].push([new u.a().fromArray(g,2*e),new u.a().fromArray(g,2*t),new u.a().fromArray(g,2*a)])}var r=this,a=null===e.index?void 0:e.index.array,o=e.attributes;if(void 0===o.position)return console.error('THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.'),this;var s=o.position.array,d=void 0===o.normal?void 0:o.normal.array,l=void 0===o.color?void 0:o.color.array,m=void 0===o.uv?void 0:o.uv.array,g=void 0===o.uv2?void 0:o.uv2.array;void 0!==g&&(this.faceVertexUvs[1]=[]);for(var f=0;f<s.length;f+=3)r.vertices.push(new p.a().fromArray(s,f)),void 0!==l&&r.colors.push(new c.a().fromArray(l,f));var i=e.groups;if(0<i.length)for(var f=0;f<i.length;f++)for(var h=i[f],_=h.start,x=h.count,y=_;y<_+x;y+=3)void 0===a?t(y,y+1,y+2,h.materialIndex):t(a[y],a[y+1],a[y+2],h.materialIndex);else if(void 0!==a)for(var f=0;f<a.length;f+=3)t(a[f],a[f+1],a[f+2]);else for(var f=0;f<s.length/3;f+=3)t(f,f+1,f+2);return this.computeFaceNormals(),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(y).negate(),this.translate(y.x,y.y,y.z),this},normalize:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,t=this.boundingSphere.radius,a=0===t?1:1/t,r=new l.a;return r.set(a,0,0,-a*e.x,0,a,0,-a*e.y,0,0,a,-a*e.z,0,0,0,1),this.applyMatrix(r),this},computeFaceNormals:function(){for(var e=new p.a,t=new p.a,a=0,r=this.faces.length;a<r;a++){var i=this.faces[a],n=this.vertices[i.a],o=this.vertices[i.b],s=this.vertices[i.c];e.subVectors(s,o),t.subVectors(n,o),e.cross(t),e.normalize(),i.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);var t,a,r,i,n,o;for(o=Array(this.vertices.length),t=0,a=this.vertices.length;t<a;t++)o[t]=new p.a;if(e){var s=new p.a,d=new p.a,l,u,m;for(r=0,i=this.faces.length;r<i;r++)n=this.faces[r],l=this.vertices[n.a],u=this.vertices[n.b],m=this.vertices[n.c],s.subVectors(m,u),d.subVectors(l,u),s.cross(d),o[n.a].add(s),o[n.b].add(s),o[n.c].add(s)}else for(this.computeFaceNormals(),r=0,i=this.faces.length;r<i;r++)n=this.faces[r],o[n.a].add(n.normal),o[n.b].add(n.normal),o[n.c].add(n.normal);for(t=0,a=this.vertices.length;t<a;t++)o[t].normalize();for(r=0,i=this.faces.length;r<i;r++){n=this.faces[r];var c=n.vertexNormals;3===c.length?(c[0].copy(o[n.a]),c[1].copy(o[n.b]),c[2].copy(o[n.c])):(c[0]=o[n.a].clone(),c[1]=o[n.b].clone(),c[2]=o[n.c].clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var e,t,a;for(this.computeFaceNormals(),e=0,t=this.faces.length;e<t;e++){a=this.faces[e];var r=a.vertexNormals;3===r.length?(r[0].copy(a.normal),r[1].copy(a.normal),r[2].copy(a.normal)):(r[0]=a.normal.clone(),r[1]=a.normal.clone(),r[2]=a.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var e,t,a,i,n;for(a=0,i=this.faces.length;a<i;a++)for(n=this.faces[a],n.__originalFaceNormal?n.__originalFaceNormal.copy(n.normal):n.__originalFaceNormal=n.normal.clone(),n.__originalVertexNormals||(n.__originalVertexNormals=[]),(e=0,t=n.vertexNormals.length);e<t;e++)n.__originalVertexNormals[e]?n.__originalVertexNormals[e].copy(n.vertexNormals[e]):n.__originalVertexNormals[e]=n.vertexNormals[e].clone();var o=new r;for(o.faces=this.faces,e=0,t=this.morphTargets.length;e<t;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];var s=this.morphNormals[e].faceNormals,d=this.morphNormals[e].vertexNormals,l,u;for(a=0,i=this.faces.length;a<i;a++)l=new p.a,u={a:new p.a,b:new p.a,c:new p.a},s.push(l),d.push(u)}var m=this.morphNormals[e];o.vertices=this.morphTargets[e].vertices,o.computeFaceNormals(),o.computeVertexNormals();var l,u;for(a=0,i=this.faces.length;a<i;a++)n=this.faces[a],l=m.faceNormals[a],u=m.vertexNormals[a],l.copy(n.normal),u.a.copy(n.vertexNormals[0]),u.b.copy(n.vertexNormals[1]),u.c.copy(n.vertexNormals[2])}for(a=0,i=this.faces.length;a<i;a++)n=this.faces[a],n.normal=n.__originalFaceNormal,n.vertexNormals=n.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new d.a),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new s.a),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,a){if(!(e&&e.isGeometry))return void console.error('THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.',e);var r=this.vertices.length,s=this.vertices,d=e.vertices,l=this.faces,p=e.faces,u=this.colors,m=e.colors,c;a===void 0&&(a=0),t!==void 0&&(c=new o.a().getNormalMatrix(t));for(var g=0,i=d.length;g<i;g++){var f=d[g],h=f.clone();t!==void 0&&h.applyMatrix4(t),s.push(h)}for(var g=0,i=m.length;g<i;g++)u.push(m[g].clone());for(g=0,i=p.length;g<i;g++){var _=p[g],x=_.vertexNormals,y=_.vertexColors,v,b,T;v=new n.a(_.a+r,_.b+r,_.c+r),v.normal.copy(_.normal),c!==void 0&&v.normal.applyMatrix3(c).normalize();for(var E=0,M=x.length;E<M;E++)b=x[E].clone(),void 0!==c&&b.applyMatrix3(c).normalize(),v.vertexNormals.push(b);v.color.copy(_.color);for(var E=0,M=y.length;E<M;E++)T=y[E],v.vertexColors.push(T.clone());v.materialIndex=_.materialIndex+a,l.push(v)}for(var g=0,i=e.faceVertexUvs.length,S;g<i;g++){S=e.faceVertexUvs[g],this.faceVertexUvs[g]===void 0&&(this.faceVertexUvs[g]=[]);for(var E=0,M=S.length;E<M;E++){for(var w=S[E],A=[],R=0,P=w.length;R<P;R++)A.push(w[R].clone());this.faceVertexUvs[g].push(A)}}},mergeMesh:function(e){return e&&e.isMesh?void(e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)):void console.error('THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.',e)},mergeVertices:function(){var e={},t=[],a=[],r=10000,o,s,d,i,l,p,u,c;for(d=0,i=this.vertices.length;d<i;d++)o=this.vertices[d],s=m(o.x*r)+'_'+m(o.y*r)+'_'+m(o.z*r),void 0===e[s]?(e[s]=d,t.push(this.vertices[d]),a[d]=t.length-1):a[d]=a[e[s]];var g=[];for(d=0,i=this.faces.length;d<i;d++){l=this.faces[d],l.a=a[l.a],l.b=a[l.b],l.c=a[l.c],p=[l.a,l.b,l.c];for(var f=0;3>f;f++)if(p[f]===p[(f+1)%3]){g.push(d);break}}for(d=g.length-1;0<=d;d--){var n=g[d];for(this.faces.splice(n,1),u=0,c=this.faceVertexUvs.length;u<c;u++)this.faceVertexUvs[u].splice(n,1)}var h=this.vertices.length-t.length;return this.vertices=t,h},setFromPoints:function(e){this.vertices=[];for(var t=0,a=e.length,r;t<a;t++)r=e[t],this.vertices.push(new p.a(r.x,r.y,r.z||0));return this},sortFacesByMaterialIndex:function(){for(var e=this.faces,t=e.length,a=0;a<t;a++)e[a]._id=a;e.sort(function(e,t){return e.materialIndex-t.materialIndex});var r=this.faceVertexUvs[0],i=this.faceVertexUvs[1],n,o;r&&r.length===t&&(n=[]),i&&i.length===t&&(o=[]);for(var a=0,s;a<t;a++)s=e[a]._id,n&&n.push(r[s]),o&&o.push(i[s]);n&&(this.faceVertexUvs[0]=n),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){function e(e,t,a){return a?e|1<<t:e&~(1<<t)}function t(e){var t=e.x.toString()+e.y.toString()+e.z.toString();return void 0===m[t]?(m[t]=u.length/3,u.push(e.x,e.y,e.z),m[t]):m[t]}function a(e){var t=e.r.toString()+e.g.toString()+e.b.toString();return void 0===g[t]?(g[t]=c.length,c.push(e.getHex()),g[t]):g[t]}function r(e){var t=e.x.toString()+e.y.toString();return void 0===h[t]?(h[t]=f.length/2,f.push(e.x,e.y),h[t]):h[t]}var n={metadata:{version:4.5,type:'Geometry',generator:'Geometry.toJSON'}};if(n.uuid=this.uuid,n.type=this.type,''!==this.name&&(n.name=this.name),void 0!==this.parameters){var o=this.parameters;for(var s in o)void 0!==o[s]&&(n[s]=o[s]);return n}for(var d=[],l=0,i;l<this.vertices.length;l++)i=this.vertices[l],d.push(i.x,i.y,i.z);for(var p=[],u=[],m={},c=[],g={},f=[],h={},l=0;l<this.faces.length;l++){var _=this.faces[l],x=void 0!==this.faceVertexUvs[0][l],y=0<_.normal.length(),v=0<_.vertexNormals.length,b=1!==_.color.r||1!==_.color.g||1!==_.color.b,T=0<_.vertexColors.length,E=0;if(E=e(E,0,0),E=e(E,1,!0),E=e(E,2,!1),E=e(E,3,x),E=e(E,4,y),E=e(E,5,v),E=e(E,6,b),E=e(E,7,T),p.push(E),p.push(_.a,_.b,_.c),p.push(_.materialIndex),x){var M=this.faceVertexUvs[0][l];p.push(r(M[0]),r(M[1]),r(M[2]))}if(y&&p.push(t(_.normal)),v){var S=_.vertexNormals;p.push(t(S[0]),t(S[1]),t(S[2]))}if(b&&p.push(a(_.color)),T){var w=_.vertexColors;p.push(a(w[0]),a(w[1]),a(w[2]))}}return n.data={},n.data.vertices=d,n.data.normals=u,0<c.length&&(n.data.colors=c),0<f.length&&(n.data.uvs=[f]),n.data.faces=p,n},clone:function(){return new r().copy(this)},copy:function(e){var t,a,r,i,n,o;this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;var s=e.vertices;for(t=0,a=s.length;t<a;t++)this.vertices.push(s[t].clone());var d=e.colors;for(t=0,a=d.length;t<a;t++)this.colors.push(d[t].clone());var l=e.faces;for(t=0,a=l.length;t<a;t++)this.faces.push(l[t].clone());for(t=0,a=e.faceVertexUvs.length;t<a;t++){var p=e.faceVertexUvs[t];for(void 0===this.faceVertexUvs[t]&&(this.faceVertexUvs[t]=[]),r=0,i=p.length;r<i;r++){var u=p[r],m=[];for(n=0,o=u.length;n<o;n++){var c=u[n];m.push(c.clone())}this.faceVertexUvs[t].push(m)}}var g=e.morphTargets;for(t=0,a=g.length;t<a;t++){var f={name:g[t].name};if(void 0!==g[t].vertices)for(f.vertices=[],r=0,i=g[t].vertices.length;r<i;r++)f.vertices.push(g[t].vertices[r].clone());if(void 0!==g[t].normals)for(f.normals=[],r=0,i=g[t].normals.length;r<i;r++)f.normals.push(g[t].normals[r].clone());this.morphTargets.push(f)}var h=e.morphNormals;for(t=0,a=h.length;t<a;t++){var _={};if(void 0!==h[t].vertexNormals)for(_.vertexNormals=[],r=0,i=h[t].vertexNormals.length;r<i;r++){var x=h[t].vertexNormals[r],y={};y.a=x.a.clone(),y.b=x.b.clone(),y.c=x.c.clone(),_.vertexNormals.push(y)}if(void 0!==h[t].faceNormals)for(_.faceNormals=[],r=0,i=h[t].faceNormals.length;r<i;r++)_.faceNormals.push(h[t].faceNormals[r].clone());this.morphNormals.push(_)}var v=e.skinWeights;for(t=0,a=v.length;t<a;t++)this.skinWeights.push(v[t].clone());var b=e.skinIndices;for(t=0,a=b.length;t<a;t++)this.skinIndices.push(b[t].clone());var T=e.lineDistances;for(t=0,a=T.length;t<a;t++)this.lineDistances.push(T[t]);var E=e.boundingBox;null!==E&&(this.boundingBox=E.clone());var M=e.boundingSphere;return null!==M&&(this.boundingSphere=M.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(e,t,a){'use strict';function r(e,t,a,r,o,s){this.a=e,this.b=t,this.c=a,this.normal=r&&r.isVector3?r:new n.a,this.vertexNormals=Array.isArray(r)?r:[],this.color=o&&o.isColor?o:new i.a,this.vertexColors=Array.isArray(o)?o:[],this.materialIndex=s===void 0?0:s}a.d(t,'a',function(){return r});var i=a(11),n=a(0);Object.assign(r.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(var t=0,a=e.vertexNormals.length;t<a;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(var t=0,a=e.vertexColors.length;t<a;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}})},function(e,t,a){'use strict';function r(e){if(0===e.length)return-Infinity;for(var t=e[0],a=1,r=e.length;a<r;++a)e[a]>t&&(t=e[a]);return t}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e,t,a,r){n.a.call(this),this.type='PlaneGeometry',this.parameters={width:e,height:t,widthSegments:a,heightSegments:r},this.fromBufferGeometry(new i(e,t,a,r)),this.mergeVertices()}function i(e,t,r,i){o.a.call(this),this.type='PlaneBufferGeometry',this.parameters={width:e,height:t,widthSegments:r,heightSegments:i},e=e||1,t=t||1;var n=e/2,l=t/2,p=f(r)||1,u=f(i)||1,m=p+1,g=e/p,h=t/u,_=[],v=[],T=[],E=[],M,S;for(S=0;S<u+1;S++){var w=S*h-l;for(M=0;M<m;M++){var A=M*g-n;v.push(A,-w,0),T.push(0,0,1),E.push(M/p),E.push(1-S/u)}}for(S=0;S<u;S++)for(M=0;M<p;M++){var x=M+m*S,a=M+m*(S+1),b=M+1+m*(S+1),c=M+1+m*S;_.push(x,a,c),_.push(a,b,c)}this.setIndex(_),this.setAttribute('position',new s.b(v,3)),this.setAttribute('normal',new s.b(T,3)),this.setAttribute('uv',new s.b(E,2))}a.d(t,'a',function(){return i});var n=a(63),o=a(19),s=a(20);r.prototype=Object.create(n.a.prototype),r.prototype.constructor=r,i.prototype=Object.create(o.a.prototype),i.prototype.constructor=i},function(e,t,a){'use strict';function r(e,t,a){var o=e[0];if(0>=o||0<o)return e;var s=t*a,n=Q[s];if(void 0===n&&(n=new Float32Array(s),Q[s]=n),0!==t){o.toArray(n,0);for(var r=1,i=0;r!==t;++r)i+=a,e[r].toArray(n,i)}return n}function i(e,t){if(e.length!==t.length)return!1;for(var a=0,r=e.length;a<r;a++)if(e[a]!==t[a])return!1;return!0}function n(e,t){for(var a=0,r=t.length;a<r;a++)e[a]=t[a]}function o(e,t){var a=K[t];a===void 0&&(a=new Int32Array(t),K[t]=a);for(var r=0;r!==t;++r)a[r]=e.allocateTextureUnit();return a}function s(e,t){var a=this.cache;a[0]===t||(e.uniform1f(this.addr,t),a[0]=t)}function d(e,t){var a=this.cache;if(t.x!==void 0)(a[0]!==t.x||a[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),a[0]=t.x,a[1]=t.y);else{if(i(a,t))return;e.uniform2fv(this.addr,t),n(a,t)}}function l(e,t){var a=this.cache;if(t.x!==void 0)(a[0]!==t.x||a[1]!==t.y||a[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),a[0]=t.x,a[1]=t.y,a[2]=t.z);else if(t.r!==void 0)(a[0]!==t.r||a[1]!==t.g||a[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),a[0]=t.r,a[1]=t.g,a[2]=t.b);else{if(i(a,t))return;e.uniform3fv(this.addr,t),n(a,t)}}function p(e,t){var a=this.cache;if(t.x!==void 0)(a[0]!==t.x||a[1]!==t.y||a[2]!==t.z||a[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),a[0]=t.x,a[1]=t.y,a[2]=t.z,a[3]=t.w);else{if(i(a,t))return;e.uniform4fv(this.addr,t),n(a,t)}}function u(e,t){var a=this.cache,r=t.elements;if(r===void 0){if(i(a,t))return;e.uniformMatrix2fv(this.addr,!1,t),n(a,t)}else{if(i(a,r))return;te.set(r),e.uniformMatrix2fv(this.addr,!1,te),n(a,r)}}function m(e,t){var a=this.cache,r=t.elements;if(r===void 0){if(i(a,t))return;e.uniformMatrix3fv(this.addr,!1,t),n(a,t)}else{if(i(a,r))return;ee.set(r),e.uniformMatrix3fv(this.addr,!1,ee),n(a,r)}}function c(e,t){var a=this.cache,r=t.elements;if(r===void 0){if(i(a,t))return;e.uniformMatrix4fv(this.addr,!1,t),n(a,t)}else{if(i(a,r))return;$.set(r),e.uniformMatrix4fv(this.addr,!1,$),n(a,r)}}function g(e,t,a){var r=this.cache,i=a.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),a.safeSetTexture2D(t||q,i)}function f(e,t,a){var r=this.cache,i=a.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),a.setTexture2DArray(t||Y,i)}function h(e,t,a){var r=this.cache,i=a.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),a.setTexture3D(t||Z,i)}function _(e,t,a){var r=this.cache,i=a.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),a.safeSetTextureCube(t||J,i)}function x(e,t){var a=this.cache;a[0]===t||(e.uniform1i(this.addr,t),a[0]=t)}function y(e,t){var a=this.cache;i(a,t)||(e.uniform2iv(this.addr,t),n(a,t))}function v(e,t){var a=this.cache;i(a,t)||(e.uniform3iv(this.addr,t),n(a,t))}function b(e,t){var a=this.cache;i(a,t)||(e.uniform4iv(this.addr,t),n(a,t))}function T(e){return 5126===e?s:35664===e?d:35665===e?l:35666===e?p:35674===e?u:35675===e?m:35676===e?c:35678===e||36198===e?g:35679===e?h:35680===e?_:36289===e?f:5124===e||35670===e?x:35667===e||35671===e?y:35668===e||35672===e?v:35669===e||35673===e?b:void 0}function E(e,t){e.uniform1fv(this.addr,t)}function M(e,t){e.uniform1iv(this.addr,t)}function S(e,t){e.uniform2iv(this.addr,t)}function w(e,t){e.uniform3iv(this.addr,t)}function A(e,t){e.uniform4iv(this.addr,t)}function R(e,t){var a=r(t,this.size,2);e.uniform2fv(this.addr,a)}function P(e,t){var a=r(t,this.size,3);e.uniform3fv(this.addr,a)}function L(e,t){var a=r(t,this.size,4);e.uniform4fv(this.addr,a)}function F(e,t){var a=r(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,a)}function C(e,t){var a=r(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,a)}function U(e,t){var a=r(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,a)}function N(e,t,a){var r=t.length,n=o(a,r);e.uniform1iv(this.addr,n);for(var s=0;s!==r;++s)a.safeSetTexture2D(t[s]||q,n[s])}function I(e,t,a){var r=t.length,n=o(a,r);e.uniform1iv(this.addr,n);for(var s=0;s!==r;++s)a.safeSetTextureCube(t[s]||J,n[s])}function O(e){return 5126===e?E:35664===e?R:35665===e?P:35666===e?L:35674===e?F:35675===e?C:35676===e?U:35678===e?N:35680===e?I:5124===e||35670===e?M:35667===e||35671===e?S:35668===e||35672===e?w:35669===e||35673===e?A:void 0}function D(e,t,a){this.id=e,this.addr=a,this.cache=[],this.setValue=T(t.type)}function z(e,t,a){this.id=e,this.addr=a,this.cache=[],this.size=t.size,this.setValue=O(t.type)}function B(e){this.id=e,this.seq=[],this.map={}}function V(e,t){e.seq.push(t),e.map[t.id]=t}function k(e,t,a){var r=e.name,i=r.length;for(ae.lastIndex=0;;){var n=ae.exec(r),o=ae.lastIndex,s=n[1],d=']'===n[2],l=n[3];if(d&&(s|=0),void 0===l||'['===l&&o+2===i){V(a,void 0===l?new D(s,e,t):new z(s,e,t));break}else{var p=a.map,u=p[s];void 0===u&&(u=new B(s),V(a,u)),a=u}}}function G(e,t){this.seq=[],this.map={};for(var a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),r=0;r<a;++r){var i=e.getActiveUniform(t,r),n=e.getUniformLocation(t,i.name);k(i,n,this)}}a.d(t,'a',function(){return G});var W=a(267),H=a(10),X=a(268),j=a(269),q=new H.a,Y=new X.a,Z=new j.a,J=new W.a,Q=[],K=[],$=new Float32Array(16),ee=new Float32Array(9),te=new Float32Array(4);z.prototype.updateCache=function(e){var t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),n(t,e)},B.prototype.setValue=function(e,t,a){for(var r=this.seq,o=0,i=r.length,n;o!==i;++o)n=r[o],n.setValue(e,t[n.id],a)};var ae=/([\w\d_]+)(\])?(\[|\.)?/g;G.prototype.setValue=function(e,t,a,r){var i=this.map[t];i!==void 0&&i.setValue(e,a,r)},G.prototype.setOptional=function(e,t,a){var r=t[a];r!==void 0&&this.setValue(e,a,r)},G.upload=function(e,t,a,r){for(var o=0,i=t.length;o!==i;++o){var n=t[o],s=a[n.id];!1!==s.needsUpdate&&n.setValue(e,s.value,r)}},G.seqWithValue=function(e,t){for(var a=[],r=0,i=e.length,n;r!==i;++r)n=e[r],n.id in t&&a.push(n);return a}},function(e,t,a){'use strict';function r(e,t,a){this.width=e,this.height=t,this.scissor=new s.a(0,0,e,t),this.scissorTest=!1,this.viewport=new s.a(0,0,e,t),a=a||{},this.texture=new n.a(void 0,void 0,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=a.generateMipmaps!==void 0&&a.generateMipmaps,this.texture.minFilter=a.minFilter===void 0?o.O:a.minFilter,this.depthBuffer=!(a.depthBuffer!==void 0)||a.depthBuffer,this.stencilBuffer=!(a.stencilBuffer!==void 0)||a.stencilBuffer,this.depthTexture=a.depthTexture===void 0?null:a.depthTexture}a.d(t,'a',function(){return r});var i=a(9),n=a(10),o=a(1),s=a(14);r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(e,t,a){'use strict';function r(){i.a.call(this),this.type='Group'}a.d(t,'a',function(){return r});var i=a(8);r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isGroup:!0})},function(e,t,a){'use strict';function r(e){i.a.call(this),this.cameras=e||[]}a.d(t,'a',function(){return r});var i=a(44);r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isArrayCamera:!0})},function(e,t,a){'use strict';function r(){n.a.call(this),this.type='Camera',this.matrixWorldInverse=new i.a,this.projectionMatrix=new i.a,this.projectionMatrixInverse=new i.a}a.d(t,'a',function(){return r});var i=a(6),n=a(8),o=a(0);r.prototype=Object.assign(Object.create(n.a.prototype),{constructor:r,isCamera:!0,copy:function(e,t){return n.a.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn('THREE.Camera: .getWorldDirection() target is now required'),t=new o.a),this.updateMatrixWorld(!0);var a=this.matrixWorld.elements;return t.set(-a[8],-a[9],-a[10]).normalize()},updateMatrixWorld:function(e){n.a.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}})},function(e,t,a){'use strict';function r(e,t,a){n.setFromMatrixPosition(t.matrixWorld),o.setFromMatrixPosition(a.matrixWorld);var r=n.distanceTo(o),i=t.projectionMatrix.elements,s=a.projectionMatrix.elements,d=i[14]/(i[10]-1),l=i[14]/(i[10]+1),p=(i[9]+1)/i[5],u=(i[9]-1)/i[5],m=(i[8]-1)/i[0],c=(s[8]+1)/s[0],g=r/(-m+c),f=g*-m;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(f),e.translateZ(g),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.getInverse(e.matrixWorld);var h=d+g,_=l+g;e.projectionMatrix.makePerspective(d*m-f,d*c+(r-f),p*l/_*h,u*l/_*h,h,_)}a.d(t,'a',function(){return r});var i=a(0),n=new i.a,o=new i.a},function(e,t,a){'use strict';function r(e){this.manager=e===void 0?i.a:e,this.crossOrigin='anonymous',this.path='',this.resourcePath=''}a.d(t,'a',function(){return r});var i=a(291);Object.assign(r.prototype,{load:function(){},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this}})},function(t,r,i){'use strict';function o(e){if(void 0===e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return e}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.0.4
 * https://greensock.com
 *
 * @license Copyright 2008-2019, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/i.d(r,'a',function(){return Mt}),i.d(r,'b',function(){return Qt}),i.d(r,'v',function(){return aa}),i.d(r,'u',function(){return Ne}),i.d(r,'h',function(){return ee}),i.d(r,'m',function(){return C}),i.d(r,'j',function(){return b}),i.d(r,'k',function(){return S}),i.d(r,'p',function(){return Xt}),i.d(r,'o',function(){return I}),i.d(r,'f',function(){return te}),i.d(r,'s',function(){return Jt}),i.d(r,'d',function(){return rt}),i.d(r,'q',function(){return He}),i.d(r,'c',function(){return Lt}),i.d(r,'n',function(){return q}),i.d(r,'t',function(){return it}),i.d(r,'e',function(){return d}),i.d(r,'r',function(){return ae}),i.d(r,'l',function(){return V}),i.d(r,'i',function(){return Gt}),i.d(r,'g',function(){return $});var d={autoSleep:120,force3D:'auto',nullTargetWarn:1,units:{lineHeight:''}},c={duration:.5,overwrite:!1,delay:0},f=1e8,h=1/f,x=2*n,y=0,v=p,b=function(e){return'string'==typeof e},E=function(e){return'function'==typeof e},M=function(e){return'number'==typeof e},S=function(e){return'undefined'==typeof e},w=function(e){return'object'==typeof e},A=function(e){return!1!==e},R=function(){return'undefined'!=typeof window},P=function(e){return E(e)||b(e)},L=Array.isArray,F=/(?:-?\.?\d|\.)+/gi,C=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,U=/[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,N=/\(([^()]+)\)/i,I=/[\+-]=-?[\.\d]+/,O=/[#\-+\.]*\b[a-z\d-=+%.]+/gi,D={},z={},B=function(e){return(z=ue(e,D))&&aa},V=function(e,t){return console.warn('Invalid property',e,'set to',t,'Missing plugin? gsap.registerPlugin()')},k=function(e,t){return!t&&console.warn(e)},G=function(e,t){return e&&(D[e]=t)&&z&&(z[e]=t)||D},W=function(){return 0},H={},X=[],j={},q={},Y={},Z=30,J=[],Q='onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',K=function(e){var t=e[0],a,r;if(w(t)||E(t)||(e=[e]),!(a=(t._gsap||{}).harness)){for(r=J.length;r--&&!J[r].targetTest(t););a=J[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Mt(e[r],a)))||e.splice(r,1);return e},$=function(e){return e._gsap||K(ze(e))[0]._gsap},ee=function(e,t){var a=e[t];return E(a)?e[t]():S(a)&&e.getAttribute(t)||a},te=function(e,t){return(e=e.split(',')).forEach(t)||e},ae=function(e){return m(1e4*e)/1e4},re=function(e,t){for(var a=t.length,r=0;0>e.indexOf(t[r])&&++r<a;);return r<a},ie=function(e,t,a){var r=M(e[1]),n=(r?2:1)+(2>t?0:1),o=e[n],s;return r&&(o.duration=e[1]),1===t?(o.runBackwards=1,o.immediateRender=A(o.immediateRender)):2==t&&(s=e[n-1],o.startAt=s,o.immediateRender=A(o.immediateRender)),o.parent=a,o},ne=function(){var e=X.length,t=X.slice(0),a,r;for(j={},X.length=0,a=0;a<e;a++)r=t[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},oe=function(e,t,a,r){X.length&&ne(),e.render(t,a,r),X.length&&ne()},se=function(e){var t=parseFloat(e);return t||0===t?t:e},de=function(e){return e},le=function(e,t){for(var a in t)a in e||(e[a]=t[a]);return e},pe=function(e,t){for(var a in t)a in e||'duration'===a||'ease'===a||(e[a]=t[a])},ue=function(e,t){for(var a in t)e[a]=t[a];return e},me=function e(t,a){for(var r in a)t[r]=w(a[r])?e(t[r]||(t[r]={}),a[r]):a[r];return t},ce=function(e,t){var a={},r;for(r in e)r in t||(a[r]=e[r]);return a},ge=function(e){var t=e.parent||_t,a=e.keyframes?pe:le;if(A(e.inherit))for(;t;)a(e,t.vars.defaults),t=t.parent;return e},fe=function(e,t){for(var a=e.length,r=a===t.length;r&&a--&&e[a]===t[a];);return 0>a},he=function(e,a,r,i,n){void 0===r&&(r='_first'),void 0===i&&(i='_last');var o=e[i],s;if(n)for(s=a[n];o&&o[n]>s;)o=o._prev;return o?(a._next=o._next,o._next=a):(a._next=e[r],e[r]=a),a._next?a._next._prev=a:e[i]=a,a._prev=o,a.parent=e,a},_e=function(e,t,a,r){void 0===a&&(a='_first'),void 0===r&&(r='_last');var i=t._prev,n=t._next;i?i._next=n:e[a]===t&&(e[a]=n),n?n._prev=i:e[r]===t&&(e[r]=i),t._dp=e,t._next=t._prev=t.parent=null},xe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ye=function(e){for(var t=e;t;)t._dirty=1,t=t.parent;return e},ve=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},be=function e(t){return!t||t._ts&&e(t.parent)},Te=function(e){return e._repeat?Ee(e._tTime,e=e.duration()+e._rDelay)*e:0},Ee=function(e,t){return(e/=t)&&~~e===e?~~e-1:~~e},Me=function(e,t){return 0<t._ts?(e-t._start)*t._ts:(t._dirty?t.totalDuration():t._tDur)+(e-t._start)*t._ts},Se=function(e,t,a){if(t.parent&&xe(t),t._start=a+t._delay,t._end=t._start+(t.totalDuration()/t._ts||0),he(e,t,'_first','_last',e._sort?'_start':0),e._recent=t,t._time||!t._dur&&t._initted){var r=(e.rawTime()-t._start)*t._ts;(!t._dur||Ue(0,t.totalDuration(),r)-t._tTime>h)&&t.render(r,!0)}if(ye(e),e._dp&&e._time>=e._dur&&e._ts&&e._dur<e.duration())for(var i=e;i._dp;)i.totalTime(i._tTime,!0),i=i._dp;return e},we=function(e,t,a,r){return Ft(e,t),e._initted?!a&&e._pt&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)?(X.push(e),e._lazy=[t,r],1):void 0:1},Ae=function(e,t,a,r){var i=0>e._zTime?0:1,n=0>t?0:1,o=e._rDelay,s=0,d,l,p;if((o&&e._repeat&&(s=Ue(0,e._tDur,t),l=Ee(s,o),p=Ee(e._tTime,o),l!==p&&(i=1-n,e.vars.repeatRefresh&&e._initted&&e.invalidate())),e._initted||!we(e,t,r,a))&&(n!=i||r||e._zTime===h||!t&&e._zTime)){for(e._zTime=t||(a?h:0),e.ratio=n,e._from&&(n=1-n),e._time=0,e._tTime=s,a||qe(e,'onStart'),d=e._pt;d;)d.r(n,d.d),d=d._next;!n&&e._startAt&&!e._onUpdate&&e._start&&e._startAt.render(t,!0,r),e._onUpdate&&!a&&qe(e,'onUpdate'),s&&e._repeat&&!a&&e.parent&&qe(e,'onRepeat'),(t>=e._tDur||0>t)&&e.ratio===n&&(e.ratio&&xe(e,1),!a&&(qe(e,e.ratio?'onComplete':'onReverseComplete',!0),e._prom&&e._prom()))}},Re=function(e,t,a){var r;if(a>t)for(r=e._first;r&&r._start<=a;){if(!r._dur&&'isPause'===r.data&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=a;){if(!r._dur&&'isPause'===r.data&&r._start<t)return r;r=r._prev}},Pe=function(e){if(e instanceof wt)return ye(e);var t=e._repeat;return e._tDur=t?0>t?1e20:ae(e._dur*(t+1)+e._rDelay*t):e._dur,ye(e.parent),e},Le={_start:0,endTime:W},Fe=function e(t,a){var r=t.labels,n=t._recent||Le,o=t.duration()>=f?n.endTime(!1):t._dur,s,i;return b(a)&&(isNaN(a)||a in r)?(s=a.charAt(0),'<'===s||'>'===s)?('<'===s?n._start:n.endTime(0<=n._repeat))+(parseFloat(a.substr(1))||0):(s=a.indexOf('='),0>s)?(a in r||(r[a]=o),r[a]):(i=+(a.charAt(s-1)+a.substr(s+1)),1<s?e(t,a.substr(0,s-1))+i:o+i):null==a?o:+a},Ce=function(e,t){return e||0===e?t(e):t},Ue=function(e,t,a){return a<e?e:a>t?t:a},Ne=function(e){return(e+'').substr((parseFloat(e)+'').length)},Ie=[].slice,Oe=function(e){return e&&w(e)&&'length'in e&&e.length-1 in e&&w(e[0])&&!e.nodeType&&e!==xt},De=function(e,t,a){return void 0===a&&(a=[]),e.forEach(function(e){var r;return b(e)&&!t||Oe(e)?(r=a).push.apply(r,ze(e)):a.push(e)})||a},ze=function(e,t){return b(e)&&!t&&(yt||!nt())?Ie.call(vt.querySelectorAll(e),0):L(e)?De(e,t):Oe(e)?Ie.call(e,0):e?[e]:[]},Be=function(e){if(E(e))return e;var t=w(e)?e:{each:e},r=mt(t.ease),i=t.from||0,n=parseFloat(t.base)||0,o={},a=0<i&&1>i,s=isNaN(i)||a,p=t.axis,u=i,m=i;return b(i)?u=m={center:.5,edges:.5,end:1}[i]||0:!a&&s&&(u=i[0],m=i[1]),function(e,c,h){var a=(h||t).length,l=o[a],b,E,M,x,y,d,S,w,A;if(!l){if(A='auto'===t.grid?0:(t.grid||[1,f])[1],!A){for(S=-f;S<(S=h[A++].getBoundingClientRect().left)&&A<a;);A--}for(l=o[a]=[],b=s?T(A,a)*u-.5:i%A,E=s?a*m/A-.5:0|i/A,S=0,w=f,d=0;d<a;d++)M=d%A-b,x=E-(0|d/A),l[d]=y=p?g('y'===p?x:M):v(M*M+x*x),y>S&&(S=y),y<w&&(w=y);l.max=S-w,l.min=w,l.v=a=(parseFloat(t.amount)||parseFloat(t.each)*(A>a?a-1:p?'y'===p?a/A:A:_(A,a/A))||0)*('edges'===i?-1:1),l.b=0>a?n-a:n,l.u=Ne(t.amount||t.each)||0,r=r&&0>a?ut(r):r}return a=(l[e]-l.min)/l.max||0,ae(l.b+(r?r(a):a)*l.v)+l.u}},Ve=function(e){var t=1>e?a(10,(e+'').length-2):1;return function(a){return~~(m(parseFloat(a)/e)*e*t)/t+(M(a)?0:Ne(a))}},ke=function(e,t){var a=L(e),r,n;return!a&&w(e)&&(r=a=e.radius||f,e=ze(e.values),(n=!M(e[0]))&&(r*=r)),Ce(t,a?function(t){for(var a=parseFloat(n?t.x:t),o=parseFloat(n?t.y:0),s=f,d=0,l=e.length,i,p;l--;)n?(i=e[l].x-a,p=e[l].y-o,i=i*i+p*p):i=g(e[l]-a),i<s&&(s=i,d=l);return d=!r||s<=r?e[d]:t,n||d===t||M(t)?d:d+Ne(t)}:Ve(e))},Ge=function(e,t,r,i){return Ce(L(e)?!t:!0===r?!!(r=0):!i,function(){return L(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=1>r?a(10,(r+'').length-2):1)&&~~(m((e+Math.random()*(t-e))/r)*r*i)/i})},We=function(e,t,a){return Ce(a,function(a){return e[~~t(a)]})},He=function(e){for(var t=0,a='',r,i,n,o;~(r=e.indexOf('random(',t));)n=e.indexOf(')',r),o='['===e.charAt(r+7),i=e.substr(r+7,n-r-7).match(o?O:F),a+=e.substr(t,r-t)+Ge(o?i:+i[0],+i[1],+i[2]||1e-5),t=n+1;return a+e.substr(t,e.length-t)},Xe=function(e,t,a,r,i){return Ce(i,function(i){return a+(i-e)/(t-e)*(r-a)})},je=function(e,t,a){var r=e.labels,i=f,n,o,s;for(n in r)o=r[n]-t,0>o==!!a&&o&&i>(o=g(o))&&(s=n,i=o);return s},qe=function(e,t,a){var r=e.vars,i=r[t],n,o;if(i)return n=r[t+'Params'],o=r.callbackScope||e,a&&X.length&&ne(),n?i.apply(o,n):i.call(o)},Ye=function(e){return xe(e),1>e.progress()&&qe(e,'onInterrupt'),e},Ze=function(e){e=!e.name&&e['default']||e;var t=e.name,a=E(e),r=t&&!a&&e.init?function(){this._props=[]}:e,i={init:W,render:jt,add:Rt,kill:Yt,modifier:qt,rawVars:0},n={targetTest:0,get:0,getSetter:Gt,aliases:{},register:0};if(nt(),e!==r){if(q[t])return;le(r,le(ce(e,i),n)),ue(r.prototype,ue(i,ce(e,n))),q[r.prop=t]=r,e.targetTest&&(J.push(r),H[t]=1),t=('css'===t?'CSS':t.charAt(0).toUpperCase()+t.substr(1))+'Plugin'}G(t,r),e.register&&e.register(aa,r,Qt)},Je=255,Qe={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},Ke=function(e,t,a){return e=0>e?e+1:1<e?e-1:e,0|(1>6*e?t+6*((a-t)*e):.5>e?a:2>3*e?t+6*((a-t)*(2/3-e)):t)*Je+.5},$e=function(e,t){var i=e?M(e)?[e>>16,e>>8&Je,e&Je]:0:Qe.black,n,r,o,p,u,s,l,m,c,d;if(!i){if(','===e.substr(-1)&&(e=e.substr(0,e.length-1)),Qe[e])i=Qe[e];else if('#'===e.charAt(0))4===e.length&&(n=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e='#'+n+n+r+r+o+o),e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Je,e&Je];else if('hsl'!==e.substr(0,3))i=e.match(F)||Qe.transparent;else if(i=d=e.match(F),!t)p=+i[0]%360/360,u=+i[1]/100,s=+i[2]/100,r=.5>=s?s*(u+1):s+u-s*u,n=2*s-r,3<i.length&&(i[3]*=1),i[0]=Ke(p+1/3,n,r),i[1]=Ke(p,n,r),i[2]=Ke(p-1/3,n,r);else if(~e.indexOf('='))return e.match(C);i=i.map(Number)}return t&&!d&&(n=i[0]/Je,r=i[1]/Je,o=i[2]/Je,l=_(n,r,o),m=T(n,r,o),s=(l+m)/2,l===m?p=u=0:(c=l-m,u=.5<s?c/(2-l-m):c/(l+m),p=l===n?(r-o)/c+(r<o?6:0):l===r?(o-n)/c+2:(n-r)/c+4,p*=60),i[0]=0|p+.5,i[1]=0|100*u+.5,i[2]=0|100*s+.5),i},et=function(e,t){var a=(e+'').match(tt),r=0,n='',o,i,s;if(!a)return e;for(o=0;o<a.length;o++)i=a[o],s=e.substr(r,e.indexOf(i,r)-r),r+=s.length+i.length,i=$e(i,t),3===i.length&&i.push(1),n+=s+(t?'hsla('+i[0]+','+i[1]+'%,'+i[2]+'%,'+i[3]:'rgba('+i.join(','))+')';return n+e.substr(r)},tt=function(){var e='(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b',t;for(t in Qe)e+='|'+t+'\\b';return new RegExp(e+')','gi')}(),at=/hsl[a]?\(/,rt=function(e){var t=e.join(' '),a;tt.lastIndex=0,tt.test(t)&&(a=at.test(t),e[0]=et(e[0],a),e[1]=et(e[1],a))},it=function(){var e=Date.now,t=500,a=33,r=e(),i=r,n=1/60,o=n,s=[],d=function d(u){var c=e()-i,g=!0===u,f,h;c>t&&(r+=c-a),i+=c,m.time=(i-r)/1e3,f=m.time-o,(0<f||g)&&(m.frame++,o+=f+(f>=n?.004:n-f),h=1),g||(l=p(d)),h&&s.forEach(function(e){return e(m.time,c,m.frame,u)})},l,p,u,m;return m={time:0,frame:0,tick:function(){d(!0)},wake:function(){bt&&(!yt&&R()&&(xt=yt=window,vt=xt.document||{},D.gsap=aa,(xt.gsapVersions||(xt.gsapVersions=[])).push(aa.version),B(z||xt.GreenSockGlobals||!xt.gsap&&xt||{}),u=xt.requestAnimationFrame),l&&m.sleep(),p=u||function(e){return setTimeout(e,0|1e3*(o-m.time)+1)},Et=1,d(2))},sleep:function(){(u?xt.cancelAnimationFrame:clearTimeout)(l),Et=0,p=W},lagSmoothing:function(e,r){t=e||1/h,a=T(r,t,0)},fps:function(e){n=1/(e||60),o=m.time+n},add:function(e){0>s.indexOf(e)&&s.push(e),nt()},remove:function(e){var t;~(t=s.indexOf(e))&&s.splice(t,1)},_listeners:s},m}(),nt=function(){return!Et&&it.wake()},ot={},st=/^[\d.\-M][\d.\-,\s]/,dt=/["']/g,lt=function(e){for(var t={},a=e.substr(1,e.length-3).split(':'),r=a[0],n=1,i=a.length,o,s,d;n<i;n++)s=a[n],o=n===i-1?s.length:s.lastIndexOf(','),d=s.substr(0,o),t[r]=isNaN(d)?d.replace(dt,'').trim():+d,r=s.substr(o+1).trim();return t},pt=function(e){var t=(e+'').split('('),a=ot[t[0]];return a&&1<t.length&&a.config?a.config.apply(null,~e.indexOf('{')?[lt(t[1])]:N.exec(e)[1].split(',').map(se)):ot._CE&&st.test(e)?ot._CE('',e):a},ut=function(e){return function(t){return 1-e(1-t)}},mt=function(e,t){return e?(E(e)?e:ot[e]||pt(e))||t:t},ct=function(e,t,a,r){void 0===a&&(a=function(e){return 1-t(1-e)}),void 0===r&&(r=function(e){return .5>e?t(2*e)/2:1-t(2*(1-e))/2});var i={easeIn:t,easeOut:a,easeInOut:r},n;return te(e,function(e){for(var t in ot[e]=D[e]=i,ot[n=e.toLowerCase()]=a,i)ot[n+('easeIn'===t?'.in':'easeOut'===t?'.out':'.inOut')]=ot[e+'.'+t]=i[t]}),i},gt=function(e){return function(t){return .5>t?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}},ft=function t(r,i,n){var o=1<=i?i:1,s=(n||(r?.3:.45))/(1>i?i:1),d=s/x*(e(1/o)||0),l=function(e){return 1===e?1:o*a(2,-10*e)*u((e-d)*s)+1},p='out'===r?l:'in'===r?function(e){return 1-l(1-e)}:gt(l);return s=x/s,p.config=function(e,a){return t(r,e,a)},p},ht=function e(t,a){void 0===a&&(a=1.70158);var r=function(e){return--e*e*((a+1)*e+a)+1},i='out'===t?r:'in'===t?function(e){return 1-r(1-e)}:gt(r);return i.config=function(a){return e(t,a)},i},_t,xt,yt,vt,bt,Tt,Et;te('Linear,Quad,Cubic,Quart,Quint,Strong',function(e,t){var r=5>t?t+1:t;ct(e+',Power'+(r-1),t?function(e){return a(e,r)}:function(e){return e},function(e){return 1-a(1-e,r)},function(e){return .5>e?a(2*e,r)/2:1-a(2*(1-e),r)/2})}),ot.Linear.easeNone=ot.none=ot.Linear.easeIn,ct('Elastic',ft('in'),ft('out'),ft()),function(e,t){var r=1/t,i=function(i){return i<r?e*i*i:i<2*r?e*a(i-1.5/t,2)+.75:i<2.5*r?e*(i-=2.25/t)*i+.9375:e*a(i-2.625/t,2)+.984375};ct('Bounce',function(e){return 1-i(1-e)},i)}(7.5625,2.75),ct('Expo',function(e){return e?a(2,10*(e-1)):0}),ct('Circ',function(e){return-(v(1-e*e)-1)}),ct('Sine',function(e){return-l(e*(x/4))+1}),ct('Back',ht('in'),ht('out'),ht()),ot.SteppedEase=ot.steps=D.SteppedEase={config:function(e,t){void 0===e&&(e=1);var a=1/e,r=e+(t?0:1),i=t?1:0;return function(e){return((0|r*Ue(0,1-h,e))+i)*a}}},c.ease=ot['quad.out'];var Mt=function(e,t){this.id=y++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ee,this.set=t?t.getSetter:Gt},St=function(){function e(e,t){var a=e.parent||_t;this.vars=e,this._dur=this._tDur=+e.duration||0,this._delay=+e.delay||0,(this._repeat=e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase,Pe(this)),this._ts=1,this.data=e.data,Et||it.wake(),a&&Se(a,this,t||0===t?t:a._time),e.reversed&&this.reversed(!0),e.paused&&this.paused(!0)}var t=e.prototype;return t.delay=function(e){return e||0===e?(this._delay=e,this):this._delay},t.duration=function(e){var t=arguments.length,a=this._repeat,r=0<a?a*((t?e:this._dur)+this._rDelay):0;return t?this.totalDuration(0>a?e:e+r):this.totalDuration()&&this._dur},t.totalDuration=function(e){if(!arguments.length)return this._tDur;var t=this._repeat,a=(e||this._rDelay)&&0>t;return this._tDur=a?1e20:e,this._dur=a?e:(e-t*this._rDelay)/(t+1),this._dirty=0,ye(this.parent),this},t.totalTime=function(e,t){if(nt(),!arguments.length)return this._tTime;var a=this.parent||this._dp,r;if(a&&a.smoothChildTiming&&this._ts){for(r=this._start,this._start=a._time-(0<this._ts?e/this._ts:((this._dirty?this.totalDuration():this._tDur)-e)/-this._ts),this._end+=this._start-r,a._dirty||ye(a);a.parent;)a.parent._time!==a._start+(0<a._ts?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;this.parent||Se(this._dp,this,this._start-this._delay)}return this._tTime===e&&this._dur||(this._ts||(this._pTime=e),oe(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime((e+Te(this))%this.duration()||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this._tTime/this.totalDuration()},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(1&this.iteration())?1-e:e)+Te(this),t):this.duration()?this._time/this._dur:this.ratio},t.iteration=function(e,t){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*a,t):this._repeat?Ee(this._tTime,a)+1:1},t.timeScale=function(e){return arguments.length?null===this._pauseTS?(this._ts=e,ve(this).totalTime(this._tTime,!0)):(this._pauseTS=e,this):this._ts||this._pauseTS||0},t.paused=function(e){var t=!this._ts;return arguments.length?(t!==e&&(e?(this._pauseTS=this._ts,this._pTime=this._tTime||_(-this._delay,this.rawTime()),this._ts=this._act=0):(this._ts=this._pauseTS||1,this._pauseTS=null,e=this._tTime||this._pTime,1===this.progress()&&(this._tTime-=h),this.totalTime(e,!0))),this):t},t.startTime=function(e){return arguments.length?(this.parent&&this.parent._sort&&Se(this.parent,this,e-this._delay),this):this._start},t.endTime=function(e){return this._start+(A(e)?this.totalDuration():this.duration())/g(this._ts)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&1>this.totalProgress())?this._tTime%(this._dur+this._rDelay):this._ts?Me(t.rawTime(e),this):this._tTime:this._tTime},t.repeat=function(e){return arguments.length?(this._repeat=e,Pe(this)):this._repeat},t.repeatDelay=function(e){return arguments.length?(this._rDelay=e,Pe(this)):this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Fe(this,e),A(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,A(t))},t.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){var t=this._ts||this._pauseTS||0;return arguments.length?(e!==this.reversed()&&(this[null===this._pauseTS?'_ts':'_pauseTS']=g(t)*(e?-1:1),this.totalTime(this._tTime,!0)),this):0>t},t.invalidate=function(){return this._initted=0,this},t.isActive=function(e){var t=this.parent||this._dp,a=this._start,r;return!t||this._ts&&(this._initted||!e)&&t.isActive(e)&&(r=t.rawTime(!0))>=a&&r<this.endTime(!0)-h},t.eventCallback=function(e,t,a){var r=this.vars;return 1<arguments.length?(t?(r[e]=t,a&&(r[e+'Params']=a),'onUpdate'===e&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this;return new Promise(function(a){var r=e||de,i=function(){var e=t.then;t.then=null,r=r(t),r&&(r.then||r===t)&&(t._prom=r,t.then=e),a(r),t.then=e};t._initted&&1===t.totalProgress()&&0<=t._ts||!t._tTime&&0>t._ts?i():t._prom=i})},t.kill=function(){Ye(this)},e}();le(St.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:0,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-h,_prom:0,_pauseTS:null});var wt=function(e){function t(t,a){var r;return void 0===t&&(t={}),r=e.call(this,t,a)||this,r.labels={},r.smoothChildTiming=A(t.smoothChildTiming),r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=A(t.sortChildren),r}s(t,e);var a=t.prototype;return a.to=function(e,t,a){return new Ot(e,ie(arguments,0,this),Fe(this,M(t)?arguments[3]:a)),this},a.from=function(e,t,a){return new Ot(e,ie(arguments,1,this),Fe(this,M(t)?arguments[3]:a)),this},a.fromTo=function(e,t,a,r){return new Ot(e,ie(arguments,2,this),Fe(this,M(t)?arguments[4]:r)),this},a.set=function(e,t,a){return t.duration=0,t.parent=this,t.repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Ot(e,t,Fe(this,a)),this},a.call=function(e,t,a){return Se(this,Ot.delayedCall(0,e,t),Fe(this,a))},a.staggerTo=function(e,t,a,r,i,n,o){return a.duration=t,a.stagger=a.stagger||r,a.onComplete=n,a.onCompleteParams=o,a.parent=this,new Ot(e,a,Fe(this,i)),this},a.staggerFrom=function(e,t,a,r,i,n,o){return a.runBackwards=1,a.immediateRender=A(a.immediateRender),this.staggerTo(e,t,a,r,i,n,o)},a.staggerFromTo=function(e,t,a,r,i,n,o,s){return r.startAt=a,r.immediateRender=A(r.immediateRender),this.staggerTo(e,t,r,i,n,o,s)},a.render=function(e,t,a){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,n=this._dur,o=e>i-h&&0<=e&&this!==_t?i:e<h?0:e,s=0>this._zTime!=0>e&&(this._initted||!n),d,l,p,u,m,c,f,_,x,y,v,b;if(o!==this._tTime||a||s){if(s&&(!n&&(r=this._zTime),(e||!t)&&(this._zTime=e)),d=o,x=this._start,_=this._ts,c=0===_,r!==this._time&&n&&(d+=this._time-r),this._repeat&&(v=this._yoyo,m=n+this._rDelay,d=ae(o%m),(d>n||i===o)&&(d=n),u=~~(o/m),u&&u===o/m&&(d=n,u--),y=Ee(this._tTime,m),v&&1&u&&(d=n-d,b=1),u!==y&&!this._lock)){var T=v&&1&y,E=T===(v&&1&u);if(u<y&&(T=!T),r=T?0:n,this._lock=1,this.render(r,t,!n)._lock=0,!t&&this.parent&&qe(this,'onRepeat'),r!==this._time||c!==!this._ts)return this;if(E&&(this._lock=2,r=T?n+1e-4:-1e-4,this.render(r,!0)),this._lock=0,!this._ts&&!c)return this}if(this._hasPause&&!this._forcing&&2>this._lock&&(f=Re(this,ae(r),ae(d)),f&&(o-=d-(d=f._start))),this._tTime=o,this._time=d,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1),r||!d||t||qe(this,'onStart'),d>=r&&0<=e)for(l=this._first;l;){if(p=l._next,(l._act||d>=l._start)&&l._ts&&f!==l){if(l.parent!==this)return this.render(e,t,a);if(l.render(0<l._ts?(d-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(d-l._start)*l._ts,t,a),d!==this._time||!this._ts&&!c){f=0;break}}l=p}else{l=this._last;for(var M=0>e?e:d;l;){if(p=l._prev,(l._act||M<=l._end)&&l._ts&&f!==l){if(l.parent!==this)return this.render(e,t,a);if(l.render(0<l._ts?(M-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(M-l._start)*l._ts,t,a),d!==this._time||!this._ts&&!c){f=0;break}}l=p}}if(f&&!t&&(this.pause(),f.render(d>=r?0:-h)._zTime=d>=r?1:-1,this._ts))return this._start=x,this.render(e,t,a);this._onUpdate&&!t&&qe(this,'onUpdate',!0),(o===i||!o&&0>this._ts)&&(x===this._start||g(_)!==g(this._ts))&&(!d||i>=this.totalDuration())&&((e||!n)&&xe(this,1),!t&&(!(0>e)||r)&&(qe(this,o===i?'onComplete':'onReverseComplete',!0),this._prom&&this._prom()))}return this},a.add=function(e,t){var a=this;if(M(t)||(t=Fe(this,t)),!(e instanceof St)){if(L(e))return e.forEach(function(e){return a.add(e,t)}),ye(this);if(b(e))return this.addLabel(e,t);if(E(e))e=Ot.delayedCall(0,e);else return this}return this===e?this:Se(this,e,t)},a.getChildren=function(e,t,r,i){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===i&&(i=-f);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Ot?t&&n.push(a):(r&&n.push(a),e&&n.push.apply(n,a.getChildren(!0,t,r)))),a=a._next;return n},a.getById=function(e){for(var t=this.getChildren(1,1,1),a=t.length;a--;)if(t[a].vars.id===e)return t[a]},a.remove=function(e){return b(e)?this.removeLabel(e):E(e)?this.killTweensOf(e):(_e(this,e),e===this._recent&&(this._recent=this._last),ye(this))},a.totalTime=function(t,a){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=it.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts)),e.prototype.totalTime.call(this,t,a),this._forcing=0,this):this._tTime},a.addLabel=function(e,t){return this.labels[e]=Fe(this,t),this},a.removeLabel=function(e){return delete this.labels[e],this},a.addPause=function(e,a,r){var i=Ot.delayedCall(0,a||W,r);return i.data='isPause',this._hasPause=1,Se(this,i,Fe(this,e))},a.removePause=function(e){var t=this._first;for(e=Fe(this,e);t;)t._start===e&&'isPause'===t.data&&xe(t),t=t._next},a.killTweensOf=function(e,t,a){for(var r=this.getTweensOf(e,a),n=r.length;n--;)Dt!==r[n]&&r[n].kill(e,t);return this},a.getTweensOf=function(e,t){for(var r=[],a=ze(e),i=this._first,n;i;)i instanceof Ot?re(i._targets,a)&&(!t||i.isActive('started'===t))&&r.push(i):(n=i.getTweensOf(a,t)).length&&r.push.apply(r,n),i=i._next;return r},a.tweenTo=function(e,t){var a=this,r=Fe(a,e),i=t&&t.startAt,n=Ot.to(a,le({ease:'none',lazy:!1,time:r,duration:g(r-(i&&'time'in i?i.time:a._time))/a.timeScale()||h,onStart:function(){a.pause();var e=g(r-a._time)/a.timeScale();n._dur!==e&&(n._dur=e,n.render(n._time,!0,!0)),t&&t.onStart&&t.onStart.apply(n,t.onStartParams||[])}},t));return n},a.tweenFromTo=function(e,t,a){return this.tweenTo(t,le({startAt:{time:Fe(this,e)}},a))},a.recent=function(){return this._recent},a.nextLabel=function(e){return void 0===e&&(e=this._time),je(this,Fe(this,e))},a.previousLabel=function(e){return void 0===e&&(e=this._time),je(this,Fe(this,e),1)},a.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+h)},a.shiftChildren=function(e,t,a){void 0===a&&(a=0);for(var r=this._first,i=this.labels,n;r;)r._start>=a&&(r._start+=e),r=r._next;if(t)for(n in i)i[n]>=a&&(i[n]+=e);return ye(this)},a.invalidate=function(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return e.prototype.invalidate.call(this)},a.clear=function(e){void 0===e&&(e=!0);for(var t=this._first,a;t;)a=t._next,this.remove(t),t=a;return this._time=this._tTime=0,e&&(this.labels={}),ye(this)},a.totalDuration=function(e){var t=0,a=this,r=a._last,i=f,n=a._repeat,o=n*a._rDelay||0,s=0>n,d,l;if(!arguments.length){if(a._dirty){for(;r;)d=r._prev,r._dirty&&r.totalDuration(),r._start>i&&a._sort&&r._ts&&!a._lock?(a._lock=1,Se(a,r,r._start-r._delay),a._lock=0):i=r._start,0>r._start&&r._ts&&(t-=r._start,(!a.parent&&!a._dp||a.parent&&a.parent.smoothChildTiming)&&(a._start+=r._start/a._ts,a._time-=r._start,a._tTime-=r._start),a.shiftChildren(-r._start,!1,-f),i=0),l=r._end=r._start+r._tDur/g(r._ts||r._pauseTS||h),l>t&&r._ts&&(t=ae(l)),r=d;a._dur=a===_t&&a._time>t?a._time:T(f,t),a._tDur=s&&(a._dur||o)?1e20:T(f,t*(n+1)+o),a._end=a._start+(a._tDur/g(a._ts||a._pauseTS||h)||0),a._dirty=0}return a._tDur}return s?a:a.timeScale(a.totalDuration()/e)},t.updateRoot=function(e){if(_t._ts&&oe(_t,Me(e,_t)),it.frame>=Z){Z+=d.autoSleep||120;var t=_t._first;if((!t||!t._ts)&&d.autoSleep&&2>it._listeners.length){for(;t&&!t._ts;)t=t._next;t||it.sleep()}}},t}(St);le(wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var At=function(e,t,r,i,n,o,s){var d=new Qt(this._pt,e,t,0,1,Xt,null,n),l=0,p=0,u,c,g,f,h,_,x,y;for(d.b=r,d.e=i,r+='',i+='',(x=~i.indexOf('random('))&&(i=He(i)),o&&(y=[r,i],o(y,e,t),r=y[0],i=y[1]),c=r.match(U)||[];u=U.exec(i);)f=u[0],h=i.substring(l,u.index),g?g=(g+1)%5:'rgba('===h.substr(-5)&&(g=1),f!==c[p++]&&(_=parseFloat(c[p-1])||0,d._pt={_next:d._pt,p:h||1==p?h:',',s:_,c:'='===f.charAt(1)?parseFloat(f.substr(2))*('-'===f.charAt(0)?-1:1):parseFloat(f)-_,m:g&&4>g?m:0},l=U.lastIndex);return d.c=l<i.length?i.substring(l,i.length):'',d.fp=s,(I.test(i)||x)&&(d.e=0),this._pt=d,d},Rt=function(e,t,a,r,i,n,o,s,l){E(r)&&(r=r(i||0,e,n));var p=e[t],u='get'===a?E(p)?l?e[t.indexOf('set')||!E(e['get'+t.substr(3)])?t:'get'+t.substr(3)](l):e[t]():p:a,m=E(p)?l?Vt:Bt:zt,c;if(b(r)&&(~r.indexOf('random(')&&(r=He(r)),'='===r.charAt(1)&&(r=parseFloat(u)+parseFloat(r.substr(2))*('-'===r.charAt(0)?-1:1)+(Ne(u)||0))),u!==r)return isNaN(u+r)?(p||t in e||V(t,r),At.call(this,e,t,u,r,m,s||d.stringFilter,l)):(c=new Qt(this._pt,e,t,+u||0,r-(u||0),'boolean'==typeof p?Ht:Wt,0,m),l&&(c.fp=l),o&&c.modifier(o,this,e),this._pt=c)},Pt=function(e,t,a,r,i){if(E(e)&&(e=Ut(e,i,t,a,r)),!w(e)||e.style&&e.nodeType||L(e))return b(e)?Ut(e,i,t,a,r):e;var n={},o;for(o in e)n[o]=Ut(e[o],i,t,a,r);return n},Lt=function(e,t,a,r,n,o){var s,d,l,p;if(q[e]&&!1!==(s=new q[e]).init(n,s.rawVars?t[e]:Pt(t[e],r,n,o,a),a,r,o)&&(a._pt=d=new Qt(a._pt,n,e,0,1,s.render,s,0,s.priority),a!==Tt))for(l=a._ptLookup[a._targets.indexOf(n)],p=s._props.length;p--;)l[s._props[p]]=d;return s},Ft=function e(t,a){var r=t.vars,n=r.ease,o=r.startAt,s=r.immediateRender,d=r.lazy,l=r.onUpdate,u=r.onUpdateParams,m=r.callbackScope,g=r.runBackwards,f=r.yoyoEase,_=r.keyframes,x=r.autoRevert,y=t._dur,v=t._startAt,b=t._targets,T=t.parent,E=T&&'nested'===T.data?T.parent._targets:b,M='auto'===t._overwrite,S=t.timeline,w,R,i,p,P,L,F,C,U,N,I,O;if(!S||_&&n||(n='none'),t._ease=mt(n,c.ease),t._yEase=f?ut(mt(!0===f?n:f,c.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),!S){if(v&&v.render(-1,!0).kill(),o){if(xe(t._startAt=Ot.set(b,le({data:'isStart',overwrite:!1,parent:T,immediateRender:!0,lazy:A(d),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:m,stagger:0},o))),s)if(0<a)x||(t._startAt=0);else if(y)return;}else if(g&&y)if(v)x||(t._startAt=0);else if(a&&(s=!1),xe(t._startAt=Ot.set(b,ue(ce(r,H),{overwrite:!1,data:'isFromStart',lazy:s&&A(d),immediateRender:s,stagger:0,parent:T}))),!s)e(t._startAt,h);else if(!a)return;for(w=ce(r,H),t._pt=0,C=b[0]?$(b[0]).harness:0,O=C&&r[C.prop],d=y&&A(d)||d&&!y,R=0;R<b.length;R++){if(P=b[R],F=P._gsap||K(b)[R]._gsap,t._ptLookup[R]=N={},j[F.id]&&ne(),I=E===b?R:E.indexOf(P),C&&!1!==(U=new C).init(P,O||w,t,I,E)&&(t._pt=p=new Qt(t._pt,P,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(e){N[e]=p}),U.priority&&(L=1)),!C||O)for(i in w)q[i]&&(U=Lt(i,w,t,I,P,E))?U.priority&&(L=1):N[i]=p=Rt.call(t,P,i,'get',w[i],I,E,0,r.stringFilter);t._op&&t._op[R]&&t.kill(P,t._op[R]),M&&t._pt&&(Dt=t,_t.killTweensOf(P,N,'started'),Dt=0),t._pt&&d&&(j[F.id]=1)}L&&Jt(t),t._onInit&&t._onInit(t)}t._from=!S&&!!r.runBackwards,t._onUpdate=l,t._initted=1},Ct=function(e,t){var a=e[0]?$(e[0]).harness:0,r=a&&a.aliases,n,o,s,i;if(!r)return t;for(o in n=ue({},t),r)if(o in n)for(i=r[o].split(','),s=i.length;s--;)n[i[s]]=n[o];return n},Ut=function(e,t,a,r,i){return E(e)?e.call(t,a,r,i):b(e)&&~e.indexOf('random(')?He(e):e},Nt=Q+',repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',It=(Nt+',id,stagger,delay,duration,paused').split(','),Ot=function(e){function t(t,a,r){var n;'number'==typeof a&&(r.duration=a,a=r,r=null),n=e.call(this,ge(a),r)||this;var s=n.vars,u=s.duration,m=s.delay,c=s.immediateRender,g=s.stagger,f=s.overwrite,x=s.keyframes,y=s.defaults,v=L(t)&&M(t[0])?[t]:ze(t),b,T,i,E,l,p,S,R;if(n._targets=v.length?K(v):k('GSAP target '+t+' not found. https://greensock.com',!d.nullTargetWarn)||[],n._ptLookup=[],n._overwrite=f,x||g||P(u)||P(m)){if(a=n.vars,b=n.timeline=new wt({data:'nested',defaults:y||{}}),b.kill(),b.parent=o(n),x)le(b.vars.defaults,{ease:'none'}),x.forEach(function(e){return b.to(v,e,'>')});else{if(E=v.length,S=g?Be(g):W,w(g))for(l in g)~Nt.indexOf(l)&&(R||(R={}),R[l]=g[l]);for(T=0;T<E;T++){for(l in i={},a)0>It.indexOf(l)&&(i[l]=a[l]);i.stagger=0,R&&ue(i,R),a.yoyoEase&&!a.repeat&&(i.yoyoEase=a.yoyoEase),p=v[T],i.duration=+Ut(u,o(n),T,p,v),i.delay=(+Ut(m,o(n),T,p,v)||0)-n._delay,!g&&1===E&&i.delay&&(n._delay=m=i.delay,n._start+=m,i.delay=0),b.to(p,i,S(T,p,v))}u=m=0}u||n.duration(u=b.duration())}else n.timeline=0;return!0===f&&(Dt=o(n),_t.killTweensOf(v),Dt=0),(c||!u&&!x&&n._start===n.parent._time&&A(c)&&be(o(n))&&'nested'!==n.parent.data)&&(n._tTime=-h,n.render(_(0,-m))),n}s(t,e);var a=t.prototype;return a.render=function(e,t,a){var r=this._time,i=this._tDur,n=this._dur,o=e>i-h&&0<=e?i:e<h?0:e,s,d,l,p,u,m,c,g,f;if(!n)Ae(this,e,t,a);else if(o!==this._tTime||!e||a||this._startAt&&0>this._zTime!=0>e){if(s=o,g=this.timeline,this._repeat){if(p=n+this._rDelay,s=ae(o%p),s>n&&(s=n),l=~~(o/p),l&&l===o/p&&(s=n,l--),m=this._yoyo&&1&l,m&&(f=this._yEase,s=n-s),u=Ee(this._tTime,p),s===r&&!a&&this._initted)return this;l!==u&&this.vars.repeatRefresh&&!this._lock&&(this._lock=a=1,this.render(p*l,!0).invalidate()._lock=0)}if(!this._initted&&we(this,s,a,t))return this;for(this._tTime=o,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=c=(f||this._ease)(s/n),this._from&&(this.ratio=c=1-c),r||!s||t||qe(this,'onStart'),d=this._pt;d;)d.r(c,d.d),d=d._next;g&&g.render(0>e?e:!s&&m?-h:g._dur*c,t,a)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(0>e&&this._startAt&&this._startAt.render(e,!0,a),qe(this,'onUpdate')),this._repeat&&l!==u&&this.vars.onRepeat&&!t&&this.parent&&qe(this,'onRepeat'),o!==i&&o||this._tTime!==o||(0>e&&this._startAt&&!this._onUpdate&&this._startAt.render(e,!0,a),(e||!n)&&(o||0>this._ts)&&xe(this,1),!t&&(!(0>e)||r)&&(qe(this,o===i?'onComplete':'onReverseComplete',!0),this._prom&&this._prom()))}return this},a.targets=function(){return this._targets},a.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),e.prototype.invalidate.call(this)},a.kill=function(e,t){if(void 0===t&&(t='all'),!e&&(!t||'all'===t)&&(this._lazy=0,this.parent))return Ye(this);if(this.timeline)return this.timeline.killTweensOf(e,t,Dt&&!0!==Dt.vars.overwrite),this;var a=this._targets,r=e?ze(e):a,n=this._ptLookup,o=this._pt,s,d,l,u,m,p,c;if((!t||'all'===t)&&fe(a,r))return Ye(this);for(s=this._op=this._op||[],'all'!==t&&(b(t)&&(m={},te(t,function(e){return m[e]=1}),t=m),t=Ct(a,t)),c=a.length;c--;)if(~r.indexOf(a[c]))for(m in d=n[c],'all'===t?(s[c]=t,u=d,l={}):(l=s[c]=s[c]||{},u=t),u)p=d&&d[m],p&&((!('kill'in p.d)||!0===p.d.kill(m))&&_e(this,p,'_pt'),delete d[m]),'all'!==l&&(l[m]=1);return this._initted&&!this._pt&&o&&Ye(this),this},t.to=function(e,a){return new t(e,a,arguments[2])},t.from=function(e){return new t(e,ie(arguments,1))},t.delayedCall=function(e,a,r,i){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:a,onReverseComplete:a,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e){return new t(e,ie(arguments,2))},t.set=function(e,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(e,a)},t.killTweensOf=function(e,t,a){return _t.killTweensOf(e,t,a)},t}(St),Dt;le(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),te('staggerTo,staggerFrom,staggerFromTo',function(e){Ot[e]=function(){var t=new wt,a=ze(arguments);return a.splice('staggerFromTo'===e?5:4,0,0),t[e].apply(t,a)}});var zt=function(e,t,a){return e[t]=a},Bt=function(e,t,a){return e[t](a)},Vt=function(e,t,a,r){return e[t](r.fp,a)},kt=function(e,t,a){return e.setAttribute(t,a)},Gt=function(e,t){return E(e[t])?Bt:S(e[t])&&e.setAttribute?kt:zt},Wt=function(e,t){return t.set(t.t,t.p,m(1e4*(t.s+t.c*e))/1e4,t)},Ht=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xt=function(e,t){var a=t._pt,r='';if(!e&&t.b)r=t.b;else if(1===e&&t.e)r=t.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*e):m(1e4*(a.s+a.c*e))/1e4)+r,a=a._next;r+=t.c}t.set(t.t,t.p,r,t)},jt=function(e,t){for(var a=t._pt;a;)a.r(e,a.d),a=a._next},qt=function(e,t,a,r){for(var i=this._pt,n;i;)n=i._next,i.p===r&&i.modifier(e,t,a),i=n},Yt=function(e){for(var t=this._pt,a,r;t;)r=t._next,(t.p!==e||t.op)&&t.op!==e?!t.dep&&(a=1):_e(this,t,'_pt'),t=r;return!a},Zt=function(e,t,a,r){r.mSet(e,t,r.m.call(r.tween,a,r.mt),r)},Jt=function(e){for(var t=e._pt,a,r,i,n;t;){for(a=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:n)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:n=t,t=a}e._pt=i},Qt=function(){function e(e,t,a,r,i,n,o,s,d){this.t=t,this.s=r,this.c=i,this.p=a,this.r=n||Wt,this.d=o||this,this.set=s||zt,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,a){this.mSet=this.mSet||this.set,this.set=Zt,this.m=e,this.mt=a,this.tween=t},e}();te(Q+',parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert',function(e){H[e]=1,'on'===e.substr(0,2)&&(H[e+'Params']=1)}),D.TweenMax=D.TweenLite=Ot,D.TimelineLite=D.TimelineMax=wt,_t=new wt({sortChildren:!1,defaults:c,autoRemoveChildren:!0,id:'root'}),d.stringFilter=rt;var Kt={registerPlugin:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];t.forEach(function(e){return Ze(e)})},timeline:function(e){return new wt(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,a,r){b(e)&&(e=ze(e)[0]);var i=$(e||{}).get,n=a?de:se;return'native'===a&&(a=''),e?t?n((q[t]&&q[t].get||i)(e,t,a,r)):function(t,a,r){return n((q[t]&&q[t].get||i)(e,t,a,r))}:e},quickSetter:function(e,a,r){if(e=ze(e),1<e.length){var t=e.map(function(e){return aa.quickSetter(e,a,r)}),n=t.length;return function(e){for(var a=n;a--;)t[a](e)}}e=e[0]||{};var i=q[a],o=$(e),s=i?function(t){var a=new i;Tt._pt=0,a.init(e,r?t+r:t,Tt,0,[e]),a.render(1,a),Tt._pt&&jt(1,Tt)}:o.set(e,a);return i?s:function(t){return s(e,a,r?t+r:t,o,1)}},isTweening:function(e){return 0<_t.getTweensOf(e,!0).length},defaults:function(e){return e&&e.ease&&(e.ease=mt(e.ease,c.ease)),me(c,e||{})},config:function(e){return me(d,e||{})},registerEffect:function(e){var t=e.name,a=e.effect,r=e.plugins,i=e.defaults,n=e.extendTimeline;(r||'').split(',').forEach(function(e){return e&&!q[e]&&!D[e]&&k(t+' effect requires '+e+' plugin.')}),Y[t]=function(e,t){return a(ze(e),le(t||{},i))},n&&(wt.prototype[t]=function(e,a,r){return this.add(Y[t](e,w(a)?a:(r=a)&&{}),r)})},registerEase:function(e,t){ot[e]=mt(t)},parseEase:function(e,t){return arguments.length?mt(e,t):ot},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){void 0===e&&(e={});var a=new wt(e),r,i;for(a.smoothChildTiming=A(e.smoothChildTiming),_t.remove(a),a._dp=0,a._time=a._tTime=_t._time,r=_t._first;r;)i=r._next,(t||r._dur||!(r instanceof Ot)||r.vars.onComplete!==r._targets[0])&&Se(a,r,r._start-r._delay),r=i;return Se(_t,a,0),a},utils:{wrap:function e(t,a,r){var i=a-t;return L(t)?We(t,e(0,t.length),a):Ce(r,function(e){return(i+(e-t)%i)%i+t})},wrapYoyo:function e(t,a,r){var i=a-t,n=2*i;return L(t)?We(t,e(0,t.length-1),a):Ce(r,function(e){return e=(n+(e-t)%n)%n,t+(e>i?n-e:e)})},distribute:Be,random:Ge,snap:ke,normalize:function(e,t,a){return Xe(e,t,0,1,a)},getUnit:Ne,clamp:function(e,t,a){return Ce(a,function(a){return Ue(e,t,a)})},splitColor:$e,toArray:ze,mapRange:Xe,pipe:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce(function(e,t){return t(e)},e)}},unitize:function(e,t){return function(a){return e(parseFloat(a))+(t||Ne(a))}},interpolate:function e(t,a,r,n){var o=isNaN(t+a)?0:function(e){return(1-e)*t+e*a};if(!o){var s=b(t),d={},u,p,m,c,l;if(!0===r&&(n=1)&&(r=null),s)t={p:t},a={p:a};else if(L(t)&&!L(a)){for(m=[],c=t.length,l=c-2,p=1;p<c;p++)m.push(e(t[p-1],t[p]));c--,o=function(e){e*=c;var t=T(l,~~e);return m[t](e-t)},r=a}else n||(t=ue(L(t)?[]:{},t));if(!m){for(u in a)Rt.call(d,t,u,'get',a[u]);o=function(e){return jt(e,d)||(s?t.p:t)}}}return Ce(r,o)}},install:B,effects:Y,ticker:it,updateRoot:wt.updateRoot,plugins:q,globalTimeline:_t,core:{PropTween:Qt,globals:G,Tween:Ot,Timeline:wt,Animation:St,getCache:$}};te('to,from,fromTo,delayedCall,set,killTweensOf',function(e){return Kt[e]=Ot[e]}),it.add(wt.updateRoot),Tt=Kt.to({},{duration:0});var $t=function(e,t){for(var a=e._pt;a&&a.p!==t&&a.op!==t&&a.fp!==t;)a=a._next;return a},ea=function(e,t){var a=e._targets,r,n,i;for(r in t)for(n=a.length;n--;)i=e._ptLookup[n][r],i&&(i=i.d)&&(i._pt&&(i=$t(i,r)),i&&i.modifier&&i.modifier(t[r],e,a[n],r))},ta=function(e,t){return{name:e,rawVars:1,init:function(e,a,r){r._onInit=function(e){var r,i;if(b(a)&&(r={},te(a,function(e){return r[e]=1}),a=r),t){for(i in r={},a)r[i]=t(a[i]);a=r}ea(e,a)}}}},aa=Kt.registerPlugin({name:'attr',init:function(e,t,a,r,i){for(var n in t)this.add(e,'setAttribute',(e.getAttribute(n)||0)+'',t[n],r,i,0,0,n),this._props.push(n)}},{name:'endArray',init:function(e,t){for(var a=t.length;a--;)this.add(e,a,e[a]||0,t[a])}},ta('roundProps',Ve),ta('modifiers'),ta('snap',ke))||Kt;Ot.version=wt.version=aa.version='3.0.4',bt=1,R()&&nt();var ra=ot.Power0,ia=ot.Power1,na=ot.Power2,oa=ot.Power3,sa=ot.Power4,da=ot.Linear,la=ot.Quad,pa=ot.Cubic,ua=ot.Quart,ma=ot.Quint,ca=ot.Strong,ga=ot.Elastic,fa=ot.Back,ha=ot.SteppedEase,_a=ot.Bounce,xa=ot.Sine,ya=ot.Expo,va=ot.Circ},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var r=a(45),i=a(296),n=a(81),o=n(r.a,i.a,!1,function(){!1||a(76)},null,null);o.options.__file='src/VueDisplacementSlideshow.vue',!1,t['default']=o.exports},function(e,t,a){var r=a(77);'string'==typeof r&&(r=[[e.i,r,'']]),r.locals&&(e.exports=r.locals);a(79)('e6b140ea',r,!1,{})},function(e,t,a){t=e.exports=a(78)(!1),t.push([e.i,'\n.vue-displacement-slideshow {\n    width: 100%;\n    height: 100%;\n}\n',''])},function(e){function t(e,t){var r=e[1]||'',i=e[3];if(!i)return r;if(t&&'function'==typeof btoa){var n=a(i),o=i.sources.map(function(e){return'/*# sourceURL='+i.sourceRoot+e+' */'});return[r].concat(o).concat([n]).join('\n')}return[r].join('\n')}function a(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+t)+' */'}e.exports=function(e){var a=[];return a.toString=function(){return this.map(function(a){var r=t(a,e);return a[2]?'@media '+a[2]+'{'+r+'}':r}).join('')},a.i=function(e,t){'string'==typeof e&&(e=[[null,e,'']]);for(var r={},n=0,i;n<this.length;n++)i=this[n][0],'number'==typeof i&&(r[i]=!0);for(n=0;n<e.length;n++){var o=e[n];'number'==typeof o[0]&&r[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]='('+o[2]+') and ('+t+')'),a.push(o))}},a}},function(e,t,a){function r(e){for(var t=0;t<e.length;t++){var a=e[t],r=p[a.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](a.parts[i]);for(;i<a.parts.length;i++)r.parts.push(n(a.parts[i]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{for(var o=[],i=0;i<a.parts.length;i++)o.push(n(a.parts[i]));p[a.id]={id:a.id,refs:1,parts:o}}}}function i(){var e=document.createElement('style');return e.type='text/css',u.appendChild(e),e}function n(e){var t=document.querySelector('style['+_+'~="'+e.id+'"]'),a,r;if(t){if(g)return f;t.parentNode.removeChild(t)}if(x){var n=c++;t=m||(m=i()),a=o.bind(null,t,n,!1),r=o.bind(null,t,n,!0)}else t=i(),a=s.bind(null,t),r=function(){t.parentNode.removeChild(t)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}function o(e,t,a,r){var i=a?'':r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var n=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function s(e,t){var a=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute('media',r),h.ssrId&&e.setAttribute(_,t.id),i&&(a+='\n/*# sourceURL='+i.sources[0]+' */',a+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+' */'),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var d='undefined'!=typeof document;if('undefined'!=typeof DEBUG&&DEBUG&&!d)throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');var l=a(80),p={},u=d&&(document.head||document.getElementsByTagName('head')[0]),m=null,c=0,g=!1,f=function(){},h=null,_='data-vue-ssr-id',x='undefined'!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,i){g=a,h=i||{};var n=l(e,t);return r(n),function(t){for(var a=[],o=0;o<n.length;o++){var i=n[o],s=p[i.id];s.refs--,a.push(s)}t?(n=l(e,t),r(n)):n=[];for(var o=0,s;o<a.length;o++)if(s=a[o],0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete p[s.id]}}};var y=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join('\n')}}()},function(e){e.exports=function(e,t){for(var a=[],r={},n=0;n<t.length;n++){var i=t[n],o=i[0],s=i[1],d=i[2],l=i[3],p={id:e+':'+n,css:s,media:d,sourceMap:l};r[o]?r[o].parts.push(p):a.push(r[o]={id:o,parts:[p]})}return a}},function(e){e.exports=function(e,t,a,r,i,n){var o=e=e||{},s=typeof e.default,d;('object'==s||'function'==s)&&(d=e,o=e.default);var l='function'==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),i&&(l._scopeId=i);var p;if(n?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||'undefined'==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=p):r&&(p=r),p){var u=l.functional,m=u?l.render:l.beforeCreate;u?(l._injectStyles=p,l.render=function(e,t){return p.call(t),m(e,t)}):l.beforeCreate=m?[].concat(m,p):[p]}return{esModule:d,exports:o,options:l}}},function(e,t,a){e.exports={default:a(83),__esModule:!0}},function(e,t,a){a(84),a(85),a(100),a(104),a(116),a(117),e.exports=a(12).Promise},function(){},function(e,t,a){'use strict';var r=a(86)(!0);a(46)(String,'String',function(e){this._t=e+'',this._i=0},function(){var e=this._t,t=this._i,a;return t>=e.length?{value:void 0,done:!0}:(a=r(e,t),this._i+=a.length,{value:a,done:!1})})},function(e,t,a){var r=a(31),n=a(32);e.exports=function(e){return function(t,o){var d=n(t)+'',s=r(o),i=d.length,l,a;return 0>s||s>=i?e?'':void 0:(l=d.charCodeAt(s),55296>l||56319<l||s+1===i||56320>(a=d.charCodeAt(s+1))||57343<a?e?d.charAt(s):l:e?d.slice(s,s+2):(l-55296<<10)+(a-56320)+65536)}}},function(e,t,a){e.exports=!a(17)&&!a(47)(function(){return 7!=Object.defineProperty(a(34)('div'),'a',{get:function(){return 7}}).a})},function(e,t,a){var r=a(16);e.exports=function(e,t){if(!r(e))return e;var a,i;if(t&&'function'==typeof(a=e.toString)&&!r(i=a.call(e)))return i;if('function'==typeof(a=e.valueOf)&&!r(i=a.call(e)))return i;if(!t&&'function'==typeof(a=e.toString)&&!r(i=a.call(e)))return i;throw TypeError('Can\'t convert object to primitive value')}},function(e,t,a){e.exports=a(15)},function(e,t,a){'use strict';var r=a(91),i=a(48),n=a(37),o={};a(15)(o,a(5)('iterator'),function(){return this}),e.exports=function(e,t,a){e.prototype=r(o,{next:i(1,a)}),n(e,t+' Iterator')}},function(e,t,a){var r=a(13),i=a(92),n=a(52),o=a(36)('IE_PROTO'),s=function(){},d='prototype',l=function(){var e=a(34)('iframe'),t=n.length,r='<',i='>',o;for(e.style.display='none',a(53).appendChild(e),e.src='javascript:',o=e.contentWindow.document,o.open(),o.write(r+'script'+i+'document.F=Object'+r+'/script'+i),o.close(),l=o.F;t--;)delete l[d][n[t]];return l()};e.exports=Object.create||function(e,t){var a;return null===e?a=l():(s[d]=r(e),a=new s,s[d]=null,a[o]=e),void 0===t?a:i(a,t)}},function(e,t,a){var r=a(24),n=a(13),o=a(93);e.exports=a(17)?Object.defineProperties:function(e,t){n(e);for(var a=o(t),s=a.length,d=0,i;s>d;)r.f(e,i=a[d++],t[i]);return e}},function(e,t,a){var r=a(94),i=a(52);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,a){var r=a(25),n=a(35),o=a(96)(!1),i=a(36)('IE_PROTO');e.exports=function(e,t){var a=n(e),s=0,d=[],l;for(l in a)l!=i&&r(a,l)&&d.push(l);for(;t.length>s;)r(a,l=t[s++])&&(~o(d,l)||d.push(l));return d}},function(e,t,a){var r=a(26);e.exports=Object('z').propertyIsEnumerable(0)?Object:function(e){return'String'==r(e)?e.split(''):Object(e)}},function(e,t,a){var r=a(35),i=a(49),n=a(97);e.exports=function(e){return function(t,a,o){var s=r(t),d=i(s.length),l=n(o,d),p;if(e&&a!=a){for(;d>l;)if(p=s[l++],p!=p)return!0;}else for(;d>l;l++)if((e||l in s)&&s[l]===a)return e||l||0;return!e&&-1}}},function(e,t,a){var r=a(31);e.exports=function(e,t){return e=r(e),0>e?_(e+t,0):T(e,t)}},function(e,t,a){var r=a(25),i=a(99),n=a(36)('IE_PROTO'),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,n)?e[n]:'function'==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,a){var r=a(32);e.exports=function(e){return Object(r(e))}},function(e,t,a){a(101);for(var r=a(3),n=a(15),o=a(18),s=a(5)('toStringTag'),d='CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(','),l=0;l<d.length;l++){var i=d[l],p=r[i],u=p&&p.prototype;u&&!u[s]&&n(u,s,i),o[i]=o.Array}},function(e,t,a){'use strict';var r=a(102),i=a(103),n=a(18),o=a(35);e.exports=a(46)(Array,'Array',function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,a=this._i++;return!e||a>=e.length?(this._t=void 0,i(1)):'keys'==t?i(0,a):'values'==t?i(0,e[a]):i(0,[a,e[a]])},'values'),n.Arguments=n.Array,r('keys'),r('values'),r('entries')},function(e){e.exports=function(){}},function(e){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,a){'use strict';var r=a(33),i=a(3),n=a(22),o=a(54),s=a(21),d=a(16),l=a(23),p=a(105),u=a(106),m=a(55),c=a(56).set,g=a(111)(),f=a(38),h=a(57),_=a(112),y=a(58),x='Promise',v=i.TypeError,b=i.process,T=b&&b.versions,E=T&&T.v8||'',M=i[x],S='process'==o(b),w=function(){},A=D=f.f,R=!!function(){try{var e=M.resolve(1),t=(e.constructor={})[a(5)('species')]=function(e){e(w,w)};return(S||'function'==typeof PromiseRejectionEvent)&&e.then(w)instanceof t&&0!==E.indexOf('6.6')&&-1===_.indexOf('Chrome/66')}catch(t){}}(),P=function(e){var t;return!!(d(e)&&'function'==typeof(t=e.then))&&t},L=function(e,t){if(!e._n){e._n=!0;var a=e._c;g(function(){for(var r=e._v,n=1==e._s,o=0,i=function(t){var a=n?t.ok:t.fail,i=t.resolve,o=t.reject,s=t.domain,d,l,p;try{a?(!n&&(2==e._h&&U(e),e._h=1),!0===a?d=r:(s&&s.enter(),d=a(r),s&&(s.exit(),p=!0)),d===t.promise?o(v('Promise-chain cycle')):(l=P(d))?l.call(d,i,o):i(d)):o(r)}catch(t){s&&!p&&s.exit(),o(t)}};a.length>o;)i(a[o++]);e._c=[],e._n=!1,t&&!e._h&&F(e)})}},F=function(e){c.call(i,function(){var t=e._v,a=C(e),r,n,o;if(a&&(r=h(function(){S?b.emit('unhandledRejection',t,e):(n=i.onunhandledrejection)?n({promise:e,reason:t}):(o=i.console)&&o.error&&o.error('Unhandled promise rejection',t)}),e._h=S||C(e)?2:1),e._a=void 0,a&&r.e)throw r.v})},C=function(e){return 1!==e._h&&0===(e._a||e._c).length},U=function(e){c.call(i,function(){var t;S?b.emit('rejectionHandled',e):(t=i.onrejectionhandled)&&t({promise:e,reason:e._v})})},N=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,!t._a&&(t._a=t._c.slice()),L(t,!0))},I=function(e){var t=this,a;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw v('Promise can\'t be resolved itself');(a=P(e))?g(function(){var r={_w:t,_d:!1};try{a.call(e,n(I,r,1),n(N,r,1))}catch(t){N.call(r,t)}}):(t._v=e,t._s=1,L(t,!1))}catch(a){N.call({_w:t,_d:!1},a)}}},O,D,z,B;R||(M=function(e){p(this,M,x,'_h'),l(e),O.call(this);try{e(n(I,this,1),n(N,this,1))}catch(e){N.call(this,e)}},O=function(){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},O.prototype=a(113)(M.prototype,{then:function(e,t){var a=A(m(this,M));return a.ok='function'!=typeof e||e,a.fail='function'==typeof t&&t,a.domain=S?b.domain:void 0,this._c.push(a),this._a&&this._a.push(a),this._s&&L(this,!1),a.promise},catch:function(e){return this.then(void 0,e)}}),z=function(){var e=new O;this.promise=e,this.resolve=n(I,e,1),this.reject=n(N,e,1)},f.f=A=function(e){return e===M||e===B?new z(e):D(e)}),s(s.G+s.W+s.F*!R,{Promise:M}),a(37)(M,x),a(114)(x),B=a(12)[x],s(s.S+s.F*!R,x,{reject:function(e){var t=A(this),a=t.reject;return a(e),t.promise}}),s(s.S+s.F*(r||!R),x,{resolve:function(e){return y(r&&this===B?M:this,e)}}),s(s.S+s.F*!(R&&a(115)(function(e){M.all(e)['catch'](w)})),x,{all:function(e){var t=this,a=A(t),r=a.resolve,i=a.reject,n=h(function(){var a=[],n=0,o=1;u(e,!1,function(e){var s=n++,d=!1;a.push(void 0),o++,t.resolve(e).then(function(e){d||(d=!0,a[s]=e,--o||r(a))},i)}),--o||r(a)});return n.e&&i(n.v),a.promise},race:function(e){var t=this,a=A(t),r=a.reject,i=h(function(){u(e,!1,function(e){t.resolve(e).then(a.resolve,r)})});return i.e&&r(i.v),a.promise}})},function(e){e.exports=function(e,t,a,r){if(!(e instanceof t)||r!==void 0&&r in e)throw TypeError(a+': incorrect invocation!');return e}},function(e,t,a){var r=a(22),i=a(107),n=a(108),o=a(13),s=a(49),d=a(109),l={},p={},t=e.exports=function(e,t,a,u,m){var c=m?function(){return e}:d(e),g=r(a,u,t?2:1),f=0,h,_,x,y;if('function'!=typeof c)throw TypeError(e+' is not iterable!');if(n(c)){for(h=s(e.length);h>f;f++)if(y=t?g(o(_=e[f])[0],_[1]):g(e[f]),y===l||y===p)return y;}else for(x=c.call(e);!(_=x.next()).done;)if(y=i(x,g,_.value,t),y===l||y===p)return y};t.BREAK=l,t.RETURN=p},function(e,t,a){var r=a(13);e.exports=function(t,e,a,i){try{return i?e(r(a)[0],a[1]):e(a)}catch(a){var n=t['return'];throw void 0!==n&&r(n.call(t)),a}}},function(e,t,a){var r=a(18),i=a(5)('iterator'),n=Array.prototype;e.exports=function(e){return e!==void 0&&(r.Array===e||n[i]===e)}},function(e,t,a){var r=a(54),i=a(5)('iterator'),n=a(18);e.exports=a(12).getIteratorMethod=function(e){if(e!=void 0)return e[i]||e['@@iterator']||n[r(e)]}},function(e){e.exports=function(e,t,a){var r=a===void 0;switch(t.length){case 0:return r?e():e.call(a);case 1:return r?e(t[0]):e.call(a,t[0]);case 2:return r?e(t[0],t[1]):e.call(a,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(a,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(a,t[0],t[1],t[2],t[3]);}return e.apply(a,t)}},function(e,t,a){var r=a(3),i=a(56).set,n=r.MutationObserver||r.WebKitMutationObserver,o=r.process,s=r.Promise,d='process'==a(26)(o);e.exports=function(){var e=function(){var e,r;for(d&&(e=o.domain)&&e.exit();t;){r=t.fn,t=t.next;try{r()}catch(r){throw t?l():a=void 0,r}}a=void 0,e&&e.enter()},t,a,l;if(d)l=function(){o.nextTick(e)};else if(n&&!(r.navigator&&r.navigator.standalone)){var p=!0,u=document.createTextNode('');new n(e).observe(u,{characterData:!0}),l=function(){u.data=p=!p}}else if(s&&s.resolve){var m=s.resolve(void 0);l=function(){m.then(e)}}else l=function(){i.call(r,e)};return function(e){var r={fn:e,next:void 0};a&&(a.next=r),t||(t=r,l()),a=r}}},function(e,t,a){var r=a(3),i=r.navigator;e.exports=i&&i.userAgent||''},function(e,t,a){var r=a(15);e.exports=function(e,t,a){for(var i in t)a&&e[i]?e[i]=t[i]:r(e,i,t[i]);return e}},function(e,t,a){'use strict';var r=a(3),i=a(12),n=a(24),o=a(17),s=a(5)('species');e.exports=function(e){var t='function'==typeof i[e]?i[e]:r[e];o&&t&&!t[s]&&n.f(t,s,{configurable:!0,get:function(){return this}})}},function(e,t,a){var r=a(5)('iterator'),i=!1;try{var n=[7][r]();n['return']=function(){i=!0},Array.from(n,function(){throw 2})}catch(t){}e.exports=function(e,t){if(!t&&!i)return!1;var a=!1;try{var n=[7],o=n[r]();o.next=function(){return{done:a=!0}},n[r]=function(){return o},e(n)}catch(t){}return a}},function(e,t,a){'use strict';var r=a(21),i=a(12),n=a(3),o=a(55),s=a(58);r(r.P+r.R,'Promise',{finally:function(t){var a=o(this,i.Promise||n.Promise),e='function'==typeof t;return this.then(e?function(e){return s(a,t()).then(function(){return e})}:t,e?function(r){return s(a,t()).then(function(){throw r})}:t)}})},function(e,t,a){'use strict';var r=a(21),i=a(38),n=a(57);r(r.S,'Promise',{try:function(e){var t=i.f(this),a=n(e);return(a.e?t.reject:t.resolve)(a.v),t.promise}})},function(e,t,a){'use strict';function r(){i.a.call(this),this.type='Scene',this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,'undefined'!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe',{detail:this}))}a.d(t,'a',function(){return r});var i=a(8);r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isScene:!0,copy:function(e,t){return i.a.prototype.copy.call(this,e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.fog&&(this.fog=e.fog.clone()),null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){var t=i.a.prototype.toJSON.call(this,e);return null!==this.background&&(t.object.background=this.background.toJSON(e)),null!==this.fog&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:'dispose'})}})},function(t,a,r){'use strict';function i(e,t,a,r){this._x=e||0,this._y=t||0,this._z=a||0,this._order=r||i.DefaultOrder}r.d(a,'a',function(){return i});var n=r(27),s=r(0),d=r(6),l=r(4),p=new d.a,u=new n.a;i.RotationOrders=['XYZ','YZX','ZXY','XZY','YXZ','ZYX'],i.DefaultOrder='XYZ',Object.defineProperties(i.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this._onChangeCallback()}}}),Object.assign(i.prototype,{isEuler:!0,set:function(e,t,a,r){return this._x=e,this._y=t,this._z=a,this._order=r||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this},setFromRotationMatrix:function(t,a,r){var i=l.a.clamp,n=t.elements,s=n[0],d=n[4],p=n[8],u=n[1],m=n[5],c=n[9],f=n[2],h=n[6],_=n[10];return a=a||this._order,'XYZ'===a?(this._y=e(i(p,-1,1)),.9999999>g(p)?(this._x=o(-c,_),this._z=o(-d,s)):(this._x=o(h,m),this._z=0)):'YXZ'===a?(this._x=e(-i(c,-1,1)),.9999999>g(c)?(this._y=o(p,_),this._z=o(u,m)):(this._y=o(-f,s),this._z=0)):'ZXY'===a?(this._x=e(i(h,-1,1)),.9999999>g(h)?(this._y=o(-f,_),this._z=o(-d,m)):(this._y=0,this._z=o(u,s))):'ZYX'===a?(this._y=e(-i(f,-1,1)),.9999999>g(f)?(this._x=o(h,_),this._z=o(u,s)):(this._x=0,this._z=o(-d,m))):'YZX'===a?(this._z=e(i(u,-1,1)),.9999999>g(u)?(this._x=o(-c,m),this._y=o(-f,s)):(this._x=0,this._y=o(p,_))):'XZY'===a?(this._z=e(-i(d,-1,1)),.9999999>g(d)?(this._x=o(h,m),this._y=o(p,s)):(this._x=o(-c,_),this._y=0)):console.warn('THREE.Euler: .setFromRotationMatrix() given unsupported order: '+a),this._order=a,!1!==r&&this._onChangeCallback(),this},setFromQuaternion:function(e,t,a){return p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p,t,a)},setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(e){return u.setFromEuler(this),this.setFromQuaternion(u,e)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this},toArray:function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new s.a(this._x,this._y,this._z)},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}})},function(e,t,a){'use strict';function r(){this.mask=1}a.d(t,'a',function(){return r}),Object.assign(r.prototype,{set:function(e){this.mask=0|1<<e},enable:function(e){this.mask|=0|1<<e},enableAll:function(){this.mask=-1},toggle:function(e){this.mask^=0|1<<e},disable:function(e){this.mask&=~(0|1<<e)},disableAll:function(){this.mask=0},test:function(e){return 0!=(this.mask&e.mask)}})},function(e,t,n){'use strict';function o(e){function t(){return null===ze?Ze:1}function n(){st=new R.a(nt),dt=new w.a(nt,st,e),!1===dt.isWebGL2&&(st.get('WEBGL_depth_texture'),st.get('OES_texture_float'),st.get('OES_texture_half_float'),st.get('OES_texture_half_float_linear'),st.get('OES_standard_derivatives'),st.get('OES_element_index_uint'),st.get('ANGLE_instanced_arrays')),st.get('OES_texture_float_linear'),Et=new G.a(nt,st,dt),lt=new B.a(nt,st,dt),lt.scissor(Xe.copy(Qe).multiplyScalar(Ze).floor()),lt.viewport(He.copy(Je).multiplyScalar(Ze).floor()),pt=new F.a(nt),ut=new I.a,mt=new V.a(nt,st,lt,ut,dt,Et,pt),ct=new E.a(nt),gt=new P.a(nt,ct,pt),ft=new U.a(nt,gt,ct,pt),vt=new C.a(nt),ht=new N.a(Ue,st,dt),_t=new O.a,xt=new D.a,yt=new M.a(Ue,lt,ft,Ae),bt=new S.a(nt,st,pt,dt),Tt=new L.a(nt,st,pt,dt),pt.programs=ht.programs,Ue.capabilities=dt,Ue.extensions=st,Ue.properties=ut,Ue.renderLists=_t,Ue.state=lt,Ue.info=pt}function o(e){e.preventDefault(),console.log('THREE.WebGLRenderer: Context Lost.'),Ne=!0}function j(){console.log('THREE.WebGLRenderer: Context Restored.'),Ne=!1,n()}function q(e){var t=e.target;t.removeEventListener('dispose',q),Y(t)}function Y(e){Z(e),ut.remove(e)}function Z(e){var t=ut.get(e).program;e.program=void 0,t!==void 0&&ht.releaseProgram(t)}function J(e,t){e.render(function(e){Ue.renderBufferImmediate(e,t)})}function Q(e,t,a,r){if(!(!1===dt.isWebGL2&&(e.isInstancedMesh||t.isInstancedBufferGeometry)&&null===st.get('ANGLE_instanced_arrays'))){lt.initAttributes();var i=t.attributes,n=r.getAttributes(),o=a.defaultAttributeValues;for(var s in n){var d=n[s];if(0<=d){var l=i[s];if(void 0!==l){var p=l.normalized,u=l.itemSize,m=ct.get(l);if(void 0===m)continue;var c=m.buffer,g=m.type,f=m.bytesPerElement;if(l.isInterleavedBufferAttribute){var h=l.data,_=h.stride,x=l.offset;h&&h.isInstancedInterleavedBuffer?(lt.enableAttributeAndDivisor(d,h.meshPerAttribute),void 0===t.maxInstancedCount&&(t.maxInstancedCount=h.meshPerAttribute*h.count)):lt.enableAttribute(d),nt.bindBuffer(nt.ARRAY_BUFFER,c),nt.vertexAttribPointer(d,u,g,p,_*f,x*f)}else l.isInstancedBufferAttribute?(lt.enableAttributeAndDivisor(d,l.meshPerAttribute),void 0===t.maxInstancedCount&&(t.maxInstancedCount=l.meshPerAttribute*l.count)):lt.enableAttribute(d),nt.bindBuffer(nt.ARRAY_BUFFER,c),nt.vertexAttribPointer(d,u,g,p,0,0)}else if('instanceMatrix'==s){var m=ct.get(e.instanceMatrix);if(void 0===m)continue;var c=m.buffer,g=m.type;lt.enableAttributeAndDivisor(d+0,1),lt.enableAttributeAndDivisor(d+1,1),lt.enableAttributeAndDivisor(d+2,1),lt.enableAttributeAndDivisor(d+3,1),nt.bindBuffer(nt.ARRAY_BUFFER,c),nt.vertexAttribPointer(d+0,4,g,!1,64,0),nt.vertexAttribPointer(d+1,4,g,!1,64,16),nt.vertexAttribPointer(d+2,4,g,!1,64,32),nt.vertexAttribPointer(d+3,4,g,!1,64,48)}else if(void 0!==o){var y=o[s];if(void 0!==y)switch(y.length){case 2:nt.vertexAttrib2fv(d,y);break;case 3:nt.vertexAttrib3fv(d,y);break;case 4:nt.vertexAttrib4fv(d,y);break;default:nt.vertexAttrib1fv(d,y);}}}}lt.disableUnusedAttributes()}}function K(e){Mt.isPresenting()||At&&At(e)}function $(e,t,a,r){if(!1!==e.visible){var n=e.layers.test(t.layers);if(n)if(e.isGroup)a=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)Ce.pushLight(e),e.castShadow&&Ce.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||$e.intersectsSprite(e)){r&&it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(rt);var o=ft.update(e),s=e.material;s.visible&&Fe.push(e,o,s,a,it.z,null)}}else if(e.isImmediateRenderObject)r&&it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(rt),Fe.push(e,null,e.material,a,it.z,null);else if((e.isMesh||e.isLine||e.isPoints)&&(e.isSkinnedMesh&&e.skeleton.frame!==pt.render.frame&&(e.skeleton.update(),e.skeleton.frame=pt.render.frame),!e.frustumCulled||$e.intersectsObject(e))){r&&it.setFromMatrixPosition(e.matrixWorld).applyMatrix4(rt);var o=ft.update(e),s=e.material;if(Array.isArray(s))for(var d=o.groups,p=0,i=d.length;p<i;p++){var l=d[p],u=s[l.materialIndex];u&&u.visible&&Fe.push(e,o,u,a,it.z,l)}else s.visible&&Fe.push(e,o,s,a,it.z,null)}for(var m=e.children,p=0,i=m.length;p<i;p++)$(m[p],t,a,r)}}function ee(e,t,a,r){for(var n=0,i=e.length;n<i;n++){var o=e[n],s=o.object,d=o.geometry,l=r===void 0?o.material:r,p=o.group;if(!a.isArrayCamera)We=null,te(s,t,a,d,l,p);else if(We=a,Mt.enabled&&St.isAvailable())te(s,t,a,d,l,p);else for(var u=a.cameras,m=0,c=u.length,g;m<c;m++)g=u[m],s.layers.test(g.layers)&&(lt.viewport(He.copy(g.viewport)),Ce.setupLights(g),te(s,t,g,d,l,p))}}function te(e,t,a,r,i,n){if(e.onBeforeRender(Ue,t,a,r,i,n),Ce=xt.get(t,We||a),e.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),e.isImmediateRenderObject){lt.setMaterial(i);var o=re(a,t.fog,i,e);ke.geometry=null,ke.program=null,ke.wireframe=!1,J(e,o)}else Ue.renderBufferDirect(a,t.fog,r,i,e,n);e.onAfterRender(Ue,t,a,r,i,n),Ce=xt.get(t,We||a)}function ae(e,t,a){var r=ut.get(e),n=Ce.state.lights,o=Ce.state.shadowsArray,s=n.state.version,d=ht.getParameters(e,n.state,o,t,et.numPlanes,et.numIntersection,a),l=ht.getProgramCacheKey(e,d),p=r.program,u=!0;if(p===void 0)e.addEventListener('dispose',q);else if(p.cacheKey!==l)Z(e);else if(r.lightsStateVersion!==s)r.lightsStateVersion=s,u=!1;else{if(d.shaderID!==void 0)return;u=!1}if(u){if(d.shaderID){var m=c.a[d.shaderID];r.shader={name:e.type,uniforms:Object(h.a)(m.uniforms),vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}}else r.shader={name:e.type,uniforms:e.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader};e.onBeforeCompile(r.shader,Ue),l=ht.getProgramCacheKey(e,d),p=ht.acquireProgram(e,r.shader,d,l),r.program=p,e.program=p}var g=p.getAttributes();if(e.morphTargets){e.numSupportedMorphTargets=0;for(var f=0;f<Ue.maxMorphTargets;f++)0<=g['morphTarget'+f]&&e.numSupportedMorphTargets++}if(e.morphNormals){e.numSupportedMorphNormals=0;for(var f=0;f<Ue.maxMorphNormals;f++)0<=g['morphNormal'+f]&&e.numSupportedMorphNormals++}var i=r.shader.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(r.numClippingPlanes=et.numPlanes,r.numIntersection=et.numIntersection,i.clippingPlanes=et.uniform),r.fog=t,r.needsLights=ve(e),r.lightsStateVersion=s,r.needsLights&&(i.ambientLightColor.value=n.state.ambient,i.lightProbe.value=n.state.probe,i.directionalLights.value=n.state.directional,i.spotLights.value=n.state.spot,i.rectAreaLights.value=n.state.rectArea,i.pointLights.value=n.state.point,i.hemisphereLights.value=n.state.hemi,i.directionalShadowMap.value=n.state.directionalShadowMap,i.directionalShadowMatrix.value=n.state.directionalShadowMatrix,i.spotShadowMap.value=n.state.spotShadowMap,i.spotShadowMatrix.value=n.state.spotShadowMatrix,i.pointShadowMap.value=n.state.pointShadowMap,i.pointShadowMatrix.value=n.state.pointShadowMatrix);var _=r.program.getUniforms(),x=k.a.seqWithValue(_.seq,i);r.uniformsList=x}function re(e,t,a,n){mt.resetTextureUnits();var o=ut.get(a),u=Ce.state.lights;if(tt&&(at||e!==Ge)){var m=e===Ge&&a.id===Ve;et.setState(a.clippingPlanes,a.clipIntersection,a.clipShadows,e,o,m)}a.version===o.__version&&(void 0===o.program?a.needsUpdate=!0:a.fog&&o.fog!==t?a.needsUpdate=!0:o.needsLights&&o.lightsStateVersion!==u.state.version?a.needsUpdate=!0:void 0!==o.numClippingPlanes&&(o.numClippingPlanes!==et.numPlanes||o.numIntersection!==et.numIntersection)&&(a.needsUpdate=!0)),a.version!==o.__version&&(ae(a,t,n),o.__version=a.version);var c=!1,f=!1,h=!1,x=o.program,y=x.getUniforms(),v=o.shader.uniforms;if(lt.useProgram(x.program)&&(c=!0,f=!0,h=!0),a.id!==Ve&&(Ve=a.id,f=!0),c||Ge!==e){if(0<x.numMultiviewViews?St.updateCameraProjectionMatricesUniform(e,y):y.setValue(nt,'projectionMatrix',e.projectionMatrix),dt.logarithmicDepthBuffer&&y.setValue(nt,'logDepthBufFC',2/(i(e.far+1)/r)),Ge!==e&&(Ge=e,f=!0,h=!0),a.isShaderMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.envMap){var b=y.map.cameraPosition;void 0!==b&&b.setValue(nt,it.setFromMatrixPosition(e.matrixWorld))}(a.isMeshPhongMaterial||a.isMeshLambertMaterial||a.isMeshBasicMaterial||a.isMeshStandardMaterial||a.isShaderMaterial)&&y.setValue(nt,'isOrthographic',!0===e.isOrthographicCamera),(a.isMeshPhongMaterial||a.isMeshLambertMaterial||a.isMeshBasicMaterial||a.isMeshStandardMaterial||a.isShaderMaterial||a.skinning)&&(0<x.numMultiviewViews?St.updateCameraViewMatricesUniform(e,y):y.setValue(nt,'viewMatrix',e.matrixWorldInverse))}if(a.skinning){y.setOptional(nt,n,'bindMatrix'),y.setOptional(nt,n,'bindMatrixInverse');var T=n.skeleton;if(T){var E=T.bones;if(dt.floatVertexTextures){if(void 0===T.boneTexture){var M=p(4*E.length);M=d.a.ceilPowerOfTwo(M),M=_(M,4);var S=new Float32Array(4*(M*M));S.set(T.boneMatrices);var w=new l.a(S,M,M,s._19,s.D);T.boneMatrices=S,T.boneTexture=w,T.boneTextureSize=M}y.setValue(nt,'boneTexture',T.boneTexture,mt),y.setValue(nt,'boneTextureSize',T.boneTextureSize)}else y.setOptional(nt,T,'boneMatrices')}}return(f||o.receiveShadow!==n.receiveShadow)&&(o.receiveShadow=n.receiveShadow,y.setValue(nt,'receiveShadow',n.receiveShadow)),f&&(y.setValue(nt,'toneMappingExposure',Ue.toneMappingExposure),y.setValue(nt,'toneMappingWhitePoint',Ue.toneMappingWhitePoint),o.needsLights&&ye(v,h),t&&a.fog&&le(v,t),a.isMeshBasicMaterial?ie(v,a):a.isMeshLambertMaterial?(ie(v,a),pe(v,a)):a.isMeshPhongMaterial?(ie(v,a),a.isMeshToonMaterial?me(v,a):ue(v,a)):a.isMeshStandardMaterial?(ie(v,a),a.isMeshPhysicalMaterial?ge(v,a):ce(v,a)):a.isMeshMatcapMaterial?(ie(v,a),fe(v,a)):a.isMeshDepthMaterial?(ie(v,a),he(v,a)):a.isMeshDistanceMaterial?(ie(v,a),_e(v,a)):a.isMeshNormalMaterial?(ie(v,a),xe(v,a)):a.isLineBasicMaterial?(ne(v,a),a.isLineDashedMaterial&&oe(v,a)):a.isPointsMaterial?se(v,a):a.isSpriteMaterial?de(v,a):a.isShadowMaterial&&(v.color.value.copy(a.color),v.opacity.value=a.opacity),void 0!==v.ltc_1&&(v.ltc_1.value=g.a.LTC_1),void 0!==v.ltc_2&&(v.ltc_2.value=g.a.LTC_2),k.a.upload(nt,o.uniformsList,v,mt),a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)),a.isShaderMaterial&&!0===a.uniformsNeedUpdate&&(k.a.upload(nt,o.uniformsList,v,mt),a.uniformsNeedUpdate=!1),a.isSpriteMaterial&&y.setValue(nt,'center',n.center),0<x.numMultiviewViews?St.updateObjectMatricesUniforms(n,e,y):(y.setValue(nt,'modelViewMatrix',n.modelViewMatrix),y.setValue(nt,'normalMatrix',n.normalMatrix)),y.setValue(nt,'modelMatrix',n.matrixWorld),x}function ie(e,t){e.opacity.value=t.opacity,t.color&&e.diffuse.value.copy(t.color),t.emissive&&e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity),t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap),t.specularMap&&(e.specularMap.value=t.specularMap),t.envMap&&(e.envMap.value=t.envMap,e.flipEnvMap.value=t.envMap.isCubeTexture?-1:1,e.reflectivity.value=t.reflectivity,e.refractionRatio.value=t.refractionRatio,e.maxMipLevel.value=ut.get(t.envMap).__maxMipLevel),t.lightMap&&(e.lightMap.value=t.lightMap,e.lightMapIntensity.value=t.lightMapIntensity),t.aoMap&&(e.aoMap.value=t.aoMap,e.aoMapIntensity.value=t.aoMapIntensity);var a;t.map?a=t.map:t.specularMap?a=t.specularMap:t.displacementMap?a=t.displacementMap:t.normalMap?a=t.normalMap:t.bumpMap?a=t.bumpMap:t.roughnessMap?a=t.roughnessMap:t.metalnessMap?a=t.metalnessMap:t.alphaMap?a=t.alphaMap:t.emissiveMap&&(a=t.emissiveMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),!0===a.matrixAutoUpdate&&a.updateMatrix(),e.uvTransform.value.copy(a.matrix))}function ne(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity}function oe(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function se(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*Ze,e.scale.value=.5*Ye,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);var a;t.map?a=t.map:t.alphaMap&&(a=t.alphaMap),a!==void 0&&(!0===a.matrixAutoUpdate&&a.updateMatrix(),e.uvTransform.value.copy(a.matrix))}function de(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);var a;t.map?a=t.map:t.alphaMap&&(a=t.alphaMap),a!==void 0&&(!0===a.matrixAutoUpdate&&a.updateMatrix(),e.uvTransform.value.copy(a.matrix))}function le(e,t){e.fogColor.value.copy(t.color),t.isFog?(e.fogNear.value=t.near,e.fogFar.value=t.far):t.isFogExp2&&(e.fogDensity.value=t.density)}function pe(e,t){t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap)}function ue(e,t){e.specular.value.copy(t.specular),e.shininess.value=_(t.shininess,1e-4),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===s.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===s.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function me(e,t){ue(e,t),t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function ce(e,t){e.roughness.value=t.roughness,e.metalness.value=t.metalness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap),t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===s.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===s.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function ge(e,t){ce(e,t),e.reflectivity.value=t.reflectivity,e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.sheen&&e.sheen.value.copy(t.sheen),t.clearcoatNormalMap&&(e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),e.clearcoatNormalMap.value=t.clearcoatNormalMap,t.side===s.h&&e.clearcoatNormalScale.value.negate()),e.transparency.value=t.transparency}function fe(e,t){t.matcap&&(e.matcap.value=t.matcap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===s.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===s.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function he(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function _e(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),e.referencePosition.value.copy(t.referencePosition),e.nearDistance.value=t.nearDistance,e.farDistance.value=t.farDistance}function xe(e,t){t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===s.h&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===s.h&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function ye(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.pointLights.needsUpdate=t,e.spotLights.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ve(e){return e.isMeshLambertMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}e=e||{};var be=e.canvas===void 0?document.createElementNS('http://www.w3.org/1999/xhtml','canvas'):e.canvas,Te=e.context===void 0?null:e.context,Ee=e.alpha!==void 0&&e.alpha,Me=!(e.depth!==void 0)||e.depth,Se=!(e.stencil!==void 0)||e.stencil,we=e.antialias!==void 0&&e.antialias,Ae=!(e.premultipliedAlpha!==void 0)||e.premultipliedAlpha,Re=e.preserveDrawingBuffer!==void 0&&e.preserveDrawingBuffer,Pe=e.powerPreference===void 0?'default':e.powerPreference,Le=e.failIfMajorPerformanceCaveat!==void 0&&e.failIfMajorPerformanceCaveat,Fe=null,Ce=null;this.domElement=be,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=s.R,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var Ue=this,Ne=!1,Ie=null,Oe=0,De=0,ze=null,Be=null,Ve=-1,ke={geometry:null,program:null,wireframe:!1},Ge=null,We=null,He=new v.a,Xe=new v.a,je=null,qe=be.width,Ye=be.height,Ze=1,Je=new v.a(0,0,qe,Ye),Qe=new v.a(0,0,qe,Ye),Ke=!1,$e=new u.a,et=new A.a,tt=!1,at=!1,rt=new m.a,it=new y.a,nt;try{var ot={alpha:Ee,depth:Me,stencil:Se,antialias:we,premultipliedAlpha:Ae,preserveDrawingBuffer:Re,powerPreference:Pe,failIfMajorPerformanceCaveat:Le,xrCompatible:!0};if(be.addEventListener('webglcontextlost',o,!1),be.addEventListener('webglcontextrestored',j,!1),nt=Te||be.getContext('webgl',ot)||be.getContext('experimental-webgl',ot),null===nt)if(null!==be.getContext('webgl'))throw new Error('Error creating WebGL context with your selected attributes.');else throw new Error('Error creating WebGL context.');void 0===nt.getShaderPrecisionFormat&&(nt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error('THREE.WebGLRenderer: '+e.message),e}var st,dt,lt,pt,ut,mt,ct,gt,ft,ht,_t,xt,yt,vt,bt,Tt,Et;n();var Mt='undefined'!=typeof navigator&&'xr'in navigator?new X.a(Ue,nt):new H.a(Ue);this.vr=Mt;var St=new W.a(Ue,nt),wt=new z.a(Ue,ft,dt.maxTextureSize);this.shadowMap=wt,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){var e=st.get('WEBGL_lose_context');e&&e.loseContext()},this.forceContextRestore=function(){var e=st.get('WEBGL_lose_context');e&&e.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(e){void 0===e||(Ze=e,this.setSize(qe,Ye,!1))},this.getSize=function(e){return void 0===e&&(console.warn('WebGLRenderer: .getsize() now requires a Vector2 as an argument'),e=new x.a),e.set(qe,Ye)},this.setSize=function(e,t,a){return Mt.isPresenting()?void console.warn('THREE.WebGLRenderer: Can\'t change size while VR device is presenting.'):void(qe=e,Ye=t,be.width=f(e*Ze),be.height=f(t*Ze),!1!==a&&(be.style.width=e+'px',be.style.height=t+'px'),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return void 0===e&&(console.warn('WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'),e=new x.a),e.set(qe*Ze,Ye*Ze).floor()},this.setDrawingBufferSize=function(e,t,a){qe=e,Ye=t,Ze=a,be.width=f(e*a),be.height=f(t*a),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return void 0===e&&(console.warn('WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'),e=new v.a),e.copy(He)},this.getViewport=function(e){return e.copy(Je)},this.setViewport=function(e,t,a,r){e.isVector4?Je.set(e.x,e.y,e.z,e.w):Je.set(e,t,a,r),lt.viewport(He.copy(Je).multiplyScalar(Ze).floor())},this.getScissor=function(e){return e.copy(Qe)},this.setScissor=function(e,t,a,r){e.isVector4?Qe.set(e.x,e.y,e.z,e.w):Qe.set(e,t,a,r),lt.scissor(Xe.copy(Qe).multiplyScalar(Ze).floor())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(e){lt.setScissorTest(Ke=e)},this.getClearColor=function(){return yt.getClearColor()},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(e,t,a){var r=0;(e===void 0||e)&&(r|=nt.COLOR_BUFFER_BIT),(t===void 0||t)&&(r|=nt.DEPTH_BUFFER_BIT),(a===void 0||a)&&(r|=nt.STENCIL_BUFFER_BIT),nt.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){be.removeEventListener('webglcontextlost',o,!1),be.removeEventListener('webglcontextrestored',j,!1),_t.dispose(),xt.dispose(),ut.dispose(),ft.dispose(),Mt.dispose(),Rt.stop()},this.renderBufferImmediate=function(e,t){lt.initAttributes();var a=ut.get(e);e.hasPositions&&!a.position&&(a.position=nt.createBuffer()),e.hasNormals&&!a.normal&&(a.normal=nt.createBuffer()),e.hasUvs&&!a.uv&&(a.uv=nt.createBuffer()),e.hasColors&&!a.color&&(a.color=nt.createBuffer());var r=t.getAttributes();e.hasPositions&&(nt.bindBuffer(nt.ARRAY_BUFFER,a.position),nt.bufferData(nt.ARRAY_BUFFER,e.positionArray,nt.DYNAMIC_DRAW),lt.enableAttribute(r.position),nt.vertexAttribPointer(r.position,3,nt.FLOAT,!1,0,0)),e.hasNormals&&(nt.bindBuffer(nt.ARRAY_BUFFER,a.normal),nt.bufferData(nt.ARRAY_BUFFER,e.normalArray,nt.DYNAMIC_DRAW),lt.enableAttribute(r.normal),nt.vertexAttribPointer(r.normal,3,nt.FLOAT,!1,0,0)),e.hasUvs&&(nt.bindBuffer(nt.ARRAY_BUFFER,a.uv),nt.bufferData(nt.ARRAY_BUFFER,e.uvArray,nt.DYNAMIC_DRAW),lt.enableAttribute(r.uv),nt.vertexAttribPointer(r.uv,2,nt.FLOAT,!1,0,0)),e.hasColors&&(nt.bindBuffer(nt.ARRAY_BUFFER,a.color),nt.bufferData(nt.ARRAY_BUFFER,e.colorArray,nt.DYNAMIC_DRAW),lt.enableAttribute(r.color),nt.vertexAttribPointer(r.color,3,nt.FLOAT,!1,0,0)),lt.disableUnusedAttributes(),nt.drawArrays(nt.TRIANGLES,0,e.count),e.count=0},this.renderBufferDirect=function(e,a,r,i,n,o){var d=n.isMesh&&0>n.matrixWorld.determinant();lt.setMaterial(i,d);var l=re(e,a,i,n),p=!1;(ke.geometry!==r.id||ke.program!==l.id||ke.wireframe!==(!0===i.wireframe))&&(ke.geometry=r.id,ke.program=l.id,ke.wireframe=!0===i.wireframe,p=!0),n.morphTargetInfluences&&(vt.update(n,r,i,l),p=!0);var u=r.index,m=r.attributes.position;if((null===u||0!==u.count)&&void 0!==m&&0!==m.count){var c=1;!0===i.wireframe&&(u=gt.getWireframeAttribute(r),c=2);var g=bt,f;null!==u&&(f=ct.get(u),g=Tt,g.setIndex(f)),p&&(Q(n,r,i,l),null!==u&&nt.bindBuffer(nt.ELEMENT_ARRAY_BUFFER,f.buffer));var h=Infinity;null===u?void 0!==m&&(h=m.count):h=u.count;var x=r.drawRange.start*c,y=r.drawRange.count*c,v=null===o?0:o.start*c,b=null===o?Infinity:o.count*c,E=_(x,v),M=T(h,x+y,v+b)-1,S=_(0,M-E+1);if(0!==S){if(n.isMesh){if(!0===i.wireframe)lt.setLineWidth(i.wireframeLinewidth*t()),g.setMode(nt.LINES);else switch(n.drawMode){case s._63:g.setMode(nt.TRIANGLES);break;case s._62:g.setMode(nt.TRIANGLE_STRIP);break;case s._61:g.setMode(nt.TRIANGLE_FAN);}}else if(n.isLine){var w=i.linewidth;void 0===w&&(w=1),lt.setLineWidth(w*t()),n.isLineSegments?g.setMode(nt.LINES):n.isLineLoop?g.setMode(nt.LINE_LOOP):g.setMode(nt.LINE_STRIP)}else n.isPoints?g.setMode(nt.POINTS):n.isSprite&&g.setMode(nt.TRIANGLES);n.isInstancedMesh?g.renderInstances(r,E,S,n.count):r.isInstancedBufferGeometry?g.renderInstances(r,E,S,r.maxInstancedCount):g.render(E,S)}}},this.compile=function(e,t){Ce=xt.get(e,t),Ce.init(),e.traverse(function(e){e.isLight&&(Ce.pushLight(e),e.castShadow&&Ce.pushShadow(e))}),Ce.setupLights(t),e.traverse(function(t){if(t.material)if(Array.isArray(t.material))for(var a=0;a<t.material.length;a++)ae(t.material[a],e.fog,t);else ae(t.material,e.fog,t)})};var At=null,Rt=new b.a;Rt.setAnimationLoop(K),'undefined'!=typeof window&&Rt.setContext(window),this.setAnimationLoop=function(e){At=e,Mt.setAnimationLoop(e),Rt.start()},this.render=function(e,t){var a,r;if(void 0!==arguments[2]&&(console.warn('THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.'),a=arguments[2]),void 0!==arguments[3]&&(console.warn('THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.'),r=arguments[3]),!(t&&t.isCamera))return void console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');if(!Ne){ke.geometry=null,ke.program=null,ke.wireframe=!1,Ve=-1,Ge=null,!0===e.autoUpdate&&e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),Mt.enabled&&Mt.isPresenting()&&(t=Mt.getCamera(t)),Ce=xt.get(e,t),Ce.init(),e.onBeforeRender(Ue,e,t,a||ze),rt.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),$e.setFromMatrix(rt),at=this.localClippingEnabled,tt=et.init(this.clippingPlanes,at,t),Fe=_t.get(e,t),Fe.init(),$(e,t,0,Ue.sortObjects),!0===Ue.sortObjects&&Fe.sort(),tt&&et.beginShadows();var i=Ce.state.shadowsArray;wt.render(i,e,t),Ce.setupLights(t),tt&&et.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==a&&this.setRenderTarget(a),Mt.enabled&&St.isAvailable()&&St.attachCamera(t),yt.render(Fe,e,t,r);var n=Fe.opaque,o=Fe.transparent;if(e.overrideMaterial){var s=e.overrideMaterial;n.length&&ee(n,e,t,s),o.length&&ee(o,e,t,s)}else n.length&&ee(n,e,t),o.length&&ee(o,e,t);e.onAfterRender(Ue,e,t),null!==ze&&(mt.updateRenderTargetMipmap(ze),mt.updateMultisampleRenderTarget(ze)),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1),Mt.enabled&&(St.isAvailable()&&St.detachCamera(t),Mt.submitFrame()),Fe=null,Ce=null}},this.setFramebuffer=function(e){Ie!==e&&null===ze&&nt.bindFramebuffer(nt.FRAMEBUFFER,e),Ie=e},this.getActiveCubeFace=function(){return Oe},this.getActiveMipmapLevel=function(){return De},this.getRenderTarget=function(){return ze},this.setRenderTarget=function(e,t,a){ze=e,Oe=t,De=a,e&&void 0===ut.get(e).__webglFramebuffer&&mt.setupRenderTarget(e);var r=Ie,i=!1;if(e){var n=ut.get(e).__webglFramebuffer;e.isWebGLRenderTargetCube?(r=n[t||0],i=!0):e.isWebGLMultisampleRenderTarget?r=ut.get(e).__webglMultisampledFramebuffer:r=n,He.copy(e.viewport),Xe.copy(e.scissor),je=e.scissorTest}else He.copy(Je).multiplyScalar(Ze).floor(),Xe.copy(Qe).multiplyScalar(Ze).floor(),je=Ke;if(Be!==r&&(nt.bindFramebuffer(nt.FRAMEBUFFER,r),Be=r),lt.viewport(He),lt.scissor(Xe),lt.setScissorTest(je),i){var o=ut.get(e.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+(t||0),o.__webglTexture,a||0)}},this.readRenderTargetPixels=function(e,t,a,r,i,n,o){if(!(e&&e.isWebGLRenderTarget))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');var d=ut.get(e).__webglFramebuffer;if(e.isWebGLRenderTargetCube&&void 0!==o&&(d=d[o]),d){var l=!1;d!==Be&&(nt.bindFramebuffer(nt.FRAMEBUFFER,d),l=!0);try{var p=e.texture,u=p.format,m=p.type;if(u!==s._19&&Et.convert(u)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.');if(m!==s._66&&Et.convert(m)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(m===s.D&&(dt.isWebGL2||st.get('OES_texture_float')||st.get('WEBGL_color_buffer_float')))&&!(m===s.I&&(dt.isWebGL2?st.get('EXT_color_buffer_float'):st.get('EXT_color_buffer_half_float'))))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');nt.checkFramebufferStatus(nt.FRAMEBUFFER)===nt.FRAMEBUFFER_COMPLETE?0<=t&&t<=e.width-r&&0<=a&&a<=e.height-i&&nt.readPixels(t,a,r,i,Et.convert(u),Et.convert(m),n):console.error('THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.')}finally{l&&nt.bindFramebuffer(nt.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(e,t,r){r===void 0&&(r=0);var i=a(2,-r),n=f(t.image.width*i),o=f(t.image.height*i),s=Et.convert(t.format);mt.setTexture2D(t,0),nt.copyTexImage2D(nt.TEXTURE_2D,r,s,e.x,e.y,n,o,0),lt.unbindTexture()},this.copyTextureToTexture=function(e,t,a,r){var i=t.image.width,n=t.image.height,o=Et.convert(a.format),s=Et.convert(a.type);mt.setTexture2D(a,0),t.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,r||0,e.x,e.y,i,n,o,s,t.image.data):nt.texSubImage2D(nt.TEXTURE_2D,r||0,e.x,e.y,o,s,t.image),lt.unbindTexture()},this.initTexture=function(e){mt.setTexture2D(e,0),lt.unbindTexture()},'undefined'!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe',{detail:this}))}n.d(t,'a',function(){return o});var s=n(1),d=n(4),l=n(122),u=n(59),m=n(6),c=n(60),g=n(62),h=n(29),x=n(2),y=n(0),v=n(14),b=n(41),E=n(247),M=n(248),S=n(256),w=n(257),A=n(258),R=n(259),P=n(260),L=n(261),F=n(262),C=n(263),U=n(264),N=n(265),I=n(271),O=n(272),D=n(273),z=n(275),B=n(280),V=n(281),k=n(67),G=n(282),W=n(283),H=n(285),X=n(286)},function(e,t,a){'use strict';function r(e,t,a,r,o,s,d,l,p,u,m,c){i.a.call(this,null,s,d,l,p,u,r,o,m,c),this.image={data:e||null,width:t||1,height:a||1},this.magFilter=p===void 0?n._1:p,this.minFilter=u===void 0?n._1:u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}a.d(t,'a',function(){return r});var i=a(10),n=a(1);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isDataTexture=!0},function(e,t,a){'use strict';a.d(t,'a',function(){return r});var r={getDataURL:function(e){var t;if('undefined'==typeof HTMLCanvasElement)return e.src;if(e instanceof HTMLCanvasElement)t=e;else{void 0===i&&(i=document.createElementNS('http://www.w3.org/1999/xhtml','canvas')),i.width=e.width,i.height=e.height;var a=i.getContext('2d');e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),t=i}return 2048<t.width||2048<t.height?t.toDataURL('image/jpeg',.6):t.toDataURL('image/png')}},i},function(e,t){'use strict';t.a=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`},function(e,t){'use strict';t.a=`
vec3 transformed = vec3( position );
`},function(e,t){'use strict';t.a=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`},function(e,t){'use strict';t.a=`

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	return vec2( -1.04, 1.04 ) * a004 + r.zw;

}

float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

#if defined ( PHYSICALLY_CORRECT_LIGHTS )

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	// this is intended to be used on spot and point lights who are represented as luminous intensity
	// but who must be converted to luminous irradiance for surface lighting calculation
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

#else

	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

#endif

}

vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotLH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );

	return ( 1.0 - specularColor ) * fresnel + specularColor;

} // validated

vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {

	// See F_Schlick
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;

	return Fr * fresnel + F0;

}


// Microfacet Models for Refraction through Rough Surfaces - equation (34)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {

	// geometry term (normalized) = G(l)⋅G(v) / 4(n⋅l)(n⋅v)
	// also see #12151

	float a2 = pow2( alpha );

	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );

	return 1.0 / ( gl * gv );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	// dotNL and dotNV are explicitly swapped. This is not a mistake.
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( incidentLight.direction + viewDir );

	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( G * D );

} // validated

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

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

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );

	return specularColor * brdf.x + brdf.y;

} // validated

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;

	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}

float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L94
float D_Charlie(float roughness, float NoH) {
	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125); // 2^(-14/2), so sin2h^2 > 0 in fp16
	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L136
float V_Neubelt(float NoV, float NoL) {
	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}

vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {

	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;

	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );

	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );

}

#endif
`},function(e,t){'use strict';t.a=`
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

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 );

		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;

	}

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;

		}

		if ( clipped ) discard;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0

	#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
		varying vec3 vViewPosition;
	#endif

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	varying vec3 vViewPosition;
#endif
`},function(e,t){'use strict';t.a=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
`},function(e,t){'use strict';t.a=`
#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	float distance = dot( planeNormal, point - pointOnPlane );

	return - distance * planeNormal + point;

}

float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return sign( dot( point - pointOnPlane, planeNormal ) );

}

vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;

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
`},function(e,t){'use strict';t.a=`
#ifdef ENVMAP_TYPE_CUBE_UV

#define cubeUV_textureSize (1024.0)

int getFaceFromDirection(vec3 direction) {
	vec3 absDirection = abs(direction);
	int face = -1;
	if( absDirection.x > absDirection.z ) {
		if(absDirection.x > absDirection.y )
			face = direction.x > 0.0 ? 0 : 3;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	else {
		if(absDirection.z > absDirection.y )
			face = direction.z > 0.0 ? 2 : 5;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	return face;
}
#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))

vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
	float dxRoughness = dFdx(roughness);
	float dyRoughness = dFdy(roughness);
	vec3 dx = dFdx( vec * scale * dxRoughness );
	vec3 dy = dFdy( vec * scale * dyRoughness );
	float d = max( dot( dx, dx ), dot( dy, dy ) );
	// Clamp the value to the max mip level counts. hard coded to 6 mips
	d = clamp(d, 1.0, cubeUV_rangeClamp);
	float mipLevel = 0.5 * log2(d);
	return vec2(floor(mipLevel), fract(mipLevel));
}

#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)

vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
	float a = 16.0 * cubeUV_rcpTextureSize;

	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
	// float powScale = exp2(roughnessLevel + mipLevel);
	float powScale = exp2_packed.x * exp2_packed.y;
	// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);
	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
	// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);
	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;

	bool bRes = mipLevel == 0.0;
	scale =  bRes && (scale < a) ? a : scale;

	vec3 r;
	vec2 offset;
	int face = getFaceFromDirection(direction);

	float rcpPowScale = 1.0 / powScale;

	if( face == 0) {
		r = vec3(direction.x, -direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 1) {
		r = vec3(direction.y, direction.x, direction.z);
		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 2) {
		r = vec3(direction.z, direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 3) {
		r = vec3(direction.x, direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else if( face == 4) {
		r = vec3(direction.y, direction.x, -direction.z);
		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else {
		r = vec3(direction.z, -direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	r = normalize(r);
	float texelOffset = 0.5 * cubeUV_rcpTextureSize;
	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
	vec2 base = offset + vec2( texelOffset );
	return base + s * ( scale - 2.0 * texelOffset );
}

#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)

vec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {
	float roughnessVal = roughness* cubeUV_maxLods3;
	float r1 = floor(roughnessVal);
	float r2 = r1 + 1.0;
	float t = fract(roughnessVal);
	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
	float s = mipInfo.y;
	float level0 = mipInfo.x;
	float level1 = level0 + 1.0;
	level1 = level1 > 5.0 ? 5.0 : level1;

	// round to nearest mipmap if we are not interpolating.
	level0 += min( floor( s + 0.5 ), 5.0 );

	// Tri linear interpolation.
	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));

	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));

	vec4 result = mix(color10, color20, t);

	return vec4(result.rgb, 1.0);
}

#endif
`},function(e,t){'use strict';t.a=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	transformedNormal = mat3( instanceMatrix ) * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = normalMatrix * objectTangent;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`},function(e,t){'use strict';t.a=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`},function(e,t){'use strict';t.a=`
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
//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
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
	D = min( floor( D ) / 255.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
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
`},function(e,t){'use strict';t.a=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;
		
		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		}  else {

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

	#elif defined( ENVMAP_TYPE_EQUIREC )

		vec2 sampleUV;

		reflectVec = normalize( reflectVec );

		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

		vec4 envColor = texture2D( envMap, sampleUV );

	#elif defined( ENVMAP_TYPE_SPHERE )

		reflectVec = normalize( reflectVec );

		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );

		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	envColor = envMapTexelToLinear( envColor );

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	fogDepth = -mvPosition.z;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef TOON

	uniform sampler2D gradientMap;

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

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_LIGHTMAP

	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`},function(e,t){'use strict';t.a=`
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

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif
	}

#endif

/*
#if NUM_RECT_AREA_LIGHTS > 0

	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		// TODO (abelnation): implement

	}

#endif
*/

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );

		#endif

	}

#endif
`},function(e,t){'use strict';t.a=`
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

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {

	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI;

	#endif

	return irradiance;

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
		float shadowCameraNear;
		float shadowCameraFar;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );

		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );

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

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {

		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );

		if ( angleCos > spotLight.coneCos ) {

			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );

			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;

		} else {

			directLight.color = vec3( 0.0 );
			directLight.visible = false;

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

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {

		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			irradiance *= PI;

		#endif

		return irradiance;

	}

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

			#else

				// force the bias high to get the last LOD level as it is the most blurred.
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );

		#else

			vec4 envMapColor = vec4( 0.0 );

		#endif

		return PI * envMapColor.rgb * envMapIntensity;

	}

	// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {

		float maxMIPLevelScalar = float( maxMIPLevel );

		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

		  vec3 reflectVec = reflect( -viewDir, normal );

		  // Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

		#else

		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );

		#elif defined( ENVMAP_TYPE_EQUIREC )

			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_SPHERE )

			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`},function(e,t){'use strict';t.a=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`},function(e,t){'use strict';t.a=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct BlinnPhongMaterial {

	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	#ifdef TOON

		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	#else

		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
		vec3 irradiance = dotNL * directLight.color;

	#endif

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`},function(e,t){'use strict';t.a=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );

#ifdef REFLECTIVITY

	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );

#endif

#ifdef CLEARCOAT

	material.clearcoat = saturate( clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );

#endif
#ifdef USE_SHEEN

	material.sheenColor = sheen;

#endif
`},function(e,t){'use strict';t.a=`
struct PhysicalMaterial {

	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;

#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif

};

#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04

// Clear coat directional hemishperical reflectance (this approximation should be improved)
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {

	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );

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
		float roughness = material.specularRoughness;

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

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	#ifdef CLEARCOAT

		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = ccDotNL * directLight.color;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			ccIrradiance *= PI; // punctual light

		#endif

		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

	#else

		float clearcoatDHR = 0.0;

	#endif

	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif

	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef CLEARCOAT

		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

	#else

		float clearcoatDHR = 0.0;

	#endif

	float clearcoatInv = 1.0 - clearcoatDHR;

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
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
`},function(e,t){'use strict';t.a=`
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

#ifdef CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointDirectLightIrradiance( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotDirectLightIrradiance( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		}

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`},function(e,t){'use strict';t.a=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );

	#ifdef CLEARCOAT

		clearcoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`},function(e,t){'use strict';t.a=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifndef USE_MORPHNORMALS

	uniform float morphTargetInfluences[ 8 ];

	#else

	uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;
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
`},function(e,t){'use strict';t.a=`
#ifdef FLAT_SHADED

	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`},function(e,t){'use strict';t.a=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Per-Pixel Tangent Space Normal Mapping
	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );

		mat3 tsn = mat3( S, T, N );

		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		return normalize( tsn * mapN );

	}

#endif
`},function(e,t){'use strict';t.a=`
#ifdef CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );

	#endif

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`},function(e,t){'use strict';t.a=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
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
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpack2HalfToRGBA( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`},function(e,t){'use strict';t.a=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`},function(e,t){'use strict';t.a=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`},function(e,t){'use strict';t.a=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

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

		return unpack2HalfToRGBA( texture2D( shadow, uv ) );

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

	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {

		const vec2 offset = vec2( 0.0, 1.0 );

		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;

		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );

		vec2 f = fract( uv * size + 0.5 );

		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );

		return c;

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

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;

			shadow = (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
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
`},function(e,t){'use strict';t.a=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`},function(e,t){'use strict';t.a=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLights[ i ];
		shadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLights[ i ];
		shadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLights[ i ];
		shadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`},function(e,t){'use strict';t.a=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`},function(e,t){'use strict';t.a=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`},function(e,t){'use strict';t.a=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicgames.com/archives/75
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {

	// John Hable's filmic operator from Uncharted 2 video game
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );

}

// source: http://filmicgames.com/archives/75
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/
vec3 ACESFilmicToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );

}
`},function(e,t){'use strict';t.a=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`},function(e,t){'use strict';t.a=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = uv2;

#endif
`},function(e,t){'use strict';t.a=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`},function(e,t){'use strict';t.a=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`},function(e,t){'use strict';t.a=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`},function(e,t){'use strict';t.a=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = mapTexelToLinear( texColor );
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`},function(e,t){'use strict';t.a=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`},function(e,t){'use strict';t.a=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

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

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );

	#endif

}
`},function(e,t){'use strict';t.a=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

}
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV;

	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`},function(e,t){'use strict';t.a=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`},function(e,t){'use strict';t.a=`
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

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>

	vLineDistance = scale * lineDistance;

	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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

		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
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
	#include <skinbase_vertex>

	#ifdef USE_ENVMAP

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`},function(e,t){'use strict';t.a=`
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
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

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
#define MATCAP

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
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

	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

		vNormal = normalize( transformedNormal );

	#endif

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
`},function(e,t){'use strict';t.a=`
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`},function(e,t){'use strict';t.a=`
#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
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

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

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
`},function(e,t){'use strict';t.a=`
#define STANDARD

#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSPARENCY
	uniform float transparency;
#endif

#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif

#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_normalmap_pars_fragment>
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

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	// this is a stub for the transparency model
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`},function(e,t){'use strict';t.a=`
#define STANDARD

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
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

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

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
`},function(e,t){'use strict';t.a=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <packing>
#include <uv_pars_fragment>
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
`},function(e,t){'use strict';t.a=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

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
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
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
`},function(e,t){'use strict';t.a=`
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

	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`},function(e,t){'use strict';t.a=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`},function(e,t){'use strict';t.a=`
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
`},function(e,t,a){'use strict';function r(e){function t(t,a){var r=t.array,i=t.usage,n=e.createBuffer();e.bindBuffer(a,n),e.bufferData(a,r,i),t.onUploadCallback();var o=e.FLOAT;return r instanceof Float32Array?o=e.FLOAT:r instanceof Float64Array?console.warn('THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.'):r instanceof Uint16Array?o=e.UNSIGNED_SHORT:r instanceof Int16Array?o=e.SHORT:r instanceof Uint32Array?o=e.UNSIGNED_INT:r instanceof Int32Array?o=e.INT:r instanceof Int8Array?o=e.BYTE:r instanceof Uint8Array&&(o=e.UNSIGNED_BYTE),{buffer:n,type:o,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version}}function a(t,a,r){var i=a.array,n=a.updateRange;e.bindBuffer(r,t),-1===n.count?e.bufferSubData(r,0,i):(e.bufferSubData(r,n.offset*i.BYTES_PER_ELEMENT,i.subarray(n.offset,n.offset+n.count)),n.count=-1)}var r=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);var a=r.get(t);a&&(e.deleteBuffer(a.buffer),r.delete(t))},update:function(e,i){e.isInterleavedBufferAttribute&&(e=e.data);var n=r.get(e);n===void 0?r.set(e,t(e,i)):n.version<e.version&&(a(n.buffer,e,i),n.version=e.version)}}}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e,t,a,r){function m(t,r,d,m){var v=r.background,b=e.vr,T=b.getSession&&b.getSession();if(T&&'additive'===T.environmentBlendMode&&(v=null),null===v?(c(g,f),h=null,_=0):v&&v.isColor&&(c(v,1),m=!0,h=null,_=0),(e.autoClear||m)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),v&&(v.isCubeTexture||v.isWebGLRenderTargetCube)){void 0===y&&(y=new l.a(new n.a(1,1,1),new s.a({type:'BackgroundCubeMaterial',uniforms:Object(u.a)(p.a.cube.uniforms),vertexShader:p.a.cube.vertexShader,fragmentShader:p.a.cube.fragmentShader,side:i.h,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute('normal'),y.geometry.deleteAttribute('uv'),y.onBeforeRender=function(e,t,a){this.matrixWorld.copyPosition(a.matrixWorld)},Object.defineProperty(y.material,'map',{get:function(){return this.uniforms.tCube.value}}),a.update(y));var E=v.isWebGLRenderTargetCube?v.texture:v;y.material.uniforms.tCube.value=E,y.material.uniforms.tFlip.value=v.isWebGLRenderTargetCube?1:-1,(h!==v||_!==E.version)&&(y.material.needsUpdate=!0,h=v,_=E.version),t.unshift(y,y.geometry,y.material,0,0,null)}else v&&v.isTexture&&(void 0===x&&(x=new l.a(new o.a(2,2),new s.a({type:'BackgroundMaterial',uniforms:Object(u.a)(p.a.background.uniforms),vertexShader:p.a.background.vertexShader,fragmentShader:p.a.background.fragmentShader,side:i.E,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute('normal'),Object.defineProperty(x.material,'map',{get:function(){return this.uniforms.t2D.value}}),a.update(x)),x.material.uniforms.t2D.value=v,!0===v.matrixAutoUpdate&&v.updateMatrix(),x.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||_!==v.version)&&(x.material.needsUpdate=!0,h=v,_=v.version),t.unshift(x,x.geometry,x.material,0,0,null))}function c(e,a){t.buffers.color.setClear(e.r,e.g,e.b,a,r)}var g=new d.a(0),f=0,h=null,_=0,x,y;return{getClearColor:function(){return g},setClearColor:function(e,t){g.set(e),f=t===void 0?1:t,c(g,f)},getClearAlpha:function(){return f},setClearAlpha:function(e){f=e,c(g,f)},render:m}}a.d(t,'a',function(){return r});var i=a(1),n=a(249),o=a(66),s=a(42),d=a(11),l=a(43),p=a(60),u=a(29)},function(e,t,a){'use strict';a.d(t,'a',function(){return d});var r=a(63),i=a(19),n=a(20),o=a(0);class s extends r.a{constructor(e,t,a,r,i,n){super(),this.type='BoxGeometry',this.parameters={width:e,height:t,depth:a,widthSegments:r,heightSegments:i,depthSegments:n},this.fromBufferGeometry(new d(e,t,a,r,i,n)),this.mergeVertices()}}class d extends i.a{constructor(e,t,a,r,i,s){function d(e,t,r,i,n,s,u,f,v,T,E){var M=v+1,S=0,w=0,A=new o.a,R,P;for(P=0;P<T+1;P++){var L=P*(u/T)-u/2;for(R=0;R<M;R++){var y=R*(s/v)-s/2;A[e]=y*i,A[t]=L*n,A[r]=f/2,m.push(A.x,A.y,A.z),A[e]=0,A[t]=0,A[r]=0<f?1:-1,c.push(A.x,A.y,A.z),g.push(R/v),g.push(1-P/T),S+=1}}for(P=0;P<T;P++)for(R=0;R<v;R++){var x=h+R+M*P,a=h+R+M*(P+1),b=h+(R+1)+M*(P+1),F=h+(R+1)+M*P;p.push(x,a,F),p.push(a,b,F),w+=6}l.addGroup(_,w,E),_+=w,h+=S}super(),this.type='BoxBufferGeometry',this.parameters={width:e,height:t,depth:a,widthSegments:r,heightSegments:i,depthSegments:s};var l=this;e=e||1,t=t||1,a=a||1,r=f(r)||1,i=f(i)||1,s=f(s)||1;var p=[],m=[],c=[],g=[],h=0,_=0;d('z','y','x',-1,-1,a,t,e,s,i,0),d('z','y','x',1,-1,a,t,-e,s,i,1),d('x','z','y',1,1,e,a,t,r,s,2),d('x','z','y',1,-1,e,a,-t,r,s,3),d('x','y','z',1,-1,e,t,a,r,i,4),d('x','y','z',-1,-1,e,t,-a,r,i,5),this.setIndex(p),this.setAttribute('position',new n.b(m,3)),this.setAttribute('normal',new n.b(c,3)),this.setAttribute('uv',new n.b(g,2))}}},function(e,t,a){'use strict';function r(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}a.d(t,'a',function(){return r});var n=a(2);Object.assign(r.prototype,{computeGroups:function(e){for(var t=[],a=void 0,r=e.faces,n=0,i,o;n<r.length;n++)o=r[n],o.materialIndex!==a&&(a=o.materialIndex,void 0!=i&&(i.count=3*n-i.start,t.push(i)),i={start:3*n,materialIndex:a});i!==void 0&&(i.count=3*n-i.start,t.push(i)),this.groups=t},fromGeometry:function(e){var t=e.faces,a=e.vertices,r=e.faceVertexUvs,o=r[0]&&0<r[0].length,s=r[1]&&0<r[1].length,d=e.morphTargets,l=d.length,p;if(0<l){p=[];for(var u=0;u<l;u++)p[u]={name:d[u].name,data:[]};this.morphTargets.position=p}var i=e.morphNormals,m=i.length,c;if(0<m){c=[];for(var u=0;u<m;u++)c[u]={name:i[u].name,data:[]};this.morphTargets.normal=c}var g=e.skinIndices,f=e.skinWeights,h=g.length===a.length,_=f.length===a.length;0<a.length&&0===t.length&&console.error('THREE.DirectGeometry: Faceless geometries are not supported.');for(var u=0,x;u<t.length;u++){x=t[u],this.vertices.push(a[x.a],a[x.b],a[x.c]);var y=x.vertexNormals;if(3===y.length)this.normals.push(y[0],y[1],y[2]);else{var v=x.normal;this.normals.push(v,v,v)}var b=x.vertexColors;if(3===b.length)this.colors.push(b[0],b[1],b[2]);else{var T=x.color;this.colors.push(T,T,T)}if(!0===o){var E=r[0][u];void 0===E?(console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ',u),this.uvs.push(new n.a,new n.a,new n.a)):this.uvs.push(E[0],E[1],E[2])}if(!0===s){var E=r[1][u];void 0===E?(console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ',u),this.uvs2.push(new n.a,new n.a,new n.a)):this.uvs2.push(E[0],E[1],E[2])}for(var M=0,S;M<l;M++)S=d[M].vertices,p[M].data.push(S[x.a],S[x.b],S[x.c]);for(var M=0,w;M<m;M++)w=i[M].vertexNormals[u],c[M].data.push(w.a,w.b,w.c);h&&this.skinIndices.push(g[x.a],g[x.b],g[x.c]),_&&this.skinWeights.push(f[x.a],f[x.b],f[x.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),this}})},function(e,t){'use strict';t.a=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`},function(e,t){'use strict';t.a=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`},function(e,t,a){'use strict';function r(e,t){this.origin=e===void 0?new i.a:e,this.direction=t===void 0?new i.a(0,0,-1):t}a.d(t,'a',function(){return r});var i=a(0),n=new i.a,o=new i.a,s=new i.a,d=new i.a,l=new i.a,u=new i.a,m=new i.a;Object.assign(r.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return void 0===t&&(console.warn('THREE.Ray: .at() target is now required'),t=new i.a),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(e){return this.origin.copy(this.at(e,n)),this},closestPointToPoint:function(e,t){t===void 0&&(console.warn('THREE.Ray: .closestPointToPoint() target is now required'),t=new i.a),t.subVectors(e,this.origin);var a=t.dot(this.direction);return 0>a?t.copy(this.origin):t.copy(this.direction).multiplyScalar(a).add(this.origin)},distanceToPoint:function(e){return p(this.distanceSqToPoint(e))},distanceSqToPoint:function(e){var t=n.subVectors(e,this.origin).dot(this.direction);return 0>t?this.origin.distanceToSquared(e):(n.copy(this.direction).multiplyScalar(t).add(this.origin),n.distanceToSquared(e))},distanceSqToSegment:function(e,t,a,r){o.copy(e).add(t).multiplyScalar(.5),s.copy(t).sub(e).normalize(),d.copy(this.origin).sub(o);var i=.5*e.distanceTo(t),n=-this.direction.dot(s),l=d.dot(this.direction),p=-d.dot(s),u=d.lengthSq(),m=g(1-n*n),c,f,h,x;if(!(0<m))f=0<n?-i:i,c=_(0,-(n*f+l)),h=-c*c+f*(f+2*p)+u;else if(c=n*p-l,f=n*l-p,x=i*m,!(0<=c))f<=-x?(c=_(0,-(-n*i+l)),f=0<c?-i:T(_(-i,-p),i),h=-c*c+f*(f+2*p)+u):f<=x?(c=0,f=T(_(-i,-p),i),h=f*(f+2*p)+u):(c=_(0,-(n*i+l)),f=0<c?i:T(_(-i,-p),i),h=-c*c+f*(f+2*p)+u);else if(!(f>=-x))f=-i,c=_(0,-(n*f+l)),h=-c*c+f*(f+2*p)+u;else if(f<=x){var y=1/m;c*=y,f*=y,h=c*(c+n*f+2*l)+f*(n*c+f+2*p)+u}else f=i,c=_(0,-(n*f+l)),h=-c*c+f*(f+2*p)+u;return a&&a.copy(this.direction).multiplyScalar(c).add(this.origin),r&&r.copy(s).multiplyScalar(f).add(o),h},intersectSphere:function(e,t){n.subVectors(e.center,this.origin);var a=n.dot(this.direction),r=n.dot(n)-a*a,i=e.radius*e.radius;if(r>i)return null;var o=p(i-r),s=a-o,d=a+o;return 0>s&&0>d?null:0>s?this.at(d,t):this.at(s,t)},intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){var a=e.normal.dot(this.direction);if(0===a)return 0===e.distanceToPoint(this.origin)?0:null;var r=-(this.origin.dot(e.normal)+e.constant)/a;return 0<=r?r:null},intersectPlane:function(e,a){var r=this.distanceToPlane(e);return null===r?null:this.at(r,a)},intersectsPlane:function(e){var t=e.distanceToPoint(this.origin);if(0===t)return!0;var a=e.normal.dot(this.direction);return!!(0>a*t)},intersectBox:function(e,t){var a=1/this.direction.x,r=1/this.direction.y,i=1/this.direction.z,n=this.origin,o,s,d,l,p,u;return(0<=a?(o=(e.min.x-n.x)*a,s=(e.max.x-n.x)*a):(o=(e.max.x-n.x)*a,s=(e.min.x-n.x)*a),0<=r?(d=(e.min.y-n.y)*r,l=(e.max.y-n.y)*r):(d=(e.max.y-n.y)*r,l=(e.min.y-n.y)*r),o>l||d>s)?null:((d>o||o!=o)&&(o=d),(l<s||s!=s)&&(s=l),0<=i?(p=(e.min.z-n.z)*i,u=(e.max.z-n.z)*i):(p=(e.max.z-n.z)*i,u=(e.min.z-n.z)*i),o>u||p>s)?null:((p>o||o!=o)&&(o=p),(u<s||s!=s)&&(s=u),0>s?null:this.at(0<=o?o:s,t))},intersectsBox:function(e){return null!==this.intersectBox(e,n)},intersectTriangle:function(e,t,a,r,i){l.subVectors(t,e),u.subVectors(a,e),m.crossVectors(l,u);var n=this.direction.dot(m),o;if(0<n){if(r)return null;o=1}else if(0>n)o=-1,n=-n;else return null;d.subVectors(this.origin,e);var s=o*this.direction.dot(u.crossVectors(d,u));if(0>s)return null;var p=o*this.direction.dot(l.cross(d));if(0>p)return null;if(s+p>n)return null;var c=-o*d.dot(m);return 0>c?null:this.at(c/n,i)},applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}})},function(e,t,a){'use strict';function r(e,t,a){this.a=e===void 0?new i.a:e,this.b=t===void 0?new i.a:t,this.c=a===void 0?new i.a:a}a.d(t,'a',function(){return r});var i=a(0),n=a(40),o=new i.a,s=new i.a,d=new i.a,l=new i.a,u=new i.a,m=new i.a,g=new i.a,f=new i.a,h=new i.a,_=new i.a;Object.assign(r,{getNormal:function(e,t,a,r){r===void 0&&(console.warn('THREE.Triangle: .getNormal() target is now required'),r=new i.a),r.subVectors(a,t),o.subVectors(e,t),r.cross(o);var n=r.lengthSq();return 0<n?r.multiplyScalar(1/p(n)):r.set(0,0,0)},getBarycoord:function(e,t,a,r,n){o.subVectors(r,t),s.subVectors(a,t),d.subVectors(e,t);var l=o.dot(o),p=o.dot(s),m=o.dot(d),c=s.dot(s),g=s.dot(d),f=l*c-p*p;if(void 0===n&&(console.warn('THREE.Triangle: .getBarycoord() target is now required'),n=new i.a),0==f)return n.set(-2,-1,-1);var h=1/f,_=(c*m-p*g)*h,u=(l*g-p*m)*h;return n.set(1-_-u,u,_)},containsPoint:function(e,t,a,i){return r.getBarycoord(e,t,a,i,l),0<=l.x&&0<=l.y&&1>=l.x+l.y},getUV:function(e,t,a,r,i,n,o,s){return this.getBarycoord(e,t,a,r,l),s.set(0,0),s.addScaledVector(i,l.x),s.addScaledVector(n,l.y),s.addScaledVector(o,l.z),s},isFrontFacing:function(e,t,a,r){return o.subVectors(a,t),s.subVectors(e,t),!!(0>o.cross(s).dot(r))}}),Object.assign(r.prototype,{set:function(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this},setFromPointsAndIndices:function(e,t,a,r){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[r]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){return o.subVectors(this.c,this.b),s.subVectors(this.a,this.b),.5*o.cross(s).length()},getMidpoint:function(e){return void 0===e&&(console.warn('THREE.Triangle: .getMidpoint() target is now required'),e=new i.a),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return r.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return void 0===e&&(console.warn('THREE.Triangle: .getPlane() target is now required'),e=new n.a),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)},getUV:function(e,t,a,i,n){return r.getUV(e,this.a,this.b,this.c,t,a,i,n)},containsPoint:function(e){return r.containsPoint(e,this.a,this.b,this.c)},isFrontFacing:function(e){return r.isFrontFacing(this.a,this.b,this.c,e)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(e,t){void 0===t&&(console.warn('THREE.Triangle: .closestPointToPoint() target is now required'),t=new i.a);var r=this.a,a=this.b,n=this.c,o,s;u.subVectors(a,r),m.subVectors(n,r),f.subVectors(e,r);var d=u.dot(f),l=m.dot(f);if(0>=d&&0>=l)return t.copy(r);h.subVectors(e,a);var p=u.dot(h),c=m.dot(h);if(0<=p&&c<=p)return t.copy(a);var x=d*c-p*l;if(0>=x&&0<=d&&0>=p)return o=d/(d-p),t.copy(r).addScaledVector(u,o);_.subVectors(e,n);var y=u.dot(_),v=m.dot(_);if(0<=v&&y<=v)return t.copy(n);var b=y*l-d*v;if(0>=b&&0<=l&&0>=v)return s=l/(l-v),t.copy(r).addScaledVector(m,s);var T=p*v-y*c;if(0>=T&&0<=c-p&&0<=y-v)return g.subVectors(n,a),s=(c-p)/(c-p+(y-v)),t.copy(a).addScaledVector(g,s);var E=1/(T+b+x);return o=b*E,s=x*E,t.copy(r).addScaledVector(u,o).addScaledVector(m,s)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}})},function(e,t,a){'use strict';function r(e){i.a.call(this),this.type='MeshBasicMaterial',this.color=new o.a(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=n._0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap='round',this.wireframeLinejoin='round',this.skinning=!1,this.morphTargets=!1,this.setValues(e)}a.d(t,'a',function(){return r});var i=a(30),n=a(1),o=a(11);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isMeshBasicMaterial=!0,r.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}},function(e,t,a){'use strict';function r(e,t,a,r){function i(t,r){e.drawArrays(s,t,r),a.update(r,s)}function n(r,i,n,d){if(0!==d){var l,p;if(o)l=e,p='drawArraysInstanced';else if(l=t.get('ANGLE_instanced_arrays'),p='drawArraysInstancedANGLE',null===l)return void console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');l[p](s,i,n,d),a.update(n,s,d)}}var o=r.isWebGL2,s;this.setMode=function(e){s=e},this.render=i,this.renderInstances=n}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e,t,a){function r(){if(void 0!==d)return d;var a=t.get('EXT_texture_filter_anisotropic');return d=null===a?0:e.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT),d}function i(t){if('highp'===t){if(0<e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision&&0<e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision)return'highp';t='mediump'}return'mediump'===t&&0<e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision&&0<e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision?'mediump':'lowp'}var n='undefined'!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||'undefined'!=typeof WebGL2ComputeRenderingContext&&e instanceof WebGL2ComputeRenderingContext,o=a.precision===void 0?'highp':a.precision,s=i(o),d;s!==o&&(console.warn('THREE.WebGLRenderer:',o,'not supported, using',s,'instead.'),o=s);var l=!0===a.logarithmicDepthBuffer,p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),h=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=0<u,y=n||!!t.get('OES_texture_float'),v=n?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:n,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:l,maxTextures:p,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:c,maxAttributes:g,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:x&&y,maxSamples:v}}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(){function e(){u.value!==r&&(u.value=r,u.needsUpdate=0<o),a.numPlanes=o,a.numIntersection=0}function t(e,t,r,n){var o=null===e?0:e.length,s=null;if(0!==o){if(s=u.value,!0!==n||null===s){var d=r+4*o,m=t.matrixWorldInverse;p.getNormalMatrix(m),(null===s||s.length<d)&&(s=new Float32Array(d));for(var c=0,i=r;c!==o;++c,i+=4)l.copy(e[c]).applyMatrix4(m,p),l.normal.toArray(s,i),s[i+3]=l.constant}u.value=s,u.needsUpdate=!0}return a.numPlanes=o,s}var a=this,r=null,o=0,s=!1,d=!1,l=new n.a,p=new i.a,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(e,a,i){var n=0!==e.length||a||0!==o||s;return s=a,r=t(e,i,0),o=e.length,n},this.beginShadows=function(){d=!0,t(null)},this.endShadows=function(){d=!1,e()},this.setState=function(a,n,l,p,m,c){if(!s||null===a||0===a.length||d&&!l)d?t(null):e();else{var g=d?0:o,f=4*g,h=m.clippingState||null;u.value=h,h=t(a,p,f,c);for(var _=0;_!==f;++_)h[_]=r[_];m.clippingState=h,this.numIntersection=n?this.numPlanes:0,this.numPlanes+=g}}}a.d(t,'a',function(){return r});var i=a(7),n=a(40)},function(e,t,a){'use strict';function r(e){var t={};return{get:function(a){if(void 0!==t[a])return t[a];var r;return r='WEBGL_depth_texture'===a?e.getExtension('WEBGL_depth_texture')||e.getExtension('MOZ_WEBGL_depth_texture')||e.getExtension('WEBKIT_WEBGL_depth_texture'):'EXT_texture_filter_anisotropic'===a?e.getExtension('EXT_texture_filter_anisotropic')||e.getExtension('MOZ_EXT_texture_filter_anisotropic')||e.getExtension('WEBKIT_EXT_texture_filter_anisotropic'):'WEBGL_compressed_texture_s3tc'===a?e.getExtension('WEBGL_compressed_texture_s3tc')||e.getExtension('MOZ_WEBGL_compressed_texture_s3tc')||e.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'):'WEBGL_compressed_texture_pvrtc'===a?e.getExtension('WEBGL_compressed_texture_pvrtc')||e.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'):e.getExtension(a),null===r&&console.warn('THREE.WebGLRenderer: '+a+' extension not supported.'),t[a]=r,r}}}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e,t,a){function r(e){var i=e.target,n=d.get(i);for(var o in null!==n.index&&t.remove(n.index),n.attributes)t.remove(n.attributes[o]);i.removeEventListener('dispose',r),d.delete(i);var s=p.get(n);s&&(t.remove(s),p.delete(n)),a.memory.geometries--}function s(r){var s=[],d=r.index,u=r.attributes.position,m=0;if(null!==d){var g=d.array;m=d.version;for(var f=0,i=g.length;f<i;f+=3){var l=g[f+0],a=g[f+1],h=g[f+2];s.push(l,a,a,h,h,l)}}else{var g=u.array;m=u.version;for(var f=0,i=g.length/3-1;f<i;f+=3){var l=f+0,a=f+1,h=f+2;s.push(l,a,a,h,h,l)}}var c=new(65535<Object(o.a)(s)?n.d:n.c)(s,1);c.version=m,t.update(c,e.ELEMENT_ARRAY_BUFFER);var _=p.get(r);_&&t.remove(_),p.set(r,c)}var d=new WeakMap,p=new WeakMap;return{get:function(e,t){var n=d.get(t);return n?n:(t.addEventListener('dispose',r),t.isBufferGeometry?n=t:t.isGeometry&&(void 0===t._bufferGeometry&&(t._bufferGeometry=new i.a().setFromObject(e)),n=t._bufferGeometry),d.set(t,n),a.memory.geometries++,n)},update:function(a){var r=a.index,n=a.attributes;for(var o in null!==r&&t.update(r,e.ELEMENT_ARRAY_BUFFER),n)t.update(n[o],e.ARRAY_BUFFER);var s=a.morphAttributes;for(var o in s)for(var d=s[o],p=0,i=d.length;p<i;p++)t.update(d[p],e.ARRAY_BUFFER)},getWireframeAttribute:function(e){var t=p.get(e);if(t){var a=e.index;null!==a&&t.version<a.version&&s(e)}else s(e);return p.get(e)}}}a.d(t,'a',function(){return r});var n=a(20),i=a(19),o=a(65)},function(e,t,a){'use strict';function r(e,t,a,r){function i(t,r){e.drawElements(s,r,d,t*l),a.update(r,s)}function n(r,i,n,p){if(0!==p){var u,m;if(o)u=e,m='drawElementsInstanced';else if(u=t.get('ANGLE_instanced_arrays'),m='drawElementsInstancedANGLE',null===u)return void console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');u[m](s,n,d,i*l,p),a.update(n,s,p)}}var o=r.isWebGL2,s,d,l;this.setMode=function(e){s=e},this.setIndex=function(e){d=e.type,l=e.bytesPerElement},this.render=i,this.renderInstances=n}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e){var t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(a,r,i){switch(i=i||1,t.calls++,r){case e.TRIANGLES:t.triangles+=i*(a/3);break;case e.TRIANGLE_STRIP:case e.TRIANGLE_FAN:t.triangles+=i*(a-2);break;case e.LINES:t.lines+=i*(a/2);break;case e.LINE_STRIP:t.lines+=i*(a-1);break;case e.LINE_LOOP:t.lines+=i*a;break;case e.POINTS:t.points+=i*a;break;default:console.error('THREE.WebGLInfo: Unknown draw mode:',r);}}}}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e,t){return g(t[1])-g(e[1])}function i(e){var t={},a=new Float32Array(8);return{update:function(n,o,s,d){var l=n.morphTargetInfluences,p=l.length,u=t[o.id];if(u===void 0){u=[];for(var m=0;m<p;m++)u[m]=[m,0];t[o.id]=u}for(var i=s.morphTargets&&o.morphAttributes.position,c=s.morphNormals&&o.morphAttributes.normal,m=0,g;m<p;m++)g=u[m],0!==g[1]&&(i&&o.deleteAttribute('morphTarget'+m),c&&o.deleteAttribute('morphNormal'+m));for(var m=0,g;m<p;m++)g=u[m],g[0]=m,g[1]=l[m];u.sort(r);for(var f=0,m=0,g;8>m;m++){if(g=u[m],g){var h=g[0],_=g[1];if(_){i&&o.setAttribute('morphTarget'+m,i[h]),c&&o.setAttribute('morphNormal'+m,c[h]),a[m]=_,f+=_;continue}}a[m]=0}var x=o.morphTargetsRelative?1:1-f;d.getUniforms().setValue(e,'morphTargetBaseInfluence',x),d.getUniforms().setValue(e,'morphTargetInfluences',a)}}}a.d(t,'a',function(){return i})},function(e,t,a){'use strict';function r(e,t,a,r){function i(i){var o=r.render.frame,s=i.geometry,d=t.get(i,s);return n[d.id]!==o&&(s.isGeometry&&d.updateFromObject(i),t.update(d),n[d.id]=o),i.isInstancedMesh&&a.update(i.instanceMatrix,e.ARRAY_BUFFER),d}var n={};return{update:i,dispose:function(){n={}}}}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e,t,a){function r(e){var t=e.skeleton,a=t.bones;if(p)return 1024;var r=f((m-20)/4),i=T(r,a.length);return i<a.length?(console.warn('THREE.WebGLRenderer: Skeleton has '+a.length+' bones. This GPU supports '+i+'.'),0):i}function o(e,t){var a;return e?e.isTexture?a=e.encoding:e.isWebGLRenderTarget&&(console.warn('THREE.WebGLPrograms.getTextureEncodingFromMap: don\'t use render targets as textures. Use their .texture property instead.'),a=e.texture.encoding):a=i.N,a===i.N&&t&&(a=i.F),a}var s=[],d=a.isWebGL2,l=a.logarithmicDepthBuffer,p=a.floatVertexTextures,u=a.precision,m=a.maxVertexUniforms,c=a.vertexTextures,g={MeshDepthMaterial:'depth',MeshDistanceMaterial:'distanceRGBA',MeshNormalMaterial:'normal',MeshBasicMaterial:'basic',MeshLambertMaterial:'lambert',MeshPhongMaterial:'phong',MeshToonMaterial:'phong',MeshStandardMaterial:'physical',MeshPhysicalMaterial:'physical',MeshMatcapMaterial:'matcap',LineBasicMaterial:'basic',LineDashedMaterial:'dashed',PointsMaterial:'points',ShadowMaterial:'shadow',SpriteMaterial:'sprite'},h=['precision','isWebGL2','supportsVertexTextures','outputEncoding','instancing','numMultiviewViews','map','mapEncoding','matcap','matcapEncoding','envMap','envMapMode','envMapEncoding','envMapCubeUV','lightMap','aoMap','emissiveMap','emissiveMapEncoding','bumpMap','normalMap','objectSpaceNormalMap','tangentSpaceNormalMap','clearcoatNormalMap','displacementMap','specularMap','roughnessMap','metalnessMap','gradientMap','alphaMap','combine','vertexColors','vertexTangents','vertexUvs','uvsVertexOnly','fog','useFog','fogExp2','flatShading','sizeAttenuation','logarithmicDepthBuffer','skinning','maxBones','useVertexTexture','morphTargets','morphNormals','maxMorphTargets','maxMorphNormals','premultipliedAlpha','numDirLights','numPointLights','numSpotLights','numHemiLights','numRectAreaLights','numDirLightShadows','numPointLightShadows','numSpotLightShadows','shadowMapEnabled','shadowMapType','toneMapping','physicallyCorrectLights','alphaTest','doubleSided','flipSided','numClippingPlanes','numClipIntersection','depthPacking','dithering','sheen'];this.getParameters=function(t,n,s,m,f,h,_){var x=g[t.type],y=_.isSkinnedMesh?r(_):0;null!==t.precision&&(u=a.getMaxPrecision(t.precision),u!==t.precision&&console.warn('THREE.WebGLProgram.getParameters:',t.precision,'not supported, using',u,'instead.'));var v=e.getRenderTarget(),b=v&&v.isWebGLMultiviewRenderTarget?v.numViews:0,T={isWebGL2:d,shaderID:x,precision:u,instancing:!0===_.isInstancedMesh,supportsVertexTextures:c,numMultiviewViews:b,outputEncoding:o(v?v.texture:null,e.gammaOutput),map:!!t.map,mapEncoding:o(t.map,e.gammaInput),matcap:!!t.matcap,matcapEncoding:o(t.matcap,e.gammaInput),envMap:!!t.envMap,envMapMode:t.envMap&&t.envMap.mapping,envMapEncoding:o(t.envMap,e.gammaInput),envMapCubeUV:!!t.envMap&&(t.envMap.mapping===i.o||t.envMap.mapping===i.p),lightMap:!!t.lightMap,aoMap:!!t.aoMap,emissiveMap:!!t.emissiveMap,emissiveMapEncoding:o(t.emissiveMap,e.gammaInput),bumpMap:!!t.bumpMap,normalMap:!!t.normalMap,objectSpaceNormalMap:t.normalMapType===i._10,tangentSpaceNormalMap:t.normalMapType===i._60,clearcoatNormalMap:!!t.clearcoatNormalMap,displacementMap:!!t.displacementMap,roughnessMap:!!t.roughnessMap,metalnessMap:!!t.metalnessMap,specularMap:!!t.specularMap,alphaMap:!!t.alphaMap,gradientMap:!!t.gradientMap,sheen:!!t.sheen,combine:t.combine,vertexTangents:t.normalMap&&t.vertexTangents,vertexColors:t.vertexColors,vertexUvs:!!t.map||!!t.bumpMap||!!t.normalMap||!!t.specularMap||!!t.alphaMap||!!t.emissiveMap||!!t.roughnessMap||!!t.metalnessMap||!!t.clearcoatNormalMap||!!t.displacementMap,uvsVertexOnly:!t.map&&!t.bumpMap&&!t.normalMap&&!t.specularMap&&!t.alphaMap&&!t.emissiveMap&&!t.roughnessMap&&!t.metalnessMap&&!t.clearcoatNormalMap&&!!t.displacementMap,fog:!!m,useFog:t.fog,fogExp2:m&&m.isFogExp2,flatShading:t.flatShading,sizeAttenuation:t.sizeAttenuation,logarithmicDepthBuffer:l,skinning:t.skinning&&0<y,maxBones:y,useVertexTexture:p,morphTargets:t.morphTargets,morphNormals:t.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:n.directional.length,numPointLights:n.point.length,numSpotLights:n.spot.length,numRectAreaLights:n.rectArea.length,numHemiLights:n.hemi.length,numDirLightShadows:n.directionalShadowMap.length,numPointLightShadows:n.pointShadowMap.length,numSpotLightShadows:n.spotShadowMap.length,numClippingPlanes:f,numClipIntersection:h,dithering:t.dithering,shadowMapEnabled:e.shadowMap.enabled&&0<s.length,shadowMapType:e.shadowMap.type,toneMapping:t.toneMapped?e.toneMapping:i._7,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:t.premultipliedAlpha,alphaTest:t.alphaTest,doubleSided:t.side===i.w,flipSided:t.side===i.h,depthPacking:t.depthPacking!==void 0&&t.depthPacking};return T},this.getProgramCacheKey=function(t,a){var r=[];if(a.shaderID?r.push(a.shaderID):(r.push(t.fragmentShader),r.push(t.vertexShader)),void 0!==t.defines)for(var n in t.defines)r.push(n),r.push(t.defines[n]);for(var o=0;o<h.length;o++)r.push(a[h[o]]);return r.push(t.onBeforeCompile.toString()),r.push(e.gammaOutput),r.push(e.gammaFactor),r.join()},this.acquireProgram=function(a,r,i,o){for(var d=0,l=s.length,p,u;d<l;d++)if(u=s[d],u.cacheKey===o){p=u,++p.usedTimes;break}return void 0===p&&(p=new n.a(e,t,o,a,r,i),s.push(p)),p},this.releaseProgram=function(e){if(0==--e.usedTimes){var t=s.indexOf(e);s[t]=s[s.length-1],s.pop(),e.destroy()}},this.programs=s}a.d(t,'a',function(){return r});var i=a(1),n=a(266)},function(e,t,a){'use strict';function r(e){for(var t=e.split('\n'),a=0;a<t.length;a++)t[a]=a+1+': '+t[a];return t.join('\n')}function i(e){switch(e){case R.N:return['Linear','( value )'];case R._75:return['sRGB','( value )'];case R._40:return['RGBE','( value )'];case R._43:return['RGBM','( value, 7.0 )'];case R._42:return['RGBM','( value, 16.0 )'];case R._39:return['RGBD','( value, 256.0 )'];case R.F:return['Gamma','( value, float( GAMMA_FACTOR ) )'];case R.S:return['LogLuv','( value )'];default:throw new Error('unsupported encoding: '+e);}}function n(e,t,a){var i=e.getShaderParameter(t,e.COMPILE_STATUS),n=e.getShaderInfoLog(t).trim();if(i&&''===n)return'';var o=e.getShaderSource(t);return'THREE.WebGLShader: gl.getShaderInfoLog() '+a+'\n'+n+r(o)}function o(e,t){var a=i(t);return'vec4 '+e+'( vec4 value ) { return '+a[0]+'ToLinear'+a[1]+'; }'}function s(e,t){var a=i(t);return'vec4 '+e+'( vec4 value ) { return LinearTo'+a[0]+a[1]+'; }'}function d(e,t){var a;switch(t){case R.R:a='Linear';break;case R._49:a='Reinhard';break;case R._65:a='Uncharted2';break;case R.k:a='OptimizedCineon';break;case R.a:a='ACESFilmic';break;default:throw new Error('unsupported toneMapping: '+t);}return'vec3 '+e+'( vec3 color ) { return '+a+'ToneMapping( color ); }'}function l(e,t,a){e=e||{};var r=[e.derivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading?'#extension GL_OES_standard_derivatives : enable':'',(e.fragDepth||t.logarithmicDepthBuffer)&&a.get('EXT_frag_depth')?'#extension GL_EXT_frag_depth : enable':'',e.drawBuffers&&a.get('WEBGL_draw_buffers')?'#extension GL_EXT_draw_buffers : require':'',(e.shaderTextureLOD||t.envMap)&&a.get('EXT_shader_texture_lod')?'#extension GL_EXT_shader_texture_lod : enable':''];return r.filter(m).join('\n')}function p(e){var t=[];for(var a in e){var r=e[a];!1===r||t.push('#define '+a+' '+r)}return t.join('\n')}function u(e,t){for(var a={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),n=0;n<r;n++){var i=e.getActiveAttrib(t,n),o=i.name;a[o]=e.getAttribLocation(t,o)}return a}function m(e){return''!==e}function c(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function g(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function f(e){return e.replace(L,h)}function h(e,t){var a=A.a[t];if(a===void 0)throw new Error('Can not resolve #include <'+t+'>');return f(a)}function _(e){return e.replace(F,x)}function x(e,t,a,r){for(var n='',o=parseInt(t);o<parseInt(a);o++)n+=r.replace(/\[ i \]/g,'[ '+o+' ]').replace(/UNROLLED_LOOP_INDEX/g,o);return n}function y(e){var t='precision '+e.precision+' float;\nprecision '+e.precision+' int;';return'highp'===e.precision?t+='\n#define HIGH_PRECISION':'mediump'===e.precision?t+='\n#define MEDIUM_PRECISION':'lowp'===e.precision&&(t+='\n#define LOW_PRECISION'),t}function v(e){var t='SHADOWMAP_TYPE_BASIC';return e.shadowMapType===R._16?t='SHADOWMAP_TYPE_PCF':e.shadowMapType===R._17?t='SHADOWMAP_TYPE_PCF_SOFT':e.shadowMapType===R._73&&(t='SHADOWMAP_TYPE_VSM'),t}function b(e){var t='ENVMAP_TYPE_CUBE';if(e.envMap)switch(e.envMapMode){case R.m:case R.n:t='ENVMAP_TYPE_CUBE';break;case R.o:case R.p:t='ENVMAP_TYPE_CUBE_UV';break;case R.A:case R.B:t='ENVMAP_TYPE_EQUIREC';break;case R._53:t='ENVMAP_TYPE_SPHERE';}return t}function T(e){var t='ENVMAP_MODE_REFLECTION';if(e.envMap)switch(e.envMapMode){case R.n:case R.B:t='ENVMAP_MODE_REFRACTION';}return t}function E(e){var t='ENVMAP_BLENDING_MULTIPLY';if(e.envMap)switch(e.combine){case R._0:t='ENVMAP_BLENDING_MULTIPLY';break;case R.Y:t='ENVMAP_BLENDING_MIX';break;case R.c:t='ENVMAP_BLENDING_ADD';}return t}function M(e,t,a,r,i,h){var x=e.getContext(),M=r.defines,L=i.vertexShader,F=i.fragmentShader,C=v(h),U=b(h),N=T(h),I=E(h),O=0<e.gammaFactor?e.gammaFactor:1,D=h.isWebGL2?'':l(r.extensions,h,t),z=p(M),B=x.createProgram(),V=h.numMultiviewViews,k,G;if(r.isRawShaderMaterial?(k=[z].filter(m).join('\n'),0<k.length&&(k+='\n'),G=[D,z].filter(m).join('\n'),0<G.length&&(G+='\n')):(k=[y(h),'#define SHADER_NAME '+i.name,z,h.instancing?'#define USE_INSTANCING':'',h.supportsVertexTextures?'#define VERTEX_TEXTURES':'','#define GAMMA_FACTOR '+O,'#define MAX_BONES '+h.maxBones,h.useFog&&h.fog?'#define USE_FOG':'',h.useFog&&h.fogExp2?'#define FOG_EXP2':'',h.map?'#define USE_MAP':'',h.envMap?'#define USE_ENVMAP':'',h.envMap?'#define '+N:'',h.lightMap?'#define USE_LIGHTMAP':'',h.aoMap?'#define USE_AOMAP':'',h.emissiveMap?'#define USE_EMISSIVEMAP':'',h.bumpMap?'#define USE_BUMPMAP':'',h.normalMap?'#define USE_NORMALMAP':'',h.normalMap&&h.objectSpaceNormalMap?'#define OBJECTSPACE_NORMALMAP':'',h.normalMap&&h.tangentSpaceNormalMap?'#define TANGENTSPACE_NORMALMAP':'',h.clearcoatNormalMap?'#define USE_CLEARCOAT_NORMALMAP':'',h.displacementMap&&h.supportsVertexTextures?'#define USE_DISPLACEMENTMAP':'',h.specularMap?'#define USE_SPECULARMAP':'',h.roughnessMap?'#define USE_ROUGHNESSMAP':'',h.metalnessMap?'#define USE_METALNESSMAP':'',h.alphaMap?'#define USE_ALPHAMAP':'',h.vertexTangents?'#define USE_TANGENT':'',h.vertexColors?'#define USE_COLOR':'',h.vertexUvs?'#define USE_UV':'',h.uvsVertexOnly?'#define UVS_VERTEX_ONLY':'',h.flatShading?'#define FLAT_SHADED':'',h.skinning?'#define USE_SKINNING':'',h.useVertexTexture?'#define BONE_TEXTURE':'',h.morphTargets?'#define USE_MORPHTARGETS':'',h.morphNormals&&!1===h.flatShading?'#define USE_MORPHNORMALS':'',h.doubleSided?'#define DOUBLE_SIDED':'',h.flipSided?'#define FLIP_SIDED':'',h.shadowMapEnabled?'#define USE_SHADOWMAP':'',h.shadowMapEnabled?'#define '+C:'',h.sizeAttenuation?'#define USE_SIZEATTENUATION':'',h.logarithmicDepthBuffer?'#define USE_LOGDEPTHBUF':'',h.logarithmicDepthBuffer&&(h.isWebGL2||t.get('EXT_frag_depth'))?'#define USE_LOGDEPTHBUF_EXT':'','uniform mat4 modelMatrix;','uniform mat4 modelViewMatrix;','uniform mat4 projectionMatrix;','uniform mat4 viewMatrix;','uniform mat3 normalMatrix;','uniform vec3 cameraPosition;','uniform bool isOrthographic;','#ifdef USE_INSTANCING',' attribute mat4 instanceMatrix;','#endif','attribute vec3 position;','attribute vec3 normal;','attribute vec2 uv;','#ifdef USE_TANGENT','\tattribute vec4 tangent;','#endif','#ifdef USE_COLOR','\tattribute vec3 color;','#endif','#ifdef USE_MORPHTARGETS','\tattribute vec3 morphTarget0;','\tattribute vec3 morphTarget1;','\tattribute vec3 morphTarget2;','\tattribute vec3 morphTarget3;','\t#ifdef USE_MORPHNORMALS','\t\tattribute vec3 morphNormal0;','\t\tattribute vec3 morphNormal1;','\t\tattribute vec3 morphNormal2;','\t\tattribute vec3 morphNormal3;','\t#else','\t\tattribute vec3 morphTarget4;','\t\tattribute vec3 morphTarget5;','\t\tattribute vec3 morphTarget6;','\t\tattribute vec3 morphTarget7;','\t#endif','#endif','#ifdef USE_SKINNING','\tattribute vec4 skinIndex;','\tattribute vec4 skinWeight;','#endif','\n'].filter(m).join('\n'),G=[D,y(h),'#define SHADER_NAME '+i.name,z,h.alphaTest?'#define ALPHATEST '+h.alphaTest+(h.alphaTest%1?'':'.0'):'','#define GAMMA_FACTOR '+O,h.useFog&&h.fog?'#define USE_FOG':'',h.useFog&&h.fogExp2?'#define FOG_EXP2':'',h.map?'#define USE_MAP':'',h.matcap?'#define USE_MATCAP':'',h.envMap?'#define USE_ENVMAP':'',h.envMap?'#define '+U:'',h.envMap?'#define '+N:'',h.envMap?'#define '+I:'',h.lightMap?'#define USE_LIGHTMAP':'',h.aoMap?'#define USE_AOMAP':'',h.emissiveMap?'#define USE_EMISSIVEMAP':'',h.bumpMap?'#define USE_BUMPMAP':'',h.normalMap?'#define USE_NORMALMAP':'',h.normalMap&&h.objectSpaceNormalMap?'#define OBJECTSPACE_NORMALMAP':'',h.normalMap&&h.tangentSpaceNormalMap?'#define TANGENTSPACE_NORMALMAP':'',h.clearcoatNormalMap?'#define USE_CLEARCOAT_NORMALMAP':'',h.specularMap?'#define USE_SPECULARMAP':'',h.roughnessMap?'#define USE_ROUGHNESSMAP':'',h.metalnessMap?'#define USE_METALNESSMAP':'',h.alphaMap?'#define USE_ALPHAMAP':'',h.sheen?'#define USE_SHEEN':'',h.vertexTangents?'#define USE_TANGENT':'',h.vertexColors?'#define USE_COLOR':'',h.vertexUvs?'#define USE_UV':'',h.uvsVertexOnly?'#define UVS_VERTEX_ONLY':'',h.gradientMap?'#define USE_GRADIENTMAP':'',h.flatShading?'#define FLAT_SHADED':'',h.doubleSided?'#define DOUBLE_SIDED':'',h.flipSided?'#define FLIP_SIDED':'',h.shadowMapEnabled?'#define USE_SHADOWMAP':'',h.shadowMapEnabled?'#define '+C:'',h.premultipliedAlpha?'#define PREMULTIPLIED_ALPHA':'',h.physicallyCorrectLights?'#define PHYSICALLY_CORRECT_LIGHTS':'',h.logarithmicDepthBuffer?'#define USE_LOGDEPTHBUF':'',h.logarithmicDepthBuffer&&(h.isWebGL2||t.get('EXT_frag_depth'))?'#define USE_LOGDEPTHBUF_EXT':'',(!!r.extensions&&r.extensions.shaderTextureLOD||h.envMap)&&(h.isWebGL2||t.get('EXT_shader_texture_lod'))?'#define TEXTURE_LOD_EXT':'','uniform mat4 viewMatrix;','uniform vec3 cameraPosition;','uniform bool isOrthographic;',h.toneMapping===R._7?'':'#define TONE_MAPPING',h.toneMapping===R._7?'':A.a.tonemapping_pars_fragment,h.toneMapping===R._7?'':d('toneMapping',h.toneMapping),h.dithering?'#define DITHERING':'',h.outputEncoding||h.mapEncoding||h.matcapEncoding||h.envMapEncoding||h.emissiveMapEncoding?A.a.encodings_pars_fragment:'',h.mapEncoding?o('mapTexelToLinear',h.mapEncoding):'',h.matcapEncoding?o('matcapTexelToLinear',h.matcapEncoding):'',h.envMapEncoding?o('envMapTexelToLinear',h.envMapEncoding):'',h.emissiveMapEncoding?o('emissiveMapTexelToLinear',h.emissiveMapEncoding):'',h.outputEncoding?s('linearToOutputTexel',h.outputEncoding):'',h.depthPacking?'#define DEPTH_PACKING '+r.depthPacking:'','\n'].filter(m).join('\n')),L=f(L),L=c(L,h),L=g(L,h),F=f(F),F=c(F,h),F=g(F,h),L=_(L),F=_(F),h.isWebGL2&&!r.isRawShaderMaterial){var W=!1,H=/^\s*#version\s+300\s+es\s*\n/;r.isShaderMaterial&&null!==L.match(H)&&null!==F.match(H)&&(W=!0,L=L.replace(H,''),F=F.replace(H,'')),k='#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n'+k,G=['#version 300 es\n','#define varying in',W?'':'out highp vec4 pc_fragColor;',W?'':'#define gl_FragColor pc_fragColor','#define gl_FragDepthEXT gl_FragDepth','#define texture2D texture','#define textureCube texture','#define texture2DProj textureProj','#define texture2DLodEXT textureLod','#define texture2DProjLodEXT textureProjLod','#define textureCubeLodEXT textureLod','#define texture2DGradEXT textureGrad','#define texture2DProjGradEXT textureProjGrad','#define textureCubeGradEXT textureGrad'].join('\n')+'\n'+G,0<V&&(k=k.replace('#version 300 es\n',['#version 300 es\n','#extension GL_OVR_multiview2 : require','layout(num_views = '+V+') in;','#define VIEW_ID gl_ViewID_OVR'].join('\n')),k=k.replace('uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;',['uniform mat4 modelViewMatrices['+V+'];','uniform mat4 projectionMatrices['+V+'];','uniform mat4 viewMatrices['+V+'];','uniform mat3 normalMatrices['+V+'];','#define modelViewMatrix modelViewMatrices[VIEW_ID]','#define projectionMatrix projectionMatrices[VIEW_ID]','#define viewMatrix viewMatrices[VIEW_ID]','#define normalMatrix normalMatrices[VIEW_ID]'].join('\n')),G=G.replace('#version 300 es\n','#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR'),G=G.replace('uniform mat4 viewMatrix;',['uniform mat4 viewMatrices['+V+'];','#define viewMatrix viewMatrices[VIEW_ID]'].join('\n')))}var X=k+L,j=G+F,q=Object(w.a)(x,x.VERTEX_SHADER,X),Y=Object(w.a)(x,x.FRAGMENT_SHADER,j);if(x.attachShader(B,q),x.attachShader(B,Y),void 0===r.index0AttributeName?!0===h.morphTargets&&x.bindAttribLocation(B,0,'position'):x.bindAttribLocation(B,0,r.index0AttributeName),x.linkProgram(B),e.debug.checkShaderErrors){var Z=x.getProgramInfoLog(B).trim(),J=x.getShaderInfoLog(q).trim(),Q=x.getShaderInfoLog(Y).trim(),K=!0,$=!0;if(!1===x.getProgramParameter(B,x.LINK_STATUS)){K=!1;var ee=n(x,q,'vertex'),te=n(x,Y,'fragment');console.error('THREE.WebGLProgram: shader error: ',x.getError(),'gl.VALIDATE_STATUS',x.getProgramParameter(B,x.VALIDATE_STATUS),'gl.getProgramInfoLog',Z,ee,te)}else''===Z?(''===J||''===Q)&&($=!1):console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()',Z);$&&(this.diagnostics={runnable:K,material:r,programLog:Z,vertexShader:{log:J,prefix:k},fragmentShader:{log:Q,prefix:G}})}x.deleteShader(q),x.deleteShader(Y);var ae;this.getUniforms=function(){return void 0===ae&&(ae=new S.a(x,B)),ae};var re;return this.getAttributes=function(){return void 0===re&&(re=u(x,B)),re},this.destroy=function(){x.deleteProgram(B),this.program=void 0},this.name=i.name,this.id=P++,this.cacheKey=a,this.usedTimes=1,this.program=B,this.vertexShader=q,this.fragmentShader=Y,this.numMultiviewViews=V,this}a.d(t,'a',function(){return M});var S=a(67),w=a(270),A=a(61),R=a(1),P=0,L=/^[ \t]*#include +<([\w\d./]+)>/gm,F=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g},function(e,t,a){'use strict';function r(e,t,a,r,o,s,d,l,p,u){e=e===void 0?[]:e,t=t===void 0?n.m:t,d=d===void 0?n._41:d,i.a.call(this,e,t,a,r,o,s,d,l,p,u),this.flipY=!1}a.d(t,'a',function(){return r});var i=a(10),n=a(1);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isCubeTexture=!0,Object.defineProperty(r.prototype,'images',{get:function(){return this.image},set:function(e){this.image=e}})},function(e,t,a){'use strict';function r(e,t,a,r){i.a.call(this,null),this.image={data:e||null,width:t||1,height:a||1,depth:r||1},this.magFilter=n._1,this.minFilter=n._1,this.wrapR=n.l,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}a.d(t,'a',function(){return r});var i=a(10),n=a(1);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isDataTexture2DArray=!0},function(e,t,a){'use strict';function r(e,t,a,r){i.a.call(this,null),this.image={data:e||null,width:t||1,height:a||1,depth:r||1},this.magFilter=n._1,this.minFilter=n._1,this.wrapR=n.l,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}a.d(t,'a',function(){return r});var i=a(10),n=a(1);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isDataTexture3D=!0},function(e,t,a){'use strict';function r(e,t,a){var r=e.createShader(t);return e.shaderSource(r,a),e.compileShader(r),r}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(){function e(e){var t=r.get(e);return void 0===t&&(t={},r.set(e,t)),t}function t(e){r.delete(e)}function a(e,t,a){r.get(e)[t]=a}var r=new WeakMap;return{get:e,remove:t,update:a,dispose:function(){r=new WeakMap}}}a.d(t,'a',function(){return r})},function(e,t,a){'use strict';function r(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.program===t.program?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.program.id-t.program.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function i(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function n(){function e(e,r,i,n,o,d){var l=t[a];return void 0===l?(l={id:e.id,object:e,geometry:r,material:i,program:i.program||s,groupOrder:n,renderOrder:e.renderOrder,z:o,group:d},t[a]=l):(l.id=e.id,l.object=e,l.geometry=r,l.material=i,l.program=i.program||s,l.groupOrder=n,l.renderOrder=e.renderOrder,l.z=o,l.group=d),a++,l}var t=[],a=0,n=[],o=[],s={id:-1};return{opaque:n,transparent:o,init:function(){a=0,n.length=0,o.length=0},push:function(t,a,r,i,s,d){var l=e(t,a,r,i,s,d);(!0===r.transparent?o:n).push(l)},unshift:function(t,a,r,i,s,d){var l=e(t,a,r,i,s,d);(!0===r.transparent?o:n).unshift(l)},sort:function(){1<n.length&&n.sort(r),1<o.length&&o.sort(i)}}}function o(){function e(t){var r=t.target;r.removeEventListener('dispose',e),a.delete(r)}function t(t,r){var i=a.get(t),o;return void 0===i?(o=new n,a.set(t,new WeakMap),a.get(t).set(r,o),t.addEventListener('dispose',e)):(o=i.get(r),void 0===o&&(o=new n,i.set(r,o))),o}var a=new WeakMap;return{get:t,dispose:function(){a=new WeakMap}}}a.d(t,'a',function(){return o})},function(e,t,a){'use strict';function r(){var e=new n.a,t=[],a=[];return{init:function(){t.length=0,a.length=0},state:{lightsArray:t,shadowsArray:a,lights:e},setupLights:function(r){e.setup(t,a,r)},pushLight:function(e){t.push(e)},pushShadow:function(e){a.push(e)}}}function i(){function e(t){var r=t.target;r.removeEventListener('dispose',e),a.delete(r)}function t(t,i){var n;return!1===a.has(t)?(n=new r,a.set(t,new WeakMap),a.get(t).set(i,n),t.addEventListener('dispose',e)):!1===a.get(t).has(i)?(n=new r,a.get(t).set(i,n)):n=a.get(t).get(i),n}var a=new WeakMap;return{get:t,dispose:function(){a=new WeakMap}}}a.d(t,'a',function(){return i});var n=a(274)},function(e,t,a){'use strict';function r(){var e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];var a;switch(t.type){case'DirectionalLight':a={direction:new p.a,color:new o.a,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new d.a};break;case'SpotLight':a={position:new p.a,direction:new p.a,color:new o.a,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new d.a};break;case'PointLight':a={position:new p.a,color:new o.a,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new d.a,shadowCameraNear:1,shadowCameraFar:1e3};break;case'HemisphereLight':a={direction:new p.a,skyColor:new o.a,groundColor:new o.a};break;case'RectAreaLight':a={color:new o.a,position:new p.a,halfWidth:new p.a,halfHeight:new p.a};}return e[t.id]=a,a}}}function n(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function i(){function e(e,o,s){for(var p=0,r=0,c=0,g=0;9>g;g++)a.probe[g].set(0,0,0);var f=0,h=0,_=0,x=0,y=0,v=0,b=0,T=0,E=s.matrixWorldInverse;e.sort(n);for(var g=0,M=e.length;g<M;g++){var S=e[g],w=S.color,A=S.intensity,R=S.distance,P=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)p+=w.r*A,r+=w.g*A,c+=w.b*A;else if(S.isLightProbe)for(var L=0;9>L;L++)a.probe[L].addScaledVector(S.sh.coefficients[L],A);else if(S.isDirectionalLight){var F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),F.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),F.direction.sub(i),F.direction.transformDirection(E),F.shadow=S.castShadow,S.castShadow){var C=S.shadow;F.shadowBias=C.bias,F.shadowRadius=C.radius,F.shadowMapSize=C.mapSize,a.directionalShadowMap[f]=P,a.directionalShadowMatrix[f]=S.shadow.matrix,v++}a.directional[f]=F,f++}else if(S.isSpotLight){var F=t.get(S);if(F.position.setFromMatrixPosition(S.matrixWorld),F.position.applyMatrix4(E),F.color.copy(w).multiplyScalar(A),F.distance=R,F.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),F.direction.sub(i),F.direction.transformDirection(E),F.coneCos=l(S.angle),F.penumbraCos=l(S.angle*(1-S.penumbra)),F.decay=S.decay,F.shadow=S.castShadow,S.castShadow){var C=S.shadow;F.shadowBias=C.bias,F.shadowRadius=C.radius,F.shadowMapSize=C.mapSize,a.spotShadowMap[_]=P,a.spotShadowMatrix[_]=S.shadow.matrix,T++}a.spot[_]=F,_++}else if(S.isRectAreaLight){var F=t.get(S);F.color.copy(w).multiplyScalar(A),F.position.setFromMatrixPosition(S.matrixWorld),F.position.applyMatrix4(E),m.identity(),d.copy(S.matrixWorld),d.premultiply(E),m.extractRotation(d),F.halfWidth.set(.5*S.width,0,0),F.halfHeight.set(0,.5*S.height,0),F.halfWidth.applyMatrix4(m),F.halfHeight.applyMatrix4(m),a.rectArea[x]=F,x++}else if(S.isPointLight){var F=t.get(S);if(F.position.setFromMatrixPosition(S.matrixWorld),F.position.applyMatrix4(E),F.color.copy(S.color).multiplyScalar(S.intensity),F.distance=S.distance,F.decay=S.decay,F.shadow=S.castShadow,S.castShadow){var C=S.shadow;F.shadowBias=C.bias,F.shadowRadius=C.radius,F.shadowMapSize=C.mapSize,F.shadowCameraNear=C.camera.near,F.shadowCameraFar=C.camera.far,a.pointShadowMap[h]=P,a.pointShadowMatrix[h]=S.shadow.matrix,b++}a.point[h]=F,h++}else if(S.isHemisphereLight){var F=t.get(S);F.direction.setFromMatrixPosition(S.matrixWorld),F.direction.transformDirection(E),F.direction.normalize(),F.skyColor.copy(S.color).multiplyScalar(A),F.groundColor.copy(S.groundColor).multiplyScalar(A),a.hemi[y]=F,y++}}a.ambient[0]=p,a.ambient[1]=r,a.ambient[2]=c;var U=a.hash;(U.directionalLength!==f||U.pointLength!==h||U.spotLength!==_||U.rectAreaLength!==x||U.hemiLength!==y||U.numDirectionalShadows!==v||U.numPointShadows!==b||U.numSpotShadows!==T)&&(a.directional.length=f,a.spot.length=_,a.rectArea.length=x,a.point.length=h,a.hemi.length=y,a.directionalShadowMap.length=v,a.pointShadowMap.length=b,a.spotShadowMap.length=T,a.directionalShadowMatrix.length=v,a.pointShadowMatrix.length=b,a.spotShadowMatrix.length=T,U.directionalLength=f,U.pointLength=h,U.spotLength=_,U.rectAreaLength=x,U.hemiLength=y,U.numDirectionalShadows=v,U.numPointShadows=b,U.numSpotShadows=T,a.version=u++)}for(var t=new r,a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},o=0;9>o;o++)a.probe.push(new p.a);var i=new p.a,d=new s.a,m=new s.a;return{setup:e,state:a}}a.d(t,'a',function(){return i});var o=a(11),s=a(6),d=a(2),p=a(0),u=0},function(e,t,a){'use strict';function r(e,t,a){function r(a,r){var i=t.update(U);L.uniforms.shadow_pass.value=a.map.texture,L.uniforms.resolution.value=a.mapSize,L.uniforms.radius.value=a.radius,e.setRenderTarget(a.mapPass),e.clear(),e.renderBufferDirect(r,null,i,L,U,null),F.uniforms.shadow_pass.value=a.mapPass.texture,F.uniforms.resolution.value=a.mapSize,F.uniforms.radius.value=a.radius,e.setRenderTarget(a.map),e.clear(),e.renderBufferDirect(r,null,i,F,U,null)}function x(e,t,a){var r=e<<0|t<<1|a<<2,i=w[r];return void 0===i&&(i=new o.a({depthPacking:n._18,morphTargets:e,skinning:t}),w[r]=i),i}function y(e,t,a){var r=e<<0|t<<1|a<<2,i=A[r];return void 0===i&&(i=new s.a({morphTargets:e,skinning:t}),A[r]=i),i}function v(t,a,r,i,o,s){var d=t.geometry,l=null,p=x,u=t.customDepthMaterial;if(!0===r.isPointLight&&(p=y,u=t.customDistanceMaterial),void 0===u){var m=!1;!0===a.morphTargets&&(!0===d.isBufferGeometry?m=d.morphAttributes&&d.morphAttributes.position&&0<d.morphAttributes.position.length:!0===d.isGeometry&&(m=d.morphTargets&&0<d.morphTargets.length));var c=!1;!0===t.isSkinnedMesh&&(!0===a.skinning?c=!0:console.warn('THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:',t));var g=!0===t.isInstancedMesh;l=p(m,c,g)}else l=u;if(e.localClippingEnabled&&!0===a.clipShadows&&0!==a.clippingPlanes.length){var f=l.uuid,h=a.uuid,_=R[f];void 0===_&&(_={},R[f]=_);var v=_[h];void 0===v&&(v=l.clone(),_[h]=v),l=v}return l.visible=a.visible,l.wireframe=a.wireframe,l.side=s===n._73?null===a.shadowSide?a.side:a.shadowSide:null===a.shadowSide?P[a.side]:a.shadowSide,l.clipShadows=a.clipShadows,l.clippingPlanes=a.clippingPlanes,l.clipIntersection=a.clipIntersection,l.wireframeLinewidth=a.wireframeLinewidth,l.linewidth=a.linewidth,!0===r.isPointLight&&!0===l.isMeshDistanceMaterial&&(l.referencePosition.setFromMatrixPosition(r.matrixWorld),l.nearDistance=i,l.farDistance=o),l}function b(a,r,o,s,d){if(!1!==a.visible){var p=a.layers.test(r.layers);if(p&&(a.isMesh||a.isLine||a.isPoints)&&(a.castShadow||a.receiveShadow&&d===n._73)&&(!a.frustumCulled||T.intersectsObject(a))){a.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,a.matrixWorld);var u=t.update(a),m=a.material;if(Array.isArray(m))for(var c=u.groups,g=0,f=c.length;g<f;g++){var h=c[g],_=m[h.materialIndex];if(_&&_.visible){var x=v(a,_,s,o.near,o.far,d);e.renderBufferDirect(o,null,u,x,a,h)}}else if(m.visible){var x=v(a,m,s,o.near,o.far,d);e.renderBufferDirect(o,null,u,x,a,null)}}for(var y=a.children,E=0,i=y.length;E<i;E++)b(y[E],r,o,s,d)}}var T=new g.a,E=new c.a,M=new c.a,S=new m.a,w=[],A=[],R={},P={0:n.h,1:n.E,2:n.w},L=new d.a({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new c.a},radius:{value:4}},vertexShader:_.a,fragmentShader:h.a}),F=L.clone();F.defines.HORIZONAL_PASS=1;var C=new p.a;C.setAttribute('position',new l.a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var U=new u.a(C,L),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n._16,this.render=function(t,o,s){if(!1!==N.enabled&&(!1!==N.autoUpdate||!1!==N.needsUpdate)&&0!==t.length){var d=e.getRenderTarget(),l=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),u=e.state;u.setBlending(n._5),u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);for(var m=0,c=t.length;m<c;m++){var g=t[m],h=g.shadow;if(void 0===h){console.warn('THREE.WebGLShadowMap:',g,'has no shadow.');continue}E.copy(h.mapSize);var _=h.getFrameExtents();if(E.multiply(_),M.copy(h.mapSize),(E.x>a||E.y>a)&&(console.warn('THREE.WebGLShadowMap:',g,'has shadow exceeding max texture size, reducing'),E.x>a&&(M.x=f(a/_.x),E.x=M.x*_.x,h.mapSize.x=M.x),E.y>a&&(M.y=f(a/_.y),E.y=M.y*_.y,h.mapSize.y=M.y)),null===h.map&&!h.isPointLightShadow&&this.type===n._73){var x={minFilter:n.O,magFilter:n.O,format:n._19};h.map=new i.a(E.x,E.y,x),h.map.texture.name=g.name+'.shadowMap',h.mapPass=new i.a(E.x,E.y,x),h.camera.updateProjectionMatrix()}if(null===h.map){var x={minFilter:n._1,magFilter:n._1,format:n._19};h.map=new i.a(E.x,E.y,x),h.map.texture.name=g.name+'.shadowMap',h.camera.updateProjectionMatrix()}e.setRenderTarget(h.map),e.clear();for(var y=h.getViewportCount(),v=0,w;v<y;v++)w=h.getViewport(v),S.set(M.x*w.x,M.y*w.y,M.x*w.z,M.y*w.w),u.viewport(S),h.updateMatrices(g,v),T=h.getFrustum(),b(o,s,h.camera,g,this.type);h.isPointLightShadow||this.type!==n._73||r(h,s)}N.needsUpdate=!1,e.setRenderTarget(d,l,p)}}}a.d(t,'a',function(){return r});var n=a(1),i=a(68),o=a(276),s=a(277),d=a(42),l=a(20),p=a(19),u=a(43),m=a(14),c=a(2),g=a(59),h=a(278),_=a(279)},function(e,t,a){'use strict';function r(e){i.a.call(this),this.type='MeshDepthMaterial',this.depthPacking=n.i,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}a.d(t,'a',function(){return r});var i=a(30),n=a(1);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isMeshDepthMaterial=!0,r.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},function(e,t,a){'use strict';function r(e){i.a.call(this),this.type='MeshDistanceMaterial',this.referencePosition=new n.a,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}a.d(t,'a',function(){return r});var i=a(30),n=a(0);r.prototype=Object.create(i.a.prototype),r.prototype.constructor=r,r.prototype.isMeshDistanceMaterial=!0,r.prototype.copy=function(e){return i.a.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},function(e,t){'use strict';t.a=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

  float mean = 0.0;
  float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );

  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {

    #ifdef HORIZONAL_PASS

      vec2 distribution = unpack2HalfToRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

    #else

      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;

    #endif

  }

  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;

  float std_dev = sqrt( squared_mean - mean * mean );

  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`},function(e,t){'use strict';t.a=`

void main() {

	gl_Position = vec4( position, 1.0 );

}

`},function(e,t,a){'use strict';function r(e,t,a){function r(t,a,r){var n=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(var s=0;s<r;s++)e.texImage2D(a+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,n);return o}function o(a,r){if(S[a]=1,0===w[a]&&(e.enableVertexAttribArray(a),w[a]=1),A[a]!==r){var i=v?e:t.get('ANGLE_instanced_arrays');i[v?'vertexAttribDivisor':'vertexAttribDivisorANGLE'](a,r),A[a]=r}}function s(t){!0!==R[t]&&(e.enable(t),R[t]=!0)}function d(t){!1!==R[t]&&(e.disable(t),R[t]=!1)}function l(t){return P!==t&&(e.useProgram(t),P=t,!0)}function p(t,a,r,n,o,l,p,u){return t===i._5?void(L&&(d(e.BLEND),L=!1)):(L||(s(e.BLEND),L=!0),t===i.t?void(o=o||a,l=l||r,p=p||n,(a!==C||o!==I)&&(e.blendEquationSeparate($[a],$[o]),C=a,I=o),(r!==U||n!==N||l!==O||p!==D)&&(e.blendFuncSeparate(te[r],te[n],te[l],te[p]),U=r,N=n,O=l,D=p),F=t,z=null):void((t!==F||u!==z)&&((C!==i.b||I!==i.b)&&(e.blendEquation(e.FUNC_ADD),C=i.b,I=i.b),u?t===i._8?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):t===i.d?e.blendFunc(e.ONE,e.ONE):t===i._59?e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA):t===i.Z?e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA):console.error('THREE.WebGLState: Invalid blending: ',t):t===i._8?e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):t===i.d?e.blendFunc(e.SRC_ALPHA,e.ONE):t===i._59?e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR):t===i.Z?e.blendFunc(e.ZERO,e.SRC_COLOR):console.error('THREE.WebGLState: Invalid blending: ',t),U=null,N=null,O=null,D=null,F=t,z=u)))}function u(t){B!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),B=t)}function m(t){t===i.s?d(e.CULL_FACE):(s(e.CULL_FACE),t!==V&&(t===i.q?e.cullFace(e.BACK):t===i.r?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),V=t}function c(t){t!==k&&(X&&e.lineWidth(t),k=t)}function g(t,a,r){t?(s(e.POLYGON_OFFSET_FILL),(G!==a||W!==r)&&(e.polygonOffset(a,r),G=a,W=r)):d(e.POLYGON_OFFSET_FILL)}function f(t){t===void 0&&(t=e.TEXTURE0+H-1),Y!==t&&(e.activeTexture(t),Y=t)}function h(t,a){null===Y&&f();var r=Z[Y];r===void 0&&(r={type:void 0,texture:void 0},Z[Y]=r),(r.type!==t||r.texture!==a)&&(e.bindTexture(t,a||K[t]),r.type=t,r.texture=a)}function _(){var t=Z[Y];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function x(t){!1===J.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),J.copy(t))}function y(t){!1===Q.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),Q.copy(t))}var v=a.isWebGL2,b=new function(){var t=!1,i=new n.a,a=null,o=new n.a(0,0,0,0);return{setMask:function(r){a===r||t||(e.colorMask(r,r,r,r),a=r)},setLocked:function(e){t=e},setClear:function(t,r,n,s,a){!0===a&&(t*=s,r*=s,n*=s),i.set(t,r,n,s),!1===o.equals(i)&&(e.clearColor(t,r,n,s),o.copy(i))},reset:function(){t=!1,a=null,o.set(-1,0,0,0)}}},T=new function(){var t=!1,a=null,r=null,n=null;return{setTest:function(t){t?s(e.DEPTH_TEST):d(e.DEPTH_TEST)},setMask:function(r){a===r||t||(e.depthMask(r),a=r)},setFunc:function(t){r!==t&&(t?t===i._4?e.depthFunc(e.NEVER):t===i.f?e.depthFunc(e.ALWAYS):t===i.L?e.depthFunc(e.LESS):t===i.M?e.depthFunc(e.LEQUAL):t===i.z?e.depthFunc(e.EQUAL):t===i.H?e.depthFunc(e.GEQUAL):t===i.G?e.depthFunc(e.GREATER):t===i._9?e.depthFunc(e.NOTEQUAL):e.depthFunc(e.LEQUAL):e.depthFunc(e.LEQUAL),r=t)},setLocked:function(e){t=e},setClear:function(t){n!==t&&(e.clearDepth(t),n=t)},reset:function(){t=!1,a=null,r=null,n=null}}},E=new function(){var t=!1,a=null,r=null,i=null,n=null,o=null,l=null,p=null,u=null;return{setTest:function(a){t||(a?s(e.STENCIL_TEST):d(e.STENCIL_TEST))},setMask:function(r){a===r||t||(e.stencilMask(r),a=r)},setFunc:function(t,a,o){(r!==t||i!==a||n!==o)&&(e.stencilFunc(t,a,o),r=t,i=a,n=o)},setOp:function(t,a,r){(o!==t||l!==a||p!==r)&&(e.stencilOp(t,a,r),o=t,l=a,p=r)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,a=null,r=null,i=null,n=null,o=null,l=null,p=null,u=null}}},M=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=new Uint8Array(M),w=new Uint8Array(M),A=new Uint8Array(M),R={},P=null,L=null,F=null,C=null,U=null,N=null,I=null,O=null,D=null,z=!1,B=null,V=null,k=null,G=null,W=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,q=e.getParameter(e.VERSION);-1===q.indexOf('WebGL')?-1!==q.indexOf('OpenGL ES')&&(j=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(q)[1]),X=2<=j):(j=parseFloat(/^WebGL\ ([0-9])/.exec(q)[1]),X=1<=j);var Y=null,Z={},J=new n.a,Q=new n.a,K={};K[e.TEXTURE_2D]=r(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=r(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),b.setClear(0,0,0,1),T.setClear(1),E.setClear(0),s(e.DEPTH_TEST),T.setFunc(i.M),u(!1),m(i.q),s(e.CULL_FACE),p(i._5);var $={[i.b]:e.FUNC_ADD,[i._58]:e.FUNC_SUBTRACT,[i._51]:e.FUNC_REVERSE_SUBTRACT};if(v)$[i.W]=e.MIN,$[i.V]=e.MAX;else{var ee=t.get('EXT_blend_minmax');null!==ee&&($[i.W]=ee.MIN_EXT,$[i.V]=ee.MAX_EXT)}var te={[i._74]:e.ZERO,[i._11]:e.ONE,[i._56]:e.SRC_COLOR,[i._54]:e.SRC_ALPHA,[i._55]:e.SRC_ALPHA_SATURATE,[i.y]:e.DST_COLOR,[i.x]:e.DST_ALPHA,[i._15]:e.ONE_MINUS_SRC_COLOR,[i._14]:e.ONE_MINUS_SRC_ALPHA,[i._13]:e.ONE_MINUS_DST_COLOR,[i._12]:e.ONE_MINUS_DST_ALPHA};return{buffers:{color:b,depth:T,stencil:E},initAttributes:function(){for(var e=0,t=S.length;e<t;e++)S[e]=0},enableAttribute:function(e){o(e,0)},enableAttributeAndDivisor:o,disableUnusedAttributes:function(){for(var t=0,a=w.length;t!==a;++t)w[t]!==S[t]&&(e.disableVertexAttribArray(t),w[t]=0)},enable:s,disable:d,useProgram:l,setBlending:p,setMaterial:function(t,a){t.side===i.w?d(e.CULL_FACE):s(e.CULL_FACE);var r=t.side===i.h;a&&(r=!r),u(r),t.blending===i._8&&!1===t.transparent?p(i._5):p(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),T.setFunc(t.depthFunc),T.setTest(t.depthTest),T.setMask(t.depthWrite),b.setMask(t.colorWrite);var n=t.stencilWrite;E.setTest(n),n&&(E.setMask(t.stencilWriteMask),E.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),E.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),g(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits)},setFlipSided:u,setCullFace:m,setLineWidth:c,setPolygonOffset:g,setScissorTest:function(t){t?s(e.SCISSOR_TEST):d(e.SCISSOR_TEST)},activeTexture:f,bindTexture:h,unbindTexture:_,compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error('THREE.WebGLState:',e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error('THREE.WebGLState:',e)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error('THREE.WebGLState:',e)}},scissor:x,viewport:y,reset:function(){for(var t=0;t<w.length;t++)1===w[t]&&(e.disableVertexAttribArray(t),w[t]=0);R={},Y=null,Z={},P=null,F=null,B=null,V=null,b.reset(),T.reset(),E.reset()}}}a.d(t,'a',function(){return r});var i=a(1),n=a(14)},function(e,t,a){'use strict';function r(e,t,a,r,s,d,l){function p(e,t){return j?new OffscreenCanvas(e,t):document.createElementNS('http://www.w3.org/1999/xhtml','canvas')}function u(e,t,a,r){var i=1;if((e.width>r||e.height>r)&&(i=r/_(e.width,e.height)),1>i||!0===t){if('undefined'!=typeof HTMLImageElement&&e instanceof HTMLImageElement||'undefined'!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||'undefined'!=typeof ImageBitmap&&e instanceof ImageBitmap){var n=t?o.a.floorPowerOfTwo:f,s=n(i*e.width),d=n(i*e.height);void 0===K&&(K=p(s,d));var l=a?p(s,d):K;l.width=s,l.height=d;var u=l.getContext('2d');return u.drawImage(e,0,0,s,d),console.warn('THREE.WebGLRenderer: Texture has been resized from ('+e.width+'x'+e.height+') to ('+s+'x'+d+').'),l}return'data'in e&&console.warn('THREE.WebGLRenderer: Image in DataTexture is too big ('+e.width+'x'+e.height+').'),e}return e}function m(e){return o.a.isPowerOfTwo(e.width)&&o.a.isPowerOfTwo(e.height)}function c(e){return!V&&(e.wrapS!==n.l||e.wrapT!==n.l||e.minFilter!==n._1&&e.minFilter!==n.O)}function g(e,t){return e.generateMipmaps&&t&&e.minFilter!==n._1&&e.minFilter!==n.O}function h(t,a,n,o){e.generateMipmap(t);var s=r.get(a);s.__maxMipLevel=i(_(n,o))*Math.LOG2E}function x(a,r){if(!1===V)return a;var i=a;return a===e.RED&&(r===e.FLOAT&&(i=e.R32F),r===e.HALF_FLOAT&&(i=e.R16F),r===e.UNSIGNED_BYTE&&(i=e.R8)),a===e.RGB&&(r===e.FLOAT&&(i=e.RGB32F),r===e.HALF_FLOAT&&(i=e.RGB16F),r===e.UNSIGNED_BYTE&&(i=e.RGB8)),a===e.RGBA&&(r===e.FLOAT&&(i=e.RGBA32F),r===e.HALF_FLOAT&&(i=e.RGBA16F),r===e.UNSIGNED_BYTE&&(i=e.RGBA8)),i===e.R16F||i===e.R32F||i===e.RGBA16F||i===e.RGBA32F?t.get('EXT_color_buffer_float'):(i===e.RGB16F||i===e.RGB32F)&&console.warn('THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.'),i}function y(t){return t===n._1||t===n._3||t===n._2?e.NEAREST:e.LINEAR}function v(e){var t=e.target;t.removeEventListener('dispose',v),E(t),t.isVideoTexture&&X.delete(t),l.memory.textures--}function b(e){var t=e.target;t.removeEventListener('dispose',b),M(t),l.memory.textures--}function E(t){var a=r.get(t);void 0===a.__webglInit||(e.deleteTexture(a.__webglTexture),r.remove(t))}function M(t){var a=r.get(t),n=r.get(t.texture);if(t){if(void 0!==n.__webglTexture&&e.deleteTexture(n.__webglTexture),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLRenderTargetCube)for(var o=0;6>o;o++)e.deleteFramebuffer(a.__webglFramebuffer[o]),a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[o]);else e.deleteFramebuffer(a.__webglFramebuffer),a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer);if(t.isWebGLMultiviewRenderTarget){e.deleteTexture(a.__webglColorTexture),e.deleteTexture(a.__webglDepthStencilTexture),l.memory.textures-=2;for(var o=0,i=a.__webglViewFramebuffers.length;o<i;o++)e.deleteFramebuffer(a.__webglViewFramebuffers[o])}r.remove(t.texture),r.remove(t)}}function S(){var e=q;return e>=k&&console.warn('THREE.WebGLTextures: Trying to use '+e+' texture units while this GPU supports only '+k),q+=1,e}function w(t,i){var n=r.get(t);if(t.isVideoTexture&&D(t),0<t.version&&n.__version!==t.version){var o=t.image;if(void 0===o)console.warn('THREE.WebGLRenderer: Texture marked for update but image is undefined');else if(!1===o.complete)console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');else return void F(n,t,i)}a.activeTexture(e.TEXTURE0+i),a.bindTexture(e.TEXTURE_2D,n.__webglTexture)}function A(t,o){if(6===t.image.length){var s=r.get(t);if(0<t.version&&s.__version!==t.version){L(s,t),a.activeTexture(e.TEXTURE0+o),a.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t.flipY);for(var l=t&&t.isCompressedTexture,p=t.image[0]&&t.image[0].isDataTexture,c=[],f=0;6>f;f++)c[f]=l||p?p?t.image[f].image:t.image[f]:u(t.image[f],!1,!0,G);var i=c[0],_=m(i)||V,y=d.convert(t.format),v=d.convert(t.type),b=x(y,v);P(e.TEXTURE_CUBE_MAP,t,_);var T;if(l){for(var f=0;6>f;f++){T=c[f].mipmaps;for(var E=0,M;E<T.length;E++)M=T[E],t.format!==n._19&&t.format!==n._41?null===y?console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'):a.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+f,E,b,M.width,M.height,0,M.data):a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+f,E,b,M.width,M.height,0,y,v,M.data)}s.__maxMipLevel=T.length-1}else{T=t.mipmaps;for(var f=0;6>f;f++)if(p){a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,b,c[f].width,c[f].height,0,y,v,c[f].data);for(var E=0;E<T.length;E++){var M=T[E],S=M.image[f].image;a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+f,E+1,b,S.width,S.height,0,y,v,S.data)}}else{a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,b,y,v,c[f]);for(var E=0,M;E<T.length;E++)M=T[E],a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+f,E+1,b,y,v,M.image[f])}s.__maxMipLevel=T.length}g(t,_)&&h(e.TEXTURE_CUBE_MAP,t,i.width,i.height),s.__version=t.version,t.onUpdate&&t.onUpdate(t)}else a.activeTexture(e.TEXTURE0+o),a.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture)}}function R(t,i){a.activeTexture(e.TEXTURE0+i),a.bindTexture(e.TEXTURE_CUBE_MAP,r.get(t).__webglTexture)}function P(a,i,o){o?(e.texParameteri(a,e.TEXTURE_WRAP_S,Y[i.wrapS]),e.texParameteri(a,e.TEXTURE_WRAP_T,Y[i.wrapT]),(a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY)&&e.texParameteri(a,e.TEXTURE_WRAP_R,Y[i.wrapR]),e.texParameteri(a,e.TEXTURE_MAG_FILTER,Z[i.magFilter]),e.texParameteri(a,e.TEXTURE_MIN_FILTER,Z[i.minFilter])):(e.texParameteri(a,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(a,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY)&&e.texParameteri(a,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(i.wrapS!==n.l||i.wrapT!==n.l)&&console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'),e.texParameteri(a,e.TEXTURE_MAG_FILTER,y(i.magFilter)),e.texParameteri(a,e.TEXTURE_MIN_FILTER,y(i.minFilter)),i.minFilter!==n._1&&i.minFilter!==n.O&&console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'));var d=t.get('EXT_texture_filter_anisotropic');if(d){if(i.type===n.D&&null===t.get('OES_texture_float_linear'))return;if(i.type===n.I&&null===(V||t.get('OES_texture_half_float_linear')))return;(1<i.anisotropy||r.get(i).__currentAnisotropy)&&(e.texParameterf(a,d.TEXTURE_MAX_ANISOTROPY_EXT,T(i.anisotropy,s.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy)}}function L(t,a){t.__webglInit===void 0&&(t.__webglInit=!0,a.addEventListener('dispose',v),t.__webglTexture=e.createTexture(),l.memory.textures++)}function F(t,r,o){var s=e.TEXTURE_2D;r.isDataTexture2DArray&&(s=e.TEXTURE_2D_ARRAY),r.isDataTexture3D&&(s=e.TEXTURE_3D),L(t,r),a.activeTexture(e.TEXTURE0+o),a.bindTexture(s,t.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);var l=c(r)&&!1===m(r.image),p=u(r.image,l,!1,W),f=m(p)||V,_=d.convert(r.format),y=d.convert(r.type),v=x(_,y);P(s,r,f);var b=r.mipmaps,T;if(r.isDepthTexture){if(v=e.DEPTH_COMPONENT,r.type===n.D){if(!1===V)throw new Error('Float Depth Texture only supported in WebGL2.0');v=e.DEPTH_COMPONENT32F}else V&&(v=e.DEPTH_COMPONENT16);r.format===n.u&&v===e.DEPTH_COMPONENT&&r.type!==n._72&&r.type!==n._68&&(console.warn('THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'),r.type=n._72,y=d.convert(r.type)),r.format===n.v&&(v=e.DEPTH_STENCIL,r.type!==n._67&&(console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'),r.type=n._67,y=d.convert(r.type))),a.texImage2D(e.TEXTURE_2D,0,v,p.width,p.height,0,_,y,null)}else if(r.isDataTexture){if(0<b.length&&f){for(var E=0,i=b.length;E<i;E++)T=b[E],a.texImage2D(e.TEXTURE_2D,E,v,T.width,T.height,0,_,y,T.data);r.generateMipmaps=!1,t.__maxMipLevel=b.length-1}else a.texImage2D(e.TEXTURE_2D,0,v,p.width,p.height,0,_,y,p.data),t.__maxMipLevel=0;}else if(r.isCompressedTexture){for(var E=0,i=b.length;E<i;E++)T=b[E],r.format!==n._19&&r.format!==n._41?null===_?console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'):a.compressedTexImage2D(e.TEXTURE_2D,E,v,T.width,T.height,0,T.data):a.texImage2D(e.TEXTURE_2D,E,v,T.width,T.height,0,_,y,T.data);t.__maxMipLevel=b.length-1}else if(r.isDataTexture2DArray)a.texImage3D(e.TEXTURE_2D_ARRAY,0,v,p.width,p.height,p.depth,0,_,y,p.data),t.__maxMipLevel=0;else if(r.isDataTexture3D)a.texImage3D(e.TEXTURE_3D,0,v,p.width,p.height,p.depth,0,_,y,p.data),t.__maxMipLevel=0;else if(0<b.length&&f){for(var E=0,i=b.length;E<i;E++)T=b[E],a.texImage2D(e.TEXTURE_2D,E,v,_,y,T);r.generateMipmaps=!1,t.__maxMipLevel=b.length-1}else a.texImage2D(e.TEXTURE_2D,0,v,_,y,p),t.__maxMipLevel=0;g(r,f)&&h(e.TEXTURE_2D,r,p.width,p.height),t.__version=r.version,r.onUpdate&&r.onUpdate(r)}function C(t,i,n,o){var s=d.convert(i.texture.format),l=d.convert(i.texture.type),p=x(s,l);a.texImage2D(o,0,p,i.width,i.height,0,s,l,null),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,n,o,r.get(i.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function U(t,a,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),a.depthBuffer&&!a.stencilBuffer){if(r){var i=O(a);e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH_COMPONENT16,a.width,a.height)}else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,a.width,a.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(a.depthBuffer&&a.stencilBuffer){if(r){var i=O(a);e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,a.width,a.height)}else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,a.width,a.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{var n=d.convert(a.texture.format),o=d.convert(a.texture.type),s=x(n,o);if(r){var i=O(a);e.renderbufferStorageMultisample(e.RENDERBUFFER,i,s,a.width,a.height)}else e.renderbufferStorage(e.RENDERBUFFER,s,a.width,a.height)}e.bindRenderbuffer(e.RENDERBUFFER,null)}function N(t,a){var i=a&&a.isWebGLRenderTargetCube;if(i)throw new Error('Depth Texture with cube render targets is not supported');if(e.bindFramebuffer(e.FRAMEBUFFER,t),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');r.get(a.depthTexture).__webglTexture&&a.depthTexture.image.width===a.width&&a.depthTexture.image.height===a.height||(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),w(a.depthTexture,0);var o=r.get(a.depthTexture).__webglTexture;if(a.depthTexture.format===n.u)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(a.depthTexture.format===n.v)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw new Error('Unknown depthTexture format')}function I(t){var a=r.get(t),n=!0===t.isWebGLRenderTargetCube;if(t.depthTexture){if(n)throw new Error('target.depthTexture not supported in Cube render targets');N(a.__webglFramebuffer,t)}else if(n){a.__webglDepthbuffer=[];for(var o=0;6>o;o++)e.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[o]),a.__webglDepthbuffer[o]=e.createRenderbuffer(),U(a.__webglDepthbuffer[o],t)}else e.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer=e.createRenderbuffer(),U(a.__webglDepthbuffer,t);e.bindFramebuffer(e.FRAMEBUFFER,null)}function O(e){return V&&e.isWebGLMultisampleRenderTarget?T(H,e.samples):0}function D(e){var t=l.render.frame;X.get(e)!==t&&(X.set(e,t),e.update())}function z(e,t){e&&e.isWebGLRenderTarget&&(!1===J&&(console.warn('THREE.WebGLTextures.safeSetTexture2D: don\'t use render targets as textures. Use their .texture property instead.'),J=!0),e=e.texture),w(e,t)}function B(e,t){e&&e.isWebGLRenderTargetCube&&(!1===Q&&(console.warn('THREE.WebGLTextures.safeSetTextureCube: don\'t use cube render targets as textures. Use their .texture property instead.'),Q=!0),e=e.texture),e&&e.isCubeTexture||Array.isArray(e.image)&&6===e.image.length?A(e,t):R(e,t)}var V=s.isWebGL2,k=s.maxTextures,G=s.maxCubemapSize,W=s.maxTextureSize,H=s.maxSamples,X=new WeakMap,j='undefined'!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext('2d'),q=0,Y={[n._50]:e.REPEAT,[n.l]:e.CLAMP_TO_EDGE,[n.X]:e.MIRRORED_REPEAT},Z={[n._1]:e.NEAREST,[n._3]:e.NEAREST_MIPMAP_NEAREST,[n._2]:e.NEAREST_MIPMAP_LINEAR,[n.O]:e.LINEAR,[n.Q]:e.LINEAR_MIPMAP_NEAREST,[n.P]:e.LINEAR_MIPMAP_LINEAR},J=!1,Q=!1,K;this.allocateTextureUnit=S,this.resetTextureUnits=function(){q=0},this.setTexture2D=w,this.setTexture2DArray=function(t,i){var n=r.get(t);return 0<t.version&&n.__version!==t.version?void F(n,t,i):void(a.activeTexture(e.TEXTURE0+i),a.bindTexture(e.TEXTURE_2D_ARRAY,n.__webglTexture))},this.setTexture3D=function(t,i){var n=r.get(t);return 0<t.version&&n.__version!==t.version?void F(n,t,i):void(a.activeTexture(e.TEXTURE0+i),a.bindTexture(e.TEXTURE_3D,n.__webglTexture))},this.setTextureCube=A,this.setTextureCubeDynamic=R,this.setupRenderTarget=function(n){var o=r.get(n),s=r.get(n.texture);n.addEventListener('dispose',b),s.__webglTexture=e.createTexture(),l.memory.textures++;var p=!0===n.isWebGLRenderTargetCube,u=!0===n.isWebGLMultisampleRenderTarget,c=!0===n.isWebGLMultiviewRenderTarget,f=m(n)||V;if(p){o.__webglFramebuffer=[];for(var _=0;6>_;_++)o.__webglFramebuffer[_]=e.createFramebuffer()}else if(o.__webglFramebuffer=e.createFramebuffer(),u){if(V){o.__webglMultisampledFramebuffer=e.createFramebuffer(),o.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,o.__webglColorRenderbuffer);var i=d.convert(n.texture.format),y=d.convert(n.texture.type),v=x(i,y),T=O(n);e.renderbufferStorageMultisample(e.RENDERBUFFER,T,v,n.width,n.height),e.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,o.__webglColorRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null),n.depthBuffer&&(o.__webglDepthRenderbuffer=e.createRenderbuffer(),U(o.__webglDepthRenderbuffer,n,!0)),e.bindFramebuffer(e.FRAMEBUFFER,null)}else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.');}else if(c){var E=n.width,M=n.height,S=n.numViews;e.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer);var w=t.get('OVR_multiview2');l.memory.textures+=2;var A=e.createTexture();e.bindTexture(e.TEXTURE_2D_ARRAY,A),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texImage3D(e.TEXTURE_2D_ARRAY,0,e.RGBA8,E,M,S,0,e.RGBA,e.UNSIGNED_BYTE,null),w.framebufferTextureMultiviewOVR(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,A,0,0,S);var R=e.createTexture();e.bindTexture(e.TEXTURE_2D_ARRAY,R),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D_ARRAY,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texImage3D(e.TEXTURE_2D_ARRAY,0,e.DEPTH24_STENCIL8,E,M,S,0,e.DEPTH_STENCIL,e.UNSIGNED_INT_24_8,null),w.framebufferTextureMultiviewOVR(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,R,0,0,S);for(var L=Array(S),_=0;_<S;++_)L[_]=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,L[_]),e.framebufferTextureLayer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,A,0,_);o.__webglColorTexture=A,o.__webglDepthStencilTexture=R,o.__webglViewFramebuffers=L,e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D_ARRAY,null)}if(p){a.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),P(e.TEXTURE_CUBE_MAP,n.texture,f);for(var _=0;6>_;_++)C(o.__webglFramebuffer[_],n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_);g(n.texture,f)&&h(e.TEXTURE_CUBE_MAP,n.texture,n.width,n.height),a.bindTexture(e.TEXTURE_CUBE_MAP,null)}else c||(a.bindTexture(e.TEXTURE_2D,s.__webglTexture),P(e.TEXTURE_2D,n.texture,f),C(o.__webglFramebuffer,n,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),g(n.texture,f)&&h(e.TEXTURE_2D,n.texture,n.width,n.height),a.bindTexture(e.TEXTURE_2D,null));n.depthBuffer&&I(n)},this.updateRenderTargetMipmap=function(t){var i=t.texture,n=m(t)||V;if(g(i,n)){var o=t.isWebGLRenderTargetCube?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,s=r.get(i).__webglTexture;a.bindTexture(o,s),h(o,i,t.width,t.height),a.bindTexture(o,null)}},this.updateMultisampleRenderTarget=function(t){if(t.isWebGLMultisampleRenderTarget)if(V){var a=r.get(t);e.bindFramebuffer(e.READ_FRAMEBUFFER,a.__webglMultisampledFramebuffer),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,a.__webglFramebuffer);var i=t.width,n=t.height,o=e.COLOR_BUFFER_BIT;t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(o|=e.STENCIL_BUFFER_BIT),e.blitFramebuffer(0,0,i,n,0,0,i,n,o,e.NEAREST)}else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.')},this.safeSetTexture2D=z,this.safeSetTextureCube=B}a.d(t,'a',function(){return r});var n=a(1),o=a(4)},function(e,t,a){'use strict';function r(e,t,a){var r=a.isWebGL2;return{convert:function(a){var n;if(a===i._66)return e.UNSIGNED_BYTE;if(a===i._69)return e.UNSIGNED_SHORT_4_4_4_4;if(a===i._70)return e.UNSIGNED_SHORT_5_5_5_1;if(a===i._71)return e.UNSIGNED_SHORT_5_6_5;if(a===i.j)return e.BYTE;if(a===i._52)return e.SHORT;if(a===i._72)return e.UNSIGNED_SHORT;if(a===i.J)return e.INT;if(a===i._68)return e.UNSIGNED_INT;if(a===i.D)return e.FLOAT;if(a===i.I)return r?e.HALF_FLOAT:(n=t.get('OES_texture_half_float'),null===n?null:n.HALF_FLOAT_OES);if(a===i.e)return e.ALPHA;if(a===i._41)return e.RGB;if(a===i._19)return e.RGBA;if(a===i.U)return e.LUMINANCE;if(a===i.T)return e.LUMINANCE_ALPHA;if(a===i.u)return e.DEPTH_COMPONENT;if(a===i.v)return e.DEPTH_STENCIL;if(a===i._48)return e.RED;if(a===i._47||a===i._36||a===i._37||a===i._38)if(n=t.get('WEBGL_compressed_texture_s3tc'),null!==n){if(a===i._47)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===i._36)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===i._37)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===i._38)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===i._46||a===i._45||a===i._35||a===i._34)if(n=t.get('WEBGL_compressed_texture_pvrtc'),null!==n){if(a===i._46)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===i._45)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===i._35)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===i._34)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;return a===i._44?(n=t.get('WEBGL_compressed_texture_etc1'),null===n?null:n.COMPRESSED_RGB_ETC1_WEBGL):a===i._26||a===i._27||a===i._28||a===i._29||a===i._30||a===i._31||a===i._32||a===i._33||a===i._21||a===i._22||a===i._23||a===i._20||a===i._24||a===i._25?(n=t.get('WEBGL_compressed_texture_astc'),null===n?null:a):a===i._67?r?e.UNSIGNED_INT_24_8:(n=t.get('WEBGL_depth_texture'),null===n?null:n.UNSIGNED_INT_24_8_WEBGL):void 0}}}a.d(t,'a',function(){return r});var i=a(1)},function(e,t,a){'use strict';function r(e,t){function a(){if(void 0===w){var e=_.get('OVR_multiview2');if(w=null!==e&&!1===t.getContextAttributes().antialias,w){y=t.getParameter(e.MAX_VIEWS_OVR),v=new n.a(0,0,h),S=new d.a,E=[],T=[],M=[];for(var a=0;a<y;a++)E[a]=new s.a,T[a]=new o.a}}return w}function r(e){return e.isArrayCamera?e.cameras:(M[0]=e,M)}function i(e,a){for(var n=r(e),o=0;o<n.length;o++)E[o].copy(n[o].projectionMatrix);a.setValue(t,'projectionMatrices',E)}function l(e,a){for(var n=r(e),o=0;o<n.length;o++)E[o].copy(n[o].matrixWorldInverse);a.setValue(t,'viewMatrices',E)}function p(e,a,n){for(var o=r(a),s=0;s<o.length;s++)E[s].multiplyMatrices(o[s].matrixWorldInverse,e.matrixWorld),T[s].getNormalMatrix(E[s]);n.setValue(t,'modelViewMatrices',E),n.setValue(t,'normalMatrices',T)}function u(e){if(e.isArrayCamera===void 0)return!0;var t=e.cameras;if(t.length>y)return!1;for(var a=1,r=t.length;a<r;a++)if(t[0].viewport.z!==t[a].viewport.z||t[0].viewport.w!==t[a].viewport.w)return!1;return!0}function m(t){if(b?S.set(b.width,b.height):e.getDrawingBufferSize(S),t.isArrayCamera){var a=t.cameras[0].viewport;v.setSize(a.z,a.w),v.setNumViews(t.cameras.length)}else v.setSize(S.x,S.y),v.setNumViews(h)}function c(t){!1===u(t)||(b=e.getRenderTarget(),m(t),e.setRenderTarget(v))}function g(t){v!==e.getRenderTarget()||(e.setRenderTarget(b),f(t))}function f(e){var a=v,r=a.numViews,n=x.get(a).__webglViewFramebuffers,o=a.width,s=a.height;if(e.isArrayCamera)for(var d=0;d<r;d++){var i=e.cameras[d].viewport,l=i.x,p=i.y,u=l+i.z,m=p+i.w;t.bindFramebuffer(t.READ_FRAMEBUFFER,n[d]),t.blitFramebuffer(0,0,o,s,l,p,u,m,t.COLOR_BUFFER_BIT,t.NEAREST)}else t.bindFramebuffer(t.READ_FRAMEBUFFER,n[0]),t.blitFramebuffer(0,0,o,s,0,0,S.x,S.y,t.COLOR_BUFFER_BIT,t.NEAREST)}var h=2,_=e.extensions,x=e.properties,y=0,v,b,T,E,M,S,w;this.isAvailable=a,this.attachCamera=c,this.detachCamera=g,this.updateCameraProjectionMatricesUniform=i,this.updateCameraViewMatricesUniform=l,this.updateObjectMatricesUniforms=p}a.d(t,'a',function(){return r});var n=a(284),o=a(7),s=a(6),d=a(2)},function(e,t,a){'use strict';function r(e,t,a,r){i.a.call(this,e,t,r),this.depthBuffer=!1,this.stencilBuffer=!1,this.numViews=a}a.d(t,'a',function(){return r});var i=a(68);r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isWebGLMultiviewRenderTarget:!0,copy:function(e){return i.a.prototype.copy.call(this,e),this.numViews=e.numViews,this},setNumViews:function(e){return this.numViews!==e&&(this.numViews=e,this.dispose()),this}})},function(e,t,a){'use strict';function r(e){function t(){return null!==_&&!0===_.isPresenting}function a(){if(t()){var a=_.getEyeParameters('left');M=2*a.renderWidth*T,S=a.renderHeight*T,O=e.getPixelRatio(),e.getSize(U),e.setDrawingBufferSize(M,S,1),L.viewport.set(0,0,M/2,S),F.viewport.set(M/2,0,M/2,S),D.start(),h.dispatchEvent({type:'sessionstart'})}else h.enabled&&e.setDrawingBufferSize(U.width,U.height,O),D.stop(),h.dispatchEvent({type:'sessionend'})}function r(e){for(var t=navigator.getGamepads&&navigator.getGamepads(),a=0,r=t.length,i;a<r;a++)if(i=t[a],i&&('Daydream Controller'===i.id||'Gear VR Controller'===i.id||'Oculus Go Controller'===i.id||'OpenVR Gamepad'===i.id||i.id.startsWith('Oculus Touch')||i.id.startsWith('HTC Vive Focus')||i.id.startsWith('Spatial Controller'))){var n=i.hand;if(0===e&&(''===n||'right'===n))return i;if(1===e&&'left'===n)return i}}function f(){for(var e=0;e<y.length;e++){var t=y[e],a=r(e);if(a!==void 0&&a.pose!==void 0){if(null===a.pose)return;var i=a.pose;!1===i.hasPosition&&t.position.set(.2,-.6,-.05),null!==i.position&&t.position.fromArray(i.position),null!==i.orientation&&t.quaternion.fromArray(i.orientation),t.matrix.compose(t.position,t.quaternion,t.scale),t.matrix.premultiply(v),t.matrix.decompose(t.position,t.quaternion,t.scale),t.matrixWorldNeedsUpdate=!0,t.visible=!0;var n='Daydream Controller'===a.id?0:1;N[e]===void 0&&(N[e]=!1),N[e]!==a.buttons[n].pressed&&(N[e]=a.buttons[n].pressed,!0===N[e]?t.dispatchEvent({type:'selectstart'}):(t.dispatchEvent({type:'selectend'}),t.dispatchEvent({type:'select'}))),n=2,I[e]===void 0&&(I[e]=!1),a.buttons[n]!==void 0&&I[e]!==a.buttons[n].pressed&&(I[e]=a.buttons[n].pressed,!0===I[e]?t.dispatchEvent({type:'squeezestart'}):(t.dispatchEvent({type:'squeezeend'}),t.dispatchEvent({type:'squeeze'})))}else t.visible=!1}}function i(e,t){null!==t&&4===t.length&&e.set(t[0]*M,t[1]*S,t[2]*M,t[3]*S)}var h=this,_=null,x=null,y=[],v=new o.a,b=new o.a,T=1,E='local-floor',M,S;'undefined'!=typeof window&&'VRFrameData'in window&&(x=new window.VRFrameData,window.addEventListener('vrdisplaypresentchange',a,!1));var w=new o.a,A=new p.a,R=new d.a,P=new m.a,L=new m.a;L.viewport=new l.a,L.layers.enable(1);var F=new m.a;F.viewport=new l.a,F.layers.enable(2);var C=new u.a([L,F]);C.layers.enable(1),C.layers.enable(2);var U=new s.a,N=[],I=[],O;this.enabled=!1,this.getController=function(e){var t=y[e];return void 0===t&&(t=new n.a,t.matrixAutoUpdate=!1,t.visible=!1,y[e]=t),t},this.getDevice=function(){return _},this.setDevice=function(e){e!==void 0&&(_=e),D.setContext(e)},this.setFramebufferScaleFactor=function(e){T=e},this.setReferenceSpaceType=function(e){E=e},this.getCamera=function(e){var t='local-floor'===E?1.6:0;if(_.depthNear=e.near,_.depthFar=e.far,_.getFrameData(x),'local-floor'===E){var a=_.stageParameters;a?v.fromArray(a.sittingToStandingTransform):v.makeTranslation(0,t,0)}var r=x.pose;P.matrix.copy(v),P.matrix.decompose(P.position,P.quaternion,P.scale),null!==r.orientation&&(A.fromArray(r.orientation),P.quaternion.multiply(A)),null!==r.position&&(A.setFromRotationMatrix(v),R.fromArray(r.position),R.applyQuaternion(A),P.position.add(R)),P.updateMatrixWorld(),e.matrixWorld.copy(P.matrixWorld);for(var n=e.children,o=0,s=n.length;o<s;o++)n[o].updateMatrixWorld(!0);L.near=e.near,F.near=e.near,L.far=e.far,F.far=e.far,L.matrixWorldInverse.fromArray(x.leftViewMatrix),F.matrixWorldInverse.fromArray(x.rightViewMatrix),b.getInverse(v),'local-floor'===E&&(L.matrixWorldInverse.multiply(b),F.matrixWorldInverse.multiply(b));var d=e.parent;null!==d&&(w.getInverse(d.matrixWorld),L.matrixWorldInverse.multiply(w),F.matrixWorldInverse.multiply(w)),L.matrixWorld.getInverse(L.matrixWorldInverse),F.matrixWorld.getInverse(F.matrixWorldInverse),L.projectionMatrix.fromArray(x.leftProjectionMatrix),F.projectionMatrix.fromArray(x.rightProjectionMatrix),Object(g.a)(C,L,F);var l=_.getLayers();if(l.length){var p=l[0];i(L.viewport,p.leftBounds),i(F.viewport,p.rightBounds)}return f(),C},this.getStandingMatrix=function(){return v},this.isPresenting=t;var D=new c.a;this.setAnimationLoop=function(e){D.setAnimationLoop(e),t()&&D.start()},this.submitFrame=function(){t()&&_.submitFrame()},this.dispose=function(){'undefined'!=typeof window&&window.removeEventListener('vrdisplaypresentchange',a)},this.setFrameOfReferenceType=function(){console.warn('THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.')}}a.d(t,'a',function(){return r});var i=a(9),n=a(69),o=a(6),s=a(2),d=a(0),l=a(14),p=a(27),u=a(70),m=a(44),c=a(41),g=a(72);Object.assign(r.prototype,i.a.prototype)},function(e,t,a){'use strict';function r(e,t){function a(){return null!==x&&null!==y}function r(e){for(var t=0;t<T.length;t++)E[t]===e.inputSource&&T[t].dispatchEvent({type:e.type})}function i(){e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),R.stop(),_.dispatchEvent({type:'sessionend'})}function m(e){y=e,R.setContext(x),R.start(),_.dispatchEvent({type:'sessionstart'})}function c(){for(var e=0;e<T.length;e++)E[e]=g(e)}function g(e){for(var t=x.inputSources,a=0;a<t.length;a++){var r=t[a],i=r.handedness;if(0===e&&('none'===i||'right'===i))return r;if(1===e&&'left'===i)return r}}function f(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.getInverse(e.matrixWorld)}function h(t,a){if(b=a.getViewerPose(y),null!==b){var r=b.views,n=x.renderState.baseLayer;e.setFramebuffer(n.framebuffer);for(var o=0;o<r.length;o++){var i=r[o],s=n.getViewport(i),d=i.transform.inverse.matrix,l=w.cameras[o];l.matrix.fromArray(d).getInverse(l.matrix),l.projectionMatrix.fromArray(i.projectionMatrix),l.viewport.set(s.x,s.y,s.width,s.height),0===o&&w.matrix.copy(l.matrix)}}for(var o=0;o<T.length;o++){var p=T[o],u=E[o];if(u){var m=a.getPose(u.targetRaySpace,y);if(null!==m){p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.visible=!0;continue}}p.visible=!1}A&&A(t)}var _=this,x=null,y=null,v='local-floor',b=null,T=[],E=[],M=new l.a;M.layers.enable(1),M.viewport=new s.a;var S=new l.a;S.layers.enable(2),S.viewport=new s.a;var w=new d.a([M,S]);w.layers.enable(1),w.layers.enable(2),this.enabled=!1,this.getController=function(e){var t=T[e];return void 0===t&&(t=new n.a,t.matrixAutoUpdate=!1,t.visible=!1,T[e]=t),t},this.setFramebufferScaleFactor=function(){},this.setReferenceSpaceType=function(e){v=e},this.getSession=function(){return x},this.setSession=function(e){x=e,null!==x&&(x.addEventListener('select',r),x.addEventListener('selectstart',r),x.addEventListener('selectend',r),x.addEventListener('squeeze',r),x.addEventListener('squeezestart',r),x.addEventListener('squeezeend',r),x.addEventListener('end',i),x.updateRenderState({baseLayer:new XRWebGLLayer(x,t)}),x.requestReferenceSpace(v).then(m),x.addEventListener('inputsourceschange',c),c())},this.getCamera=function(e){var t=e.parent,a=w.cameras;f(w,t);for(var r=0;r<a.length;r++)f(a[r],t);e.matrixWorld.copy(w.matrixWorld);for(var i=e.children,r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(!0);return Object(u.a)(w,M,S),w},this.isPresenting=a;var A=null,R=new p.a;R.setAnimationLoop(h),this.setAnimationLoop=function(e){A=e},this.dispose=function(){},this.getStandingMatrix=function(){return console.warn('THREE.WebXRManager: getStandingMatrix() is no longer needed.'),new o.a},this.getDevice=function(){console.warn('THREE.WebXRManager: getDevice() has been deprecated.')},this.setDevice=function(){console.warn('THREE.WebXRManager: setDevice() has been deprecated.')},this.setFrameOfReferenceType=function(){console.warn('THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.')},this.submitFrame=function(){}}a.d(t,'a',function(){return r});var i=a(9),n=a(69),o=a(6),s=a(14),d=a(70),l=a(44),p=a(41),u=a(72);Object.assign(r.prototype,i.a.prototype)},function(e,t,a){'use strict';function r(e,t,a,r,n,o){i.a.call(this),this.type='OrthographicCamera',this.zoom=1,this.view=null,this.left=e===void 0?-1:e,this.right=t===void 0?1:t,this.top=a===void 0?1:a,this.bottom=r===void 0?-1:r,this.near=n===void 0?.1:n,this.far=o===void 0?2e3:o,this.updateProjectionMatrix()}a.d(t,'a',function(){return r});var i=a(71),n=a(8);r.prototype=Object.assign(Object.create(i.a.prototype),{constructor:r,isOrthographicCamera:!0,copy:function(e,t){return i.a.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this},setViewOffset:function(e,t,a,r,i,n){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=r,this.view.width=i,this.view.height=n,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=a-e,n=a+e,o=r+t,s=r-t;if(null!==this.view&&this.view.enabled){var d=this.zoom/(this.view.width/this.view.fullWidth),l=this.zoom/(this.view.height/this.view.fullHeight),p=(this.right-this.left)/this.view.width,u=(this.top-this.bottom)/this.view.height;i+=p*(this.view.offsetX/d),n=i+p*(this.view.width/d),o-=u*(this.view.offsetY/l),s=o-u*(this.view.height/l)}this.projectionMatrix.makeOrthographic(i,n,o,s,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var t=n.a.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}})},function(e,t,a){'use strict';function r(e){s.a.call(this,e)}a.d(t,'a',function(){return r});var i=a(1),n=a(289),o=a(10),s=a(73);r.prototype=Object.assign(Object.create(s.a.prototype),{constructor:r,load:function(e,t,a,r){var s=new o.a,d=new n.a(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(a){s.image=a;var r=0<e.search(/\.jpe?g($|\?)/i)||0===e.search(/^data\:image\/jpeg/);s.format=r?i._41:i._19,s.needsUpdate=!0,void 0!==t&&t(s)},a,r),s}})},function(e,t,a){'use strict';function r(e){n.a.call(this,e)}a.d(t,'a',function(){return r});var i=a(290),n=a(73);r.prototype=Object.assign(Object.create(n.a.prototype),{constructor:r,load:function(e,t,a,r){function n(){l.removeEventListener('load',n,!1),l.removeEventListener('error',o,!1),i.a.add(e,this),t&&t(this),s.manager.itemEnd(e)}function o(t){l.removeEventListener('load',n,!1),l.removeEventListener('error',o,!1),r&&r(t),s.manager.itemError(e),s.manager.itemEnd(e)}void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);var s=this,d=i.a.get(e);if(void 0!==d)return s.manager.itemStart(e),setTimeout(function(){t&&t(d),s.manager.itemEnd(e)},0),d;var l=document.createElementNS('http://www.w3.org/1999/xhtml','img');return l.addEventListener('load',n,!1),l.addEventListener('error',o,!1),'data:'!==e.substr(0,5)&&void 0!==this.crossOrigin&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}})},function(e,t,a){'use strict';a.d(t,'a',function(){return r});var r={enabled:!1,files:{},add:function(e,t){!1===this.enabled||(this.files[e]=t)},get:function(e){return!1===this.enabled?void 0:this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}}},function(e,t,a){'use strict';a.d(t,'a',function(){return r});var r=new function(e,t,a){var r=this,i=!1,n=0,o=0,s=void 0,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this.itemStart=function(e){o++,!1==i&&r.onStart!==void 0&&r.onStart(e,n,o),i=!0},this.itemEnd=function(e){n++,r.onProgress!==void 0&&r.onProgress(e,n,o),n==o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return d.push(e,t),this},this.removeHandler=function(e){var t=d.indexOf(e);return-1!==t&&d.splice(t,2),this},this.getHandler=function(e){for(var t=0,a=d.length;t<a;t+=2){var r=d[t],i=d[t+1];if(r.global&&(r.lastIndex=0),r.test(e))return i}return null}}},function(e,t,a){'use strict';a.d(t,'a',function(){return n});var r=a(74),i=a(293),n=r.v.registerPlugin(i.a)||r.v},function(e,a,r){'use strict';r.d(a,'a',function(){return ye});var i=r(74),s=function(){return'undefined'!=typeof window},d={},f=180/n,c=n/180,h=o,_=1e8,x=/([A-Z])/g,y=/[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,v=/(?:left|right|width|margin|padding|x)/i,b=/[\s,\(]\S/,T={autoAlpha:'opacity,visibility',scale:'scaleX,scaleY',alpha:'opacity'},E=function(e,t){return t.set(t.t,t.p,~~(1e3*(t.s+t.c*e))/1e3+t.u,t)},M=function(e,t){return t.set(t.t,t.p,1===e?t.e:~~(1e3*(t.s+t.c*e))/1e3+t.u,t)},S=function(e,t){return t.set(t.t,t.p,e?~~(1e3*(t.s+t.c*e))/1e3+t.u:t.b,t)},w=function(e,t){var a=t.s+t.c*e;t.set(t.t,t.p,~~(a+(0>a?-.5:.5))+t.u,t)},A=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},R=function(e,t){return t.set(t.t,t.p,1===e?t.e:t.b,t)},P=function(e,t,a){return e.style[t]=a},L=function(e,t,a){return e.style.setProperty(t,a)},F=function(e,t,a){return e._gsap[t]=a},C=function(e,t,a){return e._gsap.scaleX=e._gsap.scaleY=a},U=function(e,t,a,r,i){var n=e._gsap;n.scaleX=n.scaleY=a,n.renderTransform(i,n)},N=function(e,t,a,r,i){var n=e._gsap;n[t]=a,n.renderTransform(i,n)},I='transform',O=I+'Origin',D=function(t,a){var r=be.createElementNS?be.createElementNS((a||'http://www.w3.org/1999/xhtml').replace(/^https/,'http'),t):be.createElement(t);return r.style?r:be.createElement(t)},B=function e(t,a,r){var i=getComputedStyle(t);return i[a]||i.getPropertyValue(a.replace(x,'-$1').toLowerCase())||i.getPropertyValue(a)||!r&&e(t,V(a)||a,1)||''},z=['O','Moz','ms','Ms','Webkit'],V=function(t,a){var r=a||Me,e=r.style,n=5;if(t in e)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(z[n]+t in e););return 0>n?null:(3==n?'ms':0<=n?z[n]:'')+t},k=function(){s()&&(ve=window,be=ve.document,Te=be.documentElement,Me=D('div')||{style:{}},Se=D('div'),I=V(I),O=V(O),Me.style.cssText='border-width:0;line-height:0;position:absolute;padding:0',Ae=!!V('perspective'),Ee=1)},G=function e(t){var a=D('svg',this.ownerSVGElement&&this.ownerSVGElement.getAttribute('xmlns')||'http://www.w3.org/2000/svg'),r=this.parentNode,i=this.nextSibling,n=this.style.cssText,o;if(Te.appendChild(a),a.appendChild(this),this.style.display='block',t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch(t){}else this._gsapBBox&&(o=this._gsapBBox());return i?r.insertBefore(this,i):r.appendChild(this),Te.removeChild(a),this.style.cssText=n,o},W=function(e,t){for(var a=t.length;a--;)if(e.hasAttribute(t[a]))return e.getAttribute(t[a])},H=function(e){var t;try{t=e.getBBox()}catch(a){t=G.call(e,!0)}return!t||t.width||t.x||t.y?t:{x:+W(e,['x','cx','x1'])||0,y:+W(e,['y','cy','y1'])||0,width:0,height:0}},X=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&H(t))},j=function(e,t){if(t){var a=e.style;t in d&&(t=I),a.removeProperty?(('ms'===t.substr(0,2)||'webkit'===t.substr(0,6))&&(t='-'+t),a.removeProperty(t.replace(x,'-$1').toLowerCase())):a.removeAttribute(t)}},q=function(e,t,a,r,n,o){var s=new i.b(e._pt,t,a,0,1,o?R:A);return e._pt=s,s.b=r,s.e=n,e._props.push(a),s},Y={deg:1,rad:1,turn:1},Z=function(e,t,a,r){var n=parseFloat(a),o=(a+'').substr((n+'').length)||'px',s=Me.style,l=v.test(t),p='svg'===e.tagName.toLowerCase(),u=(p?'client':'offset')+(l?'Width':'Height'),m=100,c='px'===r,g,f,h,_;return r===o||Y[r]||Y[o]?n:(_=e.getCTM&&X(e),'%'===r&&d[t])?Object(i.r)(n/(_?e.getBBox()[l?'width':'height']:e[u])*m):(s[l?'width':'height']=m+(c?o:r),f='em'===r&&e.appendChild&&!p?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),f&&f!==be&&f.appendChild||(f=be.body),h=f._gsap,h&&'%'===r&&h.width&&l&&h.time===i.t.time)?Object(i.r)(n/h.width*m):(f.appendChild(Me),g=Me[u],f.removeChild(Me),l&&'%'==r&&(h=Object(i.g)(f),h.time=i.t.time,h.width=f[u]),Object(i.r)(c?g*n/m:m/g*n))},J=function(e,t,a,r){var n;return Ee||k(),t in T&&'transform'!==t&&(t=T[t],~t.indexOf(',')&&(t=t.split(',')[0])),d[t]&&'transform'!==t?(n=de(e,r),n='transformOrigin'===t?le(B(e,O))+n.zOrigin+'px':n[t]):(n=e.style[t],(!n||'auto'===n||r||~n.indexOf('calc('))&&(n=B(e,t)||Object(i.h)(e,t)||('opacity'===t?1:0))),a?Z(e,t,n,a)+a:n},Q=function(e,t,r,n){var o=new i.b(this._pt,e.style,t,0,1,i.p),s=0,d=0,l,a,p,u,c,g,f,h,_,x,v,b,T;if(o.b=r,o.e=n,r+='',n+='','auto'===n&&(e.style[t]=n,n=B(e,t)||n,e.style[t]=r),l=[r,n],Object(i.d)(l),r=l[0],n=l[1],g=r.indexOf('rgba('),f=n.indexOf('rgba('),!!g!=!!f&&(g?r=r.substr(g)+' '+r.substr(0,g-1):n=n.substr(f)+' '+n.substr(0,f-1)),p=r.match(y)||[],T=n.match(y)||[],T.length){for(;a=y.exec(n);)f=a[0],_=n.substring(s,a.index),c?c=(c+1)%5:'rgba('===_.substr(-5)&&(c=1),f!==(g=p[d++]||'')&&(u=parseFloat(g)||0,v=g.substr((u+'').length),b='='===f.charAt(1)?+(f.charAt(0)+'1'):0,b&&(f=f.substr(2)),h=parseFloat(f),x=f.substr((h+'').length),s=y.lastIndex-x.length,!x&&(x=x||i.e.units[t]||v,s===n.length&&(n+=x,o.e+=x)),v!==x&&(u=Z(e,t,g,x)||0),o._pt={_next:o._pt,p:_||1==d?_:',',s:u,c:b?b*h:h-u,m:c&&4>c?m:0});o.c=s<n.length?n.substring(s,n.length):''}else o.r='display'===t&&'none'===n?R:A;return i.o.test(n)&&(o.e=0),this._pt=o,o},K={top:'0%',bottom:'100%',left:'0%',right:'100%',center:'50%'},$=function(e){var t=e.split(' '),a=t[0],r=t[1]||'50%';return('top'===a||'bottom'===a||'left'===r||'right'===r)&&(e=a,a=r,r=e),t[0]=K[a]||a,t[1]=K[r]||r,t.join(' ')},ee=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var a=t.t,r=a.style,n=t.u,o,s,l;if('all'===n||!0===n)r.cssText='',s=1;else for(n=n.split(','),l=n.length;-1<--l;)o=n[l],d[o]&&(s=1,o='transformOrigin'===o?O:I),j(a,o);s&&(j(a,I),s=a._gsap,s&&(s.svg&&a.removeAttribute('transform'),de(a,1)))}},te={clearProps:function(e,t,a,r,n){if('isFromStart'!==n.data){var o=e._pt=new i.b(e._pt,t,a,0,0,ee);return o.u=r,o.pr=-10,o.tween=n,e._props.push(a),1}}},ae=[1,0,0,1,0,0],re={},ie=function(e){return'matrix(1, 0, 0, 1, 0, 0)'===e||'none'===e||!e},ne=function(e){var t=B(e,I);return ie(t)?ae:t.substr(7).match(i.m).map(i.r)},oe=function(e,t){var a=e._gsap,r=e.style,i=ne(e),n,o,s,d;return a.svg&&e.getAttribute('transform')?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],'1,0,0,1,0,0'===i.join(',')?ae:i):(i!==ae||e.offsetParent||e===Te||a.svg||(s=r.display,r.display='block',n=e.parentNode,n&&e.offsetParent||(d=1,o=e.nextSibling,Te.appendChild(e)),i=ne(e),s?r.display=s:j(e,'display'),d&&(o?n.insertBefore(e,o):n?n.appendChild(e):Te.removeChild(e))),t&&6<i.length?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},se=function(e,t,r,i,n,o){var s=e._gsap,l=n||oe(e,!0),p=s.xOrigin||0,u=s.yOrigin||0,m=s.xOffset||0,g=s.yOffset||0,f=l[0],a=l[1],h=l[2],_=l[3],d=l[4],v=l[5],T=t.split(' '),E=parseFloat(T[0])||0,M=parseFloat(T[1])||0,S,w,A,x;r?l!==ae&&(w=f*_-a*h)&&(A=E*(_/w)+M*(-h/w)+(h*v-_*d)/w,x=E*(-a/w)+M*(f/w)-(f*v-a*d)/w,E=A,M=x):(S=H(e),E=S.x+(~T[0].indexOf('%')?E/100*S.width:E),M=S.y+(~(T[1]||T[0]).indexOf('%')?M/100*S.height:M)),i||!1!==i&&s.smooth?(d=E-p,v=M-u,s.xOffset=m+(d*f+v*h)-d,s.yOffset=g+(d*a+v*_)-v):s.xOffset=s.yOffset=0,s.xOrigin=E,s.yOrigin=M,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!r,e.style[O]='0px 0px',o&&(q(o,s,'xOrigin',p,E),q(o,s,'yOrigin',u,M),q(o,s,'xOffset',m,s.xOffset),q(o,s,'yOffset',g,s.yOffset))},de=function(e,t){var r=e._gsap||new i.a(e);if('x'in r&&!t&&!r.uncache)return r;var n=e.style,o=0>r.scaleX,s=r.xOrigin||0,_=r.yOrigin||0,v='px',T='deg',E=B(e,O)||'0',M,S,w,A,R,P,L,F,C,U,N,D,z,V,k,G,a,b,W,d,H,j,q,Y,Z,J,Q,K,$,ee;return M=S=w=P=L=F=C=U=N=0,A=R=1,r.svg=!!(e.getCTM&&X(e)),D=oe(e,r.svg),r.svg&&se(e,E,r.originIsAbsolute,!1!==r.smooth,D),D!==ae&&(G=D[0],a=D[1],b=D[2],W=D[3],M=d=D[4],S=H=D[5],6===D.length?(A=p(G*G+a*a),R=p(W*W+b*b),P=G||a?h(a,G)*f:0,C=b||W?h(b,W)*f+P:0,r.svg&&(M-=s-(s*G+_*b),S-=_-(s*a+_*W))):(ee=D[6],K=D[7],Z=D[8],J=D[9],Q=D[10],$=D[11],M=D[12],S=D[13],w=D[14],z=h(ee,Q),L=z*f,z&&(V=l(-z),k=u(-z),j=d*V+Z*k,q=H*V+J*k,Y=ee*V+Q*k,Z=d*-k+Z*V,J=H*-k+J*V,Q=ee*-k+Q*V,$=K*-k+$*V,d=j,H=q,ee=Y),z=h(-b,Q),F=z*f,z&&(V=l(-z),k=u(-z),j=G*V-Z*k,q=a*V-J*k,Y=b*V-Q*k,$=W*k+$*V,G=j,a=q,b=Y),z=h(a,G),P=z*f,z&&(V=l(z),k=u(z),j=G*V+a*k,q=d*V+H*k,a=a*V-G*k,H=H*V-d*k,G=j,d=q),L&&359.9<g(L)+g(P)&&(L=P=0,F=180-F),A=Object(i.r)(p(G*G+a*a+b*b)),R=Object(i.r)(p(H*H+ee*ee)),z=h(d,H),C=2e-4<g(z)?z*f:0,N=$?1/(0>$?-$:$):0),r.svg&&(D=e.getAttribute('transform'),r.forceCSS=e.setAttribute('transform','')||!ie(B(e,I)),D&&e.setAttribute('transform',D))),90<g(C)&&270>g(C)&&(o?(A*=-1,C+=0>=P?180:-180,P+=0>=P?180:-180):(R*=-1,C+=0>=C?180:-180)),r.x=((r.xPercent=M&&m(e.offsetWidth/2)===m(-M)?-50:0)?0:M)+v,r.y=((r.yPercent=S&&m(e.offsetHeight/2)===m(-S)?-50:0)?0:S)+v,r.z=w+v,r.scaleX=Object(i.r)(A),r.scaleY=Object(i.r)(R),r.rotation=Object(i.r)(P)+T,r.rotationX=Object(i.r)(L)+T,r.rotationY=Object(i.r)(F)+T,r.skewX=C+T,r.skewY=U+T,r.transformPerspective=N+v,(r.zOrigin=parseFloat(E.split(' ')[2])||0)&&(n[O]=le(E)),r.xOffset=r.yOffset=0,r.force3D=i.e.force3D,r.renderTransform=r.svg?he:Ae?fe:ue,r.uncache=0,r},le=function(e){return(e=e.split(' '))[0]+' '+e[1]},pe=function(e,t,a){var r=Object(i.u)(t);return Object(i.r)(parseFloat(t)+parseFloat(Z(e,'x',a+'px',r)))+r},ue=function(e,t){t.z='0px',t.rotationY=t.rotationX='0deg',t.force3D=0,fe(e,t)},me='0deg',ce='0px',ge=') ',fe=function(e,t){var a=t||this,r=a.xPercent,i=a.yPercent,n=a.x,o=a.y,s=a.z,d=a.rotation,p=a.rotationY,m=a.rotationX,g=a.skewX,f=a.skewY,h=a.scaleX,_=a.scaleY,x=a.transformPerspective,y=a.force3D,v=a.target,b=a.zOrigin,T='',E='auto'===y&&e&&1!==e||!0===y;if(b&&(m!==me||p!==me)){var M=parseFloat(p)*c,S=u(M),w=l(M),A;M=parseFloat(m)*c,A=l(M),n=pe(v,n,S*A*-b),o=pe(v,o,-u(M)*-b),s=pe(v,s,w*A*-b+b)}(r||i)&&(T='translate('+r+'%, '+i+'%) '),(E||n!==ce||o!==ce||s!==ce)&&(T+=s!==ce||E?'translate3d('+n+', '+o+', '+s+') ':'translate('+n+', '+o+ge),x!==ce&&(T+='perspective('+x+ge),d!==me&&(T+='rotate('+d+ge),p!==me&&(T+='rotateY('+p+ge),m!==me&&(T+='rotateX('+m+ge),(g!==me||f!==me)&&(T+='skew('+g+', '+f+ge),(1!==h||1!==_)&&(T+='scale('+h+', '+_+ge),v.style[I]=T||'translate(0, 0)'},he=function(e,a){var r=a||this,n=r.xPercent,o=r.yPercent,s=r.x,d=r.y,m=r.rotation,g=r.skewX,f=r.skewY,h=r.scaleX,_=r.scaleY,x=r.target,y=r.xOrigin,v=r.yOrigin,b=r.xOffset,T=r.yOffset,E=r.forceCSS,M=parseFloat(s),S=parseFloat(d),w,A,R,P,L;m=parseFloat(m),g=parseFloat(g),f=parseFloat(f),f&&(f=parseFloat(f),g+=f,m+=f),m||g?(m*=c,g*=c,w=l(m)*h,A=u(m)*h,R=u(m-g)*-_,P=l(m-g)*_,g&&(f*=c,L=t(g-f),L=p(1+L*L),R*=L,P*=L,f&&(L=t(f),L=p(1+L*L),w*=L,A*=L)),w=Object(i.r)(w),A=Object(i.r)(A),R=Object(i.r)(R),P=Object(i.r)(P)):(w=h,P=_,A=R=0),(M&&!~(s+'').indexOf('px')||S&&!~(d+'').indexOf('px'))&&(M=Z(x,'x',s,'px'),S=Z(x,'y',d,'px')),(y||v||b||T)&&(M=Object(i.r)(M+y-(y*w+v*R)+b),S=Object(i.r)(S+v-(y*A+v*P)+T)),(n||o)&&(L=x.getBBox(),M=Object(i.r)(M+n/100*L.width),S=Object(i.r)(S+o/100*L.height)),L='matrix('+w+','+A+','+R+','+P+','+M+','+S+')',x.setAttribute('transform',L),E&&(x.style[I]=L)},_e=function(e,t,a,r,n,o){var s=360,d=Object(i.j)(n),l=parseFloat(n)*(d&&~n.indexOf('rad')?f:1),p=o?l*o:l-r,u=r+p+'deg',m,c;return d&&(m=n.split('_')[1],'short'===m&&(p%=s,p!==p%(s/2)&&(p+=0>p?s:-s)),'cw'===m&&0>p?p=(p+s*_)%s-~~(p/s)*s:'ccw'===m&&0<p&&(p=(p-s*_)%s-~~(p/s)*s)),e._pt=c=new i.b(e._pt,t,a,r,p,M),c.e=u,c.u='deg',e._props.push(a),c},xe=function(e,t,a){var r=Se.style,n=a._gsap,o,s,l,p,u,m,c,g;for(s in r.cssText=getComputedStyle(a).cssText+';position:absolute;display:block;',r[I]=t,be.body.appendChild(Se),o=de(Se,1),d)l=n[s],p=o[s],l!==p&&'perspective'!==s&&(c=Object(i.u)(l),g=Object(i.u)(p),u=c===g?parseFloat(l):Z(a,s,l,g),m=parseFloat(p),e._pt=new i.b(e._pt,n,s,u,m-u,E),e._pt.u=g,e._props.push(s));be.body.removeChild(Se)},ye={name:'css',register:k,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,a,r,n){var o=this._props,s=e.style,l,u,m,c,g,f,h,p,_,x,y,v,M,A,R;for(h in Ee||k(),t)if('autoRound'!==h&&(u=t[h],!(i.n[h]&&Object(i.c)(h,t,a,r,e,n))))if(g=typeof u,f=te[h],'function'===g&&(u=u.call(a,r,e,n),g=typeof u),'string'===g&&~u.indexOf('random(')&&(u=Object(i.q)(u)),f)f(this,e,h,u,a)&&(R=1);else if('--'===h.substr(0,2))this.add(s,'setProperty',getComputedStyle(e).getPropertyValue(h)+'',u+'',r,n,0,0,h);else{if(l=J(e,h),c=parseFloat(l),x='string'===g&&'='===u.charAt(1)?+(u.charAt(0)+'1'):0,x&&(u=u.substr(2)),m=parseFloat(u),h in T&&('autoAlpha'===h&&(1===c&&'hidden'===J(e,'visibility')&&m&&(c=0),q(this,s,'visibility',c?'inherit':'hidden',m?'inherit':'hidden',!m)),'scale'!==h&&'transform'!==h&&(h=T[h],~h.indexOf(',')&&(h=h.split(',')[0]))),y=h in d,!y)h in s||(h=V(h)||h);else if(v||(M=e._gsap,A=!1!==t.smoothOrigin&&M.smooth,v=this._pt=new i.b(this._pt,s,I,0,1,M.renderTransform,M,0,-1),v.dep=1),'scale'===h)this._pt=new i.b(this._pt,M,'scaleY',M.scaleY,x?x*m:m-M.scaleY),o.push('scaleY',h),h+='X';else if('transformOrigin'===h){u=$(u),M.svg?se(e,u,0,A,0,this):(_=parseFloat(u.split(' ')[2]),_!==M.zOrigin&&q(this,M,'zOrigin',M.zOrigin,_),q(this,s,h,le(l),le(u)));continue}else if('svgOrigin'===h){se(e,u,1,A,0,this);continue}else if(h in re){_e(this,M,h,c,u,x);continue}else if('smoothOrigin'===h){q(this,M,'smooth',M.smooth,u);continue}else if('force3D'===h){M[h]=u;continue}else if('transform'===h){xe(this,u,e);continue}if(y||(m||0===m)&&(c||0===c)&&!b.test(u)&&h in s)p=(l+'').substr((c+'').length),_=(u+'').substr((m+'').length)||(h in i.e.units?i.e.units[h]:p),p!==_&&(c=Z(e,h,l,_)),this._pt=new i.b(this._pt,y?M:s,h,c,x?x*m:m-c,'px'!==_||!1===t.autoRound||y?E:w),this._pt.u=_||0,p!==_&&(this._pt.b=l,this._pt.r=S);else if(!!(h in s))Q.call(this,e,h,l,u);else if(h in e)this.add(e,h,e[h],u,r,n);else{Object(i.l)(h,u);continue}o.push(h)}R&&Object(i.s)(this)},get:J,aliases:T,getSetter:function(e,t,a){return t in d&&t!==O&&(e._gsap.x||J(e,'x'))?a&&we===a?'scale'===t?C:F:(we=a||{})&&('scale'===t?U:N):e.style&&!Object(i.k)(e.style[t])?P:~t.indexOf('-')?L:Object(i.i)(e,t)}},ve,be,Te,Ee,Me,Se,we,Ae;/*!
 * CSSPlugin 3.0.4
 * https://greensock.com
 *
 * Copyright 2008-2019, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/i.v.utils.checkPrefix=V,function(e,t,a,r){var n=Object(i.f)(e+','+t+','+a,function(e){d[e]=1});Object(i.f)(t,function(e){i.e.units[e]='deg',re[e]=1}),T[n[13]]=e+','+t,Object(i.f)(r,function(e){var t=e.split(':');T[t[1]]=n[t[0]]})}('x,y,z,scale,scaleX,scaleY,xPercent,yPercent','rotation,rotationX,rotationY,skewX,skewY','transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective','0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY'),Object(i.f)('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',function(e){i.e.units[e]='px'}),i.v.registerPlugin(ye)},function(e,t,a){'use strict';a.d(t,'b',function(){return r}),a.d(t,'a',function(){return i});var r='\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n',i='\nvarying vec2 vUv;\nuniform float dispFactor;\nuniform sampler2D disp;\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float texture1Alpha;\nuniform float texture2Alpha;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform vec2 sliderResolution;\nuniform vec2 u_rgbPosition;\nuniform vec2 u_rgbVelocity;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvec2 centeredAspectRatio(vec2 uvs, vec2 factor, vec2 ratio, vec2 distortedPosition){\n  return uvs * ratio + (1.0 - ratio) * 0.5 * factor - factor /2. + 0.5 + distortedPosition;\n}\n\nvoid main() {\n  vec2 normalizedRgbPos = u_rgbPosition / sliderResolution;\n  normalizedRgbPos.y = 1. - normalizedRgbPos.y; \n  vec2 vel = u_rgbVelocity;\n  float dist = distance(normalizedRgbPos + vel / sliderResolution, vUv.xy);\n  float ratio = clamp(1.0 - dist * 5., 0., 1.);\n  vec4 tex1 = vec4(1.);\n  vec4 tex2 = vec4(1.);\n  vec2 u_textureFactor = vec2(1.0);\n  vec2 u_texture2Factor = vec2(1.0);\n  vec2 uv = vUv; \n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n  \n  vec2 aspectRatio = vec2(\n    min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n    min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n  );\n      \n  vec2 distortedPosition1 = getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  \n  uv.x -= sin(uv.y) * ratio / 100. * (vel.x + vel.y) / 7.;\n  uv.y -= sin(uv.x) * ratio / 100. * (vel.x + vel.y) / 7.;\n  tex1.r = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).r;\n  tex2.r = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).r;\n    \n  uv.x -= sin(uv.y) * ratio / 150. * (vel.x + vel.y) / 7.;\n  uv.y -= sin(uv.x) * ratio / 150. * (vel.x + vel.y) / 7.;\n  tex1.g = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).g;\n  tex2.g = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).g;\n    \n  uv.x -= sin(uv.y) * ratio / 300. * (vel.x + vel.y) / 7.;\n  uv.y -= sin(uv.x) * ratio / 300. * (vel.x + vel.y) / 7.;\n  tex1.b = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).b;\n  tex2.b = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).b;\n  \n  tex1.a  = texture1Alpha;\n  tex2.a  = texture2Alpha;\n     \n  vec4 mixedTextures =  mix(tex1, tex2, dispFactor);\n  gl_FragColor = mixedTextures;\n}\n'},function(e,t){'use strict';t.a=function(e,t){var a=(e%t+t)%t;return 0>a?a+g(t):a}},function(e,t){'use strict';var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a('div',{ref:'slider',staticClass:'vue-displacement-slideshow'})};a._withStripped=!0;t.a={render:a,staticRenderFns:[]},!1}])});