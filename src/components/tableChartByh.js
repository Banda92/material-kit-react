import { Card, CardContent, CardHeader } from "@mui/material";


const TableChartByh = (props) => {
    const { data, sx } = props;

  return (
    <Card sx={sx}>
        <CardHeader title="테이블1"
        sx={{
            paddingTop: '10px',
            paddingBottom:'0px',
          }}
        />
              <CardContent sx={{
                paddingTop:"10px",
              }}
              >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize:"0.4rem",
              textAlign:"center",
              
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "3px",
                    border: "1px solid lightgray",
                    fontWeight: "bold",
                    backgroundColor: "#3858ed",
                    color: "white",
                  }}
                >
                  병동
                </th>
                <th
                  style={{
                    padding: "3px",
                    border: "1px solid lightgray",
                    fontWeight: "bold",
                    backgroundColor: "#3858ed",
                    color: "white",
                  }}
                >
                  총원
                </th>
                <th
                  style={{
                    padding: "3px",
                    border: "1px solid lightgray",
                    fontWeight: "bold",
                    backgroundColor: "#3858ed",
                    color: "white",
                  }}
                >
                  재원
                </th>
                <th
                  style={{
                    padding: "3px",
                    border: "1px solid lightgray",
                    fontWeight: "bold",
                    backgroundColor: "#3858ed",
                    color: "white",
                  }}
                >
                  입원예정
                </th>
                <th
                  style={{
                    padding: "3px",
                    border: "1px solid lightgray",
                    fontWeight: "bold",
                    backgroundColor: "#3858ed",
                    color: "white",
                  }}
                >
                  퇴원예정
                </th>
                <th
                  style={{
                    padding: "3px",
                    border: "1px solid lightgray",
                    fontWeight: "bold",
                    backgroundColor: "#3858ed",
                    color: "white",
                  }}
                >
                  공병상
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td style={{ padding: "3px", border: "1px solid lightgray" }}>{row.Ward}</td>
                  <td style={{ padding: "3px", border: "1px solid lightgray" }}>{row.TotalBed}</td>
                  <td style={{ padding: "3px", border: "1px solid lightgray" }}>
                    {row.InHospital}
                  </td>
                  <td
                    style={{
                      padding: "3px",
                      border: "1px solid lightgray",
                      color: "rgb(29, 240, 57)",
                    }}
                  >
                    {row.WillAdminssion}
                  </td>
                  <td style={{ padding: "3px", border: "1px solid lightgray", color: "red" }}>
                    {row.WillDischarged}
                  </td>
                  <td style={{ padding: "3px", border: "1px solid lightgray" }}>{row.EmptyBed}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </CardContent>
    </Card>
  );
};

export default TableChartByh;
