import React from 'react';
import { View, Text, TextInput } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = {
  inputStyle: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    color: '#000',
    lineHeight: 23,
  },
  labelStyle: {
    color: '#000',
    flex: 1,
    fontSize: 18,
    paddingLeft: 5
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  }
};

export { Input };
