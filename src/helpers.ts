export const getRatingClass = (rating: number, high: string, low: string) => {
  if (rating >= 4) {
    return high;
  } else {
    return low;
  }
};
