import React from 'react';
import {AppProps} from 'next/app';
import "prismjs/themes/prism-tomorrow.css";

const MyApp = ({Component, pageProps}: AppProps) => <Component {...pageProps} />;

export default MyApp;