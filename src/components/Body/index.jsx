import { Link } from "react-router-dom";
import bannerHome from "../../Assets/Images/bannerHome.svg";
import './body'
import { BodyStyle, Button, CallStyled, Subtitle, Title } from "./body";



export function Body() {
  return (
    <BodyStyle>
      <CallStyled>
        <Title>Qual pokemon você escolheria?</Title>
        <Subtitle>
          Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
          habilidades.
        </Subtitle>
        <Link to={"/pokemons"}>
          <Button>Veja os pokemons</Button>
        </Link>
      </CallStyled>
      <BannerStyle>
        <BannerPikachu src={bannerHome} alt="Imagem do pikachu" />
      </BannerStyle>
    </BodyStyle>
  );
}
