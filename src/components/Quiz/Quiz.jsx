import { useState } from "react";
const namesBibl = ["React", "Vue", "Express", "Bootstrap"];
const languages = ["JavaScript", "Pyton", "Html", "C++", "C#", "PHP", "CSS"];
const correctAnswers = {
  answ1: "React",
  answ2: ["CSS", "JavaScript"],
  answ3: "CSS"
}
const Quiz = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState('');
  const [score, setScore] = useState(null);
  const changeAnswer1 = (event) => {
    setAnswer1(event.target.value);
  };
  const showRadio = (item) => (
    <label key={item}>
      <input
        type="radio"
        name="question1"
        value={item}
        checked={item === answer1}
        onChange={changeAnswer1}
      />
      {item}
    </label>
  );
  const changeAnswer2 = (event) => {
    const value = event.target.value;
    const newArray = answer2.includes(value)
      ? answer2.filter((v) => v !== value)
      : [...answer2, value];
    setAnswer2(newArray);
  };
  const showCheckbox = (item) => (
    <label key={item}>
      {" "}
      <input
        type="checkbox"
        value={item}
        checked={answer2.includes(item)}
        onChange={changeAnswer2}
      />
      {item}
    </label>
  );
  const showOption = (item) => <option key = {item} value={item}>{item}</option>
  const changeAnswer3 = (event) => {setAnswer3(event.target.value)}
  const checkResult =()=> {
    let result = 0
    if(answer1 === correctAnswers.answ1){result++}
    if(answer3 === correctAnswers.answ3){result++}
    if(answer2.length === correctAnswers.answ2.length && answer2.every((item)=>correctAnswers.answ2.includes(item))){result++}
    setScore(result)
  } 
  return (
    <div>
      <fieldset>
        <legend>What library is used to creat interfaces?</legend>
        {namesBibl.map(showRadio)}
      </fieldset>
      <fieldset>
        <legend>
          What languages can you use to change the styles of web page elements?
        </legend>
        {languages.map(showCheckbox)}
      </fieldset>
      <fieldset>
        <legend>What language is used to describe styles?</legend>
        <select value={answer3} onChange={changeAnswer3}>
          {languages.map(showOption)}
        </select>
      </fieldset>
      <button onClick={checkResult}>calculate the result </button>
      {score!==null && <p>Correct answers : {score}</p>}
    </div>
  );
};

export default Quiz;
