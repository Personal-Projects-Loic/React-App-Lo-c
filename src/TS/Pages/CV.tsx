import React from 'react';
// @ts-ignore 
import cvPdf from "../../Documents/CV.pdf";

const CVViewer = () => {

  return (
    <div>
      <iframe title="CV" src={cvPdf} width="100%" height="1300px" style={{ border: 'none' }} />
    </div>
  );
};

export default CVViewer;
