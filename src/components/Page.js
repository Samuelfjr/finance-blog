import Head from "next/head";
import { NextSeo } from "next-seo";

function Page({ title, description, children }) {
  return (
    <div>
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head> */}
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
        }}
      />
      {children}
    </div>
  );
}

export default Page;
