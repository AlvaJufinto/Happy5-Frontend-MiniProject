import { FC } from 'react';

import Text from '../atoms/Text';
import ImageContainer from '../atoms/ImageContainer';
import IconText from '../molecules/IconText';

interface IState {
  title: string,
  percentage: number,
}

const InfoCard: FC<IState> = ({ title, percentage }) => {
  return (
    <div className="InfoCard">
        {/* Text */}
        <div className="InfoCard-Bottom">
            {/* Icon Text */}
            {/* ImageContainer */}
        </div>
    </div>
  );
}

export default InfoCard;
