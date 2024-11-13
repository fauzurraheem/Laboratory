export function generateRandomNumbers(num) {
  const randomNumbers = Math.floor(
    // eslint-disable-next-line no-restricted-properties
    Math.pow(10, num - 1) + Math.random() * 9 * Math.pow(10, num - 1)
  );
  return `${randomNumbers}`;
}


export function getPagination(query) {
  const limit = Math.abs(query.limit) || DEFAULTLIMIT;
  const page = Math.abs(query.page) || DEFAULTPAGE;

  const skip = (page - 1) * limit;


  return {
    skip,
    limit
  }
}
