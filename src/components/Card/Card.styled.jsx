import styled from "@emotion/styled";
import { colors } from "constants";

export const CardStyled = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    142deg,
    ${colors.color5} 0%,
    ${colors.color3} 69.1%,
    ${colors.color6} 100%
  );
  box-shadow: -2.58px 6.88px 20.63px 0px rgba(0, 0, 0, 0.23);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 36px 0;

  & .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
  }

  & .bg {
    display: inline-block;
    width: 308px;
    margin-bottom: 18px;
  }

  & .button {
    margin-top: 10px;
  }

  &:hover .avatar {
    transform: translate(-50%, -50%) scale(1.3);
  }
`;

export const Stat = styled.div`
  text-transform: uppercase;
  color: ${colors.color2};
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
`;
