import { FC } from 'react';
import styled from 'styled-components';

interface IState {
  image: string,
  imageWidth?: string,
  imageHeight?: string,
  borderRadius?: string,
}

const StyledImageContainer = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`

const ImageContainer: FC<IState> = ({ image, imageWidth, imageHeight, borderRadius }) => {
  return (
    <StyledImageContainer 
      className="ImageCont  ainer" 
      src={image}
      alt="JustImage" 
      width={imageWidth}
      height={imageHeight}
    />
  );
}

export default ImageContainer;