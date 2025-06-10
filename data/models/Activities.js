import mongoose from "mongoose";
import "./Categories";
import "./Countries";

const { Schema } = mongoose;

const activitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  categories: {
    type: [Schema.Types.ObjectId],
    ref: "Category",
    required: true,
  },

  // country: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Country",
  //   required: true,
  // },

  country: {
    type: String,
    required: true,
  },

  area: {
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
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);
export default Activity;
