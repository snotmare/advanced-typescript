import { Character } from './data/character';
import { Frodo } from './data/character-data';
import { BroadSword } from './data/equipment-data';

//#region Example extends
export function exampleExtends() {
	let character = Frodo;
	levelUp(character);

	let sword = BroadSword;
	// levelUp(sword); //Does not work


	let elevator = {
		id: 42,
		name: 'elevator',
		level: 15
	};

	// levelUp(elevator); //TODO Will this work?
}

function levelUp<T extends Character>(character: T) {
	character.level++;
	console.log(`${character.name} is now level ${character.level}!`);
}

//#endregion



//#region Example union
export function exampleUnion() {
	let stringValue = increment('4');
	console.log(`${stringValue} has a length of ${stringValue.length}`);

	let numericValue = increment(5.5);
	console.log(`${numericValue} as an exponent ${numericValue.toExponential()}`);
}

function increment<V extends string | number>(value: V): V {
	if(typeof value === 'string') {
		value = <V>`${parseInt(value, 10) + 1}`;
	} else if(typeof value === 'number') {
		value++;
	}

	return value;
}
//#endregion



//#region Example conditional
interface NumericResult {
	value: number;
}

interface StringResult {
	value: string;
}

type Result<V extends string | number> = V extends string ? StringResult : NumericResult;

export function exampleConditional() {
	let stringResult = incrementResult('4');
	console.log(`${stringResult.value} has a length of ${stringResult.value.length}`);

	let numericResult = incrementResult(5.5);
	console.log(`${numericResult.value} as an exponent ${numericResult.value.toExponential()}`);
}

function incrementResult<V extends string | number>(value: V): Result<V> {
	if(typeof value === 'string') {
		value = <V>`${parseInt(value, 10) + 1}`;
	} else if(typeof value === 'number') {
		value++;
	}

	return <Result<V>>{
		value: value
	};
}
//#endregion



//#region Example infer
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
// ...or...
// type Flatten<Type> = Type extends (infer Item)[] ? Item : Type;

type StringType = Flatten<string[]>;
type NumericType = Flatten<number[]>;


//Slightly more complicated infer
type FlattenValue<T> = T extends Array<infer ArrayItem>
	? ArrayItem
	: T extends Map<unknown, infer Value>
		? Value
		: T;


export function exampleFlatten() {
	iterate('Hello world', value => console.log(value));

	iterate(['Cats', 'Dogs', 'Pigs'], value => console.log(value));

	let map = new Map<number, string>()
		.set(1, '1')
		.set(2, '2')
		.set(3, '3');
	
	iterate(map, value => console.log(value));
}

function iterate<T>(values: T, onValue: (value: FlattenValue<T>) => void) {
	if(Array.isArray(values)) {
		values.forEach(value => onValue(value));
	} else if(values instanceof Map) {
		Array.from(values.values()).forEach(value => onValue(value));
	} else {
		onValue(<FlattenValue<T>>values);
	}
}
//#endregion