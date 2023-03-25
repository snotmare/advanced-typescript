import { CharacterStats } from './data/character-stats';

//#region key of
export function exampleKeyof() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	incrementStat(stats, 'strength');

	console.log(stats);
}

function incrementStat(stats: CharacterStats, statType: keyof CharacterStats) {
	stats[statType]++;
}
//#endregion



//#region keyof foreach
export function exampleForEach() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	Object.keys(stats).forEach(key => console.log(key));

	//This won't compile...
	// Object.keys(stats).forEach(key => console.log(stats[key]));

	Object.keys(stats).forEach(key => console.log(stats[<keyof CharacterStats>key]));
}
//#endregion



//#region keyof property
type TransformBoolean<T> = {
	[K in keyof T]?: boolean
};

export function exampleProperty() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	logObject(stats, {charisma: true, dexterity: false, wisdom: true});
}

function logObject<T>(value: T, printKeys: TransformBoolean<T>) {
	Object.keys(printKeys)
		.filter(key => printKeys[<keyof T>key])
		.forEach(key => console.log(`${key}: ${value[<keyof T>key]}`));
}
//#endregion



//#region keyof property part 2
type Transform<T, V> = {
	[K in keyof T]?: V
};

export function exampleTransform() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	logObject2(stats, {charisma: true});
}

function logObject2<T>(value: T, printKeys: Transform<T, boolean>) {
	Object.keys(printKeys)
		.filter(key => printKeys[<keyof T>key])
		.forEach(key => console.log(`${key}: ${value[<keyof T>key]}`));
}
//#endregion



//#region keyof property
type ConditionalTransform<T, V> = {
	[K in keyof T as T[K] extends number ? K: never]?: V;
};

export function exampleConditionalTransform() {
	let stats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10,
		name: 'Aragorn'
	};

	logNumbers(stats, {constitution: true});
}

function logNumbers<T>(value: T, printKeys: ConditionalTransform<T, boolean>) {
	Object.keys(printKeys)
		.filter(key => printKeys[<keyof ConditionalTransform<T, boolean>>key])
		.forEach(key => console.log(`${key}: ${value[<keyof T>key]}`));
}
//#endregion