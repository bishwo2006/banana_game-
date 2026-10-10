// ============================================================
// bananaService.js
// Handles communication with the external Banana Quiz API.
// ============================================================

const BANANA_API_URL =
  'https://marcconrad.com/uob/banana/api.php?out=json&base64=no';

/**
 * Fetch a question from the external Banana Quiz API.
 */
async function fetchBananaQuestion() {
  const response = await fetch(BANANA_API_URL);

  if (!response.ok) {
    throw new Error(
      `Banana API returned HTTP ${response.status}`
    );
  }

  const data = await response.json();

  if (!data.question || data.solution === undefined) {
    throw new Error('Invalid response received from Banana API');
  }

  return {
    question: data.question,
    solution: Number(data.solution)
  };
}

module.exports = {
  fetchBananaQuestion
};