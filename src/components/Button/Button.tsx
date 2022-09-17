import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Container } from './styles';

interface Props extends PropsWithChildren {
  active?: boolean;
  disabled?: boolean;
  'data-testid'?: string;
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<Props> = ({ children, 'data-testid': testId = 'button', type = 'button', ...props }) => (
  <Container {...props} data-testid={testId} type={type}>
    {children}
  </Container>
);

export default Button;
