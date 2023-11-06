import styles from "./CardPost.module.scss";
import Link from "next/link";
import Image from "next/image";

interface CardPostProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  urlImage: string;
}

export default function CardPost({
  author,
  createdAt,
  subtitle,
  title,
  urlImage,
}: CardPostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <Image src={urlImage} alt="" width={367} height={200} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className={styles.description}>{subtitle}</p>
        <div className={styles.footer}>
          <div className={styles.author}>
            <div className={styles.content}>
              <p className={styles.name}>{author}</p>
              <p className={styles.date}>{createdAt}</p>
            </div>
          </div>
          <div className={styles.continue}>
            <Link href={`article/post/nome-do-post`}>Continuar lendo...</Link>
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
