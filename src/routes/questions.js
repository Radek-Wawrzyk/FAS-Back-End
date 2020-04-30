import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import questionController from '../controllers/questionController';
import JwtAuth from '../middlewares/auth';

export default () => {
  const api = Router();

  // POST /api/questions
  api.post('/', catchAsync(questionController.sendQuestion));

  // GET /api/questions GUARDED
  api.get('/', [JwtAuth, catchAsync(questionController.getAll)]);

  // GET /api/questions/:id GUARDED
  api.get('/:id', [JwtAuth, catchAsync(questionController.getOne)]);

  // PUT /api/questions/:id GUARDED
  api.put('/:id', [JwtAuth, catchAsync(questionController.saveQuestion)]);

  return api;
};
