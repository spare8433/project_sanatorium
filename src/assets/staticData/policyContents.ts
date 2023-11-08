export type PolicyKeywordsType = '노인정책' | '노인지원' | '요양보험제도' | '요양보험운영'

export const PolicyKeywords: PolicyKeywordsType[] = [
  '노인정책',
  '노인지원',
  '요양보험제도',
  '요양보험운영',
]

export const PolicyContents: {
  [key in PolicyKeywordsType]: {
    id: string
    tab_item_title: string
    tab_item_content: string
  }[]
} = {
  노인정책: [
    {
      id: 'a10712010100',
      tab_item_title: '치매검진사업',
      tab_item_content:
        '치매의 위험이 높은 만60세 이상 어르신을 대상으로 치매 조기검진을 실시하여 치매환자를 조기에 발견 · 관리\n\n치매환자 및 그 가족들의 삶의 질 제고',
    },
    {
      id: 'a10712010200',
      tab_item_title: '치매치료관리비지원사업',
      tab_item_content:
        '치매를 조기에 치료함으로써 효과적으로 치매증상을 호전시키거나 중증화를 방지하여 궁극적으로 노후 삶의 질 제고',
    },
    {
      id: 'a10712010300',
      tab_item_title: '노인실명예방관리사업',
      tab_item_content: '노인 안 검진 및 개안수술, 저시력 노인을 위한 재활사업 등 노인실명예방관리',
    },
    {
      id: 'a10712010400',
      tab_item_title: '노인맞춤돌봄서비스',
      tab_item_content:
        '일상생활 영위가 어려운 취약노인에게 적절한 돌봄 서비스를 제공하여 안정적인 노후생활 보장, 노인의 기능·건강 유지 및 악화 예방',
    },
    {
      id: 'a10712010500',
      tab_item_title: '노인주거복지시설',
      tab_item_content: '양로시설,노인공동생활가정,노인복지주택 등등 입소시설 입소 지원',
    },
  ],
  노인지원: [
    {
      id: 'a10712020100',
      tab_item_title: '노인 일자리 및 사회활동 지원 사업',
      tab_item_content:
        '노인이 활기차고 건강한 노후생활을 영위할 수 있도록 공익활동, 일자리, 재능나눔 등 다양한 사회활동을 지원하여 노인복지 향상에 기여',
    },
    {
      id: 'a10712020200',
      tab_item_title: '노인자원봉사활성화',
      tab_item_content:
        '노인의 경륜을 사회에 재투자할 수 있도록 노인자원봉사를 활성화하여 노인의 적극적 사회참여 및 노인의 인적자원 활용 극대화 추진',
    },
    {
      id: 'a10712020300',
      tab_item_title: '장사제도',
      tab_item_content: '장사정책 안내',
    },
    {
      id: 'a10712020400',
      tab_item_title: '노인여가복지 지원 사업',
      tab_item_content: '노인여가복지시설 종류 안내 및 현황',
    },
  ],
  요양보험제도: [
    {
      id: 'a10712030100',
      tab_item_title: '노인장기요양보험제도',
      tab_item_content:
        '고령이나 노인성 질병 등으로 일상생활을 혼자서 수행하기 어려운 이들에게 신체활동 및 일상생활 지원 등의 서비스를 제공하여 노후 생활의 안정과 그 가족의 부담을 덜어주기 위한 사회보험제도',
    },
    {
      id: 'a10712030200',
      tab_item_title: '장기요양위원회',
      tab_item_content:
        '노인장기요양보험제도의 가입자, 공급자 등 이해관계자들의 참여 하에 보험료율과 현금 · 현물 급여에 관한 사항을 심의',
    },
    {
      id: 'a10712030300',
      tab_item_title: '장기요양심판위원회',
      tab_item_content: '공단의 이의신청 결정에 불복 제기한 사건을 심사',
    },
  ],
  요양보험운영: [
    {
      id: 'a10712040100',
      tab_item_title: '노인의료복지 시설',
      tab_item_content: '노인요양시설,노인요양공동생활가정 등등 입소시설 입소 지원',
    },
    {
      id: 'a10712040200',
      tab_item_title: '재가노인복지시설',
      tab_item_content:
        '방문요양서비스, 주 · 야간보호서비스, 단기보호서비스, 방문목욕서비스, 재가노인지원서비스, 방문간호 중 하나 이상의 서비스를 제공하는 시설 입소 지원',
    },
  ],
}
