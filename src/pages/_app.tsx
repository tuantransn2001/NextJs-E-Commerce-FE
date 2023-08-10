/* eslint-disable import/extensions */
import GlobalStyle from '@/components/helpers/GlobalStyle';
import { store } from '@/redux/store';
import HomeTemplate from '@/templates/Home';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalStyle>
      <Provider store={store}>
        <HomeTemplate>
          <Component {...pageProps} />
        </HomeTemplate>
      </Provider>
    </GlobalStyle>
  );
};

export default MyApp;
