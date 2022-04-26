import { cars } from "../../../public/api/cars";
import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const car = cars.find((car) => car.id === id);
    res.status(200).json(car);
  }