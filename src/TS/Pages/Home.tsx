// Home.js
import Header from "../Components/Header";
import BurgerMenu from "../Components/BurgerMenu";
import Contacts from "../Components/ContactBottom";

const Home = () => {
  return (
    <div>
      <Header title="Loïc Rouzaud" subtitle="Développeur" />
      <BurgerMenu isOpen/>
      <Contacts />
    </div>
  );
};

export default Home;
