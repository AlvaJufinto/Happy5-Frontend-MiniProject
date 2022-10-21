import { FC } from 'react';
import ImageContainer from '../atoms/ImageContainer';

interface IState {
  ButtonIconText: string,
  logo: string;
}

const ButtonIconText: FC<IState> = ({ ButtonIconText, logo }) => {
  return (
    <div className={`ButtonIconText`}>
        <ImageContainer image={logo} imageWidth="10px" />
        <p className="ButtonIconText-Text">
            {ButtonIconText}
        </p>  
    </div>
  );
}

export default ButtonIconText;
