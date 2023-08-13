import express from 'express';
import bodyParser from 'body-parser';
import  { Pool } from 'pg';

const app = express();
const port = 3000;

// Connect to PostgreSQL
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DBNAME,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT!),
});

app.use(bodyParser.json());

// Endpoint to store contract address and chain
app.post('/contracts', async (req, res) => {
  const { address, chain } = req.body;
  try {
    await pool.query('INSERT INTO contracts (address, chain) VALUES ($1, $2)', [address, chain]);
    res.status(201).send('Contract added successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Endpoint to fetch all stored contract addresses and chains
app.get('/contracts', async (req, res) => {
  try {
    const result = await pool.query('SELECT address, chain FROM contracts');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
