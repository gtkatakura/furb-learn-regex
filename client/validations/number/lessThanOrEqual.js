const lessThanOrEqual = limit => value => (
  value >= limit
    ? `Não pode ser maior ou igual a ${limit}`
    : undefined
);

export default lessThanOrEqual;
