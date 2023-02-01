import './Inventory.css'
import { InventoryItems } from "../InventoryItems/InventoryItems"
import { GiBowieKnife } from "react-icons/gi";

export const Inventory = ({inventory}) => {
  return (
    <div className="inventory">
      <h3> <GiBowieKnife size={22}/> Inventory</h3>
      <ul>
        {inventory.map(({name, description, cost}) => <InventoryItems name={name} description={description} cost={cost} />)}
      </ul>
    </div>
  )
}
