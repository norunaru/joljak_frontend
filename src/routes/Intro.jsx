import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import { useRecoilState } from "recoil";
import { isLoggedInState } from "../atoms";

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

function Intro() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <Page>
      <Container>
        <Header>
          <Title>
            🎙️ Intro Page{" "}
            <a href="https://github.com/poramfe">
              <FaGithub />
            </a>
          </Title>
        </Header>
        <Box1>
          <span>Make music cover with your Voice</span>
          <h2>Welcome to the AI Music Generation</h2>
          <ToHome>
            <Link to={isLoggedIn ? "/home" : "/login"}>Ai 커버 생성하기</Link>
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
                  "https://blog.kakaocdn.net/dn/de8oU1/btqZkqSOGFp/cKZJqCb9btuLfY71KfaJMK/img.jpg"
                }
              >
                <a href="youtube.com/watch?v=sWJoG_upW4o" />
              </CoverSample>
            </Row>
          </AnimatePresence>
        </Slider>
        <Box2>
          <Explanation>How to create</Explanation>
          <HowToMake>
            <How>1. 커버하려는 곡을 보컬, 반주파일로 분류</How>
            <How>2. 원하는 목소리 파일을 넣어 학습</How>
            <How>3. 분류한 보컬 파일에 학습한 목소리 적용</How>
            <How>4. 학습한 목소리와 반주파일을 합쳐 커버곡 완성</How>
          </HowToMake>
        </Box2>
      </Container>
    </Page>
  );
}

export default Intro;
