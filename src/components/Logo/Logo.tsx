import * as SC from "./LogoStyled"

import logoIcon from "../../assets/images/logo.svg"

const Logo:React.FC = () => {
    return ( 
        <SC.LogoThumb>
            <img src={logoIcon} alt="logo" />
        </SC.LogoThumb>
     );
}
 
export default Logo;