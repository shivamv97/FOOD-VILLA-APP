const Section = ({ title, description }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
};

const Instamart = () => {
  return (
    <div className=" border-black ">
      <h1 className="font-bold text-3xl p-2 m-3">Instamart Component</h1>
      <Section
        title={"Hi! I am from Instamart cart"}
        description={"I work in a ADD TO CART team"}
      />

      <Section
        title={"Hi! I am from Instamart Team"}
        description={"I work in a team to build a product"}
      />
      <h1>It has 100s of Components in it</h1>
    </div>
  );
};

export default Instamart;
