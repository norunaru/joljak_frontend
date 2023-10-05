import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";

const Wrapper = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 20px;
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
  border-radius: 5%;
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
  i {
    height: 175px;
    width: 175px;
    background: rgba(255, 255, 255, 0.7);
    @media (max-width: 768px) {
      height: 100px;
      width: 100px;
    }
  }
  p {
    margin-left: 30px;
    width: 60%;
    display: block;
    text-align: justify;
    line-height: 125%;
    font-size: 1.6rem;
  }
`;

const Img = styled.i``;

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

const BoxGrid = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const bridges = [
    {
      name: "강동대교",
    },
    {
      name: "천호대교",
    },
    {
      name: "올림픽대교",
    },
    {
      name: "잠실대교",
    },
    {
      name: "청담대교",
    },
    {
      name: "성수대교",
    },
    {
      name: "동호대교",
    },
    {
      name: "한남대교",
    },
    {
      name: "반포대교",
    },
    {
      name: "동작대교",
    },
    {
      name: "원효대교",
    },
    {
      name: "마포대교",
    },
    {
      name: "서강대교",
    },
    {
      name: "성산대교",
    },
    {
      name: "월드컵대교",
    },
    {
      name: "가양대교",
    },
    {
      name: "방화대교",
    },
    {
      name: "노량대교",
    },
    {
      name: "영동대교",
    },
    {
      name: "양화대교",
    },
  ];

  const handleBoxClick = (name) => {
    setSelectedBox(name);
  };

  const renderBoxes = () => {
    return bridges.map((bridge, index) => (
      <Box
        key={index}
        className="box"
        variants={boxVariants}
        initial="initial"
        animate="animate"
        onClick={() => handleBoxClick(bridge.name)}
      >
        {bridge.name}
      </Box>
    ));
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
            <CloseButton onClick={() => setSelectedBox(null)}>
              {/* Close */}
              <Icon>
                <RiCloseCircleLine />
              </Icon>
            </CloseButton>

            <CardTitle>{selectedBox}</CardTitle>

            <div>
              <Img></Img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ea neque quidem exercitationem possimus.
              </p>
            </div>
          </Card>
        )}
        위 코드에서 CardTitle이라는 새로운 styled-components 컴포넌트를 만들고,
        이 컴포넌트를 사용하여 Card의 h2에 selectedBox (다리의 이름)을
        표시하도록 수정했습니다.
      </AnimatePresence>
      {renderBoxes()}
    </Wrapper>
  );
};

export default BoxGrid;
