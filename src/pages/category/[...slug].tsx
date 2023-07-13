/* eslint-disable import/extensions */
import LoadingScreen from '@/components/helpers/LoadingScreen';
import { API_PATH } from '@/ts/enums/api_enums';
import { NextPage } from 'next';
import HomeTemplate from '@/templates/Home';
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
    <HomeTemplate>
      <Category data={data as CategoryDTO} />
    </HomeTemplate>
  );
};

export default CategoryPage;

// TODO: Lỗi id bị undefined khi bắn request tới server
