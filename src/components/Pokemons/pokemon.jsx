import styled from 'styled-components';


export const SearchComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 5rem;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: normal;
`;

export const Input = styled.input`
  width: 65vw;
  padding: 1rem;
  border: 1px solid #efe8e8;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px #bdb8b8);
`;

export const InputButton = styled.input`
  width: 5vw;
  padding: 0.7rem;
  border: 1px solid #0003;
  border-radius: 7px;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  padding: 0.6rem;
  background-color: green;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 180px;
  background-color: aqua;
  border-radius: 7px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.6rem;
`;

export const Story = styled.div`
display: flex;
justify-content: center;
`;