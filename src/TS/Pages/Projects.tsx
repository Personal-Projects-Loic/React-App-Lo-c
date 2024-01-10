import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import BackArrow from "../Components/BackArrow";
import ImageWithPositionRight from "../Components/ImageWithPosition";
import ImageWithPositionLeft from "../Components/ImageWithPosition2";
import Autone from "../../assets/autone.png";
import Home from "../../assets/Home.png";
import Inside from "../../assets/inside.png";
import List from "../../assets/list.png";
import Animation from "../../assets/animation.png";
import Contact from "../Components/ContactBottom";
import Separator from "../Components/Separators";
import SwiftLogo from "../../assets/SwiftLogo.png";
import ReactLogo from "../../assets/react.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Projects = () => {
  return (
    <>
      <Container>
        <BackArrow to="/" />
        <Title text="Projets" />
        <ImageWithPositionRight
          position="left"
          position2="right"
          src1={Autone}
          alt1="Autone"
          src2={ReactLogo}
          alt2="React"
          title="Autone"
          corpus="Projet de fin d'etude. En tant que musicien, j'ai toujours eu du mal à trouver des partitions gratuites ou de bonne qualité sur internet. Autone permet de s'enregistrer, ou d'y déposer une lien vers une musique. L'application va ensuite analyser le son, dissocier chaque son des uns des autres puis tranformé en format MIDI grace à des outils de machine learning (et beaucoup de maths). Nous utilisons un outil pour faire la conversion MIDI vers partition."
        />
        <Separator />
        <ImageWithPositionLeft
          position="right"
          position2="left"
          src1={Home}
          alt1="Home"
          src2={SwiftLogo}
          alt2="Swift"
          title="Home page"
          corpus="Projet fais en swift. Un debut pour apprendre les basiques de swift et de l'interface builder. J'ai utilisé siwftUI pour la partie graphique. L'application regroupe une liste de park americians. Cette application est complete en terme de fonctionnalité mais pas en terme de design. Comme des carousels, des animations, des transitions, etc..."
        />
        <ImageWithPositionRight
          position="left"
          position2="right"
          src1={Inside}
          alt1="Inside"
          src2={SwiftLogo}
          alt2="Swift"
          title="Inside page"
          corpus="Lorsque vous cliquez sur un parc, vous arrivez sur une page qui vous donne des informations sur le parc."
        />
        <ImageWithPositionLeft
          position="right"
          position2="left"
          src1={List}
          alt1="List"
          src2={SwiftLogo}
          alt2="Swift"
          title="Liste des parcs"
          corpus="Une autre maniere d'afficher les parcs."
        />
        <ImageWithPositionRight
          position="left"
          position2="right"
          src1={Animation}
          alt1="Animation"
          src2={SwiftLogo}
          alt2="Swift"
          title="Animation page"
          corpus="Dans cette page, j'ai appris à faire des animations avec des fichiers de config Apple."
        />
      </Container>
      <Contact />
    </>
  );
};

export default Projects;
