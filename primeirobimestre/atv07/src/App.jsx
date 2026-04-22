import Header from "./Header";
import Navigation from "./Navigation";
import Article from "./Article";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  const dadosPost = {
    titulo: "Como a Energia Solar Funciona na Sua Residência",
    autor: "Equipe Editorial",
    data: "04 de março de 2026",
    conteudoParte1: "O funcionamento da energia solar baseia-se no efeito fotovoltaico. Quando a luz do sol atinge as células de silício nos painéis, ela desloca elétrons, criando uma corrente elétrica contínua. Esse processo é uma das formas mais limpas de gerar eletricidade hoje em dia.",
    conteudoParte2: "Para utilizar essa energia nos eletrodomésticos, é necessário um equipamento chamado inversor, que converte a corrente contínua em corrente alternada. Além da economia financeira, o usuário contribui diretamente para a redução da emissão de gases poluentes na atmosfera.",
    imagemSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    imagemAlt: "Painéis solares instalados no telhado de uma casa moderna",
    imagemLegenda: "Sistema fotovoltaico residencial típico instalado para redução de custos na conta de luz."
  };

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Article 
          titulo={dadosPost.titulo}
          autor={dadosPost.autor}
          data={dadosPost.data}
          conteudoParte1={dadosPost.conteudoParte1}
          conteudoParte2={dadosPost.conteudoParte2}
          imagemSrc={dadosPost.imagemSrc}
          imagemAlt={dadosPost.imagemAlt}
          imagemLegenda={dadosPost.imagemLegenda}
        />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}