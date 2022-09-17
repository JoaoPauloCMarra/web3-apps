import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Button from '~/components/Button';
import useUserInfo from '~/hooks/useUserInfo';
import useWeb3 from '~/hooks/useWeb3';
import { languageState } from '~/store/languageStore';

import { Container, Title } from './styles';

const Home: FC = () => {
  const { data, isFetching } = useUserInfo(250);
  const [language, setLanguage] = useRecoilState(languageState);
  const navigate = useNavigate();
  const { account } = useWeb3();

  return (
    <Container>
      <Title>Home Page</Title>
      <p>My connected account: {account}</p>
      <p>current language: {language}</p>
      <Button active={language === 'en'} onClick={() => setLanguage('en')}>
        en
      </Button>
      <Button active={language === 'es'} onClick={() => setLanguage('es')}>
        es
      </Button>
      <Button active={language === 'pt'} onClick={() => setLanguage('pt')}>
        pt
      </Button>
      <pre>{!isFetching ? JSON.stringify(data, null, 2) : 'loading...'}</pre>
      <Button onClick={() => navigate('/elections')}>Go to Elections DAPP</Button>
    </Container>
  );
};

export default Home;
