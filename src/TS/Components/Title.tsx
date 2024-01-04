import React from "react";
import styled from "styled-components";

interface TitleProps {
  text: string;
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 20vh;
  width: 20%;
  font-size: 24px;
`;

const Separator = styled.div`
  flex: 1;
  height: 2px;
  width: 10%;
  background-color: black;
  margin: 0 10px;

`;

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <TitleContainer>
      <Separator />
      <div>{text}</div>
      <Separator />
    </TitleContainer>
  );
};

export default Title;
