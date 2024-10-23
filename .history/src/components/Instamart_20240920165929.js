import { useState } from "react";

const Section = ({ title, description }) => {
  const [Ishidden, SetIshidden] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      <button
        className="underline"
        onClick={() => {
          SetIshidden(true);
        }}
      >
        {Ishidden ? "hide" : "show"}
      </button>

      <button
        className="underline"
        onClick={() => {
          SetIshidden(false);
        }}
      >
        {Ishidden ? "hide" : "show"}
      </button>

      {Ishidden && <h1>{description}</h1>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div className=" border-black ">
      <h1 className="font-bold text-3xl p-2 m-3">Instamart Component</h1>
      <Section
        title={"Instamart cart"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum tempora ex quod modi iste praesentium nesciunt in error eum, esse ab ut quaerat minus saepe repudiandae, facere beatae officiis non voluptatem distinctio qui alias odit? A debitis, libero tempora sint necessitatibus incidunt doloremque modi ratione illo cum dolor praesentium?"
        }
      />

      <Section
        title={"Instamart Team"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum tempora ex quod modi iste praesentium nesciunt in error eum, esse ab ut quaerat minus saepe repudiandae, facere beatae officiis non voluptatem distinctio qui alias odit? A debitis, libero tempora sint necessitatibus incidunt doloremque modi ratione illo cum dolor praesentium?"
        }
      />

      <Section
        title={"Instamart Careers"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum tempora ex quod modi iste praesentium nesciunt in error eum, esse ab ut quaerat minus saepe repudiandae, facere beatae officiis non voluptatem distinctio qui alias odit? A debitis, libero tempora sint necessitatibus incidunt doloremque modi ratione illo cum dolor praesentium?"
        }
      />
      <h1>It has 100s of Components in it</h1>
    </div>
  );
};

export default Instamart;
