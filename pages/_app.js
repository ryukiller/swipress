import "../styles/globals.css";
import Layout from "../components/themes/Layout";

function MyApp({ Component, pageProps }) {
  if (pageProps.isAdmin) {
    return <Component {...pageProps} />;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
