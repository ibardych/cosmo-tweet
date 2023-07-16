import styled from "@emotion/styled";
import { mediaSizes } from "constants";
import { colors } from "constants";
import avatar from "images/avatar@2x.png";

export const UserStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.color6};
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 300px;
    position: sticky;
    top: 0;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  & .button {
    margin-top: 20px;
  }
`;

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  background: url(${({ img }) => img || avatar}) center ${colors.color3};
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.4;
  color: ${colors.color4};
  text-align: center;
`;

export const Stat = styled.div`
  font-size: 18px;
  color: ${colors.color2};
`;
