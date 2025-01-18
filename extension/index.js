import messageController from './messageController';

chrome.runtime.onMessage.addListener(messageController);
