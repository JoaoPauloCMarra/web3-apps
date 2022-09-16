import { cleanup, fireEvent, render } from '@testing-library/react';

import Button from '.';

const onClick = jest.fn();
const text = 'Sample Button';

describe('Error Boundary', () => {
  afterEach(cleanup);

  it('it renders with proper text and onClick works', () => {
    const { getByTestId, unmount } = render(<Button onClick={onClick}>{text}</Button>);

    const retryButton = getByTestId('button');
    expect(retryButton).toHaveTextContent(text);
    expect(retryButton).toBeInTheDocument();
    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(retryButton);
    expect(onClick).toBeCalledTimes(1);

    unmount();
  });
});
