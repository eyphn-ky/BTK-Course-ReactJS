import React, { Component } from 'react'
import { connect } from 'react-redux'//redux'a bağlanmamı sağlayacak


class Counter extends Component {
  render() {
    return (
      <div>{this.props.counter}</div>
    )
  }
}
function mapStateToProps(state){
  return {counter:state.counterReducer}; //state bilgisini counterReducer'dan aldık
}

export default connect(mapStateToProps)(Counter);