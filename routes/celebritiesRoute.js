/*jshint esversion: 6*/
var express = require('express');
const Celebrity = require('../models/celebritiesModel');
var router = express.Router();

//A slash signifies index relative to route we're in. This means celebrities
router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, celebrityData) => {
    if (err) { return next(err); }
    //name of path towards specific file which holds the html. Relative to views
    res.render('celebrities/index', {celebrityData});
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const newCelebrity = new Celebrity({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  });

  console.log(req.body);

  const celebrityObject = new Celebrity(newCelebrity);
  celebrityObject.save((err) => {
    if (err) { res.render('celebrities/new'); }
    else { res.redirect('/celebrities'); }
  });

});

//This means celebrities/:id
router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render('./celebrities/show', {celebrity});
  });
});

module.exports = router;
