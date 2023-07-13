/* eslint-disable import/extensions */
import { WrapperComponentProps } from '@/ts/interfaces/common';
import { Provider } from 'react-redux';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalStyle from '@/components/helpers/GlobalStyle';
import NavBar from '@/components/NavBar';
import { store } from '@/redux/store';

export default function HomeTemplate({ children }: WrapperComponentProps) {
  return (
    <GlobalStyle>
      <Provider store={store}>
        <Header />
        <NavBar />
        <>{children}</>
        <Footer />
      </Provider>
    </GlobalStyle>
  );
}
