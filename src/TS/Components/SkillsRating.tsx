import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`;

const SkillCategory = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-decoration: underline;
`;

const Title2 = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SkillDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const StarsContainer = styled.div`
  display: flex;
`;

const StarIcon = styled.div`
  margin-right: 5px;
  color: #ffd700;
`;

const SkillsRating: React.FC = () => {
  return (
    <SkillsContainer>
      <SkillCategory>
        <Title>Hard Skills</Title>
        <SkillItem
          title="C"
          description="J'ai pratiqué le langage C pendant 3 ans"
          rating={4}
        />
        <SkillItem
          title="C++"
          description="J'ai pratiqué le langage C++ pendant 1 an, notamment dans le cadre de la programmation d'un jeu vidéo"
          rating={2}
        />
        <SkillItem
          title="React"
          description="J'ai pratiqué le langage React pendant 1 an"
          rating={3.5}
        />
        <SkillItem
          title="React Native"
          description="J'ai pratiqué le langage React Native pendant 1 an et demi. C'est le langage que j'utilise le plus actuellement"
          rating={4}
        />
        <SkillItem
          title="Swift"
          description="J'ai débuté le swift il y a 6 mois en stage. J'ai encore beaucoup à apprendre sur ce langage"
          rating={2}
        />
        <SkillItem
          title="Web assembleur"
          description="J'ai debuté le web assembleur il y a 6 mois en stage, je devais envellopper une librairie C en web assembleur"
          rating={2}
        />
      </SkillCategory>

      <SkillCategory>
        <Title>Soft Skills</Title>
        <SkillItem
          title="Communication"
          description="Je pense que la communication est une des compétences les plus importantes dans le monde du travail."
          rating={5}
        />
        <SkillItem
          title="Organisation personnelle"
          description="L'un de mes defauts. J'essaie de m'ameliorer en utilisant des outils comme Trello ou Notion"
          rating={2.5}
        />
        <SkillItem
          title="Travail en groupe"
          description="La majorité des projets que j'ai réalisé ont été en groupe. J'ai donc l'habitude de travailler en groupe."
          rating={4.5}
        />
        <SkillItem
          title="Autotnomie"
          description="Epitech prone l'autonomie. J'ai donc appris à prendre des decisions lors de travaux de groupes et en stage."
          rating={4}
        />
      </SkillCategory>

      <SkillCategory>
        <Title>Languages Spoken</Title>
        <SkillItem title="Français" description="Langage natif" rating={5} />
        <SkillItem title="Anglais" description="Avancé" rating={4} />
      </SkillCategory>
    </SkillsContainer>
  );
};

interface SkillItemProps {
  title: string;
  description: string;
  rating: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  title,
  description,
  rating,
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index}>
      {index + 1 <= rating ? (
        <FaStar />
      ) : index < rating ? (
        <FaStarHalfAlt />
      ) : null}
    </StarIcon>
  ));

  return (
    <div>
      <Title2>{title}</Title2>
      <SkillDescription>{description}</SkillDescription>
      <StarsContainer>{stars}</StarsContainer>
    </div>
  );
};

export default SkillsRating;
