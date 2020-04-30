import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import ItemController from '../controllers/ItemController';

export default () => {
  const api = Router();

  //GET /api/item
  api.get('/', catchAsync(ItemController.findAll));

  //GET /api/item/:id
  api.get('/:id', catchAsync(ItemController.getOne));
  
  return api;
};
