import styled from "@emotion/styled";

export const IntroCon = styled.div`
  padding-bottom: 92px;
  padding-left: 32px;
  padding-right: 32px;

  & > h3 {
    margin-bottom: 16px;

    text-transform: uppercase;

    font-size: 40px;
    color: #242942;
  }

  & > p {
    margin-bottom: 28px;

    font-size: 18px;
    line-height: 1.4;
  }
`;

export const FlexIntroTitleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;

  & > div {
    margin-right: 16px;

    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 10px;
    padding-right: 10px;

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

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 26px;
    padding-right: 26px;

    text-transform: uppercase;

    font-size: 14px;

    background-color: #ff5e5e;
    color: #fff;

    border-radius: 4px;
  }

  & > p {
    text-transform: uppercase;

    font-size: 15px;
    letter-spacing: 3px;
    font-weight: 400;

    color: #242942;
  }
`;
