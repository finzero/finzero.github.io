// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import skills from '../../public/json/skills.json';

type Data = {
  skills: any[];
  works: any[];
  socialMedia: any[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(skills);
}
