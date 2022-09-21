import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Button from '~/components/Button';
import useWeb3 from '~/hooks/useWeb3';
import { languageState } from '~/store/languageStore';

import { Container, Title } from './styles';

const Home: FC = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const navigate = useNavigate();
  const { account } = useWeb3();

  return (
    <Container>
      <Title>Home Page</Title>
      <div>
        <p>My connected account: {account}</p>
        <p>current language: {language}</p>
      </div>
      <br />
      <div>
        <Button active={language === 'en'} onClick={() => setLanguage('en')} variant="primary">
          en
        </Button>
        <Button active={language === 'es'} onClick={() => setLanguage('es')} variant="primary">
          es
        </Button>
        <Button active={language === 'pt'} onClick={() => setLanguage('pt')} variant="primary">
          pt
        </Button>
      </div>
      <br />
      <div>
        <Button onClick={() => navigate('/elections')}>Go to Elections DAPP</Button>
      </div>
    </Container>
  );
};

export default Home;
