const Persons = ({ search, persons, remove }) => {
  const deleteName = (item) => {
    if (window.confirm(`Delete ${item["name"]}?`)) {
      remove(item["id"]);
      window.location.reload(false);
    }
  };

  const searchList =
    search === ""
      ? persons
      : persons.filter((person) =>
          person["name"].toLowerCase().includes(search)
        );

  return (
    <>
      {searchList.map((item) => {
        return (
          <p key={item["id"]}>
            {item["name"]} {item["number"]}{" "}
            <button type="button" onClick={() => deleteName(item)}>
              delete
            </button>
          </p>
        );
      })}
    </>
  );
};

export default Persons;
