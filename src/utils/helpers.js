export const formatPrice = (number) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) =>item[type])
  return ['all', ...new Set(unique)]
};
