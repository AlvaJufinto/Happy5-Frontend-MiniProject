import { FC } from 'react';
import styled from 'styled-components';

import InfoContainer from '../organisms/InfoContainer';
import { productRoadmap } from '../../data';

const StyledRoadmapContainer = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: flex-start;  
`

const RoadmapContainer: FC = () => {
  return (
    <StyledRoadmapContainer>
        {productRoadmap.map(product => (
          <InfoContainer year={product.year} period={product.period} tasks={product.tasks} />
        ))}
    </StyledRoadmapContainer>
  );
}

export default RoadmapContainer;
