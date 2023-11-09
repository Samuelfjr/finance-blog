import styles from "../DownloadButton/DownloadButton.module.scss";
import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_ALL_SUPPORT_MATERIAL = gql`
  query GetSupportMaterial {
    supportMaterials {
      id
      title
      subtitle
      image {
        url
      }
      content {
        url
      }
    }
  }
`;

const DownloadButton: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_SUPPORT_MATERIAL);

  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileName;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Erro ao baixar o arquivo:", error);
    }
  };

  const getExtension = (url: string) => {
    const match = url.match(/\.([a-z]+)(?:[?#]|$)/i);
    return match ? match[1] : "";
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro ao buscar o conteúdo do arquivo.</p>;

  return (
    <div>
      {data.supportMaterials.map((material: any) => (
        <div key={material.id} className={styles.buttonContent}>
          <button
            onClick={() => {
              const extension = getExtension(material.content.url);
              handleDownload(
                material.content.url,
                `${material.title}.${extension}`
              );
            }}
          >
            Baixar Conteúdo - {material.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DownloadButton;
