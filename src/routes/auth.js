import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import passport from 'passport';
import jwtAuth from '../middlewares/auth';

export default () => {
  const api = Router();

  // POST /api/auth/register
  api.post('/register', AuthController.register);

  // POST /api/auth/login
  api.post('/login', passport.authenticate('local', { session: false }), AuthController.login);

  // POST /api/auth/test
  api.post('/test', jwtAuth, AuthController.test);

  return api;
};
