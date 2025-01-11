import React from 'react';
import { Button } from '@nextui-org/react';
import {
  clearConfidential,
  setAlertData,
} from '../../../store/slices/appSlice';
import { useDispatch } from 'react-redux';
import { STORAGE_API_KEY } from '../../../constants';
import { useRouter } from 'next/router';

const AuthDeleteKey = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleDeleteKey = () => {
    localStorage.removeItem(STORAGE_API_KEY);
    dispatch(clearConfidential());
    dispatch(
      setAlertData({
        title: 'Usunięto klucz API',
        message: 'Klucz API został usunięty z pamięci lokalnej',
        type: 'success',
      }),
    );
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };
  return (
    <>
      <Button color="danger" onPress={handleDeleteKey}>
        Usuń klucz
      </Button>
    </>
  );
};
export default AuthDeleteKey;
