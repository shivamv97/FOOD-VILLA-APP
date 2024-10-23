const Section = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <h1 className="font-bold p-2 border-black m-3">Instamart Component</h1>
      <Section title={"Hi! I am from section part"} />
      <h1>It has 100s of Components in it</h1>
    </div>
  );
};

export default Instamart;
