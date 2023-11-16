import styles from "../CardMaterial/CardMaterial.module.scss";
import { sora, roboto } from "@/styles/fonts";
import Image from "next/image";
import DownloadButton from "../ui/DownloadButton/DownloadButton";

interface CardMaterialProps {
  title?: string; // Adicione esta linha para incluir a propriedade 'title'
  subtitle?: string;
  image?: string;
  context?: string;
}

const CardMaterial: React.FC<CardMaterialProps> = ({
  title,
  subtitle,
  image,
  context,
}) => {
  if (!title || !subtitle || !image || !context) {
    return null; // Adicione verificações para garantir que todas as propriedades necessárias estejam presentes
  }

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
            <DownloadButton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardMaterial;
