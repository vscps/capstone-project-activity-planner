import dbConnect from "@/lib/db/dbConnect";
import Activity from "@/data/models/Activities";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { page = "1", limit = "10", categories, countries } = req.query;

      const pageNum = Math.max(1, parseInt(page, 10));
      const pageSize = Math.max(1, parseInt(limit, 10));
      const skip = (pageNum - 1) * pageSize;

      let filter = {};

      if (categories) {
        const categoryArray = categories.split(",");
        filter.categories = { $in: categoryArray };
      }

      if (countries) {
        const countryArray = countries.split(",");
        filter.country = { $in: countryArray };
      }

      const [activities, total] = await Promise.all([
        Activity.find(filter).skip(skip).limit(pageSize),
        Activity.countDocuments(filter),
      ]);

      const totalPages = Math.ceil(total / pageSize);
      const hasNextPage = pageNum < totalPages;
      const hasPrevPage = pageNum > 1;

      let queryParams = `limit=${pageSize}`;
      if (categories) queryParams += `&categories=${categories}`;
      if (countries) queryParams += `&countries=${countries}`;

      return res.status(200).json({
        meta: {
          total,
          page: pageNum,
          pageSize,
          totalPages,
          hasNextPage,
          hasPrevPage,
          links: {
            self: `/api/activities?page=${pageNum}&${queryParams}`,
            next: hasNextPage
              ? `/api/activities?page=${pageNum + 1}&${queryParams}`
              : null,
            prev: hasPrevPage
              ? `/api/activities?page=${pageNum - 1}&${queryParams}`
              : null,
          },
        },
        data: activities,
      });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  if (req.method === "POST") {
    try {
      const newActivity = await Activity.create(req.body);
      return res.status(201).json(newActivity);
    } catch (error) {
      console.error("Creating activity failed:", error);
      return res.status(400).json({ error: error.message });
    }
  }

  return res.status(405).json({ message: `Method not allowed` });
}
