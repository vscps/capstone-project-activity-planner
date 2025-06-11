import dbConnect from "@/lib/db/dbConnect";
import Activity from "@/data/models/Activities";
import Category from "@/data/models/Categories";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const [activity, allCategories] = await Promise.all([
        Activity.findById(id),
        Category.find({}),
      ]);

      if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
      }

      const categoryMap = {};
      allCategories.forEach((cat) => {
        categoryMap[cat.id] = cat.name;
      });

      const enrichedActivity = {
        ...activity.toObject(),
        categories: activity.categories.map((catId) => categoryMap[catId]),
      };

      return res.status(200).json(enrichedActivity);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ message: `Method not allowed` });
}
