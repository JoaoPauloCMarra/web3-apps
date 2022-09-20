import { atom } from 'recoil';

export const electionsState = atom({
  key: 'elections',
  default: [] as ElectionsList,
});
