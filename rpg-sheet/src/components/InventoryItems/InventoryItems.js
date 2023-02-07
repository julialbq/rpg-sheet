import './InventoryItems.css'

export const InventoryItems = ({item}) => {
  const itemInfo = Object.values(item)
  const name = Object.keys(item)[0].replace('_', ' ')
  const type = Object.values(itemInfo)[0].type
  const description = Object.values(itemInfo)[0].description
  const amount = Object.values(itemInfo)[1]
  return (
    <li>
      <p className='name'>{type}: {name}</p>
      <p>Description: {description}</p>
      <p>Amount: {amount}</p>
    </li>
  )
}
