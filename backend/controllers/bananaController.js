// ============================================================
// bananaController.js
// Handles HTTP requests related to Banana Quiz questions.
// ============================================================

const {
  fetchBananaQuestion
} = require('../services/bananaService');

/**
 * GET /api/banana/question
 *
 * Returns one question from the external Banana API.
 */
async function getBananaQuestion(req, res) {
  try {
    const question = await fetchBananaQuestion();

    res.status(200).json({
      success: true,
      data: question
    });

  } catch (error) {

    console.error(
      'Banana API error:',
      error.message
    );

    res.status(502).json({
      success: false,
      error: 'Unable to retrieve banana question'
    });
  }
}

module.exports = {
  getBananaQuestion
};
