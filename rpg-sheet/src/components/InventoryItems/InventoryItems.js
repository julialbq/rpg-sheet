export const InventoryItems = (item) => {
  const itemInfo = Object.values(item)[0]
  const name = Object.keys(itemInfo)[0].replace('_', ' ')
  const type = Object.values(itemInfo)[0].type
  const description = Object.values(itemInfo)[0].description
  const amount = Object.values(itemInfo)[1]
  return (
    <li>
      <p>{type.charAt(0).toUpperCase() + type.slice(1)}: {name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <p>Description: {description}</p>
      <p>Amount: {amount}</p>
    </li>
  )
}
