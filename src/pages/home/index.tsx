/* eslint-disable import/extensions */
import { NextPage } from 'next';
import HomeTemplate from '@/templates/Home';
import Home from '@/components/Home';
const HomePage: NextPage = () => {
  return (
    <HomeTemplate>
      <Home />
    </HomeTemplate>
  );
};

export default HomePage;
