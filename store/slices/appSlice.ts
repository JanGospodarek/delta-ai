import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertData } from '../../types';

interface InitialState {
  apiKey: string;
  isAuthorized: boolean;
  alertData?: AlertData;
  model: string;
}

const initialState: InitialState = {
  apiKey: '',
  isAuthorized: false,
  alertData: undefined,
  model: '',
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
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
  },
});

export const {
  setApiKey,
  setIsAuthorized,
  setModel,
  clearConfidential,
  setAlertData,
} = appSlice.actions;
