import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertData } from '../../types';

interface InitialState {
  apiKey: string;
  isAuthorized: boolean;
  alertData?: AlertData;
}

const initialState: InitialState = {
  apiKey: '',
  isAuthorized: false,
  alertData: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.apiKey = action.payload;
    },
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    setAlertData: (state, action: PayloadAction<AlertData>) => {
      state.alertData = action.payload;
    },
    clearConfidential: (state) => {
      state.isAuthorized = false;
      state.apiKey = '';
    },
  },
});

export const { setApiKey, setIsAuthorized, clearConfidential, setAlertData } =
  appSlice.actions;
