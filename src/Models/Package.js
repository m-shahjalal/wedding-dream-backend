const { model, Schema } = require('mongoose');

const packageSchema = new Schema(
    {
        name: { type: String, trim: true },
        side: { type: String, required: true },
        image: { type: String, required: true },
        photographerQuantity: { type: Number, required: true },
        cinematographerQuantity: { type: Number, required: true },
        price: { type: Number, default: 0 },
        duration: { type: Number, default: 0 },
        printedPicture: { type: Number, default: 0 },
        trailerLength: { type: String, default: 0 },
        category: { type: String, required: true },
        sajjadSajuAvailable: { type: String, default: 0 },
        coverImage: { type: String, required: true },
    },
    { timestamps: true }
);

const Package = model('Package', packageSchema);
module.exports = Package;
