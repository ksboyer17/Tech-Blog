const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get('/', withAuth,(req, res)=> {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title', 
            'created_date',
            'post_text'
        ],
        include: [{
                model: Comment,
                arritbutes: ['id', 'post_test','created_date','user_id'],
                include: {
                    model:User,
                    attributes: ['username']
                }
        }] 
    })
})