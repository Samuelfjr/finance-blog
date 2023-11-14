import { GetServerSideProps } from "next";
import styles from ".././styles/SupportMaterial.module.scss";
import CardMaterial from "../components/CardMaterial/CardMaterial";
import { sora } from "@/styles/fonts";

import { useQuery, gql } from "@apollo/client";
import { client } from "@/lib/apollo";

import Page from "../components/Page";

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
    <Page
      title="Guias Essenciais de Investimento e Planilhas Financeiras - Seu Caminho para uma Vida Financeira Sólida"
      description="Explore nossos ebooks exclusivos e planilhas financeiras para orientação prática em investimentos, orçamento e gestão financeira pessoal. Transforme suas finanças com ferramentas especializadas e conhecimentos valiosos. Descubra estratégias de investimento, crie um orçamento eficiente e alcance seus objetivos financeiros. Comece a construir um futuro financeiro sólido hoje com nossos recursos de alta qualidade."
    >
      <section className={styles.supportMaterial}>
        <header>
          <h1 className={sora.className}>
            Explore Nosso Material de Apoio e Transforme Suas Finanças Hoje
            Mesmo
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
    </Page>
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
