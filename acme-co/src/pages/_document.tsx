import React from 'react';

import Document, {Head, Html, Main, NextScript,} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
                          rel="stylesheet"></link>
                    <link rel="stylesheet"
                          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/tomorrow-night-eighties.min.css"></link>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;