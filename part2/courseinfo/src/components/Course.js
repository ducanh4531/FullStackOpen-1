import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <>
      <Header title={course["name"]} />
      <Content part={course["parts"]} />
      <Total part={course["parts"]} />
    </>
  );
};

export default Course;
