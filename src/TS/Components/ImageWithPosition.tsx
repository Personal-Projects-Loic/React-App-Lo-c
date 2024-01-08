import React from 'react';
import styled from 'styled-components';

interface ImageContainerProps {
  position: 'right' | 'left';
}

const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.position === 'right' ? 'row-reverse' : 'row')};
  width: 50%;
  margin: ${(props) => (props.position === 'right' ? '0 0 0 auto' : '0 auto 0 0')};
  padding: 20px;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const Corpus = styled.p`
  font-size: 24px;
`;

const ResponsiveImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 10px;
`;

interface ImageProps {
  src: string;
  alt: string;
  position: 'right' | 'left';
  title: string;
  corpus: string;
}

const ImageWithPosition: React.FC<ImageProps> = ({ src, alt, position, title, corpus }) => {
  return (
    <ImageContainer position={position}>
      <ResponsiveImage src={src} alt={alt} />
      <TextContainer>
        <Title>{title}</Title>
        <Corpus>{corpus}</Corpus>
      </TextContainer>
    </ImageContainer>
  );
};

export default ImageWithPosition;
