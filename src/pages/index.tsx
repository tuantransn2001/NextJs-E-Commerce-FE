/* eslint-disable import/extensions */
import { NextPage } from 'next';
import Home from '@/components/home';
const HomePage: NextPage = () => {
  console.log('home');
  return <Home />;
};

export default HomePage;
