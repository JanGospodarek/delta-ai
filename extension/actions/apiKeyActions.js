import state from '../model';

const setApiKey = (apiKey) => {
  state.apiKey = apiKey;
  console.log('setApiKey', apiKey);
};

export { setApiKey };
