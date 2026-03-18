import { Container } from "@/components/ui/container";
import { TouristCard } from "@/components/features/tourist-card";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  const touristSpots = [
    {
      title: "IGREJA MATRIZ NOSSA SENHORA DAS DORES",
      description:
        "O Turismo religioso é uma prática pontual em Croatá, tanto a igreja católica quanto as igrejas e templos evangélicos realizam eventos que atraem pessoas de todos os lugares.",
      image:
        "https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5e8334857d_igreja-nossa-senhora-dos-dores.jpg",
      category: "Religioso",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15785.5!2d-40.8499!3d-4.4826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c2b3b7e5f7e4b7d%3A0x4b5c8e5d7e3f2a1c!2sIgreja%20Matriz%20Nossa%20Senhora%20das%20Dores%2C%20Croat%C3%A1%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    },
    {
      title: "MIRANTE TOCA DA ONÇA",
      description:
        "Um importante ponto turístico ainda pouco explorado e conhecido pelo o homem. É um importante ponto turístico com um forte potencial para o desenvolvimento. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. ",
      image:
        "https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5e8850e0eb_bb0ae3e8-892d-409a-9c71-f9e46b2894a5.jpg",
      category: "Natureza",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.8!2d-40.8548!3d-4.4742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c2b3b7e5f7e4b7d%3A0x8f2a1c5d7e3f4b5c!2sMirante%20Toca%20da%20On%C3%A7a%2C%20Croat%C3%A1%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    },
    {
      title: "ENCONTRO DOS RIOS",
      description:
        "Rio Piaus e Rio Inhuçu, um verdadeiro espetáculo da natureza que acontece no município de Croatá-ce. Espetáculo esse que originou o nome do distrito, sem dúvidas é um dos mais importantes e fabulosos atrativos turístico do nosso município.",
      image:
        "https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5ea23d2c5a_Croata-28.jpg",
      category: "Natureza",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.1!2d-40.8597!3d-4.4658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c2b3b7e5f7e4b7d%3A0xa1c5d7e3f4b5c8f!2sEncontro%20dos%20Rios%2C%20Croat%C3%A1%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    },
    {
      title: "CASA DE PEDRAS",
      description:
        "Mantém viva a memória de como viviam os escravos no século XIX. O Casarão de pedra revela em sua estrutura o sofrimento do negro africano. A casa é toda construída com paredes de pedra empilhada resistiu ao tempo. E em seu interior ainda há utensílios utilizados no período escravocrata.",
      image:
        "https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5e9b8d5700_Croata-18.jpg",
      category: "Histórico",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.8!2d-40.8617!3d-4.4645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c2b3b7e5f7e4b7d%3A0xb5c8f2a1d7e3f4c!2sCasa%20de%20Pedras%2C%20Croat%C3%A1%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    },
    {
      title: "CACHOEIRA DA PRATA",
      description:
        "A Cachoeira da Prata, localizada no município de Croatá, Ceará, é um atrativo natural que encanta visitantes com sua beleza e tranquilidade. Situada entre as localidades de Barra do Sotero e o Sítio Vazante, a cachoeira é um destino popular para banhistas da região.",
      image:
        "https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_67b5eb0d8f785_cachoeira.jpg",
      category: "Natureza",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.7!2d-40.8576!3d-4.4592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c2b3b7e5f7e4b7d%3A0xc8f4b5a1e3d7f2!2sCachoeira%20da%20Prata%2C%20Croat%C3%A1%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    },
    {
      title: "BOSQUE DE CROATÁ",
      description:
        " É uma floresta urbana de 60.000 m² localizada na sede do município. Conta com mais de 2.600 árvores de diversas espécies, mantidas por um sistema de irrigação exclusivo, que garante a preservação e a beleza do espaço. É um projeto inovador que transforma Croatá na única cidade da Serra a possuir um Central Park próprio.",
      image:
        "https://croata.ce.gov.br/adm/fotos_municipio/FOTO_PONTO_6968f0b3cde09_BOSQ.jpg",
      category: "Natureza e Lazer",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.7!2d-40.8646!3d-4.4539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c2b3b7e5f7e4b7d%3A0xd7f2c8b5e4a1f3!2sBosque%20de%20Croat%C3%A1%2C%20Croat%C3%A1%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-background py-10">
        <Container>
          <div className="mb-8 mt-10">
            <Heading>Pontos Turísticos de Croatá</Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {touristSpots.map((spot, index) => (
              <TouristCard key={index} {...spot} />
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
