import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar, Footer } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
