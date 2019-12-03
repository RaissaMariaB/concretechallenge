import React, { Component } from "react";
import Search from "../../components/Search";
import Logo from "../../components/Logo";
import { getUser } from "../../services/api/users";

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      user: {},
      repos: []
    };
  }

  inputValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  searching = () => {
    if (this.state.value !== "") {
       
      getUser(this.state.value)
        .then(response => {
          this.setState({
            user: response.data
          });
          this.props.history.push({
            pathname: "/results",
            state: {
               user: this.state.user
            }
          });
        })
        .catch(error => {
        // this.props.history.push("/results");
        console.log('error')
        });
    }
  };

  render() {
    return (
      <div className="container__home">
        <div>
          <Logo classGit="Github-Search" classSearch="text-style-1" />
        </div>
        <div>
          <Search
            classSearch="text-style-1"
            typing={this.inputValue}
            click={this.searching}
          />
        </div>
      </div>
    );
  }
}

export default Home;
