import styles from "./CardPostHome.module.scss";
import { roboto, sora } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";

import { format } from "date-fns";

interface CardPostHomeProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  urlImage: string;
  category: string;
}

export default function CardPostHome({
  author,
  createdAt,
  subtitle,
  title,
  urlImage,
  category,
}: CardPostHomeProps) {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <Image
          className={styles.img}
          src={urlImage}
          width={367}
          height={200}
          alt=""
        />

        <div className={styles.partCard}>
          {/* <div className={styles.containerCategory}> */}
          <h4 className={styles.category}>{category}</h4>
          {/* </div> */}
          <h3 className={sora.className}>{title}</h3>

          <div className={styles.containerDate}>
            <h4 className={roboto.className}>
              {format(new Date(createdAt), "dd/MM/yyyy")}
            </h4>
          </div>

          <p className={roboto.className}>{subtitle}</p>

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
  );
}

{
  /* <div className={styles.card}>
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
</div> */
}
