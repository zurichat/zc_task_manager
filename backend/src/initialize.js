import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import notFoundHandler from './middleware/application/notFoundHandler.js';
import errorHandler from './middleware/application/errorHandler.js';
import config from './config/index.js';
import routes from './routes/index.js';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from'swagger-jsdoc'

const app = express();

//options object for swaggerjs
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Zuri Chat Task Manager',
      version: '1.0.0',
      description: 'An api for creating task on zuri chat',
    },
    servers: [
      {
        //update to production url
        url: 'https://zuri-chat-task-manager.onrender.com',
      },
    ],
  },
  apis: ['src/routes/*.js'],
};

const specs = swaggerJsDoc(options);


app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan(config.env.isProduction ? 'common' : 'dev'));
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
