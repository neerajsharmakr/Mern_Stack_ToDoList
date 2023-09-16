const ToDoModel = require("../model/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text })
    .then((resp) => {
      console.log("Added Successfully");
      res.status(200).json({
        status: true,
        message: "Added Successfully",
        data: resp,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Update succesfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Delete succesfully..."))
    .catch((err) => console.log(err));
};
