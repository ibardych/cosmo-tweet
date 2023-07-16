import { AppStyled } from "./App.styled";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { getAllUsers } from "redux/user/operations";

const HomePage = lazy(() => import("pages/HomePage"));
const UsersPage = lazy(() => import("pages/UsersPage"));
const TweetsPage = lazy(() => import("pages/TweetsPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="tweets/:userId" element={<TweetsPage />} />
          <Route path="/*" element={<HomePage />} />
        </Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
