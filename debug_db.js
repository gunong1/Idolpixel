const Database = require('better-sqlite3');
const db = new Database('database.db');

const rows = db.prepare('SELECT owner_nickname, COUNT(*) as count FROM pixels GROUP BY owner_nickname').all();
console.log('--- Pixel Counts by Owner ---');
rows.forEach(row => {
    console.log(`${row.owner_nickname}: ${row.count}`);
});
