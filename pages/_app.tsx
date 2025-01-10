import '../styles/globals.css';

export default function App({Component, pageProps}) {
    return (
        <div className="w-[300px] h-[400px] bg-white border-2 border-amber-500">
            <Component {...pageProps} />
        </div>
    );
}
