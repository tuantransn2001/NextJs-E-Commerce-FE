/* eslint-disable import/extensions */
import Section from '@/components/helpers/Section';
import MyButton from '@/components/helpers/MyButton';
import { shopInstagram } from '@/data/home';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/ts/enums/common';
import { instagramIcon } from '@/components/SVCIcon';
const cx = classNames.bind(require('./style/ShopInstagram.module.scss'));

const SBInstagram = ({}) => {
  const renderInstagramImgLink = () => {
    return shopInstagram.map(({ img, link }, index) => {
      return (
        <div className="c-3 gutter mb-3" key={index}>
          <a
            href={link}
            className={cx('sb-instagram-img-link-wrapper')}
            target="blank"
          >
            <div className={cx('sb-instagram-img-wrapper')}>
              <Image
                src={img}
                alt={`Instagram ${index}`}
                className={cx('sb-instagram-img')}
              />
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <Section title="Follow us on instagram">
      <div className={`${cx('sb-instagram')} grid wides`}>
        <div className="row">{renderInstagramImgLink()}</div>
        <div className="row mt-2">
          <div className="c-12 gutter flex-center">
            <MyButton
              href="https://www.instagram.com/lenleyshome/"
              target="blank"
              size={BUTTON_SIZE.sm}
              type={BUTTON_TYPE.primary}
            >
              <span className="flex-center" style={{ gap: '0.4rem' }}>
                {instagramIcon}
                Follow on instagram
              </span>
            </MyButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SBInstagram;
