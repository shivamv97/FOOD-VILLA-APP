const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-[255px] h-[200px] bg-gray-300 m-[10px] p-[10px]"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
