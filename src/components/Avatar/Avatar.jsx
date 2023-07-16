import { AvatarStyled, Cirlce, Img } from "./Avatar.styled";

function Avatar({ img }) {
  return (
    <AvatarStyled>
      <Cirlce className="avatar">
        <Img img={img} />
      </Cirlce>
    </AvatarStyled>
  );
}

export default Avatar;
