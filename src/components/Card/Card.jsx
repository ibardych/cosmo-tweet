import { svgSprite } from "helpers";
import { CardStyled, Stat } from "./Card.styled";
import bg from "images/bg@2x.png";
import Avatar from "../Avatar/Avatar";
import { Button } from "components/Styled/Button.styled";
import { followUser } from "redux/user/operations";
import { useDispatch, useSelector } from "react-redux";

function Card({ user }) {
  const dispatch = useDispatch();
  const followedUsers = useSelector(({ user }) => user.followedUsers);
  const { id, followers, tweets } = user;
  const isFollowing = followedUsers.includes(id);

  const handleFollow = async () => {
    dispatch(followUser(user));
  };

  return (
    <CardStyled>
      {svgSprite("logo-goit", "logo")}
      <img className="bg" src={bg} alt="background" />
      <Avatar user={user} />
      <Stat>{tweets.length.toLocaleString("en-US")} Tweets</Stat>
      <Stat>{followers.toLocaleString("en-US")} Followers</Stat>
      <Button className="button" active={isFollowing} onClick={handleFollow}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </CardStyled>
  );
}

export default Card;
