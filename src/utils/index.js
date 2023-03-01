export const printFixedDigits = (val, num = 1) => {
  return Number(val).toFixed(num);
};

export const titleCase = (str) => {
  return str
    .split(/[\s,-]+/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('-');
};
