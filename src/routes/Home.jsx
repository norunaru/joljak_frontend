import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaMusic, FaGithub } from "react-icons/fa";
import KakaoMap from "../components/KakaoMap";
import BoxGrid from "../components/BoxGrid";
import { useRecoilState } from "recoil";
import { isLoggedInState, userNicknameAtom } from "../atoms";
import { useNavigate } from "react-router-dom";
import LogOutBtn from "../components/LogOutBtn";
import GoBackLink from "../components/GoBackLink";
import NameChecker from "../components/NameChecker";

const Page = styled.div`
  height: 100vh;
  /* 전체 화면 백그라운드 스타일 설정 */
  background-size: 100% 100%;
  background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px,
    0px 0px, 0px 0px;
  background-image: radial-gradient(
      70% 53% at 36% 76%,
      #000000f5 0%,
      #073aff00 100%
    ),
    radial-gradient(42% 53% at 15% 94%, #000000f5 7%, #073aff00 100%),
    radial-gradient(42% 53% at 34% 72%, #903df4f5 7%, #073aff00 100%),
    radial-gradient(18% 28% at 35% 87%, #000000f5 7%, #073aff00 100%),
    radial-gradient(31% 43% at 7% 98%, #0f0f17f5 24%, #073aff00 100%),
    radial-gradient(35% 56% at 91% 74%, #0e0c55f5 9%, #073aff00 100%),
    radial-gradient(74% 86% at 67% 38%, #000000f5 24%, #073aff00 100%),
    linear-gradient(181deg, #085877ff 1%, #4c00fcff 100%);
`;
const Button = styled.button`
  background: linear-gradient(45deg, #12097e, #7d49ed);
  color: white;
  width: 30vh;
  height: 10vh;
  margin-top: 10px;
  border-radius: 15px;
  width: 100%;
  font-size: 20px;
`;

// const LogOutBtn = styled.button`
//   background-color: #3a16cc;
//   position: absolute;
//   right: 30px;
//   display: block;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   font-size: 16px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

const NavBar = styled.nav`
  height: 10vh;
  position: fixed;
  width: 100%;
  background-color: #0a172a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  z-index: 999;

  h3 {
    color: white;
    font-size: 30px;
    opacity: 1 !important; /* !important를 속성 값 뒤에 추가 */
  }
`;

const Container = styled.div`
  position: absolute;
  top: 10vh; /* NavBar 아래부터 시작 */
  width: 100%;
  bottom: 0; /* 화면 아래까지 높이 설정 */
  background-color: transparent;
  display: flex;
  flex-direction: row; /* 기본적으로 가로로 배치 */

  @media (max-width: 768px) {
    flex-direction: column; /* 화면 크기가 768px 이하일 때 세로로 배치 */
    height: 150vh;
  }
`;

const Box1 = styled.div`
  flex: 1;
  background-color: transparent;
  color: white;
  padding: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 20px;
  height: 70vh;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(17.6px);
  -webkit-backdrop-filter: blur(17.6px);

  h4 {
    font-size: 40px;
    font-weight: 600;
    align-self: flex-start; /* 좌상단에 정렬되도록 추가 */
    margin-bottom: 10px; /* 아래 여백 추가 */
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const Box2 = styled.div`
  flex: 1;
  background-color: transparent;
  color: white;
  padding: 20px;
  margin: 30px;
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 20px;
  height: 70vh;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(17.6px);
  -webkit-backdrop-filter: blur(17.6px);

  h4 {
    font-size: 40px;
    font-weight: 600;
    align-self: flex-start; /* 좌상단에 정렬되도록 추가 */
    margin-bottom: 10px; /* 아래 여백 추가 */
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userNickname, setUserNickname] = useRecoilState(userNicknameAtom);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUserNickname("");
    navigate("/");
  };

  return (
    <Page>
      <NavBar>
        <GoBackLink to="/boards">게시판</GoBackLink>

        <h3>Seoul Map</h3>
        <LogOutBtn onClick={handleLogOut}>Log out</LogOutBtn>
      </NavBar>
      <Container>
        <Box1>
          <h4>Bridges</h4>
          {/* <Label onClick={handleFileSelect}>
            <IconWrapper>
              <FaMusic />
            </IconWrapper>
            {selectedFile ? selectedFile : "Select Source File"}
          </Label>
          <InputFile
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          /> */}
          <KakaoMap />
        </Box1>
        <Box2>
          {/* <h4>Output</h4> */}
          <BoxGrid />
        </Box2>
      </Container>
      <NameChecker />
    </Page>
  );
}

export default Home;
