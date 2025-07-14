import * as SC from "./HeroStyled"

import heroPic from "../../assets/images/illustration-devices.svg"

const Hero:React.FC = () => {
    return ( 
        <SC.HeroCon>
            <img src={heroPic} alt="hero" />
        </SC.HeroCon>
     );
}
 
export default Hero;