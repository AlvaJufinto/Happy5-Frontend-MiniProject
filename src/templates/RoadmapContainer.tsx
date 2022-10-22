import { FC } from 'react';
import styled from 'styled-components';

import InfoContainer from '../organisms/InfoContainer';

import { TextType } from './../atoms/Text';

const StyledRoadmapContainer = styled.div`
    margin: 24px 0;
    
`

const RoadmapContainer = () => {
  return (
    <StyledRoadmapContainer>
        <InfoContainer year="Q1 2019" period="January - March" />
    </StyledRoadmapContainer>
  );
}

export default RoadmapContainer;
