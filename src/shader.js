export const vertex = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

export const fragment = `
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
`;