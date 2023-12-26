import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Banner = styled.div`
  max-width: 80%;
  margin: 0 auto;
  background-color: #f0f0f0;
  padding: 10px;
`;

interface HeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <HeaderContainer>
      <ProfileImage src={imageUrl} alt="Profile" />
      <Banner>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Banner>
    </HeaderContainer>
  );
};

export default Header;
