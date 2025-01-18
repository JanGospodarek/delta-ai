import { useForm } from 'react-hook-form';
import useInputController from '../../hooks/useInputController';
import React, { FormEvent } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';
import AuthDeleteKey from './AuthDeleteKey';
import useStorage from '../../hooks/useStorage';
import { useDispatch } from 'react-redux';
import { setAlertData, setIsAuthorized } from '../../../store/slices/appSlice';
import { useRouter } from 'next/router';

const AuthForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decryptAndRead } = useStorage();
  const { control, trigger } = useForm({
    defaultValues: {
      password: '',
    },
  });

  const {
    field: passwordField,
    inputRef: passwordInputRef,
    invalid: passwordInvalid,
  } = useInputController({
    name: 'password',
    control,
    required: true,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await trigger();
    if (!result) return;
    try {
      const key = decryptAndRead(passwordField.value);
      // dispatch(setApiKey(key));
      dispatch(setIsAuthorized(true));

      chrome.runtime.sendMessage(
        { action: 'set-api-key', apiKey: key },
        (response) => {
          console.log(response);
        },
      );

      void router.push('/');
    } catch (e) {
      dispatch(
        setAlertData({
          title: 'Błąd autoryzacji',
          message: e.message,
          type: 'danger',
        }),
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-7 flex flex-col items-center gap-3 mt-3"
    >
      <Input
        label="Hasło autoryzacyjne"
        {...passwordField}
        ref={passwordInputRef}
        color={passwordInvalid ? 'danger' : 'default'}
        size="sm"
      />
      <Button color="primary" type="submit">
        Autoryzuj
      </Button>
      <Divider className="w-[90%]" />
      <AuthDeleteKey />
    </form>
  );
};
export default AuthForm;
