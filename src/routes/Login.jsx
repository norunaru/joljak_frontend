import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { isLoggedInState, userNicknameAtom } from "../atoms";
import { useNavigate } from "react-router-dom";
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
  a {
    font-size: 18px;
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 10px 0px;
    background-color: #9b75f3;
    color: white;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  border: none;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 25px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
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

const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [error, setError] = useState(""); // 에러 메시지 상태 추가

  // isLoggedInState의 값을 업데이트하기 위한 Recoil hook
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setuserNicknameAtom = useSetRecoilState(userNicknameAtom);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      setError("Email and Password are required.");
      return; // Exit the function early if fields are empty
    }
    //로그인 성공 부분 -> 성공시 반환된 토큰을 로컬 스토리지에 저장, onLogin(true)호출하여 부모 컴포넌트에 로그인 상태를 알림.
    try {
      //서버로 email, password보내고 서버에서 응답 객체가 오는데 그것을 response변수에 넣는다.

      //서버 응답 성공적이라고 가정하기 위한 주석, 이후에 주석해제
      console.log(userEmail, userPassword);

      //성공 확인용 더미 코드
      const response = {
        result: true,
        message: "로그인 성공",
        data: {
          token:
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImlhdCI6MTY5NTExMTYzOCwiZXhwIjoxNjk1MTE1MjM4fQ.lqLwMnwjbsK0QCpDgos2lq5pooZV6dzIfI173fE5TxCYqrAsA_9czzp0ycF_hDWKCy3k-MAjP1__KNRrCxMlLw",
          exprTime: 3600000,
          user: {
            userEmail: "test@test.com",
            userPassword: "",
            userNickname: "test1",
          },
        },
      };
      console.log(response.result);

      /*
      //실패 확인용 더미 코드
      const response = {
          "result": false,
          "message": "Sign In Failed",
          "data": null
        }
      console.log(response.result);
       */

      //   const response = await axios.post(
      //     "http://localhost:4000/api/auth/signIn",
      //     {
      //       userEmail,
      //       userPassword,
      //     }
      //   );

      if (response.result) {
        // 로그인 성공
        console.log("로그인 성공");
        const token = response.data.token;
        localStorage.setItem("token", token);
        // Recoil을 사용하여 isLoggedInState 값을 업데이트
        const userNickname = response.data.user.userNickname;
        setuserNicknameAtom(userNickname);
        setIsLoggedIn(true);
        console.log(userNickname);
        navigate("/");
      } else {
        // 로그인 실패
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (error) {
      // 로그인 실패 부분 -> axios.post에서 반환되는 에러가 catch블록에서 처리. setError함수로 메시지 출력.
      console.error("로그인 실패:", error);
      setError("이메일 또는 비밀번호가 올바르지 않습니다."); // 실패 시 에러 메시지 설정
    }
  };

  return (
    <Page>
      <Container>
        <Header>
          <h1>Welcome</h1>
          <p>Log in or create Account</p>
        </Header>
        <LoginForm onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setuserEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
          />

          <Input type="submit" value="Log In" />
          <Link to="/signup">Create Account</Link>
          {error && <p style={{ color: "red", marginLeft: "1rem" }}>{error}</p>}
        </LoginForm>
      </Container>
    </Page>
  );
};

export default Login;

/*
서버에서 받은 응답 객체 response의 형식은 서버 개발자가 정의한 API의 구조에 따라 다를 수 있습니다. 일반적으로, 로그인 요청이 실패하면 서버는 HTTP 상태 코드를 함께 반환하고, 클라이언트에서는 이 상태 코드를 기반으로 로그인이 실패했음을 판단합니다. 서버에서 응답 객체의 형식은 다음과 같을 수 있습니다:

json

{
  "success": false,
  "message": "이메일 또는 비밀번호가 일치하지 않습니다."
}
위의 예시에서는 success 필드가 false로 설정되어 실패한 로그인을 나타내고, message 필드에는 에러 메시지가 포함되어 있습니다. 클라이언트 코드에서는 이러한 응답을 받았을 때 catch 블록 내부에서 에러 처리를 수행하게 됩니다.

따라서 클라이언트 코드에서는 catch 블록 내부에서 서버로부터 받은 응답을 분석하여 message 필드를 추출하고, 이를 에러 메시지로 화면에 표시하거나 다른 필요한 처리를 수행할 수 있습니다. 로그인이 실패했을 때 클라이언트에서 서버로부터 받은 에러 메시지를 출력하기 위해 다음과 같이 코드를 작성할 수 있습니다:
try {
    // ... (로그인 요청)
  } catch (error) {
    console.error("로그인 실패:", error);
    const errorMessage = error.response.data.message;
    setError(errorMessage); // 실패 시 에러 메시지 설정
  }
  위 코드에서 error.response는 Axios를 통해 받은 응답 객체를 나타냅니다. 이 객체의 data 프로퍼티에 서버로부터 받은 데이터가 포함되어 있으며, 여기서 message 필드를 추출하여 에러 메시지로 사용하고 있습니다. 이렇게 클라이언트는 서버로부터 받은 응답을 분석하여 로그인 실패 시 에러 메시지를 효과적으로 처리할 수 있습니다.
  */
