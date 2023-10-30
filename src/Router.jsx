import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Intro from "./routes/Intro";
import Home from "./routes/Home";
import MyPage from "./routes/MyPage";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "./atoms";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Map from "./routes/Map";
import Boards from "./routes/Boards";
import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import CreateBoardPage from "./routes/CreateBoardPage";
import BoardUpdate from "./routes/BoardUpdate";
import UploadVideo from "./routes/UploadVideo";

function Router() {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/boards" element={<Boards />} />
        {/* Use BoardList component for /boards route */}
        <Route path="/boards/:boardId" element={<BoardDetail />} />

        <Route path="/update-board/:boardId" element={<BoardUpdate />} />

        {/* Use BoardDetail component for /boards/:boardId route */}
        <Route
          path="/mypage"
          element={isLoggedIn ? <MyPage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/create-board" element={<CreateBoardPage />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

// home도 isloggedin이 false면 login페이지로 이동하게 수정
