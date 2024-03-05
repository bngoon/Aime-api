import mongoose from "mongoose";

const Schema = mongoose.Schema

let characterSchema = new Schema (
    {
        "name": {type: String},
        "images":[{ type: String }],
        "jutsu": [String],
        "personal": {
        "birthdate": {type: String},
        "sex": {type: String},
        "status": {type: String},
        }
    }
)

export default mongoose.model("characters", characterSchema)


// "personal": {
//     "birthdate": "December 1",
//     "sex": "Male",
//     "status": "Deceased",
//     "height": { "Part II": "210.1cm" },
//     "weight": { "Part II": "97.2kg" },
//     "bloodType": "O",
//     "occupation": "Raikage",
//     "affiliation": "Kumogakure"
//   },