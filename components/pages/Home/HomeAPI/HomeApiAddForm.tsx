import React, { FormEvent, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import useStorage from '../../../hooks/useStorage';
import useInputController from '../../../hooks/useInputController';
import SuccessOverlay from '../../../ui/SuccessOverlay';
import usePostApi from '../../../hooks/api/usePostApi';
import { useDispatch } from 'react-redux';
import { setApiKey } from '../../../../store/slices/appSlice';

const HomeApiAddForm = () => {
  const dispatch = useDispatch();
  const { encryptAndSave } = useStorage();
  const { post, loading } = usePostApi();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { control, trigger } = useForm({
    defaultValues: {
      apiKey: '',
      password: '',
    },
  });

  const {
    field: apiKeyField,
    inputRef: apiKeyInputRef,
    invalid: apiKeyInvalid,
  } = useInputController({
    name: 'apiKey',
    control,
    required: true,
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
    const repsonse = await post(
      {
        contents: [
          {
            parts: [{ text: 'This is a test if everything works!' }],
          },
        ],
      },
      apiKeyField.value,
    );
    if (!repsonse) {
      setIsError(true);
      return;
    }
    encryptAndSave(apiKeyField.value, passwordField.value);
    dispatch(setApiKey(apiKeyField.value));
    setIsSuccess(true);
    setIsError(false);
  };
  return (
    <div className="relative">
      <p className="text-sm">Podaj klucz API Gemini</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center mt-3"
      >
        <Input
          label="Klucz API"
          {...apiKeyField}
          ref={apiKeyInputRef}
          color={apiKeyInvalid || isError ? 'danger' : 'default'}
        />
        <Input
          label="Hasło autoryzacyjne"
          {...passwordField}
          ref={passwordInputRef}
          color={passwordInvalid ? 'danger' : 'default'}
        />

        <Button color="primary" type="submit" isLoading={loading}>
          Zapisz
        </Button>
        {isError && (
          <p className="text-red-600 font-semibold text-center">
            Napotkaliśmy problem podczas sprawdzania klucza API! Sprawdź czy
            jest on poprawny!
          </p>
        )}
        <SuccessOverlay open={isSuccess} setOpen={setIsSuccess} />
      </form>
    </div>
  );
};
export default HomeApiAddForm;
