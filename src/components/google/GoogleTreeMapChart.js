import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Name", "Parent", "Value", "Value increase/decrease (color)"],
  ["구분", null, 0, 0],
  ["간호간병", "구분", 0, 0],
  ["061W", "간호간병", 0.5536, 5.5],
  ["071W", "간호간병", 0.6182, 6.1],
  ["072W", "간호간병", 0.6296, 6.2],
  ["권역외상센터", "구분", 0, 0],
  ["T41W", "권역외상센터", 0.85, 8.5],
  ["T51W", "권역외상센터", 1, 10],
  ["TICUA", "권역외상센터", 1, 10],
  ["권역응급의료센터", "구분", 0, 0],
  ["E41W", "권역응급의료센터", 0.439, 4.4],
  ["EICU", "권역응급의료센터", 0.6, 6],
  ["SUB-ICU", "구분", 0, 0],
  ["091S", "SUB-ICU", 0.17, 1.7],
];

export const options = {
  minColor: "#F25B51",
  midColor: "#ddd",
  maxColor: "#4CCBA1",
  headerHeight: 15,
  fontColor: "black",
  showScale: true,
  highlightOnMouseOver: true,
};
export const GoogleTreeMapChart = (props) => {
  const handleChartClick = (event) => {
    const innerText = event.chartWrapper.HS.innerText;
    const lines = innerText.split('\n'); // 줄바꿈 기준으로 분할
    const lastValue = lines[lines.length - 1]; // 가장 마지막 값 선택
    console.log("Last value:", lastValue);
    
  };

  return (
    <Chart
      chartType="TreeMap"
      width="100%"
      height="400px"
      data={data}
      options={options}
      chartEvents={[
        {
          eventName: "select",
          callback: handleChartClick,
        },
      ]}
    />
  );
};
