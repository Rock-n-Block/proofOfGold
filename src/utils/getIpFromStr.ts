export default (str: string) => {
  const arr = str.split('\n').join('=').split('=');
  const index = arr.indexOf('ip');
  return arr[index + 1];
};
