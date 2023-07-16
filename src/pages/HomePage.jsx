import Logo from "components/Logo/Logo";
import { LinkButton } from "components/Styled/Button.styled";
import { HomePageStyled, Text } from "components/Styled/HomePage.styled";
import { IoMdArrowRoundForward } from "react-icons/io";

const HomePage = () => {
  return (
    <HomePageStyled>
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
      <LinkButton to="tweets">
        Tweets
        <IoMdArrowRoundForward />
      </LinkButton>
    </HomePageStyled>
  );
};

export default HomePage;
