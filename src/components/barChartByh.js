import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import {styls} from './barChartByh.module.scss';

const BarChartByh = (props) => {
  const data = props.data;
  const { sx } = props;
  

  return (
    <Card sx={sx}>
      <CardHeader
        title="테이블2"
        sx={{
            paddingTop: '10px',
            paddingBottom:'0px',
          }}
      />
      <CardContent sx={{
                paddingTop:"10px"
              }}
              >

          <div className="Chart">
            <table
              style={{
                width: "100%",
                height: "100%",
                borderCollapse: "collapse",
                alignItems: "center",
                alignSelf: "center",
                alignContent: "center",
                fontSize:"0.4rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      width: "10%",
                      backgroundColor: "#3858ed",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    병동
                  </th>
                  <th style={{ backgroundColor: "#3858ed", fontWeight: "bold", color: "white" }}>
                    병상이용율
                  </th>
                </tr>
              </thead>
              <tbody style={{textAlign:"center"}}>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td style={{ width: "13%", padding: "3px", border: "1px solid lightgray" }}>
                      {row.Ward}
                    </td>
                    <td style={{ padding: "3px", border: "1px solid lightgray" }}>
                      <div style={{ display: "flex" }}>
                        <div
                          className="bar"
                          style={{
                            height: "10px",
                            backgroundColor: "orange",
                            borderRadius: "0px 10px 10px 0px",
                            width: `${row.OccupancyRate * 100}%`,
                          }}
                        ></div>
                        <div style={{ marginLeft: "10px", lineHeight: "10px" }}>
                          {Math.round(row.OccupancyRate * 100)}%
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </CardContent>
    </Card>
  );
};

export default BarChartByh;
