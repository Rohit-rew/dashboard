const express = require("express");
const router = express.Router();

const {
  getNotes,
  postNotes,
  deleteNotes,
  updateNotes,
} = require("../controlers/notescontroler");

router.get("/", getNotes);
router.post("/", postNotes);
router.delete("/:id", deleteNotes);
router.put("/:id", updateNotes);

module.exports = router;
