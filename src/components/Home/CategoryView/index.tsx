/* eslint-disable import/extensions */
import Section from '@/components/helpers/Section';
import { categoriesSelector } from '@/redux/slice/app.slice';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useSelector } from 'react-redux';
const cx = classNames.bind(require('./style/CategoryView.module.scss'));

const CategoryView = () => {
  const categories = useSelector(categoriesSelector);

  return (
    <Section title="Shop by department">
      <div className="grid wide">
        <div className="row">
          {categories.map((category) => {
            return (
              <div className="c-4 gutter mb-3" key={category.id}>
                <div className={cx('popular-product-wrapper')}>
                  <div className={cx('popular-product-img-link-wrapper')}>
                    <div className={cx('popular-product-img-wrapper')}>
                      <Image
                        width={100}
                        height={100}
                        src={category.img}
                        alt={category.title}
                        className={cx('popular-product-img')}
                      />
                    </div>
                  </div>
                  <div className={cx('product-title-link')}>
                    {category.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default CategoryView;
