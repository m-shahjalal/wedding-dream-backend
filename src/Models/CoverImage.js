const { model, Schema } = require("mongoose");

const coverImageSchema = new Schema({
    serial: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        trim: true,
    },
    subtitle: {
        type: String,
        trim: true,
    },
    image: [
        {
            type: String,
        },
    ],
}, { timestamps: true });

const CoverImage = model("CoverImage", coverImageSchema);
module.exports = CoverImage;
