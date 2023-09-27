export const generateQueryStringFromArray = (params: string[]): string => {
  return `?${params.join('&')}`;
};

export const generateQueryStringFromObject = (obj: any): string => {
  const params: string[] = [];

  const keys = Object.keys(obj);

  keys.forEach(key => {
    params.push(`${key}=${obj[key]}`);
  });

  return generateQueryStringFromArray(params);
};