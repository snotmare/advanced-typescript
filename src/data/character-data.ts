import { Character } from './character';
import { Axe, BroadSword, FryingPan, MithralVest, WizardStaff } from './equipment-data';
import { SqlData } from './sql-data';

export class CharacterData extends SqlData<Character> {
	private static SELECT = 'select * from characters';
	private static INSERT = 'insert into characters(name) values(?)';
	private static UPDATE = 'update characters set name = ? where id = ?';
	private static DELETE = 'delete from users where id = ?';

	constructor(options?: Omit<SqlData.Options<Character>, 'select' | 'insert' | 'update' | 'delete'>) {
		super({
			select: CharacterData.SELECT,
			insert: CharacterData.INSERT,
			update: CharacterData.UPDATE,
			delete: CharacterData.DELETE,
			seedData: options?.seedData ?? getDefaultSeedData()
		});
	}
}

export const Gandalf = <Character>{
	id: 1,
	name: 'Gandalf',
	level: 9,
	equipment:[
		WizardStaff,
		BroadSword
	]
};

export const Boromir = <Character>{
	id: 2,
	name: 'Boromir',
	level: 5,
	equipment:[
		BroadSword
	]
};

export const Frodo = <Character>{
	id: 3,
	name: 'Frodo',
	level: 1,
	equipment:[
		BroadSword,
		MithralVest
	]
};

export const Sam = <Character>{
	id: 4,
	name: 'Sam',
	level: 1,
	equipment:[
		BroadSword,
		FryingPan
	]
};

export const Gimli = <Character>{
	id: 5,
	name: 'Gimli',
	level: 7,
	equipment:[
		Axe
	]
};

function getDefaultSeedData(): Character[] {
	return [ Gandalf, Boromir, Frodo, Sam, Gimli ];
}