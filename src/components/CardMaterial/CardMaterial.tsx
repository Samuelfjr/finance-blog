import styles from "../CardMaterial/CardMaterial.module.scss";
import { sora, roboto } from "@/styles/fonts";
import Image from "next/image";
import DownloadButton from "../ui/DownloadButton/DownloadButton";

interface CardMaterialProps {
  title?: string;
  subtitle?: string;
  image?: string;
  context?: string;
  materialId: string; 
}

const CardMaterial: React.FC<CardMaterialProps> = ({
  title,
  subtitle,
  image,
  context,
  materialId,
}) => {
  if (!title || !subtitle || !image || !context || !materialId) {
    return null;
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
            <DownloadButton materialId={materialId} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardMaterial;
