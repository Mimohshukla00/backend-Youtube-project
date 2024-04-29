import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const mongoose = require("mongoose");
const aggregate=require("mongoose-aggregate-paginate-v2")

// schema

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      // cloudnary
      required: true,
    },
    thumbnail: {
      type: String,
      // cloudnary
      required: true,
    },
    title: {
      type: String,

      required: true,
    },
    description: {
      type: String,

      required: true,
    },
    duration: {
      type: Number,

      required: true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
