/* eslint-disable import/extensions */
import React from 'react';
import { WrapperComponentProps } from '@/ts/interfaces/common';
import { GlobalStyleStyled } from './style/GlobalStyle';
import '../../../sass/helpers/extend.scss';
import '../../../sass/layouts/grid.scss';
export default function GlobalStyle({ children }: WrapperComponentProps) {
  return (
    <React.Fragment>
      <GlobalStyleStyled />
      <div className="grid">
        <div className="row">
          <div className="c-12 gutter">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
