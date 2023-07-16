import styled from "@emotion/styled";
import { colors } from "constants";
import { transition } from "helpers";
import avatar from "images/avatar@2x.png";
import { NavLink } from "react-router-dom";

export const AvatarStyled = styled(NavLink)`
  width: 100%;
  height: 8px;
  background: ${colors.color2};
  box-shadow: 0px 3.44px 2.58px 0px ${colors.color4} inset,
    0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.06),
    0px -1.72px 3.44px 0px ${colors.color1} inset;
  position: relative;
  margin-bottom: 62px;
  flex-shrink: 0;
`;

export const Cirlce = styled.div`
  width: 80px;
  height: 80px;
  box-shadow: 0px 4.4px 3.3px 0px ${colors.color4} inset,
    0px -2.2px 4.4px 0px ${colors.color1} inset,
    0px 4.4px 4.4px rgba(0, 0, 0, 0.06);
  background-color: ${colors.color2};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 4px;
  left: 50%;
  animation: appear 1s forwards;
  ${transition("transform")};

  @keyframes appear {
    0% {
      width: 0px;
      height: 0px;
    }
    100% {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Img = styled.div`
  width: calc(100% - 18px);
  height: calc(100% - 18px);
  background: url(${({ img }) => img || avatar}) center ${colors.color3};
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0px 4.4px 3.3px 0px ${colors.color4},
    0px -2.2px 4.4px 0px ${colors.color1};
  overflow: hidden;
`;
