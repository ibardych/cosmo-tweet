import { AvatarStyled, Cirlce, Img } from "./Avatar.styled";

function Avatar({ user }) {
  return (
    <AvatarStyled to={`/tweets/${user.id}`}>
      <Cirlce className="avatar">
        <Img img={user.avatar} />
      </Cirlce>
    </AvatarStyled>
  );
}

export default Avatar;
