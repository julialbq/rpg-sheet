export const Attribute = ({attributeName, attributeValue}) => {
  return (
    <li>
      {attributeName.charAt(0).toUpperCase()+ attributeName.slice(1)} : {attributeValue}
    </li>
  )
}
