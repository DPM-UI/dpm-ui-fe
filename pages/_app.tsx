import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar, Footer } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Head>
                <link rel="icon" href="/assets/images/dpm-ui-small-color.svg" />
                {/* <!-- Primary Meta Tags --> */}
                <title>DPM UI</title>
                <meta name="title" content="DPM UI" />
                {/* insert later */}
                <meta name="description" content="" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                {/* <meta property="og:url" content="https://" /> */}
                <meta property="og:title" content="DPM UI" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="/assets/images/dpm-ui-horizontal.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="/assets/images/dpm-ui-horizontal.png" />
                {/* <meta property="twitter:url" content="https://" /> */}
                <meta property="twitter:title" content="DPM UI" />
                <meta property="twitter:description" content="" />
                <meta property="twitter:image" content="/assets/images/dpm-ui-horizontal.png" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
