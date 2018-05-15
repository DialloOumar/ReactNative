
// import component libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a header Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle} >
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//adding styling to our component
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'black'
  }
};

// make the created header component available to other parts of the app
export { Header };
