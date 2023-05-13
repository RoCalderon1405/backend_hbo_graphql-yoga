import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  tittle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  dateOfRelease: {
    type: String,
    required: true,
  }
});

export default model("Movie", movieSchema);
