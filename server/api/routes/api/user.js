var express = require('express');
var router = express.Router();
import user from '../../controller/user'

/* GET users listing. */
router.get('/', user.login)

module.exports = router;
