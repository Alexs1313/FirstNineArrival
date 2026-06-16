import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {createQrMatrix} from '../../utils/qrMatrix';
import {colors} from '../../constants/theme';

type PassQrCodeProps = {
  value: string;
  size?: number;
  variant?: 'default' | 'pass';
};

const FRAME_PADDING = {
  default: 12,
  pass: 23,
} as const;

export function PassQrCode({
  value,
  size = 220,
  variant = 'default',
}: PassQrCodeProps) {
  const matrix = useMemo(() => createQrMatrix(value), [value]);
  const moduleCount = matrix.length;
  const cellSize = size / moduleCount;
  const framePadding = FRAME_PADDING[variant];
  const isPassVariant = variant === 'pass';

  return (
    <View
      style={[
        styles.PassQrCodeFacetChassis,
        isPassVariant && styles.PassQrCodeFacetChassisPass,
        {
          width: size + framePadding * 2,
          height: size + framePadding * 2,
          padding: framePadding,
        },
      ]}>
      <View style={[styles.PassQrCodeCanvas, {width: size, height: size}]}>
        {matrix.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.PassQrCodeRow}>
            {row.map((isDark, colIndex) => (
              <View
                key={`cell-${rowIndex}-${colIndex}`}
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: isDark ? colors.black : colors.white,
                }}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PassQrCodeFacetChassis: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.goldBorder,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
  },
  PassQrCodeFacetChassisPass: {
    borderColor: colors.buttonGradientStart,
    borderRadius: 20,
    borderWidth: 3,
    shadowColor: colors.buttonGradientStart,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 30,
  },
  PassQrCodeCanvas: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  PassQrCodeRow: {
    flexDirection: 'row',
  },
});
