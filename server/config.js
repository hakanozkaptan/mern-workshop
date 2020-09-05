const db =
  process.env.MONGODB_URI ||
  'mongodb+srv://hakano:ozkaptan@cluster0.hk9yg.mongodb.net/test?retryWrites=true&w=majority' ||
  'mongodb://localhost:27017/mernApp';

exports.db = db;
