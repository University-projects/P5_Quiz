var express = require('express');
var router = express.Router();
const {models} = require("../public/models/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes', function(req, res, next) {
    let quizzes = [];

    models.quiz.findAll()
        .each(quiz=> {
            quizzes.push(quiz.get({plain:true}));
        })
        .then(() => {
            res.render('quizzes', {quizzes});
        })
});

module.exports = router;
