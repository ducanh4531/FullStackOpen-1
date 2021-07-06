import Statistic from "./Statistic";

const Statistics = ({ states }) => {
  const [good, neutral, bad] = states;
  const sum = good + neutral + bad;
  const avg = sum / 3;
  const perecentage = (good / sum) * 100;

  if (sum === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={sum} />
      <Statistic text="average" value={avg} />
      <Statistic text="positive" value={perecentage} />
    </div>
  );
};

export default Statistics;
