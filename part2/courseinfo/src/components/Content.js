import Part from "./Part";

const Content = ({ part }) => {
  return (
    <>
      {part.map((part) => (
        <Part part={part} />
      ))}
    </>
  );
};

export default Content;
