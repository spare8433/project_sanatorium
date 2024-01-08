import { useEffect } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

interface Props {
  lat: number
  logt: number
}

const MapContainer = ({ lat, logt }: Props) => {
  useEffect(() => {
    // 마커가 표시될 위치입니다
    var markerPosition = new window.kakao.maps.LatLng(lat, logt)

    // 마커를 생성합니다
    var marker = {
      position: markerPosition,
    }

    let container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(lat, logt), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
      marker: marker,
    }

    let map = new window.kakao.maps.StaticMap(container, options) //지도 생성 및 객체 리턴
  }, [])

  return <div id="map" />
}

export default MapContainer
