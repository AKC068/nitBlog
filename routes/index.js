const express = require("express"),
			router  = express.Router(),
			Blog    = require("../models/blogModel");
			// bodyParser = require("body-parser");
//

// router.use(bodyParser.urlencoded({extended:true}));

// ==================================================
//          HOMEPAGE ROUTE
// ==================================================

router.get("/", function (req, res) {
	if (req.user) {
		Blog.find({}, function (err, blog) {
			if (err) {
				console.log(err);
			} else {
				res.render("index", {
					blogs: blog,
				});
			}
		});
	} else {
		res.render("landing");
	}
});

// ==================================================
//          BLOG ROUTES
// ==================================================

router.post("/", isLoggedIn, function (req, res) {
	const newPost = new Blog ({
		blogtitle: req.body.blogtitle,
		blogbody: req.body.blogbody,
	});
	Blog.create(newPost, function (err, blog) {
		if(err){
			console.log(err);
		} else {
			blog.user_name.id = req.user._id;
			blog.user_name.fname = req.user.fname;
			blog.user_name.lname = req.user.lname;
			blog.save();
			res.redirect("/");
		}
	})
});

// ==================================================

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next;
	}
	res.redirect("/login");
}


module.exports = router;