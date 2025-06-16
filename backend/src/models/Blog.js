import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, default: "Others" },
    content: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // 🔗 This enables population of user data
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);

// // ! Number 2: Setup the Blog Schema
// // ! Define the blog structure like title, slug, description in mdb

// import mongoose from "mongoose";

// const BlogSchema = new mongoose.Schema(
//   {
//     title: String,
//     slug: { type: String, unique: true },
//     description: String,
//     category: String,
//     content: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Blog", BlogSchema);

// // TODO: blogController for blog creation , retrival
