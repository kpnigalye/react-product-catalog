const getBaseUrl = () => {
  // eslint-disable-next-line no-undef
  return process.env.REACT_APP_BASE_URL;
};

const sortByKey = (array, key) => {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

export { getBaseUrl, sortByKey };
