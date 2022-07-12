const express  = require("express"),
			router   = express.Router(),
			passport = require("passport"),
			User     = require("../models/userModel");

// ==================================================
//          SIGNUP ROUTES
// ==================================================

router.get("/signup", function (req, res, next) {
	if(req.user) {
		res.redirect("/");	
	} else {
		res.render("signup");
	}
});

router.post("/signup", function (req, res) {
	const newUser = new User({
		fname: req.body.fname,
		mname: req.body.mname,
		lname: req.body.lname,
		username: req.body.username,
	});
	User.register(newUser, req.body.password, function (err) {
		if (err) {
			console.log(err);
			return res.render("signup");
		}
		passport.authenticate("local")(req, res, function () {
			res.redirect("/");
		});
	});
});

// ==================================================
//          LOGIN ROUTES
// ==================================================

router.get("/login", function (req, res) {
	if(req.user) {
		res.redirect("/");	
	} else {
		res.render("login");
	}
});

router.post("/login", passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
	}),
	function (req, res) {}
);

// ==================================================
//          LOGOUT ROUTE
// ==================================================

router.get("/logout", function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		} else {
			res.redirect("/login");
		}
	});
});

// ==================================================

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next;
	}
	res.redirect("/login");
}

module.exports = router;