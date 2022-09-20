import { FC, PropsWithChildren } from 'react';

import { cleanup, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import useWeb3 from './useWeb3';

const createWrapper = () => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => <RecoilRoot>{children}</RecoilRoot>;

  return Wrapper;
};

describe('Hooks', () => {
  afterEach(cleanup);

  it('useWeb3 works as expected', async () => {
    const { result } = renderHook(() => useWeb3(), {
      wrapper: createWrapper(),
    });

    // await waitFor(() => expect(result).to.be(''));
    expect(result.current.web3);
  });
});
