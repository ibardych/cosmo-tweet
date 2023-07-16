import styled from "@emotion/styled";

export const HomePageStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const Text = styled.div`
  width: 800px;
  max-width: 100%;
  text-align: center;
  padding: 0 20px;

  & h1 {
    font-size: 26px;
    margin-bottom: 30px;
    margin-top: -50px;
  }

  & p {
    font-weight: 300;
    font-size: 18px;
    line-height: 1.6;
  }
`;
