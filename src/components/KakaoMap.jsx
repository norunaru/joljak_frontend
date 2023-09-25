import React, { useEffect, useState } from "react";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    // 한강에 있는 다리들의 좌표 정보
    const bridges = [
      {
        name: "강동대교",
        latitude: 37.577969734978204,
        longitude: 127.16102620559593,
      },
      {
        name: "천호대교",
        latitude: 37.542489942730235,
        longitude: 127.1132442736656,
      },
      {
        name: "올림픽대교",
        latitude: 37.53420972476996,
        longitude: 127.1034563519609,
      },
      {
        name: "잠실대교",
        latitude: 37.52448878182753,
        longitude: 127.0914967648489,
      },
      {
        name: "청담대교",
        latitude: 37.52501169648615,
        longitude: 127.06353232534644,
      },
      {
        name: "성수대교",
        latitude: 37.536700647457415,
        longitude: 127.03475815007556,
      },
      {
        name: "동호대교",
        latitude: 37.53612730315592,
        longitude: 127.02072800913986,
      },
      {
        name: "한남대교",
        latitude: 37.526902159778025,
        longitude: 127.01294209722504,
      },
      {
        name: "반포대교",
        latitude: 37.51508165237189,
        longitude: 126.99628991409487,
      },
      {
        name: "동작대교",
        latitude: 37.509818361009806,
        longitude: 126.98126990606771,
      },
      {
        name: "원효대교",
        latitude: 37.52652943761908,
        longitude: 126.94452121803188,
      },
      {
        name: "마포대교",
        latitude: 37.53351690246414,
        longitude: 126.93600789973944,
      },
      {
        name: "서강대교",
        latitude: 126.93600789973944,
        longitude: 126.9253233033947,
      },
      {
        name: "성산대교",
        latitude: 37.55222480002214,
        longitude: 126.89108666621375,
      },
      {
        name: "월드컵대교",
        latitude: 37.55575121781325,
        longitude: 126.88528703747562,
      },
      {
        name: "가양대교",
        latitude: 37.57079019264399,
        longitude: 126.86135687529027,
      },
      {
        name: "방화대교",
        latitude: 37.588619870869124,
        longitude: 126.82654156405273,
      },
      {
        name: "노량대교",
        latitude: 37.517669455903565,
        longitude: 126.95891616761445,
      },
    ];

    // 다리별로 마커 생성 및 추가
    bridges.forEach((bridge) => {
      const markerPosition = new kakao.maps.LatLng(
        bridge.latitude,
        bridge.longitude
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map,
        title: bridge.name, // 마커에 이름 표시
        text: "텍스트를 표시할 수 있어요!",
      });
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width: auto; height: auto; padding: 10px; font-size: 14px; color: black;">${bridge.name}</div>`,
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
      //
    });

    // 지도 클릭시 위도, 경도 반환
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      const latlng = mouseEvent.latLng;
      const latitude = latlng.getLat();
      const longitude = latlng.getLng();

      // 클릭한 위치의 위도, 경도를 콘솔에 표시
      console.log("위도 :", latitude);
      console.log("경도 :", longitude);
    });

    // 교통정보
    // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    // 지형도로 표시
    // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "80vw",
        height: "80vh",
      }}
    ></div>
  );
};

export default KakaoMap;
