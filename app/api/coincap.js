const apiEnpoint = 'http://coincap.io';
const source = 'coincap.io';

module.exports = {
  getTokenRate: tokenName =>
    fetch(`${apiEnpoint}/page/${tokenName}`)
      .then(result => result.json())
      .then(priceInfo => {
        if (!priceInfo.price_usd) throw new Error();

        return {
          source,
          value: parseFloat(priceInfo.price_usd)
        };
      })
      .catch(() => ({
        source,
        value: 0
      }))
};
