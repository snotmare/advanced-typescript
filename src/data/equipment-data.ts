import { Equipment } from './equipment';
import { SqlData } from './sql-data';

export class EquipmentData extends SqlData<Equipment> {
	private static SELECT = 'select * from equipment';
	private static INSERT = 'insert into equipment(name) values(?)';
	private static UPDATE = 'update characters set name = ? where id = ?';
	private static DELETE = 'delete from equipment where id = ?';

	constructor(options?: Omit<SqlData.Options<Equipment>, 'select' | 'insert' | 'update' | 'delete'>) {
		super({
			select: EquipmentData.SELECT,
			insert: EquipmentData.INSERT,
			update: EquipmentData.UPDATE,
			delete: EquipmentData.DELETE,
			seedData: options?.seedData ?? getDefaultSeedData()
		});
	}
}

export const WizardStaff = <Equipment>{
	id: 1,
	name: 'Wizard Staff'
};

export const BroadSword = <Equipment>{
	id: 2,
	name: 'Broad Sword'
};

export const MithralVest = <Equipment>{
	id: 3,
	name: 'Mithral Vest'
};

export const FryingPan = <Equipment>{
	id: 4,
	name: 'Frying Pan'
};

export const Axe = <Equipment>{
	id: 5,
	name: 'Axe'
};

function getDefaultSeedData(): Equipment[] {
	return [ WizardStaff, BroadSword, MithralVest, FryingPan, Axe ];
}