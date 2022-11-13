// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get the blog.json file

  const filePath = path.join(process.cwd(), "pages", "api", "blog.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  // console.log(jsonData);

  const data = JSON.parse(jsonData);
  res.send(data);
}
