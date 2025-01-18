import state from '../model';

const setApiKey = (apiKey) => {
  state.apiKey = apiKey;
};
const getApiKey = () => state.apiKey;

export { setApiKey, getApiKey };
