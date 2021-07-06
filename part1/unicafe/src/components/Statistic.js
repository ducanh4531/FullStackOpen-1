const Statistic = ({ text, value }) => {
  return (
    <table>
      <td style={{ columnWidth: "50px" }}>{text} </td>
      <td> {value}</td>
    </table>
  );
};

export default Statistic;