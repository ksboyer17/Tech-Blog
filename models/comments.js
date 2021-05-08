const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};


Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {//will need foriegn key
      type: DataTypes.INTEGER,
      references: {model:"user",key:"id"},
    },
    post_id: {//will need foriegn key
        type: DataTypes.INTEGER,
        references: {model:"post",key:"id"},
      },
    dateCreated: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        len: [8],
      },
    },
  },
  {
   
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
