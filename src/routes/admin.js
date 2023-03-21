const express = require('express');
const adminController = require('../controller/admin');
const authGuard = require('../middleware/authGuard');

const router = express.Router();

router.use(authGuard);
/* GET users listing. */
router.get('/package', adminController.getPackage);
router.post('/package', adminController.addPackage);
router.put('/package/:id', adminController.updatePackage);
router.delete('/package/:id', adminController.deletePackage);

router.get('/gallery', adminController.getGallery);
router.post('/gallery', adminController.addGallery);
router.put('/gallery/:id', adminController.updateGallery);
router.delete('/gallery/:id', adminController.deleteGallery);

router.get('/video', adminController.getVideo);
router.post('/video', adminController.addVideoGallery);
router.put('/video/:id', adminController.updateVideo);
router.delete('/video/:id', adminController.deleteVideo);

router.get('/team', adminController.getTeam);
router.post('/team', adminController.addTeam);
router.put('/team/:id', adminController.updateTeam);
router.delete('/team/:id', adminController.deleteTeam);

router.get('/testimonial', adminController.getTestimonial);
router.post('/testimonial', adminController.addTestimonial);
router.put('/testimonial/:id', adminController.updateTestimonial);
router.delete('/testimonial/:id', adminController.deleteTestimonial);

router.get('/booking', adminController.getBooking);
router.post('/booking', adminController.addBooking);
router.put('/booking/:id', adminController.updateBooking);
router.delete('/booking/:id', adminController.deleteBooking);

router.get('/about', adminController.getAbout);
router.put('/about/:id', adminController.updateAbout);

router.get('/cover', adminController.getCoverImage);
router.post('/cover', adminController.addCoverImage);
router.put('/cover/:id', adminController.updateCoverImage);
router.delete('/cover/:id', adminController.deleteCoverImage);

module.exports = router;
