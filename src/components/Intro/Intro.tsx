import * as SC from "./IntroStyled";

const Intro: React.FC = () => {
  return (
    <SC.IntroCon>
      <SC.FlexIntroTitleCon>
        <div>new</div>
        <p>monograph dashboard</p>
      </SC.FlexIntroTitleCon>
      <h3>powerful insights into your team</h3>
      <p>Project planning and time tracking for agile teams</p>
      <SC.IntroBtnCon>
        <button>schedule a demo</button>
        <p>to see a preview</p>
      </SC.IntroBtnCon>
    </SC.IntroCon>
  );
};

export default Intro;
