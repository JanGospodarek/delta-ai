import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  apiKey: string;
}

const initialState: InitialState = {
  apiKey: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
  },
});

export const { setApiKey } = appSlice.actions;
