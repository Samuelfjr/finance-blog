import { roboto } from "@/styles/fonts";

import styles from "./Author.module.scss";

const Author = () => {
  return (
    <div className={styles.author}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <p className={styles.name}>Rubens Figueiredo</p>
        <p className={styles.date}>10 de novembro</p>
      </div>
    </div>
  );
};

export default Author;
