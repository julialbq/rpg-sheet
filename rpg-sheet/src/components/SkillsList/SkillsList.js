import './SkillsList.css'
import { Skill } from "../Skill/Skill"
import { GiAbstract063 } from "react-icons/gi";

export const SkillsList = ({skills}) => {
  return (
    <div className='skill-info'>
      <h3> <GiAbstract063 size={22} /> Skills</h3>
    <ul>
      {skills.map(({name, description, manaCost} ) => <Skill key={name} name={name} description={description} manaCost ={manaCost}/>)}
    </ul>
    </div>
    
  )
}
