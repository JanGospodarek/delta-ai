import { Control, useController } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';

interface Props {
  name: string;
  control: Control<any>;
  required: boolean;
}

const validateInput = (v: string, required?: boolean) =>
  !required || v.length > 0;

const useInputController = ({ name, control, required }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const {
    field,
    fieldState: { invalid },
  } = useController({
    name,
    control,
    rules: { required: true, validate: (v) => validateInput(v, required) },
  });

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.addEventListener('change', (e) => {
      const value = (e.target as HTMLInputElement).value;
      const isValid = validateInput(value, required);
      setIsInvalid(!isValid);
    });
  }, []);

  useEffect(() => {
    setIsInvalid(invalid);
  }, [invalid]);

  return {
    inputRef,
    field,
    invalid: isInvalid,
  };
};
export default useInputController;
