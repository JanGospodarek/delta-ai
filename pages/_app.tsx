import '../styles/globals.css';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import StoreProvider from '../store/StoreProvider';

export default function App({ Component, pageProps }: any) {
  return (
    <NextUIProvider>
      <StoreProvider>
        <div className="w-[300px] h-[400px] bg-white border-2 border-amber-500">
          <Component {...pageProps} />
        </div>
      </StoreProvider>
    </NextUIProvider>
  );
}
