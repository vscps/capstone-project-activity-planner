import Head from "next/head";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import GlobalNavigation from "@/components/GlobalNavigation/GlobalNavigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <Head>
        <title>ActivityHub</title>
        <meta name="description" content="Dein Activity Planner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${BebasNeue.variable} ${inter.variable}`}>
        <GlobalStyle />
        <Component {...pageProps} />
        <GlobalNavigation />
      </main>
    </SWRConfig>
  );
}
