import React, { useEffect } from 'react';
import { STORAGE_API_KEY } from '../constants';
import { useAppSelector } from '../store/hooks';
import { useRouter } from 'next/router';
import HomeSummary from '../components/pages/Home/HomeSummary/HomeSummary';

export default function Home() {
  const router = useRouter();
  const { isAuthorized, apiKey } = useAppSelector((state) => state.app);

  useEffect(() => {
    const apiKey = localStorage.getItem(STORAGE_API_KEY);
    if (apiKey && !isAuthorized)
      router.push('/auth'); // Redirect to the authentication page
    else if (!apiKey) router.push('/addKey'); // Redirect to the add key page
  }, []);
  return (
    <div>
      <h1 className="text-xl text-center">Wtyczka jest gotowa do pracy!</h1>
      <HomeSummary />
    </div>
  );
}
