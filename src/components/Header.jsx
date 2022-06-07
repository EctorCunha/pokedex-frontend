import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../Assets/Images/logo.svg'

const HeaderStyle = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  position: absolute;
  inset: 0;
  filter: drop-shadow(0px 4px 4px #bdb8b8);
`;

const UnList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  list-style-type: none;
`;

const Li = styled.li`
   position: relative;
   text-decoration: none;

  ::after{
    content: "";
    position: absolute;
    background-color: #333;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
  }

  :hover::after{
    width: 100%;
  }

  :active{
    color:red;
  }
`;


export function Header() {

  return (
    <HeaderStyle>
      <img src={logo} alt="Logo da página - Pokemon" />
      <UnList>
        <Link to={'/'} style={{textDecoration: 'none', color: 'black', fontSize:'1.5rem',}}><Li>Home</Li></Link>
        <Link to={'/pokemons'} style={{textDecoration: 'none',  color: 'black', position:'relative', fontSize:'1.5rem',}}><Li>Pokemons</Li></Link>
        <Link to={'/contato'} style={{textDecoration: 'none',  color: 'black', position:'relative', fontSize:'1.5rem',}}><Li>Contato</Li></Link>
      </UnList>
    </HeaderStyle>
  );
}
