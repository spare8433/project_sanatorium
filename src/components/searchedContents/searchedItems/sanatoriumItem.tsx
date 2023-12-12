import { SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import styled from 'styled-components'
import { ItemStyle } from './searchedItem.style'

const ItemContainor = styled(ItemStyle)``

interface Props {
  item: SanatoriumDetailData | WelfareServiceDetailData
  showFn: (item: SanatoriumDetailData | WelfareServiceDetailData) => void
}

const SanatoriumItem = ({ item, showFn }: Props) => {
  return (
    <ItemContainor onClick={() => showFn(item)}>
      <h4>{item.FACLT_NM}</h4>
      <li>
        <b>분류:</b> {item.FACLT_KIND_NM}
      </li>
      <li>
        <b>주소:</b> {item.REFINE_ROADNM_ADDR}
      </li>
      <li>
        <b>설립일자:</b> {item.FACLT_INSTL_DETAIL_DE}
      </li>
    </ItemContainor>
  )
}

export default SanatoriumItem
