import mongoose from "mongoose";
import Activity from "@/data/models/Activities";
import dbConnect from "@/lib/db/dbConnect";
import Category from "@/data/models/Categories";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const [activity, allCategories] = await Promise.all([
        Activity.findById(id),
        Category.find({}),
      ]);

      if (!activity) {
        return response.status(404).json({ message: "Activity not found" });
      }

      const categoryMap = {};
      allCategories.forEach((cat) => {
        categoryMap[cat.id] = cat.name;
      });

      const enrichedActivity = {
        ...activity.toObject(),
        categories: activity.categories.map((catId) => categoryMap[catId]),
      };

      return response.status(200).json(enrichedActivity);
    } catch (error) {
      return response.status(500).json({ error: "Server error" });
    }
  }

  if (request.method === "PUT") {
    try {
      const updatedActivity = await Activity.findByIdAndUpdate(
        id,
        request.body
      );
      return response.status(201).json(updatedActivity);
    } catch (error) {
      console.error("Updating activity failed:", error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    const { id } = request.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ error: "Invalid ID format" });
    }
    try {
      const deletedActivity = await Activity.findByIdAndDelete(id);

      if (!deletedActivity) {
        return response.status(404).json({ message: "Activity not found" });
      }

      return response
        .status(200)
        .json({ message: "Activity successfully deleted" });
    } catch (error) {
      return response.status(500).json({ error: "Failed to delete activity" });
    }
  }
  return response.status(405).json({ message: `Method not allowed` });
}
