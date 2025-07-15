import * as SC from "./DeskFlexStyled"

import { ChildProp } from "@/utils/types";

const DeskFlex:React.FC<ChildProp> = ({children}) => {
    return ( 
        <SC.DeskFlexCon>
            {children}
        </SC.DeskFlexCon>
     );
}
 
export default DeskFlex;