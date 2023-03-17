import { Character } from './data/character';
import { CharacterData } from './data/character-data';

//#region Example returning void
export function exampleVoid() {
	let logReturn = logValue('log me');
	console.log(`log return: ${logReturn}`);
}

function logValue(value: string) {
	console.log(value);

	//TODO Try uncommenting this
	// return '';
}
//#endregion



//#region Example returning undefined
export function exampleUndefined() {
	let character = getCharacter(250);

	//TODO Try writting a property of user instead of the user object (ex: user.firstName)
	console.log(`user return ${character}`);

	console.log(`user return ${JSON.stringify(character)}`);
}

function getCharacter(id: number): Character | undefined {
	let data = new CharacterData();
	return data.get(id);
}
//#endregion



//#region Example returning never
export function exampleNever() {
	try {
		let errorReturn = throwError();
		console.log(`never return ${errorReturn}`);
	} catch(error) {
		console.error(error);
	}
}

function throwError(): never {
	//TODO Try commenting out this code
	throw new Error('This is a test error');
}
//#endregion