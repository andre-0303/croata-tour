import { Container } from "@/components/ui/container";
import { TouristCard } from "@/components/features/tourist-card";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background py-10">
        <Container>
          <div className="mb-8 mt-10">
            <Heading>Pontos Turísticos de Croatá</Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TouristCard
              title="IGREJA MATRIZ NOSSA SENHORA DAS DORES"
              description="O Turismo religioso é uma prática pontual em Croatá, tanto a igreja católica quanto as igrejas e templos evangélicos realizam eventos que atraem pessoas de todos os lugares."
              image="https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5e8334857d_igreja-nossa-senhora-dos-dores.jpg"
              category="Religioso"
            />

            <TouristCard
              title="MIRANTE TOCA DA ONÇA"
              description="Um importante ponto turístico ainda pouco explorado e conhecido pelo o homem. É um importante ponto turístico com um forte potencial para o desenvolvimento. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. "
              image="https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5e8850e0eb_bb0ae3e8-892d-409a-9c71-f9e46b2894a5.jpg"
              category="Natureza"
            />

            <TouristCard
              title="ENCONTRO DOS RIOS"
              description="Rio Piaus e Rio Inhuçu, um verdadeiro espetáculo da natureza que acontece no município de Croatá-ce. Espetáculo esse que originou o nome do distrito, sem dúvidas é um dos mais importantes e fabulosos atrativos turístico do nosso município."
              image="https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5ea23d2c5a_Croata-28.jpg"
              category="Natureza"
            />
            <TouristCard
              title="CASA DE PEDRAS"
              description="Mantém viva a memória de como viviam os escravos no século XIX. O Casarão de pedra revela em sua estrutura o sofrimento do negro africano. A casa é toda construída com paredes de pedra empilhada resistiu ao tempo. E em seu interior ainda há utensílios utilizados no período escravocrata."
              image="https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5e9b8d5700_Croata-18.jpg"
              category="Histórico"
            />
            <TouristCard
              title="CACHOEIRA DA PRATA"
              description="A Cachoeira da Prata, localizada no município de Croatá, Ceará, é um atrativo natural que encanta visitantes com sua beleza e tranquilidade. Situada entre as localidades de Barra do Sotero e o Sítio Vazante, a cachoeira é um destino popular para banhistas da região."
              image="https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5eb0d8f785_cachoeira.jpg"
              category="Natureza"
            />
            <TouristCard
              title="BOSQUE DE CROATÁ"
              description=" É uma floresta urbana de 60.000 m² localizada na sede do município. Conta com mais de 2.600 árvores de diversas espécies, mantidas por um sistema de irrigação exclusivo, que garante a preservação e a beleza do espaço. É um projeto inovador que transforma Croatá na única cidade da Serra a possuir um Central Park próprio."
              image="https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_6968f0b3cde09_BOSQ.jpg"
              category="Natureza e Lazer"
            />
          </div>
        </Container>
      </main>
    </>
  );
}
