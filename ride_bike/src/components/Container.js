import React, { Component } from 'react'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            from: null,
            to:null };
    }

    handleChange = (event)=>{
        this.setState({
            [event.target.id]:event.target.value
        })
        console.log(this.state.from)
        console.log(this.state.to)
    // }
    // fromChangeHandler=(event)=>{
    //     this.setState({from: event.target.value});
    //     console.log(this.state.from)
    // }
    // toChangeHandler=(event)=>{
    //     this.setState({to: event.target.value});
    //     console.log(this.state.to)
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.addFromTo(this.state)
        
    }
       
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="from" >Enter your starting point</label>
            <br/>
            <input type='text' id="from" onChange={this.handleChange} placeholder="ride your bike from"/>
            <label htmlFor="to" >Enter your finish point</label>
            <br/>
            <input type='text' id="to" onChange={this.handleChange} placeholder="ride your bike to"/>
            <button class="btn waves-effect waves-light" >let's
                <i class="material-icons right">directions_bike</i>
            </button>
        </form>
      );
    }
  }

export default Container
