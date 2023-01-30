import { SkillsList } from "./components/SkillsList/SkillsList";
import { AttributeList } from "./components/AttributeList/AttributeList";
import { CharacterClass } from "./components/CharacterClass/CharacterClass";
import { Identification } from "./components/Identification/Identification";
import { Level } from "./components/Level/Level";
import { Life } from "./components/Life/Life";

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
        description: 'ability to fly'
      },
      {
        name: 'speed',
        description: 'run fast'
      }
    ],
    inventory: [
      {
        name: 'map',
        description: 'map of the land',
        cost: 10
      },
      {
        name: 'invisibility cloak',
        description: 'has the power to make the one who wears it invisible ',
        cost: 10
      }
    ],
    characterClass: {
      name: 'Fighter',
      icon: './assets/fighter.jpeg',
    }
  }

  return (
    <div className="App">
      <Identification name={character.name} />
      <Life life={character.life} mana={character.mana} />
      <Level level={character.level} xp = {character.xp} />
      <CharacterClass characterClass={character.characterClass} />
      <AttributeList attributes={character.attributes} />
      <SkillsList skills={character.skills} />
    </div>
  );
}

export default App;
