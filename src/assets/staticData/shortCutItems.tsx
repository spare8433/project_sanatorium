import { Placement } from 'react-bootstrap/esm/types'

interface ShortCutItemType {
  placement: Placement
  overlayContent: JSX.Element
  sortcutItem: {
    link: string
    content: JSX.Element
  }
}

export const ShortCutItems: ShortCutItemType[] = [
  {
    placement: 'right',
    overlayContent: (
      <>
        <h3>요양병원</h3>
        <p>
          <b>30인 이상</b>을 수용할 수 있는 의료서비스 제공을 목적으로 개설된 시설로 꾸준한 진료 및 치료, 재활이
          필요하신 분에게 필요합니다.
          <br />
          <b>※ 평가등급을 확인하세요.</b>
        </p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=요양병원',
      content: (
        <>
          <img src="/img/hospital.png" alt="nursing-hospital" />
          <span>요양병원</span>
        </>
      ),
    },
  },
  {
    placement: 'right',
    overlayContent: (
      <>
        <h3>노인요양시설</h3>
        <p>
          <b>10인 이상</b>을 수용할 수 있는 시설을 갖추고, 급식과 그 밖에 일상생활에 필요한 편의서비스를 제공합니다.
          <br />
          <b>※ 공동생활가정과 차이가 있지만 일반적으로 같이 요양원으로 분류합니다.</b>
        </p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=요양시설&detailCtg=노인요양공동생활가정',
      content: (
        <>
          <img src="/img/stay-home.png" alt="sanatorium " />
          <span>노인요양시설</span>
        </>
      ),
    },
  },
  {
    placement: 'right',
    overlayContent: (
      <>
        <h3>공동생활가정</h3>
        <p>
          <b>9인 이하</b>의 가정과 같은 환경에서 급식과 그 밖에 일상생활에 필요한 편의서비스를 제공합니다.
          <br />
          <b>※ 노인요양시설과 차이가 있지만 일반적으로 같이 요양원으로 분류합니다.</b>
        </p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=요양시설&detailCtg=노인공동생활가정',
      content: (
        <>
          <img src="/img/nursing-room.png" alt="nursing-room" />
          <span>공동생활가정</span>
        </>
      ),
    },
  },
  {
    placement: 'left',
    overlayContent: (
      <>
        <h3>방문 간호</h3>
        <p>의사, 한의사 등이 가정을 방문하여 간호, 진료의 보조, 요양에 관한 상담 등을 제공합니다.</p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=재가노인복지시설&detailCtg=방문간호',
      content: (
        <>
          <img src="/img/nursing-care.png" alt="nursing-care" />
          <span>방문간호</span>
        </>
      ),
    },
  },
  {
    placement: 'left',
    overlayContent: (
      <>
        <h3>방문요양</h3>
        <p>어르신 가정에 요양보호사가 직접 방문하여 필요한 일상 생활을 지원합니다.</p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=재가노인복지시설&detailCtg=방문요양',
      content: (
        <>
          <img src="/img/support.png" alt="visiting-care" />
          <span>방문요양</span>
        </>
      ),
    },
  },
  {
    placement: 'right',
    overlayContent: (
      <>
        <h3>방문목욕</h3>
        <p>목욕 시설을 갖춘 차량, 혹은 가정 내에서 목욕을 지원하는 서비스입니다.</p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=재가노인복지시설&detailCtg=방문목욕',
      content: (
        <>
          <img src="/img/bath.png" alt="visiting-bath" />
          <span>방문목욕</span>
        </>
      ),
    },
  },
  {
    placement: 'right',
    overlayContent: (
      <>
        <h3>주야간보호</h3>
        <p>주간 또는 야간 일정시간 어르신을 보호하며 신체활동 및 심신기능을 지원하는 서비스입니다.</p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=재가노인복지시설&detailCtg=주야간보호',
      content: (
        <>
          <img src="/img/protect-day.png" alt="all-day-protection" />
          <span>주야간보호</span>
        </>
      ),
    },
  },
  {
    placement: 'right',
    overlayContent: (
      <>
        <h3>단기보호</h3>
        <p>
          장기요양이 필요한 수급자를 일정 기간 동안 장기요양기관에 보호하여 신체적 활동 지원, 정신 기능 유지 및 향상을
          위한 교육, 훈련을 제공하는 서비스입니다.
        </p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=재가노인복지시설&detailCtg=단기보호',
      content: (
        <>
          <img src="/img/short-term-protection.png" alt="short-term-protection" />
          <span>단기보호</span>
        </>
      ),
    },
  },
  {
    placement: 'left',
    overlayContent: (
      <>
        <h3>재가노인지원서비스</h3>
        <p>
          경제적, 신체적, 정신적, 사회적 이유로 일상생활유지가 곤란한 취약 및 위기노인에게 전문사례관리를 비롯한 상담,
          자원연계, 일상생활지원 등의 서비스 등을 제공합니다.
        </p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=재가노인복지시설&detailCtg=재가노인지원서비스',
      content: (
        <>
          <img src="/img/home-support-service.png" alt="home-support-service" />
          <span>재가노인지원</span>
        </>
      ),
    },
  },
  {
    placement: 'left',
    overlayContent: (
      <>
        <h3>복지용구</h3>
        <p>
          고령의 어르신 또는 노인성 질병 등의 환자에게 일상생활 및 신체활동을 지원하고 인지기능의 유지와 그 기능 향상에
          필요한 용구를 대여 및 판매하는 시설
        </p>
      </>
    ),
    sortcutItem: {
      link: '/search?facCtg=재가노인복지시설&detailCtg=복지용구',
      content: (
        <>
          <img src="/img/wheelchair.png" alt="wheelchair" />
          <span>복지용구</span>
        </>
      ),
    },
  },
]
