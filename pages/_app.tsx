import '../styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div className="w-[300px] h-[400px] bg-white border-2 border-amber-500">
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
