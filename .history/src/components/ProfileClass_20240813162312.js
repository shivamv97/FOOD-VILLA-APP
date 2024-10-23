import React from "react";
//class-based Component
class Profile extends React.Component {
  //This is class which needs to inherit some properties
  constructor(props) {
    super(props);
    //create state
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Class-based Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
      </div>
    );
  }
}

export default Profile;
