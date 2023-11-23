import type { Theme } from '@app/styles/theme';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.ReactElement<SvgProps>;
  export default content;
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

declare module '@react-navigation/native' {
  export function useTheme(): Theme;
}
