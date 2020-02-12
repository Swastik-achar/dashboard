import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let isLoggedIn = true;
    if (token == null) {
      isLoggedIn = false;
    }
    this.state = {
      email: "",
      isLoggedIn
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const email=this.props.users.find(user=>user.email===this.state.email)
    if(email){
        localStorage.setItem('id',email.id)
        localStorage.setItem('token','svasvajsvdjas')
        this.setState({isLoggedIn:true})
    }else{
        alert('authentication failed!')
    }
  };
  render() {
      if(this.state.isLoggedIn){
          return <Redirect to='/dashboard'/>
      }
    return (
      <div>
        <h2>Login Page</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(Login)