import React from "react";
import Contact from "../Components/ContactBottom";
import Articles from "../Components/Articles";
import Soho from "../../assets/Soho.png";
import newyork from "../../assets/newyork.png";
import Chinatown from "../../assets/chinatown.png";
import Title from "../Components/Title";
import BackArrow from "../Components/BackArrow";

const Blog = () => {
  return (
    <>
      <BackArrow to="/" />
      <Title text="Blog" />
      <Articles
        imageSrc={newyork}
        title="NYC"
        text="Le Pont de Brooklyn à New York est l'un des monuments emblématiques de la ville. Voici une description générale du pont :

        Le Pont de Brooklyn est un pont suspendu qui enjambe l'East River, reliant les quartiers de Manhattan et de Brooklyn à New York. Il a été inauguré le 24 mai 1883 et était, à l'époque, le plus grand pont suspendu au monde. Conçu par l'ingénieur John A. Roebling, le pont a été achevé par son fils, Washington Roebling, après que John ait succombé à une blessure sur le site de construction.
        
        Le pont s'étend sur une distance d'environ 1,8 kilomètre (1,13 mile) et offre une vue spectaculaire sur le skyline de Manhattan, la Statue de la Liberté et le port de New York. Il est caractérisé par ses tours de granite néogothiques imposantes situées aux extrémités du pont.
        
        La structure principale du pont est suspendue par des câbles d'acier qui descendent des tours jusqu'à des piliers de soutien. Les trottoirs de chaque côté du pont sont destinés aux piétons et aux cyclistes, offrant une expérience unique pour traverser le pont à pied ou à vélo. Le Pont de Brooklyn est non seulement un moyen de transport vital entre Manhattan et Brooklyn, mais aussi une attraction touristique majeure. Il est souvent recommandé de le traverser à pied depuis le côté de Manhattan pour profiter pleinement de la vue imprenable sur le paysage urbain. La nuit, le pont est éclairé, créant une ambiance magique. L'appréciation de Rudy Pensa pour la musique a commencé à l'âge de sept ans lorsqu'il a commencé ses études de guitare classique dans sa ville natale en Argentine. Ce n'est que quelques années plus tard, lorsqu'il a entendu les Beatles, que sa véritable passion pour les sons de la guitare électrique s'est solidifiée. La première expérience de Rudy en tant que luthier a été en fait une expérience lorsqu'à l'âge de treize ans, il a tenté de construire une guitare à 12 cordes en utilisant les manches cassés de deux guitares à 6 cordes."
      />
      <Articles
        imageSrc={Soho}
        title="Soho"
        text="Rudy et sa femme, Fran, ont ouvert 'Rudy's Music Stop' sur la 48e rue à New York en 1978 et ont commencé à transformer leurs passions en œuvres concrètes. Il n'a pas fallu longtemps pour que 'Rudy's Music' devienne un magasin de guitares bien connu et très respecté par les guitaristes du monde entier. L'amour et l'enthousiasme de Rudy pour ce qu'il fait sont contagieux, et sa longue liste de clients réguliers continue de s'allonger. L'appréciation de Rudy Pensa pour la musique a commencé à l'âge de sept ans lorsqu'il a commencé ses études de guitare classique dans sa ville natale en Argentine. Ce n'est que quelques années plus tard, lorsqu'il a entendu les Beatles, que sa véritable passion pour les sons de la guitare électrique s'est solidifiée. La première expérience de Rudy en tant que luthier a été en fait une expérience lorsqu'à l'âge de treize ans, il a tenté de construire une guitare à 12 cordes en utilisant les manches cassés de deux guitares à 6 cordes.

        En 1974, lors de la première visite de Rudy à New York, il est allé directement de l'aéroport JFK avec une valise au sanctuaire mondialement connu des instruments de musique... la 48e rue. Il rêvait depuis longtemps de visiter cet endroit où les musiciens se rassemblaient pour acheter, vendre, parcourir et rêver. Vous pourriez même y croiser un ou plusieurs de vos idoles.
        
        Rudy et sa femme, Fran, ont ouvert 'Rudy's Music Stop' sur la 48e rue à New York en 1978 et ont commencé à transformer leurs passions en une artisanat tangible. Il n'a pas fallu longtemps pour que 'Rudy's Music' devienne un magasin de guitares bien connu et très respecté par les guitaristes du monde entier. L'amour et l'enthousiasme de Rudy pour ce qu'il fait sont contagieux, et sa longue liste de clients réguliers continue de s'allonger."
      />
      <Articles
        imageSrc={Chinatown}
        title="China Town"
        text="Avant les années 1800, l'immigration en provenance d'Asie vers les États-Unis était minimale. Cependant, au cours du XIXe siècle, les États-Unis ont connu des migrations massives d'immigrants en provenance de plusieurs pays asiatiques, en particulier de la Chine. Plusieurs facteurs ont déclenché cette immigration à grande échelle. En 1848, de l'or a été découvert en Californie et tout au long des années 1850, les Chinois ont été recrutés comme une source majeure de main-d'œuvre pour les mines. De nombreux Chinois ont également immigré au cours de cette période pour échapper à la Rébellion Taiping, une guerre civile à grande échelle qui a englobé la majeure partie du sud de la Chine. Dans les années 1860, les Chinois ont été recrutés en grand nombre à la fois de Chine et de l'industrie minière de l'ouest américain pour aider à construire la portion du chemin de fer Central Pacific Railroad de la voie ferrée transcontinentale.
        La communauté chinoise en pleine croissance a continué de s'étendre bien au-delà de ses limites historiques, et d'ici 1980, la communauté chinoise de New York (y compris les quartiers de Brooklyn et de Flushing, Queens) était la plus grande du pays, dépassant celle de San Francisco. La population italienne de Little Italy a connu une contraction spectaculaire à partir des années 1950, lorsque, comme de nombreux Américains, de nombreux membres des classes moyennes et supérieures ont déménagé vers les banlieues en croissance. Little Italy a diminué en taille, ayant été dépassé par Chinatown du sud, et aujourd'hui son noyau est centré autour de Mulberry Street, avec ses nombreux cafés, restaurants, boulangeries et festivals annuels."
      />
      <Contact />
    </>
  );
};

export default Blog;
