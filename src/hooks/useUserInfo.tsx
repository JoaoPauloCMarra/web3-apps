import { useQuery } from '@tanstack/react-query';

import { MOCK_USER_INFO } from './mocks';

const useUserInfo = (delay = 0) =>
  useQuery(['userInfo'], () => new Promise<UserInfo>((resolve) => setTimeout(() => resolve(MOCK_USER_INFO), delay)));

export default useUserInfo;
