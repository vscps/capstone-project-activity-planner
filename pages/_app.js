import GlobalStyle from "../styles";
import GlobalNavigation from "../components/Navigation/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <GlobalNavigation />
    </>
  );
}
