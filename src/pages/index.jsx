import { sora, roboto } from "@/styles/fonts";
import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <div className={styles.card}>
              <Image
                src="/spreadsheet.jpg"
                width={367}
                height={200}
                alt="planilha"
              />

              <div className={styles.partCard}>
                <h3 className={sora.className}>Calculadora Primeiro Milhão</h3>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.buttonContent}>
                  <Link className={roboto.className} href="/">
                    Acessar Conteúdo
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <Image src="/ebook.jpg" width={367} height={200} alt="ebook" />

              <div className={styles.partCard}>
                <h3 className={sora.className}>Ebook Bolsa de Valores</h3>

                <p className={roboto.className}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>

                <div className={styles.buttonContent}>
                  <Link className={roboto.className} href="/">
                    Acessar Conteúdo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.allSupportMaterials}>
            <Link className={roboto.className} href="/">
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
      </div>
    </main>
  );
}
