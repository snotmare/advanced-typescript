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
		//TODO Implement search
		return this.rows;
	}

	get(id: number): T | undefined {
		//TODO Improve this test
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