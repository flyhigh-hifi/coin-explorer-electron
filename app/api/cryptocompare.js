const apiEnpoint = 'https://min-api.cryptocompare.com';

module.exports = {
  getTokenRate: tokenName =>
    fetch(`${apiEnpoint}/data/price?fsym=${tokenName}&tsyms=USD`)
      .then(result => result.json())
      .then(priceInfo => {
        if (!priceInfo.USD) throw new Error();

        return parseFloat(priceInfo.USD);
      })
      .catch(() => 0)
};
