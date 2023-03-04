import { Character } from './data/character';
import { CharacterData, Gimli } from './data/character-data';

//#region Example Omit
type OmitCharacter = Omit<Character, 'id'>;

export function exampleOmit() {
	writeOmitCharacter({
		name: 'Legolas',
		level: 10
	});

	writeOmitCharacter(Gimli);
}

function writeOmitCharacter(character: OmitCharacter) {
	console.log(`${character.name} level ${character.level}`);
	console.log(JSON.stringify(character));
}
//#endregion



//#region Example Pick
type PickCharacter = Pick<Character, 'name' | 'level'>;

export function examplePick() {
	writePickCharacter({
		name: 'Legolas',
		level: 10
	});

	writePickCharacter(Gimli);
}

function writePickCharacter(character: PickCharacter) {
	console.log(`${character.name} level ${character.level}`);
	console.log(JSON.stringify(character));
}
//#endregion



//#region Example Partial
type PartialCharacter = Partial<Character>;

export function examplePartial() {
	writePartialCharacter({
		name: 'Sam'
	});
}

function writePartialCharacter(character: PartialCharacter) {
	console.log(`${character.name} level ${character.level}`);
	console.log(JSON.stringify(character));
}
//#endregion



//#region Realistic example
export function exampleReal() {
	//Example using Omit (see SqlData and CharacterData constructors)
	let characterData = new CharacterData();

	console.log(characterData.get(1));
	
	//Example using partial (see search method)
	characterData.search({ level: 1 });

	//TODO What if we only want to allow searching by certain fields?
}
//#endregion