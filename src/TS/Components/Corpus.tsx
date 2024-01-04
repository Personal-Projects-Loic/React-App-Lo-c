import React from 'react';
import styled from 'styled-components';

const CorpusContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  position: relative;
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 20px;
  padding: 10px;
`;

const Corpus = ({ title, children }) => {
  return (
    <CorpusContainer>
      <Title>{title}</Title>
      {children}
    </CorpusContainer>
  );
};

export default Corpus;
