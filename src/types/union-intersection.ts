export type UnionIntersection<T> =
	(T extends unknown ? (x: T) => unknown : never) extends (x: infer R) => unknown ? R : never;


function merge<T extends object[]>(...values: T): UnionIntersection<T[number]> {
	let mergedValue = {};

	values.forEach(value => mergedValue = {
		...mergedValue,
		...value
	});

	return <UnionIntersection<T[number]>>mergedValue;
}

let value1 = {
	firstName: '',
	lastName: ''
};

let value2 = {
	age: 3
};

let merged = merge(value1, value2);

console.log(merged.firstName);
console.log(merged.lastName);
console.log(merged.age);