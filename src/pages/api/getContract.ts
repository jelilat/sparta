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

const handler =  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const result = await pool.query('SELECT address, chain, name FROM contracts');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };


export default handler;

