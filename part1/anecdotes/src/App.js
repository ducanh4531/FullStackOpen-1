import React, { useState } from "react";
import Anecdote from "./components/Anecdote";
import Button from "./components/Button";
import Votes from "./components/Votes";
import Heading from "./components/Heading";

const createObject = (anecdotes) => {
  let obj = {};
  for (let i = 0; i < anecdotes.length; i++) {
    obj[i] = 0;
  }
  return obj;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(createObject(anecdotes));

  const randomizer = () => {
    const newSelect = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelect);
  };

  const vote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
  };

  const maxVotes = () => {
    const maxValue = Math.max(...Object.values(points));
    const maxKey = Object.keys(points).find((key) => points[key] === maxValue);
    return anecdotes[maxKey];
  };

  return (
    <>
      <Heading text="Anecdote of the day" />
      <Anecdote phrase={anecdotes[selected]} />
      <Votes text={points[selected]} />
      <Button handleClick={() => vote()} text="vote" />
      <Button handleClick={() => randomizer()} text="next anecdote" />
      <Heading text="Anecdote with most votes" />
      <Anecdote phrase={maxVotes()} />
    </>
  );
};

export default App;
