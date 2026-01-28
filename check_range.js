const db = require('better-sqlite3')('database.db');

const row = db.prepare('SELECT MIN(x) as minX, MAX(x) as maxX, MIN(y) as minY, MAX(y) as maxY, COUNT(*) as total FROM pixels').get();
console.log('Coordinate Range:', row);
// Check with margin
const outside = db.prepare('SELECT COUNT(*) as count FROM pixels WHERE x < 0 OR x > 63240 OR y < 0 OR y > 63240').get();
console.log('Pixels outside bounds (0-63240):', outside);
