import { FC, FormEvent, useCallback, useState } from 'react';

import Button from '~/components/Button';
import useWeb3 from '~/hooks/useWeb3';

import { ElectionFormContainer, FormFooter, Input, InputWrapper, Label, Message } from './styled';

interface Props {
  onSubmitDone?: () => void;
  onClose?: () => void;
}

const formEmptyState = { name: '', description: '', candidates: '' };

const ElectionForm: FC<Props> = ({ onSubmitDone, onClose }) => {
  const { createElection } = useWeb3();
  const [saving, setSaving] = useState(false);
  const [formValues, setFormValues] = useState(formEmptyState);

  const onInputChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues((current) => ({ ...current, [name]: value }));
  }, []);

  const onFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSaving(true);
      await createElection({ ...formValues, candidates: formValues.candidates.split(',') });
      setFormValues(formEmptyState);
      setSaving(false);
      if (onSubmitDone) onSubmitDone();
    },
    [createElection, onSubmitDone, formValues],
  );

  const onFormClose = useCallback(() => {
    setFormValues(formEmptyState);
    if (onClose) onClose();
  }, [onClose]);

  return (
    <ElectionFormContainer onSubmit={onFormSubmit}>
      <InputWrapper>
        <Label>Election Name</Label>
        <Input disabled={saving} name="name" onChange={onInputChange} required value={formValues.name} />
      </InputWrapper>
      <InputWrapper>
        <Label>Description</Label>
        <Input disabled={saving} name="description" onChange={onInputChange} required value={formValues.description} />
      </InputWrapper>
      <InputWrapper>
        <Label>Candidates(comma separated)</Label>
        <Input disabled={saving} name="candidates" onChange={onInputChange} required value={formValues.candidates} />
      </InputWrapper>
      <FormFooter>
        <Button disabled={saving} onClick={onFormClose}>
          Close
        </Button>
        <Button disabled={saving} type="submit">
          Submit
        </Button>
      </FormFooter>
      {saving ? <Message>Creating election...</Message> : null}
    </ElectionFormContainer>
  );
};

export default ElectionForm;
