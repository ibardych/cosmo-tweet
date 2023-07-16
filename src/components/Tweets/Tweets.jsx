import { useParams } from "react-router-dom";
import {
  Avatar,
  Date,
  Text,
  Tweet,
  TweetsStyled,
  Wrapper,
} from "./Tweets.styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import User from "components/User/User";
import { formatDate } from "helpers";
import Message from "components/Message/Message";

function Tweets() {
  const isLoading = useSelector(({ loading }) => loading.isLoading);
  const { userId } = useParams();
  const users = useSelector(({ user }) => user.users);
  const [user, setUser] = useState(null);
  const error = useSelector(({ user }) => user.error);

  useEffect(() => {
    if (!isLoading) {
      const result = users.filter((u) => u.id === userId);
      if (result.length === 1) setUser(result[0]);
    }
  }, [isLoading, userId, users]);

  return (
    <Wrapper>
      {user && (
        <>
          <User user={user} />

          <TweetsStyled>
            {!isLoading && user.tweets.length === 0 && !error && (
              <Message class="messaage">There are currently no tweets</Message>
            )}

            {user &&
              !!user.tweets.length &&
              user.tweets.map((tweet, index) => (
                <Tweet key={index} owner={tweet.owner}>
                  <Avatar img={tweet.owner ? user.avatar : tweet.avatar} />
                  <Text>
                    {tweet.text}
                    <Date>{formatDate(tweet.date)}</Date>
                  </Text>
                </Tweet>
              ))}
          </TweetsStyled>
        </>
      )}
    </Wrapper>
  );
}

export default Tweets;
