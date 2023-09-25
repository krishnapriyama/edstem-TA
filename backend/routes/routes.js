const router = require("express").Router();
const { surveydetails,table} = require("../controller/controller");

router.post("/surveydetails", surveydetails);
router.post("/table", table);

module.exports = router;