import styled from "@emotion/styled";
import { colors } from "constants";
import { transition } from "helpers";

export const TweetsStyled = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  & li {
    cursor: pointer;
    color: ${colors.color7};
    ${transition("color")};

    &:hover {
      color: ${colors.color1};
    }

    &.active {
      font-weight: 700;
    }
  }
`;
