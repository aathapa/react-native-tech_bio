import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
      <Text style={styles.textStyles}>
        {children}
      </Text>
    </TouchableOpacity>

  );
}

const styles = {
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#00E676',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#00E676'
  },
  textStyles: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#fff',
    paddingTop: 15,
    paddingBottom: 15
  }
}

export { Button } ;
