import Image from "next/image";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

import { sora, roboto } from "@/styles/fonts";
import styles from "../styles/Home.module.scss";
import CardMaterial from "../components/CardMaterial/CardMaterial";

export default function Home() {
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts {
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

  const { loading, data, error } = useQuery<AllPosts>(GET_ALL_POSTS);
  console.log(data?.posts);

  return (
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
            <CardMaterial />
            <CardMaterial />
          </div>

          <div className={styles.allSupportMaterials}>
            <Link className={roboto.className} href="/support-material">
              Ver todos Materias de Apoio
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.image}>
            <Image
              src="/coins.jpg"
              width={450}
              height={342}
              alt="moedas empilhadas"
            />
          </div>
          <div className={styles.posts}>
            <div className={styles.post}>
              <div className={styles.containerCategory}>
                <h4>Para simplificar a vida</h4>
              </div>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </h3>
              <div className={styles.continue}>
                <Link className={roboto.className} href="/">
                  Continuar lendo
                </Link>
                <Image src="/continue.svg" alt="" width={15} height={12} />
              </div>
            </div>
            <div className={styles.post}>
              <div className={styles.containerCategory}>
                <h4>Para simplificar a vida</h4>
              </div>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </h3>
              <div className={styles.continue}>
                <Link className={roboto.className} href="/">
                  Continuar lendo
                </Link>
                <Image src="/continue.svg" alt="" width={15} height={12} />
              </div>
            </div>
            <div className={styles.post}>
              <div className={styles.containerCategory}>
                <h4>Para simplificar a vida</h4>
              </div>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </h3>
              <div className={styles.continue}>
                <Link className={roboto.className} href="/">
                  Continuar lendo
                </Link>
                <Image src="/continue.svg" alt="" width={15} height={12} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cardsArticles}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image src="/dollar.jpg" width={367} height={200} alt="dólar" />

              <div className={styles.partCard}>
                <div className={styles.containerCategory}>
                  <h4>Para simplificar a vida</h4>
                </div>
                <h3 className={sora.className}>Conheça as mudanças do MEI</h3>

                <div className={styles.containerDate}>
                  <h4 className={roboto.className}>10/11/2023</h4>
                </div>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.continue}>
                  <Link className={roboto.className} href="/">
                    Continuar lendo
                    <Image
                      className={styles.arrow}
                      src="/continue.svg"
                      alt=""
                      width={15}
                      height={12}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <Image
                className={styles.img}
                src="/man-writing.jpg"
                width={367}
                height={200}
                alt="homem escrevendo"
              />

              <div className={styles.partCard}>
                <div className={styles.containerCategory}>
                  <h4>Para simplificar a vida</h4>
                </div>
                <h3 className={sora.className}>Conheça as mudanças do MEI</h3>

                <div className={styles.containerDate}>
                  <h4 className={roboto.className}>10/11/2023</h4>
                </div>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.continue}>
                  <Link className={roboto.className} href="/">
                    Continuar lendo
                    <Image
                      className={styles.arrow}
                      src="/continue.svg"
                      alt=""
                      width={15}
                      height={12}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src="/laptop.jpg" width={367} height={200} alt="laptop" />

              <div className={styles.partCard}>
                <div className={styles.containerCategory}>
                  <h4>Para simplificar a vida</h4>
                </div>
                <h3 className={sora.className}>Conheça as mudanças do MEI</h3>

                <div className={styles.containerDate}>
                  <h4 className={roboto.className}>10/11/2023</h4>
                </div>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.continue}>
                  <Link className={roboto.className} href="/">
                    Continuar lendo
                    <Image
                      className={styles.arrow}
                      src="/continue.svg"
                      alt=""
                      width={15}
                      height={12}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src="/currency-dollar.jpg"
                width={367}
                height={200}
                alt="moedas e dólar"
              />

              <div className={styles.partCard}>
                <div className={styles.containerCategory}>
                  <h4>Para simplificar a vida</h4>
                </div>
                <h3 className={sora.className}>Conheça as mudanças do MEI</h3>

                <div className={styles.containerDate}>
                  <h4 className={roboto.className}>10/11/2023</h4>
                </div>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.continue}>
                  <Link className={roboto.className} href="/">
                    Continuar lendo
                    <Image
                      className={styles.arrow}
                      src="/continue.svg"
                      alt=""
                      width={15}
                      height={12}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src="/cell-phone.jpg"
                width={367}
                height={200}
                alt="celular"
              />

              <div className={styles.partCard}>
                <div className={styles.containerCategory}>
                  <h4>Para simplificar a vida</h4>
                </div>
                <h3 className={sora.className}>Conheça as mudanças do MEI</h3>

                <div className={styles.containerDate}>
                  <h4 className={roboto.className}>10/11/2023</h4>
                </div>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.continue}>
                  <Link className={roboto.className} href="/">
                    Continuar lendo
                    <Image
                      className={styles.arrow}
                      src="/continue.svg"
                      alt=""
                      width={15}
                      height={12}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src="/coin-piggy.jpg"
                width={367}
                height={200}
                alt="porquinho de moedas"
              />

              <div className={styles.partCard}>
                <div className={styles.containerCategory}>
                  <h4>Para simplificar a vida</h4>
                </div>
                <h3 className={sora.className}>Conheça as mudanças do MEI</h3>

                <div className={styles.containerDate}>
                  <h4 className={roboto.className}>10/11/2023</h4>
                </div>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.continue}>
                  <Link className={roboto.className} href="/">
                    Continuar lendo
                    <Image
                      className={styles.arrow}
                      src="/continue.svg"
                      alt=""
                      width={15}
                      height={12}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.allArticles}>
            <Link className={roboto.className} href="/article">
              Ver todos os Artigos
            </Link>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.containerAbout}>
            <div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut{" "}
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
              <div className={styles.img}>
                <Image
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
                  asperiores et dicta quia ad illum odit. Et recusandae iure sed
                  molestias dolor et distinctio esse et tenetur rerum. In
                  quibusdam voluptas qui tempore fuga est quisquam reprehenderit
                  sed necessitatibus dolor. Lorem ipsum dolor sit amet. Et
                  dolorum reiciendis qui sunt delectus non voluptatibus quia eum
                  temporibus alias. Et sunt asperiores et dicta quia ad illum
                  odit. Et recusandae iure sed molestias dolor et distinctio
                  esse et tenetur rerum. In quibusdam voluptas qui tempore fuga
                  est quisquam reprehenderit sed necessitatibus dolor.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}