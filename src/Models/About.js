const { model, Schema } = require("mongoose");

const aboutSchema = new Schema({
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    logo: { type: String, trim: true },
    logoText: { type: String, trim: true },
    address: { type: String, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, trim: true },
    facebook: { type: String, trim: true },
    instagram: { type: String, trim: true },
    youtube: { type: String, trim: true },
}, { timestamps: true });

const About = model("About", aboutSchema);
module.exports = About;
