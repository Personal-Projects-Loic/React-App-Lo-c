import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const BurgerContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2;
  cursor: pointer;
`;

const StyledCloseIcon = styled(IoClose)`
  width: 30px;
  height: 30px;
  color: red;
  margin: 6px 0;
  transition: 0.4s;
`;

const StyledHamburgerIcon = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: red;
  margin: 6px 0;
  transition: 0.4s;
`;

const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  justify-content: center;
  z-index: 1;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.5s;
  padding-top: 20px; /* Add some top padding for separation */
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  margin: 10px 20px; /* Add margin for separation */
`;

interface MenuContainerProps {
  isOpen: boolean;
}

const BurgerMenu: React.FC<MenuContainerProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerContainer onClick={toggleMenu}>
        {isOpen ? <StyledCloseIcon /> : <StyledHamburgerIcon />}
      </BurgerContainer>
      <MenuContainer isOpen={isOpen}>
        <MenuItem to="/projects" onClick={toggleMenu}>
          Projects
        </MenuItem>
        <MenuItem to="/cv" onClick={toggleMenu}>
          CV
        </MenuItem>
        <MenuItem to="/competences" onClick={toggleMenu}>
          Competences
        </MenuItem>
        <MenuItem to="/contacts" onClick={toggleMenu}>
          Contacts
        </MenuItem>
        <MenuItem to="/blog" onClick={toggleMenu}>
          Blog
        </MenuItem>
      </MenuContainer>
    </>
  );
};

export default BurgerMenu;
