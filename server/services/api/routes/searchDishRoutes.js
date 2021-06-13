const router = require('express').Router()
const controller = require('../controller/searchDishController')

// router for search
router.get('/:searchQuery', controller.searchDish);
router.get('/', controller.getAllDish);

module.exports = router; 