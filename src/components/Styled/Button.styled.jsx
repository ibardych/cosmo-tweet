import styled from "@emotion/styled";
import { transition } from "helpers";
import { colors } from "constants";
import { NavLink } from "react-router-dom";
const { color2, color7, color8 } = colors;

export const LinkButton = styled(NavLink)`
  display: flex;
  gap: 10px;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${colors.color1};
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.color4};
  border: none;
  line-height: normal;
  cursor: pointer;
  ${transition("opacity")};

  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  padding: 14px 39px;
  border-radius: 10.31px;
  background: ${({ active }) => (active ? color8 : color2)};
  box-shadow: 0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${color7};
  border: none;
  line-height: normal;
  cursor: pointer;
  ${transition("opacity", "background-color")};

  &:hover {
    opacity: 0.8;
  }
`;

export const MoreButton = styled.button`
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  border-radius: 5px;
  background: ${colors.color1};
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.color4};
  border: none;
  line-height: normal;
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
  ${transition("opacity", "background-color")};

  &:hover {
    opacity: 0.8;
  }
`;

export const BackButton = styled(NavLink)`
  display: inline-flex;
  padding: 14px;
  align-items: center;
  border-radius: 10.31px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${color7};
  border: none;
  line-height: normal;
  cursor: pointer;
  align-self: flex-start;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  ${transition("background-color")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
