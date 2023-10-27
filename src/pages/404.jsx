import styles from "../styles/Custom404.module.scss";
import { roboto } from "@/styles/fonts";
import Error from "../components/ui/Error/Error";

const Custom404 = () => {
  return (
    <section className={styles.errorContainer}>
      <h1 className={roboto.className}>Oops!! Error 404</h1>
      <Error text="Essa página não existe." />
    </section>
  );
};

export default Custom404;
