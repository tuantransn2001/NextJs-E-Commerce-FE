/* eslint-disable import/extensions */
import React from 'react';
import { WrapperComponentProps } from '@/ts/interfaces/common';
import { GlobalStyleStyled } from './style/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import '../../../sass/helpers/extend.scss';
import '../../../sass/layouts/grid.scss';
import { theme } from '@/theme/ChakraProvider';
export default function GlobalStyle({ children }: WrapperComponentProps) {
  return (
    <React.Fragment>
      <GlobalStyleStyled />
      <ChakraProvider resetCSS={false} theme={theme}>
        {children}
      </ChakraProvider>
    </React.Fragment>
  );
}
