import fighter from '../../assets/fighter.jpeg'

export const CharacterClass = ({characterClass}) => {
  const {name, icon} = characterClass;

  return (
    <div>
      <h3>Class</h3>
      <p>{name}</p>
      <img src={fighter} alt="Character class" />
    </div>
  )
}