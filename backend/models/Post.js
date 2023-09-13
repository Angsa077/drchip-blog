import { model, Schema } from "mongoose";

const PostSchema = new Schema (
    {
        title: { type: String, required: true },
        caption: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        body: { type: Object, required: true },
        photo: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref:"User" },
        tags: { type: [String] },
        categories: [{ type: Schema.Types.ObjectId, ref: "PostCategories" }],
    },
    { timestamp: true }
);

//membuat relasi dengan comment
PostSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "postId"
});

const Post = model("Post", PostSchema);
export default Post;