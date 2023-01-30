export const CharacterClass = ({characterClass}) => {
  const {name, icon} = characterClass;

  return (
    <div>
      <h3>Class</h3>
      <p>{name}</p>
      <img src={icon} alt="Character class" />
    </div>
  )
}
