import { FC } from 'react';
import styled from 'styled-components';

import InfoContainer from '../organisms/InfoContainer';

const StyledRoadmapContainer = styled.div`
    margin: 24px 0;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
`

const RoadmapContainer: FC = () => {
  const productRoadmap = [
    {
      year: 'Q1 2019',
      period: 'January - March',
      Tasks: [
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
      year: 'Q1 2019',
      period: 'April - June',
      Tasks: [],
    },
    {
      year: 'Q1 2019',
      period: 'July - September',
      Tasks: [
        {
          title: 'Bundle interplanetary analytics for improved transmission',
          percentage: '90%'
        }
      ]
    },
    {
      year: 'Q1 2019',
      period: 'October - December',
      Tasks: [
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
          <InfoContainer year="Q1 2019" period="January - March" />
        ))}
    </StyledRoadmapContainer>
  );
}

export default RoadmapContainer;
