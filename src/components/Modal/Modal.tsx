import { FC, PropsWithChildren, useEffect } from 'react';

import { createPortal } from 'react-dom';

import Button from '~/components/Button';

import { Actions, Container, Content, ModalWindow } from './styles';

interface Props extends PropsWithChildren {
  isVisible?: boolean;
  onClose?: () => void;
}

const Modal: FC<Props> = ({ isVisible = false, onClose, children }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.setAttribute('data-modal-is-open', '');
      return;
    }
    document.body.removeAttribute('data-modal-is-open');
  }, [isVisible]);

  useEffect(() => {
    return () => {
      document.body.removeAttribute('data-modal-is-open');
    };
  }, []);

  const modal = (
    <Container>
      <ModalWindow>
        <Content>{children}</Content>
        <Actions>
          <Button onClick={onClose}>close</Button>
        </Actions>
      </ModalWindow>
    </Container>
  );

  return isVisible ? createPortal(modal, document.body) : null;
};

export default Modal;
