import React, { useEffect, useState } from 'react';
import { STORAGE_API_KEY } from '../constants';
import { useRouter } from 'next/router';
import HomeSummary from '../components/pages/Home/HomeSummary/HomeSummary';
import { IResponse } from '../types';
import { useDispatch } from 'react-redux';
import { setIsAuthorized } from '../store/slices/appSlice';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [key, setKey] = useState('');
  useEffect(() => {
    chrome.runtime.sendMessage(
      { action: 'get-api-key' },
      (response: IResponse<{ apiKey: string }>) => {
        const apiKey = localStorage.getItem(STORAGE_API_KEY);
        if (response.status === 'success') {
          dispatch(setIsAuthorized(true));
          setKey(response.data.apiKey);
        } else {
          dispatch(setIsAuthorized(false));
          if (apiKey) {
            setKey(apiKey);
            router.push('/auth');
          } else router.push('/addKey');
        }
      },
    );
  }, []);
  return (
    <div>
      <h1 className="text-xl text-center">Wtyczka jest gotowa do pracy!</h1>
      <HomeSummary apiKey={key} />
    </div>
  );
}
