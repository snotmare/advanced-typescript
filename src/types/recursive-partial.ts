export type RecursivePartial<T> = {
	[P in keyof T]?:
	T[P] extends (infer U)[] ? RecursivePartial<U>[] :
		T[P] extends object ? RecursivePartial<T[P]> :
			T[P];
};


function equalsPartial<V>(value1: V, value2: Partial<V> | RecursivePartial<V>): boolean {
	return true;
}