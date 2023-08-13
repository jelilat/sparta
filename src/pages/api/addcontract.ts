import  { Pool } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';

// Connect to PostgreSQL
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { address, chain, name, image } = req.body;
    try {
      await pool.query('INSERT INTO contracts (address, chain, name, image) VALUES ($1, $2, $3, $4)', [address, chain, name, image]);
      res.status(201).send('Contract added successfully!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

export default handler;