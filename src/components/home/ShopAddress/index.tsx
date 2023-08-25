/* eslint-disable import/extensions */
import Section from '@/components/helpers/section';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/ShopAddress.module.scss'));

export default function ShopAddress({}) {
  return (
    <Section
      borderOptions={{
        direction: 'bottom',
      }}
    >
      <div className={`${cx('shop-address')} grid wide`}>
        <div className="row">
          <div className="c-6 gutter">
            <div className={cx('shop-address-box-container')}>
              <h1 className={cx('shop-address-title')}>CANTERBURY</h1>
              <h6 className={cx('shop-address-desc')}>
                25-34 ROPER ROAD <br></br> CANTERBURY <br></br> KENT <br></br>
                CT2 7EL
              </h6>
              <span className="shop-number-phone">01227 766655</span>
              <span className="shop-email">info@lenleys.co.uk</span>
              <div className="shop-find-out-more">Find out more</div>
            </div>
          </div>
          <div className="c-6 gutter">
            <div className={cx('shop-address-box-container')}>
              <h1 className={cx('shop-address-title')}>MAIDSTONE</h1>
              <h6 className={cx('shop-address-desc')}>
                33 SANDLING ROAD <br></br> MAIDSTONE <br></br> KENT <br></br>
                CT2 7EL
              </h6>
              <span className={cx('shop-number-phone')}>01622 753073</span>
              <span className={cx('shop-email')}>maidstone@lenleys.co.uk</span>
              <div className={cx('shop-find-out-more')}>Find out more</div>
              <h6 className={cx('about-shop')}>
                WE ARE STILL WORKING TO MAKE OUR NEW MAIDSTONE STORE LOOK ITS
                VERY BEST, BUT THE DOORS ARE OPEN AND WE WOULD LOVE FOR YOU TO
                COME AND SEE WHAT WE HAVE SO FAR!
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
