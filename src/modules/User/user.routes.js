import { Router } from 'express';

import verify from '../../middleware/verify';

import UserController from './user.controller'

const router = Router();
router.post('/', UserController.createUser);
router.post('/login/user', UserController.loginUser);
// router.post('/login/staff', UserController.loginStaff);
// router.post('/samples', verify, UserController.createSample);
// router.post('/tests', verify, UserController.createTest);
// router.post('/lab/order', verify, UserController.bookTest);
router.get('/', verify, UserController.getUsers);
// router.get('/samples', verify, UserController.getSamples);
// router.get('/tests', verify, UserController.getTests);
// router.get('/sample/:id', verify, UserController.getSample);
// router.get('/samples-to-collect', verify, UserController.getSamplesToCollect);

export default router;
