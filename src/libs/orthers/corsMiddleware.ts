import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Khởi tạo middleware cors
const cors = Cors({
  origin: 'https://pestnclean.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Bao gồm cả PUT và DELETE
  allowedHeaders: ['Content-Type', 'Authorization'],
});

// Helper để chạy middleware
export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
