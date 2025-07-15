import { TBurger } from "@/utils/types";
import styled from "@emotion/styled";

export const BurgerBtnStyled = styled.button<Partial<TBurger>>`
  width: 24px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  cursor: pointer;

  background-image: ${({ isBurger }) =>
    isBurger
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%23242942' fill-rule='evenodd' d='M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z'/%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cg fill='%23242942' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z'/%3E%3C/g%3E%3C/svg%3E")`};
`;
