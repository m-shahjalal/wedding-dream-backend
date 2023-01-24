const auth = require("./auth");
const gallery = require("./gallery");
const team = require("./team");
const testimonial = require("./testimonial");
const package = require("./package");
const cover = require("./coverImage");
const admin = require("./admin");
const booking = require("./booking");

const routes = [
    {
        path: "/auth",
        router: auth,
    },
    {
        path: "/gallery",
        router: gallery,
    },
    {
        path: "/team",
        router: team,
    },
    {
        path: "/testimonial",
        router: testimonial,
    },
    {
        path: "/package",
        router: package,
    },
    {
        path: "/cover",
        router: cover,
    },
    {
        path: "/booking",
        router: booking,
    },
    {
        path: "/admin",
        router: admin,
    },
];

module.exports = (app) => {
    routes.forEach((route) => {
        app.use(route.path, route.router);
    });
};
