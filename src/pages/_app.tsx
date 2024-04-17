import AppContextComponent from "@/components/practice/AppContext";
import FooterComponent from "@/components/practice/Footer";
import HeaderComponent from "@/components/practice/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log('Inside app')
  return (
    <AppContextComponent>
      <HeaderComponent />
      <main>
        <Component {...pageProps} />
      </main>
      <FooterComponent />
    </AppContextComponent>
  )
  // <Component {...pageProps} />;
}
