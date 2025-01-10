import CryptoJS from 'crypto-js';

const useStorage = () => {
  const encryptAndSave = (value: string, secret: string) => {
    const encryptedValue = CryptoJS.AES.encrypt(value, secret).toString();
    // chrome.storage.local.set({ apiKey: 'user-api-key' }, function () {});
    localStorage.setItem('deltaAIKey', encryptedValue);
  };
  const decryptAndRead = (secret: string) => {
    const encryptedValue = localStorage.getItem('deltaAIKey');
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, secret);
      const decryptedApiKey = bytes.toString(CryptoJS.enc.Utf8);
      if (!decryptedApiKey) {
        throw new Error('Invalid API key');
      }
      console.log('API Key:', decryptedApiKey);
    } catch (error) {
      console.error('Error decrypting API key:', error);
      alert('Incorrect secret. Please try again.');
    }
  };
  return { encryptAndSave, decryptAndRead };
};
export default useStorage;
