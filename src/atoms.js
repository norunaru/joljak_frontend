import { atom } from "recoil";

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: true, // 초기 상태: 로그아웃 상태(false)
});

export const userNicknameAtom = atom({
  key: "userNickname",
  default: "noru",
});
