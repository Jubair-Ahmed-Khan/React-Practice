// import AppContextComponent from "@/components/practice/AppContext";
import FooterComponent from "@/components/practice/Footer";
import HeaderComponent from "@/components/practice/Header";
import "@/styles/globals.css";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  console.log("Inside app");

  // const [queryClient] = useState(new QueryClient());
  // const ReactQueryDevtoolsProduction = lazy(() =>
  //   import("@tanstack/react-query-devtools/build/modern/production.js").then(
  //     (d) => ({
  //       default: d.ReactQueryDevtools,
  //     })
  //   )
  // );

  // const [showDevtools, setShowDevtools] = useState(false);
  // useEffect(() => {
  //   window.toggleDevtools = () => setShowDevtools((old) => !old);
  // }, []);

  // return (
  //   // Provide the client to your App
  //   <QueryClientProvider client={queryClient}>
  //     <HydrationBoundary state={pageProps.dehydratedState}>
  //       <AppContextComponent>
  //         {/* <Header /> */}
  //         <main className="h-screen">
  //           <Component {...pageProps} />
  //         </main>
  //         {/* footer */}
  //       </AppContextComponent>
  //     </HydrationBoundary>
  //     {/* Always render React Query DevTools, but conditionally show based on state */}
  //     {/* <Suspense fallback={null}>
  //       <ReactQueryDevtoolsProduction initialIsOpen={showDevtools} />
  //     </Suspense> */}
  //   </QueryClientProvider>
  // );

  return (
    // Provide the client to your App
    <div>
      <HeaderComponent />
      <main className="">
        <Component {...pageProps} />
      </main>
      <FooterComponent />
    </div>
  );

  // return (
  //   <AppContextComponent>
  //     <HeaderComponent />
  //     <main>
  //       <Component {...pageProps} />
  //     </main>
  //     <FooterComponent />
  //   </AppContextComponent>
  // )
  // <Component {...pageProps} />;
}
