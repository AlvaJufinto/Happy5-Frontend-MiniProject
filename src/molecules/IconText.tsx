import { FC } from 'react';
import styled from 'styled-components';

import Text, { TextType } from '../atoms/Text';
import ImageContainer from '../atoms/ImageContainer';

interface IState {
  text: string,
  logo: string;
}

const StyledIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const IconText: FC<IState> = ({ text, logo }) => {
  return (
    <StyledIconText>
        <ImageContainer image={logo} imageWidth="20px" />
        <Text text={text} textType={TextType.Small} />
    </StyledIconText>
  );
}

export default IconText;
