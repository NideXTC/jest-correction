export default function isPhoneNumber(number) {
  return number.startsWith("+49") && number.length < 13;

  // Replace the +49 with 0  -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // Count the number of elements
}
