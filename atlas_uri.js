require("dotenv").config();

module.exports = uri =
  `mongodb+srv://${process.env.dbUSER}:${process.env.dbPASS}@cluster0.r8rvhhl.mongodb.net/?retryWrites=true&w=majority`;