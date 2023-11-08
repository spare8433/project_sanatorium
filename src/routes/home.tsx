import MainContent from '@components/main_content'
import ShortCutList from '@components/shortCutList'
import TabMenu from '@components/tabMenu'

const Home = () => {
  return (
    <>
      <ShortCutList />
      <MainContent />
      <TabMenu />
    </>
  )
}

export default Home
