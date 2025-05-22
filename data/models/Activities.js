import mongoose from "mongoose";
import "./Categories";

const { Schema } = mongoose;

const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  categories: {
    type: [String],
    required: true,
  },

  area: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", ActivitySchema);
export default Activity;
