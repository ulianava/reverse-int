module.exports = function reverse (n) {
  const result = Math.abs(n);
  return result.toString().split('').reverse().join('');
}
