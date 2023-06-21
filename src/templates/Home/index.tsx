/* eslint-disable import/extensions */
import { WrapperComponentProps } from '@/ts/interfaces/common';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalStyle from '@/components/helpers/GlobalStyle';
export default function HomeTemplate({ children }: WrapperComponentProps) {
  return (
    <GlobalStyle>
      <Header />
      <>{children}</>
      <Footer />
    </GlobalStyle>
  );
}
