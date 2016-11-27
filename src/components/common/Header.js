import React from 'react';
import { Text, View} from 'react-native';

const Header = (props) => {
  const {headerContent,textContent} = styles;
  return (
    <View style={headerContent}>
      <Text style={textContent}>{props.headerText}</Text>
    </View>
  )

}



const styles = {
  headerContent: {
    marginTop: 20,
    backgroundColor: '#E0E0E0',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5

  },
  textContent: {
   fontSize: 20,
   fontWeight: '300'
  }
}

export { Header };
