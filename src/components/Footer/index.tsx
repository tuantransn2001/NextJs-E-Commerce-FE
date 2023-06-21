import classNames from 'classnames/bind';
import Content from './Content';
import Subscribe from './Subscribe';
import Payment from './Payment';
import Copyright from './Copyright';
import FooterLogo from './Logo';
const cx = classNames.bind(require('./style/Footer.module.scss'));
export default function Footer({}) {
  return (
    <footer className={cx('container')}>
      <FooterLogo />
      <Content />
      <Subscribe />
      <Payment />
      <Copyright />
    </footer>
  );
}
