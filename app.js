const express = require('express');
const mysql = require('mysql2/promise'); // trengs grunnet bruk av Maria.db. Lastes ned som mysql2
const app = express();
const port = 3000; // Hvilken port det åpned 

const pool = mysql.createPool({ // trengs grunnet bruk av Maria.db.
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'serie',
  connectionLimit: 5
});

app.get('/', (req, res) => {
    res.send('Hello World!');
}); 

app.get('/serie_database_1', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM serie');
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Failed to fetch data from serie_database_1.serie' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});