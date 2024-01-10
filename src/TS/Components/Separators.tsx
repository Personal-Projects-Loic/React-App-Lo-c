import React from "react";
import styled from "styled-components";

const SeparatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 20px auto;
`;

const SeparatorLine = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: black;
`;

const Separator: React.FC = () => {
  return (
    <SeparatorContainer>
      <SeparatorLine />
    </SeparatorContainer>
  );
};

export default Separator;
