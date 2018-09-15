// @flow
import type { Dispatch } from '../reducers/types';
import ethplorerApi from '../api/ethplorer';
import cryptonator from '../api/cryptonator';
import coincapApi from '../api/coincap';
import cryptocompareApi from '../api/cryptocompare';

export const GET_TOKENS = 'GET_TOKENS';
export const GET_TOKENS_SUCCESS = 'GET_TOKENS_SUCCESS';
export const GET_TOKENS_FAIL = 'GET_TOKENS_FAIL';
export const GET_TOKEN_AVERAGE_RATE = 'GET_TOKEN_AVERAGE_RATE';
export const GET_TOKEN_AVERAGE_RATE_SUCCESS = 'GET_TOKEN_AVERAGE_RATE_SUCCESS';
export const GET_TOKEN_AVERAGE_RATE_FAIL = 'GET_TOKEN_AVERAGE_RATE_FAIL';

const getAverageRate = (rates: Array<number>) => {
  const availableRates = rates.filter(rate => rate > 0);

  return availableRates.reduce((prev, curr) => prev + curr) / availableRates.length;
};

export function getTokens() {
  return async (dispatch: Dispatch) => {
    dispatch({ type: GET_TOKENS });

    try {
      const tokens = await ethplorerApi.getTokens();

      dispatch({
        type: GET_TOKENS_SUCCESS,
        payload: tokens
      });
    } catch (error) {
      dispatch({
        type: GET_TOKENS_FAIL,
        error
      });
    }
  };
}

export function getTokenAverageRate(tokenAddress: string) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: GET_TOKEN_AVERAGE_RATE });

    const {
      name: tokenName,
      price: ethplorerPrice
    } = await ethplorerApi.getTokenByAddress(tokenAddress);

    Promise.all([
      cryptonator.getTokenRate(tokenName),
      coincapApi.getTokenRate(tokenName),
      cryptocompareApi.getTokenRate(tokenName)
    ])
      .then(apiRates => {
        const rates = [...apiRates, parseFloat(ethplorerPrice.rate)];

        return dispatch({
          type: GET_TOKEN_AVERAGE_RATE_SUCCESS,
          payload: { tokenName, rate: getAverageRate(rates) }
        });
      })
      .catch(error => {
        dispatch({
          type: GET_TOKEN_AVERAGE_RATE_FAIL,
          error
        });
      });
  };
}
