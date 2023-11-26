import Image from "next/image";
import { roboto, sora } from "@/styles/fonts";
import Link from "next/link";
import styles from ".././styles/Article.module.scss";
// import CardPost from "../components/CardPost/CardPost";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { client } from "@/lib/apollo";
import Page from "../components/Page";
import CardPost from "@/components/CardPost/CardPost";

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(orderBy: createdAt_DESC) {
      id
      slug
      title
      subtitle
      createdAt
      category
      featuredPost
      coverImage {
        url
      }
      author {
        name
      }
    }
  }
`;

interface AllPosts {
  posts: {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    createdAt: string;
    category: string;
    featuredPost: boolean;
    coverImage: {
      url: string;
    };
    author: {
      name: string;
    };
  }[];
}
export default function Article({ posts }: AllPosts) {
  return (
    <Page
      title="Artigos de Finanças: Dicas, Notícias e Orientações Financeiras"
      description="Descubra insights valiosos sobre finanças em nossa coleção de artigos. Leve seu conhecimento financeiro para o próximo nível com dicas, análises e orientações especializadas."
    >
      <article className={styles.articles}>
        <header>
          <div className={styles.containerLink}>
            <Link className={roboto.className} href="/">
              Home
            </Link>
            <div className={styles.containerArrow}>
              <Image
                className={styles.arrow}
                src="/arrow.svg"
                alt=""
                width={12}
                height={12}
              />
            </div>
            <p className={roboto.className}>Artigos</p>
          </div>
          <h1 className={sora.className}>
            Explore Nossos Artigos: Conhecimento Financeiro para Transformar sua
            Vida
          </h1>
        </header>

        {posts.map((post, index) => {
          return (
            <CardPost
              key={post.id}
              title={post.title}
              author={post.author.name}
              createdAt={post.createdAt}
              subtitle={post.subtitle}
              urlImage={post.coverImage.url}
              category={post.category}
              slug={post.slug}
            />
          );
        })}
      </article>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await client.query({ query: GET_ALL_POSTS });
  return {
    props: {
      posts: data.posts,
    },
  };
};
