import { FC } from 'react';
import styled from 'styled-components';

import Text, { TextType } from '../atoms/Text';
import InfoCard from './InfoCard';
import ButtonIconText from '../molecules/ButtonIconText';

import PlusIcon from "../assets/icon/plus-icon.svg";

interface IState {
  year: string,
  period: string,
}

const StyledInfoContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.grey.quarternary};
  width: 300px;
  border-radius: 4px;
  padding: 12px;

  .InfoContainer-Cards {
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

`

const InfoContainer: FC<IState> = ({ year, period }) => {
  return (
    <StyledInfoContainer>
        <div className="InfoContainer-Info">
            <Text text={year} textType={TextType.Small} />
            <Text text={period} textType={TextType.Ordinary} />
        </div>  
        <div className="InfoContainer-Cards">
          <InfoCard title='Re-designed the zero-g doggie bags. No more spills!' percentage='20%' />
        </div>
        <ButtonIconText text="Create new task" logo={PlusIcon} />
    </StyledInfoContainer>
  );
}

export default InfoContainer;
