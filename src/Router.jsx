import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./routes/Intro";
import Home from "./routes/Home";
import MyPage from "./routes/MyPage";
//
import Signup from "./routes/Signup";
import Login from "./routes/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
