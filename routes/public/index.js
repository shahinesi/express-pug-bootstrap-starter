const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("public/index");
});

router.post('/SUBMITNAME', function (req, resorg) {

});


module.exports = router;
