import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShortCutListContainor = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.main};
  margin-bottom: 4em;
`;

export const ShortCutListBox = styled.div`
  max-width: 1024px;
  padding: 0 2rem;
  margin: 0 auto;

  h4 {
    color: #fff;
    margin-bottom: 1rem;
  }
`;

export const ShortCutItemList = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  padding: 2rem 4%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: 12rem; */
  grid-column-gap: 4%;
  grid-auto-flow: row;

  @media ${({ theme }) => theme.device.tablet} {
    grid-column-gap: 0;
    padding: 2rem 1%;
  }
`;

export const ShortCutItemLink = styled(Link)`
  /* width: 14rem; */
  aspect-ratio: 1/1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: 1.7rem;
  transition: background-color 0.2 ease-in-out;
  border-radius: 1rem;
  padding: 1rem;
  gap: 0.5rem;

  &:hover {
    background-color: lightgray;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.6rem;
  }

  span {
    font-weight: 600;
    text-align: center;
  }

  img {
    width: 6.4rem;
    margin-bottom: 0.5rem;
  }
`;

export const TextBox = styled.div`
  width: 40rem;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin: 0 1rem;

  h3 {
    margin-bottom: 1rem;
  }
`;
