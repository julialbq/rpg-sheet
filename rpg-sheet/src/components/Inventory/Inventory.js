import './Inventory.css'
import { InventoryItems } from "../InventoryItems/InventoryItems"
import { GiBowieKnife } from "react-icons/gi";

export const Inventory = ({inventory, strength}) => {
  const charactersMaximumLoad = strength*2

  const load = inventory.reduce((sum, currentValue) => {
    const itemValues = Object.values(currentValue)
    const itemLoad = itemValues[0].weight * itemValues[1]
    return sum + itemLoad
  }, 0)
  

  return (
    <div className="inventory">
      <h3> <GiBowieKnife size={22}/> Inventory</h3>
      <p className='load'>Load: {load}</p>
      {load > charactersMaximumLoad && <p className='load'>Load: Overload</p>}
      <ul>
        {inventory.map((item) => <InventoryItems key={Object.keys(item)[0]} item={item} />)}
      </ul>      
    </div>
  )
}
