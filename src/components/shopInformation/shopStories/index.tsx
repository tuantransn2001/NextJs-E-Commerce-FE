/* eslint-disable import/extensions */
import { ObjectType } from '@/ts/types/common';
import classNames from 'classnames/bind';
import Image from 'next/image';
const cx = classNames.bind(require('./style/ShopStory.module.scss'));

interface ShopStories {
  direction: string;
  paragraphObj: ObjectType;
  imgSrc: string;
  slogan: string;
}

export default function ShopStories({
  direction,
  paragraphObj,
  imgSrc,
  slogan,
}: ShopStories) {
  const isReverse = direction === 'row-reverse' ? true : false;

  return (
    <div
      className={`${cx(
        'shop-story-wrapper',
      )} grid wide page-section-boder-bottom`}
    >
      <div
        style={{ flexDirection: `${isReverse ? 'row-reverse' : 'row'}` }}
        className="row infor-story-row mb-3"
      >
        <div className="c-6 infor-story-gutter">
          <div className={cx('shop-story-content-wrapper')}>
            <p className="paragraph-text-style-strong">
              {paragraphObj.heading}
            </p>
          </div>
          {paragraphObj.sections.map((content: string, index: number) => (
            <p className="paragraph-text-style" key={index}>
              {content}
            </p>
          ))}
        </div>

        <div className="c-6 infor-story-gutter">
          <div className={cx('shop-story-img-wrapper')}>
            <Image src={imgSrc} alt="Info" width={100} height={100} />
          </div>
        </div>
      </div>
      {slogan && (
        <div className="row infor-story-row mb-3">
          <div className="c-12 infor-story-gutter flex-center">
            <h4 className="h4-size-xl text-center">
              “WE’RE PROOF THAT LOCAL FAMILY-RUN <br></br> BUSINESSES CAN STILL
              THRIVE.”
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
