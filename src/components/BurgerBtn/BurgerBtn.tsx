import { TBurger } from "@/utils/types";
import * as SC from "./BurgerBtnStyled"

const BurgerBrn:React.FC<TBurger> = ({isBurger, openBurger, closeBurger}) => {
    return ( 
        <SC.BurgerBtnStyled onClick={isBurger ? closeBurger : openBurger} isBurger={isBurger}></SC.BurgerBtnStyled>
     );
}
 
export default BurgerBrn;