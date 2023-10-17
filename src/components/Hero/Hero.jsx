import { roboto, sora } from '@/styles/fonts';
import Image from 'next/image'

import styles from './Hero.module.scss';

const Hero = () => {
  return (
   <section className={styles.hero}>
    <div className={styles.containerHero}>
      <Image 
          alt='imagem de prédios'
          src="/hero.jpg"
          fill
          sizes="100vw"  
      />
    </div>

    <div className={styles.legend}>
      <div className={styles.containerLegend}>
        <h1 className={sora.className}>
          Desvendando o Mundo das Finanças
        </h1>
        <h4>Rubens Machado</h4>
      </div>
        <div className={styles.containerSearchBar}>
          <input className={styles.searchBar} id='search-bar' type="text" name='searchbar' placeholder='Buscar' />
          <Image 
            src='/search.svg'
            alt='lupa de pesquisa'
            width={18}
            height={18}
          />
        </div>
      </div>
   </section>
  );
};

export default Hero;