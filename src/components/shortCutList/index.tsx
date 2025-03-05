import "bootstrap/dist/css/bootstrap.min.css";
import { OverlayTrigger } from "react-bootstrap";
import { ShortCutItemLink, ShortCutItemList, ShortCutListBox, ShortCutListContainor, TextBox } from "./style";
import { ReactNode } from "react";
import { Placement } from "react-bootstrap/esm/types";
import { SHORTCUT_ITEMS } from "@constants/shortCutItems";

interface ShortCutItemProps {
  overlayContent: ReactNode;
  placement: Placement;
  link: string;
  children: ReactNode;
}

const ShortCutItem = ({ overlayContent, placement, link, children }: ShortCutItemProps) => {
  return (
    <OverlayTrigger placement={placement} overlay={<TextBox>{overlayContent}</TextBox>}>
      <ShortCutItemLink to={link}>{children}</ShortCutItemLink>
    </OverlayTrigger>
  );
};

const ShortCutList = () => {
  return (
    <ShortCutListContainor>
      <ShortCutListBox>
        <h4> 특정 요양시설을 찾으세요?</h4>

        <ShortCutItemList>
          {SHORTCUT_ITEMS.map(({ placement, overlayContent, shortcutItem }, index) => (
            <ShortCutItem
              key={`shortCutItem_${index}`}
              placement={placement}
              overlayContent={overlayContent}
              link={shortcutItem.link}
            >
              {shortcutItem.content}
            </ShortCutItem>
          ))}
        </ShortCutItemList>
      </ShortCutListBox>
    </ShortCutListContainor>
  );
};

export default ShortCutList;
