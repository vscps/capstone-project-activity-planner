import Activity from "@/data/models/Activities";
import dbConnect from "@/lib/db/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const activity = await Activity.findById(id);

      if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
      }

      return res.status(200).json({ data: activity });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ message: `Method not allowed` });
}
