import React from 'react';

const CVViewer = () => {
  const pdfUrl = '../../Documents/CV.pdf';

  return (
    <div>
      <iframe title="CV" src={pdfUrl} width="100%" height="800px" style={{ border: 'none' }} />
    </div>
  );
};

export default CVViewer;
