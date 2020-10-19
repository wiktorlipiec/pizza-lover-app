import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { UserModel } from '../models/User/User';
import IUser from '../models/User/IUser';

export const UserController = async (req: Request, res: Response) => {
    // check errors
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } : IUser = req.body;
};