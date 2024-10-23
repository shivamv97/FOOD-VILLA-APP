const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-64 h-52 bg-gray-300 m-3 p-3"></div>
        ))}
    </div>
  );
};

export default Shimmer;
