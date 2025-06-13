import mongoose from "mongoose";
import Activity from "@/data/models/Activities";
import dbConnect from "@/lib/db/dbConnect";
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

  if (req.method === "PUT") {
    try {
      const updatedActivity = await Activity.findByIdAndUpdate(id, req.body);
      return res.status(201).json(updatedActivity);
    } catch (error) {
      console.error("Updating activity failed:", error);
      return res.status(400).json({ error: error.message });
    }
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    try {
      const deletedActivity = await Activity.findByIdAndDelete(id);

      if (!deletedActivity) {
        return res.status(404).json({ message: "Activity not found" });
      }

      return res.status(200).json({ message: "Activity successfully deleted" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete activity" });
    }
  }
  return res.status(405).json({ message: `Method not allowed` });
}
