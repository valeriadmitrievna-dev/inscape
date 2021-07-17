const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, default: "unknown_file", required: true },
  type: { type: String, default: "unknown", required: true },
  size: { type: String, required: true },
});

module.exports = model("File", schema);
