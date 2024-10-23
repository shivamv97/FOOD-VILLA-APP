const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="bg-gray-500"></div>
        ))}
    </div>
  );
};

export default Shimmer;
