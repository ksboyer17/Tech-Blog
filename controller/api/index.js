//combines user post and comments routes

const router = require('express').Router();
const userRoutes = require('./userroutes.js');
const postRoutes = require('./postroutes');
const commentRoutes = require('./commentroutes');

// router.use('/user', userRoutes);

// router.use('/post', postRoutes);

// router.use('/comment', commentRoutes);

module.exports = router;