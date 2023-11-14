import { roboto, sora } from "@/styles/fonts";
import Image from "next/image";
// import styles from "../../styles/Post.module.scss";
import styles from "../../../styles/Post.module.scss";

import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/apollo";

import { format } from "date-fns";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ElementNode } from "@graphcms/rich-text-types";
import Page from "@/components/Page";

const GET_POST = gql`
  query GetPost($slugPost: String) {
    post(where: { slug: $slugPost }) {
      id
      title
      subtitle
      content {
        json
      }
      author {
        name
      }
      createdAt
      coverImage {
        url
      }
    }
  }
`;

interface PostProps {
  post: {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    coverImage: {
      url: string;
    };
    author: {
      name: string;
    };
    createdAt: string;
    content: {
      json: ElementNode[];
    };
  };
}

export default function Post({ post }: PostProps) {
  console.log(post);

  return (
    <Page title={post.title} description={post.subtitle}>
      <section className={styles.post}>
        <div className={styles.heading}>
          <h1 className={sora.className}>{post.title}</h1>
          <h4 className={roboto.className}>{post.subtitle}</h4>
          <div className={styles.containerAuthor}>
            <div className={styles.author}>
              <div className={styles.contentAuthor}>
                <p className={styles.name}>{post.author.name}</p>
                <p className={styles.date}>
                  {format(new Date(post.createdAt), "dd/MM/yyyy")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <article className={styles.content}>
          <div className={styles.containerImage}>
            <Image
              className={styles.img}
              src={post.coverImage.url}
              alt=""
              width={367}
              height={200}
            />
          </div>
          <div className={styles.containerText}>
            <RichText
              content={post.content.json}
              renderers={{
                p: ({ children }) => (
                  <p className={roboto.className}>{children}</p>
                ),
              }}
            />
          </div>
        </article>
      </section>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug;

  const { data } = await client.query({
    query: GET_POST,
    variables: {
      slugPost: slug,
    },
  });

  return {
    props: {
      post: data.post,
    },
    revalidate: 60 * 30, //30 min
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "titulo-de-exemplo-10" } }],
    fallback: "blocking",
  };
};
