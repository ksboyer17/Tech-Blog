const router = require('express').Router();
const {Post, User, Comment} = require('../../models');
const sequelize = require ('../../config/connection');
const withAuth = require('../../utils/auth')
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
            },
            {
                model: User,
                attributes: ['username']
            }
        ] 
        })
        .then(dbPostData => {
            const post = dbPostData.map(post => post. get ({ plain: true}));
            res.render('dashboard', {post, loggedIn :true});
        })
        .catch(err => {
            console.log(error);
            res.status(500).json(error);
        });
    });