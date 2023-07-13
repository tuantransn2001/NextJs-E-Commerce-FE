/* eslint-disable import/extensions */
import Banner from './Banner';
import ShopStories from './ShopStories';
import Contact from './Contact';
import { lenleysStoriesData } from '@/data/shopInformation';
import Page from '../helpers/Page';

const renderStorySections = () => {
  return lenleysStoriesData.map((lenleysStoryData, index) => {
    const { direction, paragraph, imgSrc, slogan } = lenleysStoryData;
    return (
      <div className="c-12 gutter" key={index}>
        <ShopStories
          direction={direction}
          paragraphObj={paragraph}
          imgSrc={imgSrc}
          slogan={slogan}
        />
      </div>
    );
  });
};

export default function ShopInformation({}) {
  return (
    <Page title="Our Story">
      <Banner />
      {renderStorySections()}
      <Contact />
    </Page>
  );
}
