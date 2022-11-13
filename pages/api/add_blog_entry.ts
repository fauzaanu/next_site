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
  if (req.query.password == "fauzaan1997") {
    const filePath = path.join(process.cwd(), "pages", "api", "blog.json");
    const data = fs.readFileSync(filePath, "utf8");
    // console.log(jsonData);
    const JsonData = JSON.parse(data);
    console.log(req);
    let newdata = {
      id: Object.keys(JsonData).length + 1,
      blog_title: req.query.blog_title,
      blog_description: req.query.blog_description,
    };

    console.log(typeof JsonData);
    JsonData[Object.keys(JsonData).length + 1] = newdata;
    console.log(JsonData);
    // now write the new data to the file so the blog would update
    fs.writeFileSync(filePath, JSON.stringify(JsonData));
    res.redirect("/blog");
  } else {
    res.redirect("/blog");
  }
}
