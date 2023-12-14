import { View, Text, Dimensions, Image } from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SlotMachineProps } from './SlotMachine.types';
import { Button } from '@shared/ui/Button';
import { ReelSet } from '@entities/Slot';
import Reel from '@entities/Slot/ui/Reel/Reel.component';
import { slotSymbols } from '@shared/assets/icons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const reels = 5;
const symbols = 3;

export default function SlotMachine() {
  const [reelWidth, setReelWidth] = useState<number>(0);
  const reelsArr = useRef<{ scrollByOffset: (offset: number) => void; symbols: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    async function setLandscape() {
      setLoading(true);
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      setTimeout(() => setLoading(false), 500);
    }
    setLandscape();

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const spin = () => {
    
    for (let i = 0; i < reels; i++) {
      reelsArr.current
        ?.at(i)
        ?.scrollByOffset(
          randomBetween(
            (10 - 6) * reelsArr.current[i].symbols.length,
            (10 - 5) * reelsArr.current[i].symbols.length
          )
        );
    }
  };

  const renderReels = useCallback(() => {
    if (reelWidth === 0) return [];

    const reelsList = new Array(reels).fill(null).map((item, index) => (
      <Reel
        key={item + index}
        width={reelWidth}
        ref={(ref) => {
          ref && reelsArr.current?.push(ref);
        }}
        index={index}
      />
    ));
    return reelsList;
  }, [reelWidth]);

  if (loading) {
    return <View></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        onLayout={(e) => setReelWidth(e.nativeEvent.layout.height / symbols)}
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          flexDirection: 'row',
          overflow: 'hidden',
          paddingHorizontal: 30,
        }}
      >
        {renderReels()}
      </View>
      <View style={{ height: 50 }}>
        <Button title="Spin" onPress={spin} />
      </View>
    </View>
  );
}
