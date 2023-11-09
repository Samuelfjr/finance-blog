import styles from "../CardMaterial/CardMaterial.module.scss";
import { sora, roboto } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";

interface AllSupportMaterial {
  title: string;
  subtitle: string;
  image: string;
  context: string;
}

const CardMaterial = ({
  title,
  subtitle,
  image,
  context,
}: AllSupportMaterial) => {
  return (
    <article className={styles.cardMaterial}>
      <div className={styles.card}>
        <div className={styles.containerImage}>
          <Image
            className={styles.img}
            src={image}
            width={367}
            height={200}
            alt=""
          />
        </div>

        <div className={styles.partCard}>
          <h3 className={sora.className}>{title}</h3>
          <p className={roboto.className}>{subtitle}</p>
          <div className={styles.buttonContent}>
            <Link className={roboto.className} href="{context}" download>
              Baixar Conteúdo
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardMaterial;
