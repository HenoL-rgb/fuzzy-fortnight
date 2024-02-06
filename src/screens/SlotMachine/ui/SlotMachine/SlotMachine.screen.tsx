import { View, Dimensions, StyleSheet } from 'react-native';
import { useEffect, useRef, useState, useTransition, memo } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Button } from '@shared/ui/Button';
import { ReelSet } from '@entities/Slot';
import * as Progress from 'react-native-progress';
import { LINES, REELS, REELS_REPEAT } from '@entities/Slot/model/constants/constants';
import { current } from '@reduxjs/toolkit';

const width = Dimensions.get('screen').width;

function SlotMachine() {
  const reelsArr = useRef<
    {
      scrollByOffset: (
        offset: number,
        callback: (reelIndex: number, results: any[]) => void
      ) => void;
      symbols: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const l = useRef(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isPending, startTransition] = useTransition();
  const spinResults = [];
  let winningLines = [];

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

  const loadImage = () => {
    l.current += 24 * REELS_REPEAT;
    setImagesLoaded((prev) => prev + 24 * REELS_REPEAT);
    if (l.current === 24 * REELS_REPEAT * REELS) {
      setTimeout(() => setImagesLoading(false), 500);
    }
  };

  const highlightWinningLines = (currentIndex: number) => {
    if (!winningLines.length) {
      setTimeout(() => reelsArr.current.forEach((reel) => reel.returnLights()), 200);
      return;
    }
    console.log(winningLines)
    if (currentIndex > 0) {
      LINES[winningLines[currentIndex - 1]].map((el) => {
        reelsArr.current[el[0]]?.highlightAtIndex(el[1], false);
      });
    }

    if (currentIndex > winningLines.length - 1) {
      setTimeout(() => reelsArr.current.forEach((reel) => reel.returnLights()), 200);
      return;
    }
    console.log(reelsArr.current[0])
    LINES[winningLines[currentIndex]].map((el) => {
      reelsArr.current[el[0]]?.highlightAtIndex(el[1], true);
      reelsArr.current[el[0]]?.shakeAtIndex(el[1]);
    });

    setTimeout(() => {
      highlightWinningLines(currentIndex + 1);
    }, 800);
  };

  const evaluateResults = () => {
    winningLines = [];
    for (let lineIndex = 0; lineIndex < LINES.length; lineIndex++) {
      let streak = 0;
      let currentKind = null;

      for (let coordIndex = 0; coordIndex < LINES[lineIndex].length; coordIndex++) {
        const coords = LINES[lineIndex][coordIndex];
        const symbolAtCoords = spinResults[coords[0]][coords[1]];

        if (coordIndex === 0) {
          if (symbolAtCoords === '7') {
            break;
          }

          currentKind = symbolAtCoords;
          streak = 1;
        } else {
          if (symbolAtCoords !== currentKind) {
            break;
          }

          streak += 1;
        }
      }

      if (streak >= 3) {
        winningLines.push(lineIndex);
      }
    }
    console.log(winningLines);
    highlightWinningLines(0);
  };

  const spin = () => {
    for (let i = 0; i < REELS; i++) {
      reelsArr.current
        ?.at(i)
        ?.scrollByOffset(
          randomBetween(
            (10 - 6) * reelsArr.current[i].symbols.length,
            (10 - 5) * reelsArr.current[i].symbols.length
          ),
          (reelIndex, results) => {
            spinResults[reelIndex] = results;
            if (reelIndex === REELS - 1) {
              evaluateResults();
            }
          }
        );
    }
  };

  if (loading) {
    return <View></View>;
  }

  return (
    <View style={{ flex: 1, paddingTop: 10, rowGap: 10, paddingHorizontal: 30 }}>
      <ReelSet width={width} onLoad={loadImage} reelsArr={reelsArr} />
      <View style={{ height: 50, alignItems: 'flex-end' }}>
        <Button title="Spin" onPress={spin} width={100} disabled={isSpinning} />
      </View>
      {imagesLoading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
          ]}
        >
          <Progress.Bar
            width={400}
            progress={imagesLoaded / 1200}
            animated={true}
            useNativeDriver={true}
            animationType="timing"
          />
        </View>
      )}
    </View>
  );
}

export default memo(SlotMachine)