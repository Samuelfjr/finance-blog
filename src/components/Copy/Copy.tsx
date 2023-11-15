import { roboto } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import { sora } from "@/styles/fonts";

import styles from "./Copy.module.scss";

const Copy = () => {
  return (
    <section className={styles.copy}>
      <div className={styles.containerCopy}>
        <p className={roboto.className}>©2023 Todos os direitos reservados.</p>
        <Link
          className={sora.className}
          href="https://samuelfjr.github.io/dev-links-fjr/"
          target="_blank"
        >
          Desenvolvido por <b>Samuelfjr</b>
        </Link>
      </div>
    </section>
  );
};

export default Copy;
