import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShortCutListContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.main};
  margin-bottom: 4em;
`;

export const ShortCutListBox = styled.div`
  max-width: 1024px;
  padding: 0 2rem;
  margin: 0 auto;

  h1 {
    color: #fff;
    margin-bottom: 1.4rem;
  }
`;

export const ShortCutItemList = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem 4%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-column-gap: 2rem;
  grid-auto-flow: row;
`;

export const ShortCutItemLink = styled(Link)`
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 1.6rem;
  transition: background-color 0.2 ease-in-out;
  border-radius: 1rem;
  padding: 2rem;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors["background-muted"]};
  }

  span {
    font-weight: bold;
    text-align: center;
  }

  img {
    width: 6.4rem;
    margin-bottom: 0.5rem;
  }
`;

export const DescriptionBox = styled.div`
  width: 40rem;
  background-color: ${({ theme }) => theme.colors["background-muted"]};
  border: 0.1rem black;
  padding: 2rem;
  border-radius: 1rem;
  margin: 0 1rem;
  border: 0.1rem lightgrey solid;

  h3 {
    margin-bottom: 1rem;
  }
`;
