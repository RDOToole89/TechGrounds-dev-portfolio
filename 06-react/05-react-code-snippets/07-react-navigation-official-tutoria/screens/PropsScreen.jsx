import React from 'react';
import { Text, View } from 'react-native';

export const PropsScreen = (props) => {
  console.log(`What's in the props? ${JSON.stringify(props)}`);
  // {
  //    "navigation":{},
  //    "route":{"key":"Props-TwydTyHRjWF4LntAbjwoQ","name":"PropsPassed"},
  //    "extraData":{"name":"Roibin""lastname":"OToole"}}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Props Screen</Text>
    </View>
  );
};

export const MemoizedPropsScreen = React.memo(PropsScreen);
