import styled from "@emotion/styled";
import { colors } from "constants";
import avatar from "images/avatar@2x.png";

export const HomeStyled = styled.div``;

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

export const Users = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 600px;
  max-width: 100%;
`;

export const User = styled.ul`
  width: 80px;
  height: 80px;
  background: url(${({ img }) => img || avatar}) center ${colors.color3};
  background-size: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 12px 12px 5px -5px rgba(0, 0, 0, 0.1);
`;
