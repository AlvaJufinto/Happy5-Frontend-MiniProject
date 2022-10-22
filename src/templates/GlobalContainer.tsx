import { FC, ReactNode } from 'react';
import styled from 'styled-components';

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
        {children}
    </StyledGlobalContainer>
  );
}

export default GlobalContainer;
