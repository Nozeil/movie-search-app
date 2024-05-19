export const createAnnualPeriod = (maxYear: number, minYear: number) => {
  const period = [];

  for (let i = 0; i <= maxYear - minYear; i++) {
    period.push(`${maxYear - i}`);
  }

  return period;
};
