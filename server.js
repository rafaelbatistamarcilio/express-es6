import Application from "express";
import bodyParser from 'body-parser';
import { Api } from './api/api.js';
import { ErrorHandler } from "./utils/error-handler.js";
import { RouterHandler } from "./utils/router-handler.js";
import { OnApplicationStart } from "./config/on-start.js";

export const app = Application();
app.use(bodyParser.json());
app.use('/api', Api);
app.use(RouterHandler);
app.use(ErrorHandler);
app.listen(3000, OnApplicationStart);