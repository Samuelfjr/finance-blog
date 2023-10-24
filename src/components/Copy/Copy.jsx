import { roboto } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";

import styles from "./Copy.module.scss";

const Copy = () => {
  return (
    <section className={styles.copy}>
      <div className={styles.containerCopy}>
        <p className={roboto.className}>Todos os direitos reservados</p>
      </div>
    </section>
  );
};

export default Copy;
