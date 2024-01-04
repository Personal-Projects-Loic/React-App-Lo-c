import React, { useState } from 'react';
import '../../CSS/Components/BlurButtons.css';

const BlurButtons = () => {
  const [isBox1Hovered, setIsBox1Hovered] = useState(false);
  const [isBox2Hovered, setIsBox2Hovered] = useState(false);
  const [isBox3Hovered, setIsBox3Hovered] = useState(false);

  return (
    <div className="content">
      <div
        className={`box ${isBox1Hovered ? 'blur' : ''}`}
        onMouseEnter={() => setIsBox1Hovered(true)}
        onMouseLeave={() => setIsBox1Hovered(false)}
      >
        Project
        <div className="inside">Here is my projects !</div>
      </div>

      <div
        className={`box ${isBox2Hovered ? 'blur' : ''}`}
        onMouseEnter={() => setIsBox2Hovered(true)}
        onMouseLeave={() => setIsBox2Hovered(false)}
      >
        CV
        <div className="inside">Here is my CV in pdf !</div>
      </div>

      <div
        className={`box ${isBox3Hovered ? 'blur' : ''}`}
        onMouseEnter={() => setIsBox3Hovered(true)}
        onMouseLeave={() => setIsBox3Hovered(false)}
      >
        Competences
        <div className="inside">All my hobbies and my favorite langages !</div>
      </div>
    </div>
  );
};

export default BlurButtons;
