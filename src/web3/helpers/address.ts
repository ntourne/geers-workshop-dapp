export const shortAddress = (
  value: string,
  initialLength = 6,
  endLength = -4
): string => `${value.slice(0, initialLength)}...${value.slice(endLength)}`;
