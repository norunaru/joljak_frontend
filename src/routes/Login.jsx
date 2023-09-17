import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../atoms";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 에러 메시지 상태 추가

  // isLoggedInState의 값을 업데이트하기 위한 Recoil hook
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const handleLogin = async () => {
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
      navigate("/");
    } catch (error) {
      // 로그인 실패 부분 -> axios.post에서 반환되는 에러가 catch블록에서 처리. setError함수로 메시지 출력.
      console.error("로그인 실패:", error);
      setError("이메일 또는 비밀번호가 올바르지 않습니다."); // 실패 시 에러 메시지 설정
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* 에러 메시지 표시 */}
    </div>
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
