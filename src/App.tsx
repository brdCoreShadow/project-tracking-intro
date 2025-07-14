import BurgerBrn from "./components/BurgerBtn/BurgerBtn";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import Header from "./layouts/Header/Header";
import Wrapper from "./layouts/Wrapper/Wrapper";

const App: React.FC = () => {
  return (
    <div>
      <Wrapper>
        <Header>
          <Logo/>
          <BurgerBrn/>
        </Header>
        <Hero/>
      </Wrapper>
      <Intro/>
    </div>
  );
};

export default App;
