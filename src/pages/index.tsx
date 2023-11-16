import Image from "next/image";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import { sora, roboto } from "@/styles/fonts";
import styles from "../styles/Home.module.scss";
import CardMaterial from "../components/CardMaterial/CardMaterial";
import CardPostHome from "@/components/CardPostHome/CardPostHome";
import { Loading } from "@/components/ui/Loading/Loading";
import { GetServerSideProps } from "next";
import { client } from "@/lib/apollo";
import CardPostMostRecent from "@/components/CardPostMostRecent/CardPostMostRecent";
import BanerCardPostMostRecent from "@/components/BanerCardPostMostRecent/BanerCardPostMostRecent";
import Page from "../components/Page";

const GET_ALL_SUPPORT_MATERIAL = gql`
  query GetSupportMaterial {
    supportMaterials {
      id
      title
      subtitle
      image {
        url
      }
      content {
        url
      }
    }
  }
`;

interface AllSupportMaterial {
  supportMaterials: {
    id: string;
    title: string;
    subtitle: string;
    image: {
      url: string;
    };
    content: {
      url: string;
    };
  }[];
}

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
export default function Home({ posts }: AllPosts) {
  const { loading, data, error } = useQuery<AllSupportMaterial>(
    GET_ALL_SUPPORT_MATERIAL
  );
  console.log(loading);

  if (loading) return <Loading />;

  return (
    <Page
      title="Blog Rubens Machado | Conquiste Seu Futuro Financeiro: Explore Artigos, Ebooks e Dicas de Investimento"
      description="Descubra artigos envolventes, ebooks e dicas de investimento. Construa seu futuro financeiro com nosso material de apoio exclusivo. Seja bem-vindo ao seu guia para uma vida financeira mais inteligente."
    >
      <main className={styles.page}>
        <div className={styles.containerPage}>
          <section className={styles.supportMaterial}>
            <div className={styles.title}>
              <h1 className={sora.className}>
                Explore Nosso Material de Apoio e Transforme Suas Finanças Hoje
                Mesmo
              </h1>
            </div>

            <div className={styles.backingCardContainer}>
              {data?.supportMaterials.map((supportMaterial, index) => {
                if (index <= 1) {
                  return (
                    <CardMaterial
                      key={supportMaterial.id}
                      title={supportMaterial.title}
                      subtitle={supportMaterial.subtitle}
                      image={supportMaterial.image.url}
                      context={supportMaterial.content.url}
                    />
                  );
                }
              })}
            </div>

            <div className={styles.allSupportMaterials}>
              <Link className={roboto.className} href="/support-material">
                Ver todos Materias de Apoio
              </Link>
            </div>
          </section>

          <section className={styles.CardPostMostRecent}>
            <h1 className={sora.className}>
              No Radar Financeiro: Descubra o Que Estamos Discutindo nos Artigos
              Recentes!
            </h1>
            <div className={styles.containerCardPostMostRecent}>
              <div className={styles.baner}>
                {posts.map((post, index) => {
                  if (index == 0) {
                    return (
                      <BanerCardPostMostRecent
                        key={post.id}
                        title={post.title}
                        createdAt={post.createdAt}
                        urlImage={post.coverImage.url}
                        category={post.category}
                        author={post.author.name}
                        slug={post.slug}
                      />
                    );
                  }
                })}
              </div>

              <div className={styles.cardPostMostRecent}>
                {posts.map((post, index) => {
                  if (index >= 1 && index <= 3) {
                    return (
                      <CardPostMostRecent
                        key={post.id}
                        title={post.title}
                        createdAt={post.createdAt}
                        urlImage={post.coverImage.url}
                        category={post.category}
                        slug={post.slug}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </section>

          <section className={styles.cardsArticles}>
            <h1 className={sora.className}>Mais Artigos</h1>

            <div className={styles.cards}>
              {posts.map((post, index) => {
                if (index >= 4 && index <= 9) {
                  return (
                    <CardPostHome
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
                }
              })}
            </div>
            <div className={styles.allArticles}>
              <Link className={roboto.className} href="/article">
                Ver todos os Artigos
              </Link>
            </div>
          </section>
          <section className={styles.about}>
            <div className={styles.containerAbout}>
              <div className={styles.containerImg}>
                <Image
                  src="/perfil.jpg"
                  alt="foto de perfil do autor"
                  width={290}
                  height={260}
                />
              </div>
              <div className={styles.text}>
                <h2 className={sora.className}>
                  Você conhece Rubens Figueiredo?
                </h2>
                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut{" "}
                </p>
              </div>
            </div>
          </section>
          <section className={styles.blog}>
            <div className={styles.containerBlog}>
              <h1 className={sora.className}>
                Blog: O seu guia completo para dominar as finanças.
              </h1>
              <div className={styles.imageSubtitle}>
                <div className={styles.containerImage}>
                  <Image
                    className={styles.img}
                    src="/pen-paper-ebook.jpg"
                    alt="ebook, caneta e caderno"
                    width={565}
                    height={367}
                  />
                </div>
                <div className={styles.subtitleDescription}>
                  <h3 className={sora.className}>
                    Sua vida financeira nas suas mãos
                  </h3>
                  <p className={roboto.className}>
                    Lorem ipsum dolor sit amet. Et dolorum reiciendis qui sunt
                    delectus non voluptatibus quia eum temporibus alias. Et sunt
                    asperiores et dicta quia ad illum odit. Et recusandae iure
                    sed molestias dolor et distinctio esse et tenetur rerum. In
                    quibusdam voluptas qui tempore fuga est quisquam
                    reprehenderit sed necessitatibus dolor. Lorem ipsum dolor
                    sit amet. Et dolorum reiciendis qui sunt delectus non
                    voluptatibus quia eum temporibus alias. Et sunt asperiores
                    et dicta quia ad illum odit. Et recusandae iure sed
                    molestias dolor et distinctio esse et tenetur rerum. In
                    quibusdam voluptas qui tempore fuga est quisquam
                    reprehenderit sed necessitatibus dolor.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
};
