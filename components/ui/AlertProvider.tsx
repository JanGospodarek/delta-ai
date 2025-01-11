import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Alert } from '@nextui-org/alert';
import { useDispatch } from 'react-redux';
import { setAlertData } from '../../store/slices/appSlice';

const AlertProvider = () => {
  const dispatch = useDispatch();
  const { alertData } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (alertData) {
      setTimeout(() => {
        dispatch(setAlertData(undefined));
      }, 4000);
    }
  }, [alertData]);

  return (
    <div className="absolute bottom-0 z-50 w-full">
      {alertData && (
        <Alert
          title={alertData.title}
          description={alertData.message}
          color={alertData.type ?? 'default'}
        />
      )}
    </div>
  );
};
export default AlertProvider;
