const router = require('express').Router();
const {Post, User, Comment} = require('../../models');
const sequelize = require ('../../config/connection');
//creates the post 
const { post } = require('./userroutes');


//getting users
router.get('/', (req, res) => {
    post.findAll({
        attributes: [
            'id',
            'title', 
            'created_date',
            'post_text'
        ],
        order:[['comeback to this']],
        include: {
            model: User,

        }
    },
        {
            model: Comment,
            attributes: ['id', 'comment', 'user_id', 'created_date'],
            include: {
                model: User,
                attributes: ['username', 'twitter', 'github'] 
        }
    })
})