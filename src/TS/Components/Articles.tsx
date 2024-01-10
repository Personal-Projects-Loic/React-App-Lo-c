import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ImageColumn = styled.div`
  flex: 2;
  max-width: 60%; /* Adjust as needed */
`;

const TextColumn = styled.div`
  flex: 1;
  max-width: 35%; /* Adjust as needed */
`;

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  margin: 10px auto;
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
      <ImageColumn>
        <ArticleImage src={imageSrc} alt={title} />
      </ImageColumn>
      <TextColumn>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText>{text.length > 500 ? text.slice(0, 500) + '...' : text}</ArticleText>
      </TextColumn>
    </ArticleContainer>
  );
};

export default Article;
