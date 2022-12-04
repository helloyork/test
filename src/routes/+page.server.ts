import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
export class db {
	#db: any;
	constructor() {
		let init = (async () => {
			this.#db = (await open({
				filename: '../../../test.db',
				driver: sqlite3
			})).run
		})();
		return {...this,init};
	}
	async sql(arr: Array<String>, ...params: any[])  {
		this.#db.run(arr.join('?'), params);
	}
}
