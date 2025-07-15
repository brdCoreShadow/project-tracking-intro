import styled from "@emotion/styled";

export const NavList = styled.ul`
padding-top: 24px;
padding-bottom: 24px;
padding-left: 24px;
padding-right: 24px;

text-align: center;


background-color: #fff;

border-radius: 4px;
`

export const NavListItem = styled.li`

text-transform: uppercase;

& > a{
    color: #242942;
}

&:not(:last-of-type){
    padding-bottom: 24px;
}

&:last-of-type{
    padding-top: 24px;

    border-top: 1px solid #979797;

    & > a{
        color: #242942;
        opacity: 0.5;
    }
}
`