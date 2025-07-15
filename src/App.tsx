import BurgerBrn from "./components/BurgerBtn/BurgerBtn";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import NavList from "./components/NavList/NavList";
import BurgerPortal from "./components/Portal/BurgerPortal";
import Header from "./layouts/Header/Header";
import Wrapper from "./layouts/Wrapper/Wrapper";
import { useToggle } from "./utils/hooks";

const App: React.FC = () => {

const {isBurger, openBurger, closeBurger} = useToggle()

  return (
    <div>
      <Wrapper>
        <Header>
          <Logo/>
          <BurgerBrn isBurger={isBurger} openBurger={openBurger} closeBurger={closeBurger}/>
        </Header>
        <BurgerPortal>
          <NavList/>
        </BurgerPortal>
        <Hero/>
      </Wrapper>
      <Intro/>
    </div>
  );
};

export default App;
