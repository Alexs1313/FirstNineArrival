import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppNavigation} from '../../navigation/NavigationContext';
import {colors, fonts} from '../../constants/theme';

type SubScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SubScreenHeader({title, subtitle}: SubScreenHeaderProps) {
  const {goBack} = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.SubScreenHeaderFacetChassis,
        {paddingTop: insets.top + 8},
      ]}>
      <View style={styles.SubScreenHeaderRowLintel}>
        <Pressable
          onPress={goBack}
          style={({pressed}) => [
            styles.SubScreenHeaderBackPortico,
            pressed && styles.SubScreenHeaderBackPressedDim,
          ]}>
          <Text style={styles.SubScreenHeaderBackFiligree}>‹ Back</Text>
        </Pressable>
        <Text style={styles.SubScreenHeaderTitleFiligree} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.SubScreenHeaderSpacer} />
      </View>
      {subtitle ? (
        <Text style={styles.SubScreenHeaderSubtitleFiligree}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  SubScreenHeaderFacetChassis: {
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    gap: 4,
    paddingBottom: 17,
    paddingHorizontal: 20,
  },
  SubScreenHeaderRowLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SubScreenHeaderBackPortico: {
    minWidth: 60,
  },
  SubScreenHeaderBackPressedDim: {
    opacity: 0.7,
  },
  SubScreenHeaderBackFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '500',
  },
  SubScreenHeaderTitleFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  SubScreenHeaderSpacer: {
    minWidth: 60,
  },
  SubScreenHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
  },
});
