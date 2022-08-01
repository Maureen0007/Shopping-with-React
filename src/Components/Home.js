import React, { Component } from 'react'

class Form extends Component{

  constructor(props){
    super(props)

    this.state={
      Username:""
    }
  }

  handleUserameChange = (e) => {
    this.setState({
      Username: e.target.value
    })
  }



  render(){
   return(
    <form>
      <div>
        <label>Username:  </label>
        <input type='text' onChange={this.handleUserameChange} value={this.state.Username}/>
        </div>
        </form>
   )
  }
}
export default Form