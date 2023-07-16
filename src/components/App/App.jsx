import { AppStyled } from "./App.styled";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage"));
const TweetsPage = lazy(() => import("pages/TweetsPage"));

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="/*" element={<HomePage />} />
        </Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
