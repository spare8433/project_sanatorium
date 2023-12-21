import CareGradeBanner from '@components/careGradeBanner'
import ShortCutList from '@components/shortCutList'
import TabMenu from '@components/mainTabMenu'

const Home = () => {
  return (
    <>
      <ShortCutList />
      <CareGradeBanner />
      <TabMenu />
    </>
  )
}

export default Home
