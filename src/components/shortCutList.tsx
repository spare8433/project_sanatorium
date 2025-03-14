import { SHORTCUT_ITEMS } from "@constants/shortCutItems";
import { ReactNode } from "react";
import { OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ShortCutItemProps {
  description: ReactNode;
  link: string;
  children: ReactNode;
}

const ShortCutItem = ({ description, link, children }: ShortCutItemProps) => {
  return (
    <OverlayTrigger placement="auto" overlay={<DescriptionBox>{description}</DescriptionBox>}>
      <ShortCutItemLink to={link}>{children}</ShortCutItemLink>
    </OverlayTrigger>
  );
};

const ShortCutList = () => {
  return (
    <ShortCutListContainer>
      <ShortCutListBox>
        <h1> 특정 요양시설을 찾으세요?</h1>

        <ShortCutItemList>
          {SHORTCUT_ITEMS.map(({ overlayContent, shortcutItem }, index) => (
            <ShortCutItem key={`shortCutItem_${index}`} description={overlayContent} link={shortcutItem.link}>
              {shortcutItem.content}
            </ShortCutItem>
          ))}
        </ShortCutItemList>
      </ShortCutListBox>
    </ShortCutListContainer>
  );
};

export default ShortCutList;

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
