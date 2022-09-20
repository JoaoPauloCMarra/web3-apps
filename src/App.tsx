import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '~/components/ErrorBoundary';
import Elections from '~/pages/Elections';
import Error from '~/pages/Error';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

import Theme, { GlobalStyle } from './Theme';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Router>
            <Routes>
              <Route element={<Home />} errorElement={<Error />} path="/" />
              <Route element={<Elections />} errorElement={<Error />} path="/elections" />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
