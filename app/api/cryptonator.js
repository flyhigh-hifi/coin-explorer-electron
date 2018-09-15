const apiEnpoint = 'https://api.cryptonator.com';
const source = 'cryptonator.com';

module.exports = {
  getTokenRate: tokenName =>
    fetch(`${apiEnpoint}/api/ticker/${tokenName}-usd`)
      .then(result => result.json())
      .then(priceInfo => ({
        source,
        value: parseFloat(priceInfo.ticker.price)
      }))
      .catch(() => ({
        source,
        value: 0
      }))
};
