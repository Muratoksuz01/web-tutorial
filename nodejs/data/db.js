const Database = require('better-sqlite3');
let db;
try {
    db = new Database('/home/murat/deneme.db');
    console.log('Veritabanına başarıyla bağlanıldı.');
} catch (err) {
    console.error('Veritabanına bağlanılamadı:', err.message);
}
/*
db.prepare('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)').run();

// Veri ekleme
db.prepare('INSERT INTO users (name, age) VALUES (?, ?)').run('John', 30);

// Tek kayıt sorgulama
const user = db.prepare('SELECT * FROM users WHERE name = ?').get('John');
console.log(user);

// Tüm kullanıcıları listeleme
const users = db.prepare('SELECT * FROM users').all();

*/
module.exports=db;