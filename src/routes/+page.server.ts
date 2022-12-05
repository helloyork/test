import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
export class db {
	#db: any;
	constructor() {
		const init = (async () => {
			this.#db = (
				await open({
					filename: '../../../test.db',
					driver: sqlite3
				})
			).run;
		})();
		return { ...this, init };
	}
	async sql(arr: Array<string>, ...params: any[]) {
		this.#db.run(arr.join('?'), params);
	}
}
