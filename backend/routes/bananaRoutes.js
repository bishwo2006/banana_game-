// ============================================================
// bananaRoutes.js
// Routes for Banana Quiz interoperability.
// ============================================================

const express = require('express');

const {
  getBananaQuestion
} = require('../controllers/bananaController');

const router = express.Router();

/**
 * GET /api/banana/question
 */
router.get('/question', getBananaQuestion);

module.exports = router;