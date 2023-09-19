import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../atoms";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
  a {
    font-size: 18px;
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px 0px;
    background-color: #9b75f3;
    color: white;
    border-radius: 5px;
  }
`;

const Container = styled.div`
  padding: 20px 30px;
  border-radius: 15px;
  background-color: white;
  height: 600px;
  width: 500px;
`;

const Header = styled.header`
  margin: 90px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: black;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    color: black;
    width: 60%;
    opacity: 0.5;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
  span {
    font-size: 18px;
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px 0px;
    background-color: #9b75f3;
    color: white;
    border-radius: 5px;
  }
`;

const Input = styled.input`
  border: none;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 25px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.accentColor};
  }

  &[type="submit"] {
    background-color: ${(props) => props.theme.accentColor};
    cursor: pointer;
    padding: 20px 0px;
    border-radius: 5px;
    color: white;
  }
`;

const Card = styled.div`
  width: 500px;
  height: 600px;
  perspective: 1000px;
`;

const FlipContainer = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px 0px;
    background-color: #9b75f3;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  background-color: #007bff;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

const CardComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // 임시 코드, email과 password가 포함된 POST 요청을 백엔드로 보냄
      await axios.post("http://your-backend-url/signup", {
        email,
        password,
      });

      // 회원가입 성공 시 리다이렉트 또는 다른 작업 수행
      console.log("회원가입 성공");
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 에러 메시지 상태 추가

  // isLoggedInState의 값을 업데이트하기 위한 Recoil hook
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required.");
      return; // Exit the function early if fields are empty
    }
    //로그인 성공 부분 -> 성공시 반환된 토큰을 로컬 스토리지에 저장, onLogin(true)호출하여 부모 컴포넌트에 로그인 상태를 알림.
    try {
      //서버로 email, password보내고 서버에서 응답 객체가 오는데 그것을 response변수에 넣는다.

      /*
      서버 응답 성공적이라고 가정하기 위한 주석, 이후에 주석해제
      const response = await axios.post("http://your-backend-url/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      */
      // Recoil을 사용하여 isLoggedInState 값을 업데이트
      setIsLoggedIn(true);
    } catch (error) {
      // 로그인 실패 부분 -> axios.post에서 반환되는 에러가 catch블록에서 처리. setError함수로 메시지 출력.
      console.error("로그인 실패:", error);
      setError("이메일 또는 비밀번호가 올바르지 않습니다."); // 실패 시 에러 메시지 설정
    }
  };

  return (
    <Page>
      <Card onClick={handleFlip}>
        <FlipContainer isFlipped={isFlipped}>
          <Front>
            <Container>
              <Header>
                <h1>Welcome</h1>
                <p>Log in or create Account</p>
              </Header>
              <LoginForm onSubmit={handleLogin}>
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Input type="submit" value="Log In" />
                {error && (
                  <p style={{ color: "red", marginLeft: "1rem" }}>{error}</p>
                )}
                {/* Front 컴포넌트 내에서만 handleFlip 함수 실행 */}
                <span onClick={handleFlip}>Create Account</span>
              </LoginForm>
            </Container>
          </Front>
          <Back>
            <Container>
              <Header>
                <h1>Sign up</h1>
                <p>Use Email or Google ID to make Account</p>
              </Header>
              <Form onSubmit={handleSignup}>
                <h2>Signup</h2>
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input type="submit" value="Sign up" />
              </Form>
            </Container>
          </Back>
        </FlipContainer>
      </Card>
    </Page>
  );
};

export default CardComponent;
