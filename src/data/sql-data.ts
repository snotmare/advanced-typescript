export class SqlData<T extends object> {
	private rows: T[] = [];

	constructor(options: SqlData.Options<T>) {
		if(options.seedData) {
			this.rows = options.seedData;
		}
	}

	seed(rows: T[]) {
		this.rows = rows;
	}

	search(search: Partial<T>): T[] {
		//FIXME Implement search
		return this.rows;
	}

	//FIXME Improve this test
	get(id: number): T | undefined {
		return this.rows.find(row => 'id' in row ? row.id === id : false);
	}
}

export module SqlData {
	export interface Options<T> {
		select: string;
		insert: string;
		update: string;
		delete: string;
		seedData?: T[];
	}
}