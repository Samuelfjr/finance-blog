import { roboto, sora } from "../styles/fonts";
import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

import MainLayout from "@/components/Layout/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}
