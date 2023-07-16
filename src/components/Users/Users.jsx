import Card from "components/Card/Card";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "./Users.styled";
import { useSelector } from "react-redux";
import { MoreButton } from "components/Styled/Button.styled";
import Message from "components/Message/Message";
import { UsersStyled } from "./Users.styled";

function Users() {
  const isLoading = useSelector(({ loading }) => loading.isLoading);
  const users = useSelector(({ user }) => user.users);
  const followedUsers = useSelector(({ user }) => user.followedUsers);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showedUsers, setShowedUsers] = useState([]);
  const scrollRef = useRef(null);
  const error = useSelector(({ user }) => user.error);

  useEffect(() => {
    if (users.length) {
      const filteredUsers = users.filter(({ id }) => {
        const isFollowing = followedUsers.includes(id);
        if (!filter) return true;
        if (filter === "following") return isFollowing;
        if (filter === "follow" && !isFollowing) return true;
        return false;
      });
      setFilteredUsers(filteredUsers);
      setShowedUsers(filteredUsers.slice(0, page * 3));
    }
  }, [isLoading, users, followedUsers, filter, page]);

  const loadMore = (page) => {
    setPage(page);
    setTimeout(() => {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
    setPage(1);
  };

  return (
    <>
      <Navigation>
        <li
          className={!filter ? "active" : ""}
          onClick={() => handleFilter(null)}
        >
          All
        </li>
        <li
          className={filter === "follow" ? "active" : ""}
          onClick={() => handleFilter("follow")}
        >
          Follow
        </li>
        <li
          className={filter === "following" ? "active" : ""}
          onClick={() => handleFilter("following")}
        >
          Following
        </li>
      </Navigation>

      <UsersStyled>
        {!!showedUsers.length &&
          showedUsers.map((user) => <Card key={user.id} user={user} />)}
      </UsersStyled>

      {!isLoading && showedUsers.length === 0 && !error && (
        <Message class="messaage">There are currently no users</Message>
      )}

      {!isLoading && error && (
        <Message class="messaage" type="error">
          {error}
        </Message>
      )}

      {!isLoading && showedUsers.length < filteredUsers.length && (
        <MoreButton type="button" onClick={() => loadMore(page + 1)}>
          Load more
        </MoreButton>
      )}
      <div ref={scrollRef} style={{ marginTop: "100px" }}></div>
    </>
  );
}

export default Users;
