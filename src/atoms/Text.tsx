import { FC } from 'react';
import styled from 'styled-components';

interface IState {
  text: string,
  textType: string,
}

export enum TextType {
  Headline="headline",
  Title="title",
  Ordinary="ordinary",
  Small="small",
  Empty="empty"
}

const StyledText = styled.p`
  margin: 0;

  &.Text-headline {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
  }

  &.Text-title {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
  }

  &.Text-ordinary {
    font-size: 14px;
    color: ${props => props.theme.colors.grey.primary};
    font-weight: 500;
  }

  &.Text-small {
    font-size: 14px;
    color: ${props => props.theme.colors.grey.primary};
  }

  &.Text-empty {
    font-size: 14px;
    color: ${props => props.theme.colors.grey.secondary};
  }
`

const Text: FC<IState> = ({ text, textType }) => {
  return (
    <StyledText className={`Text-${textType}`}>
      {text}
    </StyledText>
  );
}

export default Text;
