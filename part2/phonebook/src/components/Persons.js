const Persons = ({ searchList, persons }) => {
  return (
    <>
      {searchList.map((item) => {
        return (
          <p key={persons.indexOf(item)}>
            {item["name"]} {item["number"]}
          </p>
        );
      })}
    </>
  );
};

export default Persons;
