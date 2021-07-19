const Persons = ({ searchList, persons }) => {
  return (
    <>
      {searchList.map((item) => {
        return (
          <p key={item["id"]}>
            {item["name"]} {item["number"]}
          </p>
        );
      })}
    </>
  );
};

export default Persons;
