import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoggedInState, userNicknameAtom } from "../atoms";

// 컴포넌트
const Page = styled.div`
  height: 200vh;
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
  padding: 0px 20px;
  height: 100%;
`;

const Header = styled.header`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = styled.div`
  position: relative;
  height: 30vh;
`;

const Row = styled(motion.div)`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
  justify-content: space-evenly;
`;

const CoverSample = styled(motion.div)`
  background-color: white;
  height: 200px;
  width: 200px;
  border-radius: 10%;
  transition: transform 0.3s ease;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center;

  a {
    text-decoration: none;
    display: block;
    height: 100%;
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Box1 = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 24px;
    font-family: "Merienda", cursive;
    font-weight: 500;
    color: transparent;
    background: linear-gradient(45deg, #8752f1, #ed49c7);
    -webkit-background-clip: text;
    background-clip: text;
  }
  h2 {
    font-size: 80px;
    text-align: center;
    width: 50%;
    color: white;

    /* 미디어 쿼리를 사용하여 창 크기에 따라 크기 조절 */
    @media (max-width: 768px) {
      font-size: 48px;
    }
  }
`;

const Box2 = styled.div`
  height: 100vh;
  background-color: transparent;
  margin: 0px 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToHome = styled.div`
  width: 30vh;
  height: 10vh;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 0 100px rgba(255, 84, 32, 0.8);
  margin-bottom: 50px;
  border: none;
  background: #ff783d;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.4s ease-in-out;
  a {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
  }
  &:hover {
    box-shadow: 0, 0, 1000px rgba(73, 32, 255, 0.8);
    background: #ff5e00;
  }
`;

const Explanation = styled.h2`
  font-size: 40px;
  color: transparent;
  background: linear-gradient(45deg, #f1527c, #115fd5);
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 700;
  height: 10vh;
  margin-bottom: 5vh;
`;

const HowToMake = styled.ol`
  height: 70vh;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const How = styled.li`
  color: transparent;
  background: linear-gradient(45deg, #f1527c, #115fd5);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 32px;
  margin-bottom: 10vh;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 32px;
  a {
    color: ${(props) => props.theme.accentColor};
  }
`;

const User = styled.h1`
  color: orangered;
  font-size: 32px;
`;

function Intro() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const userNickname = useRecoilValue(userNicknameAtom);

  return (
    <Page>
      <Container>
        <Header>
          {isLoggedIn ? (
            <>
              <Title>환영합니다, </Title> <User>{` ${userNickname}`}</User>
            </>
          ) : (
            ""
          )}
        </Header>
        <Box1>
          <span>Traffic measurement through object detection</span>
          <h2>Welcome to the AI Music Generation</h2>
          <ToHome>
            <Link to={isLoggedIn ? "/home" : "/login"}>
              {isLoggedIn ? "서비스 사용" : "로그인 / 회원가입"}
            </Link>
          </ToHome>
        </Box1>
        <Slider>
          <AnimatePresence>
            <Row>
              <CoverSample
                bgPhoto={"https://i.ytimg.com/vi/lblRZlVjwt0/maxresdefault.jpg"}
              >
                <a href="https://www.youtube.com/watch?v=Q2Sb6ju98Cc&list=RDMMQ2Sb6ju98Cc&start_radio=1" />
              </CoverSample>
              <CoverSample
                bgPhoto={
                  "https://i.namu.wiki/i/SG9dcHX0o1cdCcwI6hsggTOCq_pgIXP1ZQpbj5A4Kl3Em3Jj9tFxiiJrapJgF3vTZp7oY6BqTHKa1pael60T4A.webp"
                }
              >
                <a href="https://www.youtube.com/watch?v=i1EwrkrrIu4&list=RDMMQ2Sb6ju98Cc&index=5" />
              </CoverSample>
              <CoverSample
                bgPhoto={
                  "https://mblogthumb-phinf.pstatic.net/MjAyMTA2MDlfMjM0/MDAxNjIzMjIyMjU5Mjgz.cv3La0LhNLcFnPJ091a8jHz6K8-UoA8BIQrZRZcJ54sg.z4v7OPd07iQ7gD7gj1I_WUxRjVxilKiwwvjV1uvHzhcg.PNG.sglucia_/%EB%9E%84%EB%A1%9C%EC%8D%AC%EA%B8%8002.png?type=w800"
                }
              >
                <a href="https://www.youtube.com/watch?v=Wp7DJZXsxwU" />
              </CoverSample>
              <CoverSample
                bgPhoto={
                  "data:image/png;base64,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"
                }
              >
                <a href="https://github.com/poramfe" />
              </CoverSample>
            </Row>
          </AnimatePresence>
        </Slider>
        <Box2>
          <Explanation>How it works</Explanation>
          <HowToMake>
            <How>1. 카카오맵 api를 통한 각 대교 위치 파악</How>
            <How>2. 사용자 인증 및 접근 제어 구현을 활용한 다양한 서비스</How>
            <How>3. cctv영상 데이터를 활용한 교통량 측정</How>
            {/* <How>4. 학습한 목소리와 반주파일을 합쳐 커버곡 완성</How> */}
          </HowToMake>
        </Box2>
      </Container>
    </Page>
  );
}

export default Intro;
