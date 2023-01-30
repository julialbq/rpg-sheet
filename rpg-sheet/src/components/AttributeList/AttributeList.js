import { Attribute } from "../Attribute/Attribute"

export const AttributeList = ({attributes}) => {
  const attributesEntries = Object.entries(attributes)
  
  return (
    <div>
      <h3>Attributes</h3>
      <ul>
        {attributesEntries.map(attribute => <Attribute key={attribute[0]} attributeName={attribute[0]} attributeValue={attribute[1]} />)}
      </ul>
    </div>
  )
}