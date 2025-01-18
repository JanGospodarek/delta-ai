import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertData } from '../../types';

interface InitialState {
  isAuthorized: boolean;
  alertData?: AlertData;
  model: string;
}

const initialState: InitialState = {
  isAuthorized: false,
  alertData: undefined,
  model: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    setAlertData: (state, action: PayloadAction<AlertData>) => {
      state.alertData = action.payload;
    },

    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
  },
});

export const { setIsAuthorized, setModel, setAlertData } = appSlice.actions;
