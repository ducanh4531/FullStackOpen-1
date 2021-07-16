import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");
  let [personExist, setPersonExist] = useState(false);

  const addName = (event) => {
    event.preventDefault();

    persons.forEach((person) => {
      if (person["name"] === newName) {
        alert(`${newName} is already added to phonebook`);
        setPersonExist((personExist = true));
      }
    });

    if (!personExist) {
      saveState();
    }

    setPersonExist((personExist = false));
  };

  const saveState = () => {
    const stateUpdate = [
      {
        name: newName,
        number: newNum,
      },
    ];
    setPersons(persons.concat(stateUpdate));
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchList =
    search === ""
      ? persons
      : persons.filter((person) =>
          person["name"].toLowerCase().includes(search)
        );

  return (
    <>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearch={handleSearch} />

      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNum={newNum}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons searchList={searchList} persons={persons} />
    </>
  );
};

export default App;
