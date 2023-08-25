import { StaticImageData } from 'next/image';
<<<<<<< HEAD
=======
import Image from 'next/image';
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
import styled from 'styled-components';

interface BrandsImgStyledProps {
  src: StaticImageData;
  alt: string;
}

export const BrandsImgWrapperStyled = styled.div`
  display: inline-block;
  cursor: pointer;
`;

<<<<<<< HEAD
export const BrandsImgStyled = styled.image<BrandsImgStyledProps>`
=======
export const BrandsImgStyled = styled(Image)<BrandsImgStyledProps>`
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
  object-fit: contain;
  width: 215px;
  height: 148px;
`;
