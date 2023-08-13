/* eslint-disable import/extensions */
import React from 'react';

import UserFeedBack from './UserFeedBack';
import { userFeedbacksData } from '@/data/home';
import SwiperCarousel from '@/components/helpers/swipperCarousel';

const userFeedBackArr = () => {
  return userFeedbacksData.map((feedBack, index) => {
    return <UserFeedBack feedBack={feedBack} key={index} />;
  });
};

const ReviewCarousel = ({}) => {
  return (
    <SwiperCarousel
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={1}
      isLoop={true}
      swiperSlidesData={userFeedBackArr()}
    />
  );
};

export default ReviewCarousel;
