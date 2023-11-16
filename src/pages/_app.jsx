import { roboto, sora } from "../styles/fonts";
import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import MainLayout from "@/components/Layout/MainLayout";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo-config";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}
