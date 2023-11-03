import styles from "./CardPost.module.scss";
import Author from "../ui/Author/Author";
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
        <Image src={urlImage} alt="" width={200} height={200} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className={styles.description}>{subtitle}</p>
        <div className={styles.footer}>
          <Author />
          <div className={styles.continue}>
            <Link href={`article/post/nome-do-post`}>Continuar lendo...</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
