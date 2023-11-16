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
      <li className="type">{item.FACLT_KIND_NM}</li>
      <li className="address">{item.REFINE_ROADNM_ADDR}</li>
      <li className="tag">{item.FACLT_INSTL_DETAIL_DE}</li>
    </ItemContainor>
  )
}

export default SanatoriumItem
