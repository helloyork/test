import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import type { PageServerLoad } from './$types';
export const db=async()=>await open({
	filename: '../../../test.db',
	driver: sqlite3
});
export const load: PageServerLoad = async()=>{
	(await db()).run
}