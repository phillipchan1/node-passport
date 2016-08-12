var express = require('express');
var router = express.Router();
var passport = require('passport');

// login route
router.get(
	'/login/github',
	passport.authenticate('github')
);

router.get(
	'/github/return',
	passport.authenticate('github', 
		{
			failureRedirect: '/'
		}
	), 
	function(req, res) {
		// success authentication
		res.redirect('/profile');
	}
);

// logging out
router.get(
	'/logout',
	function(req, res) {
		req.logout();
		res.redirect('/');
	}
);

module.exports = router;