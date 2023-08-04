// 필요한 모듈 import
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { withAuthGuard } from 'src/hocs/with-auth-guard';
import { SideNav } from './side-nav';
import { TopNav } from './top-nav';

// 사이드 네비게이션의 가로 길이
const SIDE_NAV_WIDTH = 280;

// 레이아웃 전체를 감싸는 루트 컴포넌트 스타일
const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

// 레이아웃을 감싸는 컨테이너 컴포넌트 스타일
const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

// Layout 컴포넌트 정의 및 withAuthGuard HOC로 래핑
export const Layout = withAuthGuard((props) => {
  const { children } = props;
  // 현재 페이지의 경로를 가져오는 Hook
  const pathname = usePathname();
  // 사이드 네비게이션의 열림 여부를 상태로 관리
  const [openNav, setOpenNav] = useState(false);

  // 페이지 경로가 변경될 때 사이드 네비게이션을 닫는 콜백 함수
  const handlePathnameChange = useCallback(
    () => {
      if (openNav) {
        setOpenNav(false);
      }
    },
    [openNav]
  );

  // 페이지 로드 시 또는 경로가 변경될 때마다 사이드 네비게이션을 닫는 효과를 줌
  useEffect(
    () => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  return (
    <>
      {/* 상단 네비게이션 */}
      <TopNav onNavOpen={() => setOpenNav(true)} />
      {/* 사이드 네비게이션 */}
      <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      />
      {/* 레이아웃 루트 */}
      <LayoutRoot>
        {/* 레이아웃 컨테이너 */}
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
});
