import Text, { TextType } from '../components/atoms/Text';
import RoadmapContainer from '../components/templates/RoadmapContainer';
import GlobalContainer from '../components/templates/GlobalContainer';

const Home = () => {
  return (
    <GlobalContainer>
        <Text text="Product Roadmap" textType={TextType.Headline} />
        <RoadmapContainer />
    </GlobalContainer>
  );
}

export default Home;
