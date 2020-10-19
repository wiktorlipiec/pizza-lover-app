import express from 'express';

const userRouter = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
userRouter.post('/');

export default userRouter;