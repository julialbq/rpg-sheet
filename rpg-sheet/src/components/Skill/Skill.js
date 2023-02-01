export const Skill = ({name, description, manaCost}) => {
  return (
    <li>
      <p>Skill: {name}</p>
      <p>Description: {description}</p>
      <p>Mana cost: {manaCost}</p>
    </li>
  )
}
