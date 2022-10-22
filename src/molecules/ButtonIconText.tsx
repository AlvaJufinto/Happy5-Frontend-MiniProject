import { FC } from 'react';
import styled from 'styled-components';

import Text, { TextType } from '../atoms/Text';
import ImageContainer from '../atoms/ImageContainer';

interface IState {
  text: string,
  logo: string;
}

const StyledButtonIconText = styled.div`
  display: flex;
  gap: 5px;
  width: 150px;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.colors.grey.tertiary};
    
  }
`

const ButtonIconText: FC<IState> = ({ text, logo }) => {
  return (
    <StyledButtonIconText>
        <ImageContainer image={logo} imageHeight="20px" />
        <Text text={text} textType={TextType.Ordinary} />
    </StyledButtonIconText>
  );
}

export default ButtonIconText;
