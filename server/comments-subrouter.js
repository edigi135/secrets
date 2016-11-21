const express = require('express');
const router = express.Router({
  mergeParams: true // so these routes can receive "secretId"
});
module.exports = router;

const models = require('../db/models');
const Secret = models.Secret;
const Comment = models.Comment;

router.get('/', function(req, res, next) {

  Secret.findById(+req.params.secretId, { include: [Comment] })
    .then(function(foundSecret) {
      res.send(foundSecret.comments);
    })
    .catch(next);

});


router.post('/', function(req, res, next) {
  // add comment to database
  Comment.create({
      text: req.body.text,
      secretId: req.params.secretId
    })
    // rerender page?
    .then(function() {
      res.redirect(`/secrets/${req.params.secretId}`);
    })
    .catch(next);
});
