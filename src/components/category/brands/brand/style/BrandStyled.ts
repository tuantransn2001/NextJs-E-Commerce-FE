import { StaticImageData } from 'next/image';


import Image from 'next/image';

import styled from 'styled-components';

interface BrandsImgStyledProps {
  src: StaticImageData;
  alt: string;
}

export const BrandsImgWrapperStyled = styled.div`
  display: inline-block;
  cursor: pointer;
`;



export const BrandsImgStyled = styled(Image)<BrandsImgStyledProps>`
  object-fit: contain;
  width: 215px;
  height: 148px;
`;
