function multiply(first, second) {
  // your solution
  let firstBigInt = BigInt(first);
  let secondBigInt = BigInt(second);
  return BigInt(firstBigInt * secondBigInt).toString();
}
module.exports = multiply;
