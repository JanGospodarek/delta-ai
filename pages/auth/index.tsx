import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useRouter } from 'next/router';
import AuthForm from '../../components/pages/Auth/AuthForm';

const AuthPage = () => {
  const router = useRouter();
  const { isAuthorized } = useAppSelector((state) => state.app);
  useEffect(() => {
    if (isAuthorized) router.push('/');
  }, []);

  return (
    <div>
      <h2 className="text-xl text-center mt-3">Wykryliśmy klucz API!</h2>
      <AuthForm />
    </div>
  );
};
export default AuthPage;
