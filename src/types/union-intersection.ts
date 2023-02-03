export type UnionIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;


function merge<T extends object[]>(...values: T): UnionIntersection<T[number]> {
	return <UnionIntersection<T[number]>>{};
}