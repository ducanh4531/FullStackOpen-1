const Total = ({ part }) => {
  console.log("🚀 ~ file: Total.js ~ line 2 ~ Total ~ part", part);
  const sum = part[0].exercises + part[1].exercises + part[2].exercises;
  return <p>Number of exercises {sum}</p>;
};

export default Total;
