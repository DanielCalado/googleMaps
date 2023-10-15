const router = require("express").Router()
const userController = require("../controllers/userController");

router.route("/local").post((req, res)=> userController.create(req,res));
router.route("/local").get((req, res) => userController.getAll(req, res));
router.route('/users/:id').delete(userController.deleteMap);
router.route('/users/:id').put((req,res) => userController.updateMap(req,res));
module.exports = router;