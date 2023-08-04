import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuthContext } from 'src/contexts/auth-context';

// AuthGuard 컴포넌트 정의
export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();
  const ignore = useRef(false);
  const [checked, setChecked] = useState(false);

  // 컴포넌트가 마운트되면서 한 번만 인증 확인을 수행
  // 이 흐름은 로그아웃 후 사용자를 수동으로 리디렉션하기 위해 있으며, 그렇지 않으면 자동으로 로그인 페이지로 리디렉션됩니다.
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      // React.StrictMode가 활성화된 개발 모드에서 두 번 호출되는 것을 방지
      if (ignore.current) {
        return;
      }

      ignore.current = true;

      if (!isAuthenticated) {
        console.log('Not authenticated, redirecting');
        router
          .replace({
            pathname: '/auth/login',
            query: router.asPath !== '/' ? { continueUrl: router.asPath } : undefined
          })
          .catch(console.error);
      } else {
        setChecked(true);
      }
    },
    [router.isReady]
  );

  // 인증 확인을 완료하기 전에는 null을 반환하여 컴포넌트가 아무것도 렌더링되지 않도록 함
  if (!checked) {
    return null;
  }

  // 인증 확인이 완료된 후에는 자식 컴포넌트들을 렌더링
  return children;
};

// AuthGuard 컴포넌트의 프로퍼티 타입 정의
AuthGuard.propTypes = {
  children: PropTypes.node
};
