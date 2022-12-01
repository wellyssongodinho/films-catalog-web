import styled from "styled-components";

interface Props {
  IsTheMovieGenerated?: boolean;
  notFound?: boolean;
}

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.875rem;

`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1.2rem;

  background: #e9e6e3;
  border: none;
  border-radius: 5px;
  outline: none;

  transition: filter 200ms ease-in-out;

  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }

  img {
    width: 40px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
  }
`;

export const Description = styled.p`
  width: 30%;

  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;

  color: #fff;
  text-align: center;
`;