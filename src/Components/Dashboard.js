import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { findUser } from "../Selector/findUser";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let isLoggedIn = true;
    if (token == null) {
      isLoggedIn = false;
    }
    this.state = {
      isLoggedIn
    };
  }
  handleClick = () => {
    console.log("hi");
    localStorage.clear();
    this.setState({ isLoggedIn: false });
  };
  render() {
    if (this.state.isLoggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h2>Dashboard</h2>
        &ensp;
        <Button
          align="center"
          variant="contained"
          color="primary"
          onClick={this.handleClick}
          borderradius={20}
        >
          Log Out
        </Button>
        {this.props.users && (
          <div>
            <Box
              border={2}
              marginLeft="377px"
              width="800px"
              color="text.primary"
            >
              <h3>
                {" "}
                Name:{this.props.users.name}{" "}
                &ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;
                <span>
                  &ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                </span>
                Company Details:
              </h3>
              <h3>
                Email:{this.props.users.email}{" "}
                &ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;
                <span>&ensp;&ensp;&ensp;&ensp;</span>Company Name:{" "}
                {this.props.users.company.name}
              </h3>
              <h3>
                Phone :{this.props.users.phone}
                &ensp;&ensp;
                <span>&ensp;&ensp;&ensp;&ensp;</span> Catch Phrase:{" "}
                {this.props.users.company.catchPhrase}
              </h3>
            </Box>
          </div>
        )}
        <div>
          {this.props.posts.map(post => {
            return (
              <dl key={post.id}>
                <Box
                  border={2}
                  marginLeft="377px"
                  width="800px"
                  color="text.primary"
                >
                  <b>Title:</b> <dt>&emsp;&emsp;{post.title}</dt>
                  <b>Posts:</b> <dt>&emsp;&emsp;{post.body}</dt>
                </Box>
              </dl>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = Number(localStorage.getItem("id"));
  return {
    users: state.users.find(user => user.id === id),
    posts: state.posts.filter(post => post.userId === id)
  };
};
export default connect(mapStateToProps)(Dashboard);
