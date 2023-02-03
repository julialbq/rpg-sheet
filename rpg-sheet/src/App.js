import './App.css'
import { inventoryOptions } from './inventoryOptions'
import fighterIcon from './assets/fighter.jpeg'
import RPGIcon from './assets/rpg-icon.png'
import { SkillsList } from "./components/SkillsList/SkillsList";
import { AttributeList } from "./components/AttributeList/AttributeList";
import { CharacterClass } from "./components/CharacterClass/CharacterClass";
import { Identification } from "./components/Identification/Identification";
import { Level } from "./components/Level/Level";
import { Life } from "./components/Life/Life";
import { Inventory } from './components/Inventory/Inventory';

function App() {

  const character = {
    name: "Bree Overhill",
    life: 10,
    mana: 10,
    level: 5,
    xp: 100,
    attributes: {
      wisdom: 5,
      strength: 10,
      inteligence: 5,
      agility: 10,
      charisma: 6,
      dexterity: 8
    },
    skills: [
      {
        name: 'flying',
        description: 'ability to fly',
        manaCost: 10,
      },
      {
        name: 'speed',
        description: 'run fast',
        manaCost: 15,
      }
    ],
    characterClass: {
      name: 'Fighter',
      icon: fighterIcon,
    }
  }

  const { map, health_potion, food_rations, book_collection, torch, climbing_gear, mana_potion, battle_axe, leather_armor} = inventoryOptions
  const inventory = [
    {
      map, amount: 1,
    },
    {
      health_potion, amount: 5,
    },
    {
      food_rations, amount: 5,
    },
    {
      book_collection, amount: 1,
    },
    {
      torch, amount: 1,
    },
    {
      climbing_gear, amount: 1,
    },
    {
      mana_potion, amount: 1,
    },
    {
      battle_axe, amount: 1,
    },
    {
      leather_armor, amount: 1,
    },
  ]

  return (
    <div className="App">
      <h1>Character sheet</h1>
      <img className='icon' src={RPGIcon} alt='RPG Icon'/>
      <Identification name={character.name} />
      <div className="info">
        <div className="main-info">
        <Life life={character.life} mana={character.mana} />
        <Level level={character.level} xp = {character.xp} />
        <CharacterClass characterClass={character.characterClass} />
        </div>
        <AttributeList attributes={character.attributes} />
      </div>
      <div className='extra-info'>
        <SkillsList skills={character.skills} />
        <Inventory inventory={inventory} strength = {character.attributes.strength}/>
      </div>
    </div>
  );
}

export default App;
