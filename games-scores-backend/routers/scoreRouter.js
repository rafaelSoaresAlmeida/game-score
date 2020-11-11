const Score = require("../models/Score");
const scoreService = require("../services/scoreService");

module.exports = (app) => {
  app.post("/score", async (req, res) => {
    try {
      const scoreResult = await scoreService.createScore(new Score(req.body));
      res.send({ scoreResult });
    } catch (error) {
      console.log("error---------> " + error);
      res.status(400).send({ error: error.message });
    }
  });

  app.get("/score/:game", async (req, res) => {
    const scores = await scoreService.getScoresByGame(req.param("game"));
    res.send({ scores });
  });
};
