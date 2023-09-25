import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Intro from "./routes/Intro";
import Home from "./routes/Home";
import MyPage from "./routes/MyPage";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "./atoms";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Map from "./routes/Map";

function Router() {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route
          path="/mypage"
          element={isLoggedIn ? <MyPage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
