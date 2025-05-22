import dbConnect from "@/lib/db/dbConnect";
import Activity from "@/data/models/Activities";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { page = "1", limit = "10" } = req.query;

      const pageNum = Math.max(1, parseInt(page, 10));
      const pageSize = Math.max(1, parseInt(limit, 10));
      const skip = (pageNum - 1) * pageSize;

      const [activities, total] = await Promise.all([
        Activity.find().skip(skip).limit(pageSize),
        Activity.countDocuments(),
      ]);

      const totalPages = Math.ceil(total / pageSize);
      const hasNextPage = pageNum < totalPages;
      const hasPrevPage = pageNum > 1;

      return res.status(200).json({
        meta: {
          total,
          page: pageNum,
          pageSize,
          totalPages,
          hasNextPage,
          hasPrevPage,
          links: {
            self: `/api/activities?page=${pageNum}&limit=${pageSize}`,
            next: hasNextPage
              ? `/api/activities?page=${pageNum + 1}&limit=${pageSize}`
              : null,
            prev: hasPrevPage
              ? `/api/activities?page=${pageNum - 1}&limit=${pageSize}`
              : null,
          },
        },
        data: activities,
      });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ message: `Method not allowed` });
}
