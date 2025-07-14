import BurgerBrn from "./components/BurgerBtn/BurgerBtn";
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
      </Wrapper>
    </div>
  );
};

export default App;
