import { Link } from "react-router-dom";
import styled from "styled-components";
import bannerHome from "../Assets/Images/bannerHome.svg";

export const BodyStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  height: calc(100vh - 10vh);
  gap: 5rem;
`;

const CallStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25vw;
`;

const BannerStyle = styled.div`
  display: flex;
`;

const BannerPikachu = styled.img`
  width: 45vw;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: left;
  width: 24vw;
`;

const Subtitle = styled.p`
  width: 80%;
  margin-bottom: 6rem;
  text-align: left;
`;

const Button = styled.button`
  width: 15rem;
  padding: 1rem;
  border-radius: 7px;
  border: none;
  background-color: #48d0b0;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
`;

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
