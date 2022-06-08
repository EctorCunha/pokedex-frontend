import styled from 'styled-components';


export const BodyStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  height: calc(100vh - 10vh);
  gap: 5rem;
`;

export const CallStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25vw;
`;

export const BannerStyle = styled.div`
  display: flex;
`;

export const BannerPikachu = styled.img`
  width: 45vw;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: left;
  width: 24vw;
`;

export const Subtitle = styled.p`
  width: 80%;
  margin-bottom: 6rem;
  text-align: left;
`;

export const Button = styled.button`
  width: 15rem;
  padding: 1rem;
  border-radius: 7px;
  border: none;
  background-color: #48d0b0;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
`;