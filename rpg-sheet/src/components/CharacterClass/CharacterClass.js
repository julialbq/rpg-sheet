import './CharacterClass.css'
import { GiAbstract089 } from "react-icons/gi";

export const CharacterClass = ({characterClass}) => {
  const {name, icon} = characterClass;

  return (
    <div>
      <h3>Class</h3>
      <div className="class-info">
        <p>{name}</p>
        <img src={icon} alt="Character class" />
      </div>
    </div>
  )
}
