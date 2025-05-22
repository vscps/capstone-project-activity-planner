import dbConnect from "@/lib/db/dbConnect";
import Activity from "@/data/models/Activities";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const activities = await Activity.find();

      return res.status(200).json(activities);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ message: `Method not allowed` });
}
