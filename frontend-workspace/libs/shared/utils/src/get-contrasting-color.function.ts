export const getContrastingColor = (hex: string): string => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0,2),16);
  const g = parseInt(hex.substring(2,4),16);
  const b = parseInt(hex.substring(4,6),16);
  const lumens = ((r*299)+(g*587)+(b*114))/1000;
  return (lumens >= 125) ? 'black' : 'white';
}