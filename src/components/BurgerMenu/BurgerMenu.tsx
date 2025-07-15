import * as SC from "./BurgerMenuStyled"

import NavList from "../NavList/NavList";

const BurgerMenu:React.FC = () => {
    return ( 
        <SC.BurgerMenuCon>
            <NavList/>
        </SC.BurgerMenuCon>
     );
}
 
export default BurgerMenu;