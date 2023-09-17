// MyPage.jsx
import React from "react";

const MyPage = () => {
  // 로컬 스토리지에서 저장된 파일 이름을 가져옵니다.
  const selectedFile = localStorage.getItem("selectedFile");

  return (
    <div>
      <h1>My Page</h1>
      {selectedFile ? (
        <p>Selected File: {selectedFile}</p>
      ) : (
        <p>No file selected.</p>
      )}
    </div>
  );
};

export default MyPage;
