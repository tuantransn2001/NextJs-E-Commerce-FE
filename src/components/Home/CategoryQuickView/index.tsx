/* eslint-disable import/extensions */
import MyButton from '@/components/helpers/myButton';
import classNames from 'classnames/bind';
import { BUTTON_TYPE } from '@/ts/enums/common';
import { categoryQuickView } from '@/data/home';
const cx = classNames.bind(require('./style/CategoryQuickView.module.scss'));

export default function ServicesList({}) {
  return (
    <div className={cx('wrapper')}>
      <div className="grid wide">
        <div className="row">
          {categoryQuickView.map((item, index) => {
            return (
              <div className="c-3 gutter" key={index}>
                <MyButton type={BUTTON_TYPE.primary} maxWidth>
                  {item}
                </MyButton>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
