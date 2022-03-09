function priceFormatter(string, splitter) {
  const result = string.replace(/\B(?=(\d{3})+(?!\d))/g, `${splitter}`);
  return result;
}

export default priceFormatter;
