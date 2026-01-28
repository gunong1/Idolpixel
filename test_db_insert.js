const Database = require('better-sqlite3');
const db = new Database('database.db');

try {
    console.log("Testing DB Insert...");
    const stmt = db.prepare(`INSERT INTO pixels (x, y, color, idol_group_name, owner_nickname, purchased_at, expires_at) VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now', '+7 days'))`);

    const info = stmt.run(9999, 9999, '#test', 'TEST_GROUP', 'TEST_USER');

    console.log("Insert Success! ID:", info.lastInsertRowid);

    // Verify Read
    const row = db.prepare('SELECT * FROM pixels WHERE id = ?').get(info.lastInsertRowid);
    console.log("Read Back:", row);

} catch (err) {
    console.error("DB Error:", err);
} finally {
    db.close();
}
