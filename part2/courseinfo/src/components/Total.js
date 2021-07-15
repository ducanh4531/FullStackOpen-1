const Total = ({ part }) => {
  let sum = 0;
  part.map((part) => {
    return (sum += part.exercises);
  });
  return <b>Number of exercises {sum}</b>;
};

export default Total;
