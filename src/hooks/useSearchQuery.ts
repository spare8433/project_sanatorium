import { SearchStatesType } from 'types/searchState'

const useSearchQuery = () => {
  const getSearchQuery = (queryObj: SearchStatesType) => {
    const { facCtg, city, searchText, detailCtg, profit, grade } = queryObj
    let searchQuery = `?facCtg=${facCtg}&city=${city}&searchText=${searchText}`
    switch (facCtg) {
      case '요양병원':
        searchQuery += `&grade=${grade}`
        break
      case '요양시설':
      case '재가노인복지시설':
        searchQuery += `&detailCtg=${detailCtg}&profit=${profit}`
        break
      default:
        throw Error
    }
    searchQuery += `&p=1`
    return searchQuery
  }

  return getSearchQuery
}

export default useSearchQuery
