import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const ContactContainer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialMediaLink = styled.a`
  color: white;
  margin: 20px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0077b5;
  }
`;

const ContactBottom: React.FC = () => {
  const linkedinProfileUrl =
    "https://www.linkedin.com/in/loic-rouzaud-614b02202/";

  return (
    <ContactContainer>
      <div>
        Contact information: loic.rouzaud@epitech.eu | 06.95.53.72.79
        <SocialMediaLink
          href={linkedinProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </SocialMediaLink>
      </div>
    </ContactContainer>
  );
};

export default ContactBottom;
