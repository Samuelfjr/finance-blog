import styles from "../CardMaterial/CardMaterial.module.scss";
import { sora, roboto } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";

const CardMaterial = () => {
  return (
    <article className={styles.cardMaterial}>
      <div className={styles.card}>
        <div className={styles.containerImage}>
          <Image
            className={styles.img}
            src="/ebook.jpg"
            width={367}
            height={200}
            alt="ebook"
          />
        </div>

        <div className={styles.partCard}>
          <h3 className={sora.className}>Ebook Bolsa de Valores</h3>

          <p className={roboto.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>

          <div className={styles.buttonContent}>
            <Link className={roboto.className} href="/">
              Baixar Conteúdo
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardMaterial;
