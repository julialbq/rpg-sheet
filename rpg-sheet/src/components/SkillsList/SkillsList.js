import { Skill } from "../Skill/Skill"

export const SkillsList = ({skills}) => {
  return (
    <div>
      <h3>Skills</h3>
    <ul>
      {skills.map(({name, description} ) => <Skill key={name} name={name} description={description} />)}
    </ul>
    </div>
    
  )
}
