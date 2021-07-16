const PersonForm = (props) => {
  const { addName, newName, newNum, handleNameChange, handleNumChange } = props;
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} /> <br />
        number: <input value={newNum} onChange={handleNumChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
