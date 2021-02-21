const express = require("express");
const router = express.Router();

router.use(require("../api/api_teachers"));
router.use(require("../api/api_course"));

module.exports = router;