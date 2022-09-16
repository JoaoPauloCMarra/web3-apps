import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '~/components/ErrorBoundary';
import About from '~/pages/About';
import Error from '~/pages/Error';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

import Theme, { GlobalStyle } from './Theme';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Routes>
                <Route element={<Home />} errorElement={<Error />} path="/" />
                <Route element={<About />} errorElement={<Error />} path="/about" />
                <Route element={<NotFound />} path="*" />
              </Routes>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
