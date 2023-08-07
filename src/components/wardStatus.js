import WardStatusTable from "./wardStatusTable";
import { Card, CardContent, CardHeader } from "@mui/material";

const WardStatus = (props) => {
    const {sx}=props
  const half = Math.ceil(props.wardStatusData.length / 2);
  const leftData = props.wardStatusData.slice(0, half);
  const rightData = props.wardStatusData.slice(half);

  return (
    <Card sx={sx}>
      <CardHeader
        title="테이블3"
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
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <WardStatusTable data={leftData} />
          </div>
          <div style={{ flex: 1 }}>
            <WardStatusTable data={rightData} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WardStatus;
