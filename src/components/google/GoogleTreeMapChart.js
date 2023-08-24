import React from "react";
import { Chart } from "react-google-charts";

export const data = 
[
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
  // midColor: "#ddd",
  maxColor: "#4CCBA1",
  headerHeight: 15,
  fontColor: "black",
  // showScale: true,
  highlightOnMouseOver: true,
};

const categories =[
  "권역외상센터", "간호간병","권역응급의료센터", "SUB-ICU"
]
const wards = [
  "061W","071W","072W","T41W","T51W","TICUA","E41W","EICU","091S"
]

export const GoogleTreeMapChart = React.memo((props) => {
  
  const data=props.data
// console.log(data)
  const handleChartClick = (event) => {
    const innerText = event.chartWrapper.HS.innerText;
    const lines = innerText.split("\n");
    const lastValue = lines[lines.length - 1];

    if (categories.includes(lastValue)) {
      props.setCategory(lastValue);
    }

    if (wards.includes(lastValue)) {
      props.setWard(lastValue);
    }



  };
  // const onContextMenu  = (e) => {
  //   e.preventDefault(); // 우클릭 메뉴가 기본 브라우저 메뉴 대신 표시되도록 방지
  //   console.log("ContextMenu event occurred!");
  // }

  return (
    <Chart
      chartType="TreeMap"
      width="100%"
      height="300px"
      data={data}
      options={options}
      chartEvents={[
        // {
        //   eventName: "select",
        //   callback: handleChartClick,
        // },
        
      ]}
      // onContextMenu={onContextMenu}
    />
  );
});
