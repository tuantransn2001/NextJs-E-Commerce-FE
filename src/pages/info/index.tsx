/* eslint-disable import/extensions */
import { NextPage } from 'next';
import ShopInformation from '@/components/ShopInformation';
import HomeTemplate from '@/templates/Home';

const InfoPage: NextPage = () => (
  <HomeTemplate>
    <ShopInformation />
  </HomeTemplate>
);

export default InfoPage;
