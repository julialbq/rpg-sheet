export const InventoryItems = ({name, description, cost}) => {
  return (
    <li>
      <p>Item: {name}</p>
      <p>Description: {description}</p>
      <p>Cost: {cost}</p>
    </li>
  )
}
