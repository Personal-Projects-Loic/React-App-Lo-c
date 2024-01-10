import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change to column */
  align-items: center; /* Center items horizontally */
  margin-bottom: 20px;
`;

const ArticleImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ArticleTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ArticleText = styled.p`
  font-size: 16px;
`;

interface ArticleProps {
  title: string;
  imageSrc: string;
  text: string;
}

const Article: React.FC<ArticleProps> = ({ title, imageSrc, text }) => {
  return (
    <ArticleContainer>
      <ArticleImage src={imageSrc} alt={title} />
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleText>{text.length > 500 ? text.slice(0, 500) + '...' : text}</ArticleText>
    </ArticleContainer>
  );
};

export default Article;
