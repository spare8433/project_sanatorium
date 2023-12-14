import {
  FacilityType,
  HosGradeListType,
  SanatoriumFacCtgType,
  WelfareServiceFacCtgType,
} from '@assets/staticData/facilityType'
import useInput from '@hooks/useInput'
import { createContext, useCallback, useState } from 'react'

type DetailCtgType = WelfareServiceFacCtgType | SanatoriumFacCtgType | '전체'
type ProfitType = '영리' | '비영리' | '전체'
type GradeType = HosGradeListType | '전체'

interface ContextType {
  states: {
    searchText: string
    facCtg: FacilityType
    city: string
    province: string
    detailCtg: DetailCtgType
    profit: ProfitType
    grade: GradeType
    p: number
  }
  setStates: {
    setFacCtg: React.Dispatch<React.SetStateAction<FacilityType>>
    setCity: React.Dispatch<React.SetStateAction<string>>
    setProvince: React.Dispatch<React.SetStateAction<string>>
    setSearchText: React.Dispatch<React.SetStateAction<string>>
    setDetailCtg: React.Dispatch<React.SetStateAction<DetailCtgType>>
    setProFit: React.Dispatch<React.SetStateAction<ProfitType>>
    setGrade: React.Dispatch<React.SetStateAction<GradeType>>
    setP: React.Dispatch<React.SetStateAction<number>>
  }
  changeFns: {
    changeSearchText: (e: React.ChangeEvent<any>) => void
    changeFacCtg: (e: React.ChangeEvent<any>) => void
    changeCity: (e: React.ChangeEvent<any>) => void
    changeProvince: (e: React.ChangeEvent<any>) => void
    changeDetailCtg: (e: React.ChangeEvent<any>) => void
    changeProfit: (e: React.ChangeEvent<any>) => void
    changeGrade: (e: React.ChangeEvent<any>) => void
  }
  getCurrentQuery: () => string
  getPaginationQuery: (pageNum: number) => string
}

const SearchOptionContext = createContext<ContextType>({
  states: {
    searchText: '',
    facCtg: '요양병원',
    city: '전체',
    province: '경기도',
    detailCtg: '전체',
    profit: '전체',
    grade: '전체',
    p: 1,
  },
  setStates: {
    setFacCtg: () => {},
    setCity: () => {},
    setProvince: () => {},
    setSearchText: () => {},
    setDetailCtg: () => {},
    setProFit: () => {},
    setGrade: () => {},
    setP: () => {},
  },
  changeFns: {
    changeSearchText: () => {},
    changeFacCtg: () => {},
    changeCity: () => {},
    changeProvince: () => {},
    changeDetailCtg: () => {},
    changeProfit: () => {},
    changeGrade: () => {},
  },
  getCurrentQuery: () => '',
  getPaginationQuery: (pageNum: number = 1) => '',
})

const SearchOptionProvider = ({ children }: { children: React.ReactNode }) => {
  let getParameter = useCallback(
    (key: string) => new URLSearchParams(window.location.search).get(key),
    [window.location.search],
  )

  const [facCtg, changeFacCtg, setFacCtg] = useInput<FacilityType>(
    (getParameter('facCtg') ?? '요양병원') as FacilityType,
  )
  const [city, changeCity, setCity] = useInput(getParameter('city') ?? '전체')
  const [province, changeProvince, setProvince] = useInput('경기도')
  const [searchText, changeSearchText, setSearchText] = useInput(getParameter('searchText') ?? '')
  const [detailCtg, changeDetailCtg, setDetailCtg] = useInput<DetailCtgType>(
    (getParameter('detailCtg') ?? '전체') as DetailCtgType,
  )
  const [profit, changeProfit, setProFit] = useInput<ProfitType>(
    (getParameter('profit') ?? '전체') as ProfitType,
  )
  const [grade, changeGrade, setGrade] = useInput<GradeType>(
    (getParameter('grade') ?? '전체') as GradeType,
  )
  const [p, setP] = useState(parseInt(getParameter('p') ?? '1'))

  const states = {
    searchText,
    facCtg,
    city,
    province,
    detailCtg,
    profit,
    grade,
    p,
  }

  const changeFns = {
    changeSearchText,
    changeFacCtg,
    changeCity,
    changeProvince,
    changeDetailCtg,
    changeProfit,
    changeGrade,
  }

  const setStates = {
    setFacCtg,
    setCity,
    setProvince,
    setSearchText,
    setDetailCtg,
    setProFit,
    setGrade,
    setP,
  }

  const getCurrentQuery = useCallback(() => {
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
  }, [facCtg, city, searchText, detailCtg, profit, grade])

  const getPaginationQuery = useCallback(
    (pageNum: number) => {
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
      searchQuery += `&p=${pageNum}`
      return searchQuery
    },
    [facCtg, city, searchText, detailCtg, profit, grade],
  )

  return (
    <SearchOptionContext.Provider
      value={{ states, setStates, changeFns, getCurrentQuery, getPaginationQuery }}
    >
      {children}
    </SearchOptionContext.Provider>
  )
}

export { SearchOptionProvider }

export default SearchOptionContext
