import styled from "@emotion/styled";
import { colors } from "constants";
import { transition } from "helpers";
import { NavLink } from "react-router-dom";

export const LogoStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${transition("opacity")};

  &:hover {
    opacity: 0.8;
  }

  & img {
    width: ${({ size }) => (size === "small" ? "200px" : "400px")};
    max-width: 100%;
  }
`;

export const Name = styled.div`
  font-size: ${({ size }) => (size === "small" ? "30px" : "40px")};
  position: relative;
  top: ${({ size }) => (size === "small" ? "-30px" : "-70px")};
  font-weight: 300;
  color: #e02e79;

  & span {
    color: ${colors.color5};
  }
`;
