import { useState } from "react";

const Profile = (props) => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h2>This is my Profile page</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count:{count}</h3>
      <button onClick={() => setcount(1)}>Count </button>
    </div>
  );
};

export default Profile;
