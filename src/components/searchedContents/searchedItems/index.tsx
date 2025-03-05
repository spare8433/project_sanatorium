import HospitalItem from "./hospitalItem";
import SanatoriumItem from "./sanatoriumItem";
import { memo } from "react";

interface Props {
  queryFacCtg: string | null;
  dataArr: (HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData)[];
  showFn: (item: HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData) => void;
}

const SearchedItems = ({ dataArr, showFn, queryFacCtg }: Props) => {
  switch (queryFacCtg) {
    case "요양병원":
      return (dataArr as HospitalDetailData[]).map((item, index) => (
        <HospitalItem key={`${item.INST_NM}_${index}`} item={item} showFn={showFn} />
      ));
    case "요양시설":
      return (dataArr as SanatoriumDetailData[]).map((item, index) => (
        <SanatoriumItem key={`${item.FACLT_NM}_${index}`} item={item} showFn={showFn} />
      ));
    case "재가노인복지시설":
      return (dataArr as ServiceFacilityDetailData[]).map((item, index) => (
        <SanatoriumItem key={`${item.FACLT_NM}_${index}`} item={item} showFn={showFn} />
      ));
    default:
      return <>데이터가 없습니다</>;
  }
};

export default memo(SearchedItems);
