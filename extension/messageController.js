import { setApiKey } from './actions/apiKeyActions';

const messageController = (message, sender, sendResponse) => {
  console.log('messageController', message, sender, sendResponse);
  switch (message.action) {
    case 'test':
      console.log('TEST MESSAGE RECIEVED');
      sendResponse({ status: 'Service worker is working properly!' });
      break;

    case 'set-api-key':
      setApiKey(message.apiKey);
      sendResponse({ message: 'success' });
      break;
    default:
      console.log('messageController: unknown action', message.action);
  }
};
export default messageController;
