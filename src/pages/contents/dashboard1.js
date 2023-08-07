import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import TableChartByh from 'src/components/tableChartByh';
import BarChartByh from 'src/components/barChartByh';

const now = new Date();

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

const Page = () => (
  <>
    <Head>
      <title>
        아주대 의료원-병상가동율
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 0 // 컨텐츠 시작 Y위치 지정
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4} //전체 컴포넌트 간격 관리
        >
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value={Math.round(
                (gaugeData.TotalWard[0] / gaugeData.TotalWard[1]) * 100
              )}
              currentName="전체 병동"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewBudget
              difference={4}
              positive={false}
              sx={{ height: '100%' }}
              value={Math.round(
                (gaugeData.NormalWard[0] / gaugeData.NormalWard[1]) * 100
              )}
              currentName="일반 병동"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewBudget
              difference={4}
              positive={true}
              sx={{ height: '100%', paddingBottom:'0px' }}
              value={Math.round(
                (gaugeData.NursingCare[0] / gaugeData.NursingCare[1]) * 100
              )}
              currentName="간호 병동"
            />
          </Grid>
          {/* <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid> */}
          <Grid
            xs={12}
            lg={8}
          >
            <div className='chartWrapper'>
              <TableChartByh data={data} />
              <BarChartByh data={data}/>
            </div>
            {/* <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            /> */}

          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
          </Grid>
          {/* <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/products/product-1.png',
                  name: 'Healthcare Erbology',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/products/product-2.png',
                  name: 'Makeup Lancome Rouge',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/products/product-5.png',
                  name: 'Skincare Soja CO',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/products/product-6.png',
                  name: 'Makeup Lipstick',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/products/product-7.png',
                  name: 'Healthcare Ritual',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'DEV1049',
                  amount: 30.5,
                  customer: {
                    name: 'Ekaterina Tankova'
                  },
                  createdAt: 1555016400000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  customer: {
                    name: 'Cao Yu'
                  },
                  createdAt: 1555016400000,
                  status: 'delivered'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'DEV1047',
                  amount: 10.99,
                  customer: {
                    name: 'Alexa Richardson'
                  },
                  createdAt: 1554930000000,
                  status: 'refunded'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'DEV1046',
                  amount: 96.43,
                  customer: {
                    name: 'Anje Keizer'
                  },
                  createdAt: 1554757200000,
                  status: 'pending'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'DEV1045',
                  amount: 32.54,
                  customer: {
                    name: 'Clarke Gillebert'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'DEV1044',
                  amount: 16.76,
                  customer: {
                    name: 'Adam Denisov'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
