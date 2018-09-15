const apiEnpoint = 'https://min-api.cryptocompare.com';
const source = 'cryptocompare.com';

module.exports = {
  getTokenRate: tokenName =>
    fetch(`${apiEnpoint}/data/price?fsym=${tokenName}&tsyms=USD`)
      .then(result => result.json())
      .then(priceInfo => {
        if (!priceInfo.USD) throw new Error();

        return {
          source,
          value: parseFloat(priceInfo.USD)
        };
      })
      .catch(() => ({
        source,
        value: 0
      }))
};
