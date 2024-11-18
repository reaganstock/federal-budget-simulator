export const formatTrillion = (value: number): string => {
  const trillion = value / 1000;
  return `$${trillion.toFixed(2)}T`;
};