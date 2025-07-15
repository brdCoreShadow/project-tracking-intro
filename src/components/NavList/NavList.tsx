import * as SC from "./NavListStyled";

const NavList:React.FC = () => {
  return (
    <SC.NavListStyled>
      <SC.NavListItem>
        <a href="#">product</a>
      </SC.NavListItem>
      <SC.NavListItem>
        <a href="#">features</a>
      </SC.NavListItem>
      <SC.NavListItem>
        <a href="#">pricing</a>
      </SC.NavListItem>
      <SC.NavListItem>
        <a href="#">login</a>
      </SC.NavListItem>
    </SC.NavListStyled>
  );
};

export default NavList;
