import Category from "@/data/models/Categories";
import dbConnect from "@/lib/db/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const categories = await Category.find();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ message: `Method not allowed` });
}
