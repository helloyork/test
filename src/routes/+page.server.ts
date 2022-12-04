import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import type { PageServerLoad } from './$types';
export const db = async () => await open({
	filename: '../../../test.db',
	driver: sqlite3
});
export const sql = async function (arr: Array<String>, ...params: any[]) {
	(await db()).run(arr.join('?'), params);
}