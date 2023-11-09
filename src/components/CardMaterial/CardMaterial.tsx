// // CardMaterial.tsx
// import styles from "../CardMaterial/CardMaterial.module.scss";
// import { sora, roboto } from "@/styles/fonts";
// import Image from "next/image";
// import DownloadButton from "../ui/DownloadButton/DownloadButton";

// interface CardMaterialProps {
//   material: {
//     id?: string;
//     title?: string;
//     subtitle?: string;
//     image?: {
//       url?: string;
//     };
//     content?: {
//       url?: string;
//     };
//   };
// }

// const CardMaterial: React.FC<CardMaterialProps> = ({ material }) => {
//   if (!material) {
//     return null;
//   }

//   return (
//     <article className={styles.cardMaterial} key={material.id}>
//       <div className={styles.card}>
//         <div className={styles.containerImage}>
//           <Image
//             className={styles.img}
//             src={material.image?.url || ""}
//             width={367}
//             height={200}
//             alt=""
//           />
//         </div>

//         <div className={styles.partCard}>
//           <h3 className={sora.className}>{material.title}</h3>
//           <p className={roboto.className}>{material.subtitle}</p>

//           <DownloadButton />
//         </div>
//       </div>
//     </article>
//   );
// };

// export default CardMaterial;

// CardMaterial.tsx
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
