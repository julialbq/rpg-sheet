import './Attribute.css'

export const Attribute = ({attributeName, attributeValue}) => {
  return (
    <li className="attribute">
      {attributeName} : {attributeValue}
    </li>
  )
}
