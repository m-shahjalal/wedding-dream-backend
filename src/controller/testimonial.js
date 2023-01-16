const Testimonial = require('../Models/Testimonial')

const testimonial = {}

testimonial.getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find()
        res.status(200).json({
            success: true,
            data: testimonials,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = testimonial