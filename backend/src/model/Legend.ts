import mongoose from "mongoose";

const { Schema } = mongoose;

export const Legend = mongoose.model(
  "Legend",
  new Schema({
    element: {
      type: String,
      require:true,
    },
    value: {
      type: String,
      require:true,
    },
  })
);
