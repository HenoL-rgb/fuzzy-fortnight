import React from 'react';

export interface ReelSetProps {
  width: number;
  onLoad?: () => void;
  reelsArr: React.MutableRefObject<
    {
      scrollByOffset: (offset: number) => void;
      symbols: string;
    }[]
  >;
}
