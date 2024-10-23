import React from "react";
//class-based Component
class Profile extends React.Component {
  //This is class which needs to inherit some properties
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    console.log("Child-constructor"); //called 1
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivamv97");
    const json = data.json();
    this.setState({
      userInfo: json,
    });
    console.log("Child-componentDidMount"); //called 3
  }
  render() {
    console.log("Child-render"); //called 2
    return (
      <div>
        <h1>Class-based Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        {/* <button
          onClick={() => {
            //WE DO NOT MUTATE STATE DIRECTLY
            //NEVER DO THIS.STATE=SOMETHING
            this.setState({
              count: 1,
            }); // here i don't know which part of state i am setting(bad practice)
          }}
        >
          SetCount
        </button> */}
      </div>
    );
  }
}

export default Profile;
