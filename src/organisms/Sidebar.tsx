import { FC } from 'react';
import styled from 'styled-components';

import ImageContainer from '../atoms/ImageContainer';
import Logo from "../assets/logo/logo-square.svg";


const StyledSidebar = styled.div`
  overflow-x: hidden;
  z-index: 1; 
  top: 0; 
  left: 0;
  position: fixed; 
  height: 100vh;
  width: 70px;
  background-color: ${props => props.theme.colors.purple.primary};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
`;

const SideBar: FC= () => {
  return (
    <StyledSidebar>
      <ImageContainer image={Logo} imageWidth="30px" />
    </StyledSidebar>
  );
}

export default SideBar;
