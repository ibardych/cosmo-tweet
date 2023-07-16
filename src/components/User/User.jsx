import { Button } from "components/Styled/Button.styled";
import { Avatar, Name, Stat, UserStyled } from "./User.styled";
import { followUser } from "redux/user/operations";
import { useDispatch, useSelector } from "react-redux";

function User({ user }) {
  const dispatch = useDispatch();
  const followedUsers = useSelector(({ user }) => user.followedUsers);
  const { id, followers, tweets, avatar } = user;
  const isFollowing = followedUsers.includes(id);

  const handleFollow = async () => {
    dispatch(followUser(user));
  };

  return (
    <UserStyled>
      <Avatar img={avatar} />
      <Name>{user.user}</Name>
      <Stat>{tweets.length.toLocaleString("en-US")} Tweets</Stat>
      <Stat>{followers.toLocaleString("en-US")} Followers</Stat>
      <Button className="button" active={isFollowing} onClick={handleFollow}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </UserStyled>
  );
}

export default User;
