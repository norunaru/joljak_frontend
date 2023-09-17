import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./routes/Intro";
import Home from "./routes/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
