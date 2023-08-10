/* eslint-disable import/extensions */
import LoadingScreen from '@/components/helpers/LoadingScreen';
import { API_PATH } from '@/ts/enums/api_enums';
import { NextPage } from 'next';
import { useGet, useGetURLParams } from '@/customizes/hooks';
import Category from '@/components/Category';
import { CategoryDTO } from '@/ts/dto/common.dto';

const CategoryPage: NextPage = ({}) => {
  const [id] = useGetURLParams();
  const { data, isLoading } = useGet(API_PATH.getOneCategory, {
    id,
  });

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Category data={data as CategoryDTO} />
  );
};

export default CategoryPage;
