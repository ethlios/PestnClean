import { NextApiRequest, NextApiResponse } from 'next';
import cors, { runMiddleware } from './corsMiddleware';

type Handler = (req: NextApiRequest, res: NextApiResponse) => void | Promise<void>;

export function createApiHandler(handler: Handler) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        // Chạy middleware cors
        await runMiddleware(req, res, cors);

        if (req.method === 'OPTIONS') {
        // Trả về response 200 cho yêu cầu preflight
        res.status(200).end();
        return;
        }

        // Gọi handler thực tế
        return handler(req, res);
    };
}
