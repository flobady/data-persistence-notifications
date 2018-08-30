import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Main extends Component {

  componentDidMount(){
    // this.props.set_info("info did mount")
  }

  render(){
    return(
      <View>
        <Button
          title="Redux state = A"
          onPress={()=>this.props.set_info("info A persistée")}
        />
        <Button
          title="Redux state = B"
          onPress={()=>this.props.set_info("info B persistée")}
        />
        <Button
          title="Mettre des infos non persistantes"
          onPress={()=>this.props.set_info_not_persisted("info NON persistée")}
        />
        <Text style={{fontWeight: 'bold'}}>Le state persistant est:</Text>
        <Text>{this.props.info}</Text>

        <Text style={{fontWeight: 'bold'}}>Le state NON persistant est:</Text>
        <Text>{this.props.info_not_persisted}</Text>
      </View>
    )
  }
}

const mapStateTopProps = (state) => {
  return {
    info: state.info,
    info_not_persisted: state.info_not_persisted
  }
}

export default connect(mapStateTopProps, actions)(Main);
