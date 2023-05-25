import { useState } from "react";
import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';


export default function App() {
  const [skills, setSkills] = useState ([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);


  const addSkill = (skill) => {
    setSkills ([...skills, skill]);
  }

  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}