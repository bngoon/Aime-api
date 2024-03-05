import mongoose from "mongoose";

const Schema = mongoose.Schema

let characterSchema = new Schema({
    "name": { type: String },
    "images": [{ type: String }],
    "jutsu": [String],
    "personal": {
        "birthdate": { type: String },
        "sex": { type: String },
        "status": { type: String }
    }
});

export default mongoose.model("characters", characterSchema)


