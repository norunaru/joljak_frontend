import React, { useEffect, useState } from "react";
const { kakao } = window;

const KakaoMap = () => {
  const [carsPerMinArray, setCarsPerMinArray] = useState(Array(20).fill(0));
  const [carsPerMinIndex, setCarsPerMinIndex] = useState(0);
  const MeanArray = [
    60, 86, 69, 30, 44, 54, 70, 70, 90, 72, 11, 19, 72, 92, 36, 66, 45, 36, 43,
    30,
  ];
  const bridges = [
    {
      name: "일산대교",
      latitude: 37.65053776328475,
      longitude: 126.7160719615825,
      cars_per_min: [51, 64, 74, 59, 60, 49, 58, 69],
      mean: 60,
    },
    {
      name: "행주대교",
      latitude: 37.598509270504745,
      longitude: 126.8096687340931,
      cars_per_min: [36, 147, 109, 62, 90, 123, 39],
      mean: 86,
    },
    {
      name: "방화대교",
      latitude: 37.588619870869124,
      longitude: 126.82654156405273,
      cars_per_min: [69, 75, 47, 46, 118, 61, 68, 68],
      mean: 69,
    },

    {
      name: "월드컵대교",
      latitude: 37.55575121781325,
      longitude: 126.88528703747562,
      cars_per_min: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      mean: 30,
    },
    {
      name: "성산대교",
      latitude: 37.55222480002214,
      longitude: 126.89108666621375,
      cars_per_min: [51, 38, 38, 51, 38, 70, 24, 43],
      mean: 44,
    },
    {
      name: "양화대교",
      latitude: 37.54329769375769,
      longitude: 126.90350143586107,
      cars_per_min: [35, 107, 63, 68, 39, 46, 49, 29],
      mean: 54,
    },

    {
      name: "서강대교",
      latitude: 37.53868254264963,
      longitude: 126.9253233033947,
      cars_per_min: [72, 56, 27, 106, 94, 107, 78, 22],
      mean: 70,
    },
    {
      name: "마포대교",
      latitude: 37.53351690246414,
      longitude: 126.93600789973944,
      cars_per_min: [19, 95, 35, 37, 184, 10, 92, 94],
      mean: 70,
    },
    {
      name: "원효대교",
      latitude: 37.52652943761908,
      longitude: 126.94452121803188,
      cars_per_min: [35, 112, 41, 117, 150, 67, 126, 74],
      mean: 90,
    },
    {
      name: "한강대교",
      latitude: 37.517669455903565,
      longitude: 126.95891616761445,
      cars_per_min: [55, 90, 103, 59, 23, 164, 51, 34],
      mean: 72,
    },
    {
      name: "동작대교",
      latitude: 37.509818361009806,
      longitude: 126.98126990606771,
      cars_per_min: [4, 16, 2, 22, 1, 24, 5, 15],
      mean: 11,
    },
    {
      name: "반포대교",
      latitude: 37.51508165237189,
      longitude: 126.99628991409487,
      cars_per_min: [29, 24, 16, 13, 22, 15, 11, 26],
      mean: 19,
    },
    {
      name: "한남대교",
      latitude: 37.526902159778025,
      longitude: 127.01294209722504,
      cars_per_min: [82, 76, 65, 74, 68, 74, 69, 70],
      mean: 72,
    },
    {
      name: "동호대교",
      latitude: 37.53612730315592,
      longitude: 127.02072800913986,
      cars_per_min: [64, 74, 85, 97, 111, 131, 100],
      mean: 92,
    },
    {
      name: "성수대교",
      latitude: 37.536700647457415,
      longitude: 127.03475815007556,
      cars_per_min: [18, 68, 10, 50, 60, 8, 67, 11],
      mean: 36,
    },

    {
      name: "청담대교",
      latitude: 37.52501169648615,
      longitude: 127.06353232534644,
      cars_per_min: [56, 60, 79, 57, 61, 63, 80, 74],
      mean: 66,
    },
    {
      name: "잠실대교",
      latitude: 37.52448878182753,
      longitude: 127.0914967648489,
      cars_per_min: [42, 62, 42, 49, 48, 33, 54, 37],
      mean: 45,
    },
    {
      name: "올림픽대교",
      latitude: 37.53420972476996,
      longitude: 127.1034563519609,
      cars_per_min: [16, 36, 27, 41, 70, 25, 52, 26],
      mean: 36,
    },
    {
      name: "천호대교",
      latitude: 37.542489942730235,
      longitude: 127.1132442736656,
      cars_per_min: [57, 46, 28, 41, 50, 35, 59],
      mean: 43,
    },

    {
      name: "강동대교",
      latitude: 37.577969734978204,
      longitude: 127.16102620559593,
      cars_per_min: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      mean: 30,
    },
  ];

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    const bridgeMarkers = bridges.map((bridge) => {
      const markerPosition = new kakao.maps.LatLng(
        bridge.latitude,
        bridge.longitude
      );

      const imageSize = new kakao.maps.Size(40, 40);
      const imageOption = { offset: new kakao.maps.Point(20, 40) };

      const redMarkerImage = new kakao.maps.MarkerImage(
        process.env.PUBLIC_URL + "/Img/red.png",
        imageSize,
        imageOption
      );

      const blueMarkerImage = new kakao.maps.MarkerImage(
        process.env.PUBLIC_URL + "/Img/blue.png",
        imageSize,
        imageOption
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map,
        title: bridge.name,
        image: redMarkerImage, // 기본적으로 빨간색 마커로 설정
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width: auto; height: auto; padding: 10px; font-size: 14px; color: black;">${bridge.name}</div>`,
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(map, marker);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });

      return { marker, bridge, redMarkerImage, blueMarkerImage };
    });

    const updateMarkers = () => {
      bridgeMarkers.forEach(
        ({ marker, bridge, redMarkerImage, blueMarkerImage }) => {
          const bridgeMean = bridge.mean;
          const carsPerMin = bridge.cars_per_min[carsPerMinIndex];

          const newMarkerImage =
            carsPerMin !== undefined && carsPerMin > bridgeMean
              ? redMarkerImage
              : blueMarkerImage;

          marker.setImage(newMarkerImage);
        }
      );
    };

    updateMarkers();

    const interval = setInterval(() => {
      setCarsPerMinIndex((prevIndex) => (prevIndex + 1) % 8);
      updateMarkers();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [carsPerMinIndex]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default KakaoMap;
