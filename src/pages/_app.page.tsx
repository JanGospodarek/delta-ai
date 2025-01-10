import "tailwindcss/tailwind.css";
import "./styles.css";

import {memo} from "react";

const App = memo((props: any) => {
    const getLayout =
        props.Component.getLayout ||
        ((page: any) => {
            return page;
        });

    return <>{getLayout(<props.Component {...props.pageProps} />)}</>;
});

export default App;

App.displayName = "App";
