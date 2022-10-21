import { FC } from 'react';

import ImageContainer from '../atoms/ImageContainer';

interface IState {
  image: string;
}

const SideBar: FC<IState> = ({ image }) => {
  return (
    <div className="SideBar">
        {/* ImageContainer */}
    </div>
  );
}

export default SideBar;
