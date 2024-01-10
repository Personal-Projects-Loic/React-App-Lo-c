import React from "react";
import styled from "styled-components";

interface ImageContainerProps {
  position: "right" | "left";
}

interface ImageContainerProps2 {
  position2: "right" | "left";
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DualContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.position === "right" ? "row-reverse" : "row")};
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
`;

const LogoContainer = styled.div<ImageContainerProps2>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.position2 === "right" ? "row-reverse" : "row")};
  width: 50%;
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
  font-size: 18px;
`;

const ResponsiveImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 10px;
`;

interface ImageProps {
  src1: string;
  src2: string;
  alt1: string;
  alt2: string;
  position: "right" | "left";
  position2: "right" | "left";
  title: string;
  corpus: string;
}

const ImageWithPositionLeft: React.FC<ImageProps> = ({
  src1,
  src2,
  alt1,
  alt2,
  position,
  position2,
  title,
  corpus,
}) => {
  return (
    <Container>
      <DualContainer>
        <ImageContainer position={position}>
          <ResponsiveImage src={src1} alt={alt1} />
          <TextContainer>
            <Title>{title}</Title>
            <Corpus>{corpus}</Corpus>
          </TextContainer>
        </ImageContainer>
        <LogoContainer position2={position2}>
          <ResponsiveImage src={src2} alt={alt2} />
        </LogoContainer>
      </DualContainer>
    </Container>
  );
};

export default ImageWithPositionLeft;
