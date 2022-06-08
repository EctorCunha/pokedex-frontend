import { Link } from "react-router-dom";
import logo from '../../Assets/Images/logo.svg'
import './header'
import { HeaderStyle, Li, UnList } from "./header";




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
