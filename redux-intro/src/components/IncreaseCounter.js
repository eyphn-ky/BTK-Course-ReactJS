import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {increaseCounter} from '../redux/actions/counterActions';

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e=>{
          this.props.dispatch(increaseCounter());
        }}>
        1 arttır
        </button>
      </div>
    )
  }
}
//Actions must be plain objects hatası == parantez açıp kapamayı unutmuşssundur

//bu componentte işlemi gerçekleştirecek action'u buraya bağladık
function mapDispatchToProps(dispatch){
  return{actions:bindActionCreators(increaseCounter,dispatch)};
}

export default connect(mapDispatchToProps)(IncreaseCounter);