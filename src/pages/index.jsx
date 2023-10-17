import { sora, roboto } from '@/styles/fonts';
import styles from '../styles/Home.module.scss';

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.containerPage}>
      <section className={styles.supportMaterial}>
        <div className={styles.title}>
          <h1 className={sora.className}>
          Explore Nosso Material de Apoio e Transforme Suas Finanças Hoje Mesmo
          </h1>
        </div>

        <div className={styles.backingCardContainer}>
          <div className={styles.card}>
            <Image 
              src="/spreadsheet.jpg"
              width={367}
              height={200}
              alt='planilha'
            />

            <div className={styles.partCard}>
              <h3 className={sora.className}>Calculadora Primeiro Milhão</h3>

              <p className={roboto.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>

              <div className={styles.buttonContent}>
                <Link className={roboto.className} href='/'>Acessar Conteúdo</Link>
              </div>
            </div>

          </div>

          <div className={styles.card}>
            <Image 
              src="/ebook.jpg"
              width={367}
              height={200}
              alt='ebook'
            />

            <div className={styles.partCard}>
              <h3 className={sora.className}>Ebook Bolsa de Valores</h3>

              <p className={roboto.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>

              <div className={styles.buttonContent}>
                <Link className={roboto.className} href='/'>Acessar Conteúdo</Link>
              </div>
            </div>

          </div>

         
        </div>
        
      </section>

      </div>
    </main>
    )
}
