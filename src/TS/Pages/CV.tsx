import React from 'react';

const CVViewer = () => {

  var cvUrl = "../../../public/Documents/CV.pdf";

  return (
    <div>
      <iframe title="CV" src={cvUrl} width="1000px" height="1500px" style={{ border: 'none' }} />
    </div>
  );
};

export default CVViewer;
