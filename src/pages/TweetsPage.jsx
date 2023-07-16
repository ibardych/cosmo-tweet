import { BackButton } from "components/Styled/Button.styled";
import { TweetsPageStyled } from "components/Styled/TweetsPage.styled";
import Tweets from "components/Tweets/Tweets";
import { IoMdArrowRoundBack } from "react-icons/io";
const TweetsPage = () => {
  return (
    <TweetsPageStyled>
      <BackButton to="/">
        <IoMdArrowRoundBack />
        Home
      </BackButton>
      <Tweets />
    </TweetsPageStyled>
  );
};

export default TweetsPage;
