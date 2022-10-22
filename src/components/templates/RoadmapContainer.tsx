import { FC } from 'react';
import styled from 'styled-components';

import InfoContainer from '../organisms/InfoContainer';

const StyledRoadmapContainer = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: flex-start;  
`

const RoadmapContainer: FC = () => {
  const productRoadmap = [
    {
      year: 'Q1 2019',
      period: 'January - March',
      tasks: [
        {
          title: 'Re-designed the zero-g doggie bags. No more spills!',
          percentage: '64%'
        },
        {
          title: 'Travel & Relocation Support',
          percentage: '12%'
        }
      ]
    },
    {
      year: 'Q2 2019',
      period: 'April - June',
    },
    {
      year: 'Q3 2019',
      period: 'July - September',
      tasks: [
        {
          title: 'Bundle interplanetary analytics for improved transmission',
          percentage: '90%'
        }
      ]
    },
    {
      year: 'Q4 2019',
      period: 'October - December',
      tasks: [
        {
          title: 'Data Migration: Performance & Culture End Game',
          percentage: '63%'
        }
      ]
    },
  ]

  return (
    <StyledRoadmapContainer>
        {productRoadmap.map(product => (
          <InfoContainer year={product.year} period={product.period} tasks={product.tasks} />
        ))}
    </StyledRoadmapContainer>
  );
}

export default RoadmapContainer;
