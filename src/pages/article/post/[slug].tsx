import { roboto, sora } from "@/styles/fonts";
import Image from "next/image";
// import styles from "../../styles/Post.module.scss";
import styles from "../../../styles/Post.module.scss";

import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/apollo";

import { format } from "date-fns";

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
      json: [];
    };
  };
}

export default function Post({ post }: PostProps) {
  return (
    <section className={styles.post}>
      <div className={styles.heading}>
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
        <div className={styles.containerAuthor}>
          <div className={styles.author}>
            <div className={styles.content}>
              <p className={styles.name}>{post.author.name}</p>
              <p className={styles.date}>
                {format(new Date(post.createdAt), "dd/MM/yyyy")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <article className={styles.content}>
        <div className={styles.image}>
          <Image src={post.coverImage.url} alt="" width={367} height={200} />
        </div>
        conteúdo do artigo
      </article>
    </section>
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
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "titulo-de-exemplo-10" } }],
    fallback: "blocking",
  };
};
