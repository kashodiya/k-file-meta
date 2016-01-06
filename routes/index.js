var express = require('express');
var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/fileanalyse/', upload.single('0'), function(req, res, next) {
  res.json({fileSize: req.file.size});
});


module.exports = router;
