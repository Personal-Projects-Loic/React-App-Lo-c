// Header.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Titles from "./Title";
import Corpus from "./Corpus";
import ProfilePic from "./../../assets/profilepic.png";

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
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  max-width: 100%;
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
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
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
          transform: `translateY(-${scrollPosition}px)`,
        }}
      >
        <Title>{title}</Title>
        <ProfileImage src={ProfilePic} alt="Profile" />
        <Subtitle>{subtitle}</Subtitle>
      </Banner>
      <Content>
        <Titles text="Loïc Rouzaud" />
        <Corpus
          title="Qui suis-je ?"
          children={
            "Bonjour ! Je m'appelle Loïc Rouzaud, je suis un développeur web fullstack. J'ai débuté la programmation en 2019 au lycée, et depuis, je n'ai jamais cessé. Mes premiers pas ont été avec le C. Par la suite, j'ai acquis des compétences avec des technologies telles que React, Node.js, Express.js, MongoDB, et bien d'autres. Ma passion pour le développement web me pousse à toujours chercher de nouveaux projets à réaliser. \
            Actuellement en formation à Epitech, une école informatique basée à Toulouse, je suis engagé dans ce cursus depuis le 1er septembre 2020.\
            À côté de mon engagement professionnel, la musique occupe une place importante dans ma vie. Pratiquant la guitare depuis 2012, j'ai débuté avec la guitare classique avant de me tourner vers la guitare électrique. J'ai également exploré la basse et participé à plusieurs groupes de rock."
          }
        />
        <Corpus
          title="Enfin en 4ème année !"
          children={"Apres 3 ans à Epitech, je suis enfin en 4ème année ! J'ai enfin attéri à New York (voir la page blog). Mes cours debutent le 24 Janvier et vous tiendrez au courant via la page blog."}
        />
        <Corpus
          title="La suite ?"
          children={
            "Je suis actuellement à la recherche d'un stage de fin d'études, qui débutera en Janvier 2025. Si vous êtes intéressé, n'hésitez pas à me contacter via Linkedin ou par mail !"
          }
        />
        <Corpus
          title="Mes passions"
          children={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
        <Corpus
          title="Mes cours à l'etranger"
          children={
            "MEs cours sont à Brockport, une petite ville à 10min de route de Rochester dans l'état de New York. Je suis en cours de négociation pour un stage à New York, mais rien n'est encore sûr. Je vous tiendrai au courant via la page blog."
          }
        />
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
