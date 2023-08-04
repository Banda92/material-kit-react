import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from 'src/components/logo';

// TODO: Change subtitle text

// Layout 컴포넌트 정의
export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      {/* 두 개의 컬럼으로 구성된 그리드 컨테이너 */}
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        {/* 좌측 컬럼 */}
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          {/* 상단 헤더 */}
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            {/* 로고 이미지에 링크를 적용 */}
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              {/* 로고 컴포넌트 */}
              <Logo />
            </Box>
          </Box>
          {/* 자식 컴포넌트(페이지 내용)를 렌더링 */}
          {children}
        </Grid>
        {/* 우측 컬럼 */}
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            {/* 페이지 제목 */}
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1
              }}
              variant="h1"
            >
              Welcome to{' '}
              {/* 외부 링크로 연결되는 박스 */}
              <Box
                component="a"
                sx={{ color: '#15B79E' }}
                target="_blank"
              >
                Devias Kit
              </Box>
            </Typography>
            {/* 페이지 부제목 */}
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="subtitle1"
            >
              A professional kit that comes with ready-to-use MUI components.
            </Typography>
            {/* 이미지 */}
            <img
              alt=""
              src="/assets/auth-illustration.svg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// Layout 컴포넌트의 프로퍼티 타입 정의
Layout.propTypes = {
  children: PropTypes.node
};
