import { FC } from 'react';
import ImageContainer from '../atoms/ImageContainer';

interface IState {
  IconText: string,
  logo: string;
}

const IconText: FC<IState> = ({ IconText, logo }) => {
  return (
    <button className={`IconText`}>
        <ImageContainer image={logo} imageWidth="10px" />
        <p className="IconText-Text">
            {IconText}
        </p>  
    </button>
  );
}

export default IconText;
