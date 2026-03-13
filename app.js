const express = require('express');
const mysql = require('mysql2/promise'); // trengs grunnet bruk av Maria.db. Lastes ned som mysql2
const app = express();
const port = 3000; // Hvilken port det åpned 

const pool = mysql.createPool({ // trengs grunnet bruk av Maria.db.
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'chatdb',
  connectionLimit: 5
});

app.get('/', (req, res) => { //bæsj
    res.send('Verden er full av ondskap');
}); //Testkode: kan endres

// app.get('/chat', async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM chat');
//     res.json(rows);
//   } catch (err) {
//     console.error('Database error:', err);
//     res.status(500).json({ error: 'Failed to fetch data from chatdb.chat' });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});