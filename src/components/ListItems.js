import React, { Component } from 'react';
import { Text,View,TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItems extends Component {
  constructor() {
    super()
  }
  renderContent () {
    if( this.props.library.id === this.props.selectLibraryID){
      return (
        <Text> {this.props.library.description} </Text>
      );
    }
  }


  render () {
    const { id , title } = this.props.library;


    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderContent()}
        </View>

      </TouchableWithoutFeedback>

    );
  }
}
const styles = {
  textStyle: {
    fontSize: 16,
    paddingLeft: 15
  }
}

const mapStateToProps = (state) => {
  return {selectLibraryID: state.selectLibraryID};
}

export default connect(mapStateToProps,actions)(ListItems);
