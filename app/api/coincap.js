const apiEnpoint = 'http://coincap.io';

module.exports = {
  getTokenRate: tokenName =>
    fetch(`${apiEnpoint}/page/${tokenName}`)
      .then(result => result.json())
      .then(priceInfo => {
        if (!priceInfo.price_usd) throw new Error();

        return parseFloat(priceInfo.price_usd);
      })
      .catch(() => 0)
};
