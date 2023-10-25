import styles from "../styles/Custom404.module.scss";

const Custom404 = () => {
  return (
    <section className={styles.section}>
      <h1>Oops!! Error 404</h1>
      <div className={styles.error}>
        <h2>Essa página não existe.</h2>
        <Link href="/">Voltar para artigos</Link>
      </div>
    </section>
  );
};

export default Custom404;
