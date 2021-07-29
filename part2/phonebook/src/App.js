import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import { getAll, create, remove } from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");
  let [personExist, setPersonExist] = useState(false);
  const [notification, setNotification] = useState("");

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
    const stateUpdate = {
      name: newName,
      number: newNum,
      id: persons[persons.length - 1]["id"] + 1,
    };
    setPersons(persons.concat(stateUpdate));
    create(stateUpdate);
    setNotification(`Added ${stateUpdate.name}`);
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

  useEffect(() => {
    console.log("effect");
    getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <>
      <h2>Phonebook</h2>

      <Notification
        notification={notification}
        setNotification={setNotification}
      />

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
      <Persons search={search} persons={persons} remove={remove} />
    </>
  );
};

export default App;
