const router = require('express').Router()
const controller = require('../controller/dessertController')

// router for dessert
router.get('/', controller.getAllDessert);
router.get('/:id', controller.getDessertById);
router.delete('/:id', controller.deleteDessertById);

module.exports = router; 