let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).send({ message: 'Un mensaje salvaje' });
});

module.exports = router;
