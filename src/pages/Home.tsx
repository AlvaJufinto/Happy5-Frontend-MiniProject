import Text, { TextType } from '../atoms/Text';
import SideBar from '../organisms/Sidebar';
import RoadmapContainer from '../templates/RoadmapContainer';
import GlobalContainer from '../templates/GlobalContainer';

const Home = () => {
  return (
    <GlobalContainer>
        <SideBar />
        <div className="HomeContainer global-container-page">
            <Text text="Product Roadmap" textType={TextType.Headline} />
            <RoadmapContainer />
        </div>
    </GlobalContainer>
  );
}

export default Home;
