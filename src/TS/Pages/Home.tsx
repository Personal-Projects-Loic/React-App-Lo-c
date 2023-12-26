// Home.js
import React from 'react';
import Header from '../Components/Header';

const Home = () => {
  return (
    <div>
      <Header 
        title="Titre de la bannière"
        subtitle="Sous-texte de la bannière"
        imageUrl="url_de_votre_image.jpg"
    />
    </div>
  );
};

export default Home;
