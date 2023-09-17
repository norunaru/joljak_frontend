import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaMusic, FaGithub } from "react-icons/fa";

const Page = styled.div`
  background-color: black;
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

const NavBar = styled.nav`
  height: 10vh;
  position: fixed;
  width: 100%;
  background-color: black;
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

const InputFile = styled.input`
  display: none;
`;

const Label = styled.label`
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 5px dashed;
  height: 30vh;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column; /* 화면 크기가 768px 이하일 때 세로로 배치 */
    height: 80%;
  }
`;

const IconWrapper = styled.span`
  margin-bottom: 15px;
`;

function Home() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      setSelectedFile(file.name);
    }
  };

  return (
    <Page>
      <NavBar>
        <h3>Create</h3>
      </NavBar>
      <Container>
        <Box1>
          <h4>Source File</h4>
          <Label onClick={handleFileSelect}>
            <IconWrapper>
              <FaMusic />
            </IconWrapper>
            {selectedFile ? selectedFile : "Select Source File"}
          </Label>
          <InputFile
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {/* {selectedFile && (
            <SelectedFileName> Selected File: {selectedFile}</SelectedFileName>
          )} */}
          <Button>Run</Button>
        </Box1>
        <Box1>
          <h4>Output</h4>
        </Box1>
      </Container>
    </Page>
  );
}

export default Home;
