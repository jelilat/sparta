import  { Pool } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';

// Connect to PostgreSQL
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DBNAME,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT!),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { address, chain, name } = req.body;
    try {
      await pool.query('INSERT INTO contracts (address, chain, name) VALUES ($1, $2, $3)', [address, chain, name]);
      res.status(201).send('Contract added successfully!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

export default handler;