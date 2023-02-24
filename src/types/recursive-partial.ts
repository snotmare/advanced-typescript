
// export type RecursivePartial<T> = {
// 	[P in keyof T]?:
// 	T[P] extends (infer U)[]
// 		? RecursivePartial<U>[]
// 		: T[P] extends object
// 			? RecursivePartial<T[P]>
// 			: T[P];
// };


// type RecursivePartial<T> = {[P in keyof T]?:
// 	T[P] extends (infer U)[] ? RecursivePartial<U>[] :
// 		T[P] extends (number | string | symbol | undefined) ? T[P] : RecursivePartial<T[P]>;
// };

type RecursivePartial<T> = {
	[P in keyof T]?: RecursivePartial<T[P]>;
};


// export type RecursivePartial<T> = {
// 	[P in keyof T]?:
// 	T[P] extends object
// 		? RecursivePartial<T[P]>
// 		: T[P];
// };

function equalsPartial<V>(value1: V, value2: Partial<V> | RecursivePartial<V>): boolean {
	return true;
}

// let user: User = {
// 	id: 1,
// 	firstName: 'Bill',
// 	lastName: 'Smith',
// 	phones: [{
// 		id: 1,
// 		type: 'mobile',
// 		number: '14025551234'
// 	}],
// 	child: {
// 		firstName: 'Bill',
// 		lastName: 'Smith',
// 		child: {
// 			firstName: 'Bill',
// 			lastName: 'Smith',
// 			child: {
// 				firstName: 'Bill',
// 				lastName: 'Smith',
// 			}
// 		}
// 	}
// };

// let sameAreaCode = equalsPartial(user, {child: {child: {child: {child: {firstName: 'bob'}}}}});

// let hasHomeEmail = equalsPartial(user, {phones: [{type: 'mobile'}]});

// let hasBirthday = equalsPartial(user, {phones: [{type: 'mobile'}]});