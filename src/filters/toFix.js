export default function toFxi(value) {
  value = parseFloat(value);
  return value.toFixed(2);
}
