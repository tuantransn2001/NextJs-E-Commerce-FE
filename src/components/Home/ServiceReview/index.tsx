/* eslint-disable import/extensions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReviewCarousel from './ReviewCarousel';
import feefoLogo from '@/assets/img/HomePage/serviceReview/feefo-logo.png';
import feefoAwardImg from '@/assets/img/HomePage/serviceReview/feefo-award-plentium.png';
import Section from '@/components/helpers/Section';
import classNames from 'classnames/bind';
import Image from 'next/image';
const cx = classNames.bind(require('./style/ServiceReview.module.scss'));
export default function ServiceReview({}) {
  return (
    <Section>
      <div className="grid wide">
        <div className="row">
          <div className="c-1 gutter">{/* Empty place */}</div>
          <div className="c-2 gutter">
            <div className={`${cx('feefo-widget-wrapper')} grid`}>
              <div className="row">
                <div className="c-8 gutter">
                  <div className={cx('feefo-widget-content')}>
                    <div className={cx('feefo-widget-rare-wrapper')}>
                      <ul className={cx('feefo-widget-rare-list')}>
                        <li>
                          <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faStar} />
                        </li>
                      </ul>
                      <span className={cx('feefo-widget-rare-label')}>
                        <strong>4.8</strong>/5
                      </span>
                    </div>
                    <p className={cx('feefo-widget-rare-summer-text')}>
                      <strong>
                        Évaluation de service<br></br> indépendante
                      </strong>{' '}
                      basée sur <br></br>
                      <strong>269</strong> commentaires <br></br>vérifiés.
                    </p>
                    <div className={cx('feefo-logo-wrapper')}>
                      <Image
                        src={feefoLogo}
                        alt="Feefo logo"
                        className={cx('feefo-logo')}
                      />
                    </div>
                    <div className={cx('feefo-all-review-link')}>
                      Lire tous les commentaires
                    </div>
                  </div>
                </div>
                <div className="c-4 gutter">
                  <div className={cx('feefo-award-img-wrapper')}>
                    <Image
                      src={feefoAwardImg}
                      alt="Feefo award"
                      className={cx('feefo-award-img')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-8 gutter">
            <ReviewCarousel />
          </div>
        </div>
      </div>
    </Section>
  );
}
