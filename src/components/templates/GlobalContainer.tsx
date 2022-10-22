import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import SideBar from '../organisms/Sidebar';

interface IState {
    children: ReactNode;
}

const StyledGlobalContainer = styled.div`
    padding: 20px 50px 20px 120px;

    @media only screen and (max-width: 768px) {
        padding: 20px 30px 20px 100px;
    }
`
const GlobalContainer: FC<IState> = ({ children }) => {
  return (
    <StyledGlobalContainer>
        <SideBar />
        {children}
    </StyledGlobalContainer>
  );
}

export default GlobalContainer;
