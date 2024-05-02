const express = require("express");

const reviews = require("../models/reviews");

const {
  handleRequestedPrompt
} = require("../controllers/chat")

const contactUS = require("../models/contactUs");
const constactUs = require("../models/contactUs");

const router = express.Router();

router.post("/chat", handleRequestedPrompt);

router.get("/getRandomReviews", async (req, res) => {

  try {
    const randomReviews = await reviews.aggregate([{
      $sample: {
        size: 10
      }
    }]);

    res.json(randomReviews)
  } catch (error) {
    console.error('Error fetching random data:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
})

router.post("/contactUs", async (req, res) => {

  const {
    name,
    email,
    message,
  } = req.body;

  try {

    await constactUs.create({
      name,
      email,
      message
    })

  } catch (e) {
    console.log(e);
  }

  res.end();

})



module.exports = router;