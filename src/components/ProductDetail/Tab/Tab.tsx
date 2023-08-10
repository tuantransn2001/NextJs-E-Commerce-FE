import { ObjectType, SetValue } from '@/ts/types/common';
import { useState } from 'react';
const tabListStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '4rem',
};
const tabItemStyle = {
  cursor: 'pointer',
};

const handleStyleActiveTab = (currentIndex: number, compareIndex: number) => {
  const tabContentStyleDefault = {
    fontSize: '1.7rem',
    fontWeight: '500',
    letterSpacing: '.1rem',
    textTransform: 'uppercase',
    color: '#a9a9a9',
  };

  const tabContentStyleActive = {
    ...tabContentStyleDefault,
    color: '#262626',
  };
  return currentIndex === compareIndex
    ? tabContentStyleActive
    : tabContentStyleDefault;
};

interface TabProps {
  setCurrentTab: SetValue<string>;
  tabContentList: string[];
}

const Tab = ({ setCurrentTab, tabContentList }: TabProps) => {
  const [indexActive, setIndexActive] = useState<number>(0);

  return (
    <ul style={tabListStyle}>
      {tabContentList.map((tabContent, index) => {
        return (
          <li
            style={tabItemStyle}
            key={tabContent}
            onClick={({}) => {
              setCurrentTab(tabContent);
              setIndexActive(index);
            }}
          >
            <span
              style={handleStyleActiveTab(index, indexActive) as ObjectType}
            >
              {tabContent}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default Tab;
