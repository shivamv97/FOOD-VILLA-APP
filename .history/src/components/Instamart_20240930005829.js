import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Section = ({ title, description, IsVisible, SetIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      <button
        className="underline"
        onClick={() => {
          SetIsVisible(!IsVisible);
        }}
      >
        {IsVisible ? "hide" : "show"}
      </button>

      {IsVisible && <h1>{description}</h1>}
    </div>
  );
};

const Instamart = () => {
  const [VisibleSection, SetVisibleSection] = useState("Cart");
  const { user } = useContext(UserContext);
  return (
    <div className=" border-black ">
      <h1 className="font-bold text-3xl p-2 m-3">Instamart Component</h1>
      <Section
        title={"Instamart cart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        IsVisible={VisibleSection === "Cart"}
        SetIsVisible={() => SetVisibleSection("Cart")}
      />

      <Section
        title={"Instamart Team"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        IsVisible={VisibleSection === "Team"}
        SetIsVisible={() => SetVisibleSection("Team")}
      />

      <Section
        title={"Instamart Careers"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        IsVisible={VisibleSection === "Careers"}
        SetIsVisible={() => SetVisibleSection("Careers")}
      />
      <h1>It has 100s of Components in it</h1>
      <h2>
        {user.name}-{user.email}
      </h2>
    </div>
  );
};

export default Instamart;
