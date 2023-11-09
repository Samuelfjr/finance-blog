import { GetServerSideProps } from "next";
import styles from ".././styles/SupportMaterial.module.scss";
import CardMaterial from "../components/CardMaterial/CardMaterial";
import { sora } from "@/styles/fonts";

import { useQuery, gql } from "@apollo/client";
import { client } from "@/lib/apollo";

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

interface AllSupportMaterial {
  supportMaterials: {
    id: string;
    title: string;
    subtitle: string;
    image: {
      url: string;
    };
    content: {
      url: string;
    };
  }[];
}

export default function SupportMaterial({
  supportMaterials,
}: AllSupportMaterial) {
  return (
    <section className={styles.supportMaterial}>
      <header>
        <h1 className={sora.className}>
          Explore Nosso Material de Apoio e Transforme Suas Finanças Hoje Mesmo
        </h1>
      </header>
      <div className={styles.containerSupportMaterial}>
        {supportMaterials.map((supportMaterial, index) => {
          return (
            <CardMaterial
              key={supportMaterial.id}
              title={supportMaterial.title}
              subtitle={supportMaterial.subtitle}
              image={supportMaterial.image.url}
              context={supportMaterial.content.url}
            />
          );
        })}
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await client.query({ query: GET_ALL_SUPPORT_MATERIAL });
  return {
    props: {
      supportMaterials: data.supportMaterials,
    },
  };
};
