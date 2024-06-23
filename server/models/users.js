const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({ // Correction de Schema au lieu de Shema
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const UsersModel = mongoose.model('User', UsersSchema); // Correction de "users" en "User" pour le nom du modèle
module.exports = UsersModel;
