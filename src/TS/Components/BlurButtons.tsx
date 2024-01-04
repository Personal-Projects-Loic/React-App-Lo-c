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
        HOVER ME
        <div className="inside">ADD CONTENT</div>
      </div>

      <div
        className={`box ${isBox2Hovered ? 'blur' : ''}`}
        onMouseEnter={() => setIsBox2Hovered(true)}
        onMouseLeave={() => setIsBox2Hovered(false)}
      >
        HOVER ME
        <div className="inside">ADD CONTENT</div>
      </div>

      <div
        className={`box ${isBox3Hovered ? 'blur' : ''}`}
        onMouseEnter={() => setIsBox3Hovered(true)}
        onMouseLeave={() => setIsBox3Hovered(false)}
      >
        HOVER ME
        <div className="inside">ADD CONTENT</div>
      </div>
    </div>
  );
};

export default BlurButtons;
