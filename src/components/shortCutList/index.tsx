import "bootstrap/dist/css/bootstrap.min.css";

import { SHORTCUT_ITEMS } from "@constants/shortCutItems";
import { ReactNode } from "react";
import { OverlayTrigger } from "react-bootstrap";

import { DescriptionBox, ShortCutItemLink, ShortCutItemList, ShortCutListBox, ShortCutListContainer } from "./style";

interface ShortCutItemProps {
  overlayContent: ReactNode;
  link: string;
  children: ReactNode;
}

const ShortCutItem = ({ overlayContent, link, children }: ShortCutItemProps) => {
  return (
    <OverlayTrigger placement="auto" overlay={<DescriptionBox>{overlayContent}</DescriptionBox>}>
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
            <ShortCutItem key={`shortCutItem_${index}`} overlayContent={overlayContent} link={shortcutItem.link}>
              {shortcutItem.content}
            </ShortCutItem>
          ))}
        </ShortCutItemList>
      </ShortCutListBox>
    </ShortCutListContainer>
  );
};

export default ShortCutList;
