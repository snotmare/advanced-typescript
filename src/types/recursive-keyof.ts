// Credits: https://stackoverflow.com/questions/65332597/typescript-is-there-a-recursive-keyof
export type RecursiveKeyOf<TObj extends object> = {
	[TKey in keyof TObj & (string | number)]:
	RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
	[TKey in keyof TObj & (string | number)]:
	RecursiveKeyOfHandleValue<TObj[TKey], `['${TKey}']` | `.${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> =
	TValue extends any[] ? Text :
		TValue extends object
			? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
			: Text;


function requireKeys<O extends object>(options: O, ...keys: (RecursiveKeyOf<O>)[]) {
	//Recursively check the object for values
}