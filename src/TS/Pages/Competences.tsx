import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import BackArrow from '../Components/BackArrow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Competences = () => {
    return (
      <Container>
        <BackArrow to = '/'/>
        <Title text='Competences'/>
      </Container>
    );
  };
  
  export default Competences;
