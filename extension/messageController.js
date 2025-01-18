import { getApiKey, setApiKey } from './actions/apiKeyActions';

const messageController = (message, sender, sendResponse) => {
  console.log('messageController', message, sender, sendResponse);
  switch (message.action) {
    case 'set-api-key':
      setApiKey(message.apiKey);
      sendResponse({ message: 'success' });
      break;
    case 'get-api-key': {
      const apiKey = getApiKey();
      if (apiKey) sendResponse({ status: 'success', data: { apiKey } });
      else sendResponse({ status: 'error', message: 'API Key not set' });
      break;
    }
    case 'test':
      console.log('TEST MESSAGE RECIEVED');
      sendResponse({ status: 'Service worker is working properly!' });
      break;

    default:
      console.log('messageController: unknown action', message.action);
  }
};
export default messageController;
