import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Location",
    "Parent",
    "Market trade volume (size)",
    "Market increase/decrease (color)",
  ],

  ["구분", null, 0, 0],
  ["간호간병","구분",0,0],
  ["061W","간호간병",0.5536,5.5],
  ["071W","간호간병",0.6182,6.1],
  ["072W","간호간병",0.6296,6.2],
  ["권역외상센터","구분",0,0],
  ["T41W","권역외상센터",0.85,8.5],
  ["T51W","권역외상센터",1,10],
  ["TICUA","권역외상센터",1,10],
  ["권역응급의료센터","구분",0,0],
  ["E41W","권역응급의료센터",0.439,4.4],
  ["EICU","권역응급의료센터",0.6,6],
  ["SUB-ICU","구분",0,0],
  ["091S","SUB-ICU",0.17,1.7],
//   ["Global", null, 0, 0],
//   ["America", "Global", 0, 0],
//   ["Europe", "Global", 0, 0],
//   ["Asia", "Global", 0, 0],
//   ["Australia", "Global", 0, 0],
//   ["Africa", "Global", 0, 0],
//   ["Brazil", "America", 11, 10],
//   ["USA", "America", 52, 31],
//   ["Mexico", "America", 24, 12],
//   ["Canada", "America", 16, -23],
//   ["France", "Europe", 42, -11],
//   ["Germany", "Europe", 31, -2],
//   ["Sweden", "Europe", 22, -13],
//   ["Italy", "Europe", 17, 4],
//   ["UK", "Europe", 21, -5],
//   ["China", "Asia", 36, 4],
//   ["Japan", "Asia", 20, -12],
//   ["India", "Asia", 40, 63],
//   ["Laos", "Asia", 4, 34],
//   ["Mongolia", "Asia", 1, -5],
//   ["Israel", "Asia", 12, 24],
//   ["Iran", "Asia", 18, 13],
//   ["Pakistan", "Asia", 11, -52],
//   ["Egypt", "Africa", 21, 0],
//   ["S. Africa", "Africa", 30, 43],
//   ["Sudan", "Africa", 12, 2],
//   ["Congo", "Africa", 10, 12],
//   ["Zaire", "Africa", 8, 10],
];

export const options = {
  minColor: "#f00",
  midColor: "#ddd",
  maxColor: "#0d0",
  headerHeight: 15,
  fontColor: "black",
  showScale: true,
};

export const GoogleTreeMapChart = () => {
  return (
    <Chart
      chartType="TreeMap"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
