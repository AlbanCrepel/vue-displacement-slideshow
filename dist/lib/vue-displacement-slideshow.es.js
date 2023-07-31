import { openBlock as Uu, createElementBlock as Iu } from "vue";
const _t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Is = Math.PI / 180, xa = 180 / Math.PI;
function Ur() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (_t[r & 255] + _t[r >> 8 & 255] + _t[r >> 16 & 255] + _t[r >> 24 & 255] + "-" + _t[e & 255] + _t[e >> 8 & 255] + "-" + _t[e >> 16 & 15 | 64] + _t[e >> 24 & 255] + "-" + _t[t & 63 | 128] + _t[t >> 8 & 255] + "-" + _t[t >> 16 & 255] + _t[t >> 24 & 255] + _t[i & 255] + _t[i >> 8 & 255] + _t[i >> 16 & 255] + _t[i >> 24 & 255]).toLowerCase();
}
function Rt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Fu(r, e) {
  return (r % e + e) % e;
}
function Fs(r, e, t) {
  return (1 - t) * r + t * e;
}
function _o(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Ma(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function lr(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function wt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ir {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = n;
  }
  static slerpFlat(e, t, i, n, s, a, o) {
    let l = i[n + 0], c = i[n + 1], u = i[n + 2], h = i[n + 3];
    const f = s[a + 0], m = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (h !== _ || l !== f || c !== m || u !== g) {
      let p = 1 - o;
      const d = l * f + c * m + u * g + h * _, S = d >= 0 ? 1 : -1, v = 1 - d * d;
      if (v > Number.EPSILON) {
        const E = Math.sqrt(v), R = Math.atan2(E, d * S);
        p = Math.sin(p * R) / E, o = Math.sin(o * R) / E;
      }
      const y = o * S;
      if (l = l * p + f * y, c = c * p + m * y, u = u * p + g * y, h = h * p + _ * y, p === 1 - o) {
        const E = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= E, c *= E, u *= E, h *= E;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, i, n, s, a) {
    const o = i[n], l = i[n + 1], c = i[n + 2], u = i[n + 3], h = s[a], f = s[a + 1], m = s[a + 2], g = s[a + 3];
    return e[t] = o * g + u * h + l * m - c * f, e[t + 1] = l * g + u * f + c * h - o * m, e[t + 2] = c * g + u * m + o * f - l * h, e[t + 3] = u * g - o * h - l * f - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, n) {
    return this._x = e, this._y = t, this._z = i, this._w = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const i = e._x, n = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(i / 2), u = o(n / 2), h = o(s / 2), f = l(i / 2), m = l(n / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * h + c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "YXZ":
        this._x = f * u * h + c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h + f * m * g;
        break;
      case "ZXY":
        this._x = f * u * h - c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "ZYX":
        this._x = f * u * h - c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h + f * m * g;
        break;
      case "YZX":
        this._x = f * u * h + c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "XZY":
        this._x = f * u * h - c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h + f * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, n = Math.sin(i);
    return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], n = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], h = t[10], f = i + o + h;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (a - n) * m;
    } else if (i > o && i > h) {
      const m = 2 * Math.sqrt(1 + i - o - h);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (n + a) / m, this._z = (s + c) / m;
    } else if (o > h) {
      const m = 2 * Math.sqrt(1 + o - i - h);
      this._w = (s - c) / m, this._x = (n + a) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + h - i - o);
      this._w = (a - n) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Rt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0)
      return this;
    const n = Math.min(1, t / i);
    return this.slerp(e, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x, n = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = i * u + a * o + n * c - s * l, this._y = n * u + a * l + s * o - i * c, this._z = s * u + a * c + i * l - n * o, this._w = a * u - i * o - n * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const i = this._x, n = this._y, s = this._z, a = this._w;
    let o = a * e._w + i * e._x + n * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = i, this._y = n, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * i + t * this._x, this._y = m * n + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = a * h + this._w * f, this._x = i * h + this._x * f, this._y = n * h + this._y * f, this._z = s * h + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), i = Math.sqrt(e), n = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(n),
      i * Math.sin(s),
      i * Math.cos(s),
      t * Math.sin(n)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class z {
  constructor(e = 0, t = 0, i = 0) {
    z.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i;
  }
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(go.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(go.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, n = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6] * n, this.y = s[1] * t + s[4] * i + s[7] * n, this.z = s[2] * t + s[5] * i + s[8] * n, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, n = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * i + s[11] * n + s[15]);
    return this.x = (s[0] * t + s[4] * i + s[8] * n + s[12]) * a, this.y = (s[1] * t + s[5] * i + s[9] * n + s[13]) * a, this.z = (s[2] * t + s[6] * i + s[10] * n + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, i = this.y, n = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = l * t + a * n - o * i, u = l * i + o * t - s * n, h = l * n + s * i - a * t, f = -s * t - a * i - o * n;
    return this.x = c * l + f * -s + u * -o - h * -a, this.y = u * l + f * -a + h * -s - c * -o, this.z = h * l + f * -o + c * -a - u * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, i = this.y, n = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * i + s[8] * n, this.y = s[1] * t + s[5] * i + s[9] * n, this.z = s[2] * t + s[6] * i + s[10] * n, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x, n = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = n * l - s * o, this.y = s * a - i * l, this.z = i * o - n * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return Ns.copy(this).projectOnVector(e), this.sub(Ns);
  }
  reflect(e) {
    return this.sub(Ns.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Rt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, n = this.z - e.z;
    return t * t + i * i + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const n = Math.sin(t) * e;
    return this.x = n * Math.sin(i), this.y = Math.cos(t) * e, this.z = n * Math.cos(i), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), n = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = n, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, i = Math.sqrt(1 - e ** 2);
    return this.x = i * Math.cos(t), this.y = i * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ns = /* @__PURE__ */ new z(), go = /* @__PURE__ */ new Ir(), Nu = "155", Ou = 0, vo = 1, Bu = 2, $l = 1, zu = 2, Ei = 3, Xi = 0, Lt = 1, bi = 2, Gi = 0, Xn = 1, xo = 2, Mo = 3, So = 4, Gu = 5, Hn = 100, Hu = 101, ku = 102, Eo = 103, yo = 104, Vu = 200, Wu = 201, Xu = 202, qu = 203, Jl = 204, Ql = 205, Yu = 206, Ku = 207, ju = 208, Zu = 209, $u = 210, Ju = 0, Qu = 1, eh = 2, Sa = 3, th = 4, ih = 5, nh = 6, rh = 7, ec = 0, sh = 1, ah = 2, Hi = 0, oh = 1, lh = 2, ch = 3, uh = 4, hh = 5, tc = 300, Zn = 301, $n = 302, Ea = 303, ya = 304, Es = 306, Er = 1e3, ri = 1001, Ta = 1002, Tt = 1003, To = 1004, Os = 1005, Ct = 1006, fh = 1007, yr = 1008, ki = 1009, dh = 1010, ph = 1011, ka = 1012, ic = 1013, Fi = 1014, Ni = 1015, Tr = 1016, nc = 1017, rc = 1018, un = 1020, mh = 1021, si = 1023, _h = 1024, gh = 1025, hn = 1026, Jn = 1027, vh = 1028, sc = 1029, xh = 1030, ac = 1031, oc = 1033, Bs = 33776, zs = 33777, Gs = 33778, Hs = 33779, bo = 35840, Ao = 35841, wo = 35842, Ro = 35843, Mh = 36196, Co = 37492, Po = 37496, Lo = 37808, Do = 37809, Uo = 37810, Io = 37811, Fo = 37812, No = 37813, Oo = 37814, Bo = 37815, zo = 37816, Go = 37817, Ho = 37818, ko = 37819, Vo = 37820, Wo = 37821, ks = 36492, Sh = 36283, Xo = 36284, qo = 36285, Yo = 36286, lc = 3e3, fn = 3001, Eh = 3200, yh = 3201, Th = 0, bh = 1, dn = "", Re = "srgb", di = "srgb-linear", cc = "display-p3", Vs = 7680, Ah = 519, wh = 512, Rh = 513, Ch = 514, Ph = 515, Lh = 516, Dh = 517, Uh = 518, Ih = 519, Ko = 35044, jo = "300 es", ba = 1035, Ai = 2e3, ds = 2001;
class dt {
  constructor(e, t, i, n, s, a, o, l, c, u, h, f, m, g, _, p) {
    dt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, n, s, a, o, l, c, u, h, f, m, g, _, p);
  }
  set(e, t, i, n, s, a, o, l, c, u, h, f, m, g, _, p) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = i, d[12] = n, d[1] = s, d[5] = a, d[9] = o, d[13] = l, d[2] = c, d[6] = u, d[10] = h, d[14] = f, d[3] = m, d[7] = g, d[11] = _, d[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new dt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, i) {
    return this.set(
      e.x,
      t.x,
      i.x,
      0,
      e.y,
      t.y,
      i.y,
      0,
      e.z,
      t.z,
      i.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, i = e.elements, n = 1 / yn.setFromMatrixColumn(e, 0).length(), s = 1 / yn.setFromMatrixColumn(e, 1).length(), a = 1 / yn.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * s, t[5] = i[5] * s, t[6] = i[6] * s, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, n = e.y, s = e.z, a = Math.cos(i), o = Math.sin(i), l = Math.cos(n), c = Math.sin(n), u = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * u, m = a * h, g = o * u, _ = o * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = m + g * c, t[5] = f - _ * c, t[9] = -o * l, t[2] = _ - f * c, t[6] = g + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * u, m = l * h, g = c * u, _ = c * h;
      t[0] = f + _ * o, t[4] = g * o - m, t[8] = a * c, t[1] = a * h, t[5] = a * u, t[9] = -o, t[2] = m * o - g, t[6] = _ + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * u, m = l * h, g = c * u, _ = c * h;
      t[0] = f - _ * o, t[4] = -a * h, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * u, t[9] = _ - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * u, m = a * h, g = o * u, _ = o * h;
      t[0] = l * u, t[4] = g * c - m, t[8] = f * c + _, t[1] = l * h, t[5] = _ * c + f, t[9] = m * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, m = a * c, g = o * l, _ = o * c;
      t[0] = l * u, t[4] = _ - f * h, t[8] = g * h + m, t[1] = h, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = m * h + g, t[10] = f - _ * h;
    } else if (e.order === "XZY") {
      const f = a * l, m = a * c, g = o * l, _ = o * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + _, t[5] = a * u, t[9] = m * h - g, t[2] = g * h - m, t[6] = o * u, t[10] = _ * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Fh, e, Nh);
  }
  lookAt(e, t, i) {
    const n = this.elements;
    return Ot.subVectors(e, t), Ot.lengthSq() === 0 && (Ot.z = 1), Ot.normalize(), Li.crossVectors(i, Ot), Li.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Ot.x += 1e-4 : Ot.z += 1e-4, Ot.normalize(), Li.crossVectors(i, Ot)), Li.normalize(), Gr.crossVectors(Ot, Li), n[0] = Li.x, n[4] = Gr.x, n[8] = Ot.x, n[1] = Li.y, n[5] = Gr.y, n[9] = Ot.y, n[2] = Li.z, n[6] = Gr.z, n[10] = Ot.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, n = t.elements, s = this.elements, a = i[0], o = i[4], l = i[8], c = i[12], u = i[1], h = i[5], f = i[9], m = i[13], g = i[2], _ = i[6], p = i[10], d = i[14], S = i[3], v = i[7], y = i[11], E = i[15], R = n[0], A = n[4], P = n[8], x = n[12], b = n[1], V = n[5], $ = n[9], D = n[13], O = n[2], N = n[6], K = n[10], G = n[14], q = n[3], j = n[7], Z = n[11], F = n[15];
    return s[0] = a * R + o * b + l * O + c * q, s[4] = a * A + o * V + l * N + c * j, s[8] = a * P + o * $ + l * K + c * Z, s[12] = a * x + o * D + l * G + c * F, s[1] = u * R + h * b + f * O + m * q, s[5] = u * A + h * V + f * N + m * j, s[9] = u * P + h * $ + f * K + m * Z, s[13] = u * x + h * D + f * G + m * F, s[2] = g * R + _ * b + p * O + d * q, s[6] = g * A + _ * V + p * N + d * j, s[10] = g * P + _ * $ + p * K + d * Z, s[14] = g * x + _ * D + p * G + d * F, s[3] = S * R + v * b + y * O + E * q, s[7] = S * A + v * V + y * N + E * j, s[11] = S * P + v * $ + y * K + E * Z, s[15] = S * x + v * D + y * G + E * F, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], n = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], h = e[6], f = e[10], m = e[14], g = e[3], _ = e[7], p = e[11], d = e[15];
    return g * (+s * l * h - n * c * h - s * o * f + i * c * f + n * o * m - i * l * m) + _ * (+t * l * m - t * c * f + s * a * f - n * a * m + n * c * u - s * l * u) + p * (+t * c * h - t * o * m - s * a * h + i * a * m + s * o * u - i * c * u) + d * (-n * o * u - t * l * h + t * o * f + n * a * h - i * a * f + i * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, i) {
    const n = this.elements;
    return e.isVector3 ? (n[12] = e.x, n[13] = e.y, n[14] = e.z) : (n[12] = e, n[13] = t, n[14] = i), this;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = e[9], f = e[10], m = e[11], g = e[12], _ = e[13], p = e[14], d = e[15], S = h * p * c - _ * f * c + _ * l * m - o * p * m - h * l * d + o * f * d, v = g * f * c - u * p * c - g * l * m + a * p * m + u * l * d - a * f * d, y = u * _ * c - g * h * c + g * o * m - a * _ * m - u * o * d + a * h * d, E = g * h * l - u * _ * l - g * o * f + a * _ * f + u * o * p - a * h * p, R = t * S + i * v + n * y + s * E;
    if (R === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / R;
    return e[0] = S * A, e[1] = (_ * f * s - h * p * s - _ * n * m + i * p * m + h * n * d - i * f * d) * A, e[2] = (o * p * s - _ * l * s + _ * n * c - i * p * c - o * n * d + i * l * d) * A, e[3] = (h * l * s - o * f * s - h * n * c + i * f * c + o * n * m - i * l * m) * A, e[4] = v * A, e[5] = (u * p * s - g * f * s + g * n * m - t * p * m - u * n * d + t * f * d) * A, e[6] = (g * l * s - a * p * s - g * n * c + t * p * c + a * n * d - t * l * d) * A, e[7] = (a * f * s - u * l * s + u * n * c - t * f * c - a * n * m + t * l * m) * A, e[8] = y * A, e[9] = (g * h * s - u * _ * s - g * i * m + t * _ * m + u * i * d - t * h * d) * A, e[10] = (a * _ * s - g * o * s + g * i * c - t * _ * c - a * i * d + t * o * d) * A, e[11] = (u * o * s - a * h * s - u * i * c + t * h * c + a * i * m - t * o * m) * A, e[12] = E * A, e[13] = (u * _ * n - g * h * n + g * i * f - t * _ * f - u * i * p + t * h * p) * A, e[14] = (g * o * n - a * _ * n - g * i * l + t * _ * l + a * i * p - t * o * p) * A, e[15] = (a * h * n - u * o * n + u * i * l - t * h * l - a * i * f + t * o * f) * A, this;
  }
  scale(e) {
    const t = this.elements, i = e.x, n = e.y, s = e.z;
    return t[0] *= i, t[4] *= n, t[8] *= s, t[1] *= i, t[5] *= n, t[9] *= s, t[2] *= i, t[6] *= n, t[10] *= s, t[3] *= i, t[7] *= n, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, n));
  }
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -i,
      0,
      0,
      i,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      0,
      i,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t), n = Math.sin(t), s = 1 - i, a = e.x, o = e.y, l = e.z, c = s * a, u = s * o;
    return this.set(
      c * a + i,
      c * o - n * l,
      c * l + n * o,
      0,
      c * o + n * l,
      u * o + i,
      u * l - n * a,
      0,
      c * l - n * o,
      u * l + n * a,
      s * l * l + i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, i) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, i, n, s, a) {
    return this.set(
      1,
      i,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      n,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, i) {
    const n = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, u = a + a, h = o + o, f = s * c, m = s * u, g = s * h, _ = a * u, p = a * h, d = o * h, S = l * c, v = l * u, y = l * h, E = i.x, R = i.y, A = i.z;
    return n[0] = (1 - (_ + d)) * E, n[1] = (m + y) * E, n[2] = (g - v) * E, n[3] = 0, n[4] = (m - y) * R, n[5] = (1 - (f + d)) * R, n[6] = (p + S) * R, n[7] = 0, n[8] = (g + v) * A, n[9] = (p - S) * A, n[10] = (1 - (f + _)) * A, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this;
  }
  decompose(e, t, i) {
    const n = this.elements;
    let s = yn.set(n[0], n[1], n[2]).length();
    const a = yn.set(n[4], n[5], n[6]).length(), o = yn.set(n[8], n[9], n[10]).length();
    this.determinant() < 0 && (s = -s), e.x = n[12], e.y = n[13], e.z = n[14], Jt.copy(this);
    const c = 1 / s, u = 1 / a, h = 1 / o;
    return Jt.elements[0] *= c, Jt.elements[1] *= c, Jt.elements[2] *= c, Jt.elements[4] *= u, Jt.elements[5] *= u, Jt.elements[6] *= u, Jt.elements[8] *= h, Jt.elements[9] *= h, Jt.elements[10] *= h, t.setFromRotationMatrix(Jt), i.x = s, i.y = a, i.z = o, this;
  }
  makePerspective(e, t, i, n, s, a, o = Ai) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (i - n), h = (t + e) / (t - e), f = (i + n) / (i - n);
    let m, g;
    if (o === Ai)
      m = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === ds)
      m = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, i, n, s, a, o = Ai) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (i - n), h = 1 / (a - s), f = (t + e) * c, m = (i + n) * u;
    let g, _;
    if (o === Ai)
      g = (a + s) * h, _ = -2 * h;
    else if (o === ds)
      g = s * h, _ = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let n = 0; n < 16; n++)
      if (t[n] !== i[n])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const yn = /* @__PURE__ */ new z(), Jt = /* @__PURE__ */ new dt(), Fh = /* @__PURE__ */ new z(0, 0, 0), Nh = /* @__PURE__ */ new z(1, 1, 1), Li = /* @__PURE__ */ new z(), Gr = /* @__PURE__ */ new z(), Ot = /* @__PURE__ */ new z();
class sr {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e];
    if (n !== void 0) {
      const s = n.indexOf(t);
      s !== -1 && n.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e.type];
    if (i !== void 0) {
      e.target = this;
      const n = i.slice(0);
      for (let s = 0, a = n.length; s < a; s++)
        n[s].call(this, e);
      e.target = null;
    }
  }
}
const Zo = /* @__PURE__ */ new dt(), $o = /* @__PURE__ */ new Ir();
class ys {
  constructor(e = 0, t = 0, i = 0, n = ys.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = n;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, i, n = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const n = e.elements, s = n[0], a = n[4], o = n[8], l = n[1], c = n[5], u = n[9], h = n[2], f = n[6], m = n[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Rt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Rt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Rt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Rt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Rt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Rt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return Zo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Zo, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return $o.setFromEuler(this), this.setFromQuaternion($o, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ys.DEFAULT_ORDER = "XYZ";
class uc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
class Le {
  constructor(e, t, i, n, s, a, o, l, c) {
    Le.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, n, s, a, o, l, c);
  }
  set(e, t, i, n, s, a, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = n, u[2] = o, u[3] = t, u[4] = s, u[5] = l, u[6] = i, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, n = t.elements, s = this.elements, a = i[0], o = i[3], l = i[6], c = i[1], u = i[4], h = i[7], f = i[2], m = i[5], g = i[8], _ = n[0], p = n[3], d = n[6], S = n[1], v = n[4], y = n[7], E = n[2], R = n[5], A = n[8];
    return s[0] = a * _ + o * S + l * E, s[3] = a * p + o * v + l * R, s[6] = a * d + o * y + l * A, s[1] = c * _ + u * S + h * E, s[4] = c * p + u * v + h * R, s[7] = c * d + u * y + h * A, s[2] = f * _ + m * S + g * E, s[5] = f * p + m * v + g * R, s[8] = f * d + m * y + g * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * a * u - t * o * c - i * s * u + i * o * l + n * s * c - n * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = u * a - o * c, f = o * l - u * s, m = c * s - a * l, g = t * h + i * f + n * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = h * _, e[1] = (n * c - u * i) * _, e[2] = (o * i - n * a) * _, e[3] = f * _, e[4] = (u * t - n * l) * _, e[5] = (n * s - o * t) * _, e[6] = m * _, e[7] = (i * l - c * t) * _, e[8] = (a * t - i * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, i, n, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      i * l,
      i * c,
      -i * (l * a + c * o) + a + e,
      -n * c,
      n * l,
      -n * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Ws.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Ws.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Ws.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      i,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let n = 0; n < 9; n++)
      if (t[n] !== i[n])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ws = /* @__PURE__ */ new Le();
let Oh = 0;
const Jo = /* @__PURE__ */ new z(), Tn = /* @__PURE__ */ new Ir(), _i = /* @__PURE__ */ new dt(), Hr = /* @__PURE__ */ new z(), cr = /* @__PURE__ */ new z(), Bh = /* @__PURE__ */ new z(), zh = /* @__PURE__ */ new Ir(), Qo = /* @__PURE__ */ new z(1, 0, 0), el = /* @__PURE__ */ new z(0, 1, 0), tl = /* @__PURE__ */ new z(0, 0, 1), Gh = { type: "added" }, il = { type: "removed" };
class Ht extends sr {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Oh++ }), this.uuid = Ur(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ht.DEFAULT_UP.clone();
    const e = new z(), t = new ys(), i = new Ir(), n = new z(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(s), i._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      modelViewMatrix: {
        value: new dt()
      },
      normalMatrix: {
        value: new Le()
      }
    }), this.matrix = new dt(), this.matrixWorld = new dt(), this.matrixAutoUpdate = Ht.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new uc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Tn.setFromAxisAngle(e, t), this.quaternion.multiply(Tn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Tn.setFromAxisAngle(e, t), this.quaternion.premultiply(Tn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Qo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(el, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(tl, e);
  }
  translateOnAxis(e, t) {
    return Jo.copy(e).applyQuaternion(this.quaternion), this.position.add(Jo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Qo, e);
  }
  translateY(e) {
    return this.translateOnAxis(el, e);
  }
  translateZ(e) {
    return this.translateOnAxis(tl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(_i.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? Hr.copy(e) : Hr.set(e, t, i);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1), cr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? _i.lookAt(cr, Hr, this.up) : _i.lookAt(Hr, cr, this.up), this.quaternion.setFromRotationMatrix(_i), n && (_i.extractRotation(n.matrixWorld), Tn.setFromRotationMatrix(_i), this.quaternion.premultiply(Tn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Gh)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(il)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(il);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), _i.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), _i.multiply(e.parent.matrixWorld)), e.applyMatrix4(_i), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let i = 0, n = this.children.length; i < n; i++) {
      const a = this.children[i].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t) {
    let i = [];
    this[e] === t && i.push(this);
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectsByProperty(e, t);
      a.length > 0 && (i = i.concat(a));
    }
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(cr, e, Bh), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(cr, zh, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++)
      t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++)
      t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) {
      const s = t[i];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const n = this.children;
      for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const n = {};
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), this.frustumCulled === !1 && (n.frustumCulled = !1), this.renderOrder !== 0 && (n.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), n.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        n.material = o;
      } else
        n.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let o = 0; o < this.children.length; o++)
        n.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        n.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), h = a(e.shapes), f = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      o.length > 0 && (i.geometries = o), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), u.length > 0 && (i.images = u), h.length > 0 && (i.shapes = h), f.length > 0 && (i.skeletons = f), m.length > 0 && (i.animations = m), g.length > 0 && (i.nodes = g);
    }
    return i.object = n, i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let i = 0; i < e.children.length; i++) {
        const n = e.children[i];
        this.add(n.clone());
      }
    return this;
  }
}
Ht.DEFAULT_UP = /* @__PURE__ */ new z(0, 1, 0);
Ht.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class Hh extends Ht {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
function qn(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Xs(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const kh = /* @__PURE__ */ new Le().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), Vh = /* @__PURE__ */ new Le().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]);
function Wh(r) {
  return r.convertSRGBToLinear().applyMatrix3(Vh);
}
function Xh(r) {
  return r.applyMatrix3(kh).convertLinearToSRGB();
}
const qh = {
  [di]: (r) => r,
  [Re]: (r) => r.convertSRGBToLinear(),
  [cc]: Wh
}, Yh = {
  [di]: (r) => r,
  [Re]: (r) => r.convertLinearToSRGB(),
  [cc]: Xh
}, Qt = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
  },
  get workingColorSpace() {
    return di;
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const i = qh[e], n = Yh[t];
    if (i === void 0 || n === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return n(i(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace);
  }
}, hc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, ei = { h: 0, s: 0, l: 0 }, kr = { h: 0, s: 0, l: 0 };
function qs(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Xe {
  constructor(e, t, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const n = e;
      n && n.isColor ? this.copy(n) : typeof n == "number" ? this.setHex(n) : typeof n == "string" && this.setStyle(n);
    } else
      this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Re) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Qt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, i, n = Qt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, Qt.toWorkingColorSpace(this, n), this;
  }
  setHSL(e, t, i, n = Qt.workingColorSpace) {
    if (e = Fu(e, 1), t = Rt(t, 0, 1), i = Rt(i, 0, 1), t === 0)
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t, a = 2 * i - s;
      this.r = qs(a, s, e + 1 / 3), this.g = qs(a, s, e), this.b = qs(a, s, e - 1 / 3);
    }
    return Qt.toWorkingColorSpace(this, n), this;
  }
  setStyle(e, t = Re) {
    function i(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let n;
    if (n = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = n[1], o = n[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = n[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Re) {
    const i = hc[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = qn(e.r), this.g = qn(e.g), this.b = qn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Xs(e.r), this.g = Xs(e.g), this.b = Xs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Re) {
    return Qt.fromWorkingColorSpace(gt.copy(this), e), Math.round(Rt(gt.r * 255, 0, 255)) * 65536 + Math.round(Rt(gt.g * 255, 0, 255)) * 256 + Math.round(Rt(gt.b * 255, 0, 255));
  }
  getHexString(e = Re) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Qt.workingColorSpace) {
    Qt.fromWorkingColorSpace(gt.copy(this), t);
    const i = gt.r, n = gt.g, s = gt.b, a = Math.max(i, n, s), o = Math.min(i, n, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const h = a - o;
      switch (c = u <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case i:
          l = (n - s) / h + (n < s ? 6 : 0);
          break;
        case n:
          l = (s - i) / h + 2;
          break;
        case s:
          l = (i - n) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Qt.workingColorSpace) {
    return Qt.fromWorkingColorSpace(gt.copy(this), t), e.r = gt.r, e.g = gt.g, e.b = gt.b, e;
  }
  getStyle(e = Re) {
    Qt.fromWorkingColorSpace(gt.copy(this), e);
    const t = gt.r, i = gt.g, n = gt.b;
    return e !== Re ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(n * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(ei), ei.h += e, ei.s += t, ei.l += i, this.setHSL(ei.h, ei.s, ei.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(ei), e.getHSL(kr);
    const i = Fs(ei.h, kr.h, t), n = Fs(ei.s, kr.s, t), s = Fs(ei.l, kr.l, t);
    return this.setHSL(i, n, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, n = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * i + s[6] * n, this.g = s[1] * t + s[4] * i + s[7] * n, this.b = s[2] * t + s[5] * i + s[8] * n, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const gt = /* @__PURE__ */ new Xe();
Xe.NAMES = hc;
class Fr {
  constructor(e = new z(1 / 0, 1 / 0, 1 / 0), t = new z(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(vi.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(vi.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = vi.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if (e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0)
      e.boundingBox === null && e.computeBoundingBox(), bn.copy(e.boundingBox), bn.applyMatrix4(e.matrixWorld), this.union(bn);
    else {
      const n = e.geometry;
      if (n !== void 0)
        if (t && n.attributes !== void 0 && n.attributes.position !== void 0) {
          const s = n.attributes.position;
          for (let a = 0, o = s.count; a < o; a++)
            vi.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld), this.expandByPoint(vi);
        } else
          n.boundingBox === null && n.computeBoundingBox(), bn.copy(n.boundingBox), bn.applyMatrix4(e.matrixWorld), this.union(bn);
    }
    const i = e.children;
    for (let n = 0, s = i.length; n < s; n++)
      this.expandByObject(i[n], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, vi), vi.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ur), Vr.subVectors(this.max, ur), An.subVectors(e.a, ur), wn.subVectors(e.b, ur), Rn.subVectors(e.c, ur), Di.subVectors(wn, An), Ui.subVectors(Rn, wn), Ji.subVectors(An, Rn);
    let t = [
      0,
      -Di.z,
      Di.y,
      0,
      -Ui.z,
      Ui.y,
      0,
      -Ji.z,
      Ji.y,
      Di.z,
      0,
      -Di.x,
      Ui.z,
      0,
      -Ui.x,
      Ji.z,
      0,
      -Ji.x,
      -Di.y,
      Di.x,
      0,
      -Ui.y,
      Ui.x,
      0,
      -Ji.y,
      Ji.x,
      0
    ];
    return !Ys(t, An, wn, Rn, Vr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ys(t, An, wn, Rn, Vr)) ? !1 : (Wr.crossVectors(Di, Ui), t = [Wr.x, Wr.y, Wr.z], Ys(t, An, wn, Rn, Vr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, vi).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(vi).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (gi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), gi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), gi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), gi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), gi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), gi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), gi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), gi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(gi), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const gi = [
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z()
], vi = /* @__PURE__ */ new z(), bn = /* @__PURE__ */ new Fr(), An = /* @__PURE__ */ new z(), wn = /* @__PURE__ */ new z(), Rn = /* @__PURE__ */ new z(), Di = /* @__PURE__ */ new z(), Ui = /* @__PURE__ */ new z(), Ji = /* @__PURE__ */ new z(), ur = /* @__PURE__ */ new z(), Vr = /* @__PURE__ */ new z(), Wr = /* @__PURE__ */ new z(), Qi = /* @__PURE__ */ new z();
function Ys(r, e, t, i, n) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    Qi.fromArray(r, s);
    const o = n.x * Math.abs(Qi.x) + n.y * Math.abs(Qi.y) + n.z * Math.abs(Qi.z), l = e.dot(Qi), c = t.dot(Qi), u = i.dot(Qi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const Kh = /* @__PURE__ */ new Fr(), hr = /* @__PURE__ */ new z(), Ks = /* @__PURE__ */ new z();
class Va {
  constructor(e = new z(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Kh.setFromPoints(e).getCenter(i);
    let n = 0;
    for (let s = 0, a = e.length; s < a; s++)
      n = Math.max(n, i.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(n), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    hr.subVectors(e, this.center);
    const t = hr.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), n = (i - this.radius) * 0.5;
      this.center.addScaledVector(hr, n / i), this.radius += n;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ks.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(hr.copy(e.center).add(Ks)), this.expandByPoint(hr.copy(e.center).sub(Ks))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const js = /* @__PURE__ */ new z(), jh = /* @__PURE__ */ new z(), Zh = /* @__PURE__ */ new Le();
class sn {
  constructor(e = new z(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, n) {
    return this.normal.set(e, t, i), this.constant = n, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const n = js.subVectors(i, t).cross(jh.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(js), n = this.normal.dot(i);
    if (n === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / n;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || Zh.getNormalMatrix(e), n = this.coplanarPoint(js).applyMatrix4(e), s = this.normal.applyMatrix3(i).normalize();
    return this.constant = -n.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const en = /* @__PURE__ */ new Va(), Xr = /* @__PURE__ */ new z();
class fc {
  constructor(e = new sn(), t = new sn(), i = new sn(), n = new sn(), s = new sn(), a = new sn()) {
    this.planes = [e, t, i, n, s, a];
  }
  set(e, t, i, n, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(n), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = Ai) {
    const i = this.planes, n = e.elements, s = n[0], a = n[1], o = n[2], l = n[3], c = n[4], u = n[5], h = n[6], f = n[7], m = n[8], g = n[9], _ = n[10], p = n[11], d = n[12], S = n[13], v = n[14], y = n[15];
    if (i[0].setComponents(l - s, f - c, p - m, y - d).normalize(), i[1].setComponents(l + s, f + c, p + m, y + d).normalize(), i[2].setComponents(l + a, f + u, p + g, y + S).normalize(), i[3].setComponents(l - a, f - u, p - g, y - S).normalize(), i[4].setComponents(l - o, f - h, p - _, y - v).normalize(), t === Ai)
      i[5].setComponents(l + o, f + h, p + _, y + v).normalize();
    else if (t === ds)
      i[5].setComponents(o, h, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), en.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), en.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(en);
  }
  intersectsSprite(e) {
    return en.center.set(0, 0, 0), en.radius = 0.7071067811865476, en.applyMatrix4(e.matrixWorld), this.intersectsSphere(en);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, n = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(i) < n)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const n = t[i];
      if (Xr.x = n.normal.x > 0 ? e.max.x : e.min.x, Xr.y = n.normal.y > 0 ? e.max.y : e.min.y, Xr.z = n.normal.z > 0 ? e.max.z : e.min.z, n.distanceToPoint(Xr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      if (t[i].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Oe {
  constructor(e = 0, t = 0) {
    Oe.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, n = e.elements;
    return this.x = n[0] * t + n[3] * i + n[6], this.y = n[1] * t + n[4] * i + n[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Rt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t), n = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * i - a * n + e.x, this.y = s * n + a * i + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ft {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    ft.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = i, this.w = n;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, n) {
    return this.x = e, this.y = t, this.z = i, this.w = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, n = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * s, this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * s, this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * s, this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, n, s;
    const l = e.elements, c = l[0], u = l[4], h = l[8], f = l[1], m = l[5], g = l[9], _ = l[2], p = l[6], d = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - _) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + _) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, y = (m + 1) / 2, E = (d + 1) / 2, R = (u + f) / 4, A = (h + _) / 4, P = (g + p) / 4;
      return v > y && v > E ? v < 0.01 ? (i = 0, n = 0.707106781, s = 0.707106781) : (i = Math.sqrt(v), n = R / i, s = A / i) : y > E ? y < 0.01 ? (i = 0.707106781, n = 0, s = 0.707106781) : (n = Math.sqrt(y), i = R / n, s = P / n) : E < 0.01 ? (i = 0.707106781, n = 0.707106781, s = 0) : (s = Math.sqrt(E), i = A / s, n = P / s), this.set(i, n, s, t), this;
    }
    let S = Math.sqrt((p - g) * (p - g) + (h - _) * (h - _) + (f - u) * (f - u));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (p - g) / S, this.y = (h - _) / S, this.z = (f - u) / S, this.w = Math.acos((c + m + d - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
function dc() {
  let r = null, e = !1, t = null, i = null;
  function n(s, a) {
    t(s, a), i = r.requestAnimationFrame(n);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (i = r.requestAnimationFrame(n), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(i), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function $h(r, e) {
  const t = e.isWebGL2, i = /* @__PURE__ */ new WeakMap();
  function n(c, u) {
    const h = c.array, f = c.usage, m = r.createBuffer();
    r.bindBuffer(u, m), r.bufferData(u, h, f), c.onUploadCallback();
    let g;
    if (h instanceof Float32Array)
      g = r.FLOAT;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = r.UNSIGNED_SHORT;
    else if (h instanceof Int16Array)
      g = r.SHORT;
    else if (h instanceof Uint32Array)
      g = r.UNSIGNED_INT;
    else if (h instanceof Int32Array)
      g = r.INT;
    else if (h instanceof Int8Array)
      g = r.BYTE;
    else if (h instanceof Uint8Array)
      g = r.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray)
      g = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: m,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, u, h) {
    const f = u.array, m = u.updateRange;
    r.bindBuffer(h, c), m.count === -1 ? r.bufferSubData(h, 0, f) : (t ? r.bufferSubData(
      h,
      m.offset * f.BYTES_PER_ELEMENT,
      f,
      m.offset,
      m.count
    ) : r.bufferSubData(
      h,
      m.offset * f.BYTES_PER_ELEMENT,
      f.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), u.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), i.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = i.get(c);
    u && (r.deleteBuffer(u.buffer), i.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const f = i.get(c);
      (!f || f.version < c.version) && i.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = i.get(c);
    h === void 0 ? i.set(c, n(c, u)) : h.version < c.version && (s(h.buffer, c, u), h.version = c.version);
  }
  return {
    get: a,
    remove: o,
    update: l
  };
}
const rt = /* @__PURE__ */ new z(), qr = /* @__PURE__ */ new Oe();
class hi {
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = Ko, this.updateRange = { offset: 0, count: -1 }, this.gpuType = Ni, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let n = 0, s = this.itemSize; n < s; n++)
      this.array[e + n] = t.array[i + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        qr.fromBufferAttribute(this, t), qr.applyMatrix3(e), this.setXY(t, qr.x, qr.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        rt.fromBufferAttribute(this, t), rt.applyMatrix3(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      rt.fromBufferAttribute(this, t), rt.applyMatrix4(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      rt.fromBufferAttribute(this, t), rt.applyNormalMatrix(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      rt.fromBufferAttribute(this, t), rt.transformDirection(e), this.setXYZ(t, rt.x, rt.y, rt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = lr(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = wt(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = lr(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = lr(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = lr(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = lr(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), i = wt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, n) {
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), i = wt(i, this.array), n = wt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this;
  }
  setXYZW(e, t, i, n, s) {
    return e *= this.itemSize, this.normalized && (t = wt(t, this.array), i = wt(i, this.array), n = wt(n, this.array), s = wt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Ko && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class pc extends hi {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class mc extends hi {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class pn extends hi {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
function _c(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
function br(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
const nl = {};
function vr(r) {
  r in nl || (nl[r] = !0, console.warn(r));
}
let Jh = 0;
const Xt = /* @__PURE__ */ new dt(), Zs = /* @__PURE__ */ new Ht(), Cn = /* @__PURE__ */ new z(), Bt = /* @__PURE__ */ new Fr(), fr = /* @__PURE__ */ new Fr(), lt = /* @__PURE__ */ new z();
class Sn extends sr {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Jh++ }), this.uuid = Ur(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (_c(e) ? mc : pc)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: i
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Le().getNormalMatrix(e);
      i.applyNormalMatrix(s), i.needsUpdate = !0;
    }
    const n = this.attributes.tangent;
    return n !== void 0 && (n.transformDirection(e), n.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Xt.makeRotationFromQuaternion(e), this.applyMatrix4(Xt), this;
  }
  rotateX(e) {
    return Xt.makeRotationX(e), this.applyMatrix4(Xt), this;
  }
  rotateY(e) {
    return Xt.makeRotationY(e), this.applyMatrix4(Xt), this;
  }
  rotateZ(e) {
    return Xt.makeRotationZ(e), this.applyMatrix4(Xt), this;
  }
  translate(e, t, i) {
    return Xt.makeTranslation(e, t, i), this.applyMatrix4(Xt), this;
  }
  scale(e, t, i) {
    return Xt.makeScale(e, t, i), this.applyMatrix4(Xt), this;
  }
  lookAt(e) {
    return Zs.lookAt(e), Zs.updateMatrix(), this.applyMatrix4(Zs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Cn).negate(), this.translate(Cn.x, Cn.y, Cn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let i = 0, n = e.length; i < n; i++) {
      const s = e[i];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new pn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Fr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new z(-1 / 0, -1 / 0, -1 / 0),
        new z(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let i = 0, n = t.length; i < n; i++) {
          const s = t[i];
          Bt.setFromBufferAttribute(s), this.morphTargetsRelative ? (lt.addVectors(this.boundingBox.min, Bt.min), this.boundingBox.expandByPoint(lt), lt.addVectors(this.boundingBox.max, Bt.max), this.boundingBox.expandByPoint(lt)) : (this.boundingBox.expandByPoint(Bt.min), this.boundingBox.expandByPoint(Bt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Va());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new z(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (Bt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          fr.setFromBufferAttribute(o), this.morphTargetsRelative ? (lt.addVectors(Bt.min, fr.min), Bt.expandByPoint(lt), lt.addVectors(Bt.max, fr.max), Bt.expandByPoint(lt)) : (Bt.expandByPoint(fr.min), Bt.expandByPoint(fr.max));
        }
      Bt.getCenter(i);
      let n = 0;
      for (let s = 0, a = e.count; s < a; s++)
        lt.fromBufferAttribute(e, s), n = Math.max(n, i.distanceToSquared(lt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            lt.fromBufferAttribute(o, c), l && (Cn.fromBufferAttribute(e, c), lt.add(Cn)), n = Math.max(n, i.distanceToSquared(lt));
        }
      this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = e.array, n = t.position.array, s = t.normal.array, a = t.uv.array, o = n.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new hi(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let b = 0; b < o; b++)
      c[b] = new z(), u[b] = new z();
    const h = new z(), f = new z(), m = new z(), g = new Oe(), _ = new Oe(), p = new Oe(), d = new z(), S = new z();
    function v(b, V, $) {
      h.fromArray(n, b * 3), f.fromArray(n, V * 3), m.fromArray(n, $ * 3), g.fromArray(a, b * 2), _.fromArray(a, V * 2), p.fromArray(a, $ * 2), f.sub(h), m.sub(h), _.sub(g), p.sub(g);
      const D = 1 / (_.x * p.y - p.x * _.y);
      isFinite(D) && (d.copy(f).multiplyScalar(p.y).addScaledVector(m, -_.y).multiplyScalar(D), S.copy(m).multiplyScalar(_.x).addScaledVector(f, -p.x).multiplyScalar(D), c[b].add(d), c[V].add(d), c[$].add(d), u[b].add(S), u[V].add(S), u[$].add(S));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: i.length
    }]);
    for (let b = 0, V = y.length; b < V; ++b) {
      const $ = y[b], D = $.start, O = $.count;
      for (let N = D, K = D + O; N < K; N += 3)
        v(
          i[N + 0],
          i[N + 1],
          i[N + 2]
        );
    }
    const E = new z(), R = new z(), A = new z(), P = new z();
    function x(b) {
      A.fromArray(s, b * 3), P.copy(A);
      const V = c[b];
      E.copy(V), E.sub(A.multiplyScalar(A.dot(V))).normalize(), R.crossVectors(P, V);
      const D = R.dot(u[b]) < 0 ? -1 : 1;
      l[b * 4] = E.x, l[b * 4 + 1] = E.y, l[b * 4 + 2] = E.z, l[b * 4 + 3] = D;
    }
    for (let b = 0, V = y.length; b < V; ++b) {
      const $ = y[b], D = $.start, O = $.count;
      for (let N = D, K = D + O; N < K; N += 3)
        x(i[N + 0]), x(i[N + 1]), x(i[N + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new hi(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let f = 0, m = i.count; f < m; f++)
          i.setXYZ(f, 0, 0, 0);
      const n = new z(), s = new z(), a = new z(), o = new z(), l = new z(), c = new z(), u = new z(), h = new z();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0), _ = e.getX(f + 1), p = e.getX(f + 2);
          n.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, p), u.subVectors(a, s), h.subVectors(n, s), u.cross(h), o.fromBufferAttribute(i, g), l.fromBufferAttribute(i, _), c.fromBufferAttribute(i, p), o.add(u), l.add(u), c.add(u), i.setXYZ(g, o.x, o.y, o.z), i.setXYZ(_, l.x, l.y, l.z), i.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          n.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), u.subVectors(a, s), h.subVectors(n, s), u.cross(h), i.setXYZ(f + 0, u.x, u.y, u.z), i.setXYZ(f + 1, u.x, u.y, u.z), i.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      lt.fromBufferAttribute(e, t), lt.normalize(), e.setXYZ(t, lt.x, lt.y, lt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, h = o.normalized, f = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        o.isInterleavedBufferAttribute ? m = l[_] * o.data.stride + o.offset : m = l[_] * u;
        for (let d = 0; d < u; d++)
          f[g++] = c[m++];
      }
      return new hi(f, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Sn(), i = this.index.array, n = this.attributes;
    for (const o in n) {
      const l = n[o], c = e(l, i);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u], m = e(f, i);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const n = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const m = c[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (n[l] = u, s = !0);
    }
    s && (e.data.morphAttributes = n, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
    const n = e.attributes;
    for (const c in n) {
      const u = n[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], h = s[c];
      for (let f = 0, m = h.length; f < m; f++)
        u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Nr extends Sn {
  constructor(e = 1, t = 1, i = 1, n = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: i,
      widthSegments: n,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    n = Math.floor(n), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], h = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, i, t, e, a, s, 0), g("z", "y", "x", 1, -1, i, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, i, t, n, a, 2), g("x", "z", "y", 1, -1, e, i, -t, n, a, 3), g("x", "y", "z", 1, -1, e, t, i, n, s, 4), g("x", "y", "z", -1, -1, e, t, -i, n, s, 5), this.setIndex(l), this.setAttribute("position", new pn(c, 3)), this.setAttribute("normal", new pn(u, 3)), this.setAttribute("uv", new pn(h, 2));
    function g(_, p, d, S, v, y, E, R, A, P, x) {
      const b = y / A, V = E / P, $ = y / 2, D = E / 2, O = R / 2, N = A + 1, K = P + 1;
      let G = 0, q = 0;
      const j = new z();
      for (let Z = 0; Z < K; Z++) {
        const F = Z * V - D;
        for (let Y = 0; Y < N; Y++) {
          const ae = Y * b - $;
          j[_] = ae * S, j[p] = F * v, j[d] = O, c.push(j.x, j.y, j.z), j[_] = 0, j[p] = 0, j[d] = R > 0 ? 1 : -1, u.push(j.x, j.y, j.z), h.push(Y / A), h.push(1 - Z / P), G += 1;
        }
      }
      for (let Z = 0; Z < P; Z++)
        for (let F = 0; F < A; F++) {
          const Y = f + F + N * Z, ae = f + F + N * (Z + 1), ne = f + (F + 1) + N * (Z + 1), se = f + (F + 1) + N * Z;
          l.push(Y, ae, se), l.push(ae, ne, se), q += 6;
        }
      o.addGroup(m, q, x), m += q, f += G;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Nr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class Ts extends Sn {
  constructor(e = 1, t = 1, i = 1, n = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: i,
      heightSegments: n
    };
    const s = e / 2, a = t / 2, o = Math.floor(i), l = Math.floor(n), c = o + 1, u = l + 1, h = e / o, f = t / l, m = [], g = [], _ = [], p = [];
    for (let d = 0; d < u; d++) {
      const S = d * f - a;
      for (let v = 0; v < c; v++) {
        const y = v * h - s;
        g.push(y, -S, 0), _.push(0, 0, 1), p.push(v / o), p.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let S = 0; S < o; S++) {
        const v = S + c * d, y = S + c * (d + 1), E = S + 1 + c * (d + 1), R = S + 1 + c * d;
        m.push(v, y, R), m.push(y, E, R);
      }
    this.setIndex(m), this.setAttribute("position", new pn(g, 3)), this.setAttribute("normal", new pn(_, 3)), this.setAttribute("uv", new pn(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ts(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
let Qh = 0;
class bs extends sr {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Qh++ }), this.uuid = Ur(), this.name = "", this.type = "Material", this.blending = Xn, this.side = Xi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Jl, this.blendDst = Ql, this.blendEquation = Hn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Sa, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ah, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Vs, this.stencilZFail = Vs, this.stencilZPass = Vs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const n = this[t];
        if (n === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== Xn && (i.blending = this.blending), this.side !== Xi && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = this.alphaHash), this.alphaToCoverage === !0 && (i.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (i.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = this.flatShading), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function n(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = n(e.textures), a = n(e.images);
      s.length > 0 && (i.textures = s), a.length > 0 && (i.images = a);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const n = t.length;
      i = new Array(n);
      for (let s = 0; s !== n; ++s)
        i[s] = t[s].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
function Qn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const i in r[t]) {
      const n = r[t][i];
      n && (n.isColor || n.isMatrix3 || n.isMatrix4 || n.isVector2 || n.isVector3 || n.isVector4 || n.isTexture || n.isQuaternion) ? n.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = n.clone() : Array.isArray(n) ? e[t][i] = n.slice() : e[t][i] = n;
    }
  }
  return e;
}
function yt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const i = Qn(r[t]);
    for (const n in i)
      e[n] = i[n];
  }
  return e;
}
function ef(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function gc(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : di;
}
const tf = { clone: Qn, merge: yt }, nf = (
  /* glsl */
  `
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
), rf = (
  /* glsl */
  `
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`
);
class qi extends bs {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = nf, this.fragmentShader = rf, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Qn(e.uniforms), this.uniformsGroups = ef(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const n in this.uniforms) {
      const a = this.uniforms[n].value;
      a && a.isTexture ? t.uniforms[n] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[n] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[n] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[n] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[n] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[n] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[n] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[n] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const n in this.extensions)
      this.extensions[n] === !0 && (i[n] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
const xi = /* @__PURE__ */ new z(), $s = /* @__PURE__ */ new z(), Yr = /* @__PURE__ */ new z(), Ii = /* @__PURE__ */ new z(), Js = /* @__PURE__ */ new z(), Kr = /* @__PURE__ */ new z(), Qs = /* @__PURE__ */ new z();
class sf {
  constructor(e = new z(), t = new z(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, xi)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = xi.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (xi.copy(this.origin).addScaledVector(this.direction, t), xi.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, n) {
    $s.copy(e).add(t).multiplyScalar(0.5), Yr.copy(t).sub(e).normalize(), Ii.copy(this.origin).sub($s);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Yr), o = Ii.dot(this.direction), l = -Ii.dot(Yr), c = Ii.lengthSq(), u = Math.abs(1 - a * a);
    let h, f, m, g;
    if (u > 0)
      if (h = a * l - o, f = a * o - l, g = s * u, h >= 0)
        if (f >= -g)
          if (f <= g) {
            const _ = 1 / u;
            h *= _, f *= _, m = h * (h + a * f + 2 * o) + f * (a * h + f + 2 * l) + c;
          } else
            f = s, h = Math.max(0, -(a * f + o)), m = -h * h + f * (f + 2 * l) + c;
        else
          f = -s, h = Math.max(0, -(a * f + o)), m = -h * h + f * (f + 2 * l) + c;
      else
        f <= -g ? (h = Math.max(0, -(-a * s + o)), f = h > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -h * h + f * (f + 2 * l) + c) : f <= g ? (h = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (h = Math.max(0, -(a * s + o)), f = h > 0 ? s : Math.min(Math.max(-s, -l), s), m = -h * h + f * (f + 2 * l) + c);
    else
      f = a > 0 ? -s : s, h = Math.max(0, -(a * f + o)), m = -h * h + f * (f + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, h), n && n.copy($s).addScaledVector(Yr, f), m;
  }
  intersectSphere(e, t) {
    xi.subVectors(e.center, this.origin);
    const i = xi.dot(this.direction), n = xi.dot(xi) - i * i, s = e.radius * e.radius;
    if (n > s)
      return null;
    const a = Math.sqrt(s - n), o = i - a, l = i + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, n, s, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (i = (e.min.x - f.x) * c, n = (e.max.x - f.x) * c) : (i = (e.max.x - f.x) * c, n = (e.min.x - f.x) * c), u >= 0 ? (s = (e.min.y - f.y) * u, a = (e.max.y - f.y) * u) : (s = (e.max.y - f.y) * u, a = (e.min.y - f.y) * u), i > a || s > n || ((s > i || isNaN(i)) && (i = s), (a < n || isNaN(n)) && (n = a), h >= 0 ? (o = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (o = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), i > l || o > n) || ((o > i || i !== i) && (i = o), (l < n || n !== n) && (n = l), n < 0) ? null : this.at(i >= 0 ? i : n, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, xi) !== null;
  }
  intersectTriangle(e, t, i, n, s) {
    Js.subVectors(t, e), Kr.subVectors(i, e), Qs.crossVectors(Js, Kr);
    let a = this.direction.dot(Qs), o;
    if (a > 0) {
      if (n)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Ii.subVectors(this.origin, e);
    const l = o * this.direction.dot(Kr.crossVectors(Ii, Kr));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Js.cross(Ii));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * Ii.dot(Qs);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ti = /* @__PURE__ */ new z(), Mi = /* @__PURE__ */ new z(), ea = /* @__PURE__ */ new z(), Si = /* @__PURE__ */ new z(), Pn = /* @__PURE__ */ new z(), Ln = /* @__PURE__ */ new z(), rl = /* @__PURE__ */ new z(), ta = /* @__PURE__ */ new z(), ia = /* @__PURE__ */ new z(), na = /* @__PURE__ */ new z();
let jr = !1;
class ii {
  constructor(e = new z(), t = new z(), i = new z()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, n) {
    n.subVectors(i, t), ti.subVectors(e, t), n.cross(ti);
    const s = n.lengthSq();
    return s > 0 ? n.multiplyScalar(1 / Math.sqrt(s)) : n.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, i, n, s) {
    ti.subVectors(n, t), Mi.subVectors(i, t), ea.subVectors(e, t);
    const a = ti.dot(ti), o = ti.dot(Mi), l = ti.dot(ea), c = Mi.dot(Mi), u = Mi.dot(ea), h = a * c - o * o;
    if (h === 0)
      return s.set(-2, -1, -1);
    const f = 1 / h, m = (c * l - o * u) * f, g = (a * u - o * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, i, n) {
    return this.getBarycoord(e, t, i, n, Si), Si.x >= 0 && Si.y >= 0 && Si.x + Si.y <= 1;
  }
  static getUV(e, t, i, n, s, a, o, l) {
    return jr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), jr = !0), this.getInterpolation(e, t, i, n, s, a, o, l);
  }
  static getInterpolation(e, t, i, n, s, a, o, l) {
    return this.getBarycoord(e, t, i, n, Si), l.setScalar(0), l.addScaledVector(s, Si.x), l.addScaledVector(a, Si.y), l.addScaledVector(o, Si.z), l;
  }
  static isFrontFacing(e, t, i, n) {
    return ti.subVectors(i, t), Mi.subVectors(e, t), ti.cross(Mi).dot(n) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, n) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this;
  }
  setFromAttributeAndIndices(e, t, i, n) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return ti.subVectors(this.c, this.b), Mi.subVectors(this.a, this.b), ti.cross(Mi).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return ii.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return ii.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, i, n, s) {
    return jr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), jr = !0), ii.getInterpolation(e, this.a, this.b, this.c, t, i, n, s);
  }
  getInterpolation(e, t, i, n, s) {
    return ii.getInterpolation(e, this.a, this.b, this.c, t, i, n, s);
  }
  containsPoint(e) {
    return ii.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return ii.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, n = this.b, s = this.c;
    let a, o;
    Pn.subVectors(n, i), Ln.subVectors(s, i), ta.subVectors(e, i);
    const l = Pn.dot(ta), c = Ln.dot(ta);
    if (l <= 0 && c <= 0)
      return t.copy(i);
    ia.subVectors(e, n);
    const u = Pn.dot(ia), h = Ln.dot(ia);
    if (u >= 0 && h <= u)
      return t.copy(n);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), t.copy(i).addScaledVector(Pn, a);
    na.subVectors(e, s);
    const m = Pn.dot(na), g = Ln.dot(na);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const _ = m * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(i).addScaledVector(Ln, o);
    const p = u * g - m * h;
    if (p <= 0 && h - u >= 0 && m - g >= 0)
      return rl.subVectors(s, n), o = (h - u) / (h - u + (m - g)), t.copy(n).addScaledVector(rl, o);
    const d = 1 / (p + _ + f);
    return a = _ * d, o = f * d, t.copy(i).addScaledVector(Pn, a).addScaledVector(Ln, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class vc extends bs {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ec, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const sl = /* @__PURE__ */ new dt(), tn = /* @__PURE__ */ new sf(), Zr = /* @__PURE__ */ new Va(), al = /* @__PURE__ */ new z(), Dn = /* @__PURE__ */ new z(), Un = /* @__PURE__ */ new z(), In = /* @__PURE__ */ new z(), ra = /* @__PURE__ */ new z(), $r = /* @__PURE__ */ new z(), Jr = /* @__PURE__ */ new Oe(), Qr = /* @__PURE__ */ new Oe(), es = /* @__PURE__ */ new Oe(), ol = /* @__PURE__ */ new z(), ll = /* @__PURE__ */ new z(), cl = /* @__PURE__ */ new z(), ts = /* @__PURE__ */ new z(), is = /* @__PURE__ */ new z();
class wi extends Ht {
  constructor(e = new Sn(), t = new vc()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const n = t[i[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = n.length; s < a; s++) {
          const o = n[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, n = i.attributes.position, s = i.morphAttributes.position, a = i.morphTargetsRelative;
    t.fromBufferAttribute(n, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      $r.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], h = s[l];
        u !== 0 && (ra.fromBufferAttribute(h, e), a ? $r.addScaledVector(ra, u) : $r.addScaledVector(ra.sub(t), u));
      }
      t.add($r);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.material, s = this.matrixWorld;
    n !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Zr.copy(i.boundingSphere), Zr.applyMatrix4(s), tn.copy(e.ray).recast(e.near), !(Zr.containsPoint(tn.origin) === !1 && (tn.intersectSphere(Zr, al) === null || tn.origin.distanceToSquared(al) > (e.far - e.near) ** 2)) && (sl.copy(s).invert(), tn.copy(e.ray).applyMatrix4(sl), !(i.boundingBox !== null && tn.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, t, tn)));
  }
  _computeIntersections(e, t, i) {
    let n;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const p = f[g], d = a[p.materialIndex], S = Math.max(p.start, m.start), v = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
          for (let y = S, E = v; y < E; y += 3) {
            const R = o.getX(y), A = o.getX(y + 1), P = o.getX(y + 2);
            n = ns(this, d, e, i, c, u, h, R, A, P), n && (n.faceIndex = Math.floor(y / 3), n.face.materialIndex = p.materialIndex, t.push(n));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(o.count, m.start + m.count);
        for (let p = g, d = _; p < d; p += 3) {
          const S = o.getX(p), v = o.getX(p + 1), y = o.getX(p + 2);
          n = ns(this, a, e, i, c, u, h, S, v, y), n && (n.faceIndex = Math.floor(p / 3), t.push(n));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const p = f[g], d = a[p.materialIndex], S = Math.max(p.start, m.start), v = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
          for (let y = S, E = v; y < E; y += 3) {
            const R = y, A = y + 1, P = y + 2;
            n = ns(this, d, e, i, c, u, h, R, A, P), n && (n.faceIndex = Math.floor(y / 3), n.face.materialIndex = p.materialIndex, t.push(n));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(l.count, m.start + m.count);
        for (let p = g, d = _; p < d; p += 3) {
          const S = p, v = p + 1, y = p + 2;
          n = ns(this, a, e, i, c, u, h, S, v, y), n && (n.faceIndex = Math.floor(p / 3), t.push(n));
        }
      }
  }
}
function af(r, e, t, i, n, s, a, o) {
  let l;
  if (e.side === Lt ? l = i.intersectTriangle(a, s, n, !0, o) : l = i.intersectTriangle(n, s, a, e.side === Xi, o), l === null)
    return null;
  is.copy(o), is.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(is);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: is.clone(),
    object: r
  };
}
function ns(r, e, t, i, n, s, a, o, l, c) {
  r.getVertexPosition(o, Dn), r.getVertexPosition(l, Un), r.getVertexPosition(c, In);
  const u = af(r, e, t, i, Dn, Un, In, ts);
  if (u) {
    n && (Jr.fromBufferAttribute(n, o), Qr.fromBufferAttribute(n, l), es.fromBufferAttribute(n, c), u.uv = ii.getInterpolation(ts, Dn, Un, In, Jr, Qr, es, new Oe())), s && (Jr.fromBufferAttribute(s, o), Qr.fromBufferAttribute(s, l), es.fromBufferAttribute(s, c), u.uv1 = ii.getInterpolation(ts, Dn, Un, In, Jr, Qr, es, new Oe()), u.uv2 = u.uv1), a && (ol.fromBufferAttribute(a, o), ll.fromBufferAttribute(a, l), cl.fromBufferAttribute(a, c), u.normal = ii.getInterpolation(ts, Dn, Un, In, ol, ll, cl, new z()), u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = {
      a: o,
      b: l,
      c,
      normal: new z(),
      materialIndex: 0
    };
    ii.getNormal(Dn, Un, In, h.normal), u.face = h;
  }
  return u;
}
const of = (
  /* glsl */
  `
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`
), lf = (
  /* glsl */
  `
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`
), cf = (
  /* glsl */
  `
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`
), uf = (
  /* glsl */
  `
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`
), hf = (
  /* glsl */
  `
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`
), ff = (
  /* glsl */
  `
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`
), df = (
  /* glsl */
  `
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`
), pf = (
  /* glsl */
  `
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`
), mf = (
  /* glsl */
  `
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`
), _f = (
  /* glsl */
  `
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`
), gf = (
  /* glsl */
  `

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

`
), vf = (
  /* glsl */
  `

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`
), xf = (
  /* glsl */
  `
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`
), Mf = (
  /* glsl */
  `
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
`
), Sf = (
  /* glsl */
  `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`
), Ef = (
  /* glsl */
  `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`
), yf = (
  /* glsl */
  `
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`
), Tf = (
  /* glsl */
  `
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`
), bf = (
  /* glsl */
  `
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`
), Af = (
  /* glsl */
  `
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`
), wf = (
  /* glsl */
  `
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
`
), Rf = (
  /* glsl */
  `
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

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

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

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

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

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

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`
), Cf = (
  /* glsl */
  `
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
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

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

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
`
), Pf = (
  /* glsl */
  `
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
`
), Lf = (
  /* glsl */
  `
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`
), Df = (
  /* glsl */
  `
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`
), Uf = (
  /* glsl */
  `
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`
), If = (
  /* glsl */
  `
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`
), Ff = (
  /* glsl */
  `
gl_FragColor = linearToOutputTexel( gl_FragColor );
`
), Nf = (
  /* glsl */
  `

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`
), Of = (
  /* glsl */
  `
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
`
), Bf = (
  /* glsl */
  `
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`
), zf = (
  /* glsl */
  `
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`
), Gf = (
  /* glsl */
  `
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`
), Hf = (
  /* glsl */
  `
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
`
), kf = (
  /* glsl */
  `
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`
), Vf = (
  /* glsl */
  `
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`
), Wf = (
  /* glsl */
  `
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`
), Xf = (
  /* glsl */
  `
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
`
), qf = (
  /* glsl */
  `

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`
), Yf = (
  /* glsl */
  `
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`
), Kf = (
  /* glsl */
  `
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`
), jf = (
  /* glsl */
  `
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`
), Zf = (
  /* glsl */
  `
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`
), $f = (
  /* glsl */
  `
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

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

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
`
), Jf = (
  /* glsl */
  `
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`
), Qf = (
  /* glsl */
  `
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`
), ed = (
  /* glsl */
  `
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
`
), td = (
  /* glsl */
  `
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`
), id = (
  /* glsl */
  `
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
`
), nd = (
  /* glsl */
  `
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

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

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;

#endif
`
), rd = (
  /* glsl */
  `

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

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

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
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

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

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

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

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

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

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
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

		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

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
`
), sd = (
  /* glsl */
  `
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
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

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
`
), ad = (
  /* glsl */
  `
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`
), od = (
  /* glsl */
  `
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`
), ld = (
  /* glsl */
  `
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`
), cd = (
  /* glsl */
  `
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`
), ud = (
  /* glsl */
  `
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`
), hd = (
  /* glsl */
  `
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
`
), fd = (
  /* glsl */
  `
#ifdef USE_MAP

	diffuseColor *= texture2D( map, vMapUv );

#endif
`
), dd = (
  /* glsl */
  `
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`
), pd = (
  /* glsl */
  `
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`
), md = (
  /* glsl */
  `
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`
), _d = (
  /* glsl */
  `
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`
), gd = (
  /* glsl */
  `
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`
), vd = (
  /* glsl */
  `
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`
), xd = (
  /* glsl */
  `
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`
), Md = (
  /* glsl */
  `
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`
), Sd = (
  /* glsl */
  `
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

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
`
), Ed = (
  /* glsl */
  `
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`
), yd = (
  /* glsl */
  `

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`
), Td = (
  /* glsl */
  `
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`
), bd = (
  /* glsl */
  `
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`
), Ad = (
  /* glsl */
  `
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`
), wd = (
  /* glsl */
  `
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`
), Rd = (
  /* glsl */
  `
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`
), Cd = (
  /* glsl */
  `
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`
), Pd = (
  /* glsl */
  `

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`
), Ld = (
  /* glsl */
  `

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`
), Dd = (
  /* glsl */
  `
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`
), Ud = (
  /* glsl */
  `
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

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`
), Id = (
  /* glsl */
  `
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`
), Fd = (
  /* glsl */
  `
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`
), Nd = (
  /* glsl */
  `
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`
), Od = (
  /* glsl */
  `
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`
), Bd = (
  /* glsl */
  `
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`
), zd = (
  /* glsl */
  `
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`
), Gd = (
  /* glsl */
  `
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

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

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

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
`
), Hd = (
  /* glsl */
  `

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

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
`
), kd = (
  /* glsl */
  `

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

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

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`
), Vd = (
  /* glsl */
  `
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

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
`
), Wd = (
  /* glsl */
  `
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`
), Xd = (
  /* glsl */
  `
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

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

#endif
`
), qd = (
  /* glsl */
  `
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`
), Yd = (
  /* glsl */
  `
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
`
), Kd = (
  /* glsl */
  `
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`
), jd = (
  /* glsl */
  `
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`
), Zd = (
  /* glsl */
  `
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`
), $d = (
  /* glsl */
  `
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
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
`
), Jd = (
  /* glsl */
  `
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`
), Qd = (
  /* glsl */
  `
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

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

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

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`
), ep = (
  /* glsl */
  `
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`
), tp = (
  /* glsl */
  `
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`
), ip = (
  /* glsl */
  `
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`
), np = (
  /* glsl */
  `
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`
), rp = (
  /* glsl */
  `
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`
), sp = (
  /* glsl */
  `
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`
), ap = (
  /* glsl */
  `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`
), op = (
  /* glsl */
  `

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`
), lp = (
  /* glsl */
  `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`
), cp = (
  /* glsl */
  `
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`
), up = (
  /* glsl */
  `
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
`
), hp = (
  /* glsl */
  `
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`
), fp = (
  /* glsl */
  `
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
`
), dp = (
  /* glsl */
  `
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`
), pp = (
  /* glsl */
  `
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`
), mp = (
  /* glsl */
  `
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`
), _p = (
  /* glsl */
  `
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`
), gp = (
  /* glsl */
  `
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`
), vp = (
  /* glsl */
  `
#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

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
`
), xp = (
  /* glsl */
  `
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`
), Mp = (
  /* glsl */
  `
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>

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
`
), Sp = (
  /* glsl */
  `
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`
), Ep = (
  /* glsl */
  `
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
	#include <morphcolor_vertex>
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
`
), yp = (
  /* glsl */
  `
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`
), Tp = (
  /* glsl */
  `
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

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

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`
), bp = (
  /* glsl */
  `
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

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

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`
), Ap = (
  /* glsl */
  `
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>

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
`
), wp = (
  /* glsl */
  `
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`
), Rp = (
  /* glsl */
  `
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>

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
`
), Cp = (
  /* glsl */
  `
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
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
	#include <alphahash_fragment>
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

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`
), Pp = (
  /* glsl */
  `
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>

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
`
), Lp = (
  /* glsl */
  `
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`
), Dp = (
  /* glsl */
  `
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphcolor_vertex>
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
`
), Up = (
  /* glsl */
  `
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`
), Ip = (
  /* glsl */
  `
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`
), Fp = (
  /* glsl */
  `
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`
), Np = (
  /* glsl */
  `
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
`
), Op = (
  /* glsl */
  `
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`
), we = {
  alphahash_fragment: of,
  alphahash_pars_fragment: lf,
  alphamap_fragment: cf,
  alphamap_pars_fragment: uf,
  alphatest_fragment: hf,
  alphatest_pars_fragment: ff,
  aomap_fragment: df,
  aomap_pars_fragment: pf,
  begin_vertex: mf,
  beginnormal_vertex: _f,
  bsdfs: gf,
  iridescence_fragment: vf,
  bumpmap_pars_fragment: xf,
  clipping_planes_fragment: Mf,
  clipping_planes_pars_fragment: Sf,
  clipping_planes_pars_vertex: Ef,
  clipping_planes_vertex: yf,
  color_fragment: Tf,
  color_pars_fragment: bf,
  color_pars_vertex: Af,
  color_vertex: wf,
  common: Rf,
  cube_uv_reflection_fragment: Cf,
  defaultnormal_vertex: Pf,
  displacementmap_pars_vertex: Lf,
  displacementmap_vertex: Df,
  emissivemap_fragment: Uf,
  emissivemap_pars_fragment: If,
  colorspace_fragment: Ff,
  colorspace_pars_fragment: Nf,
  envmap_fragment: Of,
  envmap_common_pars_fragment: Bf,
  envmap_pars_fragment: zf,
  envmap_pars_vertex: Gf,
  envmap_physical_pars_fragment: Jf,
  envmap_vertex: Hf,
  fog_vertex: kf,
  fog_pars_vertex: Vf,
  fog_fragment: Wf,
  fog_pars_fragment: Xf,
  gradientmap_pars_fragment: qf,
  lightmap_fragment: Yf,
  lightmap_pars_fragment: Kf,
  lights_lambert_fragment: jf,
  lights_lambert_pars_fragment: Zf,
  lights_pars_begin: $f,
  lights_toon_fragment: Qf,
  lights_toon_pars_fragment: ed,
  lights_phong_fragment: td,
  lights_phong_pars_fragment: id,
  lights_physical_fragment: nd,
  lights_physical_pars_fragment: rd,
  lights_fragment_begin: sd,
  lights_fragment_maps: ad,
  lights_fragment_end: od,
  logdepthbuf_fragment: ld,
  logdepthbuf_pars_fragment: cd,
  logdepthbuf_pars_vertex: ud,
  logdepthbuf_vertex: hd,
  map_fragment: fd,
  map_pars_fragment: dd,
  map_particle_fragment: pd,
  map_particle_pars_fragment: md,
  metalnessmap_fragment: _d,
  metalnessmap_pars_fragment: gd,
  morphcolor_vertex: vd,
  morphnormal_vertex: xd,
  morphtarget_pars_vertex: Md,
  morphtarget_vertex: Sd,
  normal_fragment_begin: Ed,
  normal_fragment_maps: yd,
  normal_pars_fragment: Td,
  normal_pars_vertex: bd,
  normal_vertex: Ad,
  normalmap_pars_fragment: wd,
  clearcoat_normal_fragment_begin: Rd,
  clearcoat_normal_fragment_maps: Cd,
  clearcoat_pars_fragment: Pd,
  iridescence_pars_fragment: Ld,
  opaque_fragment: Dd,
  packing: Ud,
  premultiplied_alpha_fragment: Id,
  project_vertex: Fd,
  dithering_fragment: Nd,
  dithering_pars_fragment: Od,
  roughnessmap_fragment: Bd,
  roughnessmap_pars_fragment: zd,
  shadowmap_pars_fragment: Gd,
  shadowmap_pars_vertex: Hd,
  shadowmap_vertex: kd,
  shadowmask_pars_fragment: Vd,
  skinbase_vertex: Wd,
  skinning_pars_vertex: Xd,
  skinning_vertex: qd,
  skinnormal_vertex: Yd,
  specularmap_fragment: Kd,
  specularmap_pars_fragment: jd,
  tonemapping_fragment: Zd,
  tonemapping_pars_fragment: $d,
  transmission_fragment: Jd,
  transmission_pars_fragment: Qd,
  uv_pars_fragment: ep,
  uv_pars_vertex: tp,
  uv_vertex: ip,
  worldpos_vertex: np,
  background_vert: rp,
  background_frag: sp,
  backgroundCube_vert: ap,
  backgroundCube_frag: op,
  cube_vert: lp,
  cube_frag: cp,
  depth_vert: up,
  depth_frag: hp,
  distanceRGBA_vert: fp,
  distanceRGBA_frag: dp,
  equirect_vert: pp,
  equirect_frag: mp,
  linedashed_vert: _p,
  linedashed_frag: gp,
  meshbasic_vert: vp,
  meshbasic_frag: xp,
  meshlambert_vert: Mp,
  meshlambert_frag: Sp,
  meshmatcap_vert: Ep,
  meshmatcap_frag: yp,
  meshnormal_vert: Tp,
  meshnormal_frag: bp,
  meshphong_vert: Ap,
  meshphong_frag: wp,
  meshphysical_vert: Rp,
  meshphysical_frag: Cp,
  meshtoon_vert: Pp,
  meshtoon_frag: Lp,
  points_vert: Dp,
  points_frag: Up,
  shadow_vert: Ip,
  shadow_frag: Fp,
  sprite_vert: Np,
  sprite_frag: Op
}, re = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Le() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Le() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Le() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Le() },
    normalScale: { value: /* @__PURE__ */ new Oe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Le() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Le() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Xe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Le() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Le() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Oe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Le() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Le() },
    alphaTest: { value: 0 }
  }
}, li = {
  basic: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.fog
    ]),
    vertexShader: we.meshbasic_vert,
    fragmentShader: we.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) }
      }
    ]),
    vertexShader: we.meshlambert_vert,
    fragmentShader: we.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        specular: { value: /* @__PURE__ */ new Xe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: we.meshphong_vert,
    fragmentShader: we.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.roughnessmap,
      re.metalnessmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: we.meshphysical_vert,
    fragmentShader: we.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.gradientmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) }
      }
    ]),
    vertexShader: we.meshtoon_vert,
    fragmentShader: we.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: we.meshmatcap_vert,
    fragmentShader: we.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ yt([
      re.points,
      re.fog
    ]),
    vertexShader: we.points_vert,
    fragmentShader: we.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: we.linedashed_vert,
    fragmentShader: we.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.displacementmap
    ]),
    vertexShader: we.depth_vert,
    fragmentShader: we.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.meshnormal_vert,
    fragmentShader: we.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ yt([
      re.sprite,
      re.fog
    ]),
    vertexShader: we.sprite_vert,
    fragmentShader: we.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Le() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: we.background_vert,
    fragmentShader: we.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: we.backgroundCube_vert,
    fragmentShader: we.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: we.cube_vert,
    fragmentShader: we.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: we.equirect_vert,
    fragmentShader: we.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ yt([
      re.common,
      re.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new z() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: we.distanceRGBA_vert,
    fragmentShader: we.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ yt([
      re.lights,
      re.fog,
      {
        color: { value: /* @__PURE__ */ new Xe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.shadow_vert,
    fragmentShader: we.shadow_frag
  }
};
li.physical = {
  uniforms: /* @__PURE__ */ yt([
    li.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Le() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Le() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Oe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Le() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Le() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Le() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Xe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Le() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Le() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Le() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Oe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Le() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Xe(0) },
      specularColor: { value: /* @__PURE__ */ new Xe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Le() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Le() },
      anisotropyVector: { value: /* @__PURE__ */ new Oe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Le() }
    }
  ]),
  vertexShader: we.meshphysical_vert,
  fragmentShader: we.meshphysical_frag
};
const rs = { r: 0, b: 0, g: 0 };
function Bp(r, e, t, i, n, s, a) {
  const o = new Xe(0);
  let l = s === !0 ? 0 : 1, c, u, h = null, f = 0, m = null;
  function g(p, d) {
    let S = !1, v = d.isScene === !0 ? d.background : null;
    switch (v && v.isTexture && (v = (d.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? _(o, l) : v && v.isColor && (_(v, 1), S = !0), r.xr.getEnvironmentBlendMode()) {
      case "opaque":
        S = !0;
        break;
      case "additive":
        i.buffers.color.setClear(0, 0, 0, 1, a), S = !0;
        break;
      case "alpha-blend":
        i.buffers.color.setClear(0, 0, 0, 0, a), S = !0;
        break;
    }
    (r.autoClear || S) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), v && (v.isCubeTexture || v.mapping === Es) ? (u === void 0 && (u = new wi(
      new Nr(1, 1, 1),
      new qi({
        name: "BackgroundCubeMaterial",
        uniforms: Qn(li.backgroundCube.uniforms),
        vertexShader: li.backgroundCube.vertexShader,
        fragmentShader: li.backgroundCube.fragmentShader,
        side: Lt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(R, A, P) {
      this.matrixWorld.copyPosition(P.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(u)), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = d.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = d.backgroundIntensity, u.material.toneMapped = v.colorSpace !== Re, (h !== v || f !== v.version || m !== r.toneMapping) && (u.material.needsUpdate = !0, h = v, f = v.version, m = r.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new wi(
      new Ts(2, 2),
      new qi({
        name: "BackgroundMaterial",
        uniforms: Qn(li.background.uniforms),
        vertexShader: li.background.vertexShader,
        fragmentShader: li.background.fragmentShader,
        side: Xi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = d.backgroundIntensity, c.material.toneMapped = v.colorSpace !== Re, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (h !== v || f !== v.version || m !== r.toneMapping) && (c.material.needsUpdate = !0, h = v, f = v.version, m = r.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(p, d) {
    p.getRGB(rs, gc(r)), i.buffers.color.setClear(rs.r, rs.g, rs.b, d, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(p, d = 1) {
      o.set(p), l = d, _(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, _(o, l);
    },
    render: g
  };
}
function zp(r, e, t, i) {
  const n = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = i.isWebGL2 || s !== null, o = {}, l = p(null);
  let c = l, u = !1;
  function h(O, N, K, G, q) {
    let j = !1;
    if (a) {
      const Z = _(G, K, N);
      c !== Z && (c = Z, m(c.object)), j = d(O, G, K, q), j && S(O, G, K, q);
    } else {
      const Z = N.wireframe === !0;
      (c.geometry !== G.id || c.program !== K.id || c.wireframe !== Z) && (c.geometry = G.id, c.program = K.id, c.wireframe = Z, j = !0);
    }
    q !== null && t.update(q, r.ELEMENT_ARRAY_BUFFER), (j || u) && (u = !1, P(O, N, K, G), q !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(q).buffer));
  }
  function f() {
    return i.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function m(O) {
    return i.isWebGL2 ? r.bindVertexArray(O) : s.bindVertexArrayOES(O);
  }
  function g(O) {
    return i.isWebGL2 ? r.deleteVertexArray(O) : s.deleteVertexArrayOES(O);
  }
  function _(O, N, K) {
    const G = K.wireframe === !0;
    let q = o[O.id];
    q === void 0 && (q = {}, o[O.id] = q);
    let j = q[N.id];
    j === void 0 && (j = {}, q[N.id] = j);
    let Z = j[G];
    return Z === void 0 && (Z = p(f()), j[G] = Z), Z;
  }
  function p(O) {
    const N = [], K = [], G = [];
    for (let q = 0; q < n; q++)
      N[q] = 0, K[q] = 0, G[q] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: N,
      enabledAttributes: K,
      attributeDivisors: G,
      object: O,
      attributes: {},
      index: null
    };
  }
  function d(O, N, K, G) {
    const q = c.attributes, j = N.attributes;
    let Z = 0;
    const F = K.getAttributes();
    for (const Y in F)
      if (F[Y].location >= 0) {
        const ne = q[Y];
        let se = j[Y];
        if (se === void 0 && (Y === "instanceMatrix" && O.instanceMatrix && (se = O.instanceMatrix), Y === "instanceColor" && O.instanceColor && (se = O.instanceColor)), ne === void 0 || ne.attribute !== se || se && ne.data !== se.data)
          return !0;
        Z++;
      }
    return c.attributesNum !== Z || c.index !== G;
  }
  function S(O, N, K, G) {
    const q = {}, j = N.attributes;
    let Z = 0;
    const F = K.getAttributes();
    for (const Y in F)
      if (F[Y].location >= 0) {
        let ne = j[Y];
        ne === void 0 && (Y === "instanceMatrix" && O.instanceMatrix && (ne = O.instanceMatrix), Y === "instanceColor" && O.instanceColor && (ne = O.instanceColor));
        const se = {};
        se.attribute = ne, ne && ne.data && (se.data = ne.data), q[Y] = se, Z++;
      }
    c.attributes = q, c.attributesNum = Z, c.index = G;
  }
  function v() {
    const O = c.newAttributes;
    for (let N = 0, K = O.length; N < K; N++)
      O[N] = 0;
  }
  function y(O) {
    E(O, 0);
  }
  function E(O, N) {
    const K = c.newAttributes, G = c.enabledAttributes, q = c.attributeDivisors;
    K[O] = 1, G[O] === 0 && (r.enableVertexAttribArray(O), G[O] = 1), q[O] !== N && ((i.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](O, N), q[O] = N);
  }
  function R() {
    const O = c.newAttributes, N = c.enabledAttributes;
    for (let K = 0, G = N.length; K < G; K++)
      N[K] !== O[K] && (r.disableVertexAttribArray(K), N[K] = 0);
  }
  function A(O, N, K, G, q, j, Z) {
    Z === !0 ? r.vertexAttribIPointer(O, N, K, q, j) : r.vertexAttribPointer(O, N, K, G, q, j);
  }
  function P(O, N, K, G) {
    if (i.isWebGL2 === !1 && (O.isInstancedMesh || G.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const q = G.attributes, j = K.getAttributes(), Z = N.defaultAttributeValues;
    for (const F in j) {
      const Y = j[F];
      if (Y.location >= 0) {
        let ae = q[F];
        if (ae === void 0 && (F === "instanceMatrix" && O.instanceMatrix && (ae = O.instanceMatrix), F === "instanceColor" && O.instanceColor && (ae = O.instanceColor)), ae !== void 0) {
          const ne = ae.normalized, se = ae.itemSize, ge = t.get(ae);
          if (ge === void 0)
            continue;
          const Te = ge.buffer, ve = ge.type, ze = ge.bytesPerElement, At = i.isWebGL2 === !0 && (ve === r.INT || ve === r.UNSIGNED_INT || ae.gpuType === ic);
          if (ae.isInterleavedBufferAttribute) {
            const Ce = ae.data, I = Ce.stride, pt = ae.offset;
            if (Ce.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < Y.locationSize; xe++)
                E(Y.location + xe, Ce.meshPerAttribute);
              O.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = Ce.meshPerAttribute * Ce.count);
            } else
              for (let xe = 0; xe < Y.locationSize; xe++)
                y(Y.location + xe);
            r.bindBuffer(r.ARRAY_BUFFER, Te);
            for (let xe = 0; xe < Y.locationSize; xe++)
              A(
                Y.location + xe,
                se / Y.locationSize,
                ve,
                ne,
                I * ze,
                (pt + se / Y.locationSize * xe) * ze,
                At
              );
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let Ce = 0; Ce < Y.locationSize; Ce++)
                E(Y.location + Ce, ae.meshPerAttribute);
              O.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let Ce = 0; Ce < Y.locationSize; Ce++)
                y(Y.location + Ce);
            r.bindBuffer(r.ARRAY_BUFFER, Te);
            for (let Ce = 0; Ce < Y.locationSize; Ce++)
              A(
                Y.location + Ce,
                se / Y.locationSize,
                ve,
                ne,
                se * ze,
                se / Y.locationSize * Ce * ze,
                At
              );
          }
        } else if (Z !== void 0) {
          const ne = Z[F];
          if (ne !== void 0)
            switch (ne.length) {
              case 2:
                r.vertexAttrib2fv(Y.location, ne);
                break;
              case 3:
                r.vertexAttrib3fv(Y.location, ne);
                break;
              case 4:
                r.vertexAttrib4fv(Y.location, ne);
                break;
              default:
                r.vertexAttrib1fv(Y.location, ne);
            }
        }
      }
    }
    R();
  }
  function x() {
    $();
    for (const O in o) {
      const N = o[O];
      for (const K in N) {
        const G = N[K];
        for (const q in G)
          g(G[q].object), delete G[q];
        delete N[K];
      }
      delete o[O];
    }
  }
  function b(O) {
    if (o[O.id] === void 0)
      return;
    const N = o[O.id];
    for (const K in N) {
      const G = N[K];
      for (const q in G)
        g(G[q].object), delete G[q];
      delete N[K];
    }
    delete o[O.id];
  }
  function V(O) {
    for (const N in o) {
      const K = o[N];
      if (K[O.id] === void 0)
        continue;
      const G = K[O.id];
      for (const q in G)
        g(G[q].object), delete G[q];
      delete K[O.id];
    }
  }
  function $() {
    D(), u = !0, c !== l && (c = l, m(c.object));
  }
  function D() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: $,
    resetDefaultState: D,
    dispose: x,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: V,
    initAttributes: v,
    enableAttribute: y,
    disableUnusedAttributes: R
  };
}
function Gp(r, e, t, i) {
  const n = i.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, u) {
    r.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, h) {
    if (h === 0)
      return;
    let f, m;
    if (n)
      f = r, m = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[m](s, c, u, h), t.update(u, s, h);
  }
  this.setMode = a, this.render = o, this.renderInstances = l;
}
function Hp(r, e, t) {
  let i;
  function n() {
    if (i !== void 0)
      return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function s(A) {
    if (A === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = a || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), f = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), p = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), d = r.getParameter(r.MAX_VARYING_VECTORS), S = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), v = f > 0, y = a || e.has("OES_texture_float"), E = v && y, R = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: n,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: p,
    maxVaryings: d,
    maxFragmentUniforms: S,
    vertexTextures: v,
    floatFragmentTextures: y,
    floatVertexTextures: E,
    maxSamples: R
  };
}
function kp(r) {
  const e = this;
  let t = null, i = 0, n = !1, s = !1;
  const a = new sn(), o = new Le(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
    const m = h.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    i !== 0 || n;
    return n = f, i = h.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(h, f) {
    t = u(h, f, 0);
  }, this.setState = function(h, f, m) {
    const g = h.clippingPlanes, _ = h.clipIntersection, p = h.clipShadows, d = r.get(h);
    if (!n || g === null || g.length === 0 || s && !p)
      s ? u(null) : c();
    else {
      const S = s ? 0 : i, v = S * 4;
      let y = d.clippingState || null;
      l.value = y, y = u(g, f, v, m);
      for (let E = 0; E !== v; ++E)
        y[E] = t[E];
      d.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function u(h, f, m, g) {
    const _ = h !== null ? h.length : 0;
    let p = null;
    if (_ !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const d = m + _ * 4, S = f.matrixWorldInverse;
        o.getNormalMatrix(S), (p === null || p.length < d) && (p = new Float32Array(d));
        for (let v = 0, y = m; v !== _; ++v, y += 4)
          a.copy(h[v]).applyMatrix4(S, o), a.normal.toArray(p, y), p[y + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, p;
  }
}
let Fn;
class xc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Fn === void 0 && (Fn = br("canvas")), Fn.width = e.width, Fn.height = e.height;
      const i = Fn.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), t = Fn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = br("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const n = i.getImageData(0, 0, e.width, e.height), s = n.data;
      for (let a = 0; a < s.length; a++)
        s[a] = qn(s[a] / 255) * 255;
      return i.putImageData(n, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(qn(t[i] / 255) * 255) : t[i] = qn(t[i]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Vp = 0;
class Mc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Vp++ }), this.uuid = Ur(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, n = this.data;
    if (n !== null) {
      let s;
      if (Array.isArray(n)) {
        s = [];
        for (let a = 0, o = n.length; a < o; a++)
          n[a].isDataTexture ? s.push(sa(n[a].image)) : s.push(sa(n[a]));
      } else
        s = sa(n);
      i.url = s;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function sa(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? xc.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Wp = 0;
class bt extends sr {
  constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, i = ri, n = ri, s = Ct, a = yr, o = si, l = ki, c = bt.DEFAULT_ANISOTROPY, u = dn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Wp++ }), this.uuid = Ur(), this.name = "", this.source = new Mc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = n, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Oe(0, 0), this.repeat = new Oe(1, 1), this.center = new Oe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Le(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === fn ? Re : dn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== tc)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Er:
          e.x = e.x - Math.floor(e.x);
          break;
        case ri:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ta:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Er:
          e.y = e.y - Math.floor(e.y);
          break;
        case ri:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ta:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Re ? fn : lc;
  }
  set encoding(e) {
    vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === fn ? Re : dn;
  }
}
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = tc;
bt.DEFAULT_ANISOTROPY = 1;
class Xp extends sr {
  constructor(e = 1, t = 1, i = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ft(0, 0, e, t), this.scissorTest = !1, this.viewport = new ft(0, 0, e, t);
    const n = { width: e, height: t, depth: 1 };
    i.encoding !== void 0 && (vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), i.colorSpace = i.encoding === fn ? Re : dn), this.texture = new bt(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = i.generateMipmaps !== void 0 ? i.generateMipmaps : !1, this.texture.internalFormat = i.internalFormat !== void 0 ? i.internalFormat : null, this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : Ct, this.depthBuffer = i.depthBuffer !== void 0 ? i.depthBuffer : !0, this.stencilBuffer = i.stencilBuffer !== void 0 ? i.stencilBuffer : !1, this.depthTexture = i.depthTexture !== void 0 ? i.depthTexture : null, this.samples = i.samples !== void 0 ? i.samples : 0;
  }
  setSize(e, t, i = 1) {
    (this.width !== e || this.height !== t || this.depth !== i) && (this.width = e, this.height = t, this.depth = i, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Mc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class xn extends Xp {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = !0;
  }
}
class Sc extends Ht {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new dt(), this.projectionMatrix = new dt(), this.projectionMatrixInverse = new dt(), this.coordinateSystem = Ai;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ni extends Sc {
  constructor(e = 50, t = 1, i = 0.1, n = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = xa * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Is * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return xa * 2 * Math.atan(
      Math.tan(Is * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, i, n, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Is * 0.5 * this.fov) / this.zoom, i = 2 * t, n = this.aspect * i, s = -0.5 * n;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * n / l, t -= a.offsetY * i / c, n *= a.width / l, i *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + n, t, t - i, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Nn = -90, On = 1;
class qp extends Ht {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null;
    const n = new ni(Nn, On, e, t);
    n.layers = this.layers, this.add(n);
    const s = new ni(Nn, On, e, t);
    s.layers = this.layers, this.add(s);
    const a = new ni(Nn, On, e, t);
    a.layers = this.layers, this.add(a);
    const o = new ni(Nn, On, e, t);
    o.layers = this.layers, this.add(o);
    const l = new ni(Nn, On, e, t);
    l.layers = this.layers, this.add(l);
    const c = new ni(Nn, On, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, n, s, a, o, l] = t;
    for (const c of t)
      this.remove(c);
    if (e === Ai)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), n.up.set(0, 1, 0), n.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ds)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), n.up.set(0, -1, 0), n.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const i = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [n, s, a, o, l, c] = this.children, u = e.getRenderTarget(), h = e.xr.enabled;
    e.xr.enabled = !1;
    const f = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0), e.render(t, n), e.setRenderTarget(i, 1), e.render(t, s), e.setRenderTarget(i, 2), e.render(t, a), e.setRenderTarget(i, 3), e.render(t, o), e.setRenderTarget(i, 4), e.render(t, l), i.texture.generateMipmaps = f, e.setRenderTarget(i, 5), e.render(t, c), e.setRenderTarget(u), e.xr.enabled = h, i.texture.needsPMREMUpdate = !0;
  }
}
class Ec extends bt {
  constructor(e, t, i, n, s, a, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Zn, super(e, t, i, n, s, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Yp extends xn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const i = { width: e, height: e, depth: 1 }, n = [i, i, i, i, i, i];
    t.encoding !== void 0 && (vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === fn ? Re : dn), this.texture = new Ec(n, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ct;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, n = new Nr(5, 5, 5), s = new qi({
      name: "CubemapFromEquirect",
      uniforms: Qn(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: Lt,
      blending: Gi
    });
    s.uniforms.tEquirect.value = t;
    const a = new wi(n, s), o = t.minFilter;
    return t.minFilter === yr && (t.minFilter = Ct), new qp(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, i, n) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, i, n);
    e.setRenderTarget(s);
  }
}
function Kp(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ea ? a.mapping = Zn : o === ya && (a.mapping = $n), a;
  }
  function i(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Ea || o === ya)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Yp(l.height / 2);
            return c.fromEquirectangularTexture(r, a), e.set(a, c), a.addEventListener("dispose", n), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function n(a) {
    const o = a.target;
    o.removeEventListener("dispose", n);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: s
  };
}
class yc extends Sc {
  constructor(e = -1, t = 1, i = 1, n = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = n, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, n, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
    let s = i - e, a = i + e, o = n + t, l = n - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const kn = 4, ul = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ln = 20, aa = /* @__PURE__ */ new yc(), hl = /* @__PURE__ */ new Xe();
let oa = null;
const an = (1 + Math.sqrt(5)) / 2, Bn = 1 / an, fl = [
  /* @__PURE__ */ new z(1, 1, 1),
  /* @__PURE__ */ new z(-1, 1, 1),
  /* @__PURE__ */ new z(1, 1, -1),
  /* @__PURE__ */ new z(-1, 1, -1),
  /* @__PURE__ */ new z(0, an, Bn),
  /* @__PURE__ */ new z(0, an, -Bn),
  /* @__PURE__ */ new z(Bn, 0, an),
  /* @__PURE__ */ new z(-Bn, 0, an),
  /* @__PURE__ */ new z(an, Bn, 0),
  /* @__PURE__ */ new z(-an, Bn, 0)
];
class dl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, i = 0.1, n = 100) {
    oa = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, i, n, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = _l(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ml(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(oa), e.scissorTest = !1, ss(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Zn || e.mapping === $n ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), oa = this._renderer.getRenderTarget();
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = {
      magFilter: Ct,
      minFilter: Ct,
      generateMipmaps: !1,
      type: Tr,
      format: si,
      colorSpace: di,
      depthBuffer: !1
    }, n = pl(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = pl(e, t, i);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = jp(s)), this._blurMaterial = Zp(s, e, t);
    }
    return n;
  }
  _compileMaterial(e) {
    const t = new wi(this._lodPlanes[0], e);
    this._renderer.compile(t, aa);
  }
  _sceneToCubeUV(e, t, i, n) {
    const o = new ni(90, 1, t, i), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, f = u.toneMapping;
    u.getClearColor(hl), u.toneMapping = Hi, u.autoClear = !1;
    const m = new vc({
      name: "PMREM.Background",
      side: Lt,
      depthWrite: !1,
      depthTest: !1
    }), g = new wi(new Nr(), m);
    let _ = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, _ = !0) : (m.color.copy(hl), _ = !0);
    for (let d = 0; d < 6; d++) {
      const S = d % 3;
      S === 0 ? (o.up.set(0, l[d], 0), o.lookAt(c[d], 0, 0)) : S === 1 ? (o.up.set(0, 0, l[d]), o.lookAt(0, c[d], 0)) : (o.up.set(0, l[d], 0), o.lookAt(0, 0, c[d]));
      const v = this._cubeSize;
      ss(n, S * v, d > 2 ? v : 0, v, v), u.setRenderTarget(n), _ && u.render(g, o), u.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = h, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, n = e.mapping === Zn || e.mapping === $n;
    n ? (this._cubemapMaterial === null && (this._cubemapMaterial = _l()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ml());
    const s = n ? this._cubemapMaterial : this._equirectMaterial, a = new wi(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    ss(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(a, aa);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = !1;
    for (let n = 1; n < this._lodPlanes.length; n++) {
      const s = Math.sqrt(this._sigmas[n] * this._sigmas[n] - this._sigmas[n - 1] * this._sigmas[n - 1]), a = fl[(n - 1) % fl.length];
      this._blur(e, n - 1, n, s, a);
    }
    t.autoClear = i;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, i, n, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      i,
      n,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      i,
      i,
      n,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, i, n, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new wi(this._lodPlanes[n], c), f = c.uniforms, m = this._sizeLods[i] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * ln - 1), _ = s / g, p = isFinite(s) ? 1 + Math.floor(u * _) : ln;
    p > ln && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ln}`);
    const d = [];
    let S = 0;
    for (let A = 0; A < ln; ++A) {
      const P = A / _, x = Math.exp(-P * P / 2);
      d.push(x), A === 0 ? S += x : A < p && (S += 2 * x);
    }
    for (let A = 0; A < d.length; A++)
      d[A] = d[A] / S;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = d, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: v } = this;
    f.dTheta.value = g, f.mipInt.value = v - i;
    const y = this._sizeLods[n], E = 3 * y * (n > v - kn ? n - v + kn : 0), R = 4 * (this._cubeSize - y);
    ss(t, E, R, 3 * y, 2 * y), l.setRenderTarget(t), l.render(h, aa);
  }
}
function jp(r) {
  const e = [], t = [], i = [];
  let n = r;
  const s = r - kn + 1 + ul.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, n);
    t.push(o);
    let l = 1 / o;
    a > r - kn ? l = ul[a - r + kn - 1] : a === 0 && (l = 0), i.push(l);
    const c = 1 / (o - 2), u = -c, h = 1 + c, f = [u, u, h, u, h, h, u, u, h, h, u, h], m = 6, g = 6, _ = 3, p = 2, d = 1, S = new Float32Array(_ * g * m), v = new Float32Array(p * g * m), y = new Float32Array(d * g * m);
    for (let R = 0; R < m; R++) {
      const A = R % 3 * 2 / 3 - 1, P = R > 2 ? 0 : -1, x = [
        A,
        P,
        0,
        A + 2 / 3,
        P,
        0,
        A + 2 / 3,
        P + 1,
        0,
        A,
        P,
        0,
        A + 2 / 3,
        P + 1,
        0,
        A,
        P + 1,
        0
      ];
      S.set(x, _ * g * R), v.set(f, p * g * R);
      const b = [R, R, R, R, R, R];
      y.set(b, d * g * R);
    }
    const E = new Sn();
    E.setAttribute("position", new hi(S, _)), E.setAttribute("uv", new hi(v, p)), E.setAttribute("faceIndex", new hi(y, d)), e.push(E), n > kn && n--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function pl(r, e, t) {
  const i = new xn(r, e, t);
  return i.texture.mapping = Es, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function ss(r, e, t, i, n) {
  r.viewport.set(e, t, i, n), r.scissor.set(e, t, i, n);
}
function Zp(r, e, t) {
  const i = new Float32Array(ln), n = new z(0, 1, 0);
  return new qi({
    name: "SphericalGaussianBlur",
    defines: {
      n: ln,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: n }
    },
    vertexShader: Wa(),
    fragmentShader: (
      /* glsl */
      `

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

			}
		`
    ),
    blending: Gi,
    depthTest: !1,
    depthWrite: !1
  });
}
function ml() {
  return new qi({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Wa(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Gi,
    depthTest: !1,
    depthWrite: !1
  });
}
function _l() {
  return new qi({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Wa(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Gi,
    depthTest: !1,
    depthWrite: !1
  });
}
function Wa() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

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
	`
  );
}
function $p(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Ea || l === ya, u = l === Zn || l === $n;
      if (c || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return t === null && (t = new dl(r)), h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), e.set(o, h), h.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const h = o.image;
            if (c && h && h.height > 0 || u && h && n(h)) {
              t === null && (t = new dl(r));
              const f = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, f), o.addEventListener("dispose", s), f.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function n(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: i,
    dispose: a
  };
}
function Jp(r) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0)
      return e[i];
    let n;
    switch (i) {
      case "WEBGL_depth_texture":
        n = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        n = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        n = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        n = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        n = r.getExtension(i);
    }
    return e[i] = n, n;
  }
  return {
    has: function(i) {
      return t(i) !== null;
    },
    init: function(i) {
      i.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(i) {
      const n = t(i);
      return n === null && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), n;
    }
  };
}
function Qp(r, e, t, i) {
  const n = {}, s = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const _ = f.morphAttributes[g];
      for (let p = 0, d = _.length; p < d; p++)
        e.remove(_[p]);
    }
    f.removeEventListener("dispose", a), delete n[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, f) {
    return n[f.id] === !0 || (f.addEventListener("dispose", a), n[f.id] = !0, t.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const g in f)
      e.update(f[g], r.ARRAY_BUFFER);
    const m = h.morphAttributes;
    for (const g in m) {
      const _ = m[g];
      for (let p = 0, d = _.length; p < d; p++)
        e.update(_[p], r.ARRAY_BUFFER);
    }
  }
  function c(h) {
    const f = [], m = h.index, g = h.attributes.position;
    let _ = 0;
    if (m !== null) {
      const S = m.array;
      _ = m.version;
      for (let v = 0, y = S.length; v < y; v += 3) {
        const E = S[v + 0], R = S[v + 1], A = S[v + 2];
        f.push(E, R, R, A, A, E);
      }
    } else if (g !== void 0) {
      const S = g.array;
      _ = g.version;
      for (let v = 0, y = S.length / 3 - 1; v < y; v += 3) {
        const E = v + 0, R = v + 1, A = v + 2;
        f.push(E, R, R, A, A, E);
      }
    } else
      return;
    const p = new (_c(f) ? mc : pc)(f, 1);
    p.version = _;
    const d = s.get(h);
    d && e.remove(d), s.set(h, p);
  }
  function u(h) {
    const f = s.get(h);
    if (f) {
      const m = h.index;
      m !== null && f.version < m.version && c(h);
    } else
      c(h);
    return s.get(h);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function em(r, e, t, i) {
  const n = i.isWebGL2;
  let s;
  function a(f) {
    s = f;
  }
  let o, l;
  function c(f) {
    o = f.type, l = f.bytesPerElement;
  }
  function u(f, m) {
    r.drawElements(s, m, o, f * l), t.update(m, s, 1);
  }
  function h(f, m, g) {
    if (g === 0)
      return;
    let _, p;
    if (n)
      _ = r, p = "drawElementsInstanced";
    else if (_ = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", _ === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    _[p](s, m, o, f * l, g), t.update(m, s, g);
  }
  this.setMode = a, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function tm(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function n() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: n,
    update: i
  };
}
class Tc extends bt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: i, depth: n }, this.magFilter = Tt, this.minFilter = Tt, this.wrapR = ri, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
function im(r, e) {
  return r[0] - e[0];
}
function nm(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function rm(r, e, t) {
  const i = {}, n = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new ft(), o = [];
  for (let c = 0; c < 8; c++)
    o[c] = [c, 0];
  function l(c, u, h) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let _ = s.get(u);
      if (_ === void 0 || _.count !== g) {
        let O = function() {
          $.dispose(), s.delete(u), u.removeEventListener("dispose", O);
        };
        _ !== void 0 && _.texture.dispose();
        const S = u.morphAttributes.position !== void 0, v = u.morphAttributes.normal !== void 0, y = u.morphAttributes.color !== void 0, E = u.morphAttributes.position || [], R = u.morphAttributes.normal || [], A = u.morphAttributes.color || [];
        let P = 0;
        S === !0 && (P = 1), v === !0 && (P = 2), y === !0 && (P = 3);
        let x = u.attributes.position.count * P, b = 1;
        x > e.maxTextureSize && (b = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
        const V = new Float32Array(x * b * 4 * g), $ = new Tc(V, x, b, g);
        $.type = Ni, $.needsUpdate = !0;
        const D = P * 4;
        for (let N = 0; N < g; N++) {
          const K = E[N], G = R[N], q = A[N], j = x * b * 4 * N;
          for (let Z = 0; Z < K.count; Z++) {
            const F = Z * D;
            S === !0 && (a.fromBufferAttribute(K, Z), V[j + F + 0] = a.x, V[j + F + 1] = a.y, V[j + F + 2] = a.z, V[j + F + 3] = 0), v === !0 && (a.fromBufferAttribute(G, Z), V[j + F + 4] = a.x, V[j + F + 5] = a.y, V[j + F + 6] = a.z, V[j + F + 7] = 0), y === !0 && (a.fromBufferAttribute(q, Z), V[j + F + 8] = a.x, V[j + F + 9] = a.y, V[j + F + 10] = a.z, V[j + F + 11] = q.itemSize === 4 ? a.w : 1);
          }
        }
        _ = {
          count: g,
          texture: $,
          size: new Oe(x, b)
        }, s.set(u, _), u.addEventListener("dispose", O);
      }
      let p = 0;
      for (let S = 0; S < f.length; S++)
        p += f[S];
      const d = u.morphTargetsRelative ? 1 : 1 - p;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", d), h.getUniforms().setValue(r, "morphTargetInfluences", f), h.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), h.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const m = f === void 0 ? 0 : f.length;
      let g = i[u.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let v = 0; v < m; v++)
          g[v] = [v, 0];
        i[u.id] = g;
      }
      for (let v = 0; v < m; v++) {
        const y = g[v];
        y[0] = v, y[1] = f[v];
      }
      g.sort(nm);
      for (let v = 0; v < 8; v++)
        v < m && g[v][1] ? (o[v][0] = g[v][0], o[v][1] = g[v][1]) : (o[v][0] = Number.MAX_SAFE_INTEGER, o[v][1] = 0);
      o.sort(im);
      const _ = u.morphAttributes.position, p = u.morphAttributes.normal;
      let d = 0;
      for (let v = 0; v < 8; v++) {
        const y = o[v], E = y[0], R = y[1];
        E !== Number.MAX_SAFE_INTEGER && R ? (_ && u.getAttribute("morphTarget" + v) !== _[E] && u.setAttribute("morphTarget" + v, _[E]), p && u.getAttribute("morphNormal" + v) !== p[E] && u.setAttribute("morphNormal" + v, p[E]), n[v] = R, d += R) : (_ && u.hasAttribute("morphTarget" + v) === !0 && u.deleteAttribute("morphTarget" + v), p && u.hasAttribute("morphNormal" + v) === !0 && u.deleteAttribute("morphNormal" + v), n[v] = 0);
      }
      const S = u.morphTargetsRelative ? 1 : 1 - d;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", S), h.getUniforms().setValue(r, "morphTargetInfluences", n);
    }
  }
  return {
    update: l
  };
}
function sm(r, e, t, i) {
  let n = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = i.render.frame, u = l.geometry, h = e.get(l, u);
    if (n.get(h) !== c && (e.update(h), n.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), n.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), n.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      n.get(f) !== c && (f.update(), n.set(f, c));
    }
    return h;
  }
  function a() {
    n = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class am extends bt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: i, depth: n }, this.magFilter = Tt, this.minFilter = Tt, this.wrapR = ri, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const bc = /* @__PURE__ */ new bt(), Ac = /* @__PURE__ */ new Tc(), wc = /* @__PURE__ */ new am(), Rc = /* @__PURE__ */ new Ec(), gl = [], vl = [], xl = new Float32Array(16), Ml = new Float32Array(9), Sl = new Float32Array(4);
function ar(r, e, t) {
  const i = r[0];
  if (i <= 0 || i > 0)
    return r;
  const n = e * t;
  let s = gl[n];
  if (s === void 0 && (s = new Float32Array(n), gl[n] = s), e !== 0) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function at(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, i = r.length; t < i; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function ot(r, e) {
  for (let t = 0, i = e.length; t < i; t++)
    r[t] = e[t];
}
function As(r, e) {
  let t = vl[e];
  t === void 0 && (t = new Int32Array(e), vl[e] = t);
  for (let i = 0; i !== e; ++i)
    t[i] = r.allocateTextureUnit();
  return t;
}
function om(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function lm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (at(t, e))
      return;
    r.uniform2fv(this.addr, e), ot(t, e);
  }
}
function cm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (at(t, e))
      return;
    r.uniform3fv(this.addr, e), ot(t, e);
  }
}
function um(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (at(t, e))
      return;
    r.uniform4fv(this.addr, e), ot(t, e);
  }
}
function hm(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (at(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), ot(t, e);
  } else {
    if (at(t, i))
      return;
    Sl.set(i), r.uniformMatrix2fv(this.addr, !1, Sl), ot(t, i);
  }
}
function fm(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (at(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), ot(t, e);
  } else {
    if (at(t, i))
      return;
    Ml.set(i), r.uniformMatrix3fv(this.addr, !1, Ml), ot(t, i);
  }
}
function dm(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (at(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), ot(t, e);
  } else {
    if (at(t, i))
      return;
    xl.set(i), r.uniformMatrix4fv(this.addr, !1, xl), ot(t, i);
  }
}
function pm(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function mm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (at(t, e))
      return;
    r.uniform2iv(this.addr, e), ot(t, e);
  }
}
function _m(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (at(t, e))
      return;
    r.uniform3iv(this.addr, e), ot(t, e);
  }
}
function gm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (at(t, e))
      return;
    r.uniform4iv(this.addr, e), ot(t, e);
  }
}
function vm(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function xm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (at(t, e))
      return;
    r.uniform2uiv(this.addr, e), ot(t, e);
  }
}
function Mm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (at(t, e))
      return;
    r.uniform3uiv(this.addr, e), ot(t, e);
  }
}
function Sm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (at(t, e))
      return;
    r.uniform4uiv(this.addr, e), ot(t, e);
  }
}
function Em(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTexture2D(e || bc, n);
}
function ym(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTexture3D(e || wc, n);
}
function Tm(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTextureCube(e || Rc, n);
}
function bm(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTexture2DArray(e || Ac, n);
}
function Am(r) {
  switch (r) {
    case 5126:
      return om;
    case 35664:
      return lm;
    case 35665:
      return cm;
    case 35666:
      return um;
    case 35674:
      return hm;
    case 35675:
      return fm;
    case 35676:
      return dm;
    case 5124:
    case 35670:
      return pm;
    case 35667:
    case 35671:
      return mm;
    case 35668:
    case 35672:
      return _m;
    case 35669:
    case 35673:
      return gm;
    case 5125:
      return vm;
    case 36294:
      return xm;
    case 36295:
      return Mm;
    case 36296:
      return Sm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Em;
    case 35679:
    case 36299:
    case 36307:
      return ym;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Tm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return bm;
  }
}
function wm(r, e) {
  r.uniform1fv(this.addr, e);
}
function Rm(r, e) {
  const t = ar(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Cm(r, e) {
  const t = ar(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function Pm(r, e) {
  const t = ar(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Lm(r, e) {
  const t = ar(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Dm(r, e) {
  const t = ar(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function Um(r, e) {
  const t = ar(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Im(r, e) {
  r.uniform1iv(this.addr, e);
}
function Fm(r, e) {
  r.uniform2iv(this.addr, e);
}
function Nm(r, e) {
  r.uniform3iv(this.addr, e);
}
function Om(r, e) {
  r.uniform4iv(this.addr, e);
}
function Bm(r, e) {
  r.uniform1uiv(this.addr, e);
}
function zm(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Gm(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Hm(r, e) {
  r.uniform4uiv(this.addr, e);
}
function km(r, e, t) {
  const i = this.cache, n = e.length, s = As(t, n);
  at(i, s) || (r.uniform1iv(this.addr, s), ot(i, s));
  for (let a = 0; a !== n; ++a)
    t.setTexture2D(e[a] || bc, s[a]);
}
function Vm(r, e, t) {
  const i = this.cache, n = e.length, s = As(t, n);
  at(i, s) || (r.uniform1iv(this.addr, s), ot(i, s));
  for (let a = 0; a !== n; ++a)
    t.setTexture3D(e[a] || wc, s[a]);
}
function Wm(r, e, t) {
  const i = this.cache, n = e.length, s = As(t, n);
  at(i, s) || (r.uniform1iv(this.addr, s), ot(i, s));
  for (let a = 0; a !== n; ++a)
    t.setTextureCube(e[a] || Rc, s[a]);
}
function Xm(r, e, t) {
  const i = this.cache, n = e.length, s = As(t, n);
  at(i, s) || (r.uniform1iv(this.addr, s), ot(i, s));
  for (let a = 0; a !== n; ++a)
    t.setTexture2DArray(e[a] || Ac, s[a]);
}
function qm(r) {
  switch (r) {
    case 5126:
      return wm;
    case 35664:
      return Rm;
    case 35665:
      return Cm;
    case 35666:
      return Pm;
    case 35674:
      return Lm;
    case 35675:
      return Dm;
    case 35676:
      return Um;
    case 5124:
    case 35670:
      return Im;
    case 35667:
    case 35671:
      return Fm;
    case 35668:
    case 35672:
      return Nm;
    case 35669:
    case 35673:
      return Om;
    case 5125:
      return Bm;
    case 36294:
      return zm;
    case 36295:
      return Gm;
    case 36296:
      return Hm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return km;
    case 35679:
    case 36299:
    case 36307:
      return Vm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Wm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Xm;
  }
}
class Ym {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.setValue = Am(t.type);
  }
}
class Km {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.size = t.size, this.setValue = qm(t.type);
  }
}
class jm {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const n = this.seq;
    for (let s = 0, a = n.length; s !== a; ++s) {
      const o = n[s];
      o.setValue(e, t[o.id], i);
    }
  }
}
const la = /(\w+)(\])?(\[|\.)?/g;
function El(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Zm(r, e, t) {
  const i = r.name, n = i.length;
  for (la.lastIndex = 0; ; ) {
    const s = la.exec(i), a = la.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === n) {
      El(t, c === void 0 ? new Ym(o, r, e) : new Km(o, r, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new jm(o), El(t, h)), t = h;
    }
  }
}
class cs {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let n = 0; n < i; ++n) {
      const s = e.getActiveUniform(t, n), a = e.getUniformLocation(t, s.name);
      Zm(s, a, this);
    }
  }
  setValue(e, t, i, n) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, n);
  }
  setOptional(e, t, i) {
    const n = t[i];
    n !== void 0 && this.setValue(e, i, n);
  }
  static upload(e, t, i, n) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = i[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, n);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let n = 0, s = e.length; n !== s; ++n) {
      const a = e[n];
      a.id in t && i.push(a);
    }
    return i;
  }
}
function yl(r, e, t) {
  const i = r.createShader(e);
  return r.shaderSource(i, t), r.compileShader(i), i;
}
let $m = 0;
function Jm(r, e) {
  const t = r.split(`
`), i = [], n = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = n; a < s; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
function Qm(r) {
  switch (r) {
    case di:
      return ["Linear", "( value )"];
    case Re:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), ["Linear", "( value )"];
  }
}
function Tl(r, e, t) {
  const i = r.getShaderParameter(e, r.COMPILE_STATUS), n = r.getShaderInfoLog(e).trim();
  if (i && n === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(n);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + n + `

` + Jm(r.getShaderSource(e), a);
  } else
    return n;
}
function e_(r, e) {
  const t = Qm(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function t_(r, e) {
  let t;
  switch (e) {
    case oh:
      t = "Linear";
      break;
    case lh:
      t = "Reinhard";
      break;
    case ch:
      t = "OptimizedCineon";
      break;
    case uh:
      t = "ACESFilmic";
      break;
    case hh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function i_(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(pr).join(`
`);
}
function n_(r) {
  const e = [];
  for (const t in r) {
    const i = r[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function r_(r, e) {
  const t = {}, i = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let n = 0; n < i; n++) {
    const s = r.getActiveAttrib(e, n), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function pr(r) {
  return r !== "";
}
function bl(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Al(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const s_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Aa(r) {
  return r.replace(s_, o_);
}
const a_ = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function o_(r, e) {
  let t = we[e];
  if (t === void 0) {
    const i = a_.get(e);
    if (i !== void 0)
      t = we[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Aa(t);
}
const l_ = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function wl(r) {
  return r.replace(l_, c_);
}
function c_(r, e, t, i) {
  let n = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    n += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return n;
}
function Rl(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function u_(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === $l ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === zu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Ei && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function h_(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Zn:
      case $n:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Es:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function f_(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case $n:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function d_(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case ec:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case sh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ah:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function p_(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: i, maxMip: t };
}
function m_(r, e, t, i) {
  const n = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = u_(t), c = h_(t), u = f_(t), h = d_(t), f = p_(t), m = t.isWebGL2 ? "" : i_(t), g = n_(s), _ = n.createProgram();
  let p, d, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(pr).join(`
`), p.length > 0 && (p += `
`), d = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(pr).join(`
`), d.length > 0 && (d += `
`)) : (p = [
    Rl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(pr).join(`
`), d = [
    m,
    Rl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Hi ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Hi ? we.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Hi ? t_("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    we.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    e_("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(pr).join(`
`)), a = Aa(a), a = bl(a, t), a = Al(a, t), o = Aa(o), o = bl(o, t), o = Al(o, t), a = wl(a), o = wl(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, d = [
    "#define varying in",
    t.glslVersion === jo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === jo ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + d);
  const v = S + p + a, y = S + d + o, E = yl(n, n.VERTEX_SHADER, v), R = yl(n, n.FRAGMENT_SHADER, y);
  if (n.attachShader(_, E), n.attachShader(_, R), t.index0AttributeName !== void 0 ? n.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && n.bindAttribLocation(_, 0, "position"), n.linkProgram(_), r.debug.checkShaderErrors) {
    const x = n.getProgramInfoLog(_).trim(), b = n.getShaderInfoLog(E).trim(), V = n.getShaderInfoLog(R).trim();
    let $ = !0, D = !0;
    if (n.getProgramParameter(_, n.LINK_STATUS) === !1)
      if ($ = !1, typeof r.debug.onShaderError == "function")
        r.debug.onShaderError(n, _, E, R);
      else {
        const O = Tl(n, E, "vertex"), N = Tl(n, R, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + n.getError() + " - VALIDATE_STATUS " + n.getProgramParameter(_, n.VALIDATE_STATUS) + `

Program Info Log: ` + x + `
` + O + `
` + N
        );
      }
    else
      x !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", x) : (b === "" || V === "") && (D = !1);
    D && (this.diagnostics = {
      runnable: $,
      programLog: x,
      vertexShader: {
        log: b,
        prefix: p
      },
      fragmentShader: {
        log: V,
        prefix: d
      }
    });
  }
  n.deleteShader(E), n.deleteShader(R);
  let A;
  this.getUniforms = function() {
    return A === void 0 && (A = new cs(n, _)), A;
  };
  let P;
  return this.getAttributes = function() {
    return P === void 0 && (P = r_(n, _)), P;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), n.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = $m++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = E, this.fragmentShader = R, this;
}
let __ = 0;
class g_ {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, n = this._getShaderStage(t), s = this._getShaderStage(i), a = this._getShaderCacheForMaterial(e);
    return a.has(n) === !1 && (a.add(n), n.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new v_(e), t.set(e, i)), i;
  }
}
class v_ {
  constructor(e) {
    this.id = __++, this.code = e, this.usedTimes = 0;
  }
}
function x_(r, e, t, i, n, s, a) {
  const o = new uc(), l = new g_(), c = [], u = n.isWebGL2, h = n.logarithmicDepthBuffer, f = n.vertexTextures;
  let m = n.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(x) {
    return x === 0 ? "uv" : `uv${x}`;
  }
  function p(x, b, V, $, D) {
    const O = $.fog, N = D.geometry, K = x.isMeshStandardMaterial ? $.environment : null, G = (x.isMeshStandardMaterial ? t : e).get(x.envMap || K), q = G && G.mapping === Es ? G.image.height : null, j = g[x.type];
    x.precision !== null && (m = n.getMaxPrecision(x.precision), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
    const Z = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, F = Z !== void 0 ? Z.length : 0;
    let Y = 0;
    N.morphAttributes.position !== void 0 && (Y = 1), N.morphAttributes.normal !== void 0 && (Y = 2), N.morphAttributes.color !== void 0 && (Y = 3);
    let ae, ne, se, ge;
    if (j) {
      const We = li[j];
      ae = We.vertexShader, ne = We.fragmentShader;
    } else
      ae = x.vertexShader, ne = x.fragmentShader, l.update(x), se = l.getVertexShaderID(x), ge = l.getFragmentShaderID(x);
    const Te = r.getRenderTarget(), ve = D.isInstancedMesh === !0, ze = !!x.map, At = !!x.matcap, Ce = !!G, I = !!x.aoMap, pt = !!x.lightMap, xe = !!x.bumpMap, be = !!x.normalMap, ye = !!x.displacementMap, qe = !!x.emissiveMap, Fe = !!x.metalnessMap, Pe = !!x.roughnessMap, Ge = x.anisotropy > 0, ut = x.clearcoat > 0, mt = x.iridescence > 0, w = x.sheen > 0, M = x.transmission > 0, B = Ge && !!x.anisotropyMap, Q = ut && !!x.clearcoatMap, J = ut && !!x.clearcoatNormalMap, ee = ut && !!x.clearcoatRoughnessMap, fe = mt && !!x.iridescenceMap, te = mt && !!x.iridescenceThicknessMap, k = w && !!x.sheenColorMap, me = w && !!x.sheenRoughnessMap, de = !!x.specularMap, pe = !!x.specularColorMap, ue = !!x.specularIntensityMap, he = M && !!x.transmissionMap, De = M && !!x.thicknessMap, Ve = !!x.gradientMap, C = !!x.alphaMap, oe = x.alphaTest > 0, H = !!x.alphaHash, ie = !!x.extensions, le = !!N.attributes.uv1, Be = !!N.attributes.uv2, Ye = !!N.attributes.uv3;
    let tt = Hi;
    return x.toneMapped && (Te === null || Te.isXRRenderTarget === !0) && (tt = r.toneMapping), {
      isWebGL2: u,
      shaderID: j,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: ae,
      fragmentShader: ne,
      defines: x.defines,
      customVertexShaderID: se,
      customFragmentShaderID: ge,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: ve,
      instancingColor: ve && D.instanceColor !== null,
      supportsVertexTextures: f,
      outputColorSpace: Te === null ? r.outputColorSpace : Te.isXRRenderTarget === !0 ? Te.texture.colorSpace : di,
      map: ze,
      matcap: At,
      envMap: Ce,
      envMapMode: Ce && G.mapping,
      envMapCubeUVHeight: q,
      aoMap: I,
      lightMap: pt,
      bumpMap: xe,
      normalMap: be,
      displacementMap: f && ye,
      emissiveMap: qe,
      normalMapObjectSpace: be && x.normalMapType === bh,
      normalMapTangentSpace: be && x.normalMapType === Th,
      metalnessMap: Fe,
      roughnessMap: Pe,
      anisotropy: Ge,
      anisotropyMap: B,
      clearcoat: ut,
      clearcoatMap: Q,
      clearcoatNormalMap: J,
      clearcoatRoughnessMap: ee,
      iridescence: mt,
      iridescenceMap: fe,
      iridescenceThicknessMap: te,
      sheen: w,
      sheenColorMap: k,
      sheenRoughnessMap: me,
      specularMap: de,
      specularColorMap: pe,
      specularIntensityMap: ue,
      transmission: M,
      transmissionMap: he,
      thicknessMap: De,
      gradientMap: Ve,
      opaque: x.transparent === !1 && x.blending === Xn,
      alphaMap: C,
      alphaTest: oe,
      alphaHash: H,
      combine: x.combine,
      //
      mapUv: ze && _(x.map.channel),
      aoMapUv: I && _(x.aoMap.channel),
      lightMapUv: pt && _(x.lightMap.channel),
      bumpMapUv: xe && _(x.bumpMap.channel),
      normalMapUv: be && _(x.normalMap.channel),
      displacementMapUv: ye && _(x.displacementMap.channel),
      emissiveMapUv: qe && _(x.emissiveMap.channel),
      metalnessMapUv: Fe && _(x.metalnessMap.channel),
      roughnessMapUv: Pe && _(x.roughnessMap.channel),
      anisotropyMapUv: B && _(x.anisotropyMap.channel),
      clearcoatMapUv: Q && _(x.clearcoatMap.channel),
      clearcoatNormalMapUv: J && _(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ee && _(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: fe && _(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: te && _(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: k && _(x.sheenColorMap.channel),
      sheenRoughnessMapUv: me && _(x.sheenRoughnessMap.channel),
      specularMapUv: de && _(x.specularMap.channel),
      specularColorMapUv: pe && _(x.specularColorMap.channel),
      specularIntensityMapUv: ue && _(x.specularIntensityMap.channel),
      transmissionMapUv: he && _(x.transmissionMap.channel),
      thicknessMapUv: De && _(x.thicknessMap.channel),
      alphaMapUv: C && _(x.alphaMap.channel),
      //
      vertexTangents: !!N.attributes.tangent && (be || Ge),
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
      vertexUv1s: le,
      vertexUv2s: Be,
      vertexUv3s: Ye,
      pointsUvs: D.isPoints === !0 && !!N.attributes.uv && (ze || C),
      fog: !!O,
      useFog: x.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: x.flatShading === !0,
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: D.isSkinnedMesh === !0,
      morphTargets: N.morphAttributes.position !== void 0,
      morphNormals: N.morphAttributes.normal !== void 0,
      morphColors: N.morphAttributes.color !== void 0,
      morphTargetsCount: F,
      morphTextureStride: Y,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: r.shadowMap.enabled && V.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: tt,
      useLegacyLights: r._useLegacyLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === bi,
      flipSided: x.side === Lt,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: ie && x.extensions.derivatives === !0,
      extensionFragDepth: ie && x.extensions.fragDepth === !0,
      extensionDrawBuffers: ie && x.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ie && x.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || i.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function d(x) {
    const b = [];
    if (x.shaderID ? b.push(x.shaderID) : (b.push(x.customVertexShaderID), b.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const V in x.defines)
        b.push(V), b.push(x.defines[V]);
    return x.isRawShaderMaterial === !1 && (S(b, x), v(b, x), b.push(r.outputColorSpace)), b.push(x.customProgramCacheKey), b.join();
  }
  function S(x, b) {
    x.push(b.precision), x.push(b.outputColorSpace), x.push(b.envMapMode), x.push(b.envMapCubeUVHeight), x.push(b.mapUv), x.push(b.alphaMapUv), x.push(b.lightMapUv), x.push(b.aoMapUv), x.push(b.bumpMapUv), x.push(b.normalMapUv), x.push(b.displacementMapUv), x.push(b.emissiveMapUv), x.push(b.metalnessMapUv), x.push(b.roughnessMapUv), x.push(b.anisotropyMapUv), x.push(b.clearcoatMapUv), x.push(b.clearcoatNormalMapUv), x.push(b.clearcoatRoughnessMapUv), x.push(b.iridescenceMapUv), x.push(b.iridescenceThicknessMapUv), x.push(b.sheenColorMapUv), x.push(b.sheenRoughnessMapUv), x.push(b.specularMapUv), x.push(b.specularColorMapUv), x.push(b.specularIntensityMapUv), x.push(b.transmissionMapUv), x.push(b.thicknessMapUv), x.push(b.combine), x.push(b.fogExp2), x.push(b.sizeAttenuation), x.push(b.morphTargetsCount), x.push(b.morphAttributeCount), x.push(b.numDirLights), x.push(b.numPointLights), x.push(b.numSpotLights), x.push(b.numSpotLightMaps), x.push(b.numHemiLights), x.push(b.numRectAreaLights), x.push(b.numDirLightShadows), x.push(b.numPointLightShadows), x.push(b.numSpotLightShadows), x.push(b.numSpotLightShadowsWithMaps), x.push(b.shadowMapType), x.push(b.toneMapping), x.push(b.numClippingPlanes), x.push(b.numClipIntersection), x.push(b.depthPacking);
  }
  function v(x, b) {
    o.disableAll(), b.isWebGL2 && o.enable(0), b.supportsVertexTextures && o.enable(1), b.instancing && o.enable(2), b.instancingColor && o.enable(3), b.matcap && o.enable(4), b.envMap && o.enable(5), b.normalMapObjectSpace && o.enable(6), b.normalMapTangentSpace && o.enable(7), b.clearcoat && o.enable(8), b.iridescence && o.enable(9), b.alphaTest && o.enable(10), b.vertexColors && o.enable(11), b.vertexAlphas && o.enable(12), b.vertexUv1s && o.enable(13), b.vertexUv2s && o.enable(14), b.vertexUv3s && o.enable(15), b.vertexTangents && o.enable(16), b.anisotropy && o.enable(17), x.push(o.mask), o.disableAll(), b.fog && o.enable(0), b.useFog && o.enable(1), b.flatShading && o.enable(2), b.logarithmicDepthBuffer && o.enable(3), b.skinning && o.enable(4), b.morphTargets && o.enable(5), b.morphNormals && o.enable(6), b.morphColors && o.enable(7), b.premultipliedAlpha && o.enable(8), b.shadowMapEnabled && o.enable(9), b.useLegacyLights && o.enable(10), b.doubleSided && o.enable(11), b.flipSided && o.enable(12), b.useDepthPacking && o.enable(13), b.dithering && o.enable(14), b.transmission && o.enable(15), b.sheen && o.enable(16), b.opaque && o.enable(17), b.pointsUvs && o.enable(18), x.push(o.mask);
  }
  function y(x) {
    const b = g[x.type];
    let V;
    if (b) {
      const $ = li[b];
      V = tf.clone($.uniforms);
    } else
      V = x.uniforms;
    return V;
  }
  function E(x, b) {
    let V;
    for (let $ = 0, D = c.length; $ < D; $++) {
      const O = c[$];
      if (O.cacheKey === b) {
        V = O, ++V.usedTimes;
        break;
      }
    }
    return V === void 0 && (V = new m_(r, b, x, s), c.push(V)), V;
  }
  function R(x) {
    if (--x.usedTimes === 0) {
      const b = c.indexOf(x);
      c[b] = c[c.length - 1], c.pop(), x.destroy();
    }
  }
  function A(x) {
    l.remove(x);
  }
  function P() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: d,
    getUniforms: y,
    acquireProgram: E,
    releaseProgram: R,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: P
  };
}
function M_() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function i(s, a, o) {
    r.get(s)[a] = o;
  }
  function n() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: i,
    dispose: n
  };
}
function S_(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Cl(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Pl() {
  const r = [];
  let e = 0;
  const t = [], i = [], n = [];
  function s() {
    e = 0, t.length = 0, i.length = 0, n.length = 0;
  }
  function a(h, f, m, g, _, p) {
    let d = r[e];
    return d === void 0 ? (d = {
      id: h.id,
      object: h,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: _,
      group: p
    }, r[e] = d) : (d.id = h.id, d.object = h, d.geometry = f, d.material = m, d.groupOrder = g, d.renderOrder = h.renderOrder, d.z = _, d.group = p), e++, d;
  }
  function o(h, f, m, g, _, p) {
    const d = a(h, f, m, g, _, p);
    m.transmission > 0 ? i.push(d) : m.transparent === !0 ? n.push(d) : t.push(d);
  }
  function l(h, f, m, g, _, p) {
    const d = a(h, f, m, g, _, p);
    m.transmission > 0 ? i.unshift(d) : m.transparent === !0 ? n.unshift(d) : t.unshift(d);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || S_), i.length > 1 && i.sort(f || Cl), n.length > 1 && n.sort(f || Cl);
  }
  function u() {
    for (let h = e, f = r.length; h < f; h++) {
      const m = r[h];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: n,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function E_() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(i, n) {
    const s = r.get(i);
    let a;
    return s === void 0 ? (a = new Pl(), r.set(i, [a])) : n >= s.length ? (a = new Pl(), s.push(a)) : a = s[n], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function y_() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new z(),
            color: new Xe()
          };
          break;
        case "SpotLight":
          t = {
            position: new z(),
            direction: new z(),
            color: new Xe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new z(),
            color: new Xe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new z(),
            skyColor: new Xe(),
            groundColor: new Xe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Xe(),
            position: new z(),
            halfWidth: new z(),
            halfHeight: new z()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function T_() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let b_ = 0;
function A_(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function w_(r, e) {
  const t = new y_(), i = T_(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    n.probe.push(new z());
  const s = new z(), a = new dt(), o = new dt();
  function l(u, h) {
    let f = 0, m = 0, g = 0;
    for (let V = 0; V < 9; V++)
      n.probe[V].set(0, 0, 0);
    let _ = 0, p = 0, d = 0, S = 0, v = 0, y = 0, E = 0, R = 0, A = 0, P = 0;
    u.sort(A_);
    const x = h === !0 ? Math.PI : 1;
    for (let V = 0, $ = u.length; V < $; V++) {
      const D = u[V], O = D.color, N = D.intensity, K = D.distance, G = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        f += O.r * N * x, m += O.g * N * x, g += O.b * N * x;
      else if (D.isLightProbe)
        for (let q = 0; q < 9; q++)
          n.probe[q].addScaledVector(D.sh.coefficients[q], N);
      else if (D.isDirectionalLight) {
        const q = t.get(D);
        if (q.color.copy(D.color).multiplyScalar(D.intensity * x), D.castShadow) {
          const j = D.shadow, Z = i.get(D);
          Z.shadowBias = j.bias, Z.shadowNormalBias = j.normalBias, Z.shadowRadius = j.radius, Z.shadowMapSize = j.mapSize, n.directionalShadow[_] = Z, n.directionalShadowMap[_] = G, n.directionalShadowMatrix[_] = D.shadow.matrix, y++;
        }
        n.directional[_] = q, _++;
      } else if (D.isSpotLight) {
        const q = t.get(D);
        q.position.setFromMatrixPosition(D.matrixWorld), q.color.copy(O).multiplyScalar(N * x), q.distance = K, q.coneCos = Math.cos(D.angle), q.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), q.decay = D.decay, n.spot[d] = q;
        const j = D.shadow;
        if (D.map && (n.spotLightMap[A] = D.map, A++, j.updateMatrices(D), D.castShadow && P++), n.spotLightMatrix[d] = j.matrix, D.castShadow) {
          const Z = i.get(D);
          Z.shadowBias = j.bias, Z.shadowNormalBias = j.normalBias, Z.shadowRadius = j.radius, Z.shadowMapSize = j.mapSize, n.spotShadow[d] = Z, n.spotShadowMap[d] = G, R++;
        }
        d++;
      } else if (D.isRectAreaLight) {
        const q = t.get(D);
        q.color.copy(O).multiplyScalar(N), q.halfWidth.set(D.width * 0.5, 0, 0), q.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[S] = q, S++;
      } else if (D.isPointLight) {
        const q = t.get(D);
        if (q.color.copy(D.color).multiplyScalar(D.intensity * x), q.distance = D.distance, q.decay = D.decay, D.castShadow) {
          const j = D.shadow, Z = i.get(D);
          Z.shadowBias = j.bias, Z.shadowNormalBias = j.normalBias, Z.shadowRadius = j.radius, Z.shadowMapSize = j.mapSize, Z.shadowCameraNear = j.camera.near, Z.shadowCameraFar = j.camera.far, n.pointShadow[p] = Z, n.pointShadowMap[p] = G, n.pointShadowMatrix[p] = D.shadow.matrix, E++;
        }
        n.point[p] = q, p++;
      } else if (D.isHemisphereLight) {
        const q = t.get(D);
        q.skyColor.copy(D.color).multiplyScalar(N * x), q.groundColor.copy(D.groundColor).multiplyScalar(N * x), n.hemi[v] = q, v++;
      }
    }
    S > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = re.LTC_FLOAT_1, n.rectAreaLTC2 = re.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (n.rectAreaLTC1 = re.LTC_HALF_1, n.rectAreaLTC2 = re.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), n.ambient[0] = f, n.ambient[1] = m, n.ambient[2] = g;
    const b = n.hash;
    (b.directionalLength !== _ || b.pointLength !== p || b.spotLength !== d || b.rectAreaLength !== S || b.hemiLength !== v || b.numDirectionalShadows !== y || b.numPointShadows !== E || b.numSpotShadows !== R || b.numSpotMaps !== A) && (n.directional.length = _, n.spot.length = d, n.rectArea.length = S, n.point.length = p, n.hemi.length = v, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = R, n.spotShadowMap.length = R, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = R + A - P, n.spotLightMap.length = A, n.numSpotLightShadowsWithMaps = P, b.directionalLength = _, b.pointLength = p, b.spotLength = d, b.rectAreaLength = S, b.hemiLength = v, b.numDirectionalShadows = y, b.numPointShadows = E, b.numSpotShadows = R, b.numSpotMaps = A, n.version = b_++);
  }
  function c(u, h) {
    let f = 0, m = 0, g = 0, _ = 0, p = 0;
    const d = h.matrixWorldInverse;
    for (let S = 0, v = u.length; S < v; S++) {
      const y = u[S];
      if (y.isDirectionalLight) {
        const E = n.directional[f];
        E.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(d), f++;
      } else if (y.isSpotLight) {
        const E = n.spot[g];
        E.position.setFromMatrixPosition(y.matrixWorld), E.position.applyMatrix4(d), E.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(d), g++;
      } else if (y.isRectAreaLight) {
        const E = n.rectArea[_];
        E.position.setFromMatrixPosition(y.matrixWorld), E.position.applyMatrix4(d), o.identity(), a.copy(y.matrixWorld), a.premultiply(d), o.extractRotation(a), E.halfWidth.set(y.width * 0.5, 0, 0), E.halfHeight.set(0, y.height * 0.5, 0), E.halfWidth.applyMatrix4(o), E.halfHeight.applyMatrix4(o), _++;
      } else if (y.isPointLight) {
        const E = n.point[m];
        E.position.setFromMatrixPosition(y.matrixWorld), E.position.applyMatrix4(d), m++;
      } else if (y.isHemisphereLight) {
        const E = n.hemi[p];
        E.direction.setFromMatrixPosition(y.matrixWorld), E.direction.transformDirection(d), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: n
  };
}
function Ll(r, e) {
  const t = new w_(r, e), i = [], n = [];
  function s() {
    i.length = 0, n.length = 0;
  }
  function a(h) {
    i.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function l(h) {
    t.setup(i, h);
  }
  function c(h) {
    t.setupView(i, h);
  }
  return {
    init: s,
    state: {
      lightsArray: i,
      shadowsArray: n,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o
  };
}
function R_(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function i(s, a = 0) {
    const o = t.get(s);
    let l;
    return o === void 0 ? (l = new Ll(r, e), t.set(s, [l])) : a >= o.length ? (l = new Ll(r, e), o.push(l)) : l = o[a], l;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: n
  };
}
class C_ extends bs {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Eh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class P_ extends bs {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const L_ = (
  /* glsl */
  `
void main() {

	gl_Position = vec4( position, 1.0 );

}
`
), D_ = (
  /* glsl */
  `
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

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
`
);
function U_(r, e, t) {
  let i = new fc();
  const n = new Oe(), s = new Oe(), a = new ft(), o = new C_({ depthPacking: yh }), l = new P_(), c = {}, u = t.maxTextureSize, h = { [Xi]: Lt, [Lt]: Xi, [bi]: bi }, f = new qi({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Oe() },
      radius: { value: 4 }
    },
    vertexShader: L_,
    fragmentShader: D_
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Sn();
  g.setAttribute(
    "position",
    new hi(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new wi(g, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = $l;
  let d = this.type;
  this.render = function(E, R, A) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || E.length === 0)
      return;
    const P = r.getRenderTarget(), x = r.getActiveCubeFace(), b = r.getActiveMipmapLevel(), V = r.state;
    V.setBlending(Gi), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const $ = d !== Ei && this.type === Ei, D = d === Ei && this.type !== Ei;
    for (let O = 0, N = E.length; O < N; O++) {
      const K = E[O], G = K.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1)
        continue;
      n.copy(G.mapSize);
      const q = G.getFrameExtents();
      if (n.multiply(q), s.copy(G.mapSize), (n.x > u || n.y > u) && (n.x > u && (s.x = Math.floor(u / q.x), n.x = s.x * q.x, G.mapSize.x = s.x), n.y > u && (s.y = Math.floor(u / q.y), n.y = s.y * q.y, G.mapSize.y = s.y)), G.map === null || $ === !0 || D === !0) {
        const Z = this.type !== Ei ? { minFilter: Tt, magFilter: Tt } : {};
        G.map !== null && G.map.dispose(), G.map = new xn(n.x, n.y, Z), G.map.texture.name = K.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(G.map), r.clear();
      const j = G.getViewportCount();
      for (let Z = 0; Z < j; Z++) {
        const F = G.getViewport(Z);
        a.set(
          s.x * F.x,
          s.y * F.y,
          s.x * F.z,
          s.y * F.w
        ), V.viewport(a), G.updateMatrices(K, Z), i = G.getFrustum(), y(R, A, G.camera, K, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === Ei && S(G, A), G.needsUpdate = !1;
    }
    d = this.type, p.needsUpdate = !1, r.setRenderTarget(P, x, b);
  };
  function S(E, R) {
    const A = e.update(_);
    f.defines.VSM_SAMPLES !== E.blurSamples && (f.defines.VSM_SAMPLES = E.blurSamples, m.defines.VSM_SAMPLES = E.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), E.mapPass === null && (E.mapPass = new xn(n.x, n.y)), f.uniforms.shadow_pass.value = E.map.texture, f.uniforms.resolution.value = E.mapSize, f.uniforms.radius.value = E.radius, r.setRenderTarget(E.mapPass), r.clear(), r.renderBufferDirect(R, null, A, f, _, null), m.uniforms.shadow_pass.value = E.mapPass.texture, m.uniforms.resolution.value = E.mapSize, m.uniforms.radius.value = E.radius, r.setRenderTarget(E.map), r.clear(), r.renderBufferDirect(R, null, A, m, _, null);
  }
  function v(E, R, A, P) {
    let x = null;
    const b = A.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (b !== void 0)
      x = b;
    else if (x = A.isPointLight === !0 ? l : o, r.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
      const V = x.uuid, $ = R.uuid;
      let D = c[V];
      D === void 0 && (D = {}, c[V] = D);
      let O = D[$];
      O === void 0 && (O = x.clone(), D[$] = O), x = O;
    }
    if (x.visible = R.visible, x.wireframe = R.wireframe, P === Ei ? x.side = R.shadowSide !== null ? R.shadowSide : R.side : x.side = R.shadowSide !== null ? R.shadowSide : h[R.side], x.alphaMap = R.alphaMap, x.alphaTest = R.alphaTest, x.map = R.map, x.clipShadows = R.clipShadows, x.clippingPlanes = R.clippingPlanes, x.clipIntersection = R.clipIntersection, x.displacementMap = R.displacementMap, x.displacementScale = R.displacementScale, x.displacementBias = R.displacementBias, x.wireframeLinewidth = R.wireframeLinewidth, x.linewidth = R.linewidth, A.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
      const V = r.properties.get(x);
      V.light = A;
    }
    return x;
  }
  function y(E, R, A, P, x) {
    if (E.visible === !1)
      return;
    if (E.layers.test(R.layers) && (E.isMesh || E.isLine || E.isPoints) && (E.castShadow || E.receiveShadow && x === Ei) && (!E.frustumCulled || i.intersectsObject(E))) {
      E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, E.matrixWorld);
      const $ = e.update(E), D = E.material;
      if (Array.isArray(D)) {
        const O = $.groups;
        for (let N = 0, K = O.length; N < K; N++) {
          const G = O[N], q = D[G.materialIndex];
          if (q && q.visible) {
            const j = v(E, q, P, x);
            r.renderBufferDirect(A, null, $, j, E, G);
          }
        }
      } else if (D.visible) {
        const O = v(E, D, P, x);
        r.renderBufferDirect(A, null, $, O, E, null);
      }
    }
    const V = E.children;
    for (let $ = 0, D = V.length; $ < D; $++)
      y(V[$], R, A, P, x);
  }
}
function I_(r, e, t) {
  const i = t.isWebGL2;
  function n() {
    let C = !1;
    const oe = new ft();
    let H = null;
    const ie = new ft(0, 0, 0, 0);
    return {
      setMask: function(le) {
        H !== le && !C && (r.colorMask(le, le, le, le), H = le);
      },
      setLocked: function(le) {
        C = le;
      },
      setClear: function(le, Be, Ye, tt, Pi) {
        Pi === !0 && (le *= tt, Be *= tt, Ye *= tt), oe.set(le, Be, Ye, tt), ie.equals(oe) === !1 && (r.clearColor(le, Be, Ye, tt), ie.copy(oe));
      },
      reset: function() {
        C = !1, H = null, ie.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let C = !1, oe = null, H = null, ie = null;
    return {
      setTest: function(le) {
        le ? Te(r.DEPTH_TEST) : ve(r.DEPTH_TEST);
      },
      setMask: function(le) {
        oe !== le && !C && (r.depthMask(le), oe = le);
      },
      setFunc: function(le) {
        if (H !== le) {
          switch (le) {
            case Ju:
              r.depthFunc(r.NEVER);
              break;
            case Qu:
              r.depthFunc(r.ALWAYS);
              break;
            case eh:
              r.depthFunc(r.LESS);
              break;
            case Sa:
              r.depthFunc(r.LEQUAL);
              break;
            case th:
              r.depthFunc(r.EQUAL);
              break;
            case ih:
              r.depthFunc(r.GEQUAL);
              break;
            case nh:
              r.depthFunc(r.GREATER);
              break;
            case rh:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          H = le;
        }
      },
      setLocked: function(le) {
        C = le;
      },
      setClear: function(le) {
        ie !== le && (r.clearDepth(le), ie = le);
      },
      reset: function() {
        C = !1, oe = null, H = null, ie = null;
      }
    };
  }
  function a() {
    let C = !1, oe = null, H = null, ie = null, le = null, Be = null, Ye = null, tt = null, Pi = null;
    return {
      setTest: function(We) {
        C || (We ? Te(r.STENCIL_TEST) : ve(r.STENCIL_TEST));
      },
      setMask: function(We) {
        oe !== We && !C && (r.stencilMask(We), oe = We);
      },
      setFunc: function(We, oi, St) {
        (H !== We || ie !== oi || le !== St) && (r.stencilFunc(We, oi, St), H = We, ie = oi, le = St);
      },
      setOp: function(We, oi, St) {
        (Be !== We || Ye !== oi || tt !== St) && (r.stencilOp(We, oi, St), Be = We, Ye = oi, tt = St);
      },
      setLocked: function(We) {
        C = We;
      },
      setClear: function(We) {
        Pi !== We && (r.clearStencil(We), Pi = We);
      },
      reset: function() {
        C = !1, oe = null, H = null, ie = null, le = null, Be = null, Ye = null, tt = null, Pi = null;
      }
    };
  }
  const o = new n(), l = new s(), c = new a(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, d = !1, S = null, v = null, y = null, E = null, R = null, A = null, P = null, x = !1, b = null, V = null, $ = null, D = null, O = null;
  const N = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1, G = 0;
  const q = r.getParameter(r.VERSION);
  q.indexOf("WebGL") !== -1 ? (G = parseFloat(/^WebGL (\d)/.exec(q)[1]), K = G >= 1) : q.indexOf("OpenGL ES") !== -1 && (G = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), K = G >= 2);
  let j = null, Z = {};
  const F = r.getParameter(r.SCISSOR_BOX), Y = r.getParameter(r.VIEWPORT), ae = new ft().fromArray(F), ne = new ft().fromArray(Y);
  function se(C, oe, H, ie) {
    const le = new Uint8Array(4), Be = r.createTexture();
    r.bindTexture(C, Be), r.texParameteri(C, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(C, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Ye = 0; Ye < H; Ye++)
      i && (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) ? r.texImage3D(oe, 0, r.RGBA, 1, 1, ie, 0, r.RGBA, r.UNSIGNED_BYTE, le) : r.texImage2D(oe + Ye, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, le);
    return Be;
  }
  const ge = {};
  ge[r.TEXTURE_2D] = se(r.TEXTURE_2D, r.TEXTURE_2D, 1), ge[r.TEXTURE_CUBE_MAP] = se(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), i && (ge[r.TEXTURE_2D_ARRAY] = se(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), ge[r.TEXTURE_3D] = se(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Te(r.DEPTH_TEST), l.setFunc(Sa), ye(!1), qe(vo), Te(r.CULL_FACE), xe(Gi);
  function Te(C) {
    f[C] !== !0 && (r.enable(C), f[C] = !0);
  }
  function ve(C) {
    f[C] !== !1 && (r.disable(C), f[C] = !1);
  }
  function ze(C, oe) {
    return m[C] !== oe ? (r.bindFramebuffer(C, oe), m[C] = oe, i && (C === r.DRAW_FRAMEBUFFER && (m[r.FRAMEBUFFER] = oe), C === r.FRAMEBUFFER && (m[r.DRAW_FRAMEBUFFER] = oe)), !0) : !1;
  }
  function At(C, oe) {
    let H = _, ie = !1;
    if (C)
      if (H = g.get(oe), H === void 0 && (H = [], g.set(oe, H)), C.isWebGLMultipleRenderTargets) {
        const le = C.texture;
        if (H.length !== le.length || H[0] !== r.COLOR_ATTACHMENT0) {
          for (let Be = 0, Ye = le.length; Be < Ye; Be++)
            H[Be] = r.COLOR_ATTACHMENT0 + Be;
          H.length = le.length, ie = !0;
        }
      } else
        H[0] !== r.COLOR_ATTACHMENT0 && (H[0] = r.COLOR_ATTACHMENT0, ie = !0);
    else
      H[0] !== r.BACK && (H[0] = r.BACK, ie = !0);
    ie && (t.isWebGL2 ? r.drawBuffers(H) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H));
  }
  function Ce(C) {
    return p !== C ? (r.useProgram(C), p = C, !0) : !1;
  }
  const I = {
    [Hn]: r.FUNC_ADD,
    [Hu]: r.FUNC_SUBTRACT,
    [ku]: r.FUNC_REVERSE_SUBTRACT
  };
  if (i)
    I[Eo] = r.MIN, I[yo] = r.MAX;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (I[Eo] = C.MIN_EXT, I[yo] = C.MAX_EXT);
  }
  const pt = {
    [Vu]: r.ZERO,
    [Wu]: r.ONE,
    [Xu]: r.SRC_COLOR,
    [Jl]: r.SRC_ALPHA,
    [$u]: r.SRC_ALPHA_SATURATE,
    [ju]: r.DST_COLOR,
    [Yu]: r.DST_ALPHA,
    [qu]: r.ONE_MINUS_SRC_COLOR,
    [Ql]: r.ONE_MINUS_SRC_ALPHA,
    [Zu]: r.ONE_MINUS_DST_COLOR,
    [Ku]: r.ONE_MINUS_DST_ALPHA
  };
  function xe(C, oe, H, ie, le, Be, Ye, tt) {
    if (C === Gi) {
      d === !0 && (ve(r.BLEND), d = !1);
      return;
    }
    if (d === !1 && (Te(r.BLEND), d = !0), C !== Gu) {
      if (C !== S || tt !== x) {
        if ((v !== Hn || R !== Hn) && (r.blendEquation(r.FUNC_ADD), v = Hn, R = Hn), tt)
          switch (C) {
            case Xn:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case xo:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Mo:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case So:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Xn:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case xo:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Mo:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case So:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        y = null, E = null, A = null, P = null, S = C, x = tt;
      }
      return;
    }
    le = le || oe, Be = Be || H, Ye = Ye || ie, (oe !== v || le !== R) && (r.blendEquationSeparate(I[oe], I[le]), v = oe, R = le), (H !== y || ie !== E || Be !== A || Ye !== P) && (r.blendFuncSeparate(pt[H], pt[ie], pt[Be], pt[Ye]), y = H, E = ie, A = Be, P = Ye), S = C, x = !1;
  }
  function be(C, oe) {
    C.side === bi ? ve(r.CULL_FACE) : Te(r.CULL_FACE);
    let H = C.side === Lt;
    oe && (H = !H), ye(H), C.blending === Xn && C.transparent === !1 ? xe(Gi) : xe(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.premultipliedAlpha), l.setFunc(C.depthFunc), l.setTest(C.depthTest), l.setMask(C.depthWrite), o.setMask(C.colorWrite);
    const ie = C.stencilWrite;
    c.setTest(ie), ie && (c.setMask(C.stencilWriteMask), c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), Pe(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? Te(r.SAMPLE_ALPHA_TO_COVERAGE) : ve(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ye(C) {
    b !== C && (C ? r.frontFace(r.CW) : r.frontFace(r.CCW), b = C);
  }
  function qe(C) {
    C !== Ou ? (Te(r.CULL_FACE), C !== V && (C === vo ? r.cullFace(r.BACK) : C === Bu ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : ve(r.CULL_FACE), V = C;
  }
  function Fe(C) {
    C !== $ && (K && r.lineWidth(C), $ = C);
  }
  function Pe(C, oe, H) {
    C ? (Te(r.POLYGON_OFFSET_FILL), (D !== oe || O !== H) && (r.polygonOffset(oe, H), D = oe, O = H)) : ve(r.POLYGON_OFFSET_FILL);
  }
  function Ge(C) {
    C ? Te(r.SCISSOR_TEST) : ve(r.SCISSOR_TEST);
  }
  function ut(C) {
    C === void 0 && (C = r.TEXTURE0 + N - 1), j !== C && (r.activeTexture(C), j = C);
  }
  function mt(C, oe, H) {
    H === void 0 && (j === null ? H = r.TEXTURE0 + N - 1 : H = j);
    let ie = Z[H];
    ie === void 0 && (ie = { type: void 0, texture: void 0 }, Z[H] = ie), (ie.type !== C || ie.texture !== oe) && (j !== H && (r.activeTexture(H), j = H), r.bindTexture(C, oe || ge[C]), ie.type = C, ie.texture = oe);
  }
  function w() {
    const C = Z[j];
    C !== void 0 && C.type !== void 0 && (r.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function M() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function B() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Q() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function J() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ee() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function fe() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function te() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function k() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function me() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function de() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function pe(C) {
    ae.equals(C) === !1 && (r.scissor(C.x, C.y, C.z, C.w), ae.copy(C));
  }
  function ue(C) {
    ne.equals(C) === !1 && (r.viewport(C.x, C.y, C.z, C.w), ne.copy(C));
  }
  function he(C, oe) {
    let H = h.get(oe);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), h.set(oe, H));
    let ie = H.get(C);
    ie === void 0 && (ie = r.getUniformBlockIndex(oe, C.name), H.set(C, ie));
  }
  function De(C, oe) {
    const ie = h.get(oe).get(C);
    u.get(oe) !== ie && (r.uniformBlockBinding(oe, ie, C.__bindingPointIndex), u.set(oe, ie));
  }
  function Ve() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), i === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), f = {}, j = null, Z = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, d = !1, S = null, v = null, y = null, E = null, R = null, A = null, P = null, x = !1, b = null, V = null, $ = null, D = null, O = null, ae.set(0, 0, r.canvas.width, r.canvas.height), ne.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    enable: Te,
    disable: ve,
    bindFramebuffer: ze,
    drawBuffers: At,
    useProgram: Ce,
    setBlending: xe,
    setMaterial: be,
    setFlipSided: ye,
    setCullFace: qe,
    setLineWidth: Fe,
    setPolygonOffset: Pe,
    setScissorTest: Ge,
    activeTexture: ut,
    bindTexture: mt,
    unbindTexture: w,
    compressedTexImage2D: M,
    compressedTexImage3D: B,
    texImage2D: me,
    texImage3D: de,
    updateUBOMapping: he,
    uniformBlockBinding: De,
    texStorage2D: te,
    texStorage3D: k,
    texSubImage2D: Q,
    texSubImage3D: J,
    compressedTexSubImage2D: ee,
    compressedTexSubImage3D: fe,
    scissor: pe,
    viewport: ue,
    reset: Ve
  };
}
function F_(r, e, t, i, n, s, a) {
  const o = n.isWebGL2, l = n.maxTextures, c = n.maxCubemapSize, u = n.maxTextureSize, h = n.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let _;
  const p = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(w, M) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(w, M)
    ) : br("canvas");
  }
  function v(w, M, B, Q) {
    let J = 1;
    if ((w.width > Q || w.height > Q) && (J = Q / Math.max(w.width, w.height)), J < 1 || M === !0)
      if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap) {
        const ee = M ? Ma : Math.floor, fe = ee(J * w.width), te = ee(J * w.height);
        _ === void 0 && (_ = S(fe, te));
        const k = B ? S(fe, te) : _;
        return k.width = fe, k.height = te, k.getContext("2d").drawImage(w, 0, 0, fe, te), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + w.width + "x" + w.height + ") to (" + fe + "x" + te + ")."), k;
      } else
        return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + w.width + "x" + w.height + ")."), w;
    return w;
  }
  function y(w) {
    return _o(w.width) && _o(w.height);
  }
  function E(w) {
    return o ? !1 : w.wrapS !== ri || w.wrapT !== ri || w.minFilter !== Tt && w.minFilter !== Ct;
  }
  function R(w, M) {
    return w.generateMipmaps && M && w.minFilter !== Tt && w.minFilter !== Ct;
  }
  function A(w) {
    r.generateMipmap(w);
  }
  function P(w, M, B, Q, J = !1) {
    if (o === !1)
      return M;
    if (w !== null) {
      if (r[w] !== void 0)
        return r[w];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
    }
    let ee = M;
    return M === r.RED && (B === r.FLOAT && (ee = r.R32F), B === r.HALF_FLOAT && (ee = r.R16F), B === r.UNSIGNED_BYTE && (ee = r.R8)), M === r.RED_INTEGER && (B === r.UNSIGNED_BYTE && (ee = r.R8UI), B === r.UNSIGNED_SHORT && (ee = r.R16UI), B === r.UNSIGNED_INT && (ee = r.R32UI), B === r.BYTE && (ee = r.R8I), B === r.SHORT && (ee = r.R16I), B === r.INT && (ee = r.R32I)), M === r.RG && (B === r.FLOAT && (ee = r.RG32F), B === r.HALF_FLOAT && (ee = r.RG16F), B === r.UNSIGNED_BYTE && (ee = r.RG8)), M === r.RGBA && (B === r.FLOAT && (ee = r.RGBA32F), B === r.HALF_FLOAT && (ee = r.RGBA16F), B === r.UNSIGNED_BYTE && (ee = Q === Re && J === !1 ? r.SRGB8_ALPHA8 : r.RGBA8), B === r.UNSIGNED_SHORT_4_4_4_4 && (ee = r.RGBA4), B === r.UNSIGNED_SHORT_5_5_5_1 && (ee = r.RGB5_A1)), (ee === r.R16F || ee === r.R32F || ee === r.RG16F || ee === r.RG32F || ee === r.RGBA16F || ee === r.RGBA32F) && e.get("EXT_color_buffer_float"), ee;
  }
  function x(w, M, B) {
    return R(w, B) === !0 || w.isFramebufferTexture && w.minFilter !== Tt && w.minFilter !== Ct ? Math.log2(Math.max(M.width, M.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? M.mipmaps.length : 1;
  }
  function b(w) {
    return w === Tt || w === To || w === Os ? r.NEAREST : r.LINEAR;
  }
  function V(w) {
    const M = w.target;
    M.removeEventListener("dispose", V), D(M), M.isVideoTexture && g.delete(M);
  }
  function $(w) {
    const M = w.target;
    M.removeEventListener("dispose", $), N(M);
  }
  function D(w) {
    const M = i.get(w);
    if (M.__webglInit === void 0)
      return;
    const B = w.source, Q = p.get(B);
    if (Q) {
      const J = Q[M.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && O(w), Object.keys(Q).length === 0 && p.delete(B);
    }
    i.remove(w);
  }
  function O(w) {
    const M = i.get(w);
    r.deleteTexture(M.__webglTexture);
    const B = w.source, Q = p.get(B);
    delete Q[M.__cacheKey], a.memory.textures--;
  }
  function N(w) {
    const M = w.texture, B = i.get(w), Q = i.get(M);
    if (Q.__webglTexture !== void 0 && (r.deleteTexture(Q.__webglTexture), a.memory.textures--), w.depthTexture && w.depthTexture.dispose(), w.isWebGLCubeRenderTarget)
      for (let J = 0; J < 6; J++) {
        if (Array.isArray(B.__webglFramebuffer[J]))
          for (let ee = 0; ee < B.__webglFramebuffer[J].length; ee++)
            r.deleteFramebuffer(B.__webglFramebuffer[J][ee]);
        else
          r.deleteFramebuffer(B.__webglFramebuffer[J]);
        B.__webglDepthbuffer && r.deleteRenderbuffer(B.__webglDepthbuffer[J]);
      }
    else {
      if (Array.isArray(B.__webglFramebuffer))
        for (let J = 0; J < B.__webglFramebuffer.length; J++)
          r.deleteFramebuffer(B.__webglFramebuffer[J]);
      else
        r.deleteFramebuffer(B.__webglFramebuffer);
      if (B.__webglDepthbuffer && r.deleteRenderbuffer(B.__webglDepthbuffer), B.__webglMultisampledFramebuffer && r.deleteFramebuffer(B.__webglMultisampledFramebuffer), B.__webglColorRenderbuffer)
        for (let J = 0; J < B.__webglColorRenderbuffer.length; J++)
          B.__webglColorRenderbuffer[J] && r.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);
      B.__webglDepthRenderbuffer && r.deleteRenderbuffer(B.__webglDepthRenderbuffer);
    }
    if (w.isWebGLMultipleRenderTargets)
      for (let J = 0, ee = M.length; J < ee; J++) {
        const fe = i.get(M[J]);
        fe.__webglTexture && (r.deleteTexture(fe.__webglTexture), a.memory.textures--), i.remove(M[J]);
      }
    i.remove(M), i.remove(w);
  }
  let K = 0;
  function G() {
    K = 0;
  }
  function q() {
    const w = K;
    return w >= l && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + l), K += 1, w;
  }
  function j(w) {
    const M = [];
    return M.push(w.wrapS), M.push(w.wrapT), M.push(w.wrapR || 0), M.push(w.magFilter), M.push(w.minFilter), M.push(w.anisotropy), M.push(w.internalFormat), M.push(w.format), M.push(w.type), M.push(w.generateMipmaps), M.push(w.premultiplyAlpha), M.push(w.flipY), M.push(w.unpackAlignment), M.push(w.colorSpace), M.join();
  }
  function Z(w, M) {
    const B = i.get(w);
    if (w.isVideoTexture && ut(w), w.isRenderTargetTexture === !1 && w.version > 0 && B.__version !== w.version) {
      const Q = w.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ze(B, w, M);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, B.__webglTexture, r.TEXTURE0 + M);
  }
  function F(w, M) {
    const B = i.get(w);
    if (w.version > 0 && B.__version !== w.version) {
      ze(B, w, M);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, B.__webglTexture, r.TEXTURE0 + M);
  }
  function Y(w, M) {
    const B = i.get(w);
    if (w.version > 0 && B.__version !== w.version) {
      ze(B, w, M);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, B.__webglTexture, r.TEXTURE0 + M);
  }
  function ae(w, M) {
    const B = i.get(w);
    if (w.version > 0 && B.__version !== w.version) {
      At(B, w, M);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, B.__webglTexture, r.TEXTURE0 + M);
  }
  const ne = {
    [Er]: r.REPEAT,
    [ri]: r.CLAMP_TO_EDGE,
    [Ta]: r.MIRRORED_REPEAT
  }, se = {
    [Tt]: r.NEAREST,
    [To]: r.NEAREST_MIPMAP_NEAREST,
    [Os]: r.NEAREST_MIPMAP_LINEAR,
    [Ct]: r.LINEAR,
    [fh]: r.LINEAR_MIPMAP_NEAREST,
    [yr]: r.LINEAR_MIPMAP_LINEAR
  }, ge = {
    [wh]: r.NEVER,
    [Ih]: r.ALWAYS,
    [Rh]: r.LESS,
    [Ph]: r.LEQUAL,
    [Ch]: r.EQUAL,
    [Uh]: r.GEQUAL,
    [Lh]: r.GREATER,
    [Dh]: r.NOTEQUAL
  };
  function Te(w, M, B) {
    if (B ? (r.texParameteri(w, r.TEXTURE_WRAP_S, ne[M.wrapS]), r.texParameteri(w, r.TEXTURE_WRAP_T, ne[M.wrapT]), (w === r.TEXTURE_3D || w === r.TEXTURE_2D_ARRAY) && r.texParameteri(w, r.TEXTURE_WRAP_R, ne[M.wrapR]), r.texParameteri(w, r.TEXTURE_MAG_FILTER, se[M.magFilter]), r.texParameteri(w, r.TEXTURE_MIN_FILTER, se[M.minFilter])) : (r.texParameteri(w, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(w, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (w === r.TEXTURE_3D || w === r.TEXTURE_2D_ARRAY) && r.texParameteri(w, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (M.wrapS !== ri || M.wrapT !== ri) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(w, r.TEXTURE_MAG_FILTER, b(M.magFilter)), r.texParameteri(w, r.TEXTURE_MIN_FILTER, b(M.minFilter)), M.minFilter !== Tt && M.minFilter !== Ct && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), M.compareFunction && (r.texParameteri(w, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(w, r.TEXTURE_COMPARE_FUNC, ge[M.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (M.magFilter === Tt || M.minFilter !== Os && M.minFilter !== yr || M.type === Ni && e.has("OES_texture_float_linear") === !1 || o === !1 && M.type === Tr && e.has("OES_texture_half_float_linear") === !1)
        return;
      (M.anisotropy > 1 || i.get(M).__currentAnisotropy) && (r.texParameterf(w, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, n.getMaxAnisotropy())), i.get(M).__currentAnisotropy = M.anisotropy);
    }
  }
  function ve(w, M) {
    let B = !1;
    w.__webglInit === void 0 && (w.__webglInit = !0, M.addEventListener("dispose", V));
    const Q = M.source;
    let J = p.get(Q);
    J === void 0 && (J = {}, p.set(Q, J));
    const ee = j(M);
    if (ee !== w.__cacheKey) {
      J[ee] === void 0 && (J[ee] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, B = !0), J[ee].usedTimes++;
      const fe = J[w.__cacheKey];
      fe !== void 0 && (J[w.__cacheKey].usedTimes--, fe.usedTimes === 0 && O(M)), w.__cacheKey = ee, w.__webglTexture = J[ee].texture;
    }
    return B;
  }
  function ze(w, M, B) {
    let Q = r.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (Q = r.TEXTURE_2D_ARRAY), M.isData3DTexture && (Q = r.TEXTURE_3D);
    const J = ve(w, M), ee = M.source;
    t.bindTexture(Q, w.__webglTexture, r.TEXTURE0 + B);
    const fe = i.get(ee);
    if (ee.version !== fe.__version || J === !0) {
      t.activeTexture(r.TEXTURE0 + B), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const te = E(M) && y(M.image) === !1;
      let k = v(M.image, te, !1, u);
      k = mt(M, k);
      const me = y(k) || o, de = s.convert(M.format, M.colorSpace);
      let pe = s.convert(M.type), ue = P(M.internalFormat, de, pe, M.colorSpace);
      Te(Q, M, me);
      let he;
      const De = M.mipmaps, Ve = o && M.isVideoTexture !== !0, C = fe.__version === void 0 || J === !0, oe = x(M, k, me);
      if (M.isDepthTexture)
        ue = r.DEPTH_COMPONENT, o ? M.type === Ni ? ue = r.DEPTH_COMPONENT32F : M.type === Fi ? ue = r.DEPTH_COMPONENT24 : M.type === un ? ue = r.DEPTH24_STENCIL8 : ue = r.DEPTH_COMPONENT16 : M.type === Ni && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === hn && ue === r.DEPTH_COMPONENT && M.type !== ka && M.type !== Fi && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = Fi, pe = s.convert(M.type)), M.format === Jn && ue === r.DEPTH_COMPONENT && (ue = r.DEPTH_STENCIL, M.type !== un && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = un, pe = s.convert(M.type))), C && (Ve ? t.texStorage2D(r.TEXTURE_2D, 1, ue, k.width, k.height) : t.texImage2D(r.TEXTURE_2D, 0, ue, k.width, k.height, 0, de, pe, null));
      else if (M.isDataTexture)
        if (De.length > 0 && me) {
          Ve && C && t.texStorage2D(r.TEXTURE_2D, oe, ue, De[0].width, De[0].height);
          for (let H = 0, ie = De.length; H < ie; H++)
            he = De[H], Ve ? t.texSubImage2D(r.TEXTURE_2D, H, 0, 0, he.width, he.height, de, pe, he.data) : t.texImage2D(r.TEXTURE_2D, H, ue, he.width, he.height, 0, de, pe, he.data);
          M.generateMipmaps = !1;
        } else
          Ve ? (C && t.texStorage2D(r.TEXTURE_2D, oe, ue, k.width, k.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, k.width, k.height, de, pe, k.data)) : t.texImage2D(r.TEXTURE_2D, 0, ue, k.width, k.height, 0, de, pe, k.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Ve && C && t.texStorage3D(r.TEXTURE_2D_ARRAY, oe, ue, De[0].width, De[0].height, k.depth);
          for (let H = 0, ie = De.length; H < ie; H++)
            he = De[H], M.format !== si ? de !== null ? Ve ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, H, 0, 0, 0, he.width, he.height, k.depth, de, he.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, H, ue, he.width, he.height, k.depth, 0, he.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, H, 0, 0, 0, he.width, he.height, k.depth, de, pe, he.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, H, ue, he.width, he.height, k.depth, 0, de, pe, he.data);
        } else {
          Ve && C && t.texStorage2D(r.TEXTURE_2D, oe, ue, De[0].width, De[0].height);
          for (let H = 0, ie = De.length; H < ie; H++)
            he = De[H], M.format !== si ? de !== null ? Ve ? t.compressedTexSubImage2D(r.TEXTURE_2D, H, 0, 0, he.width, he.height, de, he.data) : t.compressedTexImage2D(r.TEXTURE_2D, H, ue, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage2D(r.TEXTURE_2D, H, 0, 0, he.width, he.height, de, pe, he.data) : t.texImage2D(r.TEXTURE_2D, H, ue, he.width, he.height, 0, de, pe, he.data);
        }
      else if (M.isDataArrayTexture)
        Ve ? (C && t.texStorage3D(r.TEXTURE_2D_ARRAY, oe, ue, k.width, k.height, k.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, k.width, k.height, k.depth, de, pe, k.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, ue, k.width, k.height, k.depth, 0, de, pe, k.data);
      else if (M.isData3DTexture)
        Ve ? (C && t.texStorage3D(r.TEXTURE_3D, oe, ue, k.width, k.height, k.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, k.width, k.height, k.depth, de, pe, k.data)) : t.texImage3D(r.TEXTURE_3D, 0, ue, k.width, k.height, k.depth, 0, de, pe, k.data);
      else if (M.isFramebufferTexture) {
        if (C)
          if (Ve)
            t.texStorage2D(r.TEXTURE_2D, oe, ue, k.width, k.height);
          else {
            let H = k.width, ie = k.height;
            for (let le = 0; le < oe; le++)
              t.texImage2D(r.TEXTURE_2D, le, ue, H, ie, 0, de, pe, null), H >>= 1, ie >>= 1;
          }
      } else if (De.length > 0 && me) {
        Ve && C && t.texStorage2D(r.TEXTURE_2D, oe, ue, De[0].width, De[0].height);
        for (let H = 0, ie = De.length; H < ie; H++)
          he = De[H], Ve ? t.texSubImage2D(r.TEXTURE_2D, H, 0, 0, de, pe, he) : t.texImage2D(r.TEXTURE_2D, H, ue, de, pe, he);
        M.generateMipmaps = !1;
      } else
        Ve ? (C && t.texStorage2D(r.TEXTURE_2D, oe, ue, k.width, k.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, de, pe, k)) : t.texImage2D(r.TEXTURE_2D, 0, ue, de, pe, k);
      R(M, me) && A(Q), fe.__version = ee.version, M.onUpdate && M.onUpdate(M);
    }
    w.__version = M.version;
  }
  function At(w, M, B) {
    if (M.image.length !== 6)
      return;
    const Q = ve(w, M), J = M.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, w.__webglTexture, r.TEXTURE0 + B);
    const ee = i.get(J);
    if (J.version !== ee.__version || Q === !0) {
      t.activeTexture(r.TEXTURE0 + B), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const fe = M.isCompressedTexture || M.image[0].isCompressedTexture, te = M.image[0] && M.image[0].isDataTexture, k = [];
      for (let H = 0; H < 6; H++)
        !fe && !te ? k[H] = v(M.image[H], !1, !0, c) : k[H] = te ? M.image[H].image : M.image[H], k[H] = mt(M, k[H]);
      const me = k[0], de = y(me) || o, pe = s.convert(M.format, M.colorSpace), ue = s.convert(M.type), he = P(M.internalFormat, pe, ue, M.colorSpace), De = o && M.isVideoTexture !== !0, Ve = ee.__version === void 0 || Q === !0;
      let C = x(M, me, de);
      Te(r.TEXTURE_CUBE_MAP, M, de);
      let oe;
      if (fe) {
        De && Ve && t.texStorage2D(r.TEXTURE_CUBE_MAP, C, he, me.width, me.height);
        for (let H = 0; H < 6; H++) {
          oe = k[H].mipmaps;
          for (let ie = 0; ie < oe.length; ie++) {
            const le = oe[ie];
            M.format !== si ? pe !== null ? De ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie, 0, 0, le.width, le.height, pe, le.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie, he, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie, 0, 0, le.width, le.height, pe, ue, le.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie, he, le.width, le.height, 0, pe, ue, le.data);
          }
        }
      } else {
        oe = M.mipmaps, De && Ve && (oe.length > 0 && C++, t.texStorage2D(r.TEXTURE_CUBE_MAP, C, he, k[0].width, k[0].height));
        for (let H = 0; H < 6; H++)
          if (te) {
            De ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, 0, 0, 0, k[H].width, k[H].height, pe, ue, k[H].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, 0, he, k[H].width, k[H].height, 0, pe, ue, k[H].data);
            for (let ie = 0; ie < oe.length; ie++) {
              const Be = oe[ie].image[H].image;
              De ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie + 1, 0, 0, Be.width, Be.height, pe, ue, Be.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie + 1, he, Be.width, Be.height, 0, pe, ue, Be.data);
            }
          } else {
            De ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, 0, 0, 0, pe, ue, k[H]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, 0, he, pe, ue, k[H]);
            for (let ie = 0; ie < oe.length; ie++) {
              const le = oe[ie];
              De ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie + 1, 0, 0, pe, ue, le.image[H]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + H, ie + 1, he, pe, ue, le.image[H]);
            }
          }
      }
      R(M, de) && A(r.TEXTURE_CUBE_MAP), ee.__version = J.version, M.onUpdate && M.onUpdate(M);
    }
    w.__version = M.version;
  }
  function Ce(w, M, B, Q, J, ee) {
    const fe = s.convert(B.format, B.colorSpace), te = s.convert(B.type), k = P(B.internalFormat, fe, te, B.colorSpace);
    if (!i.get(M).__hasExternalTextures) {
      const de = Math.max(1, M.width >> ee), pe = Math.max(1, M.height >> ee);
      J === r.TEXTURE_3D || J === r.TEXTURE_2D_ARRAY ? t.texImage3D(J, ee, k, de, pe, M.depth, 0, fe, te, null) : t.texImage2D(J, ee, k, de, pe, 0, fe, te, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, w), Ge(M) ? f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Q, J, i.get(B).__webglTexture, 0, Pe(M)) : (J === r.TEXTURE_2D || J >= r.TEXTURE_CUBE_MAP_POSITIVE_X && J <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Q, J, i.get(B).__webglTexture, ee), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function I(w, M, B) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, w), M.depthBuffer && !M.stencilBuffer) {
      let Q = r.DEPTH_COMPONENT16;
      if (B || Ge(M)) {
        const J = M.depthTexture;
        J && J.isDepthTexture && (J.type === Ni ? Q = r.DEPTH_COMPONENT32F : J.type === Fi && (Q = r.DEPTH_COMPONENT24));
        const ee = Pe(M);
        Ge(M) ? f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ee, Q, M.width, M.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, ee, Q, M.width, M.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, Q, M.width, M.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, w);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const Q = Pe(M);
      B && Ge(M) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, M.width, M.height) : Ge(M) ? f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, M.width, M.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, M.width, M.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, w);
    } else {
      const Q = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
      for (let J = 0; J < Q.length; J++) {
        const ee = Q[J], fe = s.convert(ee.format, ee.colorSpace), te = s.convert(ee.type), k = P(ee.internalFormat, fe, te, ee.colorSpace), me = Pe(M);
        B && Ge(M) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, me, k, M.width, M.height) : Ge(M) ? f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, me, k, M.width, M.height) : r.renderbufferStorage(r.RENDERBUFFER, k, M.width, M.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function pt(w, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, w), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!i.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), Z(M.depthTexture, 0);
    const Q = i.get(M.depthTexture).__webglTexture, J = Pe(M);
    if (M.depthTexture.format === hn)
      Ge(M) ? f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0, J) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else if (M.depthTexture.format === Jn)
      Ge(M) ? f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0, J) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function xe(w) {
    const M = i.get(w), B = w.isWebGLCubeRenderTarget === !0;
    if (w.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error("target.depthTexture not supported in Cube render targets");
      pt(M.__webglFramebuffer, w);
    } else if (B) {
      M.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer[Q]), M.__webglDepthbuffer[Q] = r.createRenderbuffer(), I(M.__webglDepthbuffer[Q], w, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer = r.createRenderbuffer(), I(M.__webglDepthbuffer, w, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function be(w, M, B) {
    const Q = i.get(w);
    M !== void 0 && Ce(Q.__webglFramebuffer, w, w.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), B !== void 0 && xe(w);
  }
  function ye(w) {
    const M = w.texture, B = i.get(w), Q = i.get(M);
    w.addEventListener("dispose", $), w.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = r.createTexture()), Q.__version = M.version, a.memory.textures++);
    const J = w.isWebGLCubeRenderTarget === !0, ee = w.isWebGLMultipleRenderTargets === !0, fe = y(w) || o;
    if (J) {
      B.__webglFramebuffer = [];
      for (let te = 0; te < 6; te++)
        if (o && M.mipmaps && M.mipmaps.length > 0) {
          B.__webglFramebuffer[te] = [];
          for (let k = 0; k < M.mipmaps.length; k++)
            B.__webglFramebuffer[te][k] = r.createFramebuffer();
        } else
          B.__webglFramebuffer[te] = r.createFramebuffer();
    } else {
      if (o && M.mipmaps && M.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let te = 0; te < M.mipmaps.length; te++)
          B.__webglFramebuffer[te] = r.createFramebuffer();
      } else
        B.__webglFramebuffer = r.createFramebuffer();
      if (ee)
        if (n.drawBuffers) {
          const te = w.texture;
          for (let k = 0, me = te.length; k < me; k++) {
            const de = i.get(te[k]);
            de.__webglTexture === void 0 && (de.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && w.samples > 0 && Ge(w) === !1) {
        const te = ee ? M : [M];
        B.__webglMultisampledFramebuffer = r.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let k = 0; k < te.length; k++) {
          const me = te[k];
          B.__webglColorRenderbuffer[k] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, B.__webglColorRenderbuffer[k]);
          const de = s.convert(me.format, me.colorSpace), pe = s.convert(me.type), ue = P(me.internalFormat, de, pe, me.colorSpace, w.isXRRenderTarget === !0), he = Pe(w);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, he, ue, w.width, w.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + k, r.RENDERBUFFER, B.__webglColorRenderbuffer[k]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), w.depthBuffer && (B.__webglDepthRenderbuffer = r.createRenderbuffer(), I(B.__webglDepthRenderbuffer, w, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (J) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, Q.__webglTexture), Te(r.TEXTURE_CUBE_MAP, M, fe);
      for (let te = 0; te < 6; te++)
        if (o && M.mipmaps && M.mipmaps.length > 0)
          for (let k = 0; k < M.mipmaps.length; k++)
            Ce(B.__webglFramebuffer[te][k], w, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + te, k);
        else
          Ce(B.__webglFramebuffer[te], w, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0);
      R(M, fe) && A(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ee) {
      const te = w.texture;
      for (let k = 0, me = te.length; k < me; k++) {
        const de = te[k], pe = i.get(de);
        t.bindTexture(r.TEXTURE_2D, pe.__webglTexture), Te(r.TEXTURE_2D, de, fe), Ce(B.__webglFramebuffer, w, de, r.COLOR_ATTACHMENT0 + k, r.TEXTURE_2D, 0), R(de, fe) && A(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let te = r.TEXTURE_2D;
      if ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (o ? te = w.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(te, Q.__webglTexture), Te(te, M, fe), o && M.mipmaps && M.mipmaps.length > 0)
        for (let k = 0; k < M.mipmaps.length; k++)
          Ce(B.__webglFramebuffer[k], w, M, r.COLOR_ATTACHMENT0, te, k);
      else
        Ce(B.__webglFramebuffer, w, M, r.COLOR_ATTACHMENT0, te, 0);
      R(M, fe) && A(te), t.unbindTexture();
    }
    w.depthBuffer && xe(w);
  }
  function qe(w) {
    const M = y(w) || o, B = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
    for (let Q = 0, J = B.length; Q < J; Q++) {
      const ee = B[Q];
      if (R(ee, M)) {
        const fe = w.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, te = i.get(ee).__webglTexture;
        t.bindTexture(fe, te), A(fe), t.unbindTexture();
      }
    }
  }
  function Fe(w) {
    if (o && w.samples > 0 && Ge(w) === !1) {
      const M = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture], B = w.width, Q = w.height;
      let J = r.COLOR_BUFFER_BIT;
      const ee = [], fe = w.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, te = i.get(w), k = w.isWebGLMultipleRenderTargets === !0;
      if (k)
        for (let me = 0; me < M.length; me++)
          t.bindFramebuffer(r.FRAMEBUFFER, te.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, te.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, te.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, te.__webglFramebuffer);
      for (let me = 0; me < M.length; me++) {
        ee.push(r.COLOR_ATTACHMENT0 + me), w.depthBuffer && ee.push(fe);
        const de = te.__ignoreDepthValues !== void 0 ? te.__ignoreDepthValues : !1;
        if (de === !1 && (w.depthBuffer && (J |= r.DEPTH_BUFFER_BIT), w.stencilBuffer && (J |= r.STENCIL_BUFFER_BIT)), k && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, te.__webglColorRenderbuffer[me]), de === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [fe]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [fe])), k) {
          const pe = i.get(M[me]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, pe, 0);
        }
        r.blitFramebuffer(0, 0, B, Q, 0, 0, B, Q, J, r.NEAREST), m && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, ee);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), k)
        for (let me = 0; me < M.length; me++) {
          t.bindFramebuffer(r.FRAMEBUFFER, te.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.RENDERBUFFER, te.__webglColorRenderbuffer[me]);
          const de = i.get(M[me]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, te.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + me, r.TEXTURE_2D, de, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, te.__webglMultisampledFramebuffer);
    }
  }
  function Pe(w) {
    return Math.min(h, w.samples);
  }
  function Ge(w) {
    const M = i.get(w);
    return o && w.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function ut(w) {
    const M = a.render.frame;
    g.get(w) !== M && (g.set(w, M), w.update());
  }
  function mt(w, M) {
    const B = w.colorSpace, Q = w.format, J = w.type;
    return w.isCompressedTexture === !0 || w.format === ba || B !== di && B !== dn && (B === Re ? o === !1 ? e.has("EXT_sRGB") === !0 && Q === si ? (w.format = ba, w.minFilter = Ct, w.generateMipmaps = !1) : M = xc.sRGBToLinear(M) : (Q !== si || J !== ki) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), M;
  }
  this.allocateTextureUnit = q, this.resetTextureUnits = G, this.setTexture2D = Z, this.setTexture2DArray = F, this.setTexture3D = Y, this.setTextureCube = ae, this.rebindTextures = be, this.setupRenderTarget = ye, this.updateRenderTargetMipmap = qe, this.updateMultisampleRenderTarget = Fe, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = Ce, this.useMultisampledRTT = Ge;
}
function N_(r, e, t) {
  const i = t.isWebGL2;
  function n(s, a = dn) {
    let o;
    if (s === ki)
      return r.UNSIGNED_BYTE;
    if (s === nc)
      return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === rc)
      return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === dh)
      return r.BYTE;
    if (s === ph)
      return r.SHORT;
    if (s === ka)
      return r.UNSIGNED_SHORT;
    if (s === ic)
      return r.INT;
    if (s === Fi)
      return r.UNSIGNED_INT;
    if (s === Ni)
      return r.FLOAT;
    if (s === Tr)
      return i ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === mh)
      return r.ALPHA;
    if (s === si)
      return r.RGBA;
    if (s === _h)
      return r.LUMINANCE;
    if (s === gh)
      return r.LUMINANCE_ALPHA;
    if (s === hn)
      return r.DEPTH_COMPONENT;
    if (s === Jn)
      return r.DEPTH_STENCIL;
    if (s === ba)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === vh)
      return r.RED;
    if (s === sc)
      return r.RED_INTEGER;
    if (s === xh)
      return r.RG;
    if (s === ac)
      return r.RG_INTEGER;
    if (s === oc)
      return r.RGBA_INTEGER;
    if (s === Bs || s === zs || s === Gs || s === Hs)
      if (a === Re)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === Bs)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === zs)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Gs)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Hs)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Bs)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === zs)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Gs)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Hs)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === bo || s === Ao || s === wo || s === Ro)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === bo)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Ao)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === wo)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Ro)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Mh)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Co || s === Po)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === Co)
          return a === Re ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === Po)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Lo || s === Do || s === Uo || s === Io || s === Fo || s === No || s === Oo || s === Bo || s === zo || s === Go || s === Ho || s === ko || s === Vo || s === Wo)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === Lo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Do)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Uo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Io)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Fo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === No)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Oo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Bo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === zo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Go)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ho)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === ko)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Vo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Wo)
          return a === Re ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === ks)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === ks)
          return a === Re ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === Sh || s === Xo || s === qo || s === Yo)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === ks)
          return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === Xo)
          return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === qo)
          return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Yo)
          return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === un ? i ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: n };
}
class O_ extends ni {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class as extends Ht {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const B_ = { type: "move" };
class ca {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new as(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new as(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new z(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new z()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new as(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new z(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new z()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const i of e.hand.values())
          this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, i) {
    let n = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const p = t.getJointPose(_, i), d = this._getHandJoint(c, _);
          p !== null && (d.matrix.fromArray(p.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = p.radius), d.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, i), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (n = t.getPose(e.targetRaySpace, i), n === null && s !== null && (n = s), n !== null && (o.matrix.fromArray(n.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, n.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(n.linearVelocity)) : o.hasLinearVelocity = !1, n.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(n.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(B_)));
    }
    return o !== null && (o.visible = n !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new as();
      i.matrixAutoUpdate = !1, i.visible = !1, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class z_ extends bt {
  constructor(e, t, i, n, s, a, o, l, c, u) {
    if (u = u !== void 0 ? u : hn, u !== hn && u !== Jn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    i === void 0 && u === hn && (i = Fi), i === void 0 && u === Jn && (i = un), super(null, n, s, a, o, l, u, i, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Tt, this.minFilter = l !== void 0 ? l : Tt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class G_ extends sr {
  constructor(e, t) {
    super();
    const i = this;
    let n = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, h = null, f = null, m = null, g = null;
    const _ = t.getContextAttributes();
    let p = null, d = null;
    const S = [], v = [], y = new ni();
    y.layers.enable(1), y.viewport = new ft();
    const E = new ni();
    E.layers.enable(2), E.viewport = new ft();
    const R = [y, E], A = new O_();
    A.layers.enable(1), A.layers.enable(2);
    let P = null, x = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(F) {
      let Y = S[F];
      return Y === void 0 && (Y = new ca(), S[F] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(F) {
      let Y = S[F];
      return Y === void 0 && (Y = new ca(), S[F] = Y), Y.getGripSpace();
    }, this.getHand = function(F) {
      let Y = S[F];
      return Y === void 0 && (Y = new ca(), S[F] = Y), Y.getHandSpace();
    };
    function b(F) {
      const Y = v.indexOf(F.inputSource);
      if (Y === -1)
        return;
      const ae = S[Y];
      ae !== void 0 && (ae.update(F.inputSource, F.frame, c || a), ae.dispatchEvent({ type: F.type, data: F.inputSource }));
    }
    function V() {
      n.removeEventListener("select", b), n.removeEventListener("selectstart", b), n.removeEventListener("selectend", b), n.removeEventListener("squeeze", b), n.removeEventListener("squeezestart", b), n.removeEventListener("squeezeend", b), n.removeEventListener("end", V), n.removeEventListener("inputsourceschange", $);
      for (let F = 0; F < S.length; F++) {
        const Y = v[F];
        Y !== null && (v[F] = null, S[F].disconnect(Y));
      }
      P = null, x = null, e.setRenderTarget(p), m = null, f = null, h = null, n = null, d = null, Z.stop(), i.isPresenting = !1, i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(F) {
      s = F, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(F) {
      o = F, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(F) {
      c = F;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return n;
    }, this.setSession = async function(F) {
      if (n = F, n !== null) {
        if (p = e.getRenderTarget(), n.addEventListener("select", b), n.addEventListener("selectstart", b), n.addEventListener("selectend", b), n.addEventListener("squeeze", b), n.addEventListener("squeezestart", b), n.addEventListener("squeezeend", b), n.addEventListener("end", V), n.addEventListener("inputsourceschange", $), _.xrCompatible !== !0 && await t.makeXRCompatible(), n.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Y = {
            antialias: n.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(n, t, Y), n.updateRenderState({ baseLayer: m }), d = new xn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: si,
              type: ki,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let Y = null, ae = null, ne = null;
          _.depth && (ne = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Y = _.stencil ? Jn : hn, ae = _.stencil ? un : Fi);
          const se = {
            colorFormat: t.RGBA8,
            depthFormat: ne,
            scaleFactor: s
          };
          h = new XRWebGLBinding(n, t), f = h.createProjectionLayer(se), n.updateRenderState({ layers: [f] }), d = new xn(
            f.textureWidth,
            f.textureHeight,
            {
              format: si,
              type: ki,
              depthTexture: new z_(f.textureWidth, f.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, Y),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const ge = e.properties.get(d);
          ge.__ignoreDepthValues = f.ignoreDepthValues;
        }
        d.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await n.requestReferenceSpace(o), Z.setContext(n), Z.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (n !== null)
        return n.environmentBlendMode;
    };
    function $(F) {
      for (let Y = 0; Y < F.removed.length; Y++) {
        const ae = F.removed[Y], ne = v.indexOf(ae);
        ne >= 0 && (v[ne] = null, S[ne].disconnect(ae));
      }
      for (let Y = 0; Y < F.added.length; Y++) {
        const ae = F.added[Y];
        let ne = v.indexOf(ae);
        if (ne === -1) {
          for (let ge = 0; ge < S.length; ge++)
            if (ge >= v.length) {
              v.push(ae), ne = ge;
              break;
            } else if (v[ge] === null) {
              v[ge] = ae, ne = ge;
              break;
            }
          if (ne === -1)
            break;
        }
        const se = S[ne];
        se && se.connect(ae);
      }
    }
    const D = new z(), O = new z();
    function N(F, Y, ae) {
      D.setFromMatrixPosition(Y.matrixWorld), O.setFromMatrixPosition(ae.matrixWorld);
      const ne = D.distanceTo(O), se = Y.projectionMatrix.elements, ge = ae.projectionMatrix.elements, Te = se[14] / (se[10] - 1), ve = se[14] / (se[10] + 1), ze = (se[9] + 1) / se[5], At = (se[9] - 1) / se[5], Ce = (se[8] - 1) / se[0], I = (ge[8] + 1) / ge[0], pt = Te * Ce, xe = Te * I, be = ne / (-Ce + I), ye = be * -Ce;
      Y.matrixWorld.decompose(F.position, F.quaternion, F.scale), F.translateX(ye), F.translateZ(be), F.matrixWorld.compose(F.position, F.quaternion, F.scale), F.matrixWorldInverse.copy(F.matrixWorld).invert();
      const qe = Te + be, Fe = ve + be, Pe = pt - ye, Ge = xe + (ne - ye), ut = ze * ve / Fe * qe, mt = At * ve / Fe * qe;
      F.projectionMatrix.makePerspective(Pe, Ge, ut, mt, qe, Fe), F.projectionMatrixInverse.copy(F.projectionMatrix).invert();
    }
    function K(F, Y) {
      Y === null ? F.matrixWorld.copy(F.matrix) : F.matrixWorld.multiplyMatrices(Y.matrixWorld, F.matrix), F.matrixWorldInverse.copy(F.matrixWorld).invert();
    }
    this.updateCamera = function(F) {
      if (n === null)
        return;
      A.near = E.near = y.near = F.near, A.far = E.far = y.far = F.far, (P !== A.near || x !== A.far) && (n.updateRenderState({
        depthNear: A.near,
        depthFar: A.far
      }), P = A.near, x = A.far);
      const Y = F.parent, ae = A.cameras;
      K(A, Y);
      for (let ne = 0; ne < ae.length; ne++)
        K(ae[ne], Y);
      ae.length === 2 ? N(A, y, E) : A.projectionMatrix.copy(y.projectionMatrix), G(F, A, Y);
    };
    function G(F, Y, ae) {
      ae === null ? F.matrix.copy(Y.matrixWorld) : (F.matrix.copy(ae.matrixWorld), F.matrix.invert(), F.matrix.multiply(Y.matrixWorld)), F.matrix.decompose(F.position, F.quaternion, F.scale), F.updateMatrixWorld(!0);
      const ne = F.children;
      for (let se = 0, ge = ne.length; se < ge; se++)
        ne[se].updateMatrixWorld(!0);
      F.projectionMatrix.copy(Y.projectionMatrix), F.projectionMatrixInverse.copy(Y.projectionMatrixInverse), F.isPerspectiveCamera && (F.fov = xa * 2 * Math.atan(1 / F.projectionMatrix.elements[5]), F.zoom = 1);
    }
    this.getCamera = function() {
      return A;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return l;
    }, this.setFoveation = function(F) {
      l = F, f !== null && (f.fixedFoveation = F), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = F);
    };
    let q = null;
    function j(F, Y) {
      if (u = Y.getViewerPose(c || a), g = Y, u !== null) {
        const ae = u.views;
        m !== null && (e.setRenderTargetFramebuffer(d, m.framebuffer), e.setRenderTarget(d));
        let ne = !1;
        ae.length !== A.cameras.length && (A.cameras.length = 0, ne = !0);
        for (let se = 0; se < ae.length; se++) {
          const ge = ae[se];
          let Te = null;
          if (m !== null)
            Te = m.getViewport(ge);
          else {
            const ze = h.getViewSubImage(f, ge);
            Te = ze.viewport, se === 0 && (e.setRenderTargetTextures(
              d,
              ze.colorTexture,
              f.ignoreDepthValues ? void 0 : ze.depthStencilTexture
            ), e.setRenderTarget(d));
          }
          let ve = R[se];
          ve === void 0 && (ve = new ni(), ve.layers.enable(se), ve.viewport = new ft(), R[se] = ve), ve.matrix.fromArray(ge.transform.matrix), ve.matrix.decompose(ve.position, ve.quaternion, ve.scale), ve.projectionMatrix.fromArray(ge.projectionMatrix), ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(), ve.viewport.set(Te.x, Te.y, Te.width, Te.height), se === 0 && (A.matrix.copy(ve.matrix), A.matrix.decompose(A.position, A.quaternion, A.scale)), ne === !0 && A.cameras.push(ve);
        }
      }
      for (let ae = 0; ae < S.length; ae++) {
        const ne = v[ae], se = S[ae];
        ne !== null && se !== void 0 && se.update(ne, Y, c || a);
      }
      q && q(F, Y), Y.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: Y }), g = null;
    }
    const Z = new dc();
    Z.setAnimationLoop(j), this.setAnimationLoop = function(F) {
      q = F;
    }, this.dispose = function() {
    };
  }
}
function H_(r, e) {
  function t(p, d) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function i(p, d) {
    d.color.getRGB(p.fogColor.value, gc(r)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function n(p, d, S, v, y) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? s(p, d) : d.isMeshToonMaterial ? (s(p, d), h(p, d)) : d.isMeshPhongMaterial ? (s(p, d), u(p, d)) : d.isMeshStandardMaterial ? (s(p, d), f(p, d), d.isMeshPhysicalMaterial && m(p, d, y)) : d.isMeshMatcapMaterial ? (s(p, d), g(p, d)) : d.isMeshDepthMaterial ? s(p, d) : d.isMeshDistanceMaterial ? (s(p, d), _(p, d)) : d.isMeshNormalMaterial ? s(p, d) : d.isLineBasicMaterial ? (a(p, d), d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? l(p, d, S, v) : d.isSpriteMaterial ? c(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.bumpMap && (p.bumpMap.value = d.bumpMap, t(d.bumpMap, p.bumpMapTransform), p.bumpScale.value = d.bumpScale, d.side === Lt && (p.bumpScale.value *= -1)), d.normalMap && (p.normalMap.value = d.normalMap, t(d.normalMap, p.normalMapTransform), p.normalScale.value.copy(d.normalScale), d.side === Lt && p.normalScale.value.negate()), d.displacementMap && (p.displacementMap.value = d.displacementMap, t(d.displacementMap, p.displacementMapTransform), p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, p.emissiveMapTransform)), d.specularMap && (p.specularMap.value = d.specularMap, t(d.specularMap, p.specularMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const S = e.get(d).envMap;
    if (S && (p.envMap.value = S, p.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap) {
      p.lightMap.value = d.lightMap;
      const v = r._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = d.lightMapIntensity * v, t(d.lightMap, p.lightMapTransform);
    }
    d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, p.aoMapTransform));
  }
  function a(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, d.map && (p.map.value = d.map, t(d.map, p.mapTransform));
  }
  function o(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function l(p, d, S, v) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * S, p.scale.value = v * 0.5, d.map && (p.map.value = d.map, t(d.map, p.uvTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.rotation.value = d.rotation, d.map && (p.map.value = d.map, t(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, t(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function u(p, d) {
    p.specular.value.copy(d.specular), p.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function h(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function f(p, d) {
    p.metalness.value = d.metalness, d.metalnessMap && (p.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, p.metalnessMapTransform)), p.roughness.value = d.roughness, d.roughnessMap && (p.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, p.roughnessMapTransform)), e.get(d).envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function m(p, d, S) {
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, p.sheenColorMapTransform)), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, p.clearcoatMapTransform)), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === Lt && p.clearcoatNormalScale.value.negate())), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, p.iridescenceMapTransform)), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = S.texture, p.transmissionSamplerSize.value.set(S.width, S.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, p.transmissionMapTransform)), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, p.specularColorMapTransform)), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function _(p, d) {
    const S = e.get(d).light;
    p.referencePosition.value.setFromMatrixPosition(S.matrixWorld), p.nearDistance.value = S.shadow.camera.near, p.farDistance.value = S.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: n
  };
}
function k_(r, e, t, i) {
  let n = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(S, v) {
    const y = v.program;
    i.uniformBlockBinding(S, y);
  }
  function c(S, v) {
    let y = n[S.id];
    y === void 0 && (g(S), y = u(S), n[S.id] = y, S.addEventListener("dispose", p));
    const E = v.program;
    i.updateUBOMapping(S, E);
    const R = e.render.frame;
    s[S.id] !== R && (f(S), s[S.id] = R);
  }
  function u(S) {
    const v = h();
    S.__bindingPointIndex = v;
    const y = r.createBuffer(), E = S.__size, R = S.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, y), r.bufferData(r.UNIFORM_BUFFER, E, R), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, y), y;
  }
  function h() {
    for (let S = 0; S < o; S++)
      if (a.indexOf(S) === -1)
        return a.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(S) {
    const v = n[S.id], y = S.uniforms, E = S.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, v);
    for (let R = 0, A = y.length; R < A; R++) {
      const P = y[R];
      if (m(P, R, E) === !0) {
        const x = P.__offset, b = Array.isArray(P.value) ? P.value : [P.value];
        let V = 0;
        for (let $ = 0; $ < b.length; $++) {
          const D = b[$], O = _(D);
          typeof D == "number" ? (P.__data[0] = D, r.bufferSubData(r.UNIFORM_BUFFER, x + V, P.__data)) : D.isMatrix3 ? (P.__data[0] = D.elements[0], P.__data[1] = D.elements[1], P.__data[2] = D.elements[2], P.__data[3] = D.elements[0], P.__data[4] = D.elements[3], P.__data[5] = D.elements[4], P.__data[6] = D.elements[5], P.__data[7] = D.elements[0], P.__data[8] = D.elements[6], P.__data[9] = D.elements[7], P.__data[10] = D.elements[8], P.__data[11] = D.elements[0]) : (D.toArray(P.__data, V), V += O.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, x, P.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function m(S, v, y) {
    const E = S.value;
    if (y[v] === void 0) {
      if (typeof E == "number")
        y[v] = E;
      else {
        const R = Array.isArray(E) ? E : [E], A = [];
        for (let P = 0; P < R.length; P++)
          A.push(R[P].clone());
        y[v] = A;
      }
      return !0;
    } else if (typeof E == "number") {
      if (y[v] !== E)
        return y[v] = E, !0;
    } else {
      const R = Array.isArray(y[v]) ? y[v] : [y[v]], A = Array.isArray(E) ? E : [E];
      for (let P = 0; P < R.length; P++) {
        const x = R[P];
        if (x.equals(A[P]) === !1)
          return x.copy(A[P]), !0;
      }
    }
    return !1;
  }
  function g(S) {
    const v = S.uniforms;
    let y = 0;
    const E = 16;
    let R = 0;
    for (let A = 0, P = v.length; A < P; A++) {
      const x = v[A], b = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, V = Array.isArray(x.value) ? x.value : [x.value];
      for (let $ = 0, D = V.length; $ < D; $++) {
        const O = V[$], N = _(O);
        b.boundary += N.boundary, b.storage += N.storage;
      }
      if (x.__data = new Float32Array(b.storage / Float32Array.BYTES_PER_ELEMENT), x.__offset = y, A > 0) {
        R = y % E;
        const $ = E - R;
        R !== 0 && $ - b.boundary < 0 && (y += E - R, x.__offset = y);
      }
      y += b.storage;
    }
    return R = y % E, R > 0 && (y += E - R), S.__size = y, S.__cache = {}, this;
  }
  function _(S) {
    const v = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" ? (v.boundary = 4, v.storage = 4) : S.isVector2 ? (v.boundary = 8, v.storage = 8) : S.isVector3 || S.isColor ? (v.boundary = 16, v.storage = 12) : S.isVector4 ? (v.boundary = 16, v.storage = 16) : S.isMatrix3 ? (v.boundary = 48, v.storage = 48) : S.isMatrix4 ? (v.boundary = 64, v.storage = 64) : S.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S), v;
  }
  function p(S) {
    const v = S.target;
    v.removeEventListener("dispose", p);
    const y = a.indexOf(v.__bindingPointIndex);
    a.splice(y, 1), r.deleteBuffer(n[v.id]), delete n[v.id], delete s[v.id];
  }
  function d() {
    for (const S in n)
      r.deleteBuffer(n[S]);
    a = [], n = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: d
  };
}
function V_() {
  const r = br("canvas");
  return r.style.display = "block", r;
}
class W_ {
  constructor(e = {}) {
    const {
      canvas: t = V_(),
      context: i = null,
      depth: n = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    i !== null ? f = i.getContextAttributes().alpha : f = a;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, p = null;
    const d = [], S = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Re, this._useLegacyLights = !1, this.toneMapping = Hi, this.toneMappingExposure = 1;
    const v = this;
    let y = !1, E = 0, R = 0, A = null, P = -1, x = null;
    const b = new ft(), V = new ft();
    let $ = null;
    const D = new Xe(0);
    let O = 0, N = t.width, K = t.height, G = 1, q = null, j = null;
    const Z = new ft(0, 0, N, K), F = new ft(0, 0, N, K);
    let Y = !1;
    const ae = new fc();
    let ne = !1, se = !1, ge = null;
    const Te = new dt(), ve = new Oe(), ze = new z(), At = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ce() {
      return A === null ? G : 1;
    }
    let I = i;
    function pt(T, U) {
      for (let X = 0; X < T.length; X++) {
        const L = T[X], W = t.getContext(L, U);
        if (W !== null)
          return W;
      }
      return null;
    }
    try {
      const T = {
        alpha: !0,
        depth: n,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Nu}`), t.addEventListener("webglcontextlost", oe, !1), t.addEventListener("webglcontextrestored", H, !1), t.addEventListener("webglcontextcreationerror", ie, !1), I === null) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (v.isWebGL1Renderer === !0 && U.shift(), I = pt(U, T), I === null)
          throw pt(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && I instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), I.getShaderPrecisionFormat === void 0 && (I.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (T) {
      throw console.error("THREE.WebGLRenderer: " + T.message), T;
    }
    let xe, be, ye, qe, Fe, Pe, Ge, ut, mt, w, M, B, Q, J, ee, fe, te, k, me, de, pe, ue, he, De;
    function Ve() {
      xe = new Jp(I), be = new Hp(I, xe, e), xe.init(be), ue = new N_(I, xe, be), ye = new I_(I, xe, be), qe = new tm(I), Fe = new M_(), Pe = new F_(I, xe, ye, Fe, be, ue, qe), Ge = new Kp(v), ut = new $p(v), mt = new $h(I, be), he = new zp(I, xe, mt, be), w = new Qp(I, mt, qe, he), M = new sm(I, w, mt, qe), me = new rm(I, be, Pe), fe = new kp(Fe), B = new x_(v, Ge, ut, xe, be, he, fe), Q = new H_(v, Fe), J = new E_(), ee = new R_(xe, be), k = new Bp(v, Ge, ut, ye, M, f, l), te = new U_(v, M, be), De = new k_(I, qe, be, ye), de = new Gp(I, xe, qe, be), pe = new em(I, xe, qe, be), qe.programs = B.programs, v.capabilities = be, v.extensions = xe, v.properties = Fe, v.renderLists = J, v.shadowMap = te, v.state = ye, v.info = qe;
    }
    Ve();
    const C = new G_(v, I);
    this.xr = C, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const T = xe.get("WEBGL_lose_context");
      T && T.loseContext();
    }, this.forceContextRestore = function() {
      const T = xe.get("WEBGL_lose_context");
      T && T.restoreContext();
    }, this.getPixelRatio = function() {
      return G;
    }, this.setPixelRatio = function(T) {
      T !== void 0 && (G = T, this.setSize(N, K, !1));
    }, this.getSize = function(T) {
      return T.set(N, K);
    }, this.setSize = function(T, U, X = !0) {
      if (C.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      N = T, K = U, t.width = Math.floor(T * G), t.height = Math.floor(U * G), X === !0 && (t.style.width = T + "px", t.style.height = U + "px"), this.setViewport(0, 0, T, U);
    }, this.getDrawingBufferSize = function(T) {
      return T.set(N * G, K * G).floor();
    }, this.setDrawingBufferSize = function(T, U, X) {
      N = T, K = U, G = X, t.width = Math.floor(T * X), t.height = Math.floor(U * X), this.setViewport(0, 0, T, U);
    }, this.getCurrentViewport = function(T) {
      return T.copy(b);
    }, this.getViewport = function(T) {
      return T.copy(Z);
    }, this.setViewport = function(T, U, X, L) {
      T.isVector4 ? Z.set(T.x, T.y, T.z, T.w) : Z.set(T, U, X, L), ye.viewport(b.copy(Z).multiplyScalar(G).floor());
    }, this.getScissor = function(T) {
      return T.copy(F);
    }, this.setScissor = function(T, U, X, L) {
      T.isVector4 ? F.set(T.x, T.y, T.z, T.w) : F.set(T, U, X, L), ye.scissor(V.copy(F).multiplyScalar(G).floor());
    }, this.getScissorTest = function() {
      return Y;
    }, this.setScissorTest = function(T) {
      ye.setScissorTest(Y = T);
    }, this.setOpaqueSort = function(T) {
      q = T;
    }, this.setTransparentSort = function(T) {
      j = T;
    }, this.getClearColor = function(T) {
      return T.copy(k.getClearColor());
    }, this.setClearColor = function() {
      k.setClearColor.apply(k, arguments);
    }, this.getClearAlpha = function() {
      return k.getClearAlpha();
    }, this.setClearAlpha = function() {
      k.setClearAlpha.apply(k, arguments);
    }, this.clear = function(T = !0, U = !0, X = !0) {
      let L = 0;
      if (T) {
        let W = !1;
        if (A !== null) {
          const ce = A.texture.format;
          W = ce === oc || ce === ac || ce === sc;
        }
        if (W) {
          const ce = A.texture.type, _e = ce === ki || ce === Fi || ce === ka || ce === un || ce === nc || ce === rc, Se = k.getClearColor(), Ee = k.getClearAlpha(), Ue = Se.r, Me = Se.g, Ae = Se.b;
          _e ? (m[0] = Ue, m[1] = Me, m[2] = Ae, m[3] = Ee, I.clearBufferuiv(I.COLOR, 0, m)) : (g[0] = Ue, g[1] = Me, g[2] = Ae, g[3] = Ee, I.clearBufferiv(I.COLOR, 0, g));
        } else
          L |= I.COLOR_BUFFER_BIT;
      }
      U && (L |= I.DEPTH_BUFFER_BIT), X && (L |= I.STENCIL_BUFFER_BIT), I.clear(L);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", oe, !1), t.removeEventListener("webglcontextrestored", H, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), J.dispose(), ee.dispose(), Fe.dispose(), Ge.dispose(), ut.dispose(), M.dispose(), he.dispose(), De.dispose(), B.dispose(), C.dispose(), C.removeEventListener("sessionstart", We), C.removeEventListener("sessionend", oi), ge && (ge.dispose(), ge = null), St.stop();
    };
    function oe(T) {
      T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function H() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const T = qe.autoReset, U = te.enabled, X = te.autoUpdate, L = te.needsUpdate, W = te.type;
      Ve(), qe.autoReset = T, te.enabled = U, te.autoUpdate = X, te.needsUpdate = L, te.type = W;
    }
    function ie(T) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
    }
    function le(T) {
      const U = T.target;
      U.removeEventListener("dispose", le), Be(U);
    }
    function Be(T) {
      Ye(T), Fe.remove(T);
    }
    function Ye(T) {
      const U = Fe.get(T).programs;
      U !== void 0 && (U.forEach(function(X) {
        B.releaseProgram(X);
      }), T.isShaderMaterial && B.releaseShaderCache(T));
    }
    this.renderBufferDirect = function(T, U, X, L, W, ce) {
      U === null && (U = At);
      const _e = W.isMesh && W.matrixWorld.determinant() < 0, Se = Cu(T, U, X, L, W);
      ye.setMaterial(L, _e);
      let Ee = X.index, Ue = 1;
      if (L.wireframe === !0) {
        if (Ee = w.getWireframeAttribute(X), Ee === void 0)
          return;
        Ue = 2;
      }
      const Me = X.drawRange, Ae = X.attributes.position;
      let Ze = Me.start * Ue, Qe = (Me.start + Me.count) * Ue;
      ce !== null && (Ze = Math.max(Ze, ce.start * Ue), Qe = Math.min(Qe, (ce.start + ce.count) * Ue)), Ee !== null ? (Ze = Math.max(Ze, 0), Qe = Math.min(Qe, Ee.count)) : Ae != null && (Ze = Math.max(Ze, 0), Qe = Math.min(Qe, Ae.count));
      const Wt = Qe - Ze;
      if (Wt < 0 || Wt === 1 / 0)
        return;
      he.setup(W, L, Se, X, Ee);
      let mi, it = de;
      if (Ee !== null && (mi = mt.get(Ee), it = pe, it.setIndex(mi)), W.isMesh)
        L.wireframe === !0 ? (ye.setLineWidth(L.wireframeLinewidth * Ce()), it.setMode(I.LINES)) : it.setMode(I.TRIANGLES);
      else if (W.isLine) {
        let Ie = L.linewidth;
        Ie === void 0 && (Ie = 1), ye.setLineWidth(Ie * Ce()), W.isLineSegments ? it.setMode(I.LINES) : W.isLineLoop ? it.setMode(I.LINE_LOOP) : it.setMode(I.LINE_STRIP);
      } else
        W.isPoints ? it.setMode(I.POINTS) : W.isSprite && it.setMode(I.TRIANGLES);
      if (W.isInstancedMesh)
        it.renderInstances(Ze, Wt, W.count);
      else if (X.isInstancedBufferGeometry) {
        const Ie = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, Ps = Math.min(X.instanceCount, Ie);
        it.renderInstances(Ze, Wt, Ps);
      } else
        it.render(Ze, Wt);
    }, this.compile = function(T, U) {
      function X(L, W, ce) {
        L.transparent === !0 && L.side === bi && L.forceSinglePass === !1 ? (L.side = Lt, L.needsUpdate = !0, zr(L, W, ce), L.side = Xi, L.needsUpdate = !0, zr(L, W, ce), L.side = bi) : zr(L, W, ce);
      }
      p = ee.get(T), p.init(), S.push(p), T.traverseVisible(function(L) {
        L.isLight && L.layers.test(U.layers) && (p.pushLight(L), L.castShadow && p.pushShadow(L));
      }), p.setupLights(v._useLegacyLights), T.traverse(function(L) {
        const W = L.material;
        if (W)
          if (Array.isArray(W))
            for (let ce = 0; ce < W.length; ce++) {
              const _e = W[ce];
              X(_e, T, L);
            }
          else
            X(W, T, L);
      }), S.pop(), p = null;
    };
    let tt = null;
    function Pi(T) {
      tt && tt(T);
    }
    function We() {
      St.stop();
    }
    function oi() {
      St.start();
    }
    const St = new dc();
    St.setAnimationLoop(Pi), typeof self < "u" && St.setContext(self), this.setAnimationLoop = function(T) {
      tt = T, C.setAnimationLoop(T), T === null ? St.stop() : St.start();
    }, C.addEventListener("sessionstart", We), C.addEventListener("sessionend", oi), this.render = function(T, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0)
        return;
      T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), C.enabled === !0 && C.isPresenting === !0 && (C.cameraAutoUpdate === !0 && C.updateCamera(U), U = C.getCamera()), T.isScene === !0 && T.onBeforeRender(v, T, U, A), p = ee.get(T, S.length), p.init(), S.push(p), Te.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), ae.setFromProjectionMatrix(Te), se = this.localClippingEnabled, ne = fe.init(this.clippingPlanes, se), _ = J.get(T, d.length), _.init(), d.push(_), co(T, U, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(q, j), this.info.render.frame++, ne === !0 && fe.beginShadows();
      const X = p.state.shadowsArray;
      if (te.render(X, T, U), ne === !0 && fe.endShadows(), this.info.autoReset === !0 && this.info.reset(), k.render(_, T), p.setupLights(v._useLegacyLights), U.isArrayCamera) {
        const L = U.cameras;
        for (let W = 0, ce = L.length; W < ce; W++) {
          const _e = L[W];
          uo(_, T, _e, _e.viewport);
        }
      } else
        uo(_, T, U);
      A !== null && (Pe.updateMultisampleRenderTarget(A), Pe.updateRenderTargetMipmap(A)), T.isScene === !0 && T.onAfterRender(v, T, U), he.resetDefaultState(), P = -1, x = null, S.pop(), S.length > 0 ? p = S[S.length - 1] : p = null, d.pop(), d.length > 0 ? _ = d[d.length - 1] : _ = null;
    };
    function co(T, U, X, L) {
      if (T.visible === !1)
        return;
      if (T.layers.test(U.layers)) {
        if (T.isGroup)
          X = T.renderOrder;
        else if (T.isLOD)
          T.autoUpdate === !0 && T.update(U);
        else if (T.isLight)
          p.pushLight(T), T.castShadow && p.pushShadow(T);
        else if (T.isSprite) {
          if (!T.frustumCulled || ae.intersectsSprite(T)) {
            L && ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);
            const _e = M.update(T), Se = T.material;
            Se.visible && _.push(T, _e, Se, X, ze.z, null);
          }
        } else if ((T.isMesh || T.isLine || T.isPoints) && (!T.frustumCulled || ae.intersectsObject(T))) {
          const _e = M.update(T), Se = T.material;
          if (L && (T.boundingSphere !== void 0 ? (T.boundingSphere === null && T.computeBoundingSphere(), ze.copy(T.boundingSphere.center)) : (_e.boundingSphere === null && _e.computeBoundingSphere(), ze.copy(_e.boundingSphere.center)), ze.applyMatrix4(T.matrixWorld).applyMatrix4(Te)), Array.isArray(Se)) {
            const Ee = _e.groups;
            for (let Ue = 0, Me = Ee.length; Ue < Me; Ue++) {
              const Ae = Ee[Ue], Ze = Se[Ae.materialIndex];
              Ze && Ze.visible && _.push(T, _e, Ze, X, ze.z, Ae);
            }
          } else
            Se.visible && _.push(T, _e, Se, X, ze.z, null);
        }
      }
      const ce = T.children;
      for (let _e = 0, Se = ce.length; _e < Se; _e++)
        co(ce[_e], U, X, L);
    }
    function uo(T, U, X, L) {
      const W = T.opaque, ce = T.transmissive, _e = T.transparent;
      p.setupLightsView(X), ne === !0 && fe.setGlobalState(v.clippingPlanes, X), ce.length > 0 && Ru(W, ce, U, X), L && ye.viewport(b.copy(L)), W.length > 0 && Br(W, U, X), ce.length > 0 && Br(ce, U, X), _e.length > 0 && Br(_e, U, X), ye.buffers.depth.setTest(!0), ye.buffers.depth.setMask(!0), ye.buffers.color.setMask(!0), ye.setPolygonOffset(!1);
    }
    function Ru(T, U, X, L) {
      const W = be.isWebGL2;
      ge === null && (ge = new xn(1, 1, {
        generateMipmaps: !0,
        type: xe.has("EXT_color_buffer_half_float") ? Tr : ki,
        minFilter: yr,
        samples: W ? 4 : 0
      })), v.getDrawingBufferSize(ve), W ? ge.setSize(ve.x, ve.y) : ge.setSize(Ma(ve.x), Ma(ve.y));
      const ce = v.getRenderTarget();
      v.setRenderTarget(ge), v.getClearColor(D), O = v.getClearAlpha(), O < 1 && v.setClearColor(16777215, 0.5), v.clear();
      const _e = v.toneMapping;
      v.toneMapping = Hi, Br(T, X, L), Pe.updateMultisampleRenderTarget(ge), Pe.updateRenderTargetMipmap(ge);
      let Se = !1;
      for (let Ee = 0, Ue = U.length; Ee < Ue; Ee++) {
        const Me = U[Ee], Ae = Me.object, Ze = Me.geometry, Qe = Me.material, Wt = Me.group;
        if (Qe.side === bi && Ae.layers.test(L.layers)) {
          const mi = Qe.side;
          Qe.side = Lt, Qe.needsUpdate = !0, ho(Ae, X, L, Ze, Qe, Wt), Qe.side = mi, Qe.needsUpdate = !0, Se = !0;
        }
      }
      Se === !0 && (Pe.updateMultisampleRenderTarget(ge), Pe.updateRenderTargetMipmap(ge)), v.setRenderTarget(ce), v.setClearColor(D, O), v.toneMapping = _e;
    }
    function Br(T, U, X) {
      const L = U.isScene === !0 ? U.overrideMaterial : null;
      for (let W = 0, ce = T.length; W < ce; W++) {
        const _e = T[W], Se = _e.object, Ee = _e.geometry, Ue = L === null ? _e.material : L, Me = _e.group;
        Se.layers.test(X.layers) && ho(Se, U, X, Ee, Ue, Me);
      }
    }
    function ho(T, U, X, L, W, ce) {
      T.onBeforeRender(v, U, X, L, W, ce), T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), W.onBeforeRender(v, U, X, L, T, ce), W.transparent === !0 && W.side === bi && W.forceSinglePass === !1 ? (W.side = Lt, W.needsUpdate = !0, v.renderBufferDirect(X, U, L, W, T, ce), W.side = Xi, W.needsUpdate = !0, v.renderBufferDirect(X, U, L, W, T, ce), W.side = bi) : v.renderBufferDirect(X, U, L, W, T, ce), T.onAfterRender(v, U, X, L, W, ce);
    }
    function zr(T, U, X) {
      U.isScene !== !0 && (U = At);
      const L = Fe.get(T), W = p.state.lights, ce = p.state.shadowsArray, _e = W.state.version, Se = B.getParameters(T, W.state, ce, U, X), Ee = B.getProgramCacheKey(Se);
      let Ue = L.programs;
      L.environment = T.isMeshStandardMaterial ? U.environment : null, L.fog = U.fog, L.envMap = (T.isMeshStandardMaterial ? ut : Ge).get(T.envMap || L.environment), Ue === void 0 && (T.addEventListener("dispose", le), Ue = /* @__PURE__ */ new Map(), L.programs = Ue);
      let Me = Ue.get(Ee);
      if (Me !== void 0) {
        if (L.currentProgram === Me && L.lightsStateVersion === _e)
          return fo(T, Se), Me;
      } else
        Se.uniforms = B.getUniforms(T), T.onBuild(X, Se, v), T.onBeforeCompile(Se, v), Me = B.acquireProgram(Se, Ee), Ue.set(Ee, Me), L.uniforms = Se.uniforms;
      const Ae = L.uniforms;
      (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Ae.clippingPlanes = fe.uniform), fo(T, Se), L.needsLights = Lu(T), L.lightsStateVersion = _e, L.needsLights && (Ae.ambientLightColor.value = W.state.ambient, Ae.lightProbe.value = W.state.probe, Ae.directionalLights.value = W.state.directional, Ae.directionalLightShadows.value = W.state.directionalShadow, Ae.spotLights.value = W.state.spot, Ae.spotLightShadows.value = W.state.spotShadow, Ae.rectAreaLights.value = W.state.rectArea, Ae.ltc_1.value = W.state.rectAreaLTC1, Ae.ltc_2.value = W.state.rectAreaLTC2, Ae.pointLights.value = W.state.point, Ae.pointLightShadows.value = W.state.pointShadow, Ae.hemisphereLights.value = W.state.hemi, Ae.directionalShadowMap.value = W.state.directionalShadowMap, Ae.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Ae.spotShadowMap.value = W.state.spotShadowMap, Ae.spotLightMatrix.value = W.state.spotLightMatrix, Ae.spotLightMap.value = W.state.spotLightMap, Ae.pointShadowMap.value = W.state.pointShadowMap, Ae.pointShadowMatrix.value = W.state.pointShadowMatrix);
      const Ze = Me.getUniforms(), Qe = cs.seqWithValue(Ze.seq, Ae);
      return L.currentProgram = Me, L.uniformsList = Qe, Me;
    }
    function fo(T, U) {
      const X = Fe.get(T);
      X.outputColorSpace = U.outputColorSpace, X.instancing = U.instancing, X.instancingColor = U.instancingColor, X.skinning = U.skinning, X.morphTargets = U.morphTargets, X.morphNormals = U.morphNormals, X.morphColors = U.morphColors, X.morphTargetsCount = U.morphTargetsCount, X.numClippingPlanes = U.numClippingPlanes, X.numIntersection = U.numClipIntersection, X.vertexAlphas = U.vertexAlphas, X.vertexTangents = U.vertexTangents, X.toneMapping = U.toneMapping;
    }
    function Cu(T, U, X, L, W) {
      U.isScene !== !0 && (U = At), Pe.resetTextureUnits();
      const ce = U.fog, _e = L.isMeshStandardMaterial ? U.environment : null, Se = A === null ? v.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : di, Ee = (L.isMeshStandardMaterial ? ut : Ge).get(L.envMap || _e), Ue = L.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, Me = !!X.attributes.tangent && (!!L.normalMap || L.anisotropy > 0), Ae = !!X.morphAttributes.position, Ze = !!X.morphAttributes.normal, Qe = !!X.morphAttributes.color;
      let Wt = Hi;
      L.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Wt = v.toneMapping);
      const mi = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, it = mi !== void 0 ? mi.length : 0, Ie = Fe.get(L), Ps = p.state.lights;
      if (ne === !0 && (se === !0 || T !== x)) {
        const Nt = T === x && L.id === P;
        fe.setState(L, T, Nt);
      }
      let nt = !1;
      L.version === Ie.__version ? (Ie.needsLights && Ie.lightsStateVersion !== Ps.state.version || Ie.outputColorSpace !== Se || W.isInstancedMesh && Ie.instancing === !1 || !W.isInstancedMesh && Ie.instancing === !0 || W.isSkinnedMesh && Ie.skinning === !1 || !W.isSkinnedMesh && Ie.skinning === !0 || W.isInstancedMesh && Ie.instancingColor === !0 && W.instanceColor === null || W.isInstancedMesh && Ie.instancingColor === !1 && W.instanceColor !== null || Ie.envMap !== Ee || L.fog === !0 && Ie.fog !== ce || Ie.numClippingPlanes !== void 0 && (Ie.numClippingPlanes !== fe.numPlanes || Ie.numIntersection !== fe.numIntersection) || Ie.vertexAlphas !== Ue || Ie.vertexTangents !== Me || Ie.morphTargets !== Ae || Ie.morphNormals !== Ze || Ie.morphColors !== Qe || Ie.toneMapping !== Wt || be.isWebGL2 === !0 && Ie.morphTargetsCount !== it) && (nt = !0) : (nt = !0, Ie.__version = L.version);
      let Zi = Ie.currentProgram;
      nt === !0 && (Zi = zr(L, U, W));
      let po = !1, or = !1, Ls = !1;
      const Et = Zi.getUniforms(), $i = Ie.uniforms;
      if (ye.useProgram(Zi.program) && (po = !0, or = !0, Ls = !0), L.id !== P && (P = L.id, or = !0), po || x !== T) {
        if (Et.setValue(I, "projectionMatrix", T.projectionMatrix), be.logarithmicDepthBuffer && Et.setValue(
          I,
          "logDepthBufFC",
          2 / (Math.log(T.far + 1) / Math.LN2)
        ), x !== T && (x = T, or = !0, Ls = !0), L.isShaderMaterial || L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshStandardMaterial || L.envMap) {
          const Nt = Et.map.cameraPosition;
          Nt !== void 0 && Nt.setValue(
            I,
            ze.setFromMatrixPosition(T.matrixWorld)
          );
        }
        (L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshLambertMaterial || L.isMeshBasicMaterial || L.isMeshStandardMaterial || L.isShaderMaterial) && Et.setValue(I, "isOrthographic", T.isOrthographicCamera === !0), (L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshLambertMaterial || L.isMeshBasicMaterial || L.isMeshStandardMaterial || L.isShaderMaterial || L.isShadowMaterial || W.isSkinnedMesh) && Et.setValue(I, "viewMatrix", T.matrixWorldInverse);
      }
      if (W.isSkinnedMesh) {
        Et.setOptional(I, W, "bindMatrix"), Et.setOptional(I, W, "bindMatrixInverse");
        const Nt = W.skeleton;
        Nt && (be.floatVertexTextures ? (Nt.boneTexture === null && Nt.computeBoneTexture(), Et.setValue(I, "boneTexture", Nt.boneTexture, Pe), Et.setValue(I, "boneTextureSize", Nt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Ds = X.morphAttributes;
      if ((Ds.position !== void 0 || Ds.normal !== void 0 || Ds.color !== void 0 && be.isWebGL2 === !0) && me.update(W, X, Zi), (or || Ie.receiveShadow !== W.receiveShadow) && (Ie.receiveShadow = W.receiveShadow, Et.setValue(I, "receiveShadow", W.receiveShadow)), L.isMeshGouraudMaterial && L.envMap !== null && ($i.envMap.value = Ee, $i.flipEnvMap.value = Ee.isCubeTexture && Ee.isRenderTargetTexture === !1 ? -1 : 1), or && (Et.setValue(I, "toneMappingExposure", v.toneMappingExposure), Ie.needsLights && Pu($i, Ls), ce && L.fog === !0 && Q.refreshFogUniforms($i, ce), Q.refreshMaterialUniforms($i, L, G, K, ge), cs.upload(I, Ie.uniformsList, $i, Pe)), L.isShaderMaterial && L.uniformsNeedUpdate === !0 && (cs.upload(I, Ie.uniformsList, $i, Pe), L.uniformsNeedUpdate = !1), L.isSpriteMaterial && Et.setValue(I, "center", W.center), Et.setValue(I, "modelViewMatrix", W.modelViewMatrix), Et.setValue(I, "normalMatrix", W.normalMatrix), Et.setValue(I, "modelMatrix", W.matrixWorld), L.isShaderMaterial || L.isRawShaderMaterial) {
        const Nt = L.uniformsGroups;
        for (let Us = 0, Du = Nt.length; Us < Du; Us++)
          if (be.isWebGL2) {
            const mo = Nt[Us];
            De.update(mo, Zi), De.bind(mo, Zi);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Zi;
    }
    function Pu(T, U) {
      T.ambientLightColor.needsUpdate = U, T.lightProbe.needsUpdate = U, T.directionalLights.needsUpdate = U, T.directionalLightShadows.needsUpdate = U, T.pointLights.needsUpdate = U, T.pointLightShadows.needsUpdate = U, T.spotLights.needsUpdate = U, T.spotLightShadows.needsUpdate = U, T.rectAreaLights.needsUpdate = U, T.hemisphereLights.needsUpdate = U;
    }
    function Lu(T) {
      return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return E;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return A;
    }, this.setRenderTargetTextures = function(T, U, X) {
      Fe.get(T.texture).__webglTexture = U, Fe.get(T.depthTexture).__webglTexture = X;
      const L = Fe.get(T);
      L.__hasExternalTextures = !0, L.__hasExternalTextures && (L.__autoAllocateDepthBuffer = X === void 0, L.__autoAllocateDepthBuffer || xe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), L.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(T, U) {
      const X = Fe.get(T);
      X.__webglFramebuffer = U, X.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(T, U = 0, X = 0) {
      A = T, E = U, R = X;
      let L = !0, W = null, ce = !1, _e = !1;
      if (T) {
        const Ee = Fe.get(T);
        Ee.__useDefaultFramebuffer !== void 0 ? (ye.bindFramebuffer(I.FRAMEBUFFER, null), L = !1) : Ee.__webglFramebuffer === void 0 ? Pe.setupRenderTarget(T) : Ee.__hasExternalTextures && Pe.rebindTextures(T, Fe.get(T.texture).__webglTexture, Fe.get(T.depthTexture).__webglTexture);
        const Ue = T.texture;
        (Ue.isData3DTexture || Ue.isDataArrayTexture || Ue.isCompressedArrayTexture) && (_e = !0);
        const Me = Fe.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget ? (Array.isArray(Me[U]) ? W = Me[U][X] : W = Me[U], ce = !0) : be.isWebGL2 && T.samples > 0 && Pe.useMultisampledRTT(T) === !1 ? W = Fe.get(T).__webglMultisampledFramebuffer : Array.isArray(Me) ? W = Me[X] : W = Me, b.copy(T.viewport), V.copy(T.scissor), $ = T.scissorTest;
      } else
        b.copy(Z).multiplyScalar(G).floor(), V.copy(F).multiplyScalar(G).floor(), $ = Y;
      if (ye.bindFramebuffer(I.FRAMEBUFFER, W) && be.drawBuffers && L && ye.drawBuffers(T, W), ye.viewport(b), ye.scissor(V), ye.setScissorTest($), ce) {
        const Ee = Fe.get(T.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + U, Ee.__webglTexture, X);
      } else if (_e) {
        const Ee = Fe.get(T.texture), Ue = U || 0;
        I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, Ee.__webglTexture, X || 0, Ue);
      }
      P = -1;
    }, this.readRenderTargetPixels = function(T, U, X, L, W, ce, _e) {
      if (!(T && T.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Se = Fe.get(T).__webglFramebuffer;
      if (T.isWebGLCubeRenderTarget && _e !== void 0 && (Se = Se[_e]), Se) {
        ye.bindFramebuffer(I.FRAMEBUFFER, Se);
        try {
          const Ee = T.texture, Ue = Ee.format, Me = Ee.type;
          if (Ue !== si && ue.convert(Ue) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ae = Me === Tr && (xe.has("EXT_color_buffer_half_float") || be.isWebGL2 && xe.has("EXT_color_buffer_float"));
          if (Me !== ki && ue.convert(Me) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Me === Ni && (be.isWebGL2 || xe.has("OES_texture_float") || xe.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ae) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= T.width - L && X >= 0 && X <= T.height - W && I.readPixels(U, X, L, W, ue.convert(Ue), ue.convert(Me), ce);
        } finally {
          const Ee = A !== null ? Fe.get(A).__webglFramebuffer : null;
          ye.bindFramebuffer(I.FRAMEBUFFER, Ee);
        }
      }
    }, this.copyFramebufferToTexture = function(T, U, X = 0) {
      const L = Math.pow(2, -X), W = Math.floor(U.image.width * L), ce = Math.floor(U.image.height * L);
      Pe.setTexture2D(U, 0), I.copyTexSubImage2D(I.TEXTURE_2D, X, 0, 0, T.x, T.y, W, ce), ye.unbindTexture();
    }, this.copyTextureToTexture = function(T, U, X, L = 0) {
      const W = U.image.width, ce = U.image.height, _e = ue.convert(X.format), Se = ue.convert(X.type);
      Pe.setTexture2D(X, 0), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, X.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, X.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, X.unpackAlignment), U.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, L, T.x, T.y, W, ce, _e, Se, U.image.data) : U.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, L, T.x, T.y, U.mipmaps[0].width, U.mipmaps[0].height, _e, U.mipmaps[0].data) : I.texSubImage2D(I.TEXTURE_2D, L, T.x, T.y, _e, Se, U.image), L === 0 && X.generateMipmaps && I.generateMipmap(I.TEXTURE_2D), ye.unbindTexture();
    }, this.copyTextureToTexture3D = function(T, U, X, L, W = 0) {
      if (v.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ce = T.max.x - T.min.x + 1, _e = T.max.y - T.min.y + 1, Se = T.max.z - T.min.z + 1, Ee = ue.convert(L.format), Ue = ue.convert(L.type);
      let Me;
      if (L.isData3DTexture)
        Pe.setTexture3D(L, 0), Me = I.TEXTURE_3D;
      else if (L.isDataArrayTexture)
        Pe.setTexture2DArray(L, 0), Me = I.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, L.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Ae = I.getParameter(I.UNPACK_ROW_LENGTH), Ze = I.getParameter(I.UNPACK_IMAGE_HEIGHT), Qe = I.getParameter(I.UNPACK_SKIP_PIXELS), Wt = I.getParameter(I.UNPACK_SKIP_ROWS), mi = I.getParameter(I.UNPACK_SKIP_IMAGES), it = X.isCompressedTexture ? X.mipmaps[0] : X.image;
      I.pixelStorei(I.UNPACK_ROW_LENGTH, it.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, it.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, T.min.x), I.pixelStorei(I.UNPACK_SKIP_ROWS, T.min.y), I.pixelStorei(I.UNPACK_SKIP_IMAGES, T.min.z), X.isDataTexture || X.isData3DTexture ? I.texSubImage3D(Me, W, U.x, U.y, U.z, ce, _e, Se, Ee, Ue, it.data) : X.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), I.compressedTexSubImage3D(Me, W, U.x, U.y, U.z, ce, _e, Se, Ee, it.data)) : I.texSubImage3D(Me, W, U.x, U.y, U.z, ce, _e, Se, Ee, Ue, it), I.pixelStorei(I.UNPACK_ROW_LENGTH, Ae), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ze), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Qe), I.pixelStorei(I.UNPACK_SKIP_ROWS, Wt), I.pixelStorei(I.UNPACK_SKIP_IMAGES, mi), W === 0 && L.generateMipmaps && I.generateMipmap(Me), ye.unbindTexture();
    }, this.initTexture = function(T) {
      T.isCubeTexture ? Pe.setTextureCube(T, 0) : T.isData3DTexture ? Pe.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? Pe.setTexture2DArray(T, 0) : Pe.setTexture2D(T, 0), ye.unbindTexture();
    }, this.resetState = function() {
      E = 0, R = 0, A = null, ye.reset(), he.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Ai;
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Re ? fn : lc;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === fn ? Re : di;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
const Dl = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class X_ {
  constructor(e, t, i) {
    const n = this;
    let s = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(u) {
      o++, s === !1 && n.onStart !== void 0 && n.onStart(u, a, o), s = !0;
    }, this.itemEnd = function(u) {
      a++, n.onProgress !== void 0 && n.onProgress(u, a, o), a === o && (s = !1, n.onLoad !== void 0 && n.onLoad());
    }, this.itemError = function(u) {
      n.onError !== void 0 && n.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, f = c.length; h < f; h += 2) {
        const m = c[h], g = c[h + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return g;
      }
      return null;
    };
  }
}
const q_ = /* @__PURE__ */ new X_();
class Xa {
  constructor(e) {
    this.manager = e !== void 0 ? e : q_, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const i = this;
    return new Promise(function(n, s) {
      i.load(e, n, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Xa.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class Y_ extends Xa {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Dl.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = br("img");
    function l() {
      u(), Dl.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), n && n(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class Ul extends Xa {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const s = new bt(), a = new Y_(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, i, n), s;
  }
}
function yi(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Cc(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var kt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, er = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, qa, xt, $e, Kt = 1e8, ke = 1 / Kt, wa = Math.PI * 2, K_ = wa / 4, j_ = 0, Pc = Math.sqrt, Z_ = Math.cos, $_ = Math.sin, ct = function(e) {
  return typeof e == "string";
}, Je = function(e) {
  return typeof e == "function";
}, Ri = function(e) {
  return typeof e == "number";
}, Ya = function(e) {
  return typeof e > "u";
}, pi = function(e) {
  return typeof e == "object";
}, Dt = function(e) {
  return e !== !1;
}, Ka = function() {
  return typeof window < "u";
}, os = function(e) {
  return Je(e) || ct(e);
}, Lc = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Mt = Array.isArray, Ra = /(?:-?\.?\d|\.)+/gi, Dc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Vn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ua = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Uc = /[+-]=-?[.\d]+/, Ic = /[^,'"\[\]\s]+/gi, J_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ke, Yt, Ca, ja, Vt = {}, ps = {}, Fc, Nc = function(e) {
  return (ps = Mn(e, Vt)) && Ft;
}, Za = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, ms = function(e, t) {
  return !t && console.warn(e);
}, Oc = function(e, t) {
  return e && (Vt[e] = t) && ps && (ps[e] = t) || Vt;
}, Ar = function() {
  return 0;
}, Q_ = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, us = {
  suppressEvents: !0,
  kill: !1
}, eg = {
  suppressEvents: !0
}, $a = {}, Vi = [], Pa = {}, Bc, zt = {}, ha = {}, Il = 30, hs = [], Ja = "", Qa = function(e) {
  var t = e[0], i, n;
  if (pi(t) || Je(t) || (e = [e]), !(i = (t._gsap || {}).harness)) {
    for (n = hs.length; n-- && !hs[n].targetTest(t); )
      ;
    i = hs[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new lu(e[n], i))) || e.splice(n, 1);
  return e;
}, mn = function(e) {
  return e._gsap || Qa(jt(e))[0]._gsap;
}, zc = function(e, t, i) {
  return (i = e[t]) && Je(i) ? e[t]() : Ya(i) && e.getAttribute && e.getAttribute(t) || i;
}, Ut = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, et = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, ht = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Yn = function(e, t) {
  var i = t.charAt(0), n = parseFloat(t.substr(2));
  return e = parseFloat(e), i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n;
}, tg = function(e, t) {
  for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; )
    ;
  return n < i;
}, _s = function() {
  var e = Vi.length, t = Vi.slice(0), i, n;
  for (Pa = {}, Vi.length = 0, i = 0; i < e; i++)
    n = t[i], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, Gc = function(e, t, i, n) {
  Vi.length && !xt && _s(), e.render(t, i, n || xt && t < 0 && (e._initted || e._startAt)), Vi.length && !xt && _s();
}, Hc = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Ic).length < 2 ? t : ct(e) ? e.trim() : e;
}, kc = function(e) {
  return e;
}, $t = function(e, t) {
  for (var i in t)
    i in e || (e[i] = t[i]);
  return e;
}, ig = function(e) {
  return function(t, i) {
    for (var n in i)
      n in t || n === "duration" && e || n === "ease" || (t[n] = i[n]);
  };
}, Mn = function(e, t) {
  for (var i in t)
    e[i] = t[i];
  return e;
}, Fl = function r(e, t) {
  for (var i in t)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = pi(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
  return e;
}, gs = function(e, t) {
  var i = {}, n;
  for (n in e)
    n in t || (i[n] = e[n]);
  return i;
}, xr = function(e) {
  var t = e.parent || Ke, i = e.keyframes ? ig(Mt(e.keyframes)) : $t;
  if (Dt(e.inherit))
    for (; t; )
      i(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, ng = function(e, t) {
  for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; )
    ;
  return i < 0;
}, Vc = function(e, t, i, n, s) {
  i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
  var a = e[n], o;
  if (s)
    for (o = t[s]; a && a[s] > o; )
      a = a._prev;
  return a ? (t._next = a._next, a._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = a, t.parent = t._dp = e, t;
}, ws = function(e, t, i, n) {
  i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
  var s = t._prev, a = t._next;
  s ? s._next = a : e[i] === t && (e[i] = a), a ? a._prev = s : e[n] === t && (e[n] = s), t._next = t._prev = t.parent = null;
}, Yi = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, _n = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var i = e; i; )
      i._dirty = 1, i = i.parent;
  return e;
}, rg = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, La = function(e, t, i, n) {
  return e._startAt && (xt ? e._startAt.revert(us) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
}, sg = function r(e) {
  return !e || e._ts && r(e.parent);
}, Nl = function(e) {
  return e._repeat ? tr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, tr = function(e, t) {
  var i = Math.floor(e /= t);
  return e && i === e ? i - 1 : i;
}, vs = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Rs = function(e) {
  return e._end = ht(e._start + (e._tDur / Math.abs(e._ts || e._rts || ke) || 0));
}, Cs = function(e, t) {
  var i = e._dp;
  return i && i.smoothChildTiming && e._ts && (e._start = ht(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Rs(e), i._dirty || _n(i, e)), e;
}, Wc = function(e, t) {
  var i;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = vs(e.rawTime(), t), (!t._dur || Or(0, t.totalDuration(), i) - t._tTime > ke) && t.render(i, !0)), _n(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (i = e; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    e._zTime = -ke;
  }
}, ci = function(e, t, i, n) {
  return t.parent && Yi(t), t._start = ht((Ri(i) ? i : i || e !== Ke ? qt(e, i, t) : e._time) + t._delay), t._end = ht(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Vc(e, t, "_first", "_last", e._sort ? "_start" : 0), Da(t) || (e._recent = t), n || Wc(e, t), e._ts < 0 && Cs(e, e._tTime), e;
}, Xc = function(e, t) {
  return (Vt.ScrollTrigger || Za("scrollTrigger", t)) && Vt.ScrollTrigger.create(t, e);
}, qc = function(e, t, i, n, s) {
  if (to(e, t, s), !e._initted)
    return 1;
  if (!i && e._pt && !xt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Bc !== Gt.frame)
    return Vi.push(e), e._lazy = [s, n], 1;
}, ag = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, Da = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, og = function(e, t, i, n) {
  var s = e.ratio, a = t < 0 || !t && (!e._start && ag(e) && !(!e._initted && Da(e)) || (e._ts < 0 || e._dp._ts < 0) && !Da(e)) ? 0 : 1, o = e._rDelay, l = 0, c, u, h;
  if (o && e._repeat && (l = Or(0, e._tDur, t), u = tr(l, o), e._yoyo && u & 1 && (a = 1 - a), u !== tr(e._tTime, o) && (s = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== s || xt || n || e._zTime === ke || !t && e._zTime) {
    if (!e._initted && qc(e, t, n, i, l))
      return;
    for (h = e._zTime, e._zTime = t || (i ? ke : 0), i || (i = t && !h), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(a, c.d), c = c._next;
    t < 0 && La(e, t, i, !0), e._onUpdate && !i && Zt(e, "onUpdate"), l && e._repeat && !i && e.parent && Zt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Yi(e, 1), !i && !xt && (Zt(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, lg = function(e, t, i) {
  var n;
  if (i > t)
    for (n = e._first; n && n._start <= i; ) {
      if (n.data === "isPause" && n._start > t)
        return n;
      n = n._next;
    }
  else
    for (n = e._last; n && n._start >= i; ) {
      if (n.data === "isPause" && n._start < t)
        return n;
      n = n._prev;
    }
}, ir = function(e, t, i, n) {
  var s = e._repeat, a = ht(t) || 0, o = e._tTime / e._tDur;
  return o && !n && (e._time *= a / e._dur), e._dur = a, e._tDur = s ? s < 0 ? 1e10 : ht(a * (s + 1) + e._rDelay * s) : a, o > 0 && !n && Cs(e, e._tTime = e._tDur * o), e.parent && Rs(e), i || _n(e.parent, e), e;
}, Ol = function(e) {
  return e instanceof Pt ? _n(e) : ir(e, e._dur);
}, cg = {
  _start: 0,
  endTime: Ar,
  totalDuration: Ar
}, qt = function r(e, t, i) {
  var n = e.labels, s = e._recent || cg, a = e.duration() >= Kt ? s.endTime(!1) : e._dur, o, l, c;
  return ct(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), c = t.substr(-1) === "%", o = t.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (o < 0 ? s : i).totalDuration() / 100 : 1)) : o < 0 ? (t in n || (n[t] = a), n[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), c && i && (l = l / 100 * (Mt(i) ? i[0] : i).totalDuration()), o > 1 ? r(e, t.substr(0, o - 1), i) + l : a + l)) : t == null ? a : +t;
}, Mr = function(e, t, i) {
  var n = Ri(t[1]), s = (n ? 2 : 1) + (e < 2 ? 0 : 1), a = t[s], o, l;
  if (n && (a.duration = t[1]), a.parent = i, e) {
    for (o = a, l = i; l && !("immediateRender" in o); )
      o = l.vars.defaults || {}, l = Dt(l.vars.inherit) && l.parent;
    a.immediateRender = Dt(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1];
  }
  return new st(t[0], a, t[s + 1]);
}, ji = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Or = function(e, t, i) {
  return i < e ? e : i > t ? t : i;
}, vt = function(e, t) {
  return !ct(e) || !(t = J_.exec(e)) ? "" : t[1];
}, ug = function(e, t, i) {
  return ji(i, function(n) {
    return Or(e, t, n);
  });
}, Ua = [].slice, Yc = function(e, t) {
  return e && pi(e) && "length" in e && (!t && !e.length || e.length - 1 in e && pi(e[0])) && !e.nodeType && e !== Yt;
}, hg = function(e, t, i) {
  return i === void 0 && (i = []), e.forEach(function(n) {
    var s;
    return ct(n) && !t || Yc(n, 1) ? (s = i).push.apply(s, jt(n)) : i.push(n);
  }) || i;
}, jt = function(e, t, i) {
  return $e && !t && $e.selector ? $e.selector(e) : ct(e) && !i && (Ca || !nr()) ? Ua.call((t || ja).querySelectorAll(e), 0) : Mt(e) ? hg(e, i) : Yc(e) ? Ua.call(e, 0) : e ? [e] : [];
}, Ia = function(e) {
  return e = jt(e)[0] || ms("Invalid scope") || {}, function(t) {
    var i = e.current || e.nativeElement || e;
    return jt(t, i.querySelectorAll ? i : i === e ? ms("Invalid scope") || ja.createElement("div") : e);
  };
}, Kc = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, jc = function(e) {
  if (Je(e))
    return e;
  var t = pi(e) ? e : {
    each: e
  }, i = gn(t.ease), n = t.from || 0, s = parseFloat(t.base) || 0, a = {}, o = n > 0 && n < 1, l = isNaN(n) || o, c = t.axis, u = n, h = n;
  return ct(n) ? u = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !o && l && (u = n[0], h = n[1]), function(f, m, g) {
    var _ = (g || t).length, p = a[_], d, S, v, y, E, R, A, P, x;
    if (!p) {
      if (x = t.grid === "auto" ? 0 : (t.grid || [1, Kt])[1], !x) {
        for (A = -Kt; A < (A = g[x++].getBoundingClientRect().left) && x < _; )
          ;
        x--;
      }
      for (p = a[_] = [], d = l ? Math.min(x, _) * u - 0.5 : n % x, S = x === Kt ? 0 : l ? _ * h / x - 0.5 : n / x | 0, A = 0, P = Kt, R = 0; R < _; R++)
        v = R % x - d, y = S - (R / x | 0), p[R] = E = c ? Math.abs(c === "y" ? y : v) : Pc(v * v + y * y), E > A && (A = E), E < P && (P = E);
      n === "random" && Kc(p), p.max = A - P, p.min = P, p.v = _ = (parseFloat(t.amount) || parseFloat(t.each) * (x > _ ? _ - 1 : c ? c === "y" ? _ / x : x : Math.max(x, _ / x)) || 0) * (n === "edges" ? -1 : 1), p.b = _ < 0 ? s - _ : s, p.u = vt(t.amount || t.each) || 0, i = i && _ < 0 ? su(i) : i;
    }
    return _ = (p[f] - p.min) / p.max || 0, ht(p.b + (i ? i(_) : _) * p.v) + p.u;
  };
}, Fa = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(i) {
    var n = ht(Math.round(parseFloat(i) / e) * e * t);
    return (n - n % 1) / t + (Ri(i) ? 0 : vt(i));
  };
}, Zc = function(e, t) {
  var i = Mt(e), n, s;
  return !i && pi(e) && (n = i = e.radius || Kt, e.values ? (e = jt(e.values), (s = !Ri(e[0])) && (n *= n)) : e = Fa(e.increment)), ji(t, i ? Je(e) ? function(a) {
    return s = e(a), Math.abs(s - a) <= n ? s : a;
  } : function(a) {
    for (var o = parseFloat(s ? a.x : a), l = parseFloat(s ? a.y : 0), c = Kt, u = 0, h = e.length, f, m; h--; )
      s ? (f = e[h].x - o, m = e[h].y - l, f = f * f + m * m) : f = Math.abs(e[h] - o), f < c && (c = f, u = h);
    return u = !n || c <= n ? e[u] : a, s || u === a || Ri(a) ? u : u + vt(a);
  } : Fa(e));
}, $c = function(e, t, i, n) {
  return ji(Mt(e) ? !t : i === !0 ? !!(i = 0) : !n, function() {
    return Mt(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) * i * n) / n;
  });
}, fg = function() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return function(n) {
    return t.reduce(function(s, a) {
      return a(s);
    }, n);
  };
}, dg = function(e, t) {
  return function(i) {
    return e(parseFloat(i)) + (t || vt(i));
  };
}, pg = function(e, t, i) {
  return Qc(e, t, 0, 1, i);
}, Jc = function(e, t, i) {
  return ji(i, function(n) {
    return e[~~t(n)];
  });
}, mg = function r(e, t, i) {
  var n = t - e;
  return Mt(e) ? Jc(e, r(0, e.length), t) : ji(i, function(s) {
    return (n + (s - e) % n) % n + e;
  });
}, _g = function r(e, t, i) {
  var n = t - e, s = n * 2;
  return Mt(e) ? Jc(e, r(0, e.length - 1), t) : ji(i, function(a) {
    return a = (s + (a - e) % s) % s || 0, e + (a > n ? s - a : a);
  });
}, wr = function(e) {
  for (var t = 0, i = "", n, s, a, o; ~(n = e.indexOf("random(", t)); )
    a = e.indexOf(")", n), o = e.charAt(n + 7) === "[", s = e.substr(n + 7, a - n - 7).match(o ? Ic : Ra), i += e.substr(t, n - t) + $c(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5), t = a + 1;
  return i + e.substr(t, e.length - t);
}, Qc = function(e, t, i, n, s) {
  var a = t - e, o = n - i;
  return ji(s, function(l) {
    return i + ((l - e) / a * o || 0);
  });
}, gg = function r(e, t, i, n) {
  var s = isNaN(e + t) ? 0 : function(m) {
    return (1 - m) * e + m * t;
  };
  if (!s) {
    var a = ct(e), o = {}, l, c, u, h, f;
    if (i === !0 && (n = 1) && (i = null), a)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Mt(e) && !Mt(t)) {
      for (u = [], h = e.length, f = h - 2, c = 1; c < h; c++)
        u.push(r(e[c - 1], e[c]));
      h--, s = function(g) {
        g *= h;
        var _ = Math.min(f, ~~g);
        return u[_](g - _);
      }, i = t;
    } else
      n || (e = Mn(Mt(e) ? [] : {}, e));
    if (!u) {
      for (l in t)
        eo.call(o, e, l, "get", t[l]);
      s = function(g) {
        return ro(g, o) || (a ? e.p : e);
      };
    }
  }
  return ji(i, s);
}, Bl = function(e, t, i) {
  var n = e.labels, s = Kt, a, o, l;
  for (a in n)
    o = n[a] - t, o < 0 == !!i && o && s > (o = Math.abs(o)) && (l = a, s = o);
  return l;
}, Zt = function(e, t, i) {
  var n = e.vars, s = n[t], a = $e, o = e._ctx, l, c, u;
  if (s)
    return l = n[t + "Params"], c = n.callbackScope || e, i && Vi.length && _s(), o && ($e = o), u = l ? s.apply(c, l) : s.call(c), $e = a, u;
}, mr = function(e) {
  return Yi(e), e.scrollTrigger && e.scrollTrigger.kill(!!xt), e.progress() < 1 && Zt(e, "onInterrupt"), e;
}, Wn, eu = [], tu = function(e) {
  if (Ka() && e) {
    e = !e.name && e.default || e;
    var t = e.name, i = Je(e), n = t && !i && e.init ? function() {
      this._props = [];
    } : e, s = {
      init: Ar,
      render: ro,
      add: eo,
      kill: Ug,
      modifier: Dg,
      rawVars: 0
    }, a = {
      targetTest: 0,
      get: 0,
      getSetter: no,
      aliases: {},
      register: 0
    };
    if (nr(), e !== n) {
      if (zt[t])
        return;
      $t(n, $t(gs(e, s), a)), Mn(n.prototype, Mn(s, gs(e, a))), zt[n.prop = t] = n, e.targetTest && (hs.push(n), $a[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
    }
    Oc(t, n), e.register && e.register(Ft, n, It);
  } else
    e && eu.push(e);
}, He = 255, _r = {
  aqua: [0, He, He],
  lime: [0, He, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, He],
  navy: [0, 0, 128],
  white: [He, He, He],
  olive: [128, 128, 0],
  yellow: [He, He, 0],
  orange: [He, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [He, 0, 0],
  pink: [He, 192, 203],
  cyan: [0, He, He],
  transparent: [He, He, He, 0]
}, fa = function(e, t, i) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < 0.5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * He + 0.5 | 0;
}, iu = function(e, t, i) {
  var n = e ? Ri(e) ? [e >> 16, e >> 8 & He, e & He] : 0 : _r.black, s, a, o, l, c, u, h, f, m, g;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), _r[e])
      n = _r[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + s + s + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & He, n & He, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & He, e & He];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = g = e.match(Ra), !t)
        l = +n[0] % 360 / 360, c = +n[1] / 100, u = +n[2] / 100, a = u <= 0.5 ? u * (c + 1) : u + c - u * c, s = u * 2 - a, n.length > 3 && (n[3] *= 1), n[0] = fa(l + 1 / 3, s, a), n[1] = fa(l, s, a), n[2] = fa(l - 1 / 3, s, a);
      else if (~e.indexOf("="))
        return n = e.match(Dc), i && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(Ra) || _r.transparent;
    n = n.map(Number);
  }
  return t && !g && (s = n[0] / He, a = n[1] / He, o = n[2] / He, h = Math.max(s, a, o), f = Math.min(s, a, o), u = (h + f) / 2, h === f ? l = c = 0 : (m = h - f, c = u > 0.5 ? m / (2 - h - f) : m / (h + f), l = h === s ? (a - o) / m + (a < o ? 6 : 0) : h === a ? (o - s) / m + 2 : (s - a) / m + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(c * 100 + 0.5), n[2] = ~~(u * 100 + 0.5)), i && n.length < 4 && (n[3] = 1), n;
}, nu = function(e) {
  var t = [], i = [], n = -1;
  return e.split(Wi).forEach(function(s) {
    var a = s.match(Vn) || [];
    t.push.apply(t, a), i.push(n += a.length + 1);
  }), t.c = i, t;
}, zl = function(e, t, i) {
  var n = "", s = (e + n).match(Wi), a = t ? "hsla(" : "rgba(", o = 0, l, c, u, h;
  if (!s)
    return e;
  if (s = s.map(function(f) {
    return (f = iu(f, t, 1)) && a + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), i && (u = nu(e), l = i.c, l.join(n) !== u.c.join(n)))
    for (c = e.replace(Wi, "1").split(Vn), h = c.length - 1; o < h; o++)
      n += c[o] + (~l.indexOf(o) ? s.shift() || a + "0,0,0,0)" : (u.length ? u : s.length ? s : i).shift());
  if (!c)
    for (c = e.split(Wi), h = c.length - 1; o < h; o++)
      n += c[o] + s[o];
  return n + c[h];
}, Wi = function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in _r)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
}(), vg = /hsl[a]?\(/, ru = function(e) {
  var t = e.join(" "), i;
  if (Wi.lastIndex = 0, Wi.test(t))
    return i = vg.test(t), e[1] = zl(e[1], i), e[0] = zl(e[0], i, nu(e[1])), !0;
}, Rr, Gt = function() {
  var r = Date.now, e = 500, t = 33, i = r(), n = i, s = 1e3 / 240, a = s, o = [], l, c, u, h, f, m, g = function _(p) {
    var d = r() - n, S = p === !0, v, y, E, R;
    if (d > e && (i += d - t), n += d, E = n - i, v = E - a, (v > 0 || S) && (R = ++h.frame, f = E - h.time * 1e3, h.time = E = E / 1e3, a += v + (v >= s ? 4 : s - v), y = 1), S || (l = c(_)), y)
      for (m = 0; m < o.length; m++)
        o[m](E, f, R, p);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(p) {
      return f / (1e3 / (p || 60));
    },
    wake: function() {
      Fc && (!Ca && Ka() && (Yt = Ca = window, ja = Yt.document || {}, Vt.gsap = Ft, (Yt.gsapVersions || (Yt.gsapVersions = [])).push(Ft.version), Nc(ps || Yt.GreenSockGlobals || !Yt.gsap && Yt || {}), u = Yt.requestAnimationFrame, eu.forEach(tu)), l && h.sleep(), c = u || function(p) {
        return setTimeout(p, a - h.time * 1e3 + 1 | 0);
      }, Rr = 1, g(2));
    },
    sleep: function() {
      (u ? Yt.cancelAnimationFrame : clearTimeout)(l), Rr = 0, c = Ar;
    },
    lagSmoothing: function(p, d) {
      e = p || 1 / 0, t = Math.min(d || 33, e);
    },
    fps: function(p) {
      s = 1e3 / (p || 240), a = h.time * 1e3 + s;
    },
    add: function(p, d, S) {
      var v = d ? function(y, E, R, A) {
        p(y, E, R, A), h.remove(v);
      } : p;
      return h.remove(p), o[S ? "unshift" : "push"](v), nr(), v;
    },
    remove: function(p, d) {
      ~(d = o.indexOf(p)) && o.splice(d, 1) && m >= d && m--;
    },
    _listeners: o
  }, h;
}(), nr = function() {
  return !Rr && Gt.wake();
}, Ne = {}, xg = /^[\d.\-M][\d.\-,\s]/, Mg = /["']/g, Sg = function(e) {
  for (var t = {}, i = e.substr(1, e.length - 3).split(":"), n = i[0], s = 1, a = i.length, o, l, c; s < a; s++)
    l = i[s], o = s !== a - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, o), t[n] = isNaN(c) ? c.replace(Mg, "").trim() : +c, n = l.substr(o + 1).trim();
  return t;
}, Eg = function(e) {
  var t = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", t);
  return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
}, yg = function(e) {
  var t = (e + "").split("("), i = Ne[t[0]];
  return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Sg(t[1])] : Eg(e).split(",").map(Hc)) : Ne._CE && xg.test(e) ? Ne._CE("", e) : i;
}, su = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, au = function r(e, t) {
  for (var i = e._first, n; i; )
    i instanceof Pt ? r(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? r(i.timeline, t) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = t)), i = i._next;
}, gn = function(e, t) {
  return e && (Je(e) ? e : Ne[e] || yg(e)) || t;
}, En = function(e, t, i, n) {
  i === void 0 && (i = function(l) {
    return 1 - t(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: i,
    easeInOut: n
  }, a;
  return Ut(e, function(o) {
    Ne[o] = Vt[o] = s, Ne[a = o.toLowerCase()] = i;
    for (var l in s)
      Ne[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ne[o + "." + l] = s[l];
  }), s;
}, ou = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, da = function r(e, t, i) {
  var n = t >= 1 ? t : 1, s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), a = s / wa * (Math.asin(1 / n) || 0), o = function(u) {
    return u === 1 ? 1 : n * Math.pow(2, -10 * u) * $_((u - a) * s) + 1;
  }, l = e === "out" ? o : e === "in" ? function(c) {
    return 1 - o(1 - c);
  } : ou(o);
  return s = wa / s, l.config = function(c, u) {
    return r(e, c, u);
  }, l;
}, pa = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var i = function(a) {
    return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
  }, n = e === "out" ? i : e === "in" ? function(s) {
    return 1 - i(1 - s);
  } : ou(i);
  return n.config = function(s) {
    return r(e, s);
  }, n;
};
Ut("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  En(r + ",Power" + (t - 1), e ? function(i) {
    return Math.pow(i, t);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, t);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2;
  });
});
Ne.Linear.easeNone = Ne.none = Ne.Linear.easeIn;
En("Elastic", da("in"), da("out"), da());
(function(r, e) {
  var t = 1 / e, i = 2 * t, n = 2.5 * t, s = function(o) {
    return o < t ? r * o * o : o < i ? r * Math.pow(o - 1.5 / e, 2) + 0.75 : o < n ? r * (o -= 2.25 / e) * o + 0.9375 : r * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  En("Bounce", function(a) {
    return 1 - s(1 - a);
  }, s);
})(7.5625, 2.75);
En("Expo", function(r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
En("Circ", function(r) {
  return -(Pc(1 - r * r) - 1);
});
En("Sine", function(r) {
  return r === 1 ? 1 : -Z_(r * K_) + 1;
});
En("Back", pa("in"), pa("out"), pa());
Ne.SteppedEase = Ne.steps = Vt.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var i = 1 / e, n = e + (t ? 0 : 1), s = t ? 1 : 0, a = 1 - ke;
    return function(o) {
      return ((n * Or(0, a, o) | 0) + s) * i;
    };
  }
};
er.ease = Ne["quad.out"];
Ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return Ja += r + "," + r + "Params,";
});
var lu = function(e, t) {
  this.id = j_++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : zc, this.set = t ? t.getSetter : no;
}, Cr = /* @__PURE__ */ function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ir(this, +t.duration, 1, 1), this.data = t.data, $e && (this._ctx = $e, $e.data.push(this)), Rr || Gt.wake();
  }
  var e = r.prototype;
  return e.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, e.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, ir(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(i, n) {
    if (nr(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Cs(this, i), !s._dp || s.parent || Wc(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && ci(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === ke || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Gc(this, i, n)), this;
  }, e.time = function(i, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Nl(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(i, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, e.progress = function(i, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Nl(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, e.iteration = function(i, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * s, n) : this._repeat ? tr(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(i) {
    if (!arguments.length)
      return this._rts === -ke ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? vs(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -ke ? 0 : this._rts, this.totalTime(Or(-Math.abs(this._delay), this._tDur, n), !0), Rs(this), rg(this);
  }, e.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (nr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ke && (this._tTime -= ke)))), this) : this._ps;
  }, e.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && ci(n, this, i - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(i) {
    return this._start + (Dt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(i) {
    var n = this.parent || this._dp;
    return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? vs(n.rawTime(i), this) : this._tTime : this._tTime;
  }, e.revert = function(i) {
    i === void 0 && (i = eg);
    var n = xt;
    return xt = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), xt = n, this;
  }, e.globalTime = function(i) {
    for (var n = this, s = arguments.length ? i : n.rawTime(); n; )
      s = n._start + s / (n._ts || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(i) : s;
  }, e.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Ol(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(i) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = i, Ol(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, e.seek = function(i, n) {
    return this.totalTime(qt(this, i), Dt(n));
  }, e.restart = function(i, n) {
    return this.play().totalTime(i ? -this._delay : 0, Dt(n));
  }, e.play = function(i, n) {
    return i != null && this.seek(i, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(i, n) {
    return i != null && this.seek(i || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(i, n) {
    return i != null && this.seek(i, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -ke : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ke, this;
  }, e.isActive = function() {
    var i = this.parent || this._dp, n = this._start, s;
    return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= n && s < this.endTime(!0) - ke);
  }, e.eventCallback = function(i, n, s) {
    var a = this.vars;
    return arguments.length > 1 ? (n ? (a[i] = n, s && (a[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = n)) : delete a[i], this) : a[i];
  }, e.then = function(i) {
    var n = this;
    return new Promise(function(s) {
      var a = Je(i) ? i : kc, o = function() {
        var c = n.then;
        n.then = null, Je(a) && (a = a(n)) && (a.then || a === n) && (n.then = c), s(a), n.then = c;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? o() : n._prom = o;
    });
  }, e.kill = function() {
    mr(this);
  }, r;
}();
$t(Cr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ke,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Pt = /* @__PURE__ */ function(r) {
  Cc(e, r);
  function e(i, n) {
    var s;
    return i === void 0 && (i = {}), s = r.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = Dt(i.sortChildren), Ke && ci(i.parent || Ke, yi(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && Xc(yi(s), i.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(n, s, a) {
    return Mr(0, arguments, this), this;
  }, t.from = function(n, s, a) {
    return Mr(1, arguments, this), this;
  }, t.fromTo = function(n, s, a, o) {
    return Mr(2, arguments, this), this;
  }, t.set = function(n, s, a) {
    return s.duration = 0, s.parent = this, xr(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new st(n, s, qt(this, a), 1), this;
  }, t.call = function(n, s, a) {
    return ci(this, st.delayedCall(0, n, s), a);
  }, t.staggerTo = function(n, s, a, o, l, c, u) {
    return a.duration = s, a.stagger = a.stagger || o, a.onComplete = c, a.onCompleteParams = u, a.parent = this, new st(n, a, qt(this, l)), this;
  }, t.staggerFrom = function(n, s, a, o, l, c, u) {
    return a.runBackwards = 1, xr(a).immediateRender = Dt(a.immediateRender), this.staggerTo(n, s, a, o, l, c, u);
  }, t.staggerFromTo = function(n, s, a, o, l, c, u, h) {
    return o.startAt = a, xr(o).immediateRender = Dt(o.immediateRender), this.staggerTo(n, s, o, l, c, u, h);
  }, t.render = function(n, s, a) {
    var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = n <= 0 ? 0 : ht(n), h = this._zTime < 0 != n < 0 && (this._initted || !c), f, m, g, _, p, d, S, v, y, E, R, A;
    if (this !== Ke && u > l && n >= 0 && (u = l), u !== this._tTime || a || h) {
      if (o !== this._time && c && (u += this._time - o, n += this._time - o), f = u, y = this._start, v = this._ts, d = !v, h && (c || (o = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (R = this._yoyo, p = c + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(p * 100 + n, s, a);
        if (f = ht(u % p), u === l ? (_ = this._repeat, f = c) : (_ = ~~(u / p), _ && _ === u / p && (f = c, _--), f > c && (f = c)), E = tr(this._tTime, p), !o && this._tTime && E !== _ && this._tTime - E * p - this._dur <= 0 && (E = _), R && _ & 1 && (f = c - f, A = 1), _ !== E && !this._lock) {
          var P = R && E & 1, x = P === (R && _ & 1);
          if (_ < E && (P = !P), o = P ? 0 : u % c ? c : u, this._lock = 1, this.render(o || (A ? 0 : ht(_ * p)), s, !c)._lock = 0, this._tTime = u, !s && this.parent && Zt(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1), o && o !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, x && (this._lock = 2, o = P ? c : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !d)
            return this;
          au(this, A);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (S = lg(this, ht(o), ht(f)), S && (u -= f - (f = S._start))), this._tTime = u, this._time = f, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, o = 0), !o && f && !s && !_ && (Zt(this, "onStart"), this._tTime !== u))
        return this;
      if (f >= o && n >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || f >= m._start) && m._ts && S !== m) {
            if (m.parent !== this)
              return this.render(n, s, a);
            if (m.render(m._ts > 0 ? (f - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (f - m._start) * m._ts, s, a), f !== this._time || !this._ts && !d) {
              S = 0, g && (u += this._zTime = -ke);
              break;
            }
          }
          m = g;
        }
      else {
        m = this._last;
        for (var b = n < 0 ? n : f; m; ) {
          if (g = m._prev, (m._act || b <= m._end) && m._ts && S !== m) {
            if (m.parent !== this)
              return this.render(n, s, a);
            if (m.render(m._ts > 0 ? (b - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (b - m._start) * m._ts, s, a || xt && (m._initted || m._startAt)), f !== this._time || !this._ts && !d) {
              S = 0, g && (u += this._zTime = b ? -ke : ke);
              break;
            }
          }
          m = g;
        }
      }
      if (S && !s && (this.pause(), S.render(f >= o ? 0 : -ke)._zTime = f >= o ? 1 : -1, this._ts))
        return this._start = y, Rs(this), this.render(n, s, a);
      this._onUpdate && !s && Zt(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && o) && (y === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((n || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Yi(this, 1), !s && !(n < 0 && !o) && (u || o || !l) && (Zt(this, u === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(n, s) {
    var a = this;
    if (Ri(s) || (s = qt(this, s, n)), !(n instanceof Cr)) {
      if (Mt(n))
        return n.forEach(function(o) {
          return a.add(o, s);
        }), this;
      if (ct(n))
        return this.addLabel(n, s);
      if (Je(n))
        n = st.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? ci(this, n, s) : this;
  }, t.getChildren = function(n, s, a, o) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = !0), o === void 0 && (o = -Kt);
    for (var l = [], c = this._first; c; )
      c._start >= o && (c instanceof st ? s && l.push(c) : (a && l.push(c), n && l.push.apply(l, c.getChildren(!0, s, a)))), c = c._next;
    return l;
  }, t.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
      if (s[a].vars.id === n)
        return s[a];
  }, t.remove = function(n) {
    return ct(n) ? this.removeLabel(n) : Je(n) ? this.killTweensOf(n) : (ws(this, n), n === this._recent && (this._recent = this._last), _n(this));
  }, t.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ht(Gt.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), r.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(n, s) {
    return this.labels[n] = qt(this, s), this;
  }, t.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, t.addPause = function(n, s, a) {
    var o = st.delayedCall(0, s || Ar, a);
    return o.data = "isPause", this._hasPause = 1, ci(this, o, qt(this, n));
  }, t.removePause = function(n) {
    var s = this._first;
    for (n = qt(this, n); s; )
      s._start === n && s.data === "isPause" && Yi(s), s = s._next;
  }, t.killTweensOf = function(n, s, a) {
    for (var o = this.getTweensOf(n, a), l = o.length; l--; )
      Oi !== o[l] && o[l].kill(n, s);
    return this;
  }, t.getTweensOf = function(n, s) {
    for (var a = [], o = jt(n), l = this._first, c = Ri(s), u; l; )
      l instanceof st ? tg(l._targets, o) && (c ? (!Oi || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && a.push(l) : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u), l = l._next;
    return a;
  }, t.tweenTo = function(n, s) {
    s = s || {};
    var a = this, o = qt(a, n), l = s, c = l.startAt, u = l.onStart, h = l.onStartParams, f = l.immediateRender, m, g = st.to(a, $t({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: s.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale()) || ke,
      onStart: function() {
        if (a.pause(), !m) {
          var p = s.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale());
          g._dur !== p && ir(g, p, 0, 1).render(g._time, !0, !0), m = 1;
        }
        u && u.apply(g, h || []);
      }
    }, s));
    return f ? g.render(0) : g;
  }, t.tweenFromTo = function(n, s, a) {
    return this.tweenTo(s, $t({
      startAt: {
        time: qt(this, n)
      }
    }, a));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(n) {
    return n === void 0 && (n = this._time), Bl(this, qt(this, n));
  }, t.previousLabel = function(n) {
    return n === void 0 && (n = this._time), Bl(this, qt(this, n), 1);
  }, t.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + ke);
  }, t.shiftChildren = function(n, s, a) {
    a === void 0 && (a = 0);
    for (var o = this._first, l = this.labels, c; o; )
      o._start >= a && (o._start += n, o._end += n), o = o._next;
    if (s)
      for (c in l)
        l[c] >= a && (l[c] += n);
    return _n(this);
  }, t.invalidate = function(n) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(n), s = s._next;
    return r.prototype.invalidate.call(this, n);
  }, t.clear = function(n) {
    n === void 0 && (n = !0);
    for (var s = this._first, a; s; )
      a = s._next, this.remove(s), s = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), _n(this);
  }, t.totalDuration = function(n) {
    var s = 0, a = this, o = a._last, l = Kt, c, u, h;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -n : n));
    if (a._dirty) {
      for (h = a.parent; o; )
        c = o._prev, o._dirty && o.totalDuration(), u = o._start, u > l && a._sort && o._ts && !a._lock ? (a._lock = 1, ci(a, o, u - o._delay, 1)._lock = 0) : l = u, u < 0 && o._ts && (s -= u, (!h && !a._dp || h && h.smoothChildTiming) && (a._start += u / a._ts, a._time -= u, a._tTime -= u), a.shiftChildren(-u, !1, -1 / 0), l = 0), o._end > s && o._ts && (s = o._end), o = c;
      ir(a, a === Ke && a._time > s ? a._time : s, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, e.updateRoot = function(n) {
    if (Ke._ts && (Gc(Ke, vs(n, Ke)), Bc = Gt.frame), Gt.frame >= Il) {
      Il += kt.autoSleep || 120;
      var s = Ke._first;
      if ((!s || !s._ts) && kt.autoSleep && Gt._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || Gt.sleep();
      }
    }
  }, e;
}(Cr);
$t(Pt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Tg = function(e, t, i, n, s, a, o) {
  var l = new It(this._pt, e, t, 0, 1, pu, null, s), c = 0, u = 0, h, f, m, g, _, p, d, S;
  for (l.b = i, l.e = n, i += "", n += "", (d = ~n.indexOf("random(")) && (n = wr(n)), a && (S = [i, n], a(S, e, t), i = S[0], n = S[1]), f = i.match(ua) || []; h = ua.exec(n); )
    g = h[0], _ = n.substring(c, h.index), m ? m = (m + 1) % 5 : _.substr(-5) === "rgba(" && (m = 1), g !== f[u++] && (p = parseFloat(f[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: _ || u === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: g.charAt(1) === "=" ? Yn(p, g) - p : parseFloat(g) - p,
      m: m && m < 4 ? Math.round : 0
    }, c = ua.lastIndex);
  return l.c = c < n.length ? n.substring(c, n.length) : "", l.fp = o, (Uc.test(n) || d) && (l.e = 0), this._pt = l, l;
}, eo = function(e, t, i, n, s, a, o, l, c, u) {
  Je(n) && (n = n(s || 0, e, a));
  var h = e[t], f = i !== "get" ? i : Je(h) ? c ? e[t.indexOf("set") || !Je(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : h, m = Je(h) ? c ? Cg : fu : io, g;
  if (ct(n) && (~n.indexOf("random(") && (n = wr(n)), n.charAt(1) === "=" && (g = Yn(f, n) + (vt(f) || 0), (g || g === 0) && (n = g))), !u || f !== n || Na)
    return !isNaN(f * n) && n !== "" ? (g = new It(this._pt, e, t, +f || 0, n - (f || 0), typeof h == "boolean" ? Lg : du, 0, m), c && (g.fp = c), o && g.modifier(o, this, e), this._pt = g) : (!h && !(t in e) && Za(t, n), Tg.call(this, e, t, f, n, m, l || kt.stringFilter, c));
}, bg = function(e, t, i, n, s) {
  if (Je(e) && (e = Sr(e, s, t, i, n)), !pi(e) || e.style && e.nodeType || Mt(e) || Lc(e))
    return ct(e) ? Sr(e, s, t, i, n) : e;
  var a = {}, o;
  for (o in e)
    a[o] = Sr(e[o], s, t, i, n);
  return a;
}, cu = function(e, t, i, n, s, a) {
  var o, l, c, u;
  if (zt[e] && (o = new zt[e]()).init(s, o.rawVars ? t[e] : bg(t[e], n, s, a, i), i, n, a) !== !1 && (i._pt = l = new It(i._pt, s, e, 0, 1, o.render, o, 0, o.priority), i !== Wn))
    for (c = i._ptLookup[i._targets.indexOf(s)], u = o._props.length; u--; )
      c[o._props[u]] = l;
  return o;
}, Oi, Na, to = function r(e, t, i) {
  var n = e.vars, s = n.ease, a = n.startAt, o = n.immediateRender, l = n.lazy, c = n.onUpdate, u = n.onUpdateParams, h = n.callbackScope, f = n.runBackwards, m = n.yoyoEase, g = n.keyframes, _ = n.autoRevert, p = e._dur, d = e._startAt, S = e._targets, v = e.parent, y = v && v.data === "nested" ? v.vars.targets : S, E = e._overwrite === "auto" && !qa, R = e.timeline, A, P, x, b, V, $, D, O, N, K, G, q, j;
  if (R && (!g || !s) && (s = "none"), e._ease = gn(s, er.ease), e._yEase = m ? su(gn(m === !0 ? s : m, er.ease)) : 0, m && e._yoyo && !e._repeat && (m = e._yEase, e._yEase = e._ease, e._ease = m), e._from = !R && !!n.runBackwards, !R || g && !n.stagger) {
    if (O = S[0] ? mn(S[0]).harness : 0, q = O && n[O.prop], A = gs(n, $a), d && (d._zTime < 0 && d.progress(1), t < 0 && f && o && !_ ? d.render(-1, !0) : d.revert(f && p ? us : Q_), d._lazy = 0), a) {
      if (Yi(e._startAt = st.set(S, $t({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !d && Dt(l),
        startAt: null,
        delay: 0,
        onUpdate: c,
        onUpdateParams: u,
        callbackScope: h,
        stagger: 0
      }, a))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (xt || !o && !_) && e._startAt.revert(us), o && p && t <= 0 && i <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (f && p && !d) {
      if (t && (o = !1), x = $t({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !d && Dt(l),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, A), q && (x[O.prop] = q), Yi(e._startAt = st.set(S, x)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (xt ? e._startAt.revert(us) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        r(e._startAt, ke, ke);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = p && Dt(l) || l && !p, P = 0; P < S.length; P++) {
      if (V = S[P], D = V._gsap || Qa(S)[P]._gsap, e._ptLookup[P] = K = {}, Pa[D.id] && Vi.length && _s(), G = y === S ? P : y.indexOf(V), O && (N = new O()).init(V, q || A, e, G, y) !== !1 && (e._pt = b = new It(e._pt, V, N.name, 0, 1, N.render, N, 0, N.priority), N._props.forEach(function(Z) {
        K[Z] = b;
      }), N.priority && ($ = 1)), !O || q)
        for (x in A)
          zt[x] && (N = cu(x, A, e, G, V, y)) ? N.priority && ($ = 1) : K[x] = b = eo.call(e, V, x, "get", A[x], G, y, 0, n.stringFilter);
      e._op && e._op[P] && e.kill(V, e._op[P]), E && e._pt && (Oi = e, Ke.killTweensOf(V, K, e.globalTime(t)), j = !e.parent, Oi = 0), e._pt && l && (Pa[D.id] = 1);
    }
    $ && mu(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !j, g && t <= 0 && R.render(Kt, !0, !0);
}, Ag = function(e, t, i, n, s, a, o) {
  var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, h, f;
  if (!l)
    for (l = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length; f--; ) {
      if (c = h[f][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return Na = 1, e.vars[t] = "+=0", to(e, o), Na = 0, 1;
      l.push(c);
    }
  for (f = l.length; f--; )
    u = l[f], c = u._pt || u, c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + a * c.c, c.c = i - c.s, u.e && (u.e = et(i) + vt(u.e)), u.b && (u.b = c.s + vt(u.b));
}, wg = function(e, t) {
  var i = e[0] ? mn(e[0]).harness : 0, n = i && i.aliases, s, a, o, l;
  if (!n)
    return t;
  s = Mn({}, t);
  for (a in n)
    if (a in s)
      for (l = n[a].split(","), o = l.length; o--; )
        s[l[o]] = s[a];
  return s;
}, Rg = function(e, t, i, n) {
  var s = t.ease || n || "power1.inOut", a, o;
  if (Mt(t))
    o = i[e] || (i[e] = []), t.forEach(function(l, c) {
      return o.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (a in t)
      o = i[a] || (i[a] = []), a === "ease" || o.push({
        t: parseFloat(e),
        v: t[a],
        e: s
      });
}, Sr = function(e, t, i, n, s) {
  return Je(e) ? e.call(t, i, n, s) : ct(e) && ~e.indexOf("random(") ? wr(e) : e;
}, uu = Ja + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", hu = {};
Ut(uu + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return hu[r] = 1;
});
var st = /* @__PURE__ */ function(r) {
  Cc(e, r);
  function e(i, n, s, a) {
    var o;
    typeof n == "number" && (s.duration = n, n = s, s = null), o = r.call(this, a ? n : xr(n)) || this;
    var l = o.vars, c = l.duration, u = l.delay, h = l.immediateRender, f = l.stagger, m = l.overwrite, g = l.keyframes, _ = l.defaults, p = l.scrollTrigger, d = l.yoyoEase, S = n.parent || Ke, v = (Mt(i) || Lc(i) ? Ri(i[0]) : "length" in n) ? [i] : jt(i), y, E, R, A, P, x, b, V;
    if (o._targets = v.length ? Qa(v) : ms("GSAP target " + i + " not found. https://greensock.com", !kt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = m, g || f || os(c) || os(u)) {
      if (n = o.vars, y = o.timeline = new Pt({
        data: "nested",
        defaults: _ || {},
        targets: S && S.data === "nested" ? S.vars.targets : v
      }), y.kill(), y.parent = y._dp = yi(o), y._start = 0, f || os(c) || os(u)) {
        if (A = v.length, b = f && jc(f), pi(f))
          for (P in f)
            ~uu.indexOf(P) && (V || (V = {}), V[P] = f[P]);
        for (E = 0; E < A; E++)
          R = gs(n, hu), R.stagger = 0, d && (R.yoyoEase = d), V && Mn(R, V), x = v[E], R.duration = +Sr(c, yi(o), E, x, v), R.delay = (+Sr(u, yi(o), E, x, v) || 0) - o._delay, !f && A === 1 && R.delay && (o._delay = u = R.delay, o._start += u, R.delay = 0), y.to(x, R, b ? b(E, x, v) : 0), y._ease = Ne.none;
        y.duration() ? c = u = 0 : o.timeline = 0;
      } else if (g) {
        xr($t(y.vars.defaults, {
          ease: "none"
        })), y._ease = gn(g.ease || n.ease || "none");
        var $ = 0, D, O, N;
        if (Mt(g))
          g.forEach(function(K) {
            return y.to(v, K, ">");
          }), y.duration();
        else {
          R = {};
          for (P in g)
            P === "ease" || P === "easeEach" || Rg(P, g[P], R, g.easeEach);
          for (P in R)
            for (D = R[P].sort(function(K, G) {
              return K.t - G.t;
            }), $ = 0, E = 0; E < D.length; E++)
              O = D[E], N = {
                ease: O.e,
                duration: (O.t - (E ? D[E - 1].t : 0)) / 100 * c
              }, N[P] = O.v, y.to(v, N, $), $ += N.duration;
          y.duration() < c && y.to({}, {
            duration: c - y.duration()
          });
        }
      }
      c || o.duration(c = y.duration());
    } else
      o.timeline = 0;
    return m === !0 && !qa && (Oi = yi(o), Ke.killTweensOf(v), Oi = 0), ci(S, yi(o), s), n.reversed && o.reverse(), n.paused && o.paused(!0), (h || !c && !g && o._start === ht(S._time) && Dt(h) && sg(yi(o)) && S.data !== "nested") && (o._tTime = -ke, o.render(Math.max(0, -u) || 0)), p && Xc(yi(o), p), o;
  }
  var t = e.prototype;
  return t.render = function(n, s, a) {
    var o = this._time, l = this._tDur, c = this._dur, u = n < 0, h = n > l - ke && !u ? l : n < ke ? 0 : n, f, m, g, _, p, d, S, v, y;
    if (!c)
      og(this, n, s, a);
    else if (h !== this._tTime || !n || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (f = h, v = this.timeline, this._repeat) {
        if (_ = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(_ * 100 + n, s, a);
        if (f = ht(h % _), h === l ? (g = this._repeat, f = c) : (g = ~~(h / _), g && g === h / _ && (f = c, g--), f > c && (f = c)), d = this._yoyo && g & 1, d && (y = this._yEase, f = c - f), p = tr(this._tTime, _), f === o && !a && this._initted)
          return this._tTime = h, this;
        g !== p && (v && this._yEase && au(v, d), this.vars.repeatRefresh && !d && !this._lock && (this._lock = a = 1, this.render(ht(_ * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (qc(this, u ? n : f, a, s, h))
          return this._tTime = 0, this;
        if (o !== this._time)
          return this;
        if (c !== this._dur)
          return this.render(n, s, a);
      }
      if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = S = (y || this._ease)(f / c), this._from && (this.ratio = S = 1 - S), f && !o && !s && !g && (Zt(this, "onStart"), this._tTime !== h))
        return this;
      for (m = this._pt; m; )
        m.r(S, m.d), m = m._next;
      v && v.render(n < 0 ? n : !f && d ? -ke : v._dur * v._ease(f / this._dur), s, a) || this._startAt && (this._zTime = n), this._onUpdate && !s && (u && La(this, n, s, a), Zt(this, "onUpdate")), this._repeat && g !== p && this.vars.onRepeat && !s && this.parent && Zt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && La(this, n, !0, !0), (n || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Yi(this, 1), !s && !(u && !o) && (h || o || d) && (Zt(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), r.prototype.invalidate.call(this, n);
  }, t.resetTo = function(n, s, a, o) {
    Rr || Gt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || to(this, l), c = this._ease(l / this._dur), Ag(this, n, s, a, o, c, l) ? this.resetTo(n, s, a, o) : (Cs(this, 0), this.parent || Vc(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? mr(this) : this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, Oi && Oi.vars.overwrite !== !0)._first || mr(this), this.parent && a !== this.timeline.totalDuration() && ir(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, l = n ? jt(n) : o, c = this._ptLookup, u = this._pt, h, f, m, g, _, p, d;
    if ((!s || s === "all") && ng(o, l))
      return s === "all" && (this._pt = 0), mr(this);
    for (h = this._op = this._op || [], s !== "all" && (ct(s) && (_ = {}, Ut(s, function(S) {
      return _[S] = 1;
    }), s = _), s = wg(o, s)), d = o.length; d--; )
      if (~l.indexOf(o[d])) {
        f = c[d], s === "all" ? (h[d] = s, g = f, m = {}) : (m = h[d] = h[d] || {}, g = s);
        for (_ in g)
          p = f && f[_], p && ((!("kill" in p.d) || p.d.kill(_) === !0) && ws(this, p, "_pt"), delete f[_]), m !== "all" && (m[_] = 1);
      }
    return this._initted && !this._pt && u && mr(this), this;
  }, e.to = function(n, s) {
    return new e(n, s, arguments[2]);
  }, e.from = function(n, s) {
    return Mr(1, arguments);
  }, e.delayedCall = function(n, s, a, o) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, e.fromTo = function(n, s, a) {
    return Mr(2, arguments);
  }, e.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(n, s);
  }, e.killTweensOf = function(n, s, a) {
    return Ke.killTweensOf(n, s, a);
  }, e;
}(Cr);
$t(st.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ut("staggerTo,staggerFrom,staggerFromTo", function(r) {
  st[r] = function() {
    var e = new Pt(), t = Ua.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var io = function(e, t, i) {
  return e[t] = i;
}, fu = function(e, t, i) {
  return e[t](i);
}, Cg = function(e, t, i, n) {
  return e[t](n.fp, i);
}, Pg = function(e, t, i) {
  return e.setAttribute(t, i);
}, no = function(e, t) {
  return Je(e[t]) ? fu : Ya(e[t]) && e.setAttribute ? Pg : io;
}, du = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Lg = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, pu = function(e, t) {
  var i = t._pt, n = "";
  if (!e && t.b)
    n = t.b;
  else if (e === 1 && t.e)
    n = t.e;
  else {
    for (; i; )
      n = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + n, i = i._next;
    n += t.c;
  }
  t.set(t.t, t.p, n, t);
}, ro = function(e, t) {
  for (var i = t._pt; i; )
    i.r(e, i.d), i = i._next;
}, Dg = function(e, t, i, n) {
  for (var s = this._pt, a; s; )
    a = s._next, s.p === n && s.modifier(e, t, i), s = a;
}, Ug = function(e) {
  for (var t = this._pt, i, n; t; )
    n = t._next, t.p === e && !t.op || t.op === e ? ws(this, t, "_pt") : t.dep || (i = 1), t = n;
  return !i;
}, Ig = function(e, t, i, n) {
  n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
}, mu = function(e) {
  for (var t = e._pt, i, n, s, a; t; ) {
    for (i = t._next, n = s; n && n.pr > t.pr; )
      n = n._next;
    (t._prev = n ? n._prev : a) ? t._prev._next = t : s = t, (t._next = n) ? n._prev = t : a = t, t = i;
  }
  e._pt = s;
}, It = /* @__PURE__ */ function() {
  function r(t, i, n, s, a, o, l, c, u) {
    this.t = i, this.s = s, this.c = a, this.p = n, this.r = o || du, this.d = l || this, this.set = c || io, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(i, n, s) {
    this.mSet = this.mSet || this.set, this.set = Ig, this.m = i, this.mt = s, this.tween = n;
  }, r;
}();
Ut(Ja + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return $a[r] = 1;
});
Vt.TweenMax = Vt.TweenLite = st;
Vt.TimelineLite = Vt.TimelineMax = Pt;
Ke = new Pt({
  sortChildren: !1,
  defaults: er,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
kt.stringFilter = ru;
var vn = [], fs = {}, Fg = [], Gl = 0, Ng = 0, ma = function(e) {
  return (fs[e] || Fg).map(function(t) {
    return t();
  });
}, Oa = function() {
  var e = Date.now(), t = [];
  e - Gl > 2 && (ma("matchMediaInit"), vn.forEach(function(i) {
    var n = i.queries, s = i.conditions, a, o, l, c;
    for (o in n)
      a = Yt.matchMedia(n[o]).matches, a && (l = 1), a !== s[o] && (s[o] = a, c = 1);
    c && (i.revert(), l && t.push(i));
  }), ma("matchMediaRevert"), t.forEach(function(i) {
    return i.onMatch(i);
  }), Gl = e, ma("matchMedia"));
}, _u = /* @__PURE__ */ function() {
  function r(t, i) {
    this.selector = i && Ia(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Ng++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(i, n, s) {
    Je(i) && (s = n, n = i, i = Je);
    var a = this, o = function() {
      var c = $e, u = a.selector, h;
      return c && c !== a && c.data.push(a), s && (a.selector = Ia(s)), $e = a, h = n.apply(a, arguments), Je(h) && a._r.push(h), $e = c, a.selector = u, a.isReverted = !1, h;
    };
    return a.last = o, i === Je ? o(a) : i ? a[i] = o : o;
  }, e.ignore = function(i) {
    var n = $e;
    $e = null, i(this), $e = n;
  }, e.getTweens = function() {
    var i = [];
    return this.data.forEach(function(n) {
      return n instanceof r ? i.push.apply(i, n.getTweens()) : n instanceof st && !(n.parent && n.parent.data === "nested") && i.push(n);
    }), i;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(i, n) {
    var s = this;
    if (i) {
      var a = this.getTweens();
      this.data.forEach(function(l) {
        l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      }), a.map(function(l) {
        return {
          g: l.globalTime(0),
          t: l
        };
      }).sort(function(l, c) {
        return c.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(i);
      }), this.data.forEach(function(l) {
        return !(l instanceof st) && l.revert && l.revert(i);
      }), this._r.forEach(function(l) {
        return l(i, s);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(l) {
        return l.kill && l.kill();
      });
    if (this.clear(), n)
      for (var o = vn.length; o--; )
        vn[o].id === this.id && vn.splice(o, 1);
  }, e.revert = function(i) {
    this.kill(i || {});
  }, r;
}(), Og = /* @__PURE__ */ function() {
  function r(t) {
    this.contexts = [], this.scope = t;
  }
  var e = r.prototype;
  return e.add = function(i, n, s) {
    pi(i) || (i = {
      matches: i
    });
    var a = new _u(0, s || this.scope), o = a.conditions = {}, l, c, u;
    $e && !a.selector && (a.selector = $e.selector), this.contexts.push(a), n = a.add("onMatch", n), a.queries = i;
    for (c in i)
      c === "all" ? u = 1 : (l = Yt.matchMedia(i[c]), l && (vn.indexOf(a) < 0 && vn.push(a), (o[c] = l.matches) && (u = 1), l.addListener ? l.addListener(Oa) : l.addEventListener("change", Oa)));
    return u && n(a), this;
  }, e.revert = function(i) {
    this.kill(i || {});
  }, e.kill = function(i) {
    this.contexts.forEach(function(n) {
      return n.kill(i, !0);
    });
  }, r;
}(), xs = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    t.forEach(function(n) {
      return tu(n);
    });
  },
  timeline: function(e) {
    return new Pt(e);
  },
  getTweensOf: function(e, t) {
    return Ke.getTweensOf(e, t);
  },
  getProperty: function(e, t, i, n) {
    ct(e) && (e = jt(e)[0]);
    var s = mn(e || {}).get, a = i ? kc : Hc;
    return i === "native" && (i = ""), e && (t ? a((zt[t] && zt[t].get || s)(e, t, i, n)) : function(o, l, c) {
      return a((zt[o] && zt[o].get || s)(e, o, l, c));
    });
  },
  quickSetter: function(e, t, i) {
    if (e = jt(e), e.length > 1) {
      var n = e.map(function(u) {
        return Ft.quickSetter(u, t, i);
      }), s = n.length;
      return function(u) {
        for (var h = s; h--; )
          n[h](u);
      };
    }
    e = e[0] || {};
    var a = zt[t], o = mn(e), l = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(u) {
      var h = new a();
      Wn._pt = 0, h.init(e, i ? u + i : u, Wn, 0, [e]), h.render(1, h), Wn._pt && ro(1, Wn);
    } : o.set(e, l);
    return a ? c : function(u) {
      return c(e, l, i ? u + i : u, o, 1);
    };
  },
  quickTo: function(e, t, i) {
    var n, s = Ft.to(e, Mn((n = {}, n[t] = "+=0.1", n.paused = !0, n), i || {})), a = function(l, c, u) {
      return s.resetTo(t, l, c, u);
    };
    return a.tween = s, a;
  },
  isTweening: function(e) {
    return Ke.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = gn(e.ease, er.ease)), Fl(er, e || {});
  },
  config: function(e) {
    return Fl(kt, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, i = e.effect, n = e.plugins, s = e.defaults, a = e.extendTimeline;
    (n || "").split(",").forEach(function(o) {
      return o && !zt[o] && !Vt[o] && ms(t + " effect requires " + o + " plugin.");
    }), ha[t] = function(o, l, c) {
      return i(jt(o), $t(l || {}, s), c);
    }, a && (Pt.prototype[t] = function(o, l, c) {
      return this.add(ha[t](o, pi(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    Ne[e] = gn(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? gn(e, t) : Ne;
  },
  getById: function(e) {
    return Ke.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var i = new Pt(e), n, s;
    for (i.smoothChildTiming = Dt(e.smoothChildTiming), Ke.remove(i), i._dp = 0, i._time = i._tTime = Ke._time, n = Ke._first; n; )
      s = n._next, (t || !(!n._dur && n instanceof st && n.vars.onComplete === n._targets[0])) && ci(i, n, n._start - n._delay), n = s;
    return ci(Ke, i, 0), i;
  },
  context: function(e, t) {
    return e ? new _u(e, t) : $e;
  },
  matchMedia: function(e) {
    return new Og(e);
  },
  matchMediaRefresh: function() {
    return vn.forEach(function(e) {
      var t = e.conditions, i, n;
      for (n in t)
        t[n] && (t[n] = !1, i = 1);
      i && e.revert();
    }) || Oa();
  },
  addEventListener: function(e, t) {
    var i = fs[e] || (fs[e] = []);
    ~i.indexOf(t) || i.push(t);
  },
  removeEventListener: function(e, t) {
    var i = fs[e], n = i && i.indexOf(t);
    n >= 0 && i.splice(n, 1);
  },
  utils: {
    wrap: mg,
    wrapYoyo: _g,
    distribute: jc,
    random: $c,
    snap: Zc,
    normalize: pg,
    getUnit: vt,
    clamp: ug,
    splitColor: iu,
    toArray: jt,
    selector: Ia,
    mapRange: Qc,
    pipe: fg,
    unitize: dg,
    interpolate: gg,
    shuffle: Kc
  },
  install: Nc,
  effects: ha,
  ticker: Gt,
  updateRoot: Pt.updateRoot,
  plugins: zt,
  globalTimeline: Ke,
  core: {
    PropTween: It,
    globals: Oc,
    Tween: st,
    Timeline: Pt,
    Animation: Cr,
    getCache: mn,
    _removeLinkedListItem: ws,
    reverting: function() {
      return xt;
    },
    context: function(e) {
      return e && $e && ($e.data.push(e), e._ctx = $e), $e;
    },
    suppressOverwrites: function(e) {
      return qa = e;
    }
  }
};
Ut("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return xs[r] = st[r];
});
Gt.add(Pt.updateRoot);
Wn = xs.to({}, {
  duration: 0
});
var Bg = function(e, t) {
  for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
    i = i._next;
  return i;
}, zg = function(e, t) {
  var i = e._targets, n, s, a;
  for (n in t)
    for (s = i.length; s--; )
      a = e._ptLookup[s][n], a && (a = a.d) && (a._pt && (a = Bg(a, n)), a && a.modifier && a.modifier(t[n], e, i[s], n));
}, _a = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, a) {
      a._onInit = function(o) {
        var l, c;
        if (ct(s) && (l = {}, Ut(s, function(u) {
          return l[u] = 1;
        }), s = l), t) {
          l = {};
          for (c in s)
            l[c] = t(s[c]);
          s = l;
        }
        zg(o, s);
      };
    }
  };
}, Ft = xs.registerPlugin({
  name: "attr",
  init: function(e, t, i, n, s) {
    var a, o, l;
    this.tween = i;
    for (a in t)
      l = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (l || 0) + "", t[a], n, s, 0, 0, a), o.op = a, o.b = l, this._props.push(a);
  },
  render: function(e, t) {
    for (var i = t._pt; i; )
      xt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var i = t.length; i--; )
      this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
  }
}, _a("roundProps", Fa), _a("modifiers"), _a("snap", Zc)) || xs;
st.version = Pt.version = Ft.version = "3.12.2";
Fc = 1;
Ka() && nr();
Ne.Power0;
Ne.Power1;
Ne.Power2;
Ne.Power3;
Ne.Power4;
Ne.Linear;
Ne.Quad;
Ne.Cubic;
Ne.Quart;
Ne.Quint;
Ne.Strong;
Ne.Elastic;
Ne.Back;
Ne.SteppedEase;
Ne.Bounce;
Ne.Sine;
Ne.Expo;
Ne.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Hl, Bi, Kn, so, cn, kl, ao, Gg = function() {
  return typeof window < "u";
}, Ci = {}, on = 180 / Math.PI, jn = Math.PI / 180, zn = Math.atan2, Vl = 1e8, oo = /([A-Z])/g, Hg = /(left|right|width|margin|padding|x)/i, kg = /[\s,\(]\S/, ui = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ba = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Vg = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Wg = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Xg = function(e, t) {
  var i = t.s + t.c * e;
  t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
}, gu = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, vu = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, qg = function(e, t, i) {
  return e.style[t] = i;
}, Yg = function(e, t, i) {
  return e.style.setProperty(t, i);
}, Kg = function(e, t, i) {
  return e._gsap[t] = i;
}, jg = function(e, t, i) {
  return e._gsap.scaleX = e._gsap.scaleY = i;
}, Zg = function(e, t, i, n, s) {
  var a = e._gsap;
  a.scaleX = a.scaleY = i, a.renderTransform(s, a);
}, $g = function(e, t, i, n, s) {
  var a = e._gsap;
  a[t] = i, a.renderTransform(s, a);
}, je = "transform", ai = je + "Origin", Jg = function r(e, t) {
  var i = this, n = this.target, s = n.style;
  if (e in Ci && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = ui[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return i.tfm[a] = Ti(n, a);
      }) : this.tfm[e] = n._gsap.x ? n._gsap[e] : Ti(n, e);
    else
      return ui.transform.split(",").forEach(function(a) {
        return r.call(i, a, t);
      });
    if (this.props.indexOf(je) >= 0)
      return;
    n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(ai, t, "")), e = je;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, xu = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Qg = function() {
  var e = this.props, t = this.target, i = t.style, n = t._gsap, s, a;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? t[e[s]] = e[s + 2] : e[s + 2] ? i[e[s]] = e[s + 2] : i.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(oo, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      n[a] = this.tfm[a];
    n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = ao(), (!s || !s.isStart) && !i[je] && (xu(i), n.uncache = 1);
  }
}, Mu = function(e, t) {
  var i = {
    target: e,
    props: [],
    revert: Qg,
    save: Jg
  };
  return e._gsap || Ft.core.getCache(e), t && t.split(",").forEach(function(n) {
    return i.save(n);
  }), i;
}, Su, za = function(e, t) {
  var i = Bi.createElementNS ? Bi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Bi.createElement(e);
  return i.style ? i : Bi.createElement(e);
}, fi = function r(e, t, i) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(oo, "-$1").toLowerCase()) || n.getPropertyValue(t) || !i && r(e, rr(t) || t, 1) || "";
}, Wl = "O,Moz,ms,Ms,Webkit".split(","), rr = function(e, t, i) {
  var n = t || cn, s = n.style, a = 5;
  if (e in s && !i)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(Wl[a] + e in s); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Wl[a] : "") + e;
}, Ga = function() {
  Gg() && window.document && (Hl = window, Bi = Hl.document, Kn = Bi.documentElement, cn = za("div") || {
    style: {}
  }, za("div"), je = rr(je), ai = je + "Origin", cn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Su = !!rr("perspective"), ao = Ft.core.reverting, so = 1);
}, ga = function r(e) {
  var t = za("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, s = this.style.cssText, a;
  if (Kn.appendChild(t), t.appendChild(this), this.style.display = "block", e)
    try {
      a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r;
    } catch {
    }
  else
    this._gsapBBox && (a = this._gsapBBox());
  return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Kn.removeChild(t), this.style.cssText = s, a;
}, Xl = function(e, t) {
  for (var i = t.length; i--; )
    if (e.hasAttribute(t[i]))
      return e.getAttribute(t[i]);
}, Eu = function(e) {
  var t;
  try {
    t = e.getBBox();
  } catch {
    t = ga.call(e, !0);
  }
  return t && (t.width || t.height) || e.getBBox === ga || (t = ga.call(e, !0)), t && !t.width && !t.x && !t.y ? {
    x: +Xl(e, ["x", "cx", "x1"]) || 0,
    y: +Xl(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, yu = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Eu(e));
}, Pr = function(e, t) {
  if (t) {
    var i = e.style;
    t in Ci && t !== ai && (t = je), i.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(t.replace(oo, "-$1").toLowerCase())) : i.removeAttribute(t);
  }
}, zi = function(e, t, i, n, s, a) {
  var o = new It(e._pt, t, i, 0, 1, a ? vu : gu);
  return e._pt = o, o.b = n, o.e = s, e._props.push(i), o;
}, ql = {
  deg: 1,
  rad: 1,
  turn: 1
}, e0 = {
  grid: 1,
  flex: 1
}, Ki = function r(e, t, i, n) {
  var s = parseFloat(i) || 0, a = (i + "").trim().substr((s + "").length) || "px", o = cn.style, l = Hg.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, f = n === "px", m = n === "%", g, _, p, d;
  return n === a || !s || ql[n] || ql[a] ? s : (a !== "px" && !f && (s = r(e, t, i, "px")), d = e.getCTM && yu(e), (m || a === "%") && (Ci[t] || ~t.indexOf("adius")) ? (g = d ? e.getBBox()[l ? "width" : "height"] : e[u], et(m ? s / g * h : s / 100 * g)) : (o[l ? "width" : "height"] = h + (f ? a : n), _ = ~t.indexOf("adius") || n === "em" && e.appendChild && !c ? e : e.parentNode, d && (_ = (e.ownerSVGElement || {}).parentNode), (!_ || _ === Bi || !_.appendChild) && (_ = Bi.body), p = _._gsap, p && m && p.width && l && p.time === Gt.time && !p.uncache ? et(s / p.width * h) : ((m || a === "%") && !e0[fi(_, "display")] && (o.position = fi(e, "position")), _ === e && (o.position = "static"), _.appendChild(cn), g = cn[u], _.removeChild(cn), o.position = "absolute", l && m && (p = mn(_), p.time = Gt.time, p.width = _[u]), et(f ? g * s / h : g && s ? h / g * s : 0))));
}, Ti = function(e, t, i, n) {
  var s;
  return so || Ga(), t in ui && t !== "transform" && (t = ui[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ci[t] && t !== "transform" ? (s = Dr(e, n), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Ss(fi(e, ai)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = Ms[t] && Ms[t](e, t, i) || fi(e, t) || zc(e, t) || (t === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? Ki(e, t, s, i) + i : s;
}, t0 = function(e, t, i, n) {
  if (!i || i === "none") {
    var s = rr(t, e, 1), a = s && fi(e, s, 1);
    a && a !== i ? (t = s, i = a) : t === "borderColor" && (i = fi(e, "borderTopColor"));
  }
  var o = new It(this._pt, e.style, t, 0, 1, pu), l = 0, c = 0, u, h, f, m, g, _, p, d, S, v, y, E;
  if (o.b = i, o.e = n, i += "", n += "", n === "auto" && (e.style[t] = n, n = fi(e, t) || n, e.style[t] = i), u = [i, n], ru(u), i = u[0], n = u[1], f = i.match(Vn) || [], E = n.match(Vn) || [], E.length) {
    for (; h = Vn.exec(n); )
      p = h[0], S = n.substring(l, h.index), g ? g = (g + 1) % 5 : (S.substr(-5) === "rgba(" || S.substr(-5) === "hsla(") && (g = 1), p !== (_ = f[c++] || "") && (m = parseFloat(_) || 0, y = _.substr((m + "").length), p.charAt(1) === "=" && (p = Yn(m, p) + y), d = parseFloat(p), v = p.substr((d + "").length), l = Vn.lastIndex - v.length, v || (v = v || kt.units[t] || y, l === n.length && (n += v, o.e += v)), y !== v && (m = Ki(e, t, _, v) || 0), o._pt = {
        _next: o._pt,
        p: S || c === 1 ? S : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: m,
        c: d - m,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    o.r = t === "display" && n === "none" ? vu : gu;
  return Uc.test(n) && (o.e = 0), this._pt = o, o;
}, Yl = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, i0 = function(e) {
  var t = e.split(" "), i = t[0], n = t[1] || "50%";
  return (i === "top" || i === "bottom" || n === "left" || n === "right") && (e = i, i = n, n = e), t[0] = Yl[i] || i, t[1] = Yl[n] || n, t.join(" ");
}, n0 = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var i = t.t, n = i.style, s = t.u, a = i._gsap, o, l, c;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), c = s.length; --c > -1; )
        o = s[c], Ci[o] && (l = 1, o = o === "transformOrigin" ? ai : je), Pr(i, o);
    l && (Pr(i, je), a && (a.svg && i.removeAttribute("transform"), Dr(i, 1), a.uncache = 1, xu(n)));
  }
}, Ms = {
  clearProps: function(e, t, i, n, s) {
    if (s.data !== "isFromStart") {
      var a = e._pt = new It(e._pt, t, i, 0, 0, n0);
      return a.u = n, a.pr = -10, a.tween = s, e._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Lr = [1, 0, 0, 1, 0, 0], Tu = {}, bu = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Kl = function(e) {
  var t = fi(e, je);
  return bu(t) ? Lr : t.substr(7).match(Dc).map(et);
}, lo = function(e, t) {
  var i = e._gsap || mn(e), n = e.style, s = Kl(e), a, o, l, c;
  return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Lr : s) : (s === Lr && !e.offsetParent && e !== Kn && !i.svg && (l = n.display, n.display = "block", a = e.parentNode, (!a || !e.offsetParent) && (c = 1, o = e.nextElementSibling, Kn.appendChild(e)), s = Kl(e), l ? n.display = l : Pr(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Kn.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Ha = function(e, t, i, n, s, a) {
  var o = e._gsap, l = s || lo(e, !0), c = o.xOrigin || 0, u = o.yOrigin || 0, h = o.xOffset || 0, f = o.yOffset || 0, m = l[0], g = l[1], _ = l[2], p = l[3], d = l[4], S = l[5], v = t.split(" "), y = parseFloat(v[0]) || 0, E = parseFloat(v[1]) || 0, R, A, P, x;
  i ? l !== Lr && (A = m * p - g * _) && (P = y * (p / A) + E * (-_ / A) + (_ * S - p * d) / A, x = y * (-g / A) + E * (m / A) - (m * S - g * d) / A, y = P, E = x) : (R = Eu(e), y = R.x + (~v[0].indexOf("%") ? y / 100 * R.width : y), E = R.y + (~(v[1] || v[0]).indexOf("%") ? E / 100 * R.height : E)), n || n !== !1 && o.smooth ? (d = y - c, S = E - u, o.xOffset = h + (d * m + S * _) - d, o.yOffset = f + (d * g + S * p) - S) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = E, o.smooth = !!n, o.origin = t, o.originIsAbsolute = !!i, e.style[ai] = "0px 0px", a && (zi(a, o, "xOrigin", c, y), zi(a, o, "yOrigin", u, E), zi(a, o, "xOffset", h, o.xOffset), zi(a, o, "yOffset", f, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + E);
}, Dr = function(e, t) {
  var i = e._gsap || new lu(e);
  if ("x" in i && !t && !i.uncache)
    return i;
  var n = e.style, s = i.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(e), c = fi(e, ai) || "0", u, h, f, m, g, _, p, d, S, v, y, E, R, A, P, x, b, V, $, D, O, N, K, G, q, j, Z, F, Y, ae, ne, se;
  return u = h = f = _ = p = d = S = v = y = 0, m = g = 1, i.svg = !!(e.getCTM && yu(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[je] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[je] !== "none" ? l[je] : "")), n.scale = n.rotate = n.translate = "none"), A = lo(e, i.svg), i.svg && (i.uncache ? (q = e.getBBox(), c = i.xOrigin - q.x + "px " + (i.yOrigin - q.y) + "px", G = "") : G = !t && e.getAttribute("data-svg-origin"), Ha(e, G || c, !!G || i.originIsAbsolute, i.smooth !== !1, A)), E = i.xOrigin || 0, R = i.yOrigin || 0, A !== Lr && (V = A[0], $ = A[1], D = A[2], O = A[3], u = N = A[4], h = K = A[5], A.length === 6 ? (m = Math.sqrt(V * V + $ * $), g = Math.sqrt(O * O + D * D), _ = V || $ ? zn($, V) * on : 0, S = D || O ? zn(D, O) * on + _ : 0, S && (g *= Math.abs(Math.cos(S * jn))), i.svg && (u -= E - (E * V + R * D), h -= R - (E * $ + R * O))) : (se = A[6], ae = A[7], Z = A[8], F = A[9], Y = A[10], ne = A[11], u = A[12], h = A[13], f = A[14], P = zn(se, Y), p = P * on, P && (x = Math.cos(-P), b = Math.sin(-P), G = N * x + Z * b, q = K * x + F * b, j = se * x + Y * b, Z = N * -b + Z * x, F = K * -b + F * x, Y = se * -b + Y * x, ne = ae * -b + ne * x, N = G, K = q, se = j), P = zn(-D, Y), d = P * on, P && (x = Math.cos(-P), b = Math.sin(-P), G = V * x - Z * b, q = $ * x - F * b, j = D * x - Y * b, ne = O * b + ne * x, V = G, $ = q, D = j), P = zn($, V), _ = P * on, P && (x = Math.cos(P), b = Math.sin(P), G = V * x + $ * b, q = N * x + K * b, $ = $ * x - V * b, K = K * x - N * b, V = G, N = q), p && Math.abs(p) + Math.abs(_) > 359.9 && (p = _ = 0, d = 180 - d), m = et(Math.sqrt(V * V + $ * $ + D * D)), g = et(Math.sqrt(K * K + se * se)), P = zn(N, K), S = Math.abs(P) > 2e-4 ? P * on : 0, y = ne ? 1 / (ne < 0 ? -ne : ne) : 0), i.svg && (G = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !bu(fi(e, je)), G && e.setAttribute("transform", G))), Math.abs(S) > 90 && Math.abs(S) < 270 && (s ? (m *= -1, S += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (g *= -1, S += S <= 0 ? 180 : -180)), t = t || i.uncache, i.x = u - ((i.xPercent = u && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + a, i.y = h - ((i.yPercent = h && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + a, i.z = f + a, i.scaleX = et(m), i.scaleY = et(g), i.rotation = et(_) + o, i.rotationX = et(p) + o, i.rotationY = et(d) + o, i.skewX = S + o, i.skewY = v + o, i.transformPerspective = y + a, (i.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (n[ai] = Ss(c)), i.xOffset = i.yOffset = 0, i.force3D = kt.force3D, i.renderTransform = i.svg ? s0 : Su ? Au : r0, i.uncache = 0, i;
}, Ss = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, va = function(e, t, i) {
  var n = vt(t);
  return et(parseFloat(t) + parseFloat(Ki(e, "x", i + "px", n))) + n;
}, r0 = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Au(e, t);
}, nn = "0deg", dr = "0px", rn = ") ", Au = function(e, t) {
  var i = t || this, n = i.xPercent, s = i.yPercent, a = i.x, o = i.y, l = i.z, c = i.rotation, u = i.rotationY, h = i.rotationX, f = i.skewX, m = i.skewY, g = i.scaleX, _ = i.scaleY, p = i.transformPerspective, d = i.force3D, S = i.target, v = i.zOrigin, y = "", E = d === "auto" && e && e !== 1 || d === !0;
  if (v && (h !== nn || u !== nn)) {
    var R = parseFloat(u) * jn, A = Math.sin(R), P = Math.cos(R), x;
    R = parseFloat(h) * jn, x = Math.cos(R), a = va(S, a, A * x * -v), o = va(S, o, -Math.sin(R) * -v), l = va(S, l, P * x * -v + v);
  }
  p !== dr && (y += "perspective(" + p + rn), (n || s) && (y += "translate(" + n + "%, " + s + "%) "), (E || a !== dr || o !== dr || l !== dr) && (y += l !== dr || E ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + rn), c !== nn && (y += "rotate(" + c + rn), u !== nn && (y += "rotateY(" + u + rn), h !== nn && (y += "rotateX(" + h + rn), (f !== nn || m !== nn) && (y += "skew(" + f + ", " + m + rn), (g !== 1 || _ !== 1) && (y += "scale(" + g + ", " + _ + rn), S.style[je] = y || "translate(0, 0)";
}, s0 = function(e, t) {
  var i = t || this, n = i.xPercent, s = i.yPercent, a = i.x, o = i.y, l = i.rotation, c = i.skewX, u = i.skewY, h = i.scaleX, f = i.scaleY, m = i.target, g = i.xOrigin, _ = i.yOrigin, p = i.xOffset, d = i.yOffset, S = i.forceCSS, v = parseFloat(a), y = parseFloat(o), E, R, A, P, x;
  l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= jn, c *= jn, E = Math.cos(l) * h, R = Math.sin(l) * h, A = Math.sin(l - c) * -f, P = Math.cos(l - c) * f, c && (u *= jn, x = Math.tan(c - u), x = Math.sqrt(1 + x * x), A *= x, P *= x, u && (x = Math.tan(u), x = Math.sqrt(1 + x * x), E *= x, R *= x)), E = et(E), R = et(R), A = et(A), P = et(P)) : (E = h, P = f, R = A = 0), (v && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (v = Ki(m, "x", a, "px"), y = Ki(m, "y", o, "px")), (g || _ || p || d) && (v = et(v + g - (g * E + _ * A) + p), y = et(y + _ - (g * R + _ * P) + d)), (n || s) && (x = m.getBBox(), v = et(v + n / 100 * x.width), y = et(y + s / 100 * x.height)), x = "matrix(" + E + "," + R + "," + A + "," + P + "," + v + "," + y + ")", m.setAttribute("transform", x), S && (m.style[je] = x);
}, a0 = function(e, t, i, n, s) {
  var a = 360, o = ct(s), l = parseFloat(s) * (o && ~s.indexOf("rad") ? on : 1), c = l - n, u = n + c + "deg", h, f;
  return o && (h = s.split("_")[1], h === "short" && (c %= a, c !== c % (a / 2) && (c += c < 0 ? a : -a)), h === "cw" && c < 0 ? c = (c + a * Vl) % a - ~~(c / a) * a : h === "ccw" && c > 0 && (c = (c - a * Vl) % a - ~~(c / a) * a)), e._pt = f = new It(e._pt, t, i, n, c, Vg), f.e = u, f.u = "deg", e._props.push(i), f;
}, jl = function(e, t) {
  for (var i in t)
    e[i] = t[i];
  return e;
}, o0 = function(e, t, i) {
  var n = jl({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, o, l, c, u, h, f, m, g;
  n.svg ? (c = i.getAttribute("transform"), i.setAttribute("transform", ""), a[je] = t, o = Dr(i, 1), Pr(i, je), i.setAttribute("transform", c)) : (c = getComputedStyle(i)[je], a[je] = t, o = Dr(i, 1), a[je] = c);
  for (l in Ci)
    c = n[l], u = o[l], c !== u && s.indexOf(l) < 0 && (m = vt(c), g = vt(u), h = m !== g ? Ki(i, l, c, g) : parseFloat(c), f = parseFloat(u), e._pt = new It(e._pt, o, l, h, f - h, Ba), e._pt.u = g || 0, e._props.push(l));
  jl(o, n);
};
Ut("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", i = "Right", n = "Bottom", s = "Left", a = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function(o) {
    return e < 2 ? r + o : "border" + o + r;
  });
  Ms[e > 1 ? "border" + r : r] = function(o, l, c, u, h) {
    var f, m;
    if (arguments.length < 4)
      return f = a.map(function(g) {
        return Ti(o, g, c);
      }), m = f.join(" "), m.split(f[0]).length === 5 ? f[0] : m;
    f = (u + "").split(" "), m = {}, a.forEach(function(g, _) {
      return m[g] = f[_] = f[_] || f[(_ - 1) / 2 | 0];
    }), o.init(l, m, h);
  };
});
var wu = {
  name: "css",
  register: Ga,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, i, n, s) {
    var a = this._props, o = e.style, l = i.vars.startAt, c, u, h, f, m, g, _, p, d, S, v, y, E, R, A, P;
    so || Ga(), this.styles = this.styles || Mu(e), P = this.styles.props, this.tween = i;
    for (_ in t)
      if (_ !== "autoRound" && (u = t[_], !(zt[_] && cu(_, t, i, n, e, s)))) {
        if (m = typeof u, g = Ms[_], m === "function" && (u = u.call(i, n, e, s), m = typeof u), m === "string" && ~u.indexOf("random(") && (u = wr(u)), g)
          g(this, e, _, u, i) && (A = 1);
        else if (_.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(_) + "").trim(), u += "", Wi.lastIndex = 0, Wi.test(c) || (p = vt(c), d = vt(u)), d ? p !== d && (c = Ki(e, _, c, d) + d) : p && (u += p), this.add(o, "setProperty", c, u, n, s, 0, 0, _), a.push(_), P.push(_, 0, o[_]);
        else if (m !== "undefined") {
          if (l && _ in l ? (c = typeof l[_] == "function" ? l[_].call(i, n, e, s) : l[_], ct(c) && ~c.indexOf("random(") && (c = wr(c)), vt(c + "") || (c += kt.units[_] || vt(Ti(e, _)) || ""), (c + "").charAt(1) === "=" && (c = Ti(e, _))) : c = Ti(e, _), f = parseFloat(c), S = m === "string" && u.charAt(1) === "=" && u.substr(0, 2), S && (u = u.substr(2)), h = parseFloat(u), _ in ui && (_ === "autoAlpha" && (f === 1 && Ti(e, "visibility") === "hidden" && h && (f = 0), P.push("visibility", 0, o.visibility), zi(this, o, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), _ !== "scale" && _ !== "transform" && (_ = ui[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), v = _ in Ci, v) {
            if (this.styles.save(_), y || (E = e._gsap, E.renderTransform && !t.parseTransform || Dr(e, t.parseTransform), R = t.smoothOrigin !== !1 && E.smooth, y = this._pt = new It(this._pt, o, je, 0, 1, E.renderTransform, E, 0, -1), y.dep = 1), _ === "scale")
              this._pt = new It(this._pt, E, "scaleY", E.scaleY, (S ? Yn(E.scaleY, S + h) : h) - E.scaleY || 0, Ba), this._pt.u = 0, a.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              P.push(ai, 0, o[ai]), u = i0(u), E.svg ? Ha(e, u, 0, R, 0, this) : (d = parseFloat(u.split(" ")[2]) || 0, d !== E.zOrigin && zi(this, E, "zOrigin", E.zOrigin, d), zi(this, o, _, Ss(c), Ss(u)));
              continue;
            } else if (_ === "svgOrigin") {
              Ha(e, u, 1, R, 0, this);
              continue;
            } else if (_ in Tu) {
              a0(this, E, _, f, S ? Yn(f, S + u) : u);
              continue;
            } else if (_ === "smoothOrigin") {
              zi(this, E, "smooth", E.smooth, u);
              continue;
            } else if (_ === "force3D") {
              E[_] = u;
              continue;
            } else if (_ === "transform") {
              o0(this, u, e);
              continue;
            }
          } else
            _ in o || (_ = rr(_) || _);
          if (v || (h || h === 0) && (f || f === 0) && !kg.test(u) && _ in o)
            p = (c + "").substr((f + "").length), h || (h = 0), d = vt(u) || (_ in kt.units ? kt.units[_] : p), p !== d && (f = Ki(e, _, c, d)), this._pt = new It(this._pt, v ? E : o, _, f, (S ? Yn(f, S + h) : h) - f, !v && (d === "px" || _ === "zIndex") && t.autoRound !== !1 ? Xg : Ba), this._pt.u = d || 0, p !== d && d !== "%" && (this._pt.b = c, this._pt.r = Wg);
          else if (_ in o)
            t0.call(this, e, _, c, S ? S + u : u);
          else if (_ in e)
            this.add(e, _, c || e[_], S ? S + u : u, n, s);
          else if (_ !== "parseTransform") {
            Za(_, u);
            continue;
          }
          v || (_ in o ? P.push(_, 0, o[_]) : P.push(_, 1, c || e[_])), a.push(_);
        }
      }
    A && mu(this);
  },
  render: function(e, t) {
    if (t.tween._time || !ao())
      for (var i = t._pt; i; )
        i.r(e, i.d), i = i._next;
    else
      t.styles.revert();
  },
  get: Ti,
  aliases: ui,
  getSetter: function(e, t, i) {
    var n = ui[t];
    return n && n.indexOf(",") < 0 && (t = n), t in Ci && t !== ai && (e._gsap.x || Ti(e, "x")) ? i && kl === i ? t === "scale" ? jg : Kg : (kl = i || {}) && (t === "scale" ? Zg : $g) : e.style && !Ya(e.style[t]) ? qg : ~t.indexOf("-") ? Yg : no(e, t);
  },
  core: {
    _removeProperty: Pr,
    _getMatrix: lo
  }
};
Ft.utils.checkPrefix = rr;
Ft.core.getStyleSaver = Mu;
(function(r, e, t, i) {
  var n = Ut(r + "," + e + "," + t, function(s) {
    Ci[s] = 1;
  });
  Ut(e, function(s) {
    kt.units[s] = "deg", Tu[s] = 1;
  }), ui[n[13]] = r + "," + e, Ut(i, function(s) {
    var a = s.split(":");
    ui[a[1]] = n[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  kt.units[r] = "px";
});
Ft.registerPlugin(wu);
var gr = Ft.registerPlugin(wu) || Ft;
gr.core.Tween;
const l0 = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`, c0 = `
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
  
  tex1.a  = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).a;
  tex2.a  = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).a;
     
  vec4 mixedTextures =  mix(tex1, tex2, dispFactor);
  gl_FragColor = mixedTextures;
}
`;
function ls(r, e) {
  const t = (r % e + e) % e;
  return t < 0 ? t + Math.abs(e) : t;
}
const u0 = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [i, n] of e)
    t[i] = n;
  return t;
}, Zl = new Hh(), Gn = new W_({ antialias: !1, alpha: !0 }), h0 = {
  name: "vue-displacement-slideshow",
  props: {
    images: {
      required: !0,
      type: Array,
      default: () => []
    },
    displacement: {
      required: !0,
      type: String
    },
    intensity: {
      required: !1,
      type: Number,
      default: 1
    },
    speedIn: {
      required: !1,
      type: Number,
      default: 1
    },
    speedOut: {
      required: !1,
      type: Number,
      default: 1
    },
    ease: {
      required: !1,
      type: String,
      default: "expo.inOut"
    },
    preserveAspectRatio: {
      required: !1,
      type: Boolean,
      default: !0
    },
    isInteractive: {
      required: !1,
      type: Boolean,
      default: !1
    },
    interactionFactor: {
      required: !1,
      type: Number,
      default: 1
    },
    interactionDuration: {
      required: !1,
      type: Number,
      default: 1
    },
    angle: {
      required: !1,
      type: Number,
      default: Math.PI / 4
    },
    startAsTransparent: {
      required: !1,
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      currentImage: 0,
      mat: null,
      textures: [],
      disp: null,
      nextImage: 0,
      imagesLoaded: [],
      isAnimating: !1,
      currentTransition: null,
      mousePosition: {},
      previousMousePosition: null,
      rafID: null,
      mouseSpeed: { value: 0 },
      loaded: !1
    };
  },
  computed: {
    slider() {
      return this.$refs.slider;
    },
    camera() {
      const r = new yc(
        this.slider.offsetWidth / -2,
        this.slider.offsetWidth / 2,
        this.slider.offsetHeight / 2,
        this.slider.offsetHeight / -2,
        1,
        1e3
      );
      return r.position.z = 1, r;
    }
  },
  methods: {
    initScene() {
      Gn.setPixelRatio(window.devicePixelRatio), Gn.setClearColor(16777215, 0), Gn.setSize(this.slider.offsetWidth, this.slider.offsetHeight), this.$refs.slider.appendChild(Gn.domElement);
    },
    render() {
      Gn.render(Zl, this.camera);
    },
    transitionIn() {
      this.currentTransition = gr.to(this.mat.uniforms.dispFactor, {
        duration: this.speedIn,
        value: 1,
        ease: this.ease,
        onUpdate: this.render,
        onComplete: this.onAnimationEnd(!0),
        paused: !0
      }), this.currentTransition.play(), this.setImageResolution(this.speedIn);
    },
    transitionOut() {
      this.currentTransition = gr.to(this.mat.uniforms.dispFactor, {
        duration: this.speedOut,
        value: 0,
        ease: this.ease,
        onUpdate: this.render,
        onComplete: this.onAnimationEnd(!1),
        paused: !0
      }), this.currentTransition.play(), this.setImageResolution(this.speedOut);
    },
    setImageResolution(r) {
      gr.to(this.mat.uniforms.imageResolution.value, {
        duration: r,
        x: this.textures[this.nextImage].image.naturalWidth,
        y: this.textures[this.nextImage].image.naturalHeight,
        ease: this.ease,
        onUpdate: this.render
      });
    },
    onAnimationEnd(r) {
      r && (this.currentImage = this.nextImage, this.mat.uniforms.dispFactor.value = 0), this.isAnimating = !1, this.$emit("animationEnd"), this.render();
    },
    assignTexturesToMaterial() {
      this.mat.uniforms.texture1.value = this.textures[this.currentImage], this.mat.uniforms.texture2.value = this.textures[this.nextImage];
    },
    previous() {
      if (!this.isAnimating) {
        if (this.mat === null) {
          this.currentImage = ls(this.currentImage - 1, this.textures.length);
          return;
        }
        this.isAnimating = !0, this.mat.uniforms.dispFactor.value = 1, this.nextImage = ls(this.currentImage - 1, this.textures.length), this.mat.uniforms.texture1.value = this.textures[this.nextImage], this.mat.uniforms.texture2.value = this.textures[this.currentImage], this.mat.uniforms.texture1Alpha.value = this.textures[this.nextImage].alpha, this.mat.uniforms.texture2Alpha.value = this.textures[this.currentImage].alpha, this.transitionOut(), this.currentImage = this.nextImage;
      }
    },
    next(r = null) {
      if (!this.isAnimating) {
        if (this.mat === null) {
          this.currentImage = ls(this.currentImage + 1, this.textures.length);
          return;
        }
        this.isAnimating = !0, this.nextImage = r !== null ? r : ls(this.currentImage + 1, this.textures.length), this.assignTexturesToMaterial(), this.mat.uniforms.texture1Alpha.value = this.textures[this.currentImage].alpha, this.mat.uniforms.texture2Alpha.value = this.textures[this.nextImage].alpha, this.transitionIn();
      }
    },
    loadTextures() {
      this.images.forEach((e, t) => {
        let i = this.insertImage(e, t);
        this.imagesLoaded.push(i);
      }), this.startAsTransparent && this.insertTransparentTexture(0);
      const r = new Ul();
      r.crossOrigin = "", this.disp = r.load(this.displacement, this.render), this.disp.wrapS = Er, this.disp.wrapT = Er;
    },
    initShaderMaterial() {
      const r = {
        width: this.preserveAspectRatio ? this.slider.offsetWidth : this.textures[this.currentImage].image.naturalWidth,
        height: this.preserveAspectRatio ? this.slider.offsetHeight : this.textures[this.currentImage].image.naturalHeight
      };
      this.mat = new qi({
        uniforms: {
          intensity1: { type: "f", value: this.intensity },
          intensity2: { type: "f", value: this.intensity },
          dispFactor: { type: "f", value: 0 },
          angle1: { type: "f", value: this.angle },
          angle2: { type: "f", value: -Math.PI + this.angle },
          texture1: { type: "t", value: this.textures[this.currentImage] },
          texture2: { type: "t", value: this.textures[this.nextImage] },
          texture1Alpha: { type: "f", value: this.textures[this.currentImage].alpha },
          texture2Alpha: { type: "f", value: this.textures[this.nextImage].alpha },
          disp: { type: "t", value: this.disp },
          resolution: {
            type: "v2",
            value: new Oe(r.width, r.height)
          },
          imageResolution: {
            type: "v2",
            value: new Oe(
              this.textures[this.currentImage].image.naturalWidth,
              this.textures[this.currentImage].image.naturalHeight
            )
          },
          sliderResolution: {
            type: "v2",
            value: new Oe(
              this.slider.offsetWidth,
              this.slider.offsetHeight
            )
          },
          u_rgbPosition: {
            type: "v2",
            value: new Oe(window.innerWidth / 2, window.innerHeight / 2)
          },
          u_rgbVelocity: {
            type: "v2",
            value: new Oe(0, 0)
          }
        },
        vertexShader: l0,
        fragmentShader: c0,
        transparent: !0,
        opacity: 1
      });
      const e = new Ts(this.slider.offsetWidth, this.slider.offsetHeight, 1), t = new wi(e, this.mat);
      Zl.add(t);
    },
    init() {
      this.initScene(), this.loadTextures(), Promise.all(this.imagesLoaded).then(() => {
        this.initShaderMaterial(), this.loaded = !0, this.$emit("loaded"), this.render();
      });
    },
    onResize() {
      const r = {
        width: this.preserveAspectRatio ? this.slider.offsetWidth : this.textures[this.currentImage].image.naturalWidth,
        height: this.preserveAspectRatio ? this.slider.offsetHeight : this.textures[this.currentImage].image.naturalHeight
      };
      Gn.setSize(this.slider.offsetWidth, this.slider.offsetHeight), this.camera.aspect = this.slider.innerWidth / this.slider.innerHeight, this.camera.updateProjectionMatrix(), this.mat.uniforms.resolution.value.set(r.width, r.height), this.mat.uniforms.sliderResolution.value.set(this.slider.offsetWidth, this.slider.offsetHeight), this.render();
    },
    play() {
      this.currentTransition && this.currentTransition.play();
    },
    pause() {
      this.currentTransition && this.currentTransition.pause();
    },
    insertImage(r, e = this.textures.length) {
      const t = new Ul();
      return t.crossOrigin = "", new Promise((i) => {
        let n = t.load(r, () => {
          this.render(), i();
        });
        n.magFilter = Ct, n.minFilter = Ct, n.alpha = 1, this.textures.splice(e, 0, n), e <= this.currentImage && this.loaded && this.currentImage++;
      });
    },
    insertTransparentTexture(r) {
      const e = new bt();
      e.image = {
        naturalWidth: this.slider.offsetWidth,
        naturalHeight: this.slider.offsetHeight
      }, e.alpha = 0, this.textures.splice(r, 0, e);
    },
    removeImage(r) {
      r !== this.currentImage && (this.textures.splice(r, 1), r < this.currentImage && this.currentImage--);
    },
    goTo(r) {
      r >= 0 && r < this.textures.length && this.next(r);
    },
    animate() {
      this.isInteractive && (this.rafID = requestAnimationFrame(this.animate), this.getMouseSpeed()), this.render();
    },
    onMouseMove(r) {
      if (this.isInteractive && this.mat) {
        const e = this.$refs.slider.getBoundingClientRect();
        this.mousePosition = {
          x: r.clientX - e.left,
          y: r.clientY - e.top
        }, this.mat.uniforms.u_rgbPosition.value = new Oe(
          this.mousePosition.x,
          this.mousePosition.y
        );
      }
    },
    getMouseSpeed() {
      if (this.mat) {
        const r = Math.sqrt(
          (this.previousMousePosition.x - this.mousePosition.x) ** 2 + (this.previousMousePosition.y - this.mousePosition.y) ** 2
        ) || 0;
        gr.to(this.mouseSpeed, {
          duration: this.interactionDuration,
          value: r
        }), this.mat.uniforms.u_rgbVelocity.value = new Oe(
          this.mouseSpeed.value * this.interactionFactor,
          this.mouseSpeed.value * this.interactionFactor
        );
      }
      this.previousMousePosition = this.mousePosition;
    }
  },
  mounted() {
    this.init(), window.addEventListener("resize", this.onResize), window.addEventListener("mousemove", this.onMouseMove), this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.rafID), window.removeEventListener("resize", this.onResize), window.removeEventListener("mousemove", this.onMouseMove);
  }
}, f0 = {
  class: "vue-displacement-slideshow",
  ref: "slider",
  style: { width: "100%", height: "100%" }
};
function d0(r, e, t, i, n, s) {
  return Uu(), Iu("div", f0, null, 512);
}
const m0 = /* @__PURE__ */ u0(h0, [["render", d0]]);
export {
  m0 as default
};
