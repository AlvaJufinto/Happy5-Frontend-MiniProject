import { FC } from 'react';
import styled from 'styled-components';

import Text, { TextType } from '../atoms/Text';
import ImageContainer from '../atoms/ImageContainer';
import IconText from '../molecules/IconText';

import WeightIcon from "../assets/icon/weight-icon.svg"
import MoreIcon from "../assets/icon/more-icon.svg";

interface IState {
  title: string,
  percentage: string,
}

const StyledInfoCard  = styled.div`
  border: 1px solid ${props => props.theme.colors.grey.tertiary};
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .InfoCard-Bottom {
    display: flex;
    justify-content: space-between;
  }
`

const InfoCard: FC<IState> = ({ title, percentage }) => {
  return (
    <StyledInfoCard>
        <Text text={title} textType={TextType.Title} />
        <div className="InfoCard-Bottom">
            <IconText text={percentage} logo={WeightIcon} />
            <ImageContainer image={MoreIcon} />
        </div>
    </StyledInfoCard>
  );
}

export default InfoCard;
