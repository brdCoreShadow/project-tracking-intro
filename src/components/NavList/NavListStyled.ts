import styled from "@emotion/styled";

export const NavListStyled = styled.ul`
  text-align: center;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavListItem = styled.li`
  text-transform: uppercase;

  & > a {
    color: #242942;
  }

  &:not(:last-of-type) {
    padding-bottom: 24px;

    @media (min-width: 1280px) {
      margin-right: 42px;

      padding-bottom: 0;

      transition: all 0.3s;

      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
        cursor: pointer;

        transition: all 0.3s;
      }
    }
  }

  &:last-of-type {
    padding-top: 24px;

    border-top: 1px solid #979797;

    @media (min-width: 1280px) {
      position: relative;

      padding-top: 0;
      margin-left: 48px;

      border-top: none;

      transition: all 0.3s;

      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
        cursor: pointer;

        transition: all 0.3s;
      }

      &::before {
        position: absolute;

        top: 0;
        left: 0;

        transform: translate(-48px, 100%);

        display: inline-block;

        content: "";

        width: 8px;
        height: 8px;

        background-color: #242942;
        opacity: 0.5;

        border-radius: 50%;
      }
    }

    & > a {
      color: #242942;
      opacity: 0.5;
    }
  }
`;
