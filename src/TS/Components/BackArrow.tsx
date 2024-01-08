import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";

const ArrowContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  height: 20vh;
  z-index: 2;
  cursor: pointer;
  margin-top: 40px;
`;

interface BackArrowProps {
  to: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ to }) => {
  return (
    <ArrowContainer>
      <Link to={to}>
        <FiArrowLeft size={30} color="#333" />
      </Link>
    </ArrowContainer>
  );
};

export default BackArrow;
