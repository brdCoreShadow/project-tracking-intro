import styled from "@emotion/styled";

export const IntroCon = styled.div`
  padding-bottom: 92px;
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: 1280px) {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  & > h3 {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-size: 40px;
    color: #242942;

    @media (min-width: 1280px) {
      margin-bottom: 32px;
      font-size: 64px;
    }
  }

  & > p {
    margin-bottom: 28px;
    font-size: 18px;
    line-height: 1.4;

    @media (min-width: 1280px) {
      margin-bottom: 64px;
    }
  }
`;

export const FlexIntroTitleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  & > div {
    margin-right: 16px;
    padding: 4px 10px;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 700;
    background-color: #242942;
    color: #fff;
    border-radius: 12px;
  }

  & > p {
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 3px;
    font-weight: 400;
    color: #242942;
  }
`;

export const IntroBtnCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button {
    margin-right: 20px;
    padding: 12px 26px;
    text-transform: uppercase;
    font-size: 14px;
    background-color: #ff5e5e;
    color: #fff;
    border-radius: 8px;

    @media (min-width: 1280px) {
      margin-right: 24px;
      padding: 16px 32px;
      font-size: 16px;
      transition: opacity 0.3s;

      &:hover,
      &:active,
      &:focus {
        opacity: 0.7;
        cursor: pointer;
        transition: opacity 0.3s;
      }
    }
  }

  & > p {
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 3px;
    font-weight: 400;
    color: #242942;
  }
`;
