import ReactDOM from "react-dom";

import { ChildProp } from "@/utils/types";

const BurgerPortal:React.FC<ChildProp> = ({children}) => {

const portalRoot = document.getElementById("burger-portal");
if (!portalRoot) return null

    return ReactDOM.createPortal(children, portalRoot)
}
 
export default BurgerPortal;