import './AttributeList.css'
import { Attribute } from "../Attribute/Attribute"
import { GiSkills } from "react-icons/gi";

export const AttributeList = ({attributes}) => {
  const attributesEntries = Object.entries(attributes)
  
  return (
    <div className="attributes">
      <h3> <GiSkills size={24} /> Attributes</h3>
      <ul>
        {attributesEntries.map(attribute => <Attribute key={attribute[0]} attributeName={attribute[0]} attributeValue={attribute[1]} />)}
      </ul>
    </div>
  )
}
