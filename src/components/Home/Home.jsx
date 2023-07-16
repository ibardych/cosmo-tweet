import Logo from "components/Logo/Logo";
import { LinkButton } from "components/Styled/Button.styled";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Text, User, Users } from "./Home.styled";
import { useSelector } from "react-redux";

function Home() {
  const isLoading = useSelector(({ loading }) => loading.isLoading);
  const users = useSelector(({ user }) => user.users);

  return (
    <>
      <Logo />
      <Text>
        <h1>Welcome to CosmoTweet!</h1>
        <p>
          Discover a captivating universe of tweets and users from other planets
          across the vast expanse of the cosmos. CosmoTweet is a unique social
          media platform that brings together extraterrestrial beings and
          intergalactic civilizations, allowing you to explore their thoughts,
          ideas, and experiences.
        </p>
      </Text>
      <LinkButton to="users">
        Users
        <IoMdArrowRoundForward />
      </LinkButton>
      <Users>
        {!isLoading &&
          !!users.length &&
          users
            .slice(0, 10)
            .map((user) => <User key={user.id} img={user.avatar}></User>)}
      </Users>
    </>
  );
}

export default Home;
