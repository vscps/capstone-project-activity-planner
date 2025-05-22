import GlobalStyle from "../styles";
import GlobalNavigation from "../components/Navigation/Navigation";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

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
    <main className={`${BebasNeue.className} ${inter.className}`}>
      <GlobalStyle />
      <Component {...pageProps} />
      <GlobalNavigation />
    </main>
  );
}
