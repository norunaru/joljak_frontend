// import React, { useEffect } from "react";

// const KakaoMap = () => {
//   const apiKey = process.env.REACT_APP_KAKAO_MAP_API_KEY;

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const mapContainer = document.getElementById("map");
//         const options = {
//           center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 중심 좌표 설정
//           level: 3, // 초기 줌 레벨 설정
//         };

//         const map = new window.kakao.maps.Map(mapContainer, options);
//       });
//     };

//     document.head.appendChild(script);
//   }, [apiKey]);

//   return (
//     <div id="map" style={{ width: "500px", height: "500px" }}>
//       {/* 카카오맵이 여기에 렌더링됩니다. */}
//     </div>
//   );
// };

// export default KakaoMap;

import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);
    //교통정보
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    //지형도로 표시
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
};

export default KakaoMap;
