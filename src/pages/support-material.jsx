import styles from ".././styles/SupportMaterial.module.scss";
import CardMaterial from "../components/CardMaterial/CardMaterial";
import { sora } from "@/styles/fonts";

const SupportMaterial = () => {
  return (
    <section className={styles.supportMaterial}>
      <header>
        <h1 className={sora.className}>
          Explore Nosso Material de Apoio e Transforme Suas Finanças Hoje Mesmo
        </h1>
      </header>
      <div className={styles.containerSupportMaterial}>
        <CardMaterial />
        <CardMaterial />
        <CardMaterial />
        <CardMaterial />
        <CardMaterial />
        <CardMaterial />
      </div>
    </section>
  );
};

export default SupportMaterial;
