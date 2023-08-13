/* eslint-disable import/extensions */
import { store } from '@/redux/store';
import HomeTemplate from '@/templates/Home';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import GlobalStyle from '@/components/helpers/GlobalStyle';
import '../sass/base/reset.scss';
import '../sass/layouts/grid.scss';
import '../sass/helpers/variable.scss';
import '../sass/helpers/extend.scss';
import '../sass/helpers/mixin.scss';
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <HomeTemplate>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </HomeTemplate>
      </GlobalStyle>
    </Provider>
  );
};

export default MyApp;
