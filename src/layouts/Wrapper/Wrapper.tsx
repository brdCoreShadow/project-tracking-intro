import * as SC from "./WrapperStyled"

import { ChildProp } from "@/utils/types";

const Wrapper:React.FC<ChildProp> = ({children}) => {
    return ( 
        <SC.WrapperCon>
            {children}
        </SC.WrapperCon>
     );
}
 
export default Wrapper;