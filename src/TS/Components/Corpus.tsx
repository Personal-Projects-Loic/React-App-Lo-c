import React from 'react';
import styled from 'styled-components';

const CorpusContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
  margin-top: 50px;
  position: relative;
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  margin: -50px;
  margin-left: 10px;
  padding: 10px;
  background-color: white;
`;

interface CorpusProps {
  title: string;
  children: string;
}

const Corpus: React.FC<CorpusProps> = ({ title, children }) => {
  return (
    <CorpusContainer>
      <Title>{title}</Title>
      {children}
    </CorpusContainer>
  );
};

export default Corpus;
