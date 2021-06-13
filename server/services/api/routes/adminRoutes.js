const router = require('express').Router()
const controller = require('../controller/adminController')

// router for admin
router.post('/', controller.addRecipe);
router.put('/appetizer/:id', controller.updateAppetizerById);
router.put('/dessert/:id', controller.updateDessertById);
router.put('/maincourse/:id', controller.updateMaincourseById);
router.get('/appetizer', controller.getAppetizerWithUser);
router.get('/dessert', controller.getDessertWithUser);
router.get('/maincourse', controller.getMaincourseWithUser);
router.post('/kontributor', controller.insertKontributor);
router.get('/kontributor', controller.getKontributor);
router.delete('/kontributor/:id', controller.deleteKontributorById);

module.exports = router; 