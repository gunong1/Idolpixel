const Database = require('better-sqlite3');
const db = new Database('database.db');

console.log("--- Starting Migration ---");

function addColumn(name, def) {
    try {
        db.prepare(`ALTER TABLE pixels ADD COLUMN ${name} ${def}`).run();
        console.log(`[SUCCESS] Added column: ${name}`);
    } catch (err) {
        if (err.message.includes("duplicate column name")) {
            console.log(`[INFO] Column ${name} already exists.`);
        } else {
            console.error(`[ERROR] Failed to add ${name}:`, err.message);
        }
    }
}

addColumn('purchased_at', 'DATETIME DEFAULT CURRENT_TIMESTAMP');
addColumn('expires_at', 'DATETIME');

try {
    const info = db.pragma('table_info(pixels)');
    console.log("Current Schema Columns:", info.map(c => c.name).join(', '));
} catch (e) {
    console.error("Failed to read schema:", e);
}

db.close();
console.log("--- Migration Finished ---");
