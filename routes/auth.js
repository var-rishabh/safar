const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get("/login", (req, res) => {
    res.render("login");
})
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/auth/login")
})
router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"],
}),
    (req, res) => {
        res.send("login with google")
    });

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/");
});

module.exports = router