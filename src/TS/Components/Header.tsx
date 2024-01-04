// Header.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Titles from "./Title.tsx";
import Corpus from "./Corpus.tsx";

export const HeaderContainer = styled.div`
  text-align: center;
  position: relative;
`;

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;

export const ProfileImage = styled.img`
  max-width: 20%;
  height: auto;
  z-index: 2;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
`;

export const Content = styled.div`
  margin-top: 100vh;
  overflow: auto;
  height: calc(100% - 100vh);
`;

interface HeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, imageUrl }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <Banner
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(-${scrollPosition}px)`,
        }}
      >
        <Title>{title}</Title>
        <ProfileImage src={imageUrl} alt="Profile" />
        <Subtitle>{subtitle}</Subtitle>
      </Banner>
      <Content>
        <Titles text="My journey" />
        <Corpus
          title="Lorem ipsum"
          children={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </Content>
    </HeaderContainer>
  );
};

export default Header;
