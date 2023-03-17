import { Gandalf } from './data/character-data';

//#region recursive partial

type RecursivePartial<T> = {
	[K in keyof T]?: RecursivePartial<T[K]>;
};

export function examplePartial() {
	let gandalf = Gandalf;

	let nameEquals = equalsPartial(gandalf, {
		name: 'Gandalf'
	});

	console.log(`By name: ${nameEquals}`);

	let equipmentEquals = equalsPartial(gandalf, {
		equipment: [
			{
				name: 'Wizard Staff'
			}
		]
	});

	console.log(`By equipment: ${equipmentEquals}`);
}

function equalsPartial<V extends object>(value1: V, value2: Partial<V> | RecursivePartial<V>): boolean {
	if(value1 === value2) {
		return true;
	}

	if(value1 === undefined
	|| value2 === undefined
	|| typeof value1 !== 'object'
	|| typeof value2 !== 'object') {
		return false;
	}

	let match = Object.keys(value2)
		.every(key => {
			return key in value1
				&& equalsPartial(<V>value1[<keyof V>key], value2[<keyof V>key]);
		});

	return match;
}
//#endregion



//#region deep recursive partial
interface Person {
	name: string;
	dad?: Person;
	mom?: Person;
}

let bob3: Person = {
	name: 'Bob III',
	dad: {
		name: 'Bob II',
		dad: {
			name: 'Bob'
		}
	}
};

export function exampleDeepPartial() {
	let sameGrandparent = equalsPartial(bob3, {dad: {dad: {name: 'Bob'}}});
	console.log(`Same grandparent: ${sameGrandparent}`);
}
//#endregion



//#region union

// Explanation: https://fettblog.eu/typescript-union-to-intersection/
type Intersect<T> = (T extends object ? (x: T) => unknown : never) extends (x: infer R) => unknown ? R : never;

export function exampleUnion() {
	let value1 = {
		firstName: 'Frodo',
		lastName: 'Baggins'
	};
	
	let value2 = {
		age: 3
	};
	
	
	let merged = merge(value1, value2);
	console.log(merged);
}

function merge<T extends object[]>(...values: T): Intersect<T[number]> {
	return Object.assign({}, ...values);
}
//#endregion
