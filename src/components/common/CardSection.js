import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
   <View style={styles.sectionStyle}>
      {props.children}
    </View>
  );

export { CardSection };

const styles = {
  sectionStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
