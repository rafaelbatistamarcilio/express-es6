import Application from 'express';
import { TesteController } from './controllers/teste.controller.js';

export const Api = Application.Router();
Api.use('/teste', TesteController);