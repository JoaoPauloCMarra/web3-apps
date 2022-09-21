import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Container } from './styles';

interface Props extends PropsWithChildren {
  active?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'button';
  variant?: 'default' | 'primary' | 'secondary';
  'data-testid'?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<Props> = ({
  children,
  'data-testid': testId = 'button',
  type = 'button',
  variant = 'default',
  ...props
}) => (
  <Container {...props} data-testid={testId} type={type} variant={variant}>
    {children}
  </Container>
);

export default Button;
