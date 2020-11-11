const Score = require("../models/Score");

async function createScore(scoreReq) {
  scoreDb = await Score.findByEmailAndGame(scoreReq.email, scoreReq.game);

  if (!scoreDb) {
    console.log("não tinha score");
    scoreReq.save();
    return scoreReq;
  }

  if (parseInt(scoreReq.score) > parseInt(scoreDb.score)) {
    console.log("marcou novo score");
    scoreDb.score = scoreReq.score;
    scoreDb.save();
    return scoreDb;
  }

  console.log("antigo score fica");
  return scoreDb;
}

async function getScoresByGame(game) {
  const scores = await Score.findByGame(game);
  return scores;
}

module.exports = { createScore, getScoresByGame };
