/* eslint-disable import/extensions */
import Banner from './banner';
import ShopStories from './shopStories';
import Contact from './contact';
import { lenleysStoriesData } from '@/data/shopInformation';
import Page from '../helpers/page';

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
