import Container from "../components/Container";
import Titulo from "../components/Titulo";
import { GlobalStyle } from "../styles/GlobalStyle";

function PaginaInicial() {
  return (
    <div>
      <GlobalStyle/>
      <Titulo></Titulo>
      <Container></Container>
      
    </div>
  );
}

export default PaginaInicial;
