import { FC } from 'react';

import Text from '../atoms/Text';
import SideBar from '../organisms/Sidebar';
import RoadmapContainer from '../templates/RoadmapContainer';

import { TextType } from './../atoms/Text';

const Home = () => {
  return (
    <div className="Home">
        <SideBar />
        <div className="HomeContainer global-container-page">
            <Text text="Product Roadmap" textType={TextType.Headline} />
            <RoadmapContainer />
        </div>
    </div>
  );
}

export default Home;
