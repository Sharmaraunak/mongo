var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
});

let customerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Customer", customerSchema);
