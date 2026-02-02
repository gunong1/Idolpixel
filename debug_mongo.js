const MongoStore = require('connect-mongo');
console.log('Type:', typeof MongoStore);
console.log('Keys:', Object.keys(MongoStore));
console.log('MongoStore.create:', MongoStore.create);
if (MongoStore.default) {
    console.log('MongoStore.default:', MongoStore.default);
    console.log('MongoStore.default.create:', MongoStore.default.create);
}
