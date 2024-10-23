import { Children, useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  useEffect(() => {
    //API Call
    console.log("useEffect");
  });
  console.log("renderUE");
  return (
    <div>
      <h2>This is my Profile page</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count:{count}</h3>
      <h3>Count:{count2}</h3>
      <button
        onClick={() => {
          setcount(1);
          setcount2(2); //here we know that we are setting the count2 value(Good practice)
        }}
      >
        Count{" "}
      </button>
    </div>
  );
};

export default Profile;
