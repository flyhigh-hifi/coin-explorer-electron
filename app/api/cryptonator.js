const apiEnpoint = 'https://api.cryptonator.com';

module.exports = {
  getTokenRate: tokenName =>
    fetch(`${apiEnpoint}/api/ticker/${tokenName}-usd`)
      .then(result => result.json())
      .then(priceInfo => parseFloat(priceInfo.ticker.price))
      .catch(() => 0)
};
