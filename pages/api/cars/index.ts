import { cars } from "../../../public/api/cars";
import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cars);
}