import { getApiUrl } from '../../utils/getApiUrl';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModel } from '../../../store/slices/appSlice';

const usePostApi = () => {
  const dispatch = useDispatch();
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

    const resData = await response.json();
    dispatch(setModel(resData.modelVersion));
    return resData;
  };
  return { post, loading };
};
export default usePostApi;
