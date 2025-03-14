import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => unknown;
        StaticMap: new (container: HTMLElement, options: unknown) => unknown;
      };
    };
  }
}

interface Props {
  lat: number;
  logt: number;
}

const KakaoMap = ({ lat, logt }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 state 설정
    setIsClient(true);
  }, []);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (!isClient) return;

    if (!mapRef.current) return;

    const { kakao } = window;

    if (!kakao?.maps) {
      console.error("Kakao Maps SDK가 로드되지 않았습니다.");
      return;
    }

    // 마커가 표시될 위치입니다
    const position = new kakao.maps.LatLng(lat, logt);

    // 마커를 생성합니다
    const marker = { position };

    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(lat, logt), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
      marker: marker,
    };

    new kakao.maps.StaticMap(container as HTMLElement, options); //지도 생성 및 객체 리턴
  }, [lat, logt, isClient]);

  return <div id="map" ref={mapRef} />;
};

export default KakaoMap;
