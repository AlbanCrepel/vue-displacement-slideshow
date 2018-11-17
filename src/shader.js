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
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec2 resolution;
uniform vec2 imageResolution;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);
  
  vec2 ratio = vec2(
    min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
    min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  );
      
  vec2 distortedPosition1 = vUv * ratio + (1.0 - ratio) * 0.5 + getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = vUv * ratio + (1.0 - ratio) * 0.5 + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  gl_FragColor = mix(_texture1, _texture2, dispFactor);
}
`;