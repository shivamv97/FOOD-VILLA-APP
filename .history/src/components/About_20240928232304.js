import { Outlet } from "react-router-dom";
import ProfileFC from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent-Constructor");
  }
  componentDidMount() {
    console.log("Parent-ComponentDidMount");
  }
  render() {
    console.log("Parent-render");
    return (
      // instead of using Outlet use Directly imported <Profile/> Component
      <div>
        <h1>About us Page</h1>
        <UserContext.Consumer>
          {({ user }) => 
            <h2 className="font-bold text-black">{user.name}</h2>;
            // <h1 className="font-bold text-black">{user.email}</h1>;
          }
        </UserContext.Consumer>
        {<Outlet />}
        {/* {OR} */}
        {/* <ProfileFC name={"Shivam"} /> */}
        <Profile name={"ShivamClass"} />
      </div>
    );
  }
}

export default About;
