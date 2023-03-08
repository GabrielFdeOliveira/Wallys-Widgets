import "@/styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Header from "../Components/Header/Header";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
