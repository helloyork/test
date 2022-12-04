import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

open({
	filename: '/tmp/database.db',
	driver: sqlite3.Database
}).then((db) => {
	// do your thing
})