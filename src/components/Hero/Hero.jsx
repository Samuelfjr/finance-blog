import { roboto, sora } from "@/styles/fonts";
import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.containerHero}>
        <Image
          className={styles.heroDesktop}
          alt="imagem de prédios"
          src="/hero.jpg"
          fill
          sizes="100vw"
        />
        <Image
          className={styles.heroTablet}
          alt="imagem de prédios"
          src="/hero-tablet.jpg"
          fill
          sizes="100vw"
        />
        <Image
          className={styles.heroMobile}
          alt="imagem de prédios"
          src="/hero-mobile.jpg"
          fill
          sizes="100vw"
        />
      </div>

      <div className={styles.legend}>
        <div className={styles.containerLegend}>
          <h1 className={sora.className}>Desvendando o Mundo das Finanças</h1>
          <h4 className={sora.className}>Rubens Machado</h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
