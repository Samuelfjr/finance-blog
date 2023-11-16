import styles from "./CardPost.module.scss";
import Link from "next/link";
import Image from "next/image";
import { roboto, sora } from "@/styles/fonts";

import { format } from "date-fns";

interface CardPostProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  urlImage: string;
  category: string;
  slug: string;
}

export default function CardPost({
  author,
  createdAt,
  subtitle,
  title,
  urlImage,
  slug,
  category,
}: CardPostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.containerImage}>
        <Image
          className={styles.img}
          src={urlImage}
          alt=""
          width={367}
          height={200}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.containerCategory}>
          <h4 className={styles.category}>{category}</h4>
        </div>
        <div className={styles.partCard}>
          <h2 className={sora.className}>{title}</h2>
          <p className={styles.description}>{subtitle}</p>
          <div className={styles.footer}>
            <div className={styles.author}>
              <div className={styles.content}>
                <p className={styles.name}>{author}</p>
                <p className={styles.date}>
                  {format(new Date(createdAt), "dd/MM/yyyy")}
                </p>
              </div>
            </div>
            <div className={styles.continue}>
              <Link href={`/article/post/${slug}`}>
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
    </div>
  );
}
