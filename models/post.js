const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};


Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {//will need foriegn key
      type: DataTypes.INTEGER,
      references: {model:"user",key:"id"},
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
