import mongoose from "mongoose";

const { Schema } = mongoose;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Country =
  mongoose.models.Country || mongoose.model("Country", countrySchema);
export default Country;