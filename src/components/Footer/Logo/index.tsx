/* eslint-disable import/extensions */
import MyButton from '@/components/helpers/myButton';
import { footerLogo } from '@/components/svgIcon';
import { BUTTON_TYPE } from '@/ts/enums/common';
export default function FooterLogo({}) {
  return (
    <div className="flex-center mb-block">
      <MyButton transparent type={BUTTON_TYPE.primary}>
        {footerLogo}
      </MyButton>
    </div>
  );
}
