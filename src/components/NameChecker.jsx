import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoggedInState, userNicknameAtom } from "../atoms";

const Name = styled.div`
  position: absolute;
  span {
    color: white;
  }
  bottom: 0px;
  h4 {
    color: white;
    font-size: 30px;
  }
`;

const NameChecker = () => {
  const recoilName = useRecoilValue(userNicknameAtom);
  const localName = localStorage.getItem("userNickname");

  return (
    <div>
      <div>
        <span>recoil name </span>
        <Name>{recoilName}</Name>
      </div>
      <div>
        <span>local name </span>
        <Name>{localName}</Name>
      </div>
    </div>
  );
};

export default NameChecker;
