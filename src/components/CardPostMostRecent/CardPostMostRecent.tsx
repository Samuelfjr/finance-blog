import styles from "../CardPostMostRecent/CardPostMostRecent.module.scss";
import { sora, roboto } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

interface CardPostMostRecentProps {
  title: string;
  createdAt: string;
  urlImage: string;
  category: string;
  slug: string;
}

const CardPostMostRecent = ({
  title,
  createdAt,
  category,
  slug,
}: CardPostMostRecentProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.containerCategory}>
            <h4>{category}</h4>
          </div>
          <h3 className={sora.className}>{title}</h3>
          <div className={styles.continue}>
            <Link className={roboto.className} href={`/article/post/${slug}`}>
              Continuar lendo
            </Link>
            <Image src="/continue.svg" alt="" width={15} height={12} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPostMostRecent;
