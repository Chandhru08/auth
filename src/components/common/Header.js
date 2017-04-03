//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//create Components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
);
};

const styles = {
  viewStyle: {
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
      fontSize: 40

  }
};
//export Component
export { Header };
