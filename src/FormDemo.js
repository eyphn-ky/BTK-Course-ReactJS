import React, { Component } from 'react'

export default class FormDemo extends Component {
 state = {
    userName:'',
    city:''
 }
 onChangeHandler=(event)=>{
    //this.setState({userName:event.target.value}) ====> veriyi yazar ama çoklu işlem tetikleneceği zaman yemez tek bir şey için çalışıyopr.
    let name= event.target.name; //olayı tetikleyen nesnenin name attribute'u
    let value = event.target.value; //olayı tetikleyen nesnenin değeri
    this.setState({[name]:value});//inputların name bilgisi state'teki name ile aynı olmalı
 }
 onSubmitHandler=(event)=>{
    event.preventDefault();
    alert(this.state.userName);
 }
 
    render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name='userName' type="text" onChange={this.onChangeHandler}></input>
            <h3>User Name {this.state.userName}</h3>

            <h3>City</h3>
            <input name='city' type="text" onChange={this.onChangeHandler}></input>
            <h3>City {this.state.city}</h3>
            <input type="submit" value="save"></input>
        </form>
      </div>
    )
  }
}
