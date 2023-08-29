import Image, { StaticImageData } from 'next/image';
import { BrandsImgWrapperStyled } from './style/BrandStyled';

interface BrandProps {
  imgSrc: StaticImageData;
}

export default function Brand({ imgSrc }: BrandProps) {
  return (
    <BrandsImgWrapperStyled>
      <Image src={imgSrc} alt="categories" width={215} height={148} />
    </BrandsImgWrapperStyled>
  );
}
