import styled from "@emotion/styled";

export const WrapperCon = styled.div`
position: relative;


&::after{
position: absolute;

top: 0;
right: 0;

z-index: -1;

    display: inline-block;

    content: "";

    width: 50%;
    height: 425px;

    background-color: #EDF2F6;

    border-bottom-left-radius: 64px;
}
`