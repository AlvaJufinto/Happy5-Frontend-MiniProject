import { FC } from 'react';

import Text from '../atoms/Text';
import ImageContainer from '../atoms/ImageContainer';
import IconText from '../molecules/IconText';
import ButtonIconText from '../molecules/ButtonIconText';
import InfoCard from './InfoCard';

interface IState {
  title: string,
  period: string,
}

const InfoContainer: FC<IState> = ({ title, period }) => {
  return (
    <div className="InfoContainer">
        <div className="InfoContainer-Info">
            {/* Text Title */}
            {/* Text Period */}
        </div>  
        <div className="InfoContainer-Cards">
            {/* Info Card */}
        </div>
        {/* ButtonIconText */}
    </div>
  );
}

export default InfoContainer;
