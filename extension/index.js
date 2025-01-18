import messageController from './messageController';
import { tabController } from './tabController';

chrome.runtime.onMessage.addListener(messageController);

chrome.tabs.onUpdated.addListener(tabController);
