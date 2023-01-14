import { getLinkPreview } from 'link-preview-js';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);

  return getLinkPreview(body.url).then((linkPreview) => {
    if (linkPreview) {
      res.status(200).json(linkPreview);
    } else {
      res.status(400);
    }
  });
}
