import React, { Component } from 'react';
import {Main} from './Main';
import {User} from './User';
import {connect} from 'react-redux';
class App extends Component {
    constructor(){
        super();
    }
    changeUsername(newName) {

    };
    
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Bhalala")} changeAge={() => this.props.setAge("22")} />
        <User username={this.props.user.name} age={this.props.user.age}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
          user : state.user,
          math : state.math
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
          setName : (name) => {
              dispatch({
                type: "SET_NAME",
                payload : name
              });
          },
          setAge : (age) => {
              dispatch({
                type: "SET_AGE",
                payload :age 
              });
          }
    };
};
export default connect(mapStateToProps ,mapDispatchToProps)(App);