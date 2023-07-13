import styled from 'styled-components';
import Image from 'next/image';
export const BrandsImgWrapperStyled = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const BrandsImgStyled = styled(Image)`
  object-fit: contain;
  width: 215px;
  height: 148px;
`;
