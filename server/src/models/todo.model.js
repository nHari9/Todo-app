const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: { type: String }
},
//  {
//     versionkey: false,
//     // timestamps: true
// }
);

module.exports = mongoose.model("todo", todoSchema)