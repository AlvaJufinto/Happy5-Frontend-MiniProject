import { FC } from 'react';
import styled from 'styled-components';

import Text, { TextType } from '../atoms/Text';
import InfoCard from './InfoCard';
import ButtonIconText from '../molecules/ButtonIconText';

import PlusIcon from "../assets/icon/plus-icon.svg";

interface IState {
  year: string,
  period: string,
  tasks?: {
    title: string,
    percentage: string,
  }[]
}

const StyledInfoContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.grey.quarternary};
  width: 280px;
  border-radius: 4px;
  padding: 12px;

  .InfoContainer-Cards {
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

`

const InfoContainer: FC<IState> = ({ year, period, tasks }) => {
  return (
    <StyledInfoContainer>
        <div className="InfoContainer-Info">
            <Text text={year} textType={TextType.Small} />
            <Text text={period} textType={TextType.Ordinary} />
        </div>  
        <div className="InfoContainer-Cards">
          {!tasks && <Text text="No Task Available" textType={TextType.Empty} />}
          {tasks?.map((task) => (
            <InfoCard title={task.title} percentage={task.percentage} />
          ))}
        </div>
        <ButtonIconText text="Create new task" logo={PlusIcon} />
    </StyledInfoContainer>
  );
}

export default InfoContainer;
