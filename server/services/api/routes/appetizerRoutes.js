const router = require('express').Router()
const controller = require('../controller/appetizerController')

// router for appetizer
router.get('/', controller.getAllAppetizer);
router.get('/:id', controller.getAppetizerById);
router.delete('/:id', controller.deleteAppetizerById);

module.exports = router; 