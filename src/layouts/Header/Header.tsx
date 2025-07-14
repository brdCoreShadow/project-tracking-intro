import * as SC from "./HeaderStyled"

import { ChildProp } from "@/utils/types";

const Header:React.FC<ChildProp> = ({children}) => {
    return ( 
        <SC.HeaderCon>{children}</SC.HeaderCon>
     );
}
 
export default Header;