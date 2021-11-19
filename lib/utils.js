export function mod(x, y) {
  const m = (( x % y) + y) % y;
  return m < 0 ? m + Math.abs(y) : m;
}
