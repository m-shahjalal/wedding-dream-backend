const { model, Schema } = require('mongoose');

const memberSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        designation: { type: String, default: 'Photographer', trim: true },
        image: { type: String, required: true },
        social: {
            facebook: String,
            linkedin: String,
            instagram: String,
            twitter: String,
            portfolio: String,
        },
    },
    { timestamps: true }
);

const Team = model('Team', memberSchema);
module.exports = Team;
