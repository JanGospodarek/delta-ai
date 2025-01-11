import CryptoJS from 'crypto-js';
import { STORAGE_API_KEY } from '../../constants';

const useStorage = () => {
  const encryptAndSave = (value: string, secret: string) => {
    const encryptedValue = CryptoJS.AES.encrypt(value, secret).toString();
    // chrome.storage.local.set({ apiKey: 'user-api-key' }, function () {});
    localStorage.setItem(STORAGE_API_KEY, encryptedValue);
  };
  const decryptAndRead = (secret: string) => {
    const encryptedValue = localStorage.getItem(STORAGE_API_KEY);

    const bytes = CryptoJS.AES.decrypt(encryptedValue, secret);
    const decryptedApiKey = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedApiKey) {
      throw new Error('Błędne hasło autoryzacyjne');
    }
    return decryptedApiKey;
  };
  return { encryptAndSave, decryptAndRead };
};
export default useStorage;
