export default function objHasMethod(obj, funcName) {
  return !!obj[funcName] && typeof obj[funcName] === 'function';
}
