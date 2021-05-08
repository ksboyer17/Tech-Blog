const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get('/',(req, res)=> {
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

module.exports = router;