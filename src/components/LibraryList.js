import React, { Component } from 'react';
import { View,Text,ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItems from './ListItems';

class LibraryList extends Component {
  constructor() {
    super()
  }

  componentWillMount () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource =  ds.cloneWithRows(this.props.libraries);
  }
  renderRow (library) {
    return <ListItems library= {library} />;
  }
  render (){
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  };
}
const mapStateToProps = (state) => {
  return { libraries: state.libraries}
}
export default connect(mapStateToProps)(LibraryList);
