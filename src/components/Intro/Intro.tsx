import * as SC from "./IntroStyled";

const Intro: React.FC = () => {
  return (
    <SC.IntroCon>
      <div>
        <div>new</div>
        <p>monograph dashboard</p>
      </div>
      <h3>powerful insights into your team</h3>
      <p>Project planning and time tracking for agile teams</p>
      <div>
        <button>schedule a demo</button>
        <p>to see a preview</p>
      </div>
    </SC.IntroCon>
  );
};

export default Intro;
