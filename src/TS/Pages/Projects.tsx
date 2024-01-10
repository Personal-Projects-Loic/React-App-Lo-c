import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import BackArrow from "../Components/BackArrow";
import ImageWithPosition from "../Components/ImageWithPosition";
import Autone from "../../assets/autone.png";
import Home from "../../assets/Home.png";
import Inside from "../../assets/inside.png";
import List from "../../assets/list.png";
import Animation from "../../assets/animation.png";
import Contact from "../Components/ContactBottom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Competences = () => {
  return (
    <>
    <Container>
      <BackArrow to="/" />
      <Title text="Competences" />
      <ImageWithPosition
        position="left"
        src={Autone}
        alt="Autone"
        title="Autone"
        corpus="Projet de fin d'etude. Tranformation audio vers partition"
      />
      <ImageWithPosition
        position="right"
        src={Home}
        alt="Home"
        title="SwiftProject"
        corpus="Projet de fin d'etude. Tranformation audio vers partition"
      />
      <ImageWithPosition
        position="left"
        src={Inside}
        alt="Inside"
        title="SwiftProject"
        corpus="Projet de fin d'etude. Tranformation audio vers partition"
      />
      <ImageWithPosition
        position="right"
        src={List}
        alt="List"
        title="SwiftProject"
        corpus="Projet de fin d'etude. Tranformation audio vers partition"
      />
      <ImageWithPosition
        position="left"
        src={Animation}
        alt="Animation"
        title="SwiftProject"
        corpus="Projet de fin d'etude. Tranformation audio vers partition"
      />
    </Container>
    <Contact />
    </>
  );
};

export default Competences;
