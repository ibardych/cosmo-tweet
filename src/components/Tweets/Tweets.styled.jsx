import styled from "@emotion/styled";
import { container } from "helpers";
import { colors } from "constants";
import avatar from "images/avatar@2x.png";
import { mediaSizes } from "constants";

export const Wrapper = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const TweetsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  max-width: 100%;
`;

export const Tweet = styled.li`
  padding: 14px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-left: ${({ owner }) => (owner ? "0px" : "40px")};
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.05);
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: url(${({ img }) => img || avatar}) center ${colors.color3};
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

export const Text = styled.div`
  line-height: 1.3;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #ccc;
`;
