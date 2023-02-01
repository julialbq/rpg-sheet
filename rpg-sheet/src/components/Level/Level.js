import './Level.css'

export const Level = ({level, xp}) => {
  return (
    <div className='level'>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
    </div>
  )
}
