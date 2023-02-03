//
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;




// interface CommonOptions {
// 	type: FieldInputComponent.Type;
// 	field: Field;
// }

// export type Options = InputOptions | DropdownOptions;

// export interface InputOptions extends CommonOptions {
// 	type: Type.INPUT;
// }

// export interface DropdownOptions extends CommonOptions {
// 	type: Type.DROPDOWN;
// 	items: SelectItem[];
// }

// export interface Options<R> {
// 	inputOptions?: { [key in keyof R]?: DistributiveOmit<FieldInputComponent.Options, 'field'> };
// }