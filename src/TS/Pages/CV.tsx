import React from 'react';

const CVViewer = () => {

  return (
    <div>
      <iframe title="CV" src={require("../../Documents/CV.pdf")} width="100%" height="1500px" style={{ border: 'none' }} />
    </div>
  );
};

export default CVViewer;
