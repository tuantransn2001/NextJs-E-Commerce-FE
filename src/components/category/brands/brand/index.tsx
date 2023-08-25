import { StaticImageData } from 'next/image';
import { BrandsImgWrapperStyled, BrandsImgStyled } from './style/BrandStyled';

interface BrandProps {
  imgSrc: StaticImageData;
}

export default function Brand({ imgSrc }: BrandProps) {
  return (
    <BrandsImgWrapperStyled>
      <BrandsImgStyled src={imgSrc} alt="categories" />
    </BrandsImgWrapperStyled>
  );
}
