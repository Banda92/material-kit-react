/* BarChartByh.js */

import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import styles from "./BarChartByh.module.scss"; // SCSS 파일을 import 합니다.

const BarChartByh = (props) => {
  const data = props.data;
  const { sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader
        title="테이블2"
        sx={{
          paddingTop: "10px",
          paddingBottom: "0px",
        }}
      />
      <CardContent
        sx={{
          paddingTop: "10px",
        }}
      >
        <div className={styles.Chart}>
          {" "}
          {/* SCSS로 변경한 부분 */}
          <table className={styles.table}>
            {/* SCSS로 변경한 부분 */}
            <thead>
              <tr>
                <th className={styles.th}>병동</th> {/* SCSS로 변경한 부분 */}
                <th className={styles.th}>병상이용율</th> {/* SCSS로 변경한 부분 */}
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {/* SCSS로 변경한 부분 */}
              {data.map((row, index) => (
                <tr key={index}>
                  <td className={styles.td}>{row.Ward}</td> {/* SCSS로 변경한 부분 */}
                  <td className={styles.td}>
                    {/* SCSS로 변경한 부분 */}
                    <div className={styles.barContainer}>
                      <div
                        className={styles.bar}
                        style={{
                          width: `${row.OccupancyRate * 100}%`,
                        }}
                      ></div>
                      {/* SCSS로 변경한 부분 */}
                      <div className={styles.barText}>
                        {Math.round(row.OccupancyRate * 100)}%
                      </div>
                      {/* SCSS로 변경한 부분 */}
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
