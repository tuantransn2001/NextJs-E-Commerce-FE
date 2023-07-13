import React from 'react';
import { Select } from '@chakra-ui/react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/FilterBox.module.scss'));
const filterDropDownData = [
  {
    label: 'size',
    options: [
      {
        value: 'showAll',
        content: 'show all',
      },
      {
        value: 'double',
        content: 'double 135mm',
      },
      {
        value: 'king',
        content: 'king 150mm',
      },
      {
        value: 'single',
        content: 'single 90mm',
      },
      {
        value: 'super',
        content: 'super king 18mm',
      },
    ],
  },
  {
    label: 'size',
    options: [
      {
        value: 'showAll',
        content: 'show all',
      },
      {
        value: 'double',
        content: 'double 135mm',
      },
      {
        value: 'king',
        content: 'king 150mm',
      },
      {
        value: 'single',
        content: 'single 90mm',
      },
      {
        value: 'super',
        content: 'super king 18mm',
      },
    ],
  },
  {
    label: 'size',
    options: [
      {
        value: 'showAll',
        content: 'show all',
      },
      {
        value: 'double',
        content: 'double 135mm',
      },
      {
        value: 'king',
        content: 'king 150mm',
      },
      {
        value: 'single',
        content: 'single 90mm',
      },
      {
        value: 'super',
        content: 'super king 18mm',
      },
    ],
  },
];

const renderDropDownFilter = () => {
  return filterDropDownData.map((data, index) => {
    const { label, options } = data;
    return (
      <div className={'c-3 gutter ' + cx('drop-down-wrapper')} key={index}>
        <label htmlFor={label} className={cx('drop-down-label')}>
          {label}
        </label>
        <Select id={label} className={cx('select')} placeholder="Select option">
          {options.map(({ value, content }) => {
            return (
              <option
                className={cx('option')}
                value={value}
                key={value + content}
              >
                {content}
              </option>
            );
          })}
        </Select>
      </div>
    );
  });
};

const renderDragAndDrop = () => {
  return (
    <div className="c-3 gutter">
      <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </div>
  );
};

const FilterBox = ({}) => {
  return (
    <div className={`${cx('product-filter-wrapper')} grid wide`}>
      <div className="row">
        {renderDropDownFilter()}
        {renderDragAndDrop()}
      </div>
    </div>
  );
};

export default FilterBox;
