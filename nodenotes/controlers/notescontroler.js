const Notes = require("../models/notes");

const getNotes = async (req, res) => {
  let notes = await Notes.find({});
  res.status(200).json({ success: true, data: notes });
};

const postNotes = async (req, res) => {
  const notes = await Notes.create(req.body);
  res.status(200).json({ success: true, addednote: notes });
  res.end();
};

const deleteNotes = async (req, res) => {
  let id = req.params.id;
  await Notes.findByIdAndDelete(id);
  res.end();
};

const updateNotes = async (req, res) => {
  let checkedupdate = req.body.checked;
  let id = req.params.id;
  console.log(checkedupdate);
  let note = await Notes.findByIdAndUpdate(id, req.body);
  res.end();
};

module.exports = {
  getNotes,
  postNotes,
  deleteNotes,
  updateNotes,
};
