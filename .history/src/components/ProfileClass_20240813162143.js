import React from "react";
//class-based Component
class Profile extends React.Component {
  //This is class which needs to inherit some properties
  constructor(props) {
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Class-based Component</h1>
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}

export default Profile;
