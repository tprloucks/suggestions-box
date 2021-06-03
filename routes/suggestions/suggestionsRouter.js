var express = require('express');
var router = express.Router();

let {
  getAllSuggestions,
  createSuggestion,
  updateSuggestionById,
  deleteSuggestionByID,
  getSuggestionById
} = require("./controller/suggestionsController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/get-all-suggestions", getAllSuggestions)
router.get("/get-suggestion-by-id/:id", getAllSuggestions)
router.post("/create-suggestion", createSuggestion )
router.put("/update-suggestion-by-id/:id", updateSuggestionById)
router.delete("/delete-suggestion-by-id", deleteSuggestionByID)
module.exports = router;
