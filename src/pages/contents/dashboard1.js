import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import TableChartByh from "src/components/tableChartByh";
import BarChartByh from "src/components/barChartByh";
import WardStatus from "src/components/wardStatus";

const now = new Date();
//테이블&바차트 데이터
const data = [
  {
    Ward: 52,
    TotalBed: 20,
    InHospital: 15,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 5,
    OccupancyRate: 0.75,
  },
  {
    Ward: 81,
    TotalBed: 41,
    InHospital: 37,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 4,
    OccupancyRate: 0.902439024,
  },
  {
    Ward: 91,
    TotalBed: 46,
    InHospital: 44,
    WillAdminssion: 0,
    WillDischarged: 1,
    EmptyBed: 1,
    OccupancyRate: 0.97826087,
  },
  {
    Ward: 92,
    TotalBed: 41,
    InHospital: 35,
    WillAdminssion: 1,
    WillDischarged: 0,
    EmptyBed: 5,
    OccupancyRate: 0.87804878,
  },
  {
    Ward: 101,
    TotalBed: 36,
    InHospital: 29,
    WillAdminssion: 1,
    WillDischarged: 0,
    EmptyBed: 6,
    OccupancyRate: 0.833333333,
  },
  {
    Ward: 102,
    TotalBed: 27,
    InHospital: 25,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 2,
    OccupancyRate: 0.925925926,
  },
  {
    Ward: 111,
    TotalBed: 26,
    InHospital: 24,
    WillAdminssion: 0,
    WillDischarged: 1,
    EmptyBed: 1,
    OccupancyRate: 0.961538462,
  },
  {
    Ward: 112,
    TotalBed: 46,
    InHospital: 42,
    WillAdminssion: 1,
    WillDischarged: 0,
    EmptyBed: 3,
    OccupancyRate: 0.934782609,
  },
  {
    Ward: 121,
    TotalBed: 43,
    InHospital: 40,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 3,
    OccupancyRate: 0.930232558,
  },
  {
    Ward: 122,
    TotalBed: 45,
    InHospital: 45,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 0,
    OccupancyRate: 1,
  },
  {
    Ward: 131,
    TotalBed: 45,
    InHospital: 44,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 1,
    OccupancyRate: 0.977777778,
  },
  {
    Ward: 132,
    TotalBed: 34,
    InHospital: 34,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 0,
    OccupancyRate: 1,
  },
  {
    Ward: 141,
    TotalBed: 41,
    InHospital: 39,
    WillAdminssion: 0,
    WillDischarged: 1,
    EmptyBed: 1,
    OccupancyRate: 0.975609756,
  },
  {
    Ward: 142,
    TotalBed: 38,
    InHospital: 36,
    WillAdminssion: 0,
    WillDischarged: 0,
    EmptyBed: 2,
    OccupancyRate: 0.947368421,
  },
];

//게이지차트 데이터
const gaugeData = {
  TotalWard: [843, 912],
  NormalWard: [602, 636],
  NursingCare: [112, 120],
};


const wardStatusData =  [
  {
    Ward: "052",
    Value: "0000000100010000000",
  },
  {
    Ward: "081",
    Value: "00000010000000001000000000000",
  },
  {
    Ward: "091",
    Value: "0000000000000000000001000100000000",
  },
  {
    Ward: "092",
    Value: "000000020000000000000100003000000000000000",
  },
  {
    Ward: "101",
    Value: "0000003000000010000000000000000000000",
  },
  {
    Ward: "102",
    Value: "0000000000000000000000100000000000000000",
  },
  {
    Ward: "111",
    Value: "000000000000000000000001100100000000000000",
  },
  {
    Ward: "112",
    Value: "100000000201001000110100000000000",
  },
  {
    Ward: "121",
    Value: "00000000000000000010001000000000",
  },
  {
    Ward: "122",
    Value: "0000000000000000000000000",
  },
  {
    Ward: "131",
    Value: "000000000001000000010000",
  },
  {
    Ward: "132",
    Value: "000000000000000000000000000010000000020",
  },
  {
    Ward: "141",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "142",
    Value: "0100000000000000000000002000000000000",
  },
  {
    Ward: "143",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "144",
    Value: "0100000000000000000000002000000000000",
  },
  {
    Ward: "145",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "146",
    Value: "0100000000000000000000002000000000000",
  },
  {
    Ward: "147",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "148",
    Value: "0100000000000000000000002000000000000",
  },
  {
    Ward: "149",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "150",
    Value: "0100000000000000000000002000000000000",
  },
  {
    Ward: "151",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "152",
    Value: "0100000000000000000000002000000000000",
  },

  {
    Ward: "153",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "154",
    Value: "0100000000000000000000002000000000000",
  },
  {
    Ward: "155",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "156",
    Value: "0100000000000000000000002000000000000",
  },
  {
    Ward: "157",
    Value: "0000000101110000000000000000203000000000000",
  },
  {
    Ward: "158",
    Value: "0100000000000000000000002000000000000",
  },
];



const Page = () => {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      setCurrentTime(new Date()); // 현재 시간을 갱신
      console.log(count);
    }, 5000); // 5초마다 리랜더링

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <Head>
        <title>아주대 의료원-병상가동율</title>
      </Head>
      <Box component="main" 
      sx={{ flexGrow: 1, py: 0 }}>
        <Container maxWidth="xl">
          <p>Last Reloaded: {currentTime.toLocaleTimeString()} 주석시, 한 페이지 안에 가득차도록 나옴</p>
          <Grid container 
          spacing={4}>
            <Grid xs={12} 
            sm={6} 
            lg={4}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value={Math.round((gaugeData.TotalWard[0] / gaugeData.TotalWard[1]) * 100)}
                currentName="전체 병동"
              />
            </Grid>
            <Grid 
            xs={12} 
            sm={6} 
            lg={4}>
              <OverviewBudget
                difference={4}
                positive={false}
                sx={{ height: "100%" }}
                value={Math.round((gaugeData.NormalWard[0] / gaugeData.NormalWard[1]) * 100)}
                currentName="일반 병동"
              />
            </Grid>
            <Grid 
            xs={12} 
            sm={6} 
            lg={4}>
              <OverviewBudget
                difference={4}
                positive={true}
                sx={{ height: "100%", paddingBottom: "0px" }}
                value={Math.round((gaugeData.NursingCare[0] / gaugeData.NursingCare[1]) * 100)}
                currentName="간호 병동"
              />
            </Grid>
            <Grid 
            xs={12} 
            lg={6}>
              <div className="chartWrapper">
                <TableChartByh data={data} 
                sx={{height:'50%'}} />
                <BarChartByh data={data} 
                sx={{height:'50%'}} />
              </div>
            </Grid>
            <Grid 
            xs={12} 
            md={12} 
            lg={6}>
              <WardStatus wardStatusData={wardStatusData}/>
              {/* <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={["Desktop", "Tablet", "Phone"]}
                sx={{ height: "100%" }}
              /> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
