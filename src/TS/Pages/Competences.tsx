import React from "react";
import Contacts from "../Components/ContactBottom";
import Title from "../Components/Title";
import BackArrow from "../Components/BackArrow";
import Skills from "../Components/SkillsRating";
import SkillsRating from "../Components/SkillsRating";

const Competences = () => {
  return (
    <>
      <BackArrow to="/" />
      <Title text="Competences" />
      <SkillsRating />
      <Contacts />
    </>
  );
};

export default Competences;
