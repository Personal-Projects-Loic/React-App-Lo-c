// Home.js
import Header from "../Components/Header";
import BurgerMenu from "../Components/BurgerMenu";

const Home = () => {
  return (
    <div>
      <Header title="Loïc Rouzaud" subtitle="Développeur" />
      <BurgerMenu isOpen/>
    </div>
  );
};

export default Home;
