import React from "react";
import styled from "styled-components";

const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const SeparatorLine = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: black;
`;

const SeparatorTitle = styled.div`
  margin: 0 10px;
  font-size: 24px;
  color: Black;
`;

interface SeparatorProps {
  title?: string;
}

const Separator: React.FC<SeparatorProps> = ({ title }) => {
  return (
    <SeparatorContainer>
      {title && <SeparatorTitle>{title}</SeparatorTitle>}
      <SeparatorLine />
    </SeparatorContainer>
  );
};

export default Separator;
