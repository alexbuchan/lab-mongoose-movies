/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Celebrity = require('../models/celebritiesModel');
mongoose.connect('mongodb://localhost/celebrityDB');

const celebritiesList = [
  {
    name: "Angus Young",
    imageUrl: "http://images2.fanpop.com/images/photos/6000000/Angus-angus-young-6053357-418-466.jpg",
    occupation: "guitarist",
    catchphrase: "whauuuuu!",
  },
  {
    name: "Bill Bailey",
    imageUrl: "https://www.driving.co.uk/s3/st-driving-prod/uploads/2016/10/bill-bailey-mamm.jpg",
    occupation: "Comedian",
    catchphrase: "Ooouuuudd!"
  },
  {
    name: "Philip Defranco",
    imageUrl: "http://gazettereview.com/wp-content/uploads/2016/04/philip-defranco.png",
    occupation: "Independent News Anchor",
    catchphrase: "What's up you beautiful bastards!"
  },
];

Celebrity.create(celebritiesList, (err, docs) => {
  if (err) { throw err; }

  docs.forEach((celebrityDocument) => {
    console.log(celebrityDocument.name);
  });
  mongoose.connection.close();
});
