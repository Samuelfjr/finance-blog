import styles from "../DownloadButton/DownloadButton.module.scss";
import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

interface DownloadButtonProps {
  materialId: string;
}

const GET_SUPPORT_MATERIAL_BY_ID = gql`
  query GetSupportMaterialById($id: ID!) {
    supportMaterial(where: { id: $id }) {
      id
      title
      content {
        url
      }
    }
  }
`;

const DownloadButton: React.FC<DownloadButtonProps> = ({ materialId }) => {
  const { loading, error, data } = useQuery(GET_SUPPORT_MATERIAL_BY_ID, {
    variables: { id: materialId },
  });

  const handleDownload = async (
    url: string,
    fileName: string,
    extension: string
  ) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${fileName}.${extension}`; // Atualizado para incluir a extensão correta

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

  const material = data?.supportMaterial;

  if (!material || !material.content?.url) {
    return <p>Conteúdo não encontrado.</p>;
  }

  const urlParts = material.content.url.split("/"); // Divide a URL por "/"
  const fileName = urlParts[urlParts.length - 1]; // Obtém o nome do arquivo da URL
  const extension = getExtension(fileName); // Obtém a extensão do arquivo

  return (
    <div className={styles.buttonContent}>
      <button
        className={styles.button}
        onClick={() =>
          handleDownload(material.content.url, material.title, extension)
        }
      >
        Baixar Conteúdo - {material.title}
      </button>
    </div>
  );
};

export default DownloadButton;
