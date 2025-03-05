import styled from "styled-components";
import { ItemStyle } from "./searchedItem.style";
import { memo } from "react";

const ItemContainor = styled(ItemStyle)``;

interface Props {
  item: HospitalDetailData;
  showFn: (item: HospitalDetailData) => void;
}

const HospitalItem = ({ item, showFn }: Props) => {
  return (
    <ItemContainor onClick={() => showFn(item)}>
      <h4>{item.INST_NM}</h4>
      <li>
        <b>분류</b> {item.DIV_NM}
      </li>
      <li>
        <b>주소</b> {item.REFINE_ROADNM_ADDR}
      </li>
      <li>
        <b>등급</b> {item.GRAD}
      </li>
    </ItemContainor>
  );
};

export default memo(HospitalItem);
