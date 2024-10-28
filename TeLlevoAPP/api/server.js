const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;


app.use(cors({
    origin: 'http://localhost:8100', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());


const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT,
            lastName TEXT,
            email TEXT,
            username TEXT,
            password TEXT
        )`, (err) => {
            if (err) {
                console.error('Error creating table ' + err.message);
            }
        });
    }
});


app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ users: rows });
    });
});


app.post('/users', (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    db.run('INSERT INTO users (firstName, lastName, email, username, password) VALUES (?, ?, ?, ?, ?)', 
           [firstName, lastName, email, username, password], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID });
    });
});


app.listen(port, () => {
    console.log(`Servidor API corriendo en http://localhost:${port}`);
});
