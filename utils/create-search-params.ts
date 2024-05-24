export const createSearchParams = <T extends Record<string, string | number>>(params: T) => {
  const searchParams = new URLSearchParams();
  const paramsKeys = Object.keys(params);

  paramsKeys.forEach((key) => searchParams.set(key, `${params[key]}`));

  return `?${searchParams}`;
};
