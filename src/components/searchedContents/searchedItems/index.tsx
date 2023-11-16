import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import HospitalItem from './hospitalItem'
import SanatoriumItem from './sanatoriumItem'

interface Props {
  dataArr: (HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData)[]
  facCtg: string
  showFn: (item: HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData) => void
}

const SearchedItems = ({ dataArr, facCtg, showFn }: Props) => {
  switch (facCtg) {
    case '요양병원':
      return (dataArr as HospitalDetailData[]).map((item, index) => (
        <HospitalItem key={`${item.INST_NM}_${index}`} item={item} showFn={showFn} />
      ))
    case '요양시설':
      return (dataArr as SanatoriumDetailData[]).map((item, index) => (
        <SanatoriumItem key={`${item.FACLT_NM}_${index}`} item={item} showFn={showFn} />
      ))
    case '재가노인복지시설':
      return (dataArr as WelfareServiceDetailData[]).map((item, index) => (
        <SanatoriumItem key={`${item.FACLT_NM}_${index}`} item={item} showFn={showFn} />
      ))
    default:
      return <>데이터가 없습니다</>
  }
}

export default SearchedItems
