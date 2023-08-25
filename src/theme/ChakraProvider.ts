// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

const Select = {
  parts: ['icon'],
  baseStyle: {
    icon: {
      height: '0px',
      width: '0px',
    },
  },
};

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  components: {
    Select,
  },
});
