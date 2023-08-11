import { Card, CardContent, CardHeader } from "@mui/material";
import styles from "./tableChartByh.module.scss";

const TableChartByh = (props) => {
  const { data, sx } = props;

  return (
    <Card sx={{sx}}>
      <CardHeader
        title="테이블1"
        sx={{
          paddingTop: '10px',
          paddingBottom: '0px',
        }}
      />
      <CardContent
        sx={{
          paddingTop: "10px",
        }}
      >
        <table className={styles.customTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>병동</th>
              <th className={styles.tableHeader}>총원</th>
              <th className={styles.tableHeader}>재원</th>
              <th className={styles.tableHeader}>입원예정</th>
              <th className={styles.tableHeader}>퇴원예정</th>
              <th className={styles.tableHeader}>공병상</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className={styles.tableCell}>{row.Ward}</td>
                <td className={styles.tableCell}>{row.TotalBed}</td>
                <td className={styles.tableCell}>{row.InHospital}</td>
                <td className={`${styles.tableCell} ${styles.willAdmission}`}>{row.WillAdminssion}</td>
                <td className={`${styles.tableCell} ${styles.willDischarged}`}>{row.WillDischarged}</td>
                <td className={styles.tableCell}>{row.EmptyBed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default TableChartByh;
