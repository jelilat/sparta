import  { Pool } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';

// Connect to PostgreSQL
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

const handler =  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const result = await pool.query('SELECT address, chain, name, image FROM contracts LIMIT 10');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };


export default handler;

