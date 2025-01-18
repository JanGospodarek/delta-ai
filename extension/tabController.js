import { getPageHTML, htmlAnalyzer } from './utils';

export const tabController = (tabId, changeInfo, tab) => {
  // Check if the URL has changed
  const { url } = changeInfo;
  if (
    url.includes('delta.pk.edu.pl/mod/quiz/attempt') &&
    url.includes('attempt=')
  ) {
    console.log(`Tab ${tabId} URL changed to: ${changeInfo.url}`);
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        func: getPageHTML, // Function to get the HTML content
      },
      (results) => {
        // The results will be an array with the returned value from content script
        const pageHTML = results[0].result; // This is the HTML returned from the page
        const questions = htmlAnalyzer(pageHTML);
        console.log('questions:', questions);
        // Optionally, send it back to popup or perform other actions
        // chrome.runtime.sendMessage({ type: 'pageHTML', html: pageHTML });
      },
    );
  }
};
