import { FC } from 'react';

import Text from '../atoms/Text';
import ImageContainer from '../atoms/ImageContainer';
import IconText from '../molecules/IconText';
import { TextType } from './../atoms/Text';

const Home = () => {
  return (
    <div className="Home">
        
      <Text text="Test" textType={TextType.Headline}  />
    </div>
  );
}

export default Home;
