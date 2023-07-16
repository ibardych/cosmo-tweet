import { BackButton } from "components/Styled/Button.styled";
import { UsersPageStyled } from "components/Styled/UsersPage.styled";
import Users from "components/Users/Users";
import { IoMdArrowRoundBack } from "react-icons/io";

const UsersPage = () => {
  return (
    <UsersPageStyled>
      <BackButton to="/">
        <IoMdArrowRoundBack />
        Home
      </BackButton>
      <Users />
    </UsersPageStyled>
  );
};

export default UsersPage;
