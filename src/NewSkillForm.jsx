import { useState } from 'react';
import './NewSkillForm.css';




export default function NewSkillForm({ addSkill }) {
    const [newSkill, setNewSkill] = useState({
      'name': '',
      'level': '3'
    })

    function handleChange(e){
      setNewSkill({
        ...newSkill,
        [e.target.name]: e.target.value
      })
    }


    function handleAddSkill(e) {
      e.preventDefault();
      addSkill(newSkill);
      setNewSkill({
        name: '',
        level: '3'
          
        })
      
    }

    return (
      <form onSubmit={handleAddSkill} className="NewSkillForm">
       Skill:<input type="text" name="name"
        value={newSkill.name}
        onChange={handleChange}
        required
        pattern='.{4,}'
        />
        Level:         
        <select 
        name="level"
        value={newSkill.level}
        onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">ADD SKILL</button>
      </form>
    );
  }