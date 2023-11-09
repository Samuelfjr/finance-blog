import styles from "../BanerCardPostMostRecent/BanerCardPostMostRecent.module.scss";
import { sora, roboto } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { format } from "date-fns";

interface BanerCardPostMostRecentProps {
  title: string;
  createdAt: string;
  urlImage: string;
  category: string;
  author: string;
  slug: string;
}

const BanerCardPostMostRecent = ({
  title,
  urlImage,
  createdAt,
  category,
  author,
  slug,
}: BanerCardPostMostRecentProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.containerImage}>
        <Image
          className={styles.img}
          src={urlImage}
          width={535}
          height={300}
          alt=""
        />
      </div>
      <div className={styles.containerDescription}>
        <header>
          <div className={styles.containerCategory}>
            <h4>{category}</h4>
          </div>
          <div className={styles.containerTitle}>
            <h3 className={sora.className}>{title}</h3>
          </div>
        </header>
        <footer className={styles.footer}>
          <div className={styles.continue}>
            <Link className={roboto.className} href={`/article/post/${slug}`}>
              Continuar lendo
            </Link>
            <Image src="/continue.svg" alt="" width={15} height={12} />
          </div>
          <div className={styles.container}>
            <div className={styles.containerAuthor}>
              <h4 className={roboto.className}>{author}</h4>
            </div>
            <div className={styles.containerDate}>
              <h4 className={roboto.className}>
                {format(new Date(createdAt), "dd/MM/yyyy")}
              </h4>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default BanerCardPostMostRecent;
