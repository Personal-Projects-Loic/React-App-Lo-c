// Home.js
import Header from "../Components/Header";
import BurgerMenu from "../Components/BurgerMenu";

const Home = () => {
  return (
    <div>
      <Header title="Loïc Rouzaud" subtitle="Développeur" imageUrl={"../../assets/profile-picture.jpg"} />
      <BurgerMenu isOpen/>
    </div>
  );
};

export default Home;
