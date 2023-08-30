'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    up_votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER,
    author_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};