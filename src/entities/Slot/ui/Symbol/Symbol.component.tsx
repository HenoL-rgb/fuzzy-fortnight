import { View, Text, Image } from 'react-native';
import React, { memo } from 'react';
import { SymbolProps } from './Symbol.types';
import { slotSymbols } from '@shared/assets/icons';

function Symbol({ height = 30, symbol }: SymbolProps) {
  const getImage = () => {
    let Icon;
    switch (symbol) {
      case 'B':
        Icon = slotSymbols.Bell;
        break;
      case 'C':
        Icon = slotSymbols.Apple;
        break;
      case 'X':
        Icon = slotSymbols.Bar;
        break;
      case 'D':
        Icon = slotSymbols.Diamond;
        break;
      case 'G':
        Icon = slotSymbols.Jackpot;
        break;
      case 'L':
        Icon = slotSymbols.Lemon;
        break;
      case 'M':
        Icon = slotSymbols.Watermelon;
        break;
      case 'S':
        Icon = slotSymbols.Orange;
        break;
      case '7':
        Icon = slotSymbols.Seven;
        break;
      default:
        Icon = slotSymbols.Bell;
        break;
    }

    return (
      <Image
        source={Icon}
        style={{
          flex: 1,
          objectFit: 'contain',
        }}
      />
    );
  };

  return (
    <View
      style={{
        height: height,
        aspectRatio: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 5,
      }}
    >
      {getImage()}
    </View>
  );
}

export default memo(Symbol);
