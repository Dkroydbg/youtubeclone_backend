import mongoose, { Schema } from "mongoose";

const subscriptionoSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is suscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionoSchema);
