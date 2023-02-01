import './Inventory.css'
import { InventoryItems } from "../InventoryItems/InventoryItems"
import { GiBowieKnife } from "react-icons/gi";

export const Inventory = ({inventory, strength}) => {
  let load = 0
  inventory.forEach((item) => {
    const itemValues = Object.values(item)
   load += itemValues[0].weight * itemValues[1]
  })
  

  return (
    <div className="inventory">
      <h3> <GiBowieKnife size={22}/> Inventory</h3>
      <p className='load'>Load: {load}</p>
      {load > strength*2 && <p className='load'>Load: Overload</p>}
      <ul>
        {inventory.map((item) => <InventoryItems key={Object.keys(item)[0]} item={item} />)}
      </ul>      
    </div>
  )
}
