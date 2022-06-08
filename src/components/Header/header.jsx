import styled from 'styled-components';


export const HeaderStyle = styled.section`
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

export const UnList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  list-style-type: none;
`;

export const Li = styled.li`
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