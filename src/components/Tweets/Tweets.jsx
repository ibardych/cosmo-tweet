import Card from "components/Card/Card";
import { useEffect, useRef, useState } from "react";
import { Navigation, TweetsStyled } from "./Tweets.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "redux/user/operations";
import { MoreButton } from "components/Styled/Button.styled";

function Tweets() {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ loading }) => loading.isLoading);
  const users = useSelector(({ user }) => user.users);
  const followedUsers = useSelector(({ user }) => user.followedUsers);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showedUsers, setShowedUsers] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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

      <TweetsStyled>
        {!!showedUsers.length &&
          showedUsers.map((user) => <Card key={user.id} user={user} />)}
      </TweetsStyled>

      {!isLoading && showedUsers.length < filteredUsers.length && (
        <MoreButton type="button" onClick={() => loadMore(page + 1)}>
          Load more
        </MoreButton>
      )}
      <div ref={scrollRef} style={{ marginTop: "100px" }}></div>
    </>
  );
}

export default Tweets;
