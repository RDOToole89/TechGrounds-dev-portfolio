import React from 'react';
import { Text } from 'react-native';

import { fonts } from '../../constants/fonts';

export const UbuntuText = (props: Text['props']) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: fonts.primary }]} />
  );
};

// => another way of typing a custom text element

// export const UbuntuText = ({ children }: { children: React.ReactNode }) => {
//   return <Text children={children} style={{ fontFamily: fonts.ubuntu }} />;
// };
