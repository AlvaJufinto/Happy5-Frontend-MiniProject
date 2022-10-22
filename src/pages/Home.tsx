import { FC } from 'react';

import Text from '../atoms/Text';
import ImageContainer from '../atoms/ImageContainer';
import IconText from '../molecules/IconText';
import SideBar from '../organisms/Sidebar';

import { TextType } from './../atoms/Text';

const Home = () => {
  return (
    <div className="Home">
        <SideBar />
        <Text text="Test" textType={TextType.Headline}  />
    </div>
  );
}

export default Home;
