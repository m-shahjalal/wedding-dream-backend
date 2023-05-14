const About = require("../Models/About");
const Booking = require("../Models/Booking");
const CoverImage = require("../Models/CoverImage");
const Gallery = require("../Models/Gallery");
const Package = require("../Models/Package");
const Quote = require("../Models/Quote");
const Team = require("../Models/Team");
const Testimonial = require("../Models/Testimonial");
const Video = require("../Models/Vidoe");
const sendMail = require("../service/sendmail");
const admin = {};

admin.getPackage = async (req, res, next) => {
    try {
        const package = await Package.find();
        res.json({ success: true, data: package });
    } catch (error) {
        next(error);
    }
};
admin.addPackage = async (req, res, next) => {
    try {
        const {
            name,
            side,
            image,
            photographerQuantity,
            cinematographerQuantity,
            price,
            duration,
            printedPicture,
            trailerLength,
            category,
            sajjadSajuAvailable,
            coverImage
        } = req.body;

        const package = await Package.create({
            name,
            side,
            image,
            photographerQuantity,
            cinematographerQuantity,
            price,
            duration,
            printedPicture,
            trailerLength,
            category,
            sajjadSajuAvailable,
            coverImage
        });
        res.status(201).json({
            success: true,
            data: package,
        });
    } catch (error) {
        next(error);
    }
};
admin.updatePackage = async (req, res, next) => {
    try {
        const package = await Package.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: package });
    } catch (error) {
        next(error);
    }
};

admin.deletePackage = async (req, res, next) => {
    try {
        const package = await Package.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: package });
    } catch (error) {
        next(error);
    }
};

// Gallery functionality

admin.getGallery = async (req, res, next) => {
    try {
        const gallery = await Gallery.find();
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
};

admin.addGallery = async (req, res, next) => {
    try {
        const { title, albumLink, image } = req.body;
        const gallery = await Gallery.create({ title, albumLink, image });
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
};

admin.updateGallery = async (req, res, next) => {
    try {
        const gallery = await Gallery.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
};

admin.deleteGallery = async (req, res, next) => {
    try {
        const gallery = await Gallery.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
};


admin.addVideoGallery = async (req, res, next) => {
    try {
        const { title, link } = req.body;
        const gallery = await Video.create({ title, link });
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
}

admin.getVideo = async (req, res, next) => {
    try {
        const gallery = await Video.find();
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
}

admin.updateVideo = async (req, res, next) => {
    try {
        const gallery = await Video.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
}

admin.deleteVideo = async (req, res, next) => {
    try {
        const gallery = await Video.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: gallery });
    } catch (error) {
        next(error);
    }
}

// Team functionality
admin.getTeam = async (req, res, next) => {
    try {
        const team = await Team.find();
        res.status(200).json({ success: true, data: team });
    } catch (error) {
        next(error);
    }
};

admin.addTeam = async (req, res, next) => {
    try {
        const { name, designation, image, social } = req.body;
        console.log(req.body)
        const team = await Team.create({ name, designation, image, social });
        res.status(200).json({ success: true, data: team });
    } catch (error) {
        next(error);
    }
};

admin.updateTeam = async (req, res, next) => {
    try {
        const team = await Team.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: team });
    } catch (error) {
        next(error);
    }
};

admin.deleteTeam = async (req, res, next) => {
    try {
        const team = await Team.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: team });
    } catch (error) {
        next(error);
    }
};

// testimonial functionality

admin.getTestimonial = async (req, res, next) => {
    try {
        const testimonial = await Testimonial.find();
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        next(error);
    }
};

admin.addTestimonial = async (req, res, next) => {
    try {
        const { user, text, image } = req.body;
        const testimonial = await Testimonial.create({ user, text, image });
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        next(error);
    }
};

admin.updateTestimonial = async (req, res, next) => {
    try {
        const testimonial = await Testimonial.updateOne(
            { _id: req.params },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        next(error);
    }
};

admin.deleteTestimonial = async (req, res, next) => {
    try {
        const testimonial = await Testimonial.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        next(error);
    }
};

// booking functionality

admin.getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find();
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

admin.addBooking = async (req, res, next) => {
    try {
        const {
            brideName,
            groomName,
            time,
            eventDate,
            packageId,
            contact,
            email,
            venueDetails,
            packageName,
            packageAmount,
            advanceAmount,
            discountAmount,
            transactionID,
            accountNumber,
        } = req.body;

        const mail = sendMail(
            "Congratulations, you got new Message",
            "You got new message from your website"
        );

        if (!mail) {
            return res.status(400).json({ success: false, message: "Something went wrong" })
        }

        const booking = await Booking.create({
            brideName,
            groomName,
            time,
            eventDate,
            packageId,
            contact,
            email,
            venueDetails,
            packageName,
            packageAmount,
            advanceAmount,
            discountAmount,
            transactionID,
            accountNumber,
        });
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

admin.updateBooking = async (req, res, next) => {
    try {
        const booking = await Booking.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

admin.deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        next(error);
    }
};

// About functionality
admin.getAbout = async (req, res, next) => {
    try {
        const about = await About.find();
        res.status(200).json({ success: true, data: about });
    } catch (error) {
        next(error);
    }
};

admin.updateAbout = async (req, res, next) => {
    try {
        const about = await About.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: about });
    } catch (error) {
        next(error);
    }
};

admin.getCoverImage = async (req, res, next) => {
    try {
        const coverImage = await CoverImage.find();

        res.status(200).json({ success: true, data: coverImage.reverse() });
    } catch (error) {
        next(error);
    }
};

admin.addCoverImage = async (req, res, next) => {
    const { title, subtitle, image } = req.body;
    try {
        const count = await CoverImage.countDocuments();
        const coverImage = await CoverImage.create({
            serial: count + 1,
            title,
            subtitle,
            image,
        });
        res.status(201).json({ success: true, data: coverImage });
    } catch (error) {
        next(error);
    }
};

admin.updateCoverImage = async (req, res, next) => {
    try {
        const coverImage = await CoverImage.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: coverImage });
    } catch (error) {
        next(error);
    }
};

admin.deleteCoverImage = async (req, res, next) => {
    try {
        const coverImage = await CoverImage.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: coverImage });
    } catch (error) {
        next(error);
    }
};

admin.addQuote = async (req, res, next) => {
    try {
        const { text, author, image } = req.body;
        const quote = await Quote.create({ text, author, image });
        res.status(200).json({ success: true, data: quote });
    } catch (error) {
        next(error);
    }
}

admin.getQuote = async (req, res, next) => {
    try {
        const quote = await Quote.find();
        res.status(200).json({ success: true, data: quote });
    } catch (error) {
        next(error);
    }
}

admin.updateQuote = async (req, res, next) => {
    try {
        const quote = await Quote.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, data: quote });
    } catch (error) {
        next(error);
    }
}

admin.deleteQuote = async (req, res, next) => {
    try {
        const quote = await Quote.deleteOne({ _id: req.params.id });
        res.status(200).json({ success: true, data: quote });
    } catch (error) {
        next(error);
    }
}


module.exports = admin;
