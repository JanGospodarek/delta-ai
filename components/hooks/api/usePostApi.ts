import { getApiUrl } from '../../utils/getApiUrl';
import { useState } from 'react';

const usePostApi = () => {
  const [loading, setIsLoading] = useState(false);
  const post = async (data: object, apiKey?: string) => {
    setIsLoading(true);
    const response = await fetch(getApiUrl(apiKey ?? ''), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setIsLoading(false);
    if (!response.ok) return null;
    return response.json();
  };
  return { post, loading };
};
export default usePostApi;
