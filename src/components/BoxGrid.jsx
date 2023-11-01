import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { RiCloseCircleLine, RiErrorWarningLine } from "react-icons/ri";
const Wrapper = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

const Icon = styled.span`
  font-size: 28px;
  color: white;
`;

const Box = styled(motion.div)`
  height: 70px;
  width: 70px;
  background-color: white;
  border-radius: 8%;
  color: black;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 박스 내용을 중앙에 정렬 */

  &:hover {
    transform: translateY(-3px) !important;
  }
`;

const Card = styled(motion.div)`
  margin-left: 30px;
  z-index: 100;
  position: absolute;
  top: 100;
  left: 0;
  width: 90%;
  height: 60%;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  gap: 20px;
  background-color: white;
  background-image: linear-gradient(109.7deg, #4236ab 1.8%, #b15dc8 90.2%);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  video {
    width: 300px;
    height: 230px;
    @media (max-width: 768px) {
      height: 100px;
      width: 100px;
    }
  }
  p {
    width: 60%;
    display: block;
    text-align: justify;
    line-height: 125%;
    font-size: 1.6rem;
  }
`;

const Video = styled.video`
  width: 175px;
  height: 175px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 5px;
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.2,
    },
  },
};

const Count = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

const BoxGrid = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [videoId, setBridgeId] = useState(null);
  const [videoBlob, setVideoBlob] = useState(null); // 추가: Blob 데이터 상태
  const [currentCarsPerMin, setCurrentCarsPerMin] = useState([]);
  const [carsPerMinIndex, setCarsPerMinIndex] = useState(0);

  const [countArray, setCountArray] = useState([]);

  const bridges = [
    {
      id: 1,
      name: "일산대교",
      cars_per_min: [51, 64, 74, 59, 60, 49, 58, 69],
      mean: 60,
    },
    {
      id: 2,
      name: "행주대교",
      cars_per_min: [36, 147, 109, 62, 90, 123, 39],
      mean: 86,
    },
    {
      id: 3,
      name: "방화대교",
      cars_per_min: [69, 75, 47, 46, 118, 61, 68, 68],
      mean: 69,
    },

    { id: 4, name: "월드컵대교", cars_per_min: [], mean: 30 },
    {
      id: 5,
      name: "성산대교",
      cars_per_min: [51, 38, 38, 51, 38, 70, 24, 43],
      mean: 44,
    },
    {
      id: 6,
      name: "양화대교",
      cars_per_min: [35, 107, 63, 68, 39, 46, 49, 29],
      mean: 54,
    },
    {
      id: 7,
      name: "서강대교",
      cars_per_min: [72, 56, 27, 106, 94, 107, 78, 22],
      mean: 70,
    },
    {
      id: 8,
      name: "마포대교",
      cars_per_min: [19, 95, 35, 37, 184, 10, 92, 94],
      mean: 70,
    },
    {
      id: 9,
      name: "원효대교",
      cars_per_min: [35, 112, 41, 117, 150, 67, 126, 74],
      mean: 90,
    },
    {
      id: 10,
      name: "한강대교",
      cars_per_min: [55, 90, 103, 59, 23, 164, 51, 34],
      mean: 72,
    },
    {
      id: 11,
      name: "동작대교",
      cars_per_min: [4, 16, 2, 22, 1, 24, 5, 15],
      mean: 11,
    },
    {
      id: 12,
      name: "반포대교",
      cars_per_min: [29, 24, 16, 13, 22, 15, 11, 26],
      mean: 19,
    },
    {
      id: 13,
      name: "한남대교",
      cars_per_min: [82, 76, 65, 74, 68, 74, 69, 70],
      mean: 72,
    },
    {
      id: 14,
      name: "동호대교",
      cars_per_min: [64, 74, 85, 97, 111, 131, 100],
      mean: 92,
    },
    {
      id: 15,
      name: "성수대교",
      cars_per_min: [18, 68, 10, 50, 60, 8, 67, 11],
      mean: 36,
    },

    {
      id: 16,
      name: "청담대교",
      cars_per_min: [56, 60, 79, 57, 61, 63, 80, 74],
      mean: 66,
    },
    {
      id: 17,
      name: "잠실대교",
      cars_per_min: [42, 62, 42, 49, 48, 33, 54, 37],
      mean: 45,
    },
    {
      id: 18,
      name: "올림픽대교",
      cars_per_min: [16, 36, 27, 41, 70, 25, 52, 26],
      mean: 36,
    },
    {
      id: 19,
      name: "천호대교",
      cars_per_min: [57, 46, 28, 41, 50, 35, 59],
      mean: 43,
    },
    { id: 20, name: "강동대교", cars_per_min: [], mean: 30 },
  ];

  useEffect(() => {
    const generateCountArray = () => {
      const newCountArray = bridges.map((bridge) => {
        const currentArray = bridge.cars_per_min;
        return currentArray[carsPerMinIndex % 8]; // 8로 변경: 데이터 배열의 길이가 8임
      });
      setCountArray(newCountArray);
    };

    generateCountArray();

    const interval = setInterval(() => {
      setCarsPerMinIndex((prevIndex) => {
        if (prevIndex >= 7) {
          return 0; // 7 이상이면 0으로 설정
        } else {
          return prevIndex + 1; // 7보다 작으면 1씩 증가
        }
      });
      generateCountArray(); // 값 변경 시 업데이트
    }, 5000);

    return () => clearInterval(interval);
  }, [carsPerMinIndex, bridges]); // bridges를 의존성 배열에 추가

  //서버에 영상 요청
  useEffect(() => {
    if (selectedBox) {
      axios
        .get(`http://localhost:4000/api/videos/${videoId}/stream`, {
          responseType: "blob", // Blob 데이터 요청
        })
        .then((response) => {
          setVideoBlob(response.data); // Blob 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("영상을 가져오기 실패.", error);
          setVideoBlob(null); // 영상을 가져오지 못하면 Blob 데이터 초기화
        });
    }
  }, [selectedBox]);

  useEffect(() => {
    if (selectedBox) {
      setCurrentCarsPerMin(
        bridges.find((bridge) => bridge.name === selectedBox).cars_per_min
      );
    }
  }, [selectedBox]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carsPerMinIndex >= 7) {
        setCarsPerMinIndex(0); // 7 이상이면 0으로 설정
      } else {
        setCarsPerMinIndex(carsPerMinIndex + 1); // 아닌 경우 1씩 증가
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [carsPerMinIndex]);

  const handleBoxClick = (name, id) => {
    setSelectedBox(name);
    setBridgeId(id);
  };

  const handleCloseButtonClick = () => {
    setSelectedBox(null);
    setVideoBlob(null); // 비디오를 닫을 때 Blob 데이터 초기화
    setCurrentCarsPerMin([]);
    setCarsPerMinIndex(0);
  };

  return (
    <Wrapper>
      <AnimatePresence initial={false}>
        {selectedBox && (
          <Card
            className="card"
            key="card"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CloseButton onClick={handleCloseButtonClick}>
              <Icon>
                <RiCloseCircleLine />
              </Icon>
            </CloseButton>
            <CardTitle>{selectedBox}</CardTitle>
            <div>
              {videoBlob ? (
                <Video muted autoPlay loop>
                  <source
                    src={URL.createObjectURL(videoBlob)}
                    type="video/mp4"
                  />
                  <strong>Your browser does not support the video tag.</strong>
                </Video>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: "175px", height: "175px" }}
                >
                  <RiErrorWarningLine size="150" color="white" />
                </motion.div>
              )}
              {currentCarsPerMin.length > 0 && (
                <Count>
                  <p>Cars/min: {currentCarsPerMin[carsPerMinIndex]}</p>
                </Count>
              )}
            </div>
          </Card>
        )}
      </AnimatePresence>
      {bridges.map((bridge, index) => (
        <Box
          key={index}
          className="box"
          variants={boxVariants}
          initial="initial"
          animate="animate"
          onClick={() => handleBoxClick(bridge.name, bridge.id)} // bridge.id 추가
        >
          {bridge.name}
        </Box>
      ))}
    </Wrapper>
  );
};

export default BoxGrid;
