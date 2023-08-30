'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_posts.init({
    userId: DataTypes.UUID,
    postId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'user_posts',
  });
  return user_posts;
};