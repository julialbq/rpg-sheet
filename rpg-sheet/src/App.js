import './App.css'
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
    inventory: [
      {
        map: { weight: 0.5, type: 'item', description: 'map of the world' },
        amount: 1,
      },
      {
        health_potion: { weight: 0.1, type: 'item', description: 'Recover 10 health points' },
        amount: 5,
      },
      {
        food_rations: { weight: 0.1, type: 'item', description: 'feed yourself!' },
        amount: 5,
      },
      {
        book_collection: { weight: 2, type: 'item', description: 'bring knowledge with you' },
        amount: 1,
      },
      {
        torch: { weight: 0.5, type: 'item', description: 'ligthen your path' },
        amount: 1,
      },
      {
        climbing_gear: { weight: 1, type: 'item', description: 'for when you cant climb on your own' },
        amount: 1,
      },
      {
        mana_potion: { weight: 0.1, type: 'item', description: 'Recover 5 mana points' },
        amount: 1,
      },
      {
        battle_axe: { weight: 10, type: 'weapon', description: 'steel axe made for cutting through armor' },
        amount: 1,
      },
      {
        leather_armor: { weight: 2, type: 'armor', description: 'light and flexible armor' },
        amount: 1,
      }
    ],
    characterClass: {
      name: 'Fighter',
      icon: fighterIcon,
    }
  }

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
        <Inventory inventory={character.inventory} strength = {character.attributes.strength}/>
      </div>
    </div>
  );
}

export default App;
