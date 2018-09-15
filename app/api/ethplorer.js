const apiEnpoint = 'http://api.ethplorer.io';

module.exports = {
  getTokens: () =>
    fetch(`${apiEnpoint}/getTop?apiKey=freekey`)
      .then(result => result.json())
      .then(tokens => tokens),

  getTokenByAddress: (tokenAddress: string) =>
    fetch(`${apiEnpoint}/getTokenInfo/${tokenAddress}?apiKey=freekey`)
      .then(result => result.json())
      .then(tokenInfo => tokenInfo)
};
