export const formatNumber = (number) => {
  return new Intl.NumberFormat('es-AR').format(number);
};
